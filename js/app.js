/* DSFM Midterm Revision — application logic (vanilla JS, file:// friendly).
   Global data objects (loaded before this file):
     DSFM_SLIDES[lec], DSFM_META[lec], DSFM_MIDTERM, DSFM_QUESTIONS, DSFM_FORMULAS, DSFM_CONCEPTS */
(function () {
  'use strict';

  /* ---------------- storage ---------------- */
  var KEY = 'DSFM_MIDTERM_REVISION_v1';
  var VERSION = 1;

  function defaultState() {
    return {
      v: VERSION,
      answers: {},
      selfGrades: {},
      questionProgress: {},
      notes: {},
      bookmarks: {},
      slideProgress: {},
      concepts: {},          // conceptId -> {reviewed, ts}
      mcqSets: { seed: null, sizes: {} },  // sizes: {"50": {completed, ts, snapshot}}
      settings: { theme: 'light', font: 16, renderMath: true, showImages: true },
      lastLocation: null,
      lastSaved: null,
      recentPages: [],
      filters: { bank: {}, practice: {}, sets: {} },
      mockExamAttempts: [],
      practiceStats: { attempted: 0, correct: 0, partial: 0, wrong: 0 }
    };
  }

  var S = defaultState();
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      S = deepMerge(defaultState(), parsed);
      S.v = VERSION;
    }
  } catch (e) { console.warn('Failed to load saved state:', e); }

  function deepMerge(base, over) {
    var out = Array.isArray(base) ? base.slice() : Object.assign({}, base);
    Object.keys(over || {}).forEach(function (k) {
      var v = over[k];
      if (v && typeof v === 'object' && !Array.isArray(v) && base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) {
        out[k] = deepMerge(base[k], v);
      } else { out[k] = v; }
    });
    return out;
  }

  var saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 400);
  }
  function saveNow() {
    var stamp = new Date().toLocaleTimeString();
    S.lastSaved = new Date().toISOString();
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { console.warn('Save failed', e); }
    var elx = document.getElementById('save-indicator');
    if (elx) elx.textContent = 'Saved locally at ' + stamp;
  }

  /* ---------------- utils ---------------- */
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  /* Rich text: split solution text into paragraphs / bullet / numbered lists.
     LaTeX delimiters \( \) are preserved for MathJax; everything else is HTML-escaped. */
  function richText(str) {
    if (!str) return '';
    var lines = String(str).split('\n').map(function (l) { return l.trim(); }).filter(function (l) { return l.length; });
    var html = '', open = null;
    function closeList() { if (open) { html += '</' + open + '>'; open = null; } }
    lines.forEach(function (line) {
      var mBullet = /^[•\-\u2022]\s+(.*)$/.exec(line);
      var mNum = /^(\d+)[.)]\s+(.*)$/.exec(line);
      if (mBullet) {
        if (open !== 'ul') { closeList(); html += '<ul class="rich-list">'; open = 'ul'; }
        html += '<li>' + esc(mBullet[1]) + '</li>';
      } else if (mNum) {
        if (open !== 'ol') { closeList(); html += '<ol class="rich-list">'; open = 'ol'; }
        html += '<li>' + esc(mNum[2]) + '</li>';
      } else {
        closeList();
        html += '<p>' + esc(line) + '</p>';
      }
    });
    closeList();
    return html;
  }
  function el(tag, cls, html) {
    var d = document.createElement(tag);
    if (cls) d.className = cls;
    if (html != null) d.innerHTML = html;
    return d;
  }
  function pageKey(lec, n) { return 'L' + lec + '-P' + n; }
  function allPages(lec) { return DSFM_SLIDES[lec] ? DSFM_SLIDES[lec].pages : []; }
  function getSlide(lec, n) {
    var pages = allPages(lec);
    for (var i = 0; i < pages.length; i++) if (pages[i].n === n) return pages[i];
    return null;
  }
  function getMeta(lec, n) {
    var m = DSFM_META[lec] && DSFM_META[lec].pages ? DSFM_META[lec].pages[n] : null;
    return m || {};
  }
  function lectureTitle(lec) { return DSFM_SLIDES[lec] ? DSFM_SLIDES[lec].title : ('Lecture ' + lec); }
  function questionsFor(lec, n) {
    return DSFM_QUESTIONS.filter(function (q) {
      return (String(q.lec) === String(lec) && q.pg && q.pg.indexOf(n) !== -1);
    });
  }
  function byId(qid) {
    for (var i = 0; i < DSFM_QUESTIONS.length; i++) if (DSFM_QUESTIONS[i].id === qid) return DSFM_QUESTIONS[i];
    return null;
  }
  function lsDays(iso) { return iso ? new Date(iso).toLocaleString() : '—'; }

  function conceptOf(lec, n) {
    if (window.dsfmConceptOf) return window.dsfmConceptOf(lec, n);
    return null;
  }
  function conceptPages(c) {
    if (!c) return [];
    return allPages(c.id.split('-')[0].slice(1)).filter(function (p) { return p.n >= c.from && p.n <= c.to; });
  }
  function conceptProgress(c) {
    var pages = conceptPages(c);
    var rev = pages.filter(function (p) {
      var k = pageKey(c.id.charAt(1), p.n);
      return S.slideProgress[k] && S.slideProgress[k].reviewed;
    }).length;
    return { reviewed: rev, total: pages.length, done: rev === pages.length && pages.length > 0 };
  }
  function conceptIndex(c) {
    var list = DSFM_CONCEPTS[c.id.charAt(1)] || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === c.id) return i + 1;
    return 0;
  }
  function conceptByIndex(lec, ci) { return (DSFM_CONCEPTS[String(lec)] || [])[ci - 1] || null; }
  /* Next/previous concept across the whole course chain (C7 of L1 → C1 of L2 …). */
  function adjacentConcept(lec, ci, dir) {
    var L = String(lec);
    if (dir > 0) {
      if (ci < (DSFM_CONCEPTS[L] || []).length) return { lec: L, ci: ci + 1 };
      if (Number(L) < 6) return { lec: String(Number(L) + 1), ci: 1 };
      return null;
    }
    if (ci > 1) return { lec: L, ci: ci - 1 };
    if (Number(L) > 1) {
      var P = String(Number(L) - 1);
      return { lec: P, ci: (DSFM_CONCEPTS[P] || []).length };
    }
    return null;
  }
  /* Mark a concept reviewed; if it was not already reviewed, jump to the next concept.
     If it was already reviewed, clicking again simply unmarks it (no jump). */
  function markConceptAndNext(lec, ci, c) {
    var was = !!(S.concepts[c.id] && S.concepts[c.id].reviewed);
    toggleConceptReviewed(lec, c.from);
    if (was) { render(); return; }
    var nx = adjacentConcept(lec, ci, 1);
    if (nx) { navigate('#/concept/' + nx.lec + '/' + nx.ci); render(); }
    else render();
  }

  var TYPE_LABEL = { mcq: 'MCQ', tf: 'True/False', short: 'Short answer', calc: 'Calculation', long: 'Long answer' };
  var DIFF_LABEL = { easy: 'Easy', medium: 'Medium', hard: 'Hard' };

  function topicList() {
    var t = {};
    DSFM_QUESTIONS.forEach(function (q) { t[q.topic] = (t[q.topic] || 0) + 1; });
    return Object.keys(t).sort();
  }

  /* ---------------- math ---------------- */
  function typeset(container, done) {
    function finish() { if (done) { var d = done; done = null; try { d(); } catch (e) {} } }
    if (!S.settings.renderMath) { finish(); return; }
    if (window.MathJax && MathJax.typesetPromise) {
      try { MathJax.typesetPromise([container]).then(finish).catch(finish); } catch (e) { finish(); }
    } else {
      finish();
    }
  }
  /* Scroll to a concept-view page anchor AFTER MathJax reflow (depths shift once typeset). */
  function flushPendingAnchor() {
    var pa = window.__dsfmPendingAnchor;
    if (!pa) return;
    window.__dsfmPendingAnchor = null;
    var t = document.getElementById('cv-' + pa.lec + '-p' + pa.page);
    if (t) t.scrollIntoView({ block: 'start' });
    setTimeout(function () {
      var t2 = document.getElementById('cv-' + pa.lec + '-p' + pa.page);
      if (t2) t2.scrollIntoView({ block: 'start' });
    }, 500);
  }
  function mathHtml(latex) {
    return '<span class="math">\\(' + esc(latex) + '\\)</span>';
  }

  /* ---------------- review toggles (used by buttons AND keyboard) ---------------- */
  function toggleSlideReviewed(lec, n) {
    var k = pageKey(lec, n);
    var cur = S.slideProgress[k] && S.slideProgress[k].reviewed;
    S.slideProgress[k] = { reviewed: !cur, ts: new Date().toISOString() };
    save();
  }
  function toggleConceptReviewed(lec, n) {
    var c = conceptOf(lec, n);
    if (!c) return;
    var on = !(S.concepts[c.id] && S.concepts[c.id].reviewed);
    S.concepts[c.id] = { reviewed: on, ts: new Date().toISOString() };
    var lecId = c.id.charAt(1);
    for (var p = c.from; p <= c.to; p++) {
      S.slideProgress[pageKey(lecId, p)] = { reviewed: on, ts: new Date().toISOString() };
    }
    save();
  }

  /* ---------------- render helpers ---------------- */
  function solutionBlock(innerHtml, label) {
    return '<details class="solution"><summary>' + esc(label || 'Show solution') + '</summary><div class="solution-body">' + innerHtml + '</div></details>';
  }

  function renderBlocks(blocks, container) {
    (blocks || []).forEach(function (b) {
      if (b.k === 'formula') {
        var d = el('div', 'block formula-block');
        d.innerHTML =
          '<div class="formula-name">' + esc(b.name || '') + '</div>' +
          '<div class="formula-line">' + mathHtml(b.latex || '') + '</div>' +
          (b.note ? '<div class="formula-note">' + esc(b.note) + '</div>' : '');
        container.appendChild(d);
      } else if (b.k === 'table') {
        var t = el('div', 'block');
        var html = b.caption ? '<div class="table-caption">' + esc(b.caption) + '</div>' : '';
        html += '<div class="table-wrap"><table><thead><tr>';
        (b.headers || []).forEach(function (h) { html += '<th>' + esc(h) + '</th>'; });
        html += '</tr></thead><tbody>';
        (b.rows || []).forEach(function (r) {
          html += '<tr>';
          r.forEach(function (c) { html += '<td>' + esc(c) + '</td>'; });
          html += '</tr>';
        });
        html += '</tbody></table></div>';
        t.innerHTML = html;
        container.appendChild(t);
      } else if (b.k === 'callout') {
        var style = b.style || 'key';
        var c = el('div', 'callout callout-' + style);
        c.innerHTML = (b.title ? '<strong>' + esc(b.title) + '</strong> ' : '') + esc(b.text || '');
        container.appendChild(c);
      } else if (b.k === 'code') {
        container.appendChild(el('pre', 'block code-block', esc(b.text || '')));
      } else if (b.k === 'figure') {
        var f = el('div', 'block figure-block');
        f.innerHTML = '<div class="figure-title">' +
          (b.name ? esc(b.name) + ' — ' : '') + 'Figure</div>' +
          '<div class="figure-desc">' + esc(b.desc || '') + '</div>' +
          (b.point ? '<div class="figure-point"><strong>Teaching point:</strong> ' + esc(b.point) + '</div>' : '');
        container.appendChild(f);
      }
    });
  }

  /* ---------------- answer widgets ---------------- */
  function renderAnswerWidget(q, opts) {
    opts = opts || {};
    var saved = S.answers[q.id] ? S.answers[q.id].value : null;
    var wrap = el('div', 'answer-widget');
    var uid = 'ans-' + q.id;
    if (q.type === 'mcq' || q.type === 'tf') {
      var group = el('div', 'options');
      (q.options || []).forEach(function (opt, i) {
        var id = uid + '-' + i;
        var label = el('label', 'option');
        var input = document.createElement('input');
        input.type = 'radio';
        input.name = uid;
        input.value = String(i);
        if (saved !== null && saved !== undefined && String(saved) === String(i)) input.checked = true;
        input.addEventListener('change', function () {
          setAnswer(q.id, i);
          if (!opts.suppressFeedback) showImmediateFeedback(q, wrap, i);
        });
        label.appendChild(input);
        label.appendChild(el('span', 'option-text', esc(opt)));
        group.appendChild(label);
      });
      group.addEventListener('dblclick', function (e) {
        e.preventDefault();
        revealMcqAnswer(q, wrap, group);
      });
      wrap.appendChild(group);
      wrap.appendChild(el('div', 'opt-hint muted', 'Double-click a choice to reveal the answer — green = correct, red = your wrong pick.'));
    } else if (q.type === 'short') {
      var inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'answer-input';
      inp.placeholder = 'Type your answer… (auto-saves)';
      inp.value = saved || '';
      inp.addEventListener('input', function () { setAnswer(q.id, inp.value); });
      wrap.appendChild(inp);
    } else {
      var ta = document.createElement('textarea');
      ta.className = 'answer-textarea';
      ta.rows = q.type === 'long' ? 6 : 3;
      ta.placeholder = 'Write your working / answer… (auto-saves)';
      ta.value = saved || '';
      ta.addEventListener('input', function () { setAnswer(q.id, ta.value); });
      wrap.appendChild(ta);
    }
    var fb = el('div', 'immediate-feedback');
    wrap.appendChild(fb);
    /* Show the stored auto-result immediately when a question loads with a saved answer. */
    if ((q.type === 'mcq' || q.type === 'tf') && saved !== null && saved !== undefined && !opts.suppressFeedback) {
      showImmediateFeedback(q, wrap, saved);
    }
    return wrap;
  }

  function setAnswer(qid, value) {
    S.answers[qid] = { value: value, ts: new Date().toISOString() };
    var q = byId(qid);
    var prog = S.questionProgress[qid] || {};
    prog.attempted = true; prog.ts = new Date().toISOString();
    /* Auto-save the result for objective questions: correct / wrong.
       Wrong ones stay in the retry list until answered correctly (later, anywhere). */
    if (q && q.answerIndex !== null) {
      var answered = value !== '' && value !== null && value !== undefined;
      if (answered) prog.result = (String(value) === String(q.answerIndex)) ? 'correct' : 'wrong';
      else delete prog.result;
    }
    S.questionProgress[qid] = prog;
    save();
    if (window.__dsfmAfterAnswer) { try { window.__dsfmAfterAnswer(qid); } catch (e) {} }
  }

  /* Questions currently marked wrong (objective types only — open answers cannot be auto-graded). */
  function wrongQuestions() {
    return DSFM_QUESTIONS.filter(function (q) {
      return q.answerIndex !== null && S.questionProgress[q.id] && S.questionProgress[q.id].result === 'wrong';
    });
  }

  /* Start a practice run containing exactly the wrong questions (shuffled).
     Answering one correctly anywhere removes it from the list automatically. */
  function startWrongRetry() {
    var pool = wrongQuestions().slice();
    if (!pool.length) return;
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = pool[i]; pool[i] = pool[j]; pool[j] = t;
    }
    S.filters.practice = S.filters.practice || {};
    S.filters.practice.lec = '';
    S.filters.practice.concept = '';
    S.filters.practice.retry = true;
    S.filters.practice.order = pool.map(function (q) { return q.id; });
    S.filters.practice.idx = 0;
    save();
    navigate('#/practice');
    render();
  }

  /* Double-click a choice: green the correct option, red any wrong selection, and open the solution. */
  function revealMcqAnswer(q, wrap, group) {
    var labels = group.querySelectorAll('label.option');
    labels.forEach(function (lab, idx) {
      lab.classList.remove('opt-correct', 'opt-wrong');
      if (idx === q.answerIndex) lab.classList.add('opt-correct');
      else {
        var input = lab.querySelector('input');
        if (input && input.checked) lab.classList.add('opt-wrong');
      }
    });
    var card = wrap.closest ? wrap.closest('.q-card') : null;
    if (card) {
      var det = card.querySelector('details.solution');
      if (det) det.open = true;
    }
  }

  function showImmediateFeedback(q, wrap, chosen) {
    var fb = wrap.querySelector('.immediate-feedback');
    if (!fb) return;
    if (q.answerIndex === null) { fb.innerHTML = ''; return; }
    var ok = String(chosen) === String(q.answerIndex);
    fb.innerHTML = ok
      ? '<span class="fb ok">✓ Correct</span>'
      : '<span class="fb bad">✗ Not quite — correct answer: ' + esc(q.answer) + '</span>';
  }

  function renderQuestionCard(q, mode) {
    var card = el('article', 'q-card');
    var head = el('div', 'q-head');
    head.innerHTML =
      '<span class="tag tag-lec">' + (q.lec ? 'L' + q.lec : 'MT') + '</span>' +
      '<span class="tag">' + esc(TYPE_LABEL[q.type] || q.type) + '</span>' +
      '<span class="tag">' + esc(DIFF_LABEL[q.difficulty] || q.difficulty) + '</span>' +
      (q.topic ? '<span class="tag tag-topic">' + esc(q.topic) + '</span>' : '') +
      (q.source === 'midterm example' ? '<span class="tag tag-mt">Midterm-linked</span>' : '') +
      (q.source === 'integrated' ? '<span class="tag tag-int">Integrated</span>' : '');
    card.appendChild(head);
    card.appendChild(el('div', 'q-prompt', esc(q.prompt)));
    card.appendChild(renderAnswerWidget(q, {}));

    var solHtml =
      '<div class="sol-grid">' +
      '<div class="sol-col"><h5>Model answer</h5><div class="model-answer">' + richText(q.answer) + '</div></div>' +
      '<div class="sol-col"><h5>Your answer</h5><div class="your-answer">' + esc(currentAnswerText(q)) + '</div></div>' +
      '</div>' +
      (q.solution ? '<div class="sol-steps"><h5>Step-by-step solution</h5>' + richText(q.solution) + '</div>' : '') +
      (q.explanation ? '<div class="sol-exp"><h5>Why it works</h5>' + richText(q.explanation) + '</div>' : '') +
      (q.mistakes ? '<div class="sol-mistakes"><h5>Common mistakes</h5>' + richText(q.mistakes) + '</div>' : '') +
      '<div class="sol-ref">Source: ' + esc(q.ref) + (q.midterm ? ' · links to ' + esc(q.midterm) : '') + '</div>';
    card.insertAdjacentHTML('beforeend', solutionBlock(solHtml, 'Show solution'));
    return card;
  }

  function currentAnswerText(q) {
    var a = S.answers[q.id];
    if (!a || a.value === '' || a.value === null || a.value === undefined) return '(no answer saved yet)';
    if (q.type === 'mcq' || q.type === 'tf') {
      var idx = parseInt(a.value, 10);
      return q.options && q.options[idx] ? q.options[idx] : String(a.value);
    }
    return String(a.value);
  }

  /* ---------------- MCQ sets ---------------- */
  var SET_SIZES = [50, 100, 150, 200, 300, 400];
  function objectiveQuestions() {
    return DSFM_QUESTIONS.filter(function (q) { return q.type === 'mcq' || q.type === 'tf'; });
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function masterSetOrder() {
    if (!S.mcqSets.seed) { S.mcqSets.seed = Math.floor(Math.random() * 1e9); save(); }
    var ids = objectiveQuestions().map(function (q) { return q.id; });
    var rand = mulberry32(S.mcqSets.seed);
    for (var i = ids.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = ids[i]; ids[i] = ids[j]; ids[j] = t;
    }
    return ids;
  }
  function setStats(size) {
    var order = masterSetOrder().slice(0, Math.min(size, objectiveQuestions().length));
    var answered = 0, correct = 0;
    order.forEach(function (id) {
      var q = byId(id); var a = S.answers[id];
      if (a && a.value !== '' && a.value !== null && a.value !== undefined) {
        answered++;
        if (q && q.answerIndex !== null && String(a.value) === String(q.answerIndex)) correct++;
      }
    });
    return { order: order, answered: answered, correct: correct, size: order.length };
  }
  function maybeCompleteSet(size) {
    var st = setStats(size);
    var rec = S.mcqSets.sizes[size] || {};
    if (!rec.completed && st.answered >= st.size && st.size > 0) {
      rec.completed = true; rec.ts = new Date().toISOString();
      rec.snapshot = { answered: st.answered, correct: st.correct };
    }
    rec.answered = st.answered; rec.correct = st.correct;
    S.mcqSets.sizes[size] = rec;
    save();
    return rec;
  }

  /* ---------------- views ---------------- */
  var viewEl;
  function navigate(hash) { location.hash = hash; }

  function render() {
    var hash = location.hash || '#/dashboard';
    var parts = hash.replace(/^#\//, '').split('/');
    var view = parts[0] || 'dashboard';
    viewEl.innerHTML = '';
    document.querySelectorAll('.nav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#/' + view || (view === 'slide' && a.getAttribute('href') === '#/browse'));
    });
    window.__dsfmAfterAnswer = null;
    switch (view) {
      case 'dashboard': renderDashboard(); break;
      case 'browse': renderBrowse(parts[1], parts[2]); break;
      case 'concept': renderConcept(parts[1], parts[2], parts[3]); break;
      case 'slide': renderSlide(parts[1], parseInt(parts[2], 10)); break;
      case 'bank': renderBank(); break;
      case 'practice': renderPractice(); break;
      case 'mock': renderMock(parts[1]); break;
      case 'midterm': renderMidterm(parts[1]); break;
      case 'sets': renderSets(parts[1]); break;
      case 'formulas': renderFormulas(); break;
      case 'stats': renderStats(); break;
      case 'settings': renderSettings(); break;
      default: renderDashboard();
    }
    if (window.__dsfmPendingAnchor) {
      typeset(viewEl, flushPendingAnchor);
      setTimeout(flushPendingAnchor, 1200);
    } else {
      typeset(viewEl);
      window.scrollTo(0, 0);
    }
  }

  /* ----- dashboard ----- */
  function renderDashboard() {
    var h = el('div', '');
    h.appendChild(el('h1', '', 'Dashboard'));
    var reviewed = Object.keys(S.slideProgress).filter(function (k) { return S.slideProgress[k].reviewed; }).length;
    var total = 0;
    ['1', '2', '3', '4', '5', '6'].forEach(function (l) { total += allPages(l).length; });
    var answered = Object.keys(S.answers).length;
    var setsDone = SET_SIZES.filter(function (s) { return S.mcqSets.sizes[s] && S.mcqSets.sizes[s].completed; }).length;

    var wrongN = wrongQuestions().length;
    var stats = el('div', 'stat-grid');
    stats.innerHTML =
      statCard('Slides reviewed', reviewed + ' / ' + total) +
      statCard('Questions answered', String(answered)) +
      statCard('Wrong to retry', String(wrongN)) +
      statCard('MCQ sets completed', setsDone + ' / ' + SET_SIZES.length) +
      statCard('Mock attempts', String(S.mockExamAttempts.length));
    h.appendChild(stats);

    if (wrongN > 0) {
      var retryPanel = el('div', 'panel');
      retryPanel.innerHTML = '<h3>Wrong questions to redo <span class="muted">(' + wrongN + ')</span></h3>' +
        '<p class="muted">Answered wrong before — they stay here until you answer them correctly (red → green). Retrying marks them correct automatically when you get them right.</p>';
      var retryBtn = el('button', 'btn btn-primary', '↻ Retry these ' + wrongN + ' now');
      retryBtn.addEventListener('click', function () { startWrongRetry(); });
      retryPanel.appendChild(retryBtn);
      h.appendChild(retryPanel);
    }

    var prog = el('div', 'panel');
    prog.innerHTML = '<h3>Lecture progress</h3>';
    ['1', '2', '3', '4', '5', '6'].forEach(function (l) {
      var pages = allPages(l);
      var rev = pages.filter(function (p) { return S.slideProgress[pageKey(l, p.n)] && S.slideProgress[pageKey(l, p.n)].reviewed; }).length;
      var pct = pages.length ? Math.round(100 * rev / pages.length) : 0;
      var row = el('div', 'prog-row');
      row.innerHTML =
        '<span class="prog-title"><span class="lbadge">L' + l + '</span> <a href="#/browse/' + l + '/1" title="' + esc(lectureTitle(l)) + '">' + esc(lectureTitle(l)) + '</a></span>' +
        '<div class="prog-bar"><div class="prog-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="prog-num">' + rev + '/' + pages.length + ' (' + pct + '%)</span>';
      prog.appendChild(row);
    });
    h.appendChild(prog);

    var weak = computeWeakTopics();
    var weakPanel = el('div', 'panel');
    weakPanel.innerHTML = '<h3>Weak topics <span class="muted">(auto-graded: wrong answers)</span></h3>';
    if (!weak.length) weakPanel.appendChild(el('p', 'muted', 'No wrong answers recorded yet — answer some questions and mistakes will show up here.'));
    else {
      var ul = el('ul', 'weak-list');
      weak.slice(0, 8).forEach(function (w) {
        ul.appendChild(el('li', '', esc(w.topic) + ' — <strong>' + w.bad + '</strong> weak of ' + w.total + ' graded'));
      });
      weakPanel.appendChild(ul);
    }
    h.appendChild(weakPanel);

    var two = el('div', 'two-col');
    var rec = el('div', 'panel');
    rec.innerHTML = '<h3>Recently viewed</h3>';
    if (!S.recentPages.length) rec.appendChild(el('p', 'muted', 'Nothing yet.'));
    S.recentPages.slice(0, 10).forEach(function (k) {
      var m = /^L(\d)-P(\d+)$/.exec(k);
      if (!m) return;
      var s = getSlide(m[1], parseInt(m[2], 10));
      if (!s) return;
      rec.appendChild(el('div', 'recent-item', '<a href="#/slide/' + m[1] + '/' + m[2] + '">L' + m[1] + ' · p.' + m[2] + ' — ' + esc(s.title) + '</a>'));
    });
    var bm = el('div', 'panel');
    bm.innerHTML = '<h3>Bookmarks</h3>';
    var bk = Object.keys(S.bookmarks);
    if (!bk.length) bm.appendChild(el('p', 'muted', 'No bookmarks yet. Open a slide and press k (or click ☆ Bookmark).'));
    bk.slice(0, 15).forEach(function (k) {
      var m = /^L(\d)-P(\d+)$/.exec(k);
      if (!m) return;
      var s = getSlide(m[1], parseInt(m[2], 10));
      if (!s) return;
      bm.appendChild(el('div', 'recent-item', '<a href="#/slide/' + m[1] + '/' + m[2] + '">L' + m[1] + ' · p.' + m[2] + ' — ' + esc(s.title) + '</a>'));
    });
    two.appendChild(rec); two.appendChild(bm);
    h.appendChild(two);

    viewEl.appendChild(h);
  }

  function statCard(label, value) {
    return '<div class="stat-card"><div class="stat-value">' + esc(value) + '</div><div class="stat-label">' + esc(label) + '</div></div>';
  }

  function computeWeakTopics() {
    var byTopic = {};
    Object.keys(S.questionProgress).forEach(function (qid) {
      var q = byId(qid);
      var prog = S.questionProgress[qid];
      if (!q || !prog || !prog.result) return;
      byTopic[q.topic] = byTopic[q.topic] || { bad: 0, total: 0 };
      byTopic[q.topic].total++;
      if (prog.result === 'wrong') byTopic[q.topic].bad++;
    });
    return Object.keys(byTopic).map(function (t) {
      return { topic: t, bad: byTopic[t].bad, total: byTopic[t].total };
    }).filter(function (x) { return x.bad > 0; }).sort(function (a, b) { return b.bad - a.bad; });
  }

  /* ----- browse (grouped by concept) ----- */
  function renderBrowse(lec, page) {
    lec = lec || '1';
    var h = el('div', 'browse-layout');

    var side = el('aside', 'sidebar');
    var search = document.createElement('input');
    search.type = 'search';
    search.className = 'search-input';
    search.placeholder = 'Search all slides…';
    side.appendChild(search);
    var results = el('div', 'search-results');
    side.appendChild(results);

    var lk = (S.lastLocation && S.lastLocation.view === 'slide') ? pageKey(S.lastLocation.lec, S.lastLocation.page) : null;

    var tree = el('div', 'tree');
    ['1', '2', '3', '4', '5', '6'].forEach(function (l) {
      var det = document.createElement('details');
      det.className = 'lec-node';
      var pages = allPages(l);
      var revCount = pages.filter(function (p) { return S.slideProgress[pageKey(l, p.n)] && S.slideProgress[pageKey(l, p.n)].reviewed; }).length;
      var concepts = DSFM_CONCEPTS[l] || [];
      var concDone = concepts.filter(function (c) { return S.concepts[c.id] && S.concepts[c.id].reviewed; }).length;
      var pct = pages.length ? Math.round(100 * revCount / pages.length) : 0;
      var sum = el('summary', 'lec-summary');
      sum.innerHTML =
        '<span class="lbadge">L' + l + '</span>' +
        '<span class="lec-name">Lecture ' + l + ' <span class="muted">· ' + pages.length + 'p</span></span>' +
        '<span class="lec-progress"><span class="prog-bar mini"><span class="prog-fill" style="width:' + pct + '%"></span></span>' +
        '<span class="lec-count">' + revCount + '/' + pages.length + ' · ' + concDone + '/' + concepts.length + 'C</span></span>';
      det.appendChild(sum);
      var openConcept = null;
      concepts.forEach(function (c, ci) {
        var prog = conceptProgress(c);
        var cdet = document.createElement('details');
        cdet.className = 'concept-node' + (prog.done ? ' concept-done' : '');
        var csum = el('summary', 'concept-summary');
        csum.innerHTML =
          '<span class="cbadge">C' + (ci + 1) + '</span>' +
          '<span class="concept-name">' + esc(c.title) + '</span>' +
          '<span class="concept-meta"><a class="copen" href="#/concept/' + l + '/' + (ci + 1) + '" title="Review this concept as one combined page">▤ review</a> ' +
          (prog.done ? '<span class="done-mark">✓</span> ' : '') + prog.reviewed + '/' + prog.total + '</span>';
        cdet.appendChild(csum);
        csum.querySelector('.copen').addEventListener('click', function (e) { e.stopPropagation(); });
        pages.forEach(function (p) {
          if (p.n < c.from || p.n > c.to) return;
          var k = pageKey(l, p.n);
          var cls = 'tree-item';
          var isActive = lk === k;
          if (S.slideProgress[k] && S.slideProgress[k].reviewed) cls += ' reviewed';
          if (S.bookmarks[k]) cls += ' bookmarked';
          if (isActive) cls += ' active';
          var item = el('div', cls);
          item.innerHTML = '<a href="#/slide/' + l + '/' + p.n + '"><span class="pnum">p.' + p.n + '</span> ' + esc(shortTitle(p)) + '</a>';
          cdet.appendChild(item);
          if (isActive) openConcept = cdet;
        });
        det.appendChild(cdet);
      });
      var openLec = (l === lec) || (lk && l === String(S.lastLocation.lec));
      det.open = !!openLec;
      if (openLec && openConcept) openConcept.open = true;
      tree.appendChild(det);
    });
    side.appendChild(tree);
    var activeItem = tree.querySelector('.tree-item.active');
    if (activeItem && activeItem.scrollIntoView) activeItem.scrollIntoView({ block: 'nearest' });

    search.addEventListener('input', function () {
      var q = search.value.trim().toLowerCase();
      results.innerHTML = '';
      if (q.length < 2) return;
      var count = 0;
      ['1', '2', '3', '4', '5', '6'].forEach(function (l) {
        allPages(l).forEach(function (p) {
          if (count >= 40) return;
          var text = (p.title + '\n' + p.raw).toLowerCase();
          if (text.indexOf(q) !== -1) {
            count++;
            var idx = text.indexOf(q);
            var snippet = (p.title + ' — …' + (p.raw.slice(Math.max(0, idx - 40), idx + 80))).replace(/\n/g, ' ');
            results.appendChild(el('div', 'search-hit', '<a href="#/slide/' + l + '/' + p.n + '">L' + l + ' p.' + p.n + '</a> ' + esc(snippet)));
          }
        });
      });
      if (!count) results.appendChild(el('div', 'muted', 'No matches.'));
    });

    var main = el('div', 'browse-main');
    main.appendChild(el('h1', '', 'Lecture Browser'));
    main.appendChild(el('p', 'muted', 'Grouped by concept (lecture → concept → page). Press b on a slide to mark it reviewed, Shift+B to mark the whole concept.'));
    var intro = el('div', 'lecture-cards');
    ['1', '2', '3', '4', '5', '6'].forEach(function (l) {
      var pages = allPages(l);
      var rev = pages.filter(function (p) { return S.slideProgress[pageKey(l, p.n)] && S.slideProgress[pageKey(l, p.n)].reviewed; }).length;
      var concepts = DSFM_CONCEPTS[l] || [];
      var done = concepts.filter(function (c) { return conceptProgress(c).done; }).length;
      var pct = pages.length ? Math.round(100 * rev / pages.length) : 0;
      var sub = lectureTitle(l).replace(/^Lecture\s\d+\s*—\s*/, '');
      var lastP = (S.lastLocation && String(S.lastLocation.lec) === l) ? S.lastLocation.page : null;
      var card = el('div', 'lecture-card');
      var chipHtml = concepts.map(function (c, ci2) {
        var doneC = conceptProgress(c).done;
        return '<a class="cchip' + (doneC ? ' done' : '') + '" href="#/concept/' + l + '/' + (ci2 + 1) + '" title="' + esc(c.title) + '">C' + (ci2 + 1) + ' ' + esc(c.title.length > 34 ? c.title.slice(0, 32) + '…' : c.title) + '</a>';
      }).join('');
      card.innerHTML =
        '<div class="lc-head"><span class="lbadge">L' + l + '</span><strong>Lecture ' + l + '</strong><span class="muted lc-pages">' + pages.length + ' pages</span></div>' +
        '<div class="lc-sub muted">' + esc(sub) + '</div>' +
        '<div class="prog-bar"><div class="prog-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="lc-stats muted">' + rev + '/' + pages.length + ' slides reviewed · ' + done + '/' + concepts.length + ' concepts</div>' +
        '<div class="lc-concepts">' + chipHtml + '</div>' +
        '<div class="lc-links"><a class="btn small" href="#/browse/' + l + '/1">Browse tree</a>' +
        '<a class="btn small" href="#/slide/' + l + '/1">Start p.1</a>' +
        (lastP ? '<a class="btn small" href="#/slide/' + l + '/' + lastP + '">Continue p.' + lastP + '</a>' : '') + '</div>';
      intro.appendChild(card);
    });
    var midCard = el('div', 'lecture-card');
    midCard.innerHTML =
      '<div class="lc-head"><span class="lbadge mt">MT</span><strong>Mid-term Examples</strong><span class="muted lc-pages">7 pages</span></div>' +
      '<div class="lc-sub muted">Exam-style questions with full worked solutions, LaTeX equations and high-res figure crops</div>' +
      '<div class="lc-links"><a class="btn small" href="#/midterm">Open Mid-term Examples</a><a class="btn small" href="#/sets">MCQ Sets</a><a class="btn small" href="#/formulas">Formula Sheet</a></div>';
    intro.appendChild(midCard);
    main.appendChild(intro);

    h.appendChild(side); h.appendChild(main);
    viewEl.appendChild(h);
  }

  function shortTitle(p) {
    var t = p.title || '';
    return t.length > 60 ? t.slice(0, 57) + '…' : t;
  }

  /* ----- slide viewer ----- */
  function renderSlide(lec, n) {
    lec = lec || '1';
    var slide = getSlide(lec, n);
    if (!slide) { viewEl.appendChild(el('p', '', 'Slide not found.')); return; }
    var meta = getMeta(lec, n);
    markRecent(lec, n);

    var pages = allPages(lec);
    var pos = pages.map(function (p) { return p.n; }).indexOf(n);
    var prev = pos > 0 ? pages[pos - 1] : null;
    var next = pos < pages.length - 1 ? pages[pos + 1] : null;
    var k = pageKey(lec, n);
    var concept = conceptOf(lec, n);

    var h = el('div', 'slide-view');
    var head = el('div', 'slide-head');
    head.innerHTML =
      '<div class="crumbs"><a href="#/browse/' + lec + '/1">Lecture ' + lec + '</a> · page ' + n + ' of ' + pages.length +
      (concept ? ' · <span class="concept-chip">' + esc(concept.title) + '</span>' : '') + '</div>' +
      '<h1>' + esc(meta.t || slide.title) + '</h1>' +
      '<div class="badge-row">' +
      '<span class="badge status-' + slide.status + '">' + statusLabel(slide.status) + '</span>' +
      '<span class="badge">Slide source: Lecture ' + lec + ', p. ' + n + '</span>' +
      (meta.b && meta.b.length ? '<span class="badge">' + meta.b.length + ' formula/table block(s)</span>' : '') +
      '</div>';
    h.appendChild(head);

    var actions = el('div', 'slide-actions');
    var rev = S.slideProgress[k] && S.slideProgress[k].reviewed;
    var revBtn = el('button', 'btn ' + (rev ? 'btn-ok' : ''), (rev ? '✓ Reviewed' : 'Mark reviewed') + '  [b]');
    revBtn.addEventListener('click', function () { toggleSlideReviewed(lec, n); render(); });
    var cBtn = el('button', 'btn', 'Mark concept & next ►  [Shift+B]');
    cBtn.title = 'Marks the whole concept reviewed, then jumps to the next concept review page; click again to unmark (no jump)';
    cBtn.addEventListener('click', function () {
      var cc = conceptOf(lec, n);
      if (cc) markConceptAndNext(lec, conceptIndex(cc), cc);
    });
    var bm = !!S.bookmarks[k];
    var bmBtn = el('button', 'btn ' + (bm ? 'btn-ok' : ''), (bm ? '★ Bookmarked' : '☆ Bookmark') + '  [k]');
    bmBtn.addEventListener('click', function () {
      if (bm) delete S.bookmarks[k]; else S.bookmarks[k] = { ts: new Date().toISOString() };
      save(); render();
    });
    actions.appendChild(revBtn);
    if (concept) actions.appendChild(cBtn);
    actions.appendChild(bmBtn);
    var imgToggle = el('button', 'btn', S.settings.showImages ? 'Hide slide image' : 'Show slide image');
    imgToggle.addEventListener('click', function () { S.settings.showImages = !S.settings.showImages; save(); render(); });
    actions.appendChild(imgToggle);
    actions.appendChild(el('span', 'kbd-hint', 'Keys: b reviewed · c concept view · Shift+B concept & next · k bookmark · ← → pages'));
    h.appendChild(actions);

    var main = el('div', 'slide-main');

    // Ratio-aware layout: wide slide image on the left, content in the space beside it.
    var grid2 = el('div', 'slide-grid2' + (S.settings.showImages ? '' : ' no-media'));
    if (S.settings.showImages) {
      var media = el('div', 'panel sg-media');
      media.innerHTML = '<a href="' + slide.img + '" target="_blank" title="Open full size"><img loading="lazy" src="' + slide.img + '" alt="Slide image for Lecture ' + lec + ' page ' + n + '"></a>';
      grid2.appendChild(media);
    }
    var sideCol = el('div', 'sg-side');

    if (meta.b && meta.b.length) {
      var blk = el('div', 'blocks');
      renderBlocks(meta.b, blk);
      sideCol.appendChild(blk);
    }

    // concept panel
    if (concept) {
      var cp = conceptProgress(concept);
      var cP = el('div', 'panel concept-panel' + (cp.done ? ' concept-done' : ''));
      cP.innerHTML = '<h3><span class="cbadge">C' + conceptIndex(concept) + '</span> Concept: ' + esc(concept.title) + '</h3>' +
        '<p class="muted">Pages ' + concept.from + '–' + concept.to + ' · ' + cp.reviewed + '/' + cp.total + ' pages reviewed' +
        (S.concepts[concept.id] && S.concepts[concept.id].reviewed ? ' · <strong>concept marked reviewed ✓</strong>' : '') + '</p>' +
        '<div class="row-btns"><a class="btn btn-primary" href="#/concept/' + lec + '/' + conceptIndex(concept) + '/p' + n + '">▤ Review all ' + (concept.to - concept.from + 1) + ' slides together</a></div>';
      sideCol.appendChild(cP);
    }

    var metaPanel = el('div', 'panel meta-panel');
    metaPanel.innerHTML =
      '<h3>Exam context</h3>' +
      '<div class="meta-row"><strong>Midterm relevance:</strong> ' + esc(meta.m || 'Not specified.') + '</div>' +
      '<div class="meta-row"><strong>Common mistakes / pitfalls:</strong>' +
      ((meta.p && meta.p.length) ? '<ul>' + meta.p.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : ' <span class="muted">None listed for this page.</span>') + '</div>';
    sideCol.appendChild(metaPanel);
    grid2.appendChild(sideCol);
    main.appendChild(grid2);

    var qs = questionsFor(lec, n);
    var qPanel = el('div', 'panel');
    qPanel.innerHTML = '<h3>Linked questions <span class="muted">(' + qs.length + ')</span></h3>';
    if (!qs.length) qPanel.appendChild(el('p', 'muted', 'No bank questions target this page (administrative slide).'));
    qs.forEach(function (q) { qPanel.appendChild(renderQuestionCard(q, 'view')); });
    main.appendChild(qPanel);

    // raw text — collapsed and small
    var rawPanel = el('div', 'panel');
    var rawOpen = slide.status !== 'full';
    rawPanel.innerHTML = '<h3>Slide text & source</h3><details class="raw-details"' + (rawOpen ? ' open' : '') + '>' +
      '<summary>Full slide content (extracted text — may look rough for formulas; use the blocks above or the slide image)</summary>' +
      '<pre class="slide-raw small"></pre></details>';
    rawPanel.querySelector('pre').textContent = slide.raw;
    main.appendChild(rawPanel);

    var notesPanel = el('div', 'panel');
    notesPanel.innerHTML = '<h3>My notes</h3>';
    var ta = document.createElement('textarea');
    ta.className = 'notes-textarea';
    ta.rows = 4;
    ta.placeholder = 'Write notes for this slide… (saved locally as you type)';
    ta.value = S.notes[k] ? S.notes[k].text : '';
    ta.addEventListener('input', function () {
      S.notes[k] = { text: ta.value, ts: new Date().toISOString() };
      save();
    });
    notesPanel.appendChild(ta);
    var savedAt = S.notes[k] ? S.notes[k].ts : null;
    notesPanel.appendChild(el('div', 'muted', savedAt ? 'Last saved: ' + lsDays(savedAt) : 'Auto-saves as you type.'));
    main.appendChild(notesPanel);

    var nav = el('div', 'panel slide-nav');
    nav.innerHTML =
      (prev ? '<a class="btn" href="#/slide/' + lec + '/' + prev.n + '">← p.' + prev.n + '</a>' : '<span></span>') +
      '<span class="muted">' + n + ' / ' + pages.length + '</span>' +
      (next ? '<a class="btn" href="#/slide/' + lec + '/' + next.n + '">p.' + next.n + ' →</a>' : '<span></span>');
    main.appendChild(nav);

    h.appendChild(main);
    viewEl.appendChild(h);
  }

  function statusLabel(s) {
    return s === 'full' ? 'Full content extracted' : s === 'partial' ? 'Partial extraction — check the slide image' : 'Image-only slide — see the slide image';
  }

  function markRecent(lec, n) {
    var k = pageKey(lec, n);
    S.recentPages = [k].concat(S.recentPages.filter(function (x) { return x !== k; })).slice(0, 20);
    S.lastLocation = { view: 'slide', lec: lec, page: n, ts: new Date().toISOString() };
    save();
  }

  /* ----- combined concept review view (all slides of one concept on one page) ----- */
  function renderConcept(lec, idx, anchor) {
    lec = lec || '1';
    var concepts = DSFM_CONCEPTS[lec] || [];
    var ci = parseInt(idx, 10) || 1;
    var c = concepts[ci - 1];
    if (!c) { viewEl.appendChild(el('p', '', 'Concept not found.')); return; }
    var pages = allPages(lec).filter(function (p) { return p.n >= c.from && p.n <= c.to; });
    var prog = conceptProgress(c);
    var mark = !!(S.concepts[c.id] && S.concepts[c.id].reviewed);
    var imagesOn = S.settings.conceptImages !== false;

    var h = el('div', 'concept-view');
    var head = el('div', 'cv-header panel');
    head.innerHTML =
      '<div class="crumbs"><a href="#/browse/' + lec + '/1">Lecture ' + lec + '</a> · concept ' + ci + ' of ' + concepts.length +
      (ci > 1 ? ' · <a href="#/concept/' + lec + '/' + (ci - 1) + '">← prev concept</a>' : '') +
      (ci < concepts.length ? ' · <a href="#/concept/' + lec + '/' + (ci + 1) + '">next concept →</a>' : '') + '</div>' +
      '<h1><span class="lbadge">L' + lec + '</span> <span class="cbadge">C' + ci + '</span> ' + esc(c.title) + '</h1>' +
      '<p class="muted">Pages ' + c.from + '–' + c.to + ' · ' + pages.length + ' slides reviewed together · ' + prog.reviewed + '/' + prog.total + ' reviewed</p>' +
      '<div class="prog-bar big"><div class="prog-fill" style="width:' + (100 * prog.reviewed / Math.max(1, prog.total)) + '%"></div></div>' +
      '<div class="row-btns">' +
      '<button class="btn ' + (mark ? 'btn-ok' : 'btn-primary') + '" id="cv-mark" title="Marks reviewed, then jumps to the next concept; click again to unmark (no jump)">' +
      (mark ? '✓ Reviewed — click to unmark' : 'Mark reviewed & next concept ►  [Shift+B]') + '</button>' +
      '<button class="btn" id="cv-img-toggle">' + (imagesOn ? 'Hide slide images' : 'Show slide images') + '</button>' +
      '<button class="btn" id="cv-collapse">Collapse all solutions</button>' +
      '<button class="btn" id="cv-practice">Practise this concept\'s questions</button>' +
      '</div>' +
      '<p class="kbd-hint">Keys: <strong>b</strong> toggle reviewed · <strong>Shift+B</strong> mark &amp; next concept · <strong>← →</strong> or <strong>n / p</strong> switch concept</p>';
    h.appendChild(head);
    head.querySelector('#cv-mark').addEventListener('click', function () { markConceptAndNext(lec, ci, c); });
    head.querySelector('#cv-practice').addEventListener('click', function () {
      S.filters.practice = S.filters.practice || {};
      S.filters.practice.lec = lec;
      S.filters.practice.concept = c.id;
      S.filters.practice.order = null;
      S.filters.practice.idx = 0;
      save();
      navigate('#/practice');
      render();
    });
    head.querySelector('#cv-img-toggle').addEventListener('click', function () { S.settings.conceptImages = !imagesOn; save(); render(); });
    head.querySelector('#cv-collapse').addEventListener('click', function () {
      viewEl.querySelectorAll('details.solution').forEach(function (d) { d.open = false; });
    });

    pages.forEach(function (p) { h.appendChild(conceptPageSection(lec, p)); });

    var prevC = adjacentConcept(lec, ci, -1);
    var nextC = adjacentConcept(lec, ci, 1);
    var nav = el('div', 'panel slide-nav');
    nav.innerHTML =
      (prevC ? '<a class="btn" href="#/concept/' + prevC.lec + '/' + prevC.ci + '">← L' + prevC.lec + ' C' + prevC.ci + '  [p]</a>' : '<span></span>') +
      '<span class="muted">Concept ' + ci + ' / ' + concepts.length + ' · ' + (mark ? 'reviewed ✓' : 'not yet reviewed') + '</span>' +
      (nextC ? '<a class="btn" href="#/concept/' + nextC.lec + '/' + nextC.ci + '">L' + nextC.lec + ' C' + nextC.ci + ' →  [n]</a>' : '<span></span>');
    h.appendChild(nav);

    viewEl.appendChild(h);
    if (anchor && /^p\d+$/.test(anchor)) {
      window.__dsfmPendingAnchor = { lec: lec, page: parseInt(anchor.slice(1), 10) };
    }
  }

  function conceptPageSection(lec, p) {
    var meta = getMeta(lec, p.n);
    var k = pageKey(lec, p.n);
    var rev = S.slideProgress[k] && S.slideProgress[k].reviewed;
    var sec = el('section', 'cv-page');
    sec.id = 'cv-' + lec + '-p' + p.n;
    var headEl = el('div', 'cv-page-head');
    headEl.innerHTML =
      '<span class="pnum big">p.' + p.n + '</span>' +
      '<h2>' + esc(meta.t || p.title) + '</h2>' +
      '<span class="badge status-' + p.status + '">' + statusLabel(p.status) + '</span>' +
      '<span class="cv-head-actions">' +
      '<a class="btn small" href="#/slide/' + lec + '/' + p.n + '" title="Single-slide view">full view</a> ' +
      '<button class="btn small cv-slide-mark ' + (rev ? 'btn-ok' : '') + '">' + (rev ? '✓ reviewed' : 'mark reviewed') + '</button>' +
      '</span>';
    sec.appendChild(headEl);
    headEl.querySelector('.cv-slide-mark').addEventListener('click', function () { toggleSlideReviewed(lec, p.n); render(); });

    if (meta.b && meta.b.length) {
      var blk = el('div', 'blocks');
      renderBlocks(meta.b, blk);
      sec.appendChild(blk);
    }
    // Ratio-aware split: wide slide image left, context/notes in the space beside it.
    var split = el('div', 'cv-split' + (S.settings.conceptImages === false ? ' no-media' : ''));
    if (S.settings.conceptImages !== false) {
      var fig = el('div', 'cv-media');
      fig.innerHTML = '<a href="' + p.img + '" target="_blank" title="Open full size"><img loading="lazy" src="' + p.img + '" alt="Lecture ' + lec + ' page ' + p.n + '"></a>';
      split.appendChild(fig);
    }
    var sideC = el('div', 'cv-side');
    if (meta.m || (meta.p && meta.p.length)) {
      var mp = el('div', 'cv-meta');
      mp.innerHTML = '<p><strong>Midterm relevance:</strong> ' + esc(meta.m || '—') + '</p>' +
        (meta.p && meta.p.length ? '<ul>' + meta.p.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' : '');
      sideC.appendChild(mp);
    }
    var raw = el('details', 'raw-details');
    raw.innerHTML = '<summary>Full slide text (extracted)</summary><pre class="slide-raw small"></pre>';
    raw.querySelector('pre').textContent = p.raw;
    sideC.appendChild(raw);

    var nd = el('details', 'cv-notes');
    nd.innerHTML = '<summary>My notes for p.' + p.n + (S.notes[k] && S.notes[k].text ? ' · saved' : '') + '</summary>';
    var ta = document.createElement('textarea');
    ta.className = 'notes-textarea';
    ta.rows = 3;
    ta.placeholder = 'Notes for slide ' + p.n + ' — auto-saves as you type';
    ta.value = S.notes[k] ? S.notes[k].text : '';
    ta.addEventListener('input', function () { S.notes[k] = { text: ta.value, ts: new Date().toISOString() }; save(); });
    nd.appendChild(ta);
    sideC.appendChild(nd);
    split.appendChild(sideC);
    sec.appendChild(split);

    var qs = questionsFor(lec, p.n);
    var qd = el('details', 'cv-questions');
    qd.innerHTML = '<summary>Linked questions (' + qs.length + ')</summary>';
    var qbody = el('div', '');
    if (!qs.length) qbody.appendChild(el('p', 'muted', 'No bank questions target this page (administrative slide).'));
    qs.forEach(function (q) { qbody.appendChild(renderQuestionCard(q, 'view')); });
    qd.appendChild(qbody);
    sec.appendChild(qd);
    return sec;
  }

  /* ----- bank (paginated) ----- */
  var BANK_PER_PAGE = 40;
  function renderBank() {
    var f = S.filters.bank || {};
    f.page = f.page || 0;
    var h = el('div', '');
    h.appendChild(el('h1', '', 'Question Bank'));
    h.appendChild(el('p', 'muted', 'Total questions: ' + DSFM_QUESTIONS.length + '. Solutions are hidden by default. For MCQ-only practice sets of 50–400, use the MCQ Sets page.'));

    var filters = el('div', 'filters panel');
    function sel(name, options, current) {
      var s = document.createElement('select');
      s.className = 'filter-select';
      options.forEach(function (o) {
        var opt = document.createElement('option');
        opt.value = o.v; opt.textContent = o.t;
        if (String(current) === String(o.v)) opt.selected = true;
        s.appendChild(opt);
      });
      s.addEventListener('change', function () { f[name] = s.value; f.page = 0; S.filters.bank = f; save(); render(); });
      return s;
    }
    function pair(label, node) {
      var w = el('div', 'filter-item');
      w.appendChild(el('label', '', esc(label)));
      w.appendChild(node);
      return w;
    }
    filters.appendChild(pair('Lecture', sel('lec', [{ v: '', t: 'All' }, { v: '1', t: 'L1' }, { v: '2', t: 'L2' }, { v: '3', t: 'L3' }, { v: '4', t: 'L4' }, { v: '5', t: 'L5' }, { v: '6', t: 'L6' }, { v: '0', t: 'Midterm-linked / integrated' }], f.lec)));
    filters.appendChild(pair('Topic', sel('topic', [{ v: '', t: 'All' }].concat(topicList().map(function (t) { return { v: t, t: t }; })), f.topic)));
    filters.appendChild(pair('Difficulty', sel('diff', [{ v: '', t: 'All' }, { v: 'easy', t: 'Easy' }, { v: 'medium', t: 'Medium' }, { v: 'hard', t: 'Hard' }], f.diff)));
    filters.appendChild(pair('Type', sel('type', [{ v: '', t: 'All' }, { v: 'mcq', t: 'MCQ' }, { v: 'tf', t: 'True/False' }, { v: 'short', t: 'Short' }, { v: 'calc', t: 'Calculation' }, { v: 'long', t: 'Long' }], f.type)));
    filters.appendChild(pair('Source', sel('source', [{ v: '', t: 'All' }, { v: 'lecture', t: 'Lecture' }, { v: 'midterm example', t: 'Midterm example' }, { v: 'integrated', t: 'Integrated' }], f.source)));
    var search = document.createElement('input');
    search.type = 'search';
    search.className = 'search-input';
    search.placeholder = 'Search prompts…';
    search.value = f.q || '';
    search.addEventListener('input', function () { f.q = search.value; f.page = 0; S.filters.bank = f; save(); listQuestions(); });
    filters.appendChild(pair('Search', search));
    h.appendChild(filters);

    var list = el('div', 'q-list');
    h.appendChild(list);
    var pagerTop = el('div', 'pager');
    h.appendChild(pagerTop);

    function filtered() {
      return DSFM_QUESTIONS.filter(function (q) {
        if (f.lec && String(q.lec) !== String(f.lec)) return false;
        if (f.topic && q.topic !== f.topic) return false;
        if (f.diff && q.difficulty !== f.diff) return false;
        if (f.type && q.type !== f.type) return false;
        if (f.source && q.source !== f.source) return false;
        if (f.q) {
          var t = (q.prompt + ' ' + q.topic + ' ' + q.subtopic + ' ' + q.answer).toLowerCase();
          if (t.indexOf(f.q.toLowerCase()) === -1) return false;
        }
        return true;
      });
    }

    function renderPager(total, node) {
      var pages = Math.max(1, Math.ceil(total / BANK_PER_PAGE));
      if (f.page >= pages) f.page = pages - 1;
      node.innerHTML = '';
      var from = total ? f.page * BANK_PER_PAGE + 1 : 0;
      var to = Math.min(total, (f.page + 1) * BANK_PER_PAGE);
      node.appendChild(el('span', 'muted', 'Showing ' + from + '–' + to + ' of ' + total));
      var prevB = el('button', 'btn small', '← Prev');
      prevB.disabled = f.page === 0;
      prevB.addEventListener('click', function () { f.page = Math.max(0, f.page - 1); S.filters.bank = f; save(); listQuestions(); });
      var nextB = el('button', 'btn small', 'Next →');
      nextB.disabled = f.page >= pages - 1;
      nextB.addEventListener('click', function () { f.page = Math.min(pages - 1, f.page + 1); S.filters.bank = f; save(); listQuestions(); });
      node.appendChild(el('span', 'pager-mid', 'Page ' + (f.page + 1) + ' / ' + pages));
      node.appendChild(prevB); node.appendChild(nextB);
    }

    function listQuestions() {
      var qs = filtered();
      list.innerHTML = '';
      var slice = qs.slice(f.page * BANK_PER_PAGE, (f.page + 1) * BANK_PER_PAGE);
      slice.forEach(function (q) { list.appendChild(renderQuestionCard(q, 'bank')); });
      renderPager(qs.length, pagerTop);
    }
    listQuestions();
    viewEl.appendChild(h);
  }

  /* ----- practice ----- */
  function renderPractice() {
    var f = S.filters.practice || {};
    var h = el('div', '');
    h.appendChild(el('h1', '', 'Practice Mode'));
    var panel = el('div', 'panel');
    panel.innerHTML = '<p class="muted">One question at a time with instant feedback and automatic result saving. Wrong answers are kept in the retry list until you get them right — use the retry button below or the one on the Dashboard.</p>';

    var sel = document.createElement('select');
    sel.className = 'filter-select';
    [{ v: '', t: 'All lectures' }, { v: '1', t: 'Lecture 1' }, { v: '2', t: 'Lecture 2' }, { v: '3', t: 'Lecture 3' }, { v: '4', t: 'Lecture 4' }, { v: '5', t: 'Lecture 5' }, { v: '6', t: 'Lecture 6' }, { v: '0', t: 'Midterm-linked / integrated' }].forEach(function (o) {
      var opt = document.createElement('option'); opt.value = o.v; opt.textContent = o.t;
      if ((f.lec || '') === o.v) opt.selected = true;
      sel.appendChild(opt);
    });
    var csel = document.createElement('select');
    csel.className = 'filter-select';
    var lecForConcepts = f.lec || '';
    [{ v: '', t: lecForConcepts ? 'All concepts in this lecture' : 'All concepts (pick a lecture)' }].concat(
      (lecForConcepts && DSFM_CONCEPTS[lecForConcepts]) ? DSFM_CONCEPTS[lecForConcepts].map(function (c, i) {
        return { v: c.id, t: 'C' + (i + 1) + ' — ' + c.title };
      }) : []
    ).forEach(function (o) {
      var opt = document.createElement('option'); opt.value = o.v; opt.textContent = o.t;
      if ((f.concept || '') === o.v) opt.selected = true;
      csel.appendChild(opt);
    });
    csel.disabled = !lecForConcepts;
    csel.addEventListener('change', function () { f.concept = csel.value; S.filters.practice = f; save(); });
    sel.addEventListener('change', function () { f.lec = sel.value; f.concept = ''; S.filters.practice = f; save(); render(); });

    var instant = document.createElement('label');
    instant.className = 'check';
    var chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.checked = f.instant !== false;
    chk.addEventListener('change', function () { f.instant = chk.checked; S.filters.practice = f; save(); });
    instant.appendChild(chk);
    instant.appendChild(el('span', '', 'Instant feedback'));
    var startBtn = el('button', 'btn btn-primary', 'Start / reshuffle');
    var wrongN = wrongQuestions().length;
    var wrongBtn = el('button', 'btn', '↻ Retry wrong questions (' + wrongN + ')');
    wrongBtn.disabled = !wrongN;
    wrongBtn.title = 'Practice only the questions you answered wrong; answering one correctly removes it from the list.';
    wrongBtn.addEventListener('click', function () { startWrongRetry(); });
    panel.appendChild(sel); panel.appendChild(csel); panel.appendChild(instant); panel.appendChild(startBtn); panel.appendChild(wrongBtn);
    h.appendChild(panel);

    var host = el('div', '');
    h.appendChild(host);

    function buildPool() {
      var pool = DSFM_QUESTIONS.filter(function (q) { return !f.lec || String(q.lec) === String(f.lec); });
      if (f.concept && f.lec && DSFM_CONCEPTS[f.lec]) {
        var c = null;
        DSFM_CONCEPTS[f.lec].forEach(function (x) { if (x.id === f.concept) c = x; });
        if (c) {
          pool = pool.filter(function (q) { return q.pg.some(function (pn) { return pn >= c.from && pn <= c.to; }); });
        }
      }
      return pool;
    }
    startBtn.addEventListener('click', function () {
      f.lec = sel.value; f.retry = false; S.filters.practice = f; save();
      var pool = buildPool().slice();
      for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = pool[i]; pool[i] = pool[j]; pool[j] = t; }
      f.order = pool.map(function (q) { return q.id; });
      f.idx = 0; S.filters.practice = f; save(); render();
    });

    if (!f.order || !f.order.length) {
      host.appendChild(el('p', 'muted', 'Press "Start / reshuffle" to begin.'));
      viewEl.appendChild(h);
      return;
    }
    var idx = f.idx || 0;
    if (idx >= f.order.length) { host.appendChild(el('p', '', '🎉 You finished this practice run. Reshuffle for a new order.')); viewEl.appendChild(h); return; }
    var q = byId(f.order[idx]);
    if (!q) { host.appendChild(el('p', '', 'Question missing — reshuffle.')); viewEl.appendChild(h); return; }
    host.appendChild(el('div', 'muted', 'Question ' + (idx + 1) + ' of ' + f.order.length));
    if (f.retry) {
      var retryNote = el('p', 'retry-note', '↻ Retrying wrong questions — answering one correctly removes it from the list automatically. Still wrong: ' + wrongQuestions().length);
      host.appendChild(retryNote);
      window.__dsfmAfterAnswer = function () {
        var n = wrongQuestions().length;
        retryNote.textContent = n === 0
          ? '🎉 All wrong questions cleared from the retry list!'
          : '↻ Retrying wrong questions — answering one correctly removes it from the list automatically. Still wrong: ' + n;
      };
    }
    host.appendChild(renderQuestionCard(q, 'practice'));
    var nav = el('div', 'row-btns');
    var prevB = el('button', 'btn', '← Previous');
    prevB.addEventListener('click', function () { f.idx = Math.max(0, idx - 1); S.filters.practice = f; save(); render(); });
    var nextB = el('button', 'btn btn-primary', 'Next question →');
    nextB.addEventListener('click', function () { f.idx = idx + 1; S.filters.practice = f; save(); render(); });
    nav.appendChild(prevB); nav.appendChild(nextB);
    host.appendChild(nav);
    viewEl.appendChild(h);
  }

  /* ----- MCQ sets ----- */
  var SET_PER_PAGE = 25;
  function renderSets(sizeArg) {
    var f = S.filters.sets || {};
    var sizes = SET_SIZES;
    var size = parseInt(sizeArg || f.size, 10);
    if (sizes.indexOf(size) === -1) size = null;
    f.size = size; f.page = f.page || 0;
    S.filters.sets = f;
    var poolTotal = objectiveQuestions().length;

    var h = el('div', '');
    h.appendChild(el('h1', '', 'MCQ Sets'));
    h.appendChild(el('p', 'muted', 'Objective-question sets (MCQ + True/False) drawn from the full bank (' + poolTotal + ' objective questions). A set gets a ✓ completion mark when every question in it is answered — you can still change answers afterwards; the mark stays.'));

    var sizePanel = el('div', 'panel');
    sizePanel.innerHTML = '<h3>Pick a set size</h3>';
    var grid = el('div', 'size-grid');
    sizes.forEach(function (sz) {
      var rec = S.mcqSets.sizes[sz] || {};
      var st = setStats(sz);
      var btn = el('button', 'btn size-btn' + (sz === size ? ' active' : '') + (rec.completed ? ' done' : ''),
        sz + ' questions' +
        (rec.completed ? '<span class="size-badge">✓ completed ' + new Date(rec.ts).toLocaleDateString() + '</span>'
          : '<span class="size-sub">' + st.answered + ' / ' + st.size + ' answered</span>'));
      btn.addEventListener('click', function () { f.size = sz; f.page = 0; S.filters.sets = f; save(); navigate('#/sets/' + sz); render(); });
      grid.appendChild(btn);
    });
    sizePanel.appendChild(grid);
    var reshuffle = el('button', 'btn', '🔀 Reshuffle question order');
    reshuffle.addEventListener('click', function () {
      S.mcqSets.seed = Math.floor(Math.random() * 1e9);
      save();
      render();
    });
    sizePanel.appendChild(el('p', 'muted', 'Reshuffle draws a fresh order (completion marks are kept). Sets are drawn from the same shuffled master order, so a 100-set contains its first 50-set.'));
    sizePanel.appendChild(reshuffle);
    h.appendChild(sizePanel);

    if (!size) {
      h.appendChild(el('p', 'muted', 'Choose a size above to start.'));
      viewEl.appendChild(h);
      return;
    }

    var statsRec = maybeCompleteSet(size);
    var st = setStats(size);

    var progPanel = el('div', 'panel set-progress');
    progPanel.innerHTML =
      '<h3>Set of ' + size + ' — progress</h3>' +
      '<div class="prog-bar big"><div class="prog-fill" id="set-bar" style="width:' + (100 * st.answered / Math.max(1, st.size)) + '%"></div></div>' +
      '<p><span id="set-answered">' + st.answered + '</span> / ' + st.size + ' answered · <span id="set-correct">' + st.correct + '</span> correct' +
      ' · <span id="set-badge">' + (statsRec.completed ? '<strong class="fb ok">✓ Set completed ' + new Date(statsRec.ts).toLocaleDateString() + '</strong> — you can still edit answers' : 'in progress — completion mark appears when all ' + st.size + ' are answered') + '</span></p>';
    h.appendChild(progPanel);

    var pageCount = Math.max(1, Math.ceil(st.order.length / SET_PER_PAGE));
    if (f.page >= pageCount) f.page = pageCount - 1;
    var slice = st.order.slice(f.page * SET_PER_PAGE, (f.page + 1) * SET_PER_PAGE);
    slice.forEach(function (qid) {
      var q = byId(qid);
      if (q) h.appendChild(renderQuestionCard(q, 'bank'));
    });

    var pager = el('div', 'pager');
    var prevB = el('button', 'btn small', '← Prev page');
    prevB.disabled = f.page === 0;
    prevB.addEventListener('click', function () { f.page = Math.max(0, f.page - 1); S.filters.sets = f; save(); render(); });
    var nextB = el('button', 'btn small', 'Next page →');
    nextB.disabled = f.page >= pageCount - 1;
    nextB.addEventListener('click', function () { f.page = Math.min(pageCount - 1, f.page + 1); S.filters.sets = f; save(); render(); });
    pager.appendChild(prevB);
    pager.appendChild(el('span', 'pager-mid', 'Page ' + (f.page + 1) + ' / ' + pageCount + ' · questions ' + (f.page * SET_PER_PAGE + 1) + '–' + Math.min(st.size, (f.page + 1) * SET_PER_PAGE)));
    pager.appendChild(nextB);
    h.appendChild(pager);

    // live progress updates without re-render
    window.__dsfmAfterAnswer = function () {
      var rec = maybeCompleteSet(size);
      var cur = setStats(size);
      var bar = document.getElementById('set-bar');
      var ans = document.getElementById('set-answered');
      var cor = document.getElementById('set-correct');
      var badge = document.getElementById('set-badge');
      if (bar) bar.style.width = (100 * cur.answered / Math.max(1, cur.size)) + '%';
      if (ans) ans.textContent = cur.answered;
      if (cor) cor.textContent = cur.correct;
      if (badge && rec.completed) badge.innerHTML = '<strong class="fb ok">✓ Set completed ' + new Date(rec.ts).toLocaleDateString() + '</strong> — you can still edit answers';
    };

    viewEl.appendChild(h);
  }

  /* ----- mock exam ----- */
  function renderMock(attemptId) {
    var h = el('div', '');
    h.appendChild(el('h1', '', 'Mock Exam Mode'));
    if (attemptId) { renderMockResult(h, attemptId); viewEl.appendChild(h); return; }

    var panel = el('div', 'panel mock-config');
    panel.innerHTML = '<p class="muted">Build an exam-style set, hide solutions, answer all questions, then submit for auto-scoring (objective types) and self-grading (open types). Attempts are saved locally.</p>';

    var lectBox = el('div', 'filter-item');
    lectBox.appendChild(el('label', '', 'Include lectures'));
    var lects = el('div', 'check-row');
    ['1', '2', '3', '4', '5', '6', '0'].forEach(function (l) {
      var lab = el('label', 'check');
      var c = document.createElement('input');
      c.type = 'checkbox'; c.value = l; c.checked = true;
      lab.appendChild(c); lab.appendChild(el('span', '', l === '0' ? 'MT/Integrated' : 'L' + l));
      lects.appendChild(lab);
    });
    lectBox.appendChild(lects);
    panel.appendChild(lectBox);

    var countBox = el('div', 'filter-item');
    countBox.appendChild(el('label', '', 'Number of questions'));
    var count = document.createElement('input');
    count.type = 'number'; count.min = '5'; count.max = '60'; count.value = '20'; count.className = 'answer-input';
    countBox.appendChild(count);
    panel.appendChild(countBox);

    var timeBox = el('div', 'filter-item');
    timeBox.appendChild(el('label', '', 'Timer (minutes, 0 = off)'));
    var time = document.createElement('input');
    time.type = 'number'; time.min = '0'; time.max = '180'; time.value = '0'; time.className = 'answer-input';
    timeBox.appendChild(time);
    panel.appendChild(timeBox);

    var startBtn = el('button', 'btn btn-primary', 'Generate mock exam');
    panel.appendChild(startBtn);
    h.appendChild(panel);

    var attempts = el('div', 'panel');
    attempts.innerHTML = '<h3>Past attempts</h3>';
    if (!S.mockExamAttempts.length) attempts.appendChild(el('p', 'muted', 'No attempts yet.'));
    S.mockExamAttempts.slice().reverse().forEach(function (a) {
      attempts.appendChild(el('p', '', '<a href="#/mock/' + a.id + '">' + new Date(a.ts).toLocaleString() + '</a> — ' + a.qids.length + ' questions · auto ' + a.autoScore + '/' + a.autoTotal + ' correct · ' + esc(a.openSummary || '')));
    });
    h.appendChild(attempts);

    startBtn.addEventListener('click', function () {
      var lecSel = Array.prototype.slice.call(lects.querySelectorAll('input:checked')).map(function (c) { return c.value; });
      if (!lecSel.length) { alert('Pick at least one lecture.'); return; }
      var pool = DSFM_QUESTIONS.filter(function (q) { return lecSel.indexOf(String(q.lec)) !== -1; });
      for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = pool[i]; pool[i] = pool[j]; pool[j] = t; }
      var n = Math.min(parseInt(count.value, 10) || 20, pool.length);
      var chosen = pool.slice(0, n);
      var attempt = {
        id: 'A' + Date.now(),
        ts: new Date().toISOString(),
        minutes: parseInt(time.value, 10) || 0,
        qids: chosen.map(function (q) { return q.id; }),
        submitted: false,
        autoScore: 0, autoTotal: 0,
        selfSummary: '',
        durationUsed: null
      };
      S.mockExamAttempts.push(attempt);
      save();
      navigate('#/mock/' + attempt.id);
    });
    viewEl.appendChild(h);
  }

  var mockTimerHandle = null;
  function renderMockResult(h, attemptId) {
    var a = null;
    for (var i = 0; i < S.mockExamAttempts.length; i++) if (S.mockExamAttempts[i].id === attemptId) a = S.mockExamAttempts[i];
    if (!a) { h.appendChild(el('p', '', 'Attempt not found.')); return; }

    if (!a.submitted) {
      var info = el('div', 'panel');
      info.innerHTML = '<h3>Attempt in progress</h3><p class="muted">' + a.qids.length + ' questions. Solutions hidden until you submit.</p>' +
        (a.minutes ? '<p class="timer" id="mock-timer">Time remaining: ' + a.minutes + ':00</p>' : '');
      var submit = el('button', 'btn btn-primary', 'Submit exam');
      info.appendChild(submit);
      h.appendChild(info);

      var box = el('div', '');
      a.qids.forEach(function (qid, idx) {
        var q = byId(qid);
        if (!q) return;
        var card = el('article', 'q-card');
        card.innerHTML = '<div class="q-head"><span class="tag">Q' + (idx + 1) + '</span>' +
          '<span class="tag tag-lec">' + (q.lec ? 'L' + q.lec : 'MT') + '</span>' +
          '<span class="tag">' + esc(TYPE_LABEL[q.type]) + '</span></div>';
        card.appendChild(el('div', 'q-prompt', esc(q.prompt)));
        card.appendChild(renderAnswerWidget(q, { suppressFeedback: true }));
        box.appendChild(card);
      });
      h.appendChild(box);

      var submit2 = el('button', 'btn btn-primary big', 'Submit exam and grade');
      submit2.addEventListener('click', function () { submitMock(a); });
      h.appendChild(submit2);
      submit.addEventListener('click', function () { submitMock(a); });

      if (a.minutes) {
        var started = a.startTs ? new Date(a.startTs).getTime() : new Date().getTime();
        if (!a.startTs) { a.startTs = new Date().toISOString(); save(); }
        clearInterval(mockTimerHandle);
        mockTimerHandle = setInterval(function () {
          var left = a.minutes * 60 - Math.floor((Date.now() - new Date(a.startTs).getTime()) / 1000);
          var elT = document.getElementById('mock-timer');
          if (!elT) { clearInterval(mockTimerHandle); return; }
          if (left <= 0) { elT.textContent = 'Time is up — submit when ready (timer does not auto-submit).'; clearInterval(mockTimerHandle); return; }
          elT.textContent = 'Time remaining: ' + Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0');
        }, 1000);
      }
    } else {
      var res = el('div', 'panel');
      res.innerHTML = '<h3>Result</h3>' +
        '<p><strong>Auto-scored:</strong> ' + a.autoScore + ' / ' + a.autoTotal + ' objective questions correct (' + (a.autoTotal ? Math.round(100 * a.autoScore / a.autoTotal) : 0) + '%).</p>' +
        '<p><strong>' + esc(a.openSummary || a.selfSummary || '') + '</strong></p>' +
        '<p class="muted">Completed ' + new Date(a.ts).toLocaleString() + (a.durationUsed ? ' · took ~' + a.durationUsed + ' min' : '') + '</p>';
      h.appendChild(res);

      var box2 = el('div', '');
      a.qids.forEach(function (qid) {
        var q = byId(qid);
        if (!q) return;
        var wrap = el('div', '');
        wrap.appendChild(renderQuestionCard(q, 'mock'));
        var auto = el('div', 'auto-result');
        if (q.answerIndex !== null) {
          var val = S.answers[qid] ? S.answers[qid].value : null;
          var ok = val !== null && String(val) === String(q.answerIndex);
          auto.innerHTML = '<span class="fb ' + (ok ? 'ok' : 'bad') + '">' + (ok ? '✓ Auto-graded: correct' : '✗ Auto-graded: incorrect (you: ' + esc(currentAnswerText(q)) + ')') + '</span>';
        } else {
          auto.innerHTML = '<span class="fb neutral">Open question — compare your working with the model answer above (not auto-graded).</span>';
        }
        wrap.appendChild(auto);
        box2.appendChild(wrap);
      });
      h.appendChild(box2);
    }
  }

  function submitMock(a) {
    var autoScore = 0, autoTotal = 0, openAnswered = 0, openTotal = 0;
    a.qids.forEach(function (qid) {
      var q = byId(qid);
      if (!q) return;
      var val = S.answers[qid] ? S.answers[qid].value : null;
      var answered = val !== null && val !== undefined && val !== '';
      if (q.answerIndex !== null) {
        autoTotal++;
        if (answered && String(val) === String(q.answerIndex)) autoScore++;
      } else {
        openTotal++;
        if (answered) openAnswered++;
      }
    });
    a.autoScore = autoScore; a.autoTotal = autoTotal; a.submitted = true;
    if (a.startTs) a.durationUsed = Math.round((Date.now() - new Date(a.startTs).getTime()) / 60000);
    a.openSummary = 'open questions answered ' + openAnswered + '/' + openTotal + ' (compare with the model answers)';
    saveNow();
    render();
  }

  /* ----- midterm section ----- */
  function renderMidterm(partId) {
    var h = el('div', '');
    h.appendChild(el('h1', '', esc(DSFM_MIDTERM.title)));
    h.appendChild(el('p', 'muted', esc(DSFM_MIDTERM.source) + ' — ' + esc(DSFM_MIDTERM.intro)));

    var list = el('div', 'midterm-list');
    h.appendChild(list);
    DSFM_MIDTERM.parts.forEach(function (p) {
      var card = el('article', 'mt-card');
      card.innerHTML =
        '<h3 id="' + esc(p.id) + '">' + esc(p.q) + ' <span class="tag">PDF p. ' + p.pg.join(', ') + '</span></h3>' +
        '<div class="mt-statement">' + richText(p.statement) + '</div>' +
        (p.givens && p.givens.length ? '<ul class="mt-givens">' + p.givens.map(function (g) { return '<li>' + richText(g) + '</li>'; }).join('') + '</ul>' : '');
      if (p.img) {
        var fig = el('div', 'mt-img');
        fig.innerHTML = '<a href="' + p.img + '" target="_blank" title="Open full size"><img loading="lazy" src="' + p.img + '" alt="Exam figure for ' + esc(p.q) + '"></a>' +
          (p.fullPage ? '<div class="mt-fullpage"><a class="btn small" href="' + p.fullPage + '" target="_blank">Open full exam page image</a></div>' : '');
        card.appendChild(fig);
      }
      var att = el('div', 'mt-attempt');
      att.innerHTML = '<h5>My attempt (auto-saved)</h5>';
      var ta = document.createElement('textarea');
      ta.className = 'answer-textarea';
      ta.rows = 4;
      ta.placeholder = 'Draft your answer here — saved locally as you type';
      ta.value = S.answers['MT-' + p.id] ? S.answers['MT-' + p.id].value : '';
      ta.addEventListener('input', function () {
        S.answers['MT-' + p.id] = { value: ta.value, ts: new Date().toISOString() };
        save();
      });
      att.appendChild(ta);
      card.appendChild(att);

      var solHtml =
        '<div class="model-answer"><h5>Model answer</h5>' + richText(p.answer) + '</div>' +
        '<div class="sol-steps"><h5>Step-by-step worked solution</h5>' + (p.steps || []).map(function (s) { return richText(s); }).join('') + '</div>' +
        (p.explain ? '<div class="sol-exp"><h5>Explanation</h5>' + richText(p.explain) + '</div>' : '') +
        (p.mistakes && p.mistakes.length ? '<div class="sol-mistakes"><h5>Common mistakes</h5><ul>' + p.mistakes.map(function (m) { return '<li>' + esc(m) + '</li>'; }).join('') + '</ul></div>' : '') +
        '<div class="sol-ref">Related slides: ' + (p.rel || []).map(function (r) { return '<a href="#/slide/' + r[0] + '/' + r[1] + '">L' + r[0] + ' p.' + r[1] + '</a>'; }).join(' · ') + '</div>';
      card.appendChild(el('div', '', solutionBlock(solHtml, 'Show solution (answer + worked steps)')));
      list.appendChild(card);
    });
    viewEl.appendChild(h);
  }

  /* ----- formulas ----- */
  function renderFormulas() {
    var h = el('div', '');
    h.appendChild(el('h1', '', 'Formula Sheet / Key Definitions'));
    h.appendChild(el('p', 'muted', 'Curated formulas plus every structured formula block stored on the slides. Click the lecture headers to jump.'));
    var grouped = {};
    DSFM_FORMULAS.forEach(function (f) { (grouped[f.lec] = grouped[f.lec] || []).push({ f: f, src: 'sheet' }); });
    ['1', '2', '3', '4', '5', '6'].forEach(function (l) {
      var meta = DSFM_META[l] && DSFM_META[l].pages ? DSFM_META[l].pages : {};
      Object.keys(meta).forEach(function (pg) {
        (meta[pg].b || []).forEach(function (b) {
          if (b.k === 'formula') grouped[l] = (grouped[l] || []).concat([{ f: { name: b.name, latex: b.latex, note: b.note, pg: parseInt(pg, 10) }, src: 'slide' }]);
        });
      });
    });
    ['2', '3', '5', '6'].forEach(function (l) {
      if (!grouped[l]) return;
      var det = document.createElement('details');
      det.open = l === '2';
      det.appendChild(el('summary', 'formula-head', 'Lecture ' + l + ' — ' + esc(lectureTitle(l))));
      var body = el('div', 'formula-list');
      grouped[l].forEach(function (item) {
        var d = el('div', 'formula-item');
        d.innerHTML = '<div class="formula-name">' + esc(item.f.name) + ' <a class="badge" href="#/slide/' + l + '/' + item.f.pg + '">L' + l + ' p.' + item.f.pg + '</a></div>' +
          '<div class="formula-line">' + mathHtml(item.f.latex) + '</div>' +
          (item.f.note ? '<div class="formula-note">' + esc(item.f.note) + '</div>' : '');
        body.appendChild(d);
      });
      det.appendChild(body);
      h.appendChild(det);
    });
    viewEl.appendChild(h);
  }

  /* ----- stats ----- */
  function renderStats() {
    var h = el('div', '');
    h.appendChild(el('h1', '', 'Progress & Stats'));
    var reviewed = Object.keys(S.slideProgress).filter(function (k) { return S.slideProgress[k].reviewed; }).length;
    var attempted = Object.keys(S.questionProgress).length;
    var g = { correct: 0, wrong: 0 };
    Object.keys(S.questionProgress).forEach(function (k) {
      var r = S.questionProgress[k].result;
      if (r === 'correct') g.correct++;
      if (r === 'wrong') g.wrong++;
    });
    var stats = el('div', 'stat-grid');
    stats.innerHTML =
      statCard('Reviewed slides', String(reviewed)) +
      statCard('Questions attempted', String(attempted)) +
      statCard('Auto-graded correct', String(g.correct)) +
      statCard('Wrong — in retry list', String(g.wrong)) +
      statCard('MCQ sets completed', SET_SIZES.filter(function (s) { return S.mcqSets.sizes[s] && S.mcqSets.sizes[s].completed; }).length + ' / ' + SET_SIZES.length);
    h.appendChild(stats);

    var retryP = el('div', 'panel');
    retryP.innerHTML = '<h3>Retry wrong questions</h3>' +
      (g.wrong ? '<p class="muted">' + g.wrong + ' question(s) answered wrong. They stay in the list until answered correctly.</p>'
               : '<p class="muted">No wrong answers stored right now. 🎉</p>');
    var rBtn = el('button', 'btn btn-primary', '↻ Retry wrong questions (' + g.wrong + ')');
    rBtn.disabled = !g.wrong;
    rBtn.addEventListener('click', function () { startWrongRetry(); });
    retryP.appendChild(rBtn);
    h.appendChild(retryP);

    var cp = el('div', 'panel');
    cp.innerHTML = '<h3>Concept progress <span class="muted">(mark a concept reviewed as one unit)</span></h3>';
    ['1', '2', '3', '4', '5', '6'].forEach(function (l) {
      (DSFM_CONCEPTS[l] || []).forEach(function (c) {
        var prog = conceptProgress(c);
        var row = el('div', 'concept-row');
        row.innerHTML =
          '<button class="btn small concept-toggle' + (S.concepts[c.id] && S.concepts[c.id].reviewed ? ' btn-ok' : '') + '">' +
          (S.concepts[c.id] && S.concepts[c.id].reviewed ? '✓' : 'Mark') + '</button>' +
          '<span class="concept-title"><span class="lbadge">L' + l + '</span> <span class="cbadge">C' + conceptIndex(c) + '</span> ' + esc(c.title) +
          ' <a class="copen" href="#/concept/' + l + '/' + conceptIndex(c) + '" title="Review this concept as one combined page">▤ review</a></span>' +
          '<div class="prog-bar"><div class="prog-fill" style="width:' + (100 * prog.reviewed / Math.max(1, prog.total)) + '%"></div></div>' +
          '<span class="prog-num">' + prog.reviewed + '/' + prog.total + '</span>';
        row.querySelector('.concept-toggle').addEventListener('click', function () {
          var on = !(S.concepts[c.id] && S.concepts[c.id].reviewed);
          S.concepts[c.id] = { reviewed: on, ts: new Date().toISOString() };
          for (var p = c.from; p <= c.to; p++) {
            S.slideProgress[pageKey(l, p)] = { reviewed: on, ts: new Date().toISOString() };
          }
          save(); render();
        });
        cp.appendChild(row);
      });
    });
    h.appendChild(cp);

    var weak = computeWeakTopics();
    var wt = el('div', 'panel');
    wt.innerHTML = '<h3>Weak areas</h3>';
    if (!weak.length) wt.appendChild(el('p', 'muted', 'Nothing flagged yet.'));
    weak.forEach(function (w) {
      wt.appendChild(el('p', '', esc(w.topic) + ' — ' + w.bad + ' weak / ' + w.total + ' graded <a class="btn small" href="#/bank">Practise in bank</a>'));
    });
    h.appendChild(wt);

    var hist = el('div', 'panel');
    hist.innerHTML = '<h3>Mock exam history</h3>';
    if (!S.mockExamAttempts.length) hist.appendChild(el('p', 'muted', 'No attempts yet.'));
    S.mockExamAttempts.slice().reverse().forEach(function (a) {
      hist.appendChild(el('p', '', '<a href="#/mock/' + a.id + '">' + new Date(a.ts).toLocaleString() + '</a> — auto ' + a.autoScore + '/' + a.autoTotal + ' · ' + esc(a.openSummary || '')));
    });
    h.appendChild(hist);
    viewEl.appendChild(h);
  }

  /* ----- settings ----- */
  function renderSettings() {
    var h = el('div', '');
    h.appendChild(el('h1', '', 'Settings'));
    var p1 = el('div', 'panel');
    p1.innerHTML = '<h3>Appearance</h3>';
    var themeSel = document.createElement('select');
    [['light', 'Light'], ['dark', 'Dark']].forEach(function (o) {
      var opt = document.createElement('option'); opt.value = o[0]; opt.textContent = o[1];
      if (S.settings.theme === o[0]) opt.selected = true;
      themeSel.appendChild(opt);
    });
    themeSel.addEventListener('change', function () { S.settings.theme = themeSel.value; applyTheme(); save(); });
    p1.appendChild(el('p', '', '<label>Theme: </label>'));
    p1.appendChild(themeSel);
    var font = document.createElement('input');
    font.type = 'range'; font.min = '13'; font.max = '20'; font.value = String(S.settings.font || 16);
    font.addEventListener('input', function () { S.settings.font = parseInt(font.value, 10); applyFont(); save(); });
    p1.appendChild(el('p', '', 'Font size: <span id="font-val">' + S.settings.font + 'px</span>'));
    p1.appendChild(font);
    h.appendChild(p1);

    var p2 = el('div', 'panel');
    p2.innerHTML = '<h3>Solutions & math</h3><p class="muted">Every solution starts hidden. Use the “Hide all solutions” button in the header to close every open solution on the current page. Keyboard on slides: b = mark reviewed, Shift+B = whole concept, k = bookmark, ← → = pages.</p>';
    var mathChk = mkCheck('Render math with MathJax (disable for pure offline LaTeX display)', S.settings.renderMath, function (v) { S.settings.renderMath = v; save(); });
    var imgChk = mkCheck('Show slide images in the slide viewer', S.settings.showImages, function (v) { S.settings.showImages = v; save(); });
    p2.appendChild(mathChk); p2.appendChild(imgChk);
    h.appendChild(p2);

    var p3 = el('div', 'panel');
    p3.innerHTML = '<h3>Data</h3><p class="muted">All progress is stored in your browser under the key <code>DSFM_MIDTERM_REVISION_v1</code>. Export a JSON backup before clearing your browser data.</p>';
    var exp = el('button', 'btn', 'Export progress (JSON)');
    exp.addEventListener('click', exportJson);
    var imp = el('button', 'btn', 'Import progress (JSON)');
    var file = document.createElement('input');
    file.type = 'file'; file.accept = '.json,application/json'; file.style.display = 'none';
    file.addEventListener('change', function () {
      var f = file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var data = JSON.parse(reader.result);
          if (!confirm('Import will replace your current progress. Continue?')) return;
          S = deepMerge(defaultState(), data);
          saveNow(); applyTheme(); applyFont(); render();
        } catch (e) { alert('Import failed: ' + e.message); }
      };
      reader.readAsText(f);
    });
    imp.addEventListener('click', function () { file.click(); });
    var reset = el('button', 'btn btn-danger', 'Reset all progress');
    reset.addEventListener('click', function () {
      if (!confirm('This permanently deletes all answers, notes, bookmarks, progress and attempts. Continue?')) return;
      if (!confirm('Really reset everything? This cannot be undone.')) return;
      S = defaultState(); saveNow(); applyTheme(); applyFont(); render();
    });
    var row = el('div', 'row-btns');
    row.appendChild(exp); row.appendChild(imp); row.appendChild(reset);
    p3.appendChild(row);
    p3.appendChild(file);
    h.appendChild(p3);

    var p4 = el('div', 'panel');
    p4.innerHTML = '<h3>About</h3><p>Offline-friendly revision site for ELEC3544 <em>Data Science with Foundation Models</em>. Slide content is extracted verbatim from the lecture PDFs; the question bank and worked solutions are authored for revision. Last local save: <span id="last-save">' + esc(lsDays(S.lastSaved)) + '</span></p>';
    h.appendChild(p4);
    viewEl.appendChild(h);
  }

  function mkCheck(label, checked, onChange) {
    var lab = el('label', 'check');
    var c = document.createElement('input');
    c.type = 'checkbox'; c.checked = !!checked;
    c.addEventListener('change', function () { onChange(c.checked); });
    lab.appendChild(c); lab.appendChild(el('span', '', label));
    return lab;
  }

  function exportJson() {
    var blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    var stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
    a.href = URL.createObjectURL(blob);
    a.download = 'dsfm-progress-' + stamp + '.json';
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', S.settings.theme || 'light');
  }
  function applyFont() {
    document.documentElement.style.fontSize = (S.settings.font || 16) + 'px';
  }

  /* ---------------- keyboard ---------------- */
  function onKey(e) {
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

    /* ----- combined concept view ----- */
    var mc = /^#\/concept\/(\d+)\/(\d+)/.exec(location.hash || '');
    if (mc) {
      var clec = mc[1], cci = parseInt(mc[2], 10);
      var cen = conceptByIndex(clec, cci);
      if (!cen) return;
      if (e.key === 'ArrowRight' || e.key === 'n') { e.preventDefault(); var nxc = adjacentConcept(clec, cci, 1); if (nxc) navigate('#/concept/' + nxc.lec + '/' + nxc.ci); }
      else if (e.key === 'ArrowLeft' || e.key === 'p') { e.preventDefault(); var pvc = adjacentConcept(clec, cci, -1); if (pvc) navigate('#/concept/' + pvc.lec + '/' + pvc.ci); }
      else if (e.key === 'b') { e.preventDefault(); toggleConceptReviewed(clec, cen.from); render(); }
      else if (e.key === 'B') { e.preventDefault(); markConceptAndNext(clec, cci, cen); }
      return;
    }

    /* ----- single slide view ----- */
    var m = /^#\/slide\/(\d+)\/(\d+)$/.exec(location.hash || '');
    if (!m) return;
    var lec = m[1], n = parseInt(m[2], 10);
    if (e.key === 'ArrowRight') { e.preventDefault(); var nx = n + 1; if (getSlide(lec, nx)) navigate('#/slide/' + lec + '/' + nx); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); var pv = n - 1; if (getSlide(lec, pv)) navigate('#/slide/' + lec + '/' + pv); }
    else if (e.key === 'b') { e.preventDefault(); toggleSlideReviewed(lec, n); render(); }
    else if (e.key === 'B') {
      e.preventDefault();
      var cc = conceptOf(lec, n);
      if (cc) markConceptAndNext(lec, conceptIndex(cc), cc);
    }
    else if (e.key === 'c') {
      e.preventDefault();
      var cc2 = conceptOf(lec, n);
      if (cc2) navigate('#/concept/' + lec + '/' + conceptIndex(cc2) + '/p' + n);
    }
    else if (e.key === 'k') { e.preventDefault(); var k = pageKey(lec, n); if (S.bookmarks[k]) delete S.bookmarks[k]; else S.bookmarks[k] = { ts: new Date().toISOString() }; save(); render(); }
  }

  /* ---------------- init ---------------- */
  function init() {
    viewEl = document.getElementById('view');
    window.__dsfmTypeset = function () { if (viewEl) typeset(viewEl); };
    var hideAll = document.getElementById('hide-all');
    if (hideAll) {
      hideAll.addEventListener('click', function () {
        viewEl.querySelectorAll('details.solution').forEach(function (d) { d.open = false; });
      });
    }
    applyTheme();
    applyFont();
    window.addEventListener('hashchange', render);
    window.addEventListener('keydown', onKey);
    if (!location.hash) location.hash = '#/dashboard';
    render();
    var elx = document.getElementById('save-indicator');
    if (elx) elx.textContent = S.lastSaved ? 'Loaded local progress (last saved ' + lsDays(S.lastSaved) + ')' : 'Ready — progress saves locally';
  }

  document.addEventListener('DOMContentLoaded', init);
})();
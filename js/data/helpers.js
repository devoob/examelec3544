/* Shared helpers + question factory for the DSFM revision site.
   Every question is authored with short keys and expanded into a full object here,
   so the whole bank has a consistent schema:
   {id, lec, pg[], type, difficulty, topic, subtopic, source, prompt, options[], answerIndex,
    answer, solution, explanation, mistakes, variantOf, ref, midterm} */
window.DSFM_QUESTIONS = window.DSFM_QUESTIONS || [];
window.DSFM_MIDTERM_LINKS = {};

function Q(o) {
  var pg = o.pg || [];
  var q = {
    id: o.id,
    lec: o.lec,
    pg: pg,
    type: o.ty || 'short',
    difficulty: o.df || 'medium',
    topic: o.tp || 'General',
    subtopic: o.sb || '',
    source: o.so || 'lecture',
    prompt: o.pr || '',
    options: o.op || null,
    answerIndex: (typeof o.an === 'number') ? o.an : null,
    answer: o.at || '',
    solution: o.sl || '',
    explanation: o.ex || '',
    mistakes: o.mt || '',
    variantOf: o.vo || null,
    midterm: o.mr || null,
    ref: o.ref || ('Lecture ' + o.lec + ', p. ' + (pg.length ? pg.join(', p. ') : '—'))
  };
  window.DSFM_QUESTIONS.push(q);
  return q;
}
# DSFM Midterm Revision (ELEC3544 — Data Science with Foundation Models)

An offline-friendly revision website built from the seven source PDFs:

| Source | Pages covered |
|---|---|
| lecture01.pdf | 1–73 |
| lecture02.pdf | 1–80 |
| lecture03.pdf | 1–56 |
| lecture04.pdf | 1–66 |
| lecture05.pdf | 1–58 |
| lecture06.pdf | 1–55 |
| Mid-term Exam Example Questions.pdf | 1–7 |

All 395 pages are represented page-by-page with extracted slide content, an embedded slide
image (shown large at the top of each slide), midterm relevance, common mistakes, and linked
questions. The question bank contains **584 questions** (lecture, midterm-linked, variants,
integrated, plus concept MCQs), each with a model answer, step-by-step solution,
explanation, common mistakes and a source page reference.

**Question policy — concepts and methods only:** every question reads as a standalone
exam-style item. Slide-framing questions ("what is the opening question of Session 1…",
"what does slide N say…") and all course-structure, logistics, demo-narration and
slide-trivia recall are excluded; any numbers needed for a calculation are given inside
the question. Provenance (Lecture X, p. N) appears only under the solution.

Key extras:

* **Combined concept review view** (`#/concept/L/C`): every concept opens as **one scrollable page
  containing all of its slides together** — no more clicking through 1 slide at a time. Each slide
  section shows its formula/table blocks, midterm relevance, the slide image, collapsible raw text,
  collapsible linked questions, and a notes box; the header lets you mark the whole concept
  reviewed, hide images, collapse all solutions, or jump straight into practising that concept's
  questions (Practice Mode now filters by concept). Reachable from: sidebar tree (`▤ review`),
  lecture cards (concept chips), the concept panel on any slide, and the Stats page.
* **Ratio-aware layout:** slide images are wide (16:9), so the slide view and the concept view put
  the image on the left at its natural width with formulas / exam context / notes filling the
  space beside it (stacking to one column on narrow screens). Tall images are capped and
  letter-boxed rather than blown up.
* **Review by concept, not only per slide.** All 388 lecture pages are grouped into **38 concepts**
  (lecture → concept → page in the sidebar). A concept and all its pages can be marked reviewed
  as one unit.
* **Double-click to reveal (MCQ/True-False):** double-click any choice and the correct option turns
  green (✓) while your wrong pick turns red (✗) and the solution opens automatically — instant
  feedback without hunting for the button.
* **Automatic results + wrong-answer retry:** answering an objective question saves the result
  (correct/wrong) immediately — no self-grading buttons. Wrong questions stay in a persistent
  "retry list" (Dashboard, Stats, Practice) until you answer them correctly, whenever that happens.
* **Keyboard shortcuts on slides:** `b` = mark reviewed, `Shift+B` = mark the whole concept
  reviewed **and jump to the next concept** (chains across lectures: L1 C7 → L2 C1), `c` = open
  the concept's combined view anchored at this page, `k` = bookmark, `← →` = previous/next page.
* **Concept-view shortcuts:** `b` toggle reviewed · `Shift+B` mark & next concept ·
  `← →` or `n / p` switch concept. Clicking a **marked** concept unmarks it and stays put
  (the auto-advance only happens when you *mark* it), so the flow is: read → Shift+B → next.
* **MCQ Sets** (`MCQ Sets` page): objective sets of **50 / 100 / 150 / 200 / 300 / 400** drawn
  from a 404-question objective pool in one deterministic shuffled order (so a 100-set contains
  its first 50-set). When every question in a set is answered it gets a **✓ completion mark with
  date — while remaining fully answerable afterwards** (the mark stays even if you change answers).
  Live progress shows answered/correct counts per set; “Reshuffle” draws a fresh order.
* **Readable questions:** solutions are split into paragraphs/bullets/step lists, equations are
  rendered with LaTeX (MathJax), and the Question Bank is paginated (40 questions per page).
* **Ugly extracted formulas handled:** formula-heavy slides carry proper LaTeX formula blocks
  (verified list in `coverage-report.md`); the full raw slide text is available but collapsed and
  small so it never gets in the way.
* **Midterm Examples in full LaTeX:** every statement, matrix, eigenvector, coefficient, R²/RMSE
  and formula in the exam section is authored in LaTeX and rendered with MathJax. Figure questions
  use tight high-resolution crops of the original exam pages (scatter plots, the three matrices,
  the EVR section, both data tables, the overfitting figure) shown full-width, with a link to the
  complete exam page for context. Each of the 20 parts also has an auto-saved "My attempt" box.
* **Clear lecture → concept → page hierarchy:** the sidebar distinguishes the three levels —
  lecture (accent bar, **L#** badge, mini progress bar and counts), concept (indented, **C#** chip,
  x/y progress, ✓ when fully reviewed) and page (**p.#** chip, deep indent, green when reviewed,
  ★ when bookmarked, highlighted when it is the page you last viewed, which is also auto-expanded).
  The Browser main panel shows one card per lecture with progress, concept completion and
  Browse / Start / Continue buttons. The same L#/C# badges appear on the Dashboard and Stats pages.

## How to open

**Option A (simplest):** open `index.html` directly in your browser (double-click). Everything
works from `file://` — no server, no build step, no API keys.

**Option B (recommended if your browser restricts `localStorage` on `file://`):**

```bash
cd this-folder
python3 -m http.server 8000
# then open http://localhost:8000
```

**Formulas:** MathJax is loaded from a CDN. If you are fully offline, formulas automatically
display as readable LaTeX text (e.g. `\cos(x,y) = \frac{x\cdot y}{\|x\|\,\|y\|}`) — nothing breaks.
You can also disable math rendering in Settings.

## Site structure

1. **Dashboard** — progress bars per lecture, questions answered, MCQ sets completed, bookmarks, weak topics, recently viewed pages.
2. **Lectures** — sidebar tree grouped lecture → concept → page (all 388 lecture pages), plus full-text search across every slide.
3. **Slide viewer** — large slide image at top (click for full size), structured formula/table/callout blocks in LaTeX, concept panel with progress, "Midterm relevance", "Common mistakes / pitfalls", linked questions, collapsible raw slide text (small), notes box, bookmark, mark reviewed / mark whole concept (or press `b` / `Shift+B`), prev/next.
4. **Question Bank** — 639 questions filterable by lecture, topic, difficulty, type, source; full-text search; paginated 40/page. Solutions hidden by default.
5. **MCQ Sets** — objective sets of 50/100/150/200/300/400 with live progress, sticky completion marks, reshuffle.
6. **Practice Mode** — one question at a time, instant feedback, automatic result saving, and a **Retry wrong** run that keeps missed questions until answered correctly.
7. **Mock Exam Mode** — random set by lecture, optional timer, answer collection, submit → auto-score for objective types + open answers compared against model answers, attempt history saved.
8. **Midterm Examples** — every question and subpart from the example exam PDF reproduced with page references and full worked solutions (hidden by default).
9. **Formula Sheet** — curated formulas plus every formula block stored on the slides, grouped by lecture with page links.
10. **Stats** — reviewed slides, questions attempted, auto-graded correct/wrong counts, retry-wrong button, per-concept progress, weak topics (from wrong answers), mock history.
11. **Settings** — dark mode, font size, math rendering, slide images, export/import/reset.

## Local saving (localStorage)

Everything is stored in your browser under a versioned key:

```
DSFM_MIDTERM_REVISION_v1
```

The saved object contains:

| Field | Contents |
|---|---|
| `answers` | your answer per question id (`{value, ts}`) |
| `questionProgress.result` | auto-saved `correct` / `wrong` per objective question (drives the retry list; `selfGrades` from older versions is ignored) |
| `questionProgress` | attempted flags + timestamps |
| `notes` | per-slide notes |
| `bookmarks` | bookmarked pages |
| `slideProgress` | reviewed pages |
| `concepts` | concept-level review marks |
| `mcqSets` | shuffle seed + per-size set completion marks (timestamp + snapshot) |
| `settings` | theme, font size, math/images toggles |
| `lastLocation`, `recentPages` | navigation memory |
| `filters` | bank/practice filter state |
| `mockExamAttempts` | full attempt history (scores, timestamps) |
| `practiceStats`, `lastSaved` | stats and last save time |

Saving is **debounced (~400 ms)** and the header shows “Saved locally at HH:MM:SS” after each write.

### Export / Import / Reset

* **Export progress (JSON)** in Settings downloads a complete backup.
* **Import progress (JSON)** restores a backup (replaces current state after a confirmation).
* **Reset all progress** clears everything after two confirmations.

Because the data lives in browser storage, **export a backup before clearing browser data or
switching browsers**.

## Question bank schema

Every question carries: `id`, lecture, page(s), `type` (MCQ / True-False / short / calculation /
long), `difficulty`, `topic`, `subtopic`, `source` (lecture / midterm example / integrated),
`prompt`, `options`, correct answer, step-by-step solution, explanation, common mistakes, and a
source page reference. Midterm-linked and variant questions reference their exam part id
(`MT-…`).

## Project layout

```
index.html
css/styles.css
js/app.js                — application logic (routing, storage, all views)
js/data/helpers.js       — question factory (expands short keys into the full schema)
js/data/slides_l1…l6.js  — every page: title, full extracted text, status, image path
js/data/meta_l1…l6.js    — per-page midterm relevance, pitfalls, structured formula/table blocks
js/data/midterm.js       — the example exam reproduced with worked solutions
js/data/questions_l1…l6.js, questions_midterm.js, questions_integrated.js, questions_coverage.js
js/data/formulas.js      — curated formula sheet entries
img/l{1…6}_{page}.jpg    — rendered slide images for every page (395 files)
img/mid_{01…07}.jpg      — the exam PDF pages
README.md — this file
coverage-report.md — page-by-page coverage table and QA checklist
```

## Limitations (honest notes)

* **Text extraction fidelity:** slide text is extracted verbatim from the PDFs. A few slides are
  image-only (their `status` badge says so) — for those, use the embedded slide image; several
  image-only slides with examinable content (L2 p.27, L3 p.41, L6 p.49) were additionally
  transcribed by hand and are marked “verified from the slide image”.
* **Formulas shown as images in the original decks** that did not extract as text (e.g., a few
  PMF/PDF boxes in Lecture 3) are reconstructed only when the standard, clearly-implied form is
  unambiguous; the slide image is always available for verification.
* The site is a **revision aid built from the lecture materials**; always cross-check with the
  original PDFs and the course announcements (Moodle) for schedules and coverage.
* Playback requires a browser with JavaScript; progress is per-browser-profile, not synced.

## Credits

Course: ELEC3544 *Data Science with Foundation Models*, The University of Hong Kong
(Instructor: Prof. Yang Liu). All slide content belongs to the course; this site is a personal
revision tool.
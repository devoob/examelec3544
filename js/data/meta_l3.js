/* Per-page metadata overlays — Lecture 3 (pages 1–56). */
window.DSFM_META = window.DSFM_META || {};
DSFM_META['3'] = {
  pages: {
    1: { t: "Course title slide", m: "Administrative.", p: [] },
    2: { t: "Lecture 3 title: Probability and Statistics for Data Science", m: "Divider slide.", p: [] },
    3: { m: "Three AI-can't-do items (context, questions, judgment) — likely short answer.", p: ["Listing computational tasks AI already does."] },
    4: { m: "Five-skill roadmap with habits — pairing question material.", p: [] },
    5: { m: "Frequentist vs subjective interpretations — definitional MCQ.", p: ["Swapping interpretations."] },
    6: { m: "Random variable examples and the 3-coin-flip distribution (1/8, 3/8, 3/8, 1/8) — computation candidate.", p: ["Omitting X = 0."] },
    7: { m: "Greek = population, Roman = sample convention — classic trap.", p: ["Reversing conventions."] },
    8: { m: "Notation table (n, xᵢ, x̄, s, P(A), P(A|B)) — memorize.", p: ["Reversing the conditional."] },
    9: { m: "Event ↔ RV-condition translation and P(X≥2)=1/2 example.", p: ["Double counting overlapping events."] },
    10: {
      m: "Three probability rules + examples — computation and statement questions.",
      p: ["Forgetting the overlap term in the addition rule."],
      b: [{ k: "formula", name: "Complement rule", latex: "P(\\text{not }A) = 1 - P(A)", note: "Rain: P(no rain) = 1 − 0.3 = 0.7." },
          { k: "formula", name: "Addition rule", latex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", note: "Mutually exclusive ⇒ P(A)+P(B)." },
          { k: "formula", name: "Multiplication rule", latex: "P(A \\cap B) = P(A)\\,P(B\\mid A)", note: "Independent ⇒ P(A)P(B)." }]
    },
    11: { m: "Counting perspective (26/52) and its role in Bayes.", p: [] },
    12: { m: "Mean vs median trade-off with skew/outliers.", p: ["Using mean on skewed income data."] },
    13: {
      m: "SD/IQR, n−1 (Bessel) and the paired patterns (mean+SD, median+IQR).",
      p: ["IQR written backwards (Q1−Q3)."],
      b: [{ k: "formula", name: "Standard deviation (sample)", latex: "s = \\sqrt{\\frac{1}{n-1}\\sum_{i=1}^n (x_i-\\bar{x})^2}", note: "Same units as data; divides by n−1 (degrees of freedom)." },
          { k: "formula", name: "IQR", latex: "IQR = Q_3 - Q_1", note: "Middle 50%; resistant to outliers." }]
    },
    14: {
      m: "Correlation = standardized covariance; unit-dependence rationale; 1/(n−1) warning.",
      p: ["Saying r ∈ [0,1]."],
      b: [{ k: "formula", name: "Pearson correlation", latex: "r = \\frac{\\mathrm{Cov}(X,Y)}{s_x s_y}", note: "Dimensionless; [−1, +1]." }]
    },
    15: { m: "Three correlation limitations (linear-only; causation; hidden structures) — true/false favorites.", p: ["Interpreting r=0 as no relationship at all."] },
    16: { m: "Histogram/box/scatter purposes — matching questions.", p: [] },
    17: { m: "Anscombe's quartet raw tables — the examinable facts are the shared stats (slide 19).", p: [] },
    18: { m: "CTA Demo A staging (turn 1 stats, pause for prediction, turn 2 plots) — supports the visualization lesson.", p: [] },
    19: { m: "Shared stats x̄≈9.0, ȳ≈7.5, sₓ≈3.3, sᵧ≈2.0, r≈0.816 + four shapes — high-probability exam item.", p: ["Believing one dataset differs statistically — they don't (to 2 dp)."] },
    20: { m: "'AI computes what you ask for, not what you need to see' — quotable.", p: [] },
    21: { m: "First prompting habit: summary stats AND visualizations — checklist answer.", p: [] },
    22: { m: "PMF vs PDF definitions + story-shape matching principle (exponential vs normal example).", p: ["Calling PDF values probabilities."] },
    23: {
      m: "Normal story (CLT), µ/σ² roles, 68-95-99.7 — numeric exam items. The PDF formula shown on the slide as an image is reproduced in LaTeX here.",
      p: ["Swapping σ and σ²."],
      b: [{ k: "formula", name: "Normal probability density function", latex: "f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\,e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}", note: "X ~ N(µ, σ²); symmetric; 68-95-99.7 rule. (Slide shows the PDF as an image; standard form reproduced here.)" }]
    },
    24: {
      m: "Binomial story, mean np, variance np(1−p) — computation candidate. PMF reproduced in LaTeX (image on slide).",
      p: ["Using np for variance."],
      b: [{ k: "formula", name: "Binomial probability mass function", latex: "P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k},\\qquad \\binom{n}{k}=\\frac{n!}{k!\\,(n-k)!}", note: "X ~ Binomial(n, p); E[X] = np; Var(X) = np(1−p). (Slide shows the PMF as an image.)" }]
    },
    25: {
      m: "Poisson mean = variance = λ — distinctive feature; story of rare independent events at constant rate. PMF reproduced in LaTeX.",
      p: ["Confusing Poisson with exponential roles."],
      b: [{ k: "formula", name: "Poisson probability mass function", latex: "P(X=k)=\\frac{\\lambda^k e^{-\\lambda}}{k!}", note: "E[X] = Var(X) = λ. Right-skewed for small λ. (Slide shows the PMF as an image.)" }]
    },
    26: {
      m: "Exponential mean 1/λ, variance 1/λ², memorylessness — computation/statement candidate. PDF reproduced in LaTeX.",
      p: ["Using mean λ; forgetting memorylessness."],
      b: [{ k: "formula", name: "Exponential probability density function", latex: "f(x)=\\lambda e^{-\\lambda x},\\quad x\\ge 0", note: "E[X] = 1/λ; Var(X) = 1/λ²; memoryless: P(X > s+t | X > s) = P(X > t). (Slide shows the PDF as an image.)" }]
    },
    27: { t: "Reasoning Under Uncertainty (divider)", m: "Divider slide summarizing the three skills: think conditionally, remember base rates, interpret intervals.", p: [] },
    28: {
      m: "Conditional definition + P(King|Face)=1/3 worked example — computation candidate.",
      p: ["Wrong conditioning denominator."],
      b: [{ k: "formula", name: "Conditional probability", latex: "P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}\\qquad (P(B)>0)", note: "Restrict the universe to B, then measure A within it. P(A|B) ≠ P(B|A). (Slide shows the definition as an image.)" }]
    },
    29: { m: "P(A|B) ≠ P(B|A) trap — likely true/false or short answer.", p: ["Assuming symmetry of conditionals."] },
    30: { m: "Law of total probability + email computation (0.52) — computation candidate.", p: ["Wrong prior weighting."] },
    31: {
      m: "Bayes rule and term names (posterior/likelihood/prior/evidence) — high-priority.",
      p: ["Inverting the formula."],
      b: [
        { k: "formula", name: "Bayes' rule", latex: "P(H\\mid E)=\\frac{P(E\\mid H)\\,P(H)}{P(E)}", note: "Posterior = likelihood × prior ÷ evidence. The prior (base rate) dominates unlikely hypotheses." },
        { k: "table", caption: "Bayes term names (slide 31)",
          headers: ["Term", "Name", "Meaning"],
          rows: [["P(H|E)", "Posterior", "Updated belief after seeing evidence"], ["P(E|H)", "Likelihood", "How likely is this evidence if H is true?"], ["P(H)", "Prior", "Initial belief before seeing evidence"], ["P(E)", "Evidence", "Total probability of seeing this evidence"]] }
      ]
    },
    32: { m: "Four counting steps for Bayes — process question.", p: [] },
    33: { m: "Medical test setup — the numbers drive midterm-style computation (16.7%).", p: ["Answering with sensitivity 99%."] },
    34: { m: "Medical test visual interpretation ('about 1 in 6') + base-rate concept.", p: [] },
    35: { m: "Full 10,000-person computation 99/594 ≈ 16.7% — memorize the steps and the result.", p: ["Missing the 495 false positives."] },
    36: { m: "Base-rate warning for AI confidence statements — quotable; four application domains.", p: ["Confusing the two conditional directions."] },
    37: { m: "Point estimates vs intervals — conceptual.", p: [] },
    38: {
      m: "CI formula x̄ ± z*·s/√n, z* = 1.96/2.58, SE = s/√n — computation candidate.",
      p: ["Using s instead of SE; wrong z*."],
      b: [{ k: "formula", name: "Confidence interval (mean, large-sample z)", latex: "\\bar{x} \\pm z^* \\frac{s}{\\sqrt{n}}", note: "z* = 1.96 (95%), 2.58 (99%); SE = s/√n. Larger n ⇒ narrower; higher confidence ⇒ wider." }]
    },
    39: { m: "Correct CI interpretation ('µ fixed, interval varies; 95% of intervals cover µ') + net analogy — high-priority true/false.", p: ["Assigning probability to a fixed parameter."] },
    40: { m: "Why the naive interpretation is wrong (nothing random left; overconfidence).", p: ["Treating the misconception as harmless."] },
    41: {
      t: "The Common Misconception (image-only slide — content verified from the slide image)",
      m: "Simulation figure: '20 Confidence Intervals from Repeated Sampling — 18 of 20 (90%) contain the true µ' (µ = 170); 2 red intervals miss. Annotation: 'Each horizontal line is a 95% CI from one sample. The procedure captures µ about 95% of the time. But any single interval either contains µ or doesn't.' A likely describe-the-figure question.",
      p: ["Expecting exactly 95% coverage in every finite simulation — 18/20 here fluctuates around the nominal level.", "Reading a red interval as a 'failed method' — it is the expected 5% tail behaviour."],
      b: [{ k: "callout", style: "key", title: "Figure teaching point:", text: "Coverage is a property of the confidence-interval PROCEDURE across repeated samples, not of any single interval computed from one dataset." }]
    },
    42: { m: "CI demo three turns — training in AI verification.", p: [] },
    43: { m: "Three questions for AI intervals + 'narrow biased interval worse than wide representative one' — true/false candidate.", p: ["Equating narrow with trustworthy."] },
    44: { t: "Making Decisions with Data (divider)", m: "Divider: hypothesis testing + p-values are the most misused tools.", p: [] },
    45: { m: "H₀/H₁/T/p/α definitions; 'fail to reject ≠ accept' — high-priority MCQ/true-false.", p: ["Saying fail-to-reject accepts H₀."] },
    46: { m: "Five-step testing procedure + fair-coin setup (65/100 heads) — list question.", p: [] },
    47: { m: "p-value definition P(data|H₀) with the 0.03 warning — high-priority true/false.", p: ["Flipping to P(H₀|data)."] },
    48: { m: "P-value demo three turns (misconceptions) — AI-verification training.", p: [] },
    49: { m: "Three misconceptions with corrections — each a true/false or short-answer item.", p: ["Believing p implies replication probability."] },
    50: { m: "Statistical vs practical significance + Cohen's d benchmarks (0.2/0.5/0.8) + drug example — computation/interpretation candidate.", p: ["Equating significance with importance."] },
    51: { m: "Five takeaways — the L3 summary skeleton.", p: [] },
    52: { m: "Five prompting habits + meta-habit — application-level.", p: [] },
    53: { m: "Course-project grouping logistics — administrative.", p: [] },
    54: { m: "Homework release notice — administrative.", p: [] },
    55: { m: "TA contacts — administrative.", p: [] },
    56: { m: "Closing contact slide — administrative.", p: [] }
  }
};
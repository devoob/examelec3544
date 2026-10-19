/* Per-page metadata overlays — Lecture 6 (pages 1–55). */
window.DSFM_META = window.DSFM_META || {};
DSFM_META['6'] = {
  pages: {
    1: { t: "Course title slide", m: "Administrative.", p: [] },
    2: { t: "Lecture 6 title: Classification — Predicting Categories", m: "Divider slide.", p: [] },
    3: { m: "Module 2 table: L5/L6/L7 methods, evaluations, CTA patterns.", p: [] },
    4: { m: "Three session questions — the classification workflow skeleton.", p: ["Mixing up which session covers ROC (Session 3)."] },
    5: { m: "Telco facts for classification: 7,043 rows, 19 raw predictors, binary Churn, cleaned in L4.", p: [] },
    6: { m: "Class proportions 73.5%/26.5% — the imbalance facts behind the accuracy discussion.", p: ["Swapping the percentages."] },
    7: { t: "Session 1 divider — Why classification needs its own model", m: "Divider: linear regression failure, sigmoid, logistic regression, log-odds.", p: [] },
    8: { m: "Opening question: why not linear regression on the 0/1 column?", p: [] },
    9: { t: "CTA Demo 1 — Linear regression on a binary target", m: "Demo setup (fit LR on tenure, mark extrapolation range; then fit logistic and check (0,1)).", p: [] },
    10: { m: "Two problems: unbounded range + calibration caveat; solution = sigmoid wrap.", p: ["Assuming the sigmoid guarantees calibration — range only."] },
    11: {
      m: "Sigmoid properties: (0,1), σ(0)=0.5, asymptotes — likely MCQ.",
      p: ["Claiming it reaches 0/1 exactly."],
      b: [{ k: "formula", name: "Sigmoid function", latex: "\\sigma(z)=\\frac{1}{1+e^{-z}}", note: "Range (0,1); σ(0) = 0.5; as z → ±∞, σ → 1 / 0 (never exactly reached)." }]
    },
    12: { m: "Core idea: probability output (not label); fitting minimizes penalized negative log-likelihood.", p: ["Saying logistic minimizes squared error."] },
    13: {
      m: "Both logistic forms + odds/log-odds computation (0.75 → odds 3, log-odds ≈ 1.10) — calculation candidate.",
      p: ["Computing log(p) instead of log(p/(1−p))."],
      b: [{ k: "formula", name: "Logistic regression — probability form", latex: "p(x) = \\sigma(z) = \\frac{1}{1+e^{-z}},\\quad z = \\beta_0 + \\beta_1 x_1 + \\dots + \\beta_p x_p", note: "Output in (0,1); operationally useful." },
          { k: "formula", name: "Logistic regression — log-odds (logit) form", latex: "\\log\\frac{p}{1-p} = \\beta_0 + \\beta_1 x_1 + \\dots + \\beta_p x_p", note: "Coefficients interpretable in log-odds space. Odds = p/(1−p)." }]
    },
    14: { m: "Illustrative β = −0.89 for contract type — sets up odds-ratio translation.", p: ["Forgetting the feature coding/reference category."] },
    15: { m: "Odds-ratio translation + causal caveat demo (first explicit human-judgment moment).", p: ["Acting on associations as interventions."] },
    16: { m: "Three-step translation chain: −0.89 → e^β ≈ 0.41 → ~59% lower odds; OR rules (<1, >1, =1) — high-priority calculation.", p: ["Saying '59% lower probability' — it is lower odds."] },
    17: {
      m: "The five-coefficient odds-ratio table — memorize/convert any row.",
      p: ["Ignoring per-unit definitions ($10 units; years)."],
      b: [{ k: "table", caption: "Illustrative coefficients and odds ratios (slide 17)",
        headers: ["Feature", "β (log-odds)", "e^β (odds ratio)", "Plain-language interpretation"],
        rows: [["Long-term contract (1) vs month-to-month (0)", "−0.89", "0.41", "~59% lower odds vs month-to-month"], ["Tenure (years)", "−0.46", "0.63", "Per extra year: odds × 0.63"], ["Monthly charges ($10 units)", "+0.38", "1.46", "Per extra $10: odds × 1.46"], ["No tech support", "+0.31", "1.36", "No support (1) vs support (0): odds × 1.36"], ["Paperless billing", "+0.22", "1.25", "Paperless (1) vs not (0): odds × 1.25"]] }]
    },
    18: { m: "Association ≠ causation; self-selection explanation; can/cannot lists — true/false material.", p: ["Treating coefficients as causal effects."] },
    19: { m: "Session 1 summary — four points (range, calibration, log-odds, association).", p: [] },
    20: { m: "Midterm logistics slide (Nov 21, in-class 1.5–2h; see Moodle).", p: [] },
    21: { t: "Session 2 divider — From probabilities to decisions", m: "Divider: confusion matrix, precision, recall, threshold, PR curve, F1.", p: [] },
    22: { m: "Threshold as a choice (0.3/0.5/0.7 tradeoffs); costs decide.", p: ["Treating 0.5 as required."] },
    23: {
      m: "Confusion matrix definitions + threshold rule (predict 1 if P ≥ θ) + positive class = churn.",
      p: ["Flipping FP/FN definitions."],
      b: [{ k: "table", caption: "Confusion matrix (slide 23)",
        headers: ["", "Predicted: Churn (1)", "Predicted: No Churn (0)"],
        rows: [["Actual: Churn (1)", "TP — true positive", "FN — false negative"], ["Actual: No churn (0)", "FP — false positive", "TN — true negative"]] }]
    },
    24: {
      m: "Precision = TP/(TP+FP) + high/low interpretation; illustrative value 0.60.",
      p: ["Including TN in the denominator."],
      b: [{ k: "formula", name: "Precision", latex: "\\mathrm{Precision} = \\frac{TP}{TP+FP}", note: "Of flagged positives, how many are real; FP-costly settings." }]
    },
    25: {
      m: "Recall = TP/(TP+FN) = TPR = sensitivity; illustrative value 0.45.",
      p: ["Using FP in the denominator."],
      b: [{ k: "formula", name: "Recall", latex: "\\mathrm{Recall} = \\frac{TP}{TP+FN} = TPR", note: "Of real positives, how many were caught; FN-costly settings." }]
    },
    26: {
      m: "The 2,000-customer worked example (P=0.60, R=0.45) — the canonical calculation to practice.",
      p: ["Dividing by 2,000 instead of the row/column totals."],
      b: [{ k: "table", caption: "Illustrative cohort at θ = 0.5 (slide 26)",
        headers: ["", "Predicted: Churn", "Predicted: No Churn"],
        rows: [["Actual: Churn", "TP = 180", "FN = 220"], ["Actual: No Churn", "FP = 120", "TN = 1,480"]] }]
    },
    27: {
      m: "Utility computation ($450 TP − $50 FP − $500 FN): θ=0.3 +$54,400 best of the three; tune on validation, evaluate once on test — high-value calculation.",
      p: ["Treating the payoffs as data-inferred; claiming 0.3 is the global optimum."],
      b: [{ k: "formula", name: "Hypothetical utility", latex: "U = 450\\,TP - 50\\,FP - 500\\,FN", note: "Payoffs are business inputs, not estimates from data." },
          { k: "table", caption: "Threshold utility (slide 27)",
            headers: ["θ", "Precision", "Recall", "Utility ($)"],
            rows: [["0.3", "0.48", "0.71", "+54,400"], ["0.5", "0.60", "0.45", "−35,000"], ["0.7", "0.74", "0.23", "−114,200"]] }]
    },
    28: { m: "PR curve reading: each point a threshold; random baseline = prevalence (20% illustrative, 26.5% Telco).", p: ["Looking for the random baseline at precision 0."] },
    29: { m: "Threshold selection: CTA optimizes a cost function you specify; specifying error costs is irreducibly human.", p: ["Asking the model to infer costs from data."] },
    30: {
      m: "F1 harmonic mean; 0.90/0.10 → F1 0.18 vs arithmetic 0.50 — calculation candidate.",
      p: ["Using the arithmetic mean for a single summary."],
      b: [{ k: "formula", name: "F1 score", latex: "F1 = 2\\times\\frac{\\mathrm{Precision}\\times\\mathrm{Recall}}{\\mathrm{Precision}+\\mathrm{Recall}}", note: "Harmonic mean — dominated by the smaller value." }]
    },
    31: { m: "Imbalance question: always-no-churn accuracy = 73.5%, recall 0.", p: ["Calling 73.5% accuracy good."] },
    32: { m: "DummyClassifier demo: accuracy ≈ 0.735, recall = 0, F1 = 0.", p: ["Trusting accuracy headlines."] },
    33: {
      m: "Illustrative comparison: naïve 0.80 acc/0.00 recall/f1 vs model 0.83/0.60/0.45/0.51 — always report precision & recall with accuracy.",
      p: ["Reporting accuracy without class distribution."],
      b: [{ k: "table", caption: "Naïve vs score model (slide 33)",
        headers: ["Metric", "Naïve", "Score model"],
        rows: [["Accuracy", "0.80 ⚠", "0.83"], ["Precision", "—", "0.60"], ["Recall", "0.00 ✗", "0.45"], ["F1", "0.00 ✗", "0.51"]] }]
    },
    34: { m: "Metric decision guide (accuracy/precision/recall/F1/PR/ROC-AUC by question).", p: ["Swapping precision/recall questions."] },
    35: { m: "Session 2 summary — four points.", p: [] },
    36: { t: "Session 3 divider — Threshold-free evaluation and model selection", m: "Divider: TPR, FPR, ROC curve, AUC, decision tree, model selection.", p: [] },
    37: { m: "Threshold-free idea: sweep every threshold and trace TPR vs FPR.", p: ["Thinking ROC still needs a fixed threshold."] },
    38: {
      m: "TPR/FPR formulas with illustrative values (0.45 / 0.075); TPR = recall; FPR = 1 − specificity — calculation candidate.",
      p: ["Wrong denominators; forgetting the specificity identity."],
      b: [{ k: "formula", name: "True positive rate", latex: "TPR = \\frac{TP}{TP+FN} = \\text{Recall} = \\text{Sensitivity}", note: "Of actual positives, fraction flagged." },
          { k: "formula", name: "False positive rate", latex: "FPR = \\frac{FP}{FP+TN} = 1-\\text{Specificity}", note: "Of actual negatives, fraction incorrectly flagged." }]
    },
    39: { m: "ROC landmarks: (0,1) perfect, diagonal random, (1,1) everyone flagged.", p: ["Confusing ROC diagonal with PR prevalence baseline."] },
    40: {
      m: "AUC = P(s⁺ > s⁻) + ½P(s⁺ = s⁻); AUC 0.84; benchmarks 1.0/0.5/0.0 — high-probability item.",
      p: ["Calling AUC the probability of correct classification — it is pairwise ranking credit."],
      b: [{ k: "formula", name: "AUC (probabilistic form)", latex: "AUC = P(s^+ > s^-) + \\tfrac{1}{2}P(s^+ = s^-)", note: "Pairwise ranking credit across churner/non-churner pairs; ties count ½." }]
    },
    41: { m: "AUC verification setup: sklearn ≈ 0.84 vs 10,000-pair Monte Carlo estimate.", p: [] },
    42: { m: "AUC resolution within sampling error; 'metrics have meanings that can be tested' (VERIFY on a library function).", p: ["Expecting exact equality of sklearn and sampled AUC."] },
    43: { m: "ROC vs PR: axes, baselines, best-for, and the small-FPR-many-FPs caution.", p: ["Assuming ROC is always safer for imbalance."] },
    44: { m: "Complete evaluation report: 0.83 acc / 0.60 prec / 0.45 rec / 0.51 F1 / 0.84 AUC; majority 0.80/0.00/0.00; tune on validation, test once — memorize.", p: ["Forgetting which metrics are threshold-dependent (all but AUC)."] },
    45: { m: "Why another model: linear boundary limit; interpretability vs performance; failure inspection.", p: [] },
    46: { m: "Logistic (linear) vs tree (piecewise rectangular) boundaries + flexibility/overfitting tradeoff.", p: ["Believing trees cannot overfit."] },
    47: { m: "Decision tree demo: max_depth=4, validation comparison, plot_tree, interpretability tradeoff.", p: [] },
    48: {
      m: "LR vs DT at θ=0.30: precision 0.38/0.29, recall 0.19/0.19, F1 0.26/0.23, AUC 0.69/0.65 — calculation/interpretation candidate.",
      p: ["Comparing metrics without their threshold."],
      b: [{ k: "table", caption: "Logistic regression vs decision tree at θ = 0.30 (slide 48)",
        headers: ["Metric", "Log. Reg.", "Dec. Tree", "Verdict"],
        rows: [["Threshold", "0.30", "0.30", "Same cut-off"], ["Precision", "0.38", "0.29", "LR has higher precision"], ["Recall", "0.19", "0.19", "Both catch 19% of positives"], ["F1 Score", "0.26", "0.23", "LR slightly higher"], ["AUC", "0.69", "0.65", "LR ranks better overall"]] }]
    },
    49: {
      t: "Logistic Regression vs Decision Tree — boundaries and properties (image-only slide, verified from the slide image)",
      m: "Side-by-side boundary plots (logistic = linear; tree = piecewise rectangular) on Tenure vs Monthly charges, plus a properties table: ROC AUC 0.69/0.65; F1 (θ=0.30) 0.26/0.23; Precision 0.38/0.29; Recall 0.19/0.19; Interpretability (odds ratios with units vs if–then rules); Feature scaling (recommended for penalised LR vs not required); Overfitting risk (typically lower flexibility vs higher without depth limits). High-probability table question.",
      p: ["Missing that scaling is recommended for penalised LR but unneeded for trees."],
      b: [{ k: "table", caption: "Metric / property comparison (slide 49, verified from image)",
        headers: ["Metric / property", "Logistic regression", "Decision tree"],
        rows: [["ROC AUC", "0.69", "0.65"], ["F1 (threshold = 0.30)", "0.26", "0.23"], ["Precision", "0.38", "0.29"], ["Recall", "0.19", "0.19"], ["Interpretability", "Odds ratios; specify units", "If–then rules"], ["Feature scaling", "Recommended for penalised LR", "Not required"], ["Overfitting risk", "Typically lower flexibility", "Higher without depth limits"]] }]
    },
    50: { m: "Model selection judgment: explainability, maintenance, regulation — not a higher AUC.", p: ["Assuming highest AUC always wins."] },
    51: { m: "Seven LOs revisited — classification exam checklist.", p: [] },
    52: { m: "TIQs: L-BFGS fitting; L2 default (C=1.0) in sklearn; softmax multiclass with micro/macro averaging.", p: [] },
    53: { m: "Project/HW/midterm logistics — administrative.", p: [] },
    54: { m: "Closing contact slide — administrative.", p: [] },
    55: { m: "TA contacts — administrative.", p: [] }
  }
};
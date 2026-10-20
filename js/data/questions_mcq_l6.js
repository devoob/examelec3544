/* Extra MCQ bank — Lecture 6 (built for MCQ Sets; distinct angles from questions_l6.js). */
(function () {
  var L = 6;

  
  
  Q({ id: "L6-MCQ-03", lec: L, pg: [6], tp: "Class imbalance", sb: "Labels", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the churn setup, which class is 'y = 1'?",
    op: ["No churn (73.5%)", "Churn (26.5%)", "Both", "Neither"],
    an: 1, at: "y = 1 = Churn (26.5%) — the positive class; y = 0 = No Churn (73.5%).",
    sl: "Slide 6: positive class = churn = 1; negative = no churn = 0.",
    ex: "The positive class is the rare one — central to the accuracy discussion.",
    mt: "Calling no-churn the positive class." });

  Q({ id: "L6-MCQ-04", lec: L, pg: [10], tp: "Logistic regression", sb: "Calibration", df: "hard", ty: "mcq", so: "lecture",
    pr: "What does 'calibration' mean in the logistic-regression context?",
    op: ["Predictions stay in [0,1]", "Predicted probabilities match observed frequencies on held-out data", "The model converges", "Coefficients are significant"],
    an: 1, at: "Calibration = predicted probabilities matching observed frequencies on held-out data.",
    sl: "Slide 10: being inside [0,1] does not guarantee calibration; check on held-out data.",
    ex: "The sigmoid guarantees range, not calibration.",
    mt: "Equating range with calibration." });

  Q({ id: "L6-MCQ-05", lec: L, pg: [11], tp: "Sigmoid", sb: "σ(0)", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is σ(0) for the sigmoid function?",
    op: ["0", "0.5", "1", "Undefined"],
    an: 1, at: "σ(0) = 0.5 — the symmetry point; positive z gives > 0.5, negative gives < 0.5.",
    sl: "Slide 11 three properties: range (0,1); symmetry σ(0) = 0.5; asymptotes.",
    ex: "0.5 is also the default threshold — a choice, not a requirement.",
    mt: "Answering 0 for σ(0)." });

  Q({ id: "L6-MCQ-06", lec: L, pg: [12], tp: "Logistic regression", sb: "Fitting criterion", df: "hard", ty: "mcq", so: "lecture",
    pr: "What do logistic regression's β coefficients minimize?",
    op: ["Squared error", "Negative log-likelihood (usually with a regularization penalty)", "Absolute error", "The number of misclassifications"],
    an: 1, at: "Negative log-likelihood, usually with a regularization penalty.",
    sl: "Slide 12 fitting note.",
    ex: "Contrast with OLS's squared-error objective.",
    mt: "Saying logistic regression minimizes squared error." });

  Q({ id: "L6-MCQ-07", lec: L, pg: [13], tp: "Logistic regression", sb: "Form purposes", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which form of the logistic equation is described as 'interpretively useful'?",
    op: ["Probability form", "Log-odds form (logit)", "Sigmoid form", "Matrix form"],
    an: 1, at: "Log-odds form: log(p/(1−p)) = β₀ + β₁x₁ + … — coefficients interpretable in log-odds space.",
    sl: "Slide 13: probability form is operationally useful (outputs in (0,1)); log-odds form is interpretively useful.",
    ex: "The two forms are mathematically equivalent.",
    mt: "Using the probability form for coefficient interpretation." });

  Q({ id: "L6-MCQ-08", lec: L, pg: [16], tp: "Odds ratios", sb: "Odds definition", df: "medium", ty: "mcq", so: "lecture",
    pr: "If P = 0.75, what are the odds (/16)?",
    op: ["0.75", "3-to-1", "0.25", "0.33"],
    an: 1, at: "Odds = p/(1−p) = 0.75/0.25 = 3-to-1; log-odds = log(3) ≈ 1.10.",
    sl: "Slide 13 example + slide 16 translation chain.",
    ex: "Odds ≠ probability — 0.75 probability is 3:1 odds.",
    mt: "Reporting the probability itself as the odds." });

  Q({ id: "L6-MCQ-09", lec: L, pg: [17], tp: "Odds ratios", sb: "Tenure coefficient", df: "hard", ty: "mcq", so: "lecture",
    pr: "For tenure β = −0.46, what is the plain-language interpretation?",
    op: ["Per extra year, odds × 0.63", "Per extra year, odds × 1.63", "Odds fall by 0.46 percentage points", "No effect"],
    an: 0, at: "e^{−0.46} ≈ 0.63 — per extra year of tenure, the odds of churning multiply by ≈0.63.",
    sl: "Slide 17 table row: tenure (years) −0.46 → 0.63.",
    ex: "Holding other features fixed; associations, not causal effects.",
    mt: "Adding 1 to the odds ratio instead of exponentiating." });

  Q({ id: "L6-MCQ-10", lec: L, pg: [17], tp: "Odds ratios", sb: "Charges coefficient", df: "hard", ty: "mcq", so: "lecture",
    pr: "For monthly charges β = +0.38 (per $10), what is the odds ratio?",
    op: ["1.46", "0.38", "1.38", "2.46"],
    an: 0, at: "e^{0.38} ≈ 1.46 — per extra $10, the odds of churning multiply by ≈1.46.",
    sl: "Slide 17 table row: monthly charges ($10 units) +0.38 → 1.46.",
    ex: "Positive β ⇒ OR > 1 (higher modelled odds).",
    mt: "Reading 0.38 as the odds ratio directly." });

  Q({ id: "L6-MCQ-11", lec: L, pg: [18], tp: "Causality", sb: "Self-selection", df: "hard", ty: "mcq", so: "lecture",
    pr: "What alternative (non-causal) explanation can account for the observation that 'long-term contract customers churn less'?",
    op: ["Random noise", "Self-selection — loyal customers choose long contracts", "Data error", "Contract causes loyalty"],
    an: 1, at: "Self-selection: loyal customers may choose long contracts (no treatment effect needed).",
    sl: "Slide 18: the historical pattern may reflect self-selection rather than a treatment effect.",
    ex: "The model can score and rank but cannot prescribe interventions.",
    mt: "Treating the association as a causal guarantee." });

  
  Q({ id: "L6-MCQ-13", lec: L, pg: [22], tp: "Thresholds", sb: "θ = 0.3", df: "medium", ty: "mcq", so: "lecture",
    pr: "What happens at θ = 0.3?",
    op: ["Flag aggressively — catch more churners but flag loyal customers too", "Flag conservatively — miss many churners", "Flag nobody", "Perfect classification"],
    an: 0, at: "θ = 0.3: aggressive flagging — catches more churners, also flags loyal customers.",
    sl: "Slide 22: 0.3 aggressive; 0.5 default; 0.7 conservative.",
    ex: "The threshold is a choice depending on error costs.",
    mt: "Assuming lower θ improves precision." });

  Q({ id: "L6-MCQ-14", lec: L, pg: [23], tp: "Confusion matrix", sb: "FP definition", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is a false positive?",
    op: ["A churner we missed", "A loyal customer incorrectly flagged as churn", "A correct churn flag", "A correct loyal classification"],
    an: 1, at: "FP = loyal customer (actual 0) incorrectly predicted churn (1).",
    sl: "Slide 23 four outcomes; TP = correctly flagged churners; FN = missed churners; TN = correctly cleared.",
    ex: "Positive class = churn = 1 throughout.",
    mt: "Swapping FP and FN definitions." });

  Q({ id: "L6-MCQ-15", lec: L, pg: [24], tp: "Precision", sb: "Consequence", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the business consequence of LOW precision?",
    op: ["Missing churners", "Wasting retention budget on loyal customers", "No consequence", "Higher recall"],
    an: 1, at: "Low precision: many flagged customers are loyal — the retention campaign wastes discounts.",
    sl: "Slide 24: high precision = budget spent efficiently.",
    ex: "Precision = TP/(TP+FP).",
    mt: "Associating low precision with missed churners (that is recall)." });

  Q({ id: "L6-MCQ-16", lec: L, pg: [25], tp: "Recall", sb: "Consequence", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the business consequence of LOW recall?",
    op: ["Many real churners missed — lost subscription revenue", "Wasted discounts", "Nothing", "Higher precision"],
    an: 0, at: "Low recall: many real churners are missed; each represents lost subscription revenue.",
    sl: "Slide 25: high recall = few churners slip through.",
    ex: "Recall = TP/(TP+FN) = TPR.",
    mt: "Associating low recall with wasted discounts (that is precision)." });

  Q({ id: "L6-MCQ-17", lec: L, pg: [26], tp: "Confusion matrix", sb: "Denominators", df: "hard", ty: "mcq", so: "lecture",
    pr: "In the worked example, why is precision 180/300?",
    op: ["300 = total customers", "300 = predicted positives (TP+FP)", "300 = actual churners", "300 = non-churners"],
    an: 1, at: "300 = TP+FP = 180+120 — all predicted positives.",
    sl: "Slide 26: recall = 180/400 where 400 = actual churners (TP+FN).",
    ex: "Precision uses predicted positives; recall uses actual positives.",
    mt: "Dividing by 2,000." });

  
  Q({ id: "L6-MCQ-19", lec: L, pg: [28], tp: "PR curve", sb: "Recall monotonicity", df: "hard", ty: "mcq", so: "lecture",
    pr: "What happens to recall when the threshold is lowered?",
    op: ["It cannot decrease", "It always decreases", "It doubles", "It is unaffected"],
    an: 0, at: "Lowering the threshold cannot decrease recall (more items flagged); precision may rise or fall.",
    sl: "Slide 28: each point is a threshold on the precision–recall curve.",
    ex: "Random baseline = prevalence (20% illustrative; 26.5% Telco).",
    mt: "Expecting precision to stay fixed as thresholds move." });

  Q({ id: "L6-MCQ-20", lec: L, pg: [29], tp: "Thresholds", sb: "Human role", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is 'irreducibly a human responsibility' in threshold selection?",
    op: ["Computing precision", "Specifying what errors cost", "Generating the PR curve", "Finding the minimal-cost threshold given costs"],
    an: 1, at: "Specifying what a false positive/negative costs — the cost function cannot come from the data.",
    sl: "Slide 29: the CTA optimises an explicit cost function once provided.",
    ex: "Same human-judgment theme as base rates (L3).",
    mt: "Asking the CTA to infer costs from the dataset." });

  Q({ id: "L6-MCQ-21", lec: L, pg: [30], tp: "F1", sb: "Harmonic mean property", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which value dominates the harmonic mean F1?",
    op: ["The larger one", "The smaller one", "Their sum", "Neither — it is symmetric"],
    an: 1, at: "The smaller value dominates (0.90/0.10 → F1 = 0.18 vs arithmetic 0.50).",
    sl: "Slide 30: harmonic mean penalises sacrificing one side of the tradeoff.",
    ex: "Use F1 when both matter; use PR + costs when they differ in cost.",
    mt: "Treating F1 like the arithmetic mean." });

  Q({ id: "L6-MCQ-22", lec: L, pg: [33], tp: "Accuracy", sb: "Balance check", df: "medium", ty: "mcq", so: "lecture",
    pr: "If only accuracy is reported for an imbalanced dataset, what should you ask?",
    op: ["About the class distribution", "About the learning rate", "About the GPU", "Nothing"],
    an: 0, at: "Ask about the class distribution first — accuracy weights the majority proportionally.",
    sl: "Slide 33: always report precision and recall alongside accuracy on imbalanced data.",
    ex: "The naïve classifier: 0.80 accuracy, 0.00 recall.",
    mt: "Accepting accuracy without prevalence context." });

  Q({ id: "L6-MCQ-23", lec: L, pg: [34], tp: "Metrics", sb: "FN-costly", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which metric is best when false negatives are costly?",
    op: ["Precision", "Recall", "Accuracy", "Specificity"],
    an: 1, at: "Recall — of real positives, how many did we catch (FN = missed opportunities).",
    sl: "Slide 34 metric decision guide: precision when FP costly; recall when FN costly; F1 when both matter.",
    ex: "PR curve for imbalanced datasets.",
    mt: "Choosing precision when missing positives is the concern." });

  Q({ id: "L6-MCQ-24", lec: L, pg: [38], tp: "ROC", sb: "FPR denominator", df: "hard", ty: "mcq", so: "lecture",
    pr: "What is FPR's denominator?",
    op: ["All customers", "Actual negatives (FP+TN)", "Predicted positives", "Actual positives"],
    an: 1, at: "FPR = FP/(FP+TN) — of all non-churners, the fraction incorrectly flagged (1,600 in the example).",
    sl: "Slide 38: FPR = 120/1,600 = 0.075 at θ = 0.5; TPR = 0.45.",
    ex: "FPR = 1 − specificity.",
    mt: "Using predicted positives in the FPR denominator." });

  
  Q({ id: "L6-MCQ-26", lec: L, pg: [40], tp: "AUC", sb: "Ties", df: "hard", ty: "mcq", so: "lecture",
    pr: "How are ties handled in the probabilistic AUC definition?",
    op: ["Counted as 1", "Counted as ½", "Counted as 0", "Excluded"],
    an: 1, at: "Ties count as ½: AUC = P(s⁺ > s⁻) + ½P(s⁺ = s⁻).",
    sl: "Slide 40: correct ranking = 1, tie = ½, incorrect = 0.",
    ex: "The empirical pair-sampling estimate (10,000 pairs) ≈ sklearn's 0.84.",
    mt: "Dropping ties from the average." });

  Q({ id: "L6-MCQ-27", lec: L, pg: [43], tp: "ROC vs PR", sb: "Baselines", df: "hard", ty: "mcq", so: "lecture",
    pr: "What is the random-ranking baseline for each curve?",
    op: ["ROC: diagonal; PR: positive-class prevalence", "ROC: prevalence; PR: diagonal", "Both diagonal", "Both prevalence"],
    an: 0, at: "ROC's random baseline is the diagonal; the PR curve's baseline is the prevalence (26.5% for Telco).",
    sl: "Slide 43 comparison table.",
    ex: "Choose PR when positives are rare/costly and false alarms matter.",
    mt: "Swapping the baselines." });

  Q({ id: "L6-MCQ-28", lec: L, pg: [44], tp: "Evaluation", sb: "Validation vs test", df: "medium", ty: "mcq", so: "lecture",
    pr: "When should the classification threshold be tuned, and where should the final evaluation be performed?",
    op: ["Tune the threshold on validation data; keep the test set for one final evaluation", "Tune on test data", "Skip validation", "Use training data for tuning"],
    an: 0, at: "Tune the threshold on validation data; keep the test set for one final evaluation.",
    sl: "Slide 44 report: accuracy 0.83, precision 0.60, recall 0.45, F1 0.51, AUC 0.84; majority baseline 0.80/0.00/0.00.",
    ex: "The judgment call: no metric alone decides deployment.",
    mt: "Threshold-tuning on the test set." });

  Q({ id: "L6-MCQ-29", lec: L, pg: [46], tp: "Decision trees", sb: "Splits", df: "medium", ty: "mcq", so: "lecture",
    pr: "What kind of splits does a decision tree use?",
    op: ["Diagonal splits", "Axis-aligned splits like tenure < 24 months", "Circular boundaries", "No splits"],
    an: 1, at: "Axis-aligned splits forming rectangular regions; more splits give finer approximations.",
    sl: "Slide 46: logistic gives a straight boundary; trees give piecewise rectangular boundaries.",
    ex: "Flexibility cuts both ways — trees can overfit.",
    mt: "Expecting curved boundaries from raw-feature trees." });

  Q({ id: "L6-MCQ-30", lec: L, pg: [48], tp: "Model comparison", sb: "Tree interpretability", df: "medium", ty: "mcq", so: "lecture",
    pr: "At depth 4, how many leaf rules can a binary tree produce?",
    op: ["4", "8", "16", "32"],
    an: 2, at: "Up to 16 leaf rules at depth 4 (2⁴) — larger trees become harder to communicate.",
    sl: "Slide 48: split conditions produce human-readable rules; LR offers log-odds coefficients.",
    ex: "Neither model family is universally best — compare validated performance and practical requirements.",
    mt: "Counting 4 leaves (one per level) instead of 2^depth." });

  Q({ id: "L6-MCQ-31", lec: L, pg: [50], tp: "Model selection", sb: "Judgment factors", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which factor is NOT among the model-selection judgment questions?",
    op: ["Explainability", "Maintenance", "Regulation", "GPU temperature"],
    an: 3, at: "The three factors: explainability (can stakeholders audit?), maintenance (retraining/monitoring), regulation (legal constraints).",
    sl: "Slide 50: metrics quantify behaviour on historical data — not deployment value.",
    ex: "Each question requires domain expertise, not a higher AUC.",
    mt: "Treating AUC as the only selection criterion." });

  Q({ id: "L6-MCQ-32", lec: L, pg: [52], tp: "Extensions", sb: "Solver", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which solver is sklearn's default for fitting logistic regression?",
    op: ["L-BFGS", "SGD", "Newton-CG only", "Adam"],
    an: 0, at: "L-BFGS — numerically minimises the penalised negative log-likelihood.",
    sl: "Slide 52: sklearn applies L2 regularisation by default (C=1.0).",
    ex: "Multiclass generalises via softmax; F1 extends via micro/macro averaging.",
    mt: "Assuming squared-error closed-form fitting." });
})();
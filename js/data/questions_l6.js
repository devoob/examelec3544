/* Question bank — Lecture 6 (pages 1–55).
   Logistic regression, odds ratios, confusion matrix, precision/recall/F1, ROC/AUC, thresholds, model selection. */
(function () {
  var L = 6;

  
  
  
  
  
  Q({ id: "L6-10-Q1", lec: L, pg: [10], tp: "Logistic regression", sb: "Why not linear", df: "medium", ty: "mcq", so: "lecture",
    pr: "What two problems arise when fitting linear regression to a binary target?",
    op: [
      "Bias and collinearity",
      "1) Output range: predictions can leave [0,1] (−0.2 or 1.3 cannot be probabilities); 2) calibration: being inside [0,1] does not guarantee predicted probabilities match observed frequencies on held-out data. Solution: logistic regression wraps the linear predictor in a function mapping any real input to (0,1)",
      "Multicollinearity and outliers",
      "Class imbalance and missing data"
    ], an: 1,
    at: "The range problem and the calibration caveat, plus the logistic fix.",
    sl: "Slide 10 two numbered issues + solution box.",
    ex: "Calibration must still be checked against held-out data.",
    mt: "Thinking the sigmoid guarantees calibrated probabilities — it guarantees range only." });

  Q({ id: "L6-11-Q1", lec: L, pg: [11], tp: "Sigmoid", sb: "Properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the three key properties of the sigmoid?",
    op: [
      "Range (0,1) — valid probability range, not a calibration guarantee; symmetry σ(0) = 0.5 (positive z → >0.5, negative → <0.5); asymptotic — approaches 1/−0 but never exactly reaches them",
      "Range [0,100]; symmetric; linear",
      "Range [−1,1]; σ(0)=0; periodic",
      "Range (−∞,∞); no asymptotes"
    ], an: 0,
    at: "The three properties as stated.",
    sl: "Slide 11 sigmoid properties with z-axis interpretation.",
    ex: "σ(0) = 0.5 is also the default decision threshold — a choice, not a statistical requirement.",
    mt: "Claiming σ exactly reaches 0/1 — it is asymptotic." });

  Q({ id: "L6-12-Q1", lec: L, pg: [12], tp: "Logistic regression", sb: "Core idea", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the complete core idea of logistic regression?",
    op: [
      "It predicts class labels directly",
      "It wraps a linear model inside a sigmoid; the model outputs a probability in (0,1), not a class label — what to do with the probability is a separate decision made later. Note: β coefficients minimize negative log-likelihood, usually with a regularization penalty",
      "It minimizes squared error like OLS",
      "It requires normally distributed features"
    ], an: 1,
    at: "The wrap-a-linear-model-in-sigmoid idea; probability output; threshold decided later; β estimated by minimizing penalized negative log-likelihood.",
    sl: "Slide 12 key idea + fitting note.",
    ex: "This probability-vs-label distinction motivates the separate question of turning a probability into a decision (thresholding).",
    mt: "Saying logistic regression minimizes squared error — it minimizes (penalized) negative log-likelihood." });

  Q({ id: "L6-13-Q1", lec: L, pg: [13], tp: "Logistic regression", sb: "Two forms", df: "hard", ty: "calc", so: "lecture",
    pr: "Give both forms of the logistic equation, and compute odds and log-odds for P = 0.75.",
    at: "Probability form p = σ(z) = 1/(1+e^{−z}) with z = β₀ + β₁x₁ + ... (operationally useful, outputs in (0,1)); log-odds form log(p/(1−p)) = β₀ + β₁x₁ + ... (interpretively useful — coefficients live in log-odds space). For P = 0.75: odds = 0.75/0.25 = 3-to-1; log-odds = log(3) ≈ 1.10.",
    sl: "Slide 13 two forms + odds worked example (0.75 → 3-to-1 → log-odds ≈ 1.10) + equivalence note.",
    ex: "The two forms are mathematically equivalent; the log-odds form makes coefficients plain-language interpretable.",
    mt: "Computing log(0.75) instead of log-odds log(3) — the log-odds is log(p/(1−p))." });

  Q({ id: "L6-14-Q1", lec: 6, pg: [14], tp: "Coefficients", sb: "Log-odds interpretation", df: "medium", ty: "mcq", so: "lecture",
    pr: "A logistic regression fitted on churn data gives β = −0.89 for long-term contract (1) vs month-to-month (0). Which interpretation is correct?",
    op: ["It proves long-term contracts reduce churn risk", "e^β ≈ 0.41 — long-term contract customers have roughly 59% lower odds of churning, holding other features fixed (an association)", "It is a coding error", "It means contract type is irrelevant"],
    an: 1,
    at: "β = −0.89 is a log-odds coefficient: odds ratio = e^{−0.89} ≈ 0.41, so the odds of churning are multiplied by ≈0.41 (about 59% lower) for long-term vs month-to-month customers, all else held fixed. Association — not a causal guarantee.",
    sl: "Translation chain: log-odds coefficient → exponentiate for the odds ratio → plain language. 0.41 ⇒ ≈59% lower odds.",
    ex: "Acting on it (moving customers to long-term contracts) goes beyond the model's evidence — self-selection may explain the pattern.",
    mt: "Jumping from an association coefficient to a guaranteed intervention effect." });

  
  Q({ id: "L6-16-Q1", lec: L, pg: [16], tp: "Odds ratios", sb: "Translation chain", df: "hard", ty: "calc", so: "lecture",
    pr: "Translate β = −0.89 (long-term contract) through the three-step chain: log-odds → odds ratio → plain language.",
    at: "Step 1: β = −0.89 is a change in log-odds. Step 2: e^{−0.89} ≈ 0.41 (odds ratio — factor multiplying the odds per unit increase). Step 3: long-term contract customers have odds of churning approximately 59% lower than month-to-month customers, holding all other features constant. Rules: OR < 1 lower modelled odds; > 1 higher; = 1 no change. These are associations, not causal effects.",
    sl: "Slide 16 three steps + interpretation rules + association caveat.",
    ex: "The 59% figure: 1 − 0.41 = 0.59 = 59% lower odds (not 59% lower probability!).",
    mt: "Saying '59% lower churn probability' — it is 59% lower ODDS; probability change depends on the base.",
    mr: null });

  Q({ id: "L6-17-Q1", lec: L, pg: [17], tp: "Odds ratios", sb: "Coefficient table", df: "hard", ty: "calc", so: "lecture",
    pr: "Reproduce the illustrative coefficient table: β and e^β with interpretations for the five features.",
    at: "Long-term contract −0.89 → 0.41: ~59% lower odds vs month-to-month. Tenure (years) −0.46 → 0.63: per extra year, odds × 0.63. Monthly charges ($10 units) +0.38 → 1.46: per extra $10, odds × 1.46. No tech support +0.31 → 1.36: odds × 1.36 vs support. Paperless billing +0.22 → 1.25: odds × 1.25. Sign convention (holding others fixed): β<0 → OR<1; β>0 → OR>1; β=0 → OR=1. Modelled associations.",
    sl: "Slide 17 five-row table + sign convention.",
    ex: "e^{−0.46} ≈ 0.631; e^{0.38} ≈ 1.462; e^{0.31} ≈ 1.364; e^{0.22} ≈ 1.246. Know how to check any of these with a calculator.",
    mt: "Forgetting the per-unit definitions ($10 units for charges; years for tenure) — units change the odds-ratio meaning." });

  Q({ id: "L6-18-Q1", lec: L, pg: [18], tp: "Causality", sb: "Coefficients ≠ causal", df: "hard", ty: "mcq", so: "lecture",
    pr: "What can and cannot a logistic regression model do?",
    op: [
      "It can prove interventions will work",
      "CAN: score customers by predicted churn probability; describe feature associations with stated units; guide where to investigate. CANNOT: prove that offering a long-term contract will reduce churn risk; replace a controlled experiment for causal questions; specify which interventions are cost-effective. Concretely: 'customers on long-term contracts churn less' ≠ 'moving customers to long-term contracts will reduce churn' — self-selection may explain the pattern",
      "It can do everything the business needs",
      "It cannot produce probabilities"
    ], an: 1,
    at: "The can/cannot lists and the self-selection explanation as stated.",
    sl: "Slide 18 key can/cannot lists + concrete self-selection example; sets up turning probabilities into decisions.",
    ex: "The self-selection mechanism (loyal customers choose long contracts) is the canonical alternative explanation.",
    mt: "Treating the association as a treatment effect." });

  
  Q({ id: "L6-22-Q1", lec: L, pg: [22], tp: "Thresholds", sb: "Probability to decision", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does the threshold choice involve?",
    op: [
      "θ = 0.5 is statistically required",
      "Flagging requires a rule: 'Flag as churner if P(churn) ≥ θ'. θ=0.3 flags aggressively (catch more churners, also flag loyal customers); θ=0.5 the default (seems fair — but is it right here?); θ=0.7 flags conservatively (higher confidence per flag but misses many real churners). The threshold is a choice, not a given — the right value depends on the cost of each error type",
      "Higher thresholds always improve both precision and recall",
      "The model picks the threshold itself"
    ], an: 1,
    at: "The three threshold options and the 'choice, not a given' principle.",
    sl: "Slide 22 question + three θ panels + closing note.",
    ex: "Threshold consequence math: lowering θ cannot decrease recall (slide 28 PR curve).",
    mt: "Treating 0.5 as statistically mandated — the slide calls it 'a choice'." });

  Q({ id: "L6-23-Q1", lec: L, pg: [23], tp: "Confusion matrix", sb: "Four outcomes", df: "medium", ty: "mcq", so: "lecture",
    pr: "What defines the confusion-matrix quadrants, and what is the threshold rule?",
    op: [
      "Positive class = no churn; threshold rule: predict churn if P ≥ 0.3 always",
      "Positive class = churn = 1; Predict churn (1) if P(churn | x) ≥ θ else no churn (0); TP/TN correct predictions, FP/FN errors; True/False refers to whether the prediction was correct. Default θ = 0.5, but this is a choice — not a statistical requirement",
      "TP means predicted churn incorrectly",
      "There are six outcome types"
    ], an: 1,
    at: "The quadrant definitions, threshold rule, and default-choice caveat as stated.",
    sl: "Slide 23 confusion matrix visual + threshold box.",
    ex: "The midterm-style cohort applies this: 180 TP / 220 FN / 120 FP / 1,480 TN at θ = 0.5.",
    mt: "Flipping which errors are FP vs FN; forgetting which class is positive.",
    mr: null });

  Q({ id: "L6-24-Q1", lec: L, pg: [24], tp: "Precision", sb: "Definition", df: "medium", ty: "calc", so: "lecture",
    pr: "Define precision, interpret high vs low values, and compute it for TP = 180, FP = 120.",
    at: "Precision = TP/(TP+FP) — of all flagged customers, the fraction that actually churn. Computation: 180/(180+120) = 0.60. High precision: most flags are real churners — retention budget spent efficiently, few wasted discounts. Low precision: many flagged customers are loyal — campaign wastes budget. TP = correctly flagged churners; FP = loyal customers incorrectly flagged.",
    sl: "Slide 24 formula + high/low interpretation + component notes.",
    ex: "The midterm-style 2,000-customer matrix gives precision 0.60 at θ=0.5 under the illustrative read.",
    mt: "Using TN in the precision denominator — it is TP+FP only." });

  Q({ id: "L6-25-Q1", lec: L, pg: [25], tp: "Recall", sb: "Definition", df: "medium", ty: "calc", so: "lecture",
    pr: "Define recall, interpret high vs low values, compute it for TP = 180, FN = 220, and state its other names.",
    at: "Recall = TP/(TP+FN) — of all customers who actually churn, the fraction caught. Computation: 180/(180+220) = 0.45. High recall: most would-be churners flagged — fewer slip through, lost revenue minimized. Low recall: many real churners missed — each is lost subscription revenue. Recall = TPR (true positive rate) = sensitivity — the same quantity used in ROC.",
    sl: "Slide 25 formula + high/low interpretation + note (Recall = TPR = Sensitivity).",
    ex: "The recall-denominator is the actual positive count (400 in the example cohort).",
    mt: "Using FP in the recall denominator — it is TP+FN." });

  Q({ id: "L6-26-Q1", lec: L, pg: [26], tp: "Confusion matrix", sb: "Worked example", df: "hard", ty: "calc", so: "lecture",
    pr: "Illustrative cohort: 2,000 customers including 400 churners; at θ=0.5: TP=180, FN=220, FP=120, TN=1,480. Compute precision and recall and interpret.",
    at: "Precision = 180/(180+120) = 180/300 = 0.60 (60% of flagged customers actually churn). Recall = 180/(180+220) = 180/400 = 0.45 (we catch 45% of actual churners). At threshold 0.5 we catch fewer than half of all churners — whether that is acceptable depends on the cost of missing them.",
    sl: "Slide 26 four counts + both computations + closing note.",
    ex: "Check: accuracy = (180+1480)/2000 = 0.83; majority baseline = 0.80 (slide 33).",
    mt: "Dividing by the wrong totals (precision uses predicted positives 300; recall uses actual positives 400)." });

  Q({ id: "L6-27-Q1", lec: L, pg: [27], tp: "Thresholds", sb: "Business utility", df: "hard", ty: "calc", so: "lecture",
    pr: "At a chosen threshold a classifier yields TP = 284, FP = 308, FN = 116 (TN = 1,292). Payoffs: TP +$450, FP −$50, FN −$500, TN $0. Compute the total utility.",
    at: "U = 450×284 − 50×308 − 500×116 = 127,800 − 15,400 − 58,000 = +$54,400.",
    sl: "U = c_TP·TP + c_FP·FP + c_FN·FN + c_TN·TN. Substituting: 127,800 − 15,400 − 58,000 + 0 = 54,400. Other thresholds change TP/FP/FN; choose θ maximising utility, tuned on validation data.",
    ex: "Verify one row: θ=0.3 with 2,000 customers: recall 0.71 → TP = 0.71×400 = 284; precision 0.48 → FP = TP/0.48 − TP ≈ 308; FN = 400−284 = 116; utility = 450(284) − 50(308) − 500(116) = 127,800 − 15,400 − 58,000 = 54,400 ✓ (rounded counts).",
    mt: "Choosing θ=0.5 by default when the cost structure says otherwise; treating the payoffs as estimated from data." });

  Q({ id: "L6-28-Q1", lec: L, pg: [28], tp: "PR curve", sb: "Tradeoffs", df: "medium", ty: "mcq", so: "lecture",
    pr: "How do you read the precision-recall curve?",
    op: [
      "Each point is a dataset; higher is worse",
      "Each point represents a threshold; lowering the threshold cannot decrease recall; precision may rise or fall. Top-right corner (precision 1, recall 1) = perfect classifier; horizontal baseline = random classifier with expected precision equal to prevalence (20% illustrative; ~26.5% for Telco)",
      "The curve plots accuracy vs threshold",
      "The PR curve requires no threshold at all"
    ], an: 1,
    at: "The per-point threshold reading, monotone recall property, perfect corner, and prevalence baseline as stated.",
    sl: "Slide 28 PR curve figure description + corners/baseline annotations.",
    ex: "The random-baseline = prevalence fact contrasts with ROC's diagonal baseline.",
    mt: "Looking for the random baseline at precision 0 (it equals prevalence)." });

  Q({ id: "L6-29-Q1", lec: L, pg: [29], tp: "Thresholds", sb: "Human decision", df: "medium", ty: "mcq", so: "lecture",
    pr: "What can the CTA do vs what only a human can do in threshold selection?",
    op: [
      "The CTA can choose the threshold because it knows the business",
      "CTA can: compute precision/recall at any threshold; generate the full PR curve; find the threshold minimizing a cost function you specify. Human must: specify what a false positive costs; specify what a false negative costs; decide whether those tradeoffs are acceptable. The CTA cannot derive the cost function from data — specifying error costs is irreducibly a human responsibility",
      "Only humans can compute precision and recall",
      "Threshold selection requires no cost information"
    ], an: 1,
    at: "The do/cannot split as stated.",
    sl: "Slide 29 key insight + two columns.",
    ex: "Core human-judgment lesson — the same pattern as base rates.",
    mt: "Asking the model to choose the threshold without providing costs." });

  Q({ id: "L6-30-Q1", lec: L, pg: [30], tp: "F1", sb: "Harmonic mean", df: "hard", ty: "calc", so: "lecture",
    pr: "Define F1 and compute it for precision 0.90, recall 0.10. Compare with the arithmetic mean and state when to use F1.",
    at: "F1 = 2×(P×R)/(P+R) — harmonic mean; dominated by whichever value is smaller. Computation: F1 = 2×(0.90×0.10)/(0.90+0.10) = 0.18. Arithmetic mean = 0.50 (misleading — suggests a mediocre but acceptable classifier); F1 = 0.18 reveals the model almost never catches churners. Use F1 when both precision and recall matter and you want a single number, especially for model comparison; when the two have different costs, use the PR curve and cost-weighted optimization instead.",
    sl: "Slide 30 formula + arithmetic-vs-harmonic comparison + when-to-use note.",
    ex: "Harmonic ≤ arithmetic always; equality only when P = R.",
    mt: "Reporting the arithmetic mean when a single balanced number is needed." });

  Q({ id: "L6-31-Q1", lec: L, pg: [31], tp: "Accuracy", sb: "Imbalance question", df: "easy", ty: "calc", so: "lecture",
    pr: "Telco has 73.5% non-churners, 26.5% churners. What accuracy would an always-no-churn classifier achieve, and what does it catch?",
    at: "Accuracy = 0.735 (correct for all 73.5% non-churners); catches zero churners (recall = 0, F1 = 0). Accuracy is the fraction of all predictions correct.",
    sl: "Slide 31 question + hint box.",
    ex: "The dummy-classifier demo (slide 32) confirms ≈0.735 empirically.",
    mt: "Concluding 73.5% is 'good' — it catches none of the churners." });

  
  Q({ id: "L6-33-Q1", lec: L, pg: [33], tp: "Accuracy", sb: "Metric comparison", df: "hard", ty: "mcq", so: "lecture",
    pr: "Compare the naïve classifier with the score model on the illustrative cohort.",
    op: [
      "Naïve: accuracy 0.80 ⚠, precision —, recall 0.00 ✗, F1 0.00 ✗. Score model: accuracy 0.83, precision 0.60, recall 0.45, F1 0.51. When a dataset is imbalanced, always report precision and recall alongside accuracy; if only accuracy is reported, ask about the class distribution first",
      "The naïve classifier beats the model on F1",
      "Both models have recall 0.45",
      "Accuracy is higher for the naïve classifier"
    ], an: 0,
    at: "The comparison table and the reporting rule as stated.",
    sl: "Slide 33 key insight + comparison table + closing rule.",
    ex: "The ⚠ and ✗ annotations are the exam-relevant signals.",
    mt: "Missing that recall = 0 makes the naïve classifier useless despite 0.80 accuracy." });

  Q({ id: "L6-34-Q1", lec: L, pg: [34], tp: "Metrics", sb: "Decision guide", df: "medium", ty: "mcq", so: "lecture",
    pr: "Match metric to question: which pairing is correct?",
    op: [
      "Precision — of real positives, how many did we catch?",
      "Recall — of flagged positives, how many are real?",
      "Precision — of flagged positives, how many are real (when FP is costly); Recall — of real positives, how many did we catch (when FN is costly); F1 — single summary when both matter; PR curve — full tradeoff across thresholds, imbalanced datasets; ROC/AUC — threshold-independent ranking quality",
      "ROC/AUC — only for balanced data"
    ], an: 2,
    at: "The metric-to-question mapping as stated.",
    sl: "Metric decision guide: accuracy, precision, recall, F1, PR curve, ROC/AUC — with the question each answers.",
    ex: "This table is the go-to summary for metric-choice questions.",
    mt: "Swapping precision and recall questions." });

  
  Q({ id: "L6-37-Q1", lec: L, pg: [37], tp: "ROC", sb: "Threshold-free idea", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the key idea of threshold-free evaluation?",
    op: [
      "Fix θ=0.5 and report one precision-recall pair",
      "Instead of fixing θ, compute the true positive rate and false positive rate at every possible threshold and trace the resulting curve — the ROC curve — summarizing classifier quality across all thresholds simultaneously",
      "Use accuracy without any threshold",
      "Average precision over recall"
    ], an: 1,
    at: "Sweep every threshold: compute TPR and FPR at each, trace the ROC curve.",
    sl: "Slide 37 opening question + key idea box.",
    ex: "'What if we swept every threshold at once?' is the memorable framing.",
    mt: "Thinking ROC curves still require a threshold — they summarize all thresholds." });

  Q({ id: "L6-38-Q1", lec: L, pg: [38], tp: "ROC", sb: "TPR/FPR", df: "hard", ty: "calc", so: "lecture",
    pr: "Define TPR and FPR, compute them for the illustrative matrix (TP=180, FN=220, FP=120, TN=1,480), and give the alternative names.",
    at: "TPR = TP/(TP+FN) = recall = sensitivity — of actual churners, the fraction flagged: 180/400 = 0.45. FPR = FP/(FP+TN) = 1 − specificity — of non-churners, the fraction incorrectly flagged: 120/1,600 = 0.075. These give one ROC point at θ=0.5. TPR = Recall = Sensitivity; FPR = 1 − Specificity (terms appear in medical/security literature). FPR has no equivalent in the precision-recall framework.",
    sl: "Slide 38 two formulas + definitions + illustrative computation.",
    ex: "Check: FP+TN = 120+1480 = 1,600 non-churners (2000 total − 400 churners).",
    mt: "Using FP+FN in the FPR denominator; forgetting FPR = 1 − specificity." });

  Q({ id: "L6-39-Q1", lec: L, pg: [39], tp: "ROC", sb: "Reading the curve", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the landmarks of the ROC curve?",
    op: [
      "Top-left (0,1) perfect classifier (TPR=1, FPR=0); diagonal = random-ranking baseline (expected TPR = FPR); top-right (1,1) = everyone flagged (TPR=FPR=1). Better ranking generally bends the curve toward the top-left",
      "Bottom-left is perfect",
      "The diagonal is the perfect classifier",
      "ROC plots precision vs recall"
    ], an: 0,
    at: "The landmarks as stated; each threshold gives one (FPR, TPR) pair.",
    sl: "Slide 39 ROC curve annotations + perfect/random/everyone-flagged explanations.",
    ex: "A perfectly separated test set reaches (0,1).",
    mt: "Confusing ROC's diagonal with the PR curve's prevalence baseline." });

  Q({ id: "L6-40-Q1", lec: L, pg: [40], tp: "AUC", sb: "Probabilistic meaning", df: "hard", ty: "calc", so: "lecture",
    pr: "Give the probabilistic definition of AUC and interpret AUC = 0.84 with benchmarks.",
    at: "AUC = P(s⁺ > s⁻) + ½P(s⁺ = s⁻) — compare a random churner and non-churner: correct ranking earns 1, tie ½, incorrect 0. AUC = 0.84 means the mean ranking credit is about 0.84 across all churner/non-churner pairs (ties half-credited). Benchmarks: 1.0 perfect ranking; 0.5 chance-level average ranking credit; 0.0 perfectly wrong (systematically ranks negatives above positives). Judge usefulness against baselines, operating region, error costs, and uncertainty.",
    sl: "Slide 40 formula + interpretation + benchmarks + verification note (random pair sampling vs sklearn).",
    ex: "This interpretation is verified empirically in Demo 5 (10,000 pairs ≈ 0.84).",
    mt: "Calling AUC the probability of correct classification — it is pairwise ranking credit." });

  
  Q({ id: "L6-43-Q1", lec: L, pg: [43], tp: "ROC vs PR", sb: "Comparison", df: "hard", ty: "mcq", so: "lecture",
    pr: "When should you prefer ROC/AUC vs the PR curve?",
    op: [
      "ROC for imbalanced data; PR for balanced data",
      "ROC + AUC: axes FPR vs TPR; summarizes ranking across thresholds; diagonal = random baseline; best for comparing ranking quality (for deployment also consider class balance and error costs); caution: a small FPR can still mean many false positives and low precision when negatives are numerous. PR curve: axes recall vs precision; random baseline = prevalence; best when positives are rare or costly to miss and false alarms also matter (Telco ~26.5% churn)",
      "They are identical in every situation",
      "PR curves cannot be used on imbalanced data"
    ], an: 1,
    at: "The comparison as stated, including the FPR caution and Telco prevalence note.",
    sl: "Slide 43 two-column comparative table.",
    ex: "The caution resolves why PR can be the better choice at 0.1%-type imbalances.",
    mt: "Assuming ROC is always the safer choice on imbalanced data — the FPR caution says otherwise." });

  
  Q({ id: "L6-45-Q1", lec: L, pg: [45], tp: "Model selection", sb: "Why another model", df: "medium", ty: "mcq", so: "lecture",
    pr: "What three motivations for a different model are raised?",
    op: [
      "Speed; memory; cost",
      "The decision boundary (what if the pattern isn't linear? logistic regression has a linear boundary); interpretability vs performance (is the coefficient table worth a performance cost?); when does the model fail (even AUC 0.84 leaves room; inspect incorrect/tied pairs)",
      "Color; style; brand",
      "Data size; label noise; missing values"
    ], an: 1,
    at: "The three motivations as stated (with 'what if the pattern isn't linear?' as the opening).",
    sl: "Slide 45 opening question + three panels.",
    ex: "Answered by the decision-tree comparison (slides 46–49).",
    mt: "Ignoring the linear-boundary limitation of logistic regression." });

  Q({ id: "L6-46-Q1", lec: L, pg: [46], tp: "Decision trees", sb: "Boundaries", df: "medium", ty: "mcq", so: "lecture",
    pr: "Contrast logistic and decision-tree boundaries and the core tradeoff.",
    op: [
      "Both have linear boundaries",
      "Logistic: straight boundary with the two original features (nonlinear feature engineering can curve it in input space); Decision tree: axis-aligned splits (tenure < 24 months, monthly charges > $70) forming rectangular regions; more splits allow finer piecewise approximations. Core tradeoff: a tree can fit non-linear patterns logistic regression misses, but it can also overfit — memorising the training data. More flexibility means more risk of overfitting",
      "Trees cannot overfit",
      "Logistic boundaries are always rectangular"
    ], an: 1,
    at: "The two boundary shapes and the flexibility/overfitting tradeoff as stated.",
    sl: "Slide 46 three description blocks.",
    ex: "The figure on slide 49 shows both boundaries side by side on tenure vs monthly charges.",
    mt: "Believing trees are strictly better — the tradeoff cuts both ways." });

  
  
  Q({ id: "L6-49-Q1", lec: L, pg: [49], tp: "Model comparison", sb: "Boundaries figure", df: "hard", ty: "mcq", so: "lecture",
    pr: "Compare logistic regression and a decision tree: what shape is each decision boundary, and how do they differ in interpretability, feature-scaling requirements, and overfitting risk?",
    op: [
      "Logistic regression boundary (linear) vs decision tree boundary (piecewise rectangular) on Tenure vs Monthly charges; properties: ROC AUC 0.69 vs 0.65; F1 (θ=0.30) 0.26 vs 0.23; Precision 0.38 vs 0.29; Recall 0.19 vs 0.19; Interpretability: odds ratios with specified units vs if-then rules; Feature scaling: recommended for penalised LR vs not required; Overfitting risk: typically lower flexibility vs higher without depth limits",
      "Both models produce identical boundaries",
      "The tree wins every metric",
      "Feature scaling is required for trees"
    ], an: 0,
    at: "The figure (verified from image) and all seven property rows as stated (separate illustrative two-feature comparison, rounded values).",
    sl: "Slide 49 [figure-only slide] — logistic vs tree boundary plots plus metric/property table.",
    ex: "This slide is the empirical anchor for 'neither model family is universally best'.",
    mt: "Forgetting feature scaling is recommended for penalised logistic regression but unnecessary for trees." });

  Q({ id: "L6-50-Q1", lec: L, pg: [50], tp: "Model selection", sb: "Judgment call", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why is model selection a judgment call?",
    op: [
      "Because metrics are always wrong",
      "Metrics quantify model behaviour on historical data — not the value of deploying it in a specific business context. Choosing requires answering non-metric questions: explainability (can stakeholders understand/audit decisions?), maintenance (retraining/monitoring burden), regulation (legal constraints on models used for these decisions). Each requires domain expertise, stakeholder knowledge, and institutional context — not a higher AUC",
      "Because the CTA decides",
      "Because trees are always more explainable"
    ], an: 1,
    at: "The judgment-call rationale with explainability/maintenance/regulation as stated.",
    sl: "Slide 50 key insight + three side panels.",
    ex: "Parallels L3's 'statistical vs practical significance' theme: metrics inform, they don't decide.",
    mt: "Assuming the highest AUC always wins the deployment decision." });

  
  })();
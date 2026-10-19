/* Integrated midterm-style question bank — 30+ questions mixing lectures.
   Each question tags multiple lectures in pg as [lec, page] pairs via "cross" field refs in the text. */
(function () {
  var L = 0;

  Q({ id: "INT-1", lec: L, pg: [], tp: "Similarity + PCA", sb: "Full pipeline question", df: "hard", ty: "long", so: "integrated",
    pr: "A text dataset yields two documents with count vectors a = (2,2,1), b = (8,9,6) over (data, model, accuracy), and a third vector c = (6,11,4) of a centered, standardized feature space with covariance eigenvalues λ = (4, 1.5, 0.3, 0.2). (a) Compute cos(a,b). (b) If these eigenvalues belong to a four-feature dataset, compute EVR₁ and the 2-component cumulative share. (c) Which pair would Euclidean distance call closer if a, b, c are all in the same 3-D space? Compute d(a,b) and d(b,c). (d) One sentence: which metric matches human topic judgment and why?",
    at: "cos(a,b) ≈ 0.991. EVR₁ = 4/6 ≈ 0.667; cumulative 2 PCs = 5.5/6 ≈ 0.917. d(a,b) = √110 ≈ 10.49; d(b,c) = √12 ≈ 3.46 — Euclidean says (b,c) closer. Cosine matches human judgment: it compares keyword proportions (topic direction) and is not dominated by document length.",
    sl: "cos = 40/(3·√181) ≈ 0.991 (see MTQ-1a-iii).\nEVR from λ sum 6.\nDistances with square roots.",
    ex: "A combined Q1-style question hitting similarity, covariance-spectrum, and PCA vocabulary in one go.",
    mt: "Mixing up which denominator belongs where; forgetting square roots.",
    ref: "Integrated — L2 p. 17–21, 67–70; Midterm Q1" });

  Q({ id: "INT-2", lec: L, pg: [], tp: "Covariance", sb: "Sign + matrix validity", df: "hard", ty: "long", so: "integrated",
    pr: "For a covariance matrix to be valid it must be symmetric and positive semidefinite. (a) Give two ways to violate validity, with a 2×2 example each. (b) For M = [[4,2],[2,1]], compute the eigenvalues and explain in one line why this matrix CAN still be a covariance matrix despite determinant 0. (c) Why can't this covariance matrix be inverted, and what does that imply for PCA?",
    at: "(a) (i) Asymmetry: [[2,1],[0,3]] — entry (1,2) = 1 but (2,1) = 0, and cov(X,Y) must equal cov(Y,X). (ii) Negative variance: [[−1,0.5],[0.5,2]] — the diagonal entry −1 would be Var(X₁) < 0 (and its eigenvalues −1.28, 2.28 include a negative one, violating PSD). (b) M is symmetric; trace = 5 and det = 4·1 − 2·2 = 0, so λ² − 5λ = 0 gives eigenvalues 5 and 0 — both ≥ 0, so M is positive SEMIdefinite and valid. (c) det(M) = 0 ⇒ M is singular (rank 1) and not invertible; the two features are perfectly linearly dependent (here perfectly correlated, |r| = 1 — the cloud collapses onto the line spanned by (1,1)). For PCA the eigen-decomposition still works (np.linalg.eigh handles singular matrices); a zero eigenvalue means one direction carries no variance — you can reduce to the data's true rank losslessly, but methods needing Σ⁻¹ (e.g., Mahalanobis distance) break.",
    sl: "Symmetry + PSD remain the two validity tests; determinant is irrelevant to validity.\nM = [[4,2],[2,1]]: char. equation λ² − tr·λ + det = λ² − 5λ = 0 → λ = 5 (eigenvector (1,1)) and λ = 0 (eigenvector (1,−1)).\nZero eigenvalue ⇒ data perfectly collinear ⇒ Σ has no inverse.\nPCA material: L2 p. 31 (properties), p. 47 (λ = 0 = collapse), p. 49 (eigen properties).",
    ex: "A determinant-0 covariance matrix is legitimate (PSD, not PD): perfect collinearity is a real data condition. Contrast with the invalid examples in (a), which break symmetry/diagonal non-negativity.",
    mt: "Declaring independence from zero covariance; miscomputing the covariances.",
    ref: "Integrated — L2 p. 28–31; Midterm 1(b)" });

  Q({ id: "INT-3", lec: L, pg: [], tp: "PCA", sb: "Projection + residual", df: "hard", ty: "calc", so: "integrated",
    pr: "Centered x = (3,1,2), v₁ = (1/√2, 1/√2, 0). (a) Compute the PC1 score. (b) Compute the projection of x onto PC1 alone. (c) Compute the residual and its norm. (d) What does the residual norm tell you about the variance captured for this single point?",
    at: "(a) 2√2 ≈ 2.828. (b) 2√2·v₁ = (2,2,0). (c) x − projection = (1,−1,2); norm = √6 ≈ 2.449. (d) The squared residual (6) is the part of x's squared norm not captured by PC1 — for this point, 8 of 14 squared units are captured (57%), matching that most but not all information lies along PC1.",
    sl: "‖x‖² = 9+1+4 = 14; captured ‖proj‖² = 4+4+0 = 8; residual² = 14−8 = 6.\n8/14 ≈ 57% of this point's squared length lies along PC1.",
    ex: "Distinguishes reconstructing with 1 PC vs all retained PCs — the midterm 1(c)(iv) case retained both and got zero residual.",
    mt: "Forgetting the projection is a vector (2,2,0), not the scalar score.",
    ref: "Integrated — L2 p. 59; Midterm 1(c)(iv)" });

  Q({ id: "INT-4", lec: L, pg: [], tp: "Regression", sb: "Full evaluation chain", df: "hard", ty: "calc", so: "integrated",
    pr: "Data: x = (2,4,6,8,10), y = (2,3,5,7,8) then plus F(6,4). Reproduce the exam's full chain: x̄, ȳ, β̂, ŷ equation, SSres, SStot, R², RMSE — for both the 5-point and 6-point versions — and explain the R² change in one sentence.",
    at: "5 points: x̄ = 6, ȳ = 5; β̂₁ = 0.8, β̂₀ = 0.2; ŷ = 0.2 + 0.8x; SSres = 0.4; SStot = 26; R² ≈ 0.9846; RMSE ≈ 0.2828. 6 points: x̄ = 6, ȳ = 29/6; β̂₁ = 0.8, β̂₀ = 1/30; ŷ = 0.0333 + 0.8x; SSres ≈ 1.2333; SStot ≈ 26.8333; R² ≈ 0.9540; RMSE ≈ 0.4534. The new point lies off the linear pattern (residual −0.833), inflating unexplained variance — R² fell although the slope didn't change.",
    sl: "All computations per MTQ-2a–2e. The slope is unchanged because x_F = x̄ = 6.",
    ex: "The single most likely full-length exam question — practice until the whole chain is automatic.",
    mt: "Reusing ȳ = 5 for the 6-point version; mixing up R²/RMSE denominators.",
    ref: "Integrated — Midterm Question 2 (full)" });

  Q({ id: "INT-5", lec: L, pg: [], tp: "Model evaluation", sb: "R² + residual plot", df: "hard", ty: "long", so: "integrated",
    pr: "A model reports training R² = 0.92 and test R² = 0.55. Its residual plot shows a funnel shape. (a) Diagnose the model's problems. (b) What do you recommend? (c) Why does a funnel pattern have a specific name?",
    at: "(a) Overfitting (train ≫ test) plus heteroscedasticity (funnel = variance increasing with predicted value). (b) Simplify/regularize (Ridge/Lasso), gather more data, possibly transform the target/features, and re-evaluate with proper validation; check the funnel cause. (c) The pattern is called heteroscedasticity — non-constant error variance — one of the four residual diagnostic patterns.",
    sl: "L5 p. 29–30 four patterns (random good; funnel = heteroscedasticity; curved = nonlinearity; clusters = missing categorical).\nTrain/test gap = overfitting signal (L5 p. 34–35).",
    ex: "Metrics (R², RMSE) plus residual diagnosis plus train/test discipline — the full L5 toolkit in one question.",
    mt: "Treating R² = 0.92 as 'good' without the test comparison and residual check.",
    ref: "Integrated — L5 p. 28–37" });

  Q({ id: "INT-6", lec: L, pg: [], tp: "Classification", sb: "Odds ratio + threshold", df: "hard", ty: "calc", so: "integrated",
    pr: "A logistic model gives β = +0.38 for monthly charges (in $10 units). (a) Convert to an odds ratio. (b) Interpret in one sentence. (c) The team plans to flag customers at θ = 0.5 on a 73.5/26.5 imbalanced dataset. Name two metric concerns and one recommendation.",
    at: "(a) e^{0.38} ≈ 1.46. (b) Per extra $10 of monthly charges, the odds of churning multiply by ≈1.46, holding other features fixed (association, not causation). (c) Concerns: accuracy is inflated by the majority class (naïve baseline 73.5%); precision/recall/F1 and AUC are needed, and the threshold should be chosen by a cost function — not by default.",
    sl: "OR rules: β>0 → OR>1 (L6 p. 16–17).\nImbalance metrics (L6 p. 31–34); threshold-as-choice (L6 p. 22/27/29).",
    ex: "Combines coefficient translation with the imbalance and threshold judgment themes.",
    mt: "Interpreting 1.46 as a probability multiplier rather than an odds multiplier.",
    ref: "Integrated — L6 p. 16–17, 22, 31–34" });

  Q({ id: "INT-7", lec: L, pg: [], tp: "Classification", sb: "Confusion matrix computations", df: "hard", ty: "calc", so: "integrated",
    pr: "Cohort: 2,000 customers, 400 churners; TP = 180, FP = 120, FN = 220, TN = 1,480 at θ = 0.5. Compute accuracy, precision, recall, F1, TPR, FPR, and the majority baseline. Would you ship this model? Justify.",
    at: "Accuracy = 1,660/2,000 = 0.83. Precision = 0.60. Recall = 0.45. F1 = 2(0.60×0.45)/(1.05) ≈ 0.514. TPR = 0.45; FPR = 120/1,600 = 0.075. Majority baseline: 0.80 accuracy, 0.00 recall. Ship? Not determinable from metrics alone — compare the cost of missing 55% of churners against campaign costs; the judgment requires business inputs (and threshold tuning on validation).",
    sl: "All formulas from L6 p. 24–26, 38.\nF1 = 2PR/(P+R) = 0.540/1.05 ≈ 0.514.",
    ex: "The final answer tests judgment — metrics inform, they cannot decide deployment.",
    mt: "Declaring 'ship it' from 0.83 accuracy; forgetting the baseline comparison.",
    ref: "Integrated — L6 p. 26–27, 33, 38, 44" });

  Q({ id: "INT-8", lec: L, pg: [], tp: "Classification", sb: "ROC/AUC", df: "hard", ty: "long", so: "integrated",
    pr: "(a) Define AUC probabilistically. (b) AUC = 0.84 — interpret. (c) The model's FPR is small but perceived as a problem. Explain the ROC caution and the recommended alternative curve for this dataset (26.5% churn).",
    at: "(a) AUC = P(s⁺ > s⁻) + ½P(s⁺ = s⁻) — pairwise ranking credit with ties half-counted. (b) Across random churner/non-churner pairs, the average ranking credit is 0.84. (c) A small FPR can still mean many false positives when negatives are numerous → low precision; the PR curve (baseline = prevalence 26.5%) shows flag reliability better when positives are rare/costly and false alarms matter.",
    sl: "L6 p. 40 (AUC definition/benchmarks), p. 43 (ROC vs PR guidance).\nFPR caution: 'small FPR can still mean many false positives and low precision when negatives are numerous.'",
    ex: "Rare-event evaluation is exactly where ROC and PR disagree in practical emphasis.",
    mt: "Reporting AUC = 0.84 as 'probability of correct classification'; ignoring the class-ratio caution.",
    ref: "Integrated — L6 p. 40–43" });

  Q({ id: "INT-9", lec: L, pg: [], tp: "Descriptive statistics", sb: "Anscombe lesson", df: "medium", ty: "short", so: "integrated",
    pr: "Four datasets share x̄ ≈ 9.0, ȳ ≈ 7.5, sₓ ≈ 3.3, sᵧ ≈ 2.0, r ≈ 0.816. (a) What are these datasets called? (b) What differs? (c) What is the AI-supervision lesson?",
    at: "(a) Anscombe's quartet (1973). (b) Their structure: I linear; II quadratic; III linear + outlier; IV vertical cluster + one extreme point. (c) AI computes what you ask for, not what you need to see — always request visualizations alongside summary statistics; cross-check numbers against visual evidence (VERIFY: Validate).",
    sl: "L3 p. 17–21 timeline of the lecture's core lesson.",
    ex: "Pairs with the L1 'always verify' and L4 'always visualize' themes.",
    mt: "Blaming computation errors — all statistics were correct; the request was incomplete.",
    ref: "Integrated — L3 p. 17–21; L1 p. 62" });

  Q({ id: "INT-10", lec: L, pg: [], tp: "Probability", sb: "Bayes + AI supervision", df: "hard", ty: "calc", so: "integrated",
    pr: "Prevalence 1%; sensitivity 99%; false positive rate 5%. (a) Compute P(disease | positive) by counting on 10,000 people. (b) The AI reports 'the test is 99% accurate, so a positive means 99% probability of disease.' What is wrong? (c) Name two other domains where the same base-rate trap applies.",
    at: "(a) 100 diseased; 99 true positives; 9,900 healthy → 495 false positives; total 990? — recompute: 99+495 = 594; P = 99/594 ≈ 16.7%. (b) The AI swapped conditionals: P(+|D) = 99% ≠ P(D|+) ≈ 17%; always ask for the base rate. (c) Airport security, fraud detection, spam filtering (also medical screening).",
    sl: "Counting table: diseased/healthy × test result.\nP(D|+) = 99/594.",
    ex: "The AI-supervision angle turns a probability computation into a judgment question.",
    mt: "Reporting 99% (sensitivity); forgetting the 9,900 healthy base.",
    ref: "Integrated — L3 p. 31–36; Midterm-style Bayes" });

  Q({ id: "INT-11", lec: L, pg: [], tp: "Statistics", sb: "CI + p-value misconceptions", df: "medium", ty: "mcq", so: "integrated",
    pr: "Which statement pair is entirely correct?",
    op: [
      "A 95% CI means a 95% probability the parameter is inside; p = 0.03 means 3% chance H₀ is true",
      "A 95% CI means 95% of intervals from repeated sampling cover the fixed parameter; a p-value is P(data this extreme | H₀ true) — neither is a probability about the hypothesis",
      "Both intervals and p-values are statements about the data's randomness only, so the misconceptions are harmless",
      "A p-value of 0.03 implies a 97% chance of replication"
    ], an: 1,
    at: "The correct interpretations: CI coverage is about the procedure; p is a conditional probability of the data given H₀.",
    sl: "L3 p. 39–40 (CI) and p. 47–49 (p-value misconceptions).",
    ex: "The two misconceptions are structurally identical: assigning probability to the wrong thing.",
    mt: "Choosing an option with one correct and one wrong half — read every clause.",
    ref: "Integrated — L3 p. 39–40, 47–49" });

  Q({ id: "INT-12", lec: L, pg: [], tp: "Missing data", sb: "Mechanism + imputation", df: "hard", ty: "long", so: "integrated",
    pr: "TotalCharges is missing exactly for customers with tenure = 0. (a) Which missingness mechanism is being assumed, and what is the reasoning? (b) Why is mean imputation (~$2,280) inappropriate? (c) What strategy is justified and what does its validity depend on?",
    at: "(a) MAR working assumption: missingness depends on the observed tenure (= 0), not on the unobserved TotalCharges value itself. (b) It inserts an impossible value for brand-new customers — an artificial spike that contradicts the data-generating process and distorts the distribution. (c) Conditional imputation by tenure group (zero-tenure customers borrow from similar 1–3 month customers); its validity depends on the imputation model and assumptions for zero-tenure customers.",
    sl: "L4 p. 39 (mechanisms), 44 (three strategies compared), 45 (mechanism connection).",
    ex: "The mechanism is the judgment call; implementation is just code — the lecture's meta-lesson.",
    mt: "Claiming the mechanism is provable from data alone; using median imputation to 'avoid' the problem.",
    ref: "Integrated — L4 p. 39–45" });

  Q({ id: "INT-13", lec: L, pg: [], tp: "Data quality", sb: "Four-check application", df: "medium", ty: "long", so: "integrated",
    pr: "A dataset column 'TotalCharges' arrives as dtype object with blank strings; 'SeniorCitizen' is int64 with values 0/1; churn rate is ~27%. Apply the four-check protocol: what do you check and what do you find?",
    at: "Structural: dtype mismatch — TotalCharges object instead of float (hidden quality issue); SeniorCitizen int64 but binary categorical (valid 0/1 indicator). Completeness: blanks are not NaN — sentinel-value check needed; missingness concentrated at tenure = 0. Validity: cross-field inconsistency (tenure 0 with blanks), inconsistent categories elsewhere, duplicates check. Distributional: churn ~27% (moderate imbalance, not extreme); tenure bimodal; charges ~uniform $18–118. Output: prioritized quality report with recommended actions.",
    sl: "L4 p. 29–38 (protocol and report structure); Telco specifics from p. 30–36, 51.",
    ex: "A full protocol walkthrough on the course's running dataset.",
    mt: "Missing the sentinel-value check; treating SeniorCitizen as continuous; calling 27% extreme imbalance.",
    ref: "Integrated — L4 p. 29–38, 51" });

  Q({ id: "INT-14", lec: L, pg: [], tp: "Preprocessing", sb: "Scaling + leakage", df: "hard", ty: "long", so: "integrated",
    pr: "(a) When does scaling matter and when not? (b) Why does Ridge/Lasso require standardization? (c) A student fits StandardScaler on the full dataset before the train/test split. What is wrong and how do you fix it?",
    at: "(a) Distance-based (KNN, SVM, PCA) and gradient-based (logistic regression, neural nets) methods need scaling; tree-based methods and Gaussian NB are invariant. (b) The penalty λΣβ²/λΣ|β| treats all coefficients equally — unscaled features have different-scale coefficients and get unfairly penalized (MedInc 0.5–15 vs AveRooms 1–8). (c) Leakage: test statistics contaminate training; fit on training only — scaler.fit(X_train), then transform both splits (or use an sklearn Pipeline/ColumnTransformer).",
    sl: "L4 p. 56 (when scaling matters) + L5 p. 45 (regularization scaling + fit-on-training-only) + L4 p. 59 (pipeline).",
    ex: "One question touching L1, L4, and L5 preprocessing principles.",
    mt: "Fitting any preprocessing on the full dataset; scaling for tree models.",
    ref: "Integrated — L4 p. 56/59; L5 p. 45" });

  Q({ id: "INT-15", lec: L, pg: [], tp: "Multicollinearity", sb: "Coefficient shift + VIF", df: "hard", ty: "long", so: "integrated",
    pr: "Price ~ AveRooms gives β = 0.35; adding MedInc changes it to 0.12. (a) Explain the change. (b) Give the supporting numbers. (c) What is VIF and the thresholds? (d) Which remedy suits this situation if interpretation is the goal?",
    at: "(a) The predictors are correlated — they share explanatory power; the simple regression gives AveRooms credit for part of MedInc's effect; the multiple regression isolates partial effects. (b) r(AveRooms, MedInc) ≈ 0.33; r(Price, MedInc) ≈ 0.69. (c) VIF measures how much a coefficient's variance is inflated by correlation with other predictors: =1 none; 1–5 moderate; >5 concerning; >10 serious. (d) Remedies: remove one, combine, or regularize (Ridge/Elastic Net if a stable shrunken model is acceptable) — for interpretation, removing/combining is cleaner; but prediction suffers less anyway.",
    sl: "L5 p. 16–18 (shift + verification), p. 22–24 (definition, VIF, remedies).",
    ex: "Covers the coefficient-shift mechanism and the diagnostics toolkit together.",
    mt: "Claiming the simple regression is 'wrong' — it answers a different question (marginal association).",
    ref: "Integrated — L5 p. 16–24" });

  Q({ id: "INT-16", lec: L, pg: [], tp: "Regularization", sb: "Ridge vs Lasso geometry", df: "hard", ty: "long", so: "integrated",
    pr: "(a) Write both penalties and state the behavioral difference. (b) Explain geometrically why Lasso zeros coefficients. (c) When is Ridge preferable? (d) What does Elastic Net combine?",
    at: "(a) Ridge: λΣβj² — shrinks, typically nonzero; Lasso: λΣ|βj| — some coefficients exactly zero (feature selection). (b) Constraint regions: L1 diamond has corners on the axes; the loss ellipses first touch a corner → β = 0; the L2 circle has no corners → smooth tangency → β ≠ 0. (c) When many features each contribute and/or features are highly correlated (Lasso arbitrarily picks one of a correlated group; Ridge is more stable); also for stable shrinking with multicollinearity. (d) Elastic Net: λ₁Σ|βj| + λ₂Σβj² — selection from L1 + stability from L2.",
    sl: "L5 p. 42–50 (penalties, paths, geometry, comparison table).",
    ex: "'Corners produce zeros' is the sentence the exam wants in (b).",
    mt: "Saying Lasso always zeros 'most' coefficients — it zeros when ellipses hit corners; the mechanism explains sparsity.",
    ref: "Integrated — L5 p. 42–50" });

  Q({ id: "INT-17", lec: L, pg: [], tp: "Model evaluation", sb: "Random feature puzzle", df: "hard", ty: "long", so: "integrated",
    pr: "(a) Why can't training R² decrease when adding a random feature under OLS? (b) What happens to test R² and why? (c) How does this connect to the bias-variance tradeoff?",
    at: "(a) OLS gains flexibility: any finite sample has a slight chance correlation between the random column and the target; the model exploits it, and the squared-error minimiser can only improve (or tie) on the training data — RSS cannot increase. (b) Test R² typically decreases: the gain was noise-fitting; on new data the spurious correlation doesn't repeat, adding variance. (c) More features = lower bias, higher variance; when the added feature carries no signal, the variance penalty dominates — the same mechanism that makes high-degree polynomials fail (degree 15: lowest training error, highest test error).",
    sl: "L5 p. 28 (limitation 1), p. 38 (puzzle + answer), p. 34–35 (validation curves).",
    ex: "The exam-friendly phrasing: 'training R² cannot decrease; test R² typically goes down.'",
    mt: "Expecting training R² to fall with useless features; confusing this with dropping features.",
    ref: "Integrated — L5 p. 28, 34–38" });

  Q({ id: "INT-18", lec: L, pg: [], tp: "Classification", sb: "Sigmoid + linear failure", df: "medium", ty: "long", so: "integrated",
    pr: "(a) State the sigmoid's three properties. (b) A linear model predicts churn probability 1.3 for a customer. Diagnose and remedy. (c) Does the remedy guarantee calibration? Explain.",
    at: "(a) Range (0,1); symmetry σ(0) = 0.5; asymptotes (±∞ → 1/0, never reached). (b) Linear outputs are unbounded — 1.3 is not a probability; use logistic regression: σ(linear predictor) keeps outputs in (0,1) and is estimated by minimizing penalized negative log-likelihood. (c) No — being in (0,1) is necessary, not sufficient; calibration (predicted probabilities matching observed frequencies) must be checked on held-out data.",
    sl: "L6 p. 10–13.",
    ex: "The range-vs-calibration distinction is a favorite true/false nuance.",
    mt: "Claiming the sigmoid guarantees calibrated probabilities.",
    ref: "Integrated — L6 p. 10–13" });

  Q({ id: "INT-19", lec: L, pg: [], tp: "Similarity + embeddings", sb: "Metric choice scenario", df: "medium", ty: "mcq", so: "integrated",
    pr: "A recommendation system compares user-item vectors built from counts. Users click 10× more items on average than others. Which metric and why?",
    op: [
      "Euclidean — heavier users should dominate similarity",
      "Cosine — it ignores vector magnitude (activity level) and compares the direction (preference pattern), invariant to positive rescaling",
      "Manhattan distance — more robust to clicks",
      "Chebyshev distance — maximum differences matter"
    ], an: 1,
    at: "Cosine: direction (taste) vs magnitude (activity volume); scale-invariance makes heavy and light users comparable. Typical for recommendation systems per L2's when-to-use table.",
    sl: "L2 p. 17/20: cosine best for text, sparse data, direction-dominant comparisons; recommendation systems listed as a typical use case.",
    ex: "The 10× activity difference is exactly the scale-invariance use case.",
    mt: "Choosing Euclidean and letting click volume dominate.",
    ref: "Integrated — L2 p. 17–21" });

  Q({ id: "INT-20", lec: L, pg: [], tp: "PCA", sb: "Explain-variance vs task", df: "hard", ty: "long", so: "integrated",
    pr: "PC1 captures 90% of variance but doesn't separate classes; PC3 captures 2% and separates them perfectly. (a) What does PCA guarantee and what doesn't it? (b) What should you do for a classification task? (c) Connect this to any other lecture theme.",
    at: "(a) PCA guarantees maximizing retained variance (linear, unsupervised) — not task relevance; high-variance directions can be noise; low-variance directions can carry label signal. (b) Validate PCA on the actual task (classification accuracy/reconstruction error); consider supervised alternatives (LDA) or keep more components; possibly follow the L6 evaluation discipline to compare. (c) Mirrors the L1/L3/L6 themes: metrics are proxies — validate against the real objective (like R² vs task, or accuracy vs class imbalance).",
    sl: "L2 p. 72 (variance limitation + classification example), p. 75 (four PCA limitations incl. unsupervised/LDA).",
    ex: "A judgment question — the answer is process, not a number.",
    mt: "Assuming 90% variance is 'safe' for every downstream task.",
    ref: "Integrated — L2 p. 72–75; connects to L5/L6 evaluation" });

  Q({ id: "INT-21", lec: L, pg: [], tp: "Statistics", sb: "Statistical vs practical", df: "medium", ty: "calc", so: "integrated",
    pr: "A study finds a 0.5 mmHg blood-pressure reduction with n = 100,000 (p < 0.001). (a) Is it statistically significant? (b) Is it practically significant? (c) What statistic quantifies magnitude, and what are its benchmarks?",
    at: "(a) Yes — p < 0.001 < α = 0.05. (b) No — clinically meaningless vs ±10 mmHg normal variation. (c) Effect size (Cohen's d = (x̄₁−x̄₂)/s_pooled): small ≈ 0.2, medium ≈ 0.5, large ≈ 0.8.",
    sl: "L3 p. 50.",
    ex: "Large n makes tiny effects significant — significance ≠ importance.",
    mt: "Concluding the drug works from p alone.",
    ref: "Integrated — L3 p. 50" });

  Q({ id: "INT-22", lec: L, pg: [], tp: "Data cleaning", sb: "Sentinel values", df: "medium", ty: "mcq", so: "integrated",
    pr: "A sleep-hours column contains −2 and a commute column contains 999. Best first action?",
    op: [
      "Delete both rows immediately",
      "Investigate: domain knowledge decides whether values are errors (−2 hours impossible → error) or genuine extremes; document the decision; never blindly remove",
      "Replace all with the mean",
      "Treat 999 as a plausible commute",
      "Cap at 8 hours"
    ], an: 1,
    at: "Investigate first — domain knowledge + detection rules (Z-score > 3, 1.5×IQR); errors → fix/remove; genuine → keep or cap; document the decision.",
    sl: "L1 p. 33/36 (issues + outlier protocol); L4 p. 32 (validity).",
    ex: "The same numbers appear in L1's survey cleaning example.",
    mt: "Auto-deleting or auto-imputing before diagnosing.",
    ref: "Integrated — L1 p. 33–36; L4 p. 32/46" });

  Q({ id: "INT-23", lec: L, pg: [], tp: "Encoding", sb: "Encoding choice", df: "medium", ty: "mcq", so: "integrated",
    pr: "Feature 'Contract' has levels month-to-month/one year/two year. Which encoding for a logistic regression, and why?",
    op: [
      "Label encoding 0/1/2 — preserves magnitude",
      "One-hot (k binary columns) — no natural order for 'contract' as a category; label encoding would impose a false 0<1<2 relationship on a linear model",
      "Ordinal 1/2/3 — because there are exactly three levels",
      "None — keep as strings"
    ], an: 1,
    at: "One-hot for nominal features; ordinal only for genuinely ordered ones (education); label encoding generally avoided except trees. One-hot = k new binary columns (contract → 3).",
    sl: "L4 p. 54–55; sklearn OneHotEncoder(handle_unknown='ignore'); Telco encoding decisions exactly this.",
    ex: "ML models need numerical inputs — but encoding must respect the data's structure.",
    mt: "Ordinal-encoding 'contract' just because it has levels — order must be real.",
    ref: "Integrated — L4 p. 54–55" });

  Q({ id: "INT-24", lec: L, pg: [], tp: "Regression", sb: "Residual diagnostics", df: "hard", ty: "long", so: "integrated",
    pr: "A residual plot shows residuals forming two clusters (one around +0.5, one around −0.5) across predicted values. (a) Name the pattern. (b) Diagnose the likely cause. (c) What does the fix look like?",
    at: "(a) Clusters pattern — one of the four diagnostic patterns. (b) Missing categorical variable: two groups with different intercepts (e.g., a binary feature not in the model). (c) Add the categorical/grouping feature (or model separate intercepts); re-check the residual plot for random scatter.",
    sl: "L5 p. 30 four patterns: clusters = 'two groups with different intercepts'.",
    ex: "Contrast with funnel (heteroscedasticity) and curved (nonlinearity) — know all four by shape and diagnosis.",
    mt: "Diagnosing clusters as outliers or heteroscedasticity.",
    ref: "Integrated — L5 p. 30" });

  Q({ id: "INT-25", lec: L, pg: [], tp: "Similarity", sb: "Numeric metric comparison", df: "medium", ty: "calc", so: "integrated",
    pr: "Given u = (3, 4), v = (6, 8), w = (4, −3): compute d(u,v), d(u,w), cos(u,v), cos(u,w), and state what each metric concludes.",
    at: "d(u,v) = √(9+16) = 5; d(u,w) = √(1+49) = √50 ≈ 7.07; cos(u,v) = (18+32)/(5×10) = 1; cos(u,w) = 0. Euclidean: v is closest (5 < 7.07); cosine: v identical direction (1), w perpendicular (0). Both metrics agree v is 'more similar' here, but for different reasons (magnitude coincidence vs perfect direction).",
    sl: "v = 2u (same direction); w is orthogonal to u: 3×4 + 4×(−3) = 0.",
    ex: "A quick numeric drill for the metric definitions.",
    mt: "Forgetting normalization in cosine (50/50 = 1 requires both norms).",
    ref: "Integrated — L2 p. 15–20" });

  Q({ id: "INT-26", lec: L, pg: [], tp: "Probability", sb: "Expected value drill", df: "medium", ty: "calc", so: "integrated",
    pr: "X ~ Binomial(10, 0.3). Compute E[X], Var(X), and the probability X = 0 (use the binomial PMF). Then: if arrivals are Poisson with mean 4/hour, what is the exponential mean waiting time?",
    at: "E[X] = np = 3; Var(X) = np(1−p) = 2.1. P(X=0) = 0.7¹⁰ ≈ 0.0282. Poisson λ = 4/hour → exponential mean = 1/λ = 0.25 h = 15 min; variance 1/λ² = 1/16 h².",
    sl: "Binomial PMF: C(10,0)(0.3)⁰(0.7)¹⁰ = 0.7¹⁰.\nExponential mean 1/λ; variance 1/λ².",
    ex: "Distribution-formula drill across the two counting processes.",
    mt: "Using np for binomial variance; giving exponential mean as λ.",
    ref: "Integrated — L3 p. 24–26" });

  Q({ id: "INT-27", lec: L, pg: [], tp: "PCA + preprocessing", sb: "Scaling effect on PCA", df: "hard", ty: "long", so: "integrated",
    pr: "(a) Why can PCA without standardization be dominated by one feature? (b) Iris standardized gives 72.96%/22.85% for PC1/PC2; unstandardized sepal/petal lengths dominate — explain. (c) When would you deliberately NOT standardize?",
    at: "(a) PCA maximizes variance; a feature with a large measurement scale has large variance and attracts PC1 regardless of information content. (b) Petal/sepal measurements in cm differ in variance; without scaling, PC1 aligns with the highest-variance raw feature (e.g., petal length); standardization equalizes variances so components reflect correlation structure (72.96/22.85 spectrum). (c) When all features share meaningful units/scale and you want the variance structure of the original measurements preserved (e.g., same-unit sensor aggregates); the choice 'depends on units and task'.",
    sl: "L2 p. 61 (standardized numbers), p. 65 ('choose scaling based on units and task'), p. 75 (scaling sensitivity as limitation).",
    ex: "The classic 'centered vs standardized' PCA decision.",
    mt: "Assuming PCA always needs standardization — the slides say it depends on units and task.",
    ref: "Integrated — L2 p. 61–65, 75" });

  Q({ id: "INT-28", lec: L, pg: [], tp: "Model evaluation", sb: "Bias-variance quadrants", df: "medium", ty: "mcq", so: "integrated",
    pr: "A model's predictions cluster tightly but consistently 3 units off-center across training sets. Identify the bias-variance condition and the remedy direction.",
    op: [
      "Low bias, high variance — regularize more",
      "High bias, low variance (underfitting — systematically wrong, stable) — increase model flexibility or add features",
      "High bias, high variance — start over",
      "Low bias, low variance — ship it"
    ], an: 1,
    at: "Tight cluster off-center = high bias, low variance = underfitting; remedy: more flexibility (or better features). Regularization increases bias — the wrong direction here.",
    sl: "L5 p. 33 dartboard: clustered off-center = underfitting (high bias, low variance).",
    ex: "Quadrant identification from a verbal description — practice all four.",
    mt: "Regularizing an underfit model (adds more bias).",
    ref: "Integrated — L5 p. 33–34" });

  Q({ id: "INT-29", lec: L, pg: [], tp: "Classification", sb: "Model choice judgment", df: "hard", ty: "long", so: "integrated",
    pr: "Logistic regression (AUC 0.69, precision 0.38) vs decision tree (AUC 0.65, precision 0.29); the marketing team must explain each flag to customers and regulators. Which do you recommend and why? What other factors matter?",
    at: "Recommendation leans logistic: better ranking (AUC 0.69 > 0.65) and precision, plus odds-ratio interpretability with specified units — though the tree offers human-readable if-then rules, which can also be explainable, so the decisive reasoning compares auditability needs. Other factors: explainability (stakeholders/audit), maintenance (retraining/monitoring), regulation (legal constraints), feature-scaling needs (penalized LR needs scaling; trees don't), overfitting risk (trees higher without depth limits). Model selection is a judgment call — metrics inform, they cannot make it.",
    sl: "L6 p. 48–50 (metrics tables + judgment-call framing: explainability, maintenance, regulation).",
    ex: "A full 'decide with judgment' answer: cite metrics, then the non-metric criteria.",
    mt: "Choosing purely by the highest AUC without the deployment-context factors.",
    ref: "Integrated — L6 p. 48–50" });

  Q({ id: "INT-30", lec: L, pg: [], tp: "Full mock — Q1 style", sb: "Four-part exam simulation", df: "hard", ty: "long", so: "integrated",
    pr: "Mock exam (Q1 style): (a) State whether Euclidean or cosine suits 'absolute magnitude matters' and why. (b) Two matrices: A = [[2,1],[1,3]], B = [[2,1],[0,3]] — which can be a covariance matrix and why not the other? (c) Eigenvalues 3, 1, 0.5, 0.5 — compute EVR₁ and the 2-PC cumulative share; apply the 90% rule. (d) Centered x = (1,2,3), v₁ = (1/√3)(1,1,1): compute the PC1 score and projection onto PC1.",
    at: "(a) Euclidean — it uses actual magnitudes; cosine is scale-invariant (direction only). (b) Only A: A = [[2,1],[1,3]] is symmetric and its eigenvalues solve λ² − 5λ + 5 = 0 → λ = (5±√5)/2 ≈ 3.618 and 1.382, both > 0 ⇒ valid. B = [[2,1],[0,3]] is not symmetric (entry (1,2)=1 ≠ (2,1)=0) ⇒ cannot be a covariance matrix. (c) Total = 3+1+0.5+0.5 = 5; EVR₁ = 3/5 = 0.60; two PCs = 4/5 = 0.80 < 0.90; three PCs = 4.5/5 = 0.90 ≥ 0.90 ⇒ keep 3 components. (d) PC1 score = x·v₁ = (1+2+3)/√3 = 6/√3 = 2√3 ≈ 3.464; projection = score·v₁ = 2√3·(1/√3)(1,1,1) = 2(1,1,1) = (2,2,2).",
    sl: "All formulas per L2 slides; eigenvalue check via characteristic equation for A: λ² − 5λ + 5 = 0.",
    ex: "A four-part rehearsal compressed into one question — do it under time pressure to simulate the exam.",
    mt: "Forgetting symmetry check first; rounding EVR so the 90% test flips wrongly (0.90 exactly meets the rule).",
    ref: "Integrated — Midterm Q1 style across L2" });

  Q({ id: "INT-31", lec: L, pg: [], tp: "Full mock — Q2 style + classification", sb: "Regression + metrics", df: "hard", ty: "long", so: "integrated",
    pr: "Mock exam (Q2 style): Points (1,1), (2,3), (3,4), (4,6), (5,7). (a) Compute means, β̂, equation. (b) SSres, SStot, R², RMSE. (c) Add (3,2): refit and recompute R². (d) A classifier on the same data flags churners with TP = 40, FP = 10, FN = 60, TN = 890. Compute precision, recall, F1 and explain why accuracy alone would mislead.",
    at: "(a) x̄ = 3; ȳ = 4.2; Σ(x−x̄)(y−ȳ) = (−2)(−3.2)+(−1)(−1.2)+0+(1)(1.8)+(2)(2.8) = 6.4+1.2+0+1.8+5.6 = 15; Σ(x−x̄)² = 10; β̂₁ = 1.5; β̂₀ = 4.2 − 4.5 = −0.3; ŷ = −0.3 + 1.5x. (b) predictions 1.2, 2.7, 4.2, 5.7, 7.2; residuals −0.2, 0.3, −0.2, 0.3, −0.2; SSres = 0.30; SStot = 10.24+1.44+0.04+3.24+7.84 = 22.8; R² = 1 − 0.30/22.8 ≈ 0.9868; RMSE = √(0.30/5) ≈ 0.245. (c) Six points: x̄ = 3; ȳ = 23/6 ≈ 3.8333; Σ(x−x̄)(y−ȳ) = 15 + 0 = 15; Σ(x−x̄)² = 10; β̂₁ = 1.5; β̂₀ = 3.8333 − 4.5 = −0.6667; ŷ = −0.6667 + 1.5x; residuals: 1−0.8333=0.1667; 3−2.3333=0.6667; 4−3.8333=0.1667; 2−3.8333=−1.8333; 6−5.3333=0.6667; 7−6.8333=0.1667; SSres ≈ 0.0278+0.4444+0.0278+3.3611+0.4444+0.0278 = 4.333; SStot ≈ Σ(y−3.8333)² = 8.0278+0.6944+0.0278+4.6944+14.6944+10.0278 = 38.166; R² = 1 − 4.333/38.166 ≈ 0.8865. (d) Precision = 40/50 = 0.80; recall = 40/100 = 0.40; F1 = 2(0.8×0.4)/1.2 = 0.533; accuracy = (40+890)/1,000 = 0.93 — but the always-negative baseline is 0.90 (900/1,000); with 10% prevalence, accuracy rewards the majority class; precision/recall expose that 60% of churners are missed.",
    sl: "Follow the canonical chain (means → β̂ → residuals → SSres/SStot → R²/RMSE).\nFor (c): a point at x̄ changes only the intercept.\nFor (d): compute all baseline-comparable metrics.",
    ex: "A full-length simulation merging midterm regression with L6 evaluation.",
    mt: "Recomputing ȳ incorrectly for part (c); reporting accuracy as 'good' without baseline.",
    ref: "Integrated — Midterm Q2 style + L6 p. 24–33" });

  Q({ id: "INT-32", lec: L, pg: [], tp: "AI collaboration", sb: "VERIFY application", df: "medium", ty: "mcq", so: "integrated",
    pr: "The CTA writes a covariance-matrix function that returns a non-symmetric 4×4 matrix. Which VERIFY step catches this first, and what should you do?",
    op: [
      "Validate — check against a trusted reference/documented property (covariance matrices are symmetric); then investigate the code/transpose issue (Execute/Inspect)",
      "Ignore it — small asymmetry is acceptable",
      "Submit the CTA's output directly",
      "Yours — rewrite by hand"
    ], an: 0,
    at: "Validate (property check: symmetry + positive diagonal + 4×4) then Execute/Inspect the code (commonly a missing .T with np.cov).",
    sl: "L2 p. 34–36: verification steps for covariance output (run; symmetric? positive diagonal? sanity vs scatter expectations); Demo 2's n vs n−1 discrepancy lesson.",
    ex: "The transpose issue ('np.cov expects features as rows') is the classic root cause (L2 p. 57).",
    mt: "Skipping the structural property checks when outputs 'look plausible'.",
    ref: "Integrated — L2 p. 34–36, 57" });

  Q({ id: "INT-33", lec: L, pg: [], tp: "Probability + regression", sb: "CI of a coefficient", df: "hard", ty: "calc", so: "integrated",
    pr: "A regression coefficient is β̂ = 0.8 with SE = 0.2 (n = 25, approximate 95% CI via ±1.96×SE). (a) Compute the 95% CI. (b) Interpret it. (c) The feature's p-value: since the interval excludes 0, what verdict follows at α = 0.05? (d) Why does the L5 chain say 'SE inflation is what multicollinearity causes'?",
    at: "(a) 0.8 ± 1.96(0.2) = [0.408, 1.192]. (b) Plausible range of the true coefficient across repeated sampling procedures. (c) Excluding 0 ⇒ p < 0.05 ⇒ reject H₀: β = 0 (evidence the feature matters), though practical significance still needs the effect size. (d) Correlated predictors share information; the coefficient becomes unstable and its standard error inflates — shifting the whole chain (estimate → SE → t → verdict) toward non-significance.",
    sl: "CI formula x̄ ± z*·s/√n generalized to coefficients (L3 p. 38, L5 p. 19).\nSE × 1.96 = 0.392.",
    ex: "Bridges L3's inference machinery with L5's coefficient chain.",
    mt: "Claiming the true β lies in [0.408, 1.192] with 95% probability — same misconception as the mean CI.",
    ref: "Integrated — L3 p. 37–43; L5 p. 19–22" });

  Q({ id: "INT-34", lec: L, pg: [], tp: "Workflow", sb: "End-to-end scenario", df: "hard", ty: "long", so: "integrated",
    pr: "You inherit a churn project: raw data with missing TotalCharges, an object-typed numeric column, and severe imbalance; your predecessor reported 91% accuracy. Outline the correct end-to-end workflow and where each course lecture applies.",
    at: "1) Quality assessment — four checks (L4): dtypes, sentinel-aware missingness, validity, distributions. 2) Cleaning — reason about the mechanism (MAR for tenure=0), conditional imputation, type conversion, encoding decisions, outlier policy (L4). 3) EDA — discovery cycle: churn by contract/tenure/charges; visualize (L4/L3). 4) Split — train/test before any fitting; pipeline with fit-on-train-only (L4/L5). 5) Model — logistic regression with scaled features; interpret odds ratios with causal care (L6/L5). 6) Evaluate — precision/recall/F1/AUC vs majority baseline; the 91% number is presumably majority-class accuracy (73.5% here) — exposed as useless by recall/F1 (L6). 7) Threshold — choose by cost function on validation; test once (L6). 8) Iterate — residual/metric diagnostics, regularization, model selection judgment (L5/L6).",
    sl: "Map every step to its lecture: L4 (assess/clean/EDA/prepare), L5 (modeling/evaluation/regularization), L6 (classification metrics/thresholds), L3 (visualization, significance), L2 (feature space thinking), L1 (VERIFY).",
    ex: "The single best synthesis question — prepare a structured answer like this for the long-answer section.",
    mt: "Reporting accuracy without class distribution; cleaning before diagnosing; ignoring the accuracy trap in the inherited result.",
    ref: "Integrated — L1–L6 workflow synthesis" });
})();
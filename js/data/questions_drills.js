/* Practice drills — number variants of core techniques with fresh data.
   These are deliberately NOT content duplicates: each uses new values,
   so they exercise the same method without repeating the same question. */
(function () {

  /* ---------------- Lecture 1 ---------------- */
  Q({ id: "L1-DR-01", lec: 1, pg: [38], tp: "Preprocessing", sb: "Drill: min-max", df: "easy", ty: "mcq", so: "lecture",
    pr: "Min-max normalise x = 45 given min = 5 and max = 85.",
    op: ["0.5", "0.4", "0.45", "0.53"],
    an: 0, at: "(45 − 5)/(85 − 5) = 40/80 = 0.5.",
    sl: "x_norm = (x − min)/(max − min).",
    ex: "Min-max maps the training range onto [0, 1].",
    mt: "Subtracting max instead of min." });

  Q({ id: "L1-DR-02", lec: 1, pg: [38], tp: "Preprocessing", sb: "Drill: z-score", df: "easy", ty: "mcq", so: "lecture",
    pr: "Standardise x = 90 given mean = 75 and std = 6.",
    op: ["1.5", "2.0", "2.5", "3.0"],
    an: 2, at: "z = (90 − 75)/6 = 2.5 — the value lies 2.5 std devs above the mean.",
    sl: "z = (x − mean)/std = 15/6 = 2.5.",
    ex: "Z-scores are comparable across features.",
    mt: "Dividing by variance." });

  Q({ id: "L1-DR-03", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Drill: IQR fences", df: "medium", ty: "mcq", so: "lecture",
    pr: "Q1 = 18 and Q3 = 34. Which pair gives the 1.5×IQR outlier fences?",
    op: ["−6 and 58", "0 and 52", "12 and 40", "9 and 43"],
    an: 0, at: "IQR = 16; lower fence = 18 − 24 = −6; upper fence = 34 + 24 = 58.",
    sl: "Fences = Q1 − 1.5·IQR and Q3 + 1.5·IQR.",
    ex: "Fence violations are candidates for investigation, not automatic deletion.",
    mt: "Using 1×IQR instead of 1.5×IQR." });

  Q({ id: "L1-DR-04", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Drill: variance", df: "medium", ty: "mcq", so: "lecture",
    pr: "Compute the sample variance of 1, 2, 3, 4 (use n − 1).",
    op: ["1.25", "1.67", "5.00", "2.50"],
    an: 1, at: "Mean = 2.5; squared deviations = 2.25, 0.25, 0.25, 2.25 (sum 5); s² = 5/3 ≈ 1.67.",
    sl: "s² = Σ(xᵢ−x̄)²/(n−1) = 5/3.",
    ex: "Dividing by n would give 1.25 — Bessel's correction raises the estimate.",
    mt: "Dividing by n for a sample." });

  Q({ id: "L1-DR-05", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Drill: median (even n)", df: "easy", ty: "mcq", so: "lecture",
    pr: "Find the median of 6, 7, 10, 15.",
    op: ["7", "8.5", "10", "12.5"],
    an: 1, at: "Even count → average of the two middle values: (7 + 10)/2 = 8.5.",
    sl: "Sort; with n = 4 take the mean of the 2nd and 3rd values.",
    ex: "The median is robust; an outlier added later would barely move it.",
    mt: "Picking one of the middle values instead of averaging." });

  Q({ id: "L1-DR-06", lec: 1, pg: [44], tp: "Correlation", sb: "Drill: correlation from covariance", df: "medium", ty: "mcq", so: "lecture",
    pr: "Given Cov(X, Y) = 12, sₓ = 4, sᵧ = 5, compute the correlation.",
    op: ["0.6", "0.48", "1.5", "0.75"],
    an: 0, at: "r = 12/(4×5) = 12/20 = 0.6 — moderate positive linear association.",
    sl: "r = Cov(X,Y)/(sₓ·sᵧ), dimensionless.",
    ex: "Correlation standardises away the units of the covariance.",
    mt: "Dividing by one standard deviation only." });

  Q({ id: "L1-DR-07", lec: 1, pg: [12], tp: "Descriptive stats", sb: "Drill: robust choice", df: "easy", ty: "mcq", so: "lecture",
    pr: "Values: 10, 12, 12, 13, 500. Which statement is correct?",
    op: ["The mean (109.4) describes the typical value well", "The median (12) is the better 'typical value' summary because the mean is dragged up by 500", "The mode is undefined", "The range (490) is the best spread measure"],
    an: 1, at: "Median = 12 represents the cluster; mean ≈ 109.4 is distorted by the single extreme value.",
    sl: "Robustness: median resists outliers; mean absorbs them.",
    ex: "Match the statistic to the distribution shape.",
    mt: "Reporting the mean for outlier-heavy data." });

  /* ---------------- Lecture 2 ---------------- */
  Q({ id: "L2-DR-01", lec: 2, pg: [15], tp: "Distances", sb: "Drill: Euclidean", df: "easy", ty: "mcq", so: "lecture",
    pr: "Compute the Euclidean distance between (2, 3) and (5, 7).",
    op: ["5", "7", "√7", "25"],
    an: 0, at: "d = √(3² + 4²) = √25 = 5.",
    sl: "Differences (3, 4); squares 9 + 16 = 25; root = 5.",
    ex: "A 3-4-5 triangle in feature space.",
    mt: "Forgetting the square root." });

  Q({ id: "L2-DR-02", lec: 2, pg: [17], tp: "Distances", sb: "Drill: cosine", df: "medium", ty: "mcq", so: "lecture",
    pr: "Compute cos(u, v) for u = (1, 1) and v = (1, 3).",
    op: ["0.894", "0.8", "0.948", "1.0"],
    an: 0, at: "u·v = 4; ‖u‖ = √2, ‖v‖ = √10 → cos = 4/√20 = 4/4.472 ≈ 0.894.",
    sl: "Cosine = dot / (norm product) = 4/(√2·√10).",
    ex: "≈0.894 ≈ 26.6° between the vectors — similar direction.",
    mt: "Using only one norm." });

  Q({ id: "L2-DR-03", lec: 2, pg: [28], tp: "Covariance", sb: "Drill: sign", df: "medium", ty: "mcq", so: "lecture",
    pr: "Points (1, 9), (2, 7), (3, 4): what is the sign of the covariance?",
    op: ["Positive", "Negative", "Zero", "Cannot be determined"],
    an: 1, at: "The points trend downward — X above its mean pairs with Y below its mean, so the products of deviations are negative on balance.",
    sl: "Direction of the trend decides the sign.",
    ex: "Sign is read from co-deviation, not from magnitudes.",
    mt: "Reading only the first pair." });

  Q({ id: "L2-DR-04", lec: 2, pg: [28], tp: "Covariance", sb: "Drill: covariance value", df: "hard", ty: "mcq", so: "lecture",
    pr: "Pairs (0, 1), (1, 3), (2, 5). Compute the sample covariance.",
    op: ["2", "3", "1", "4"],
    an: 0, at: "x̄ = 1, ȳ = 3. Deviations (−1,−2), (0,0), (1,2) → products 2, 0, 2 → sum 4 → Cov = 4/2 = 2.",
    sl: "Cov = Σ(xᵢ−x̄)(yᵢ−ȳ)/(n−1) = 4/2.",
    ex: "Positive covariance: the variables rise together.",
    mt: "Dividing by n (would give 4/3)." });

  Q({ id: "L2-DR-05", lec: 2, pg: [46], tp: "Eigen", sb: "Drill: eigenvector check", df: "medium", ty: "mcq", so: "lecture",
    pr: "For A = [[3, 0], [0, 5]], check v = (0, 1).",
    op: ["Av = (0, 5) = 5v → eigenvector with eigenvalue 5", "Av = (3, 0) → eigenvalue 3", "Not an eigenvector", "Eigenvalue 0"],
    an: 0, at: "A(0,1) = (0,5) = 5(0,1) — the second axis is an eigenvector with eigenvalue 5.",
    sl: "Multiply and compare with a scalar multiple of v.",
    ex: "Diagonal matrices have the coordinate axes as eigenvectors.",
    mt: "Assuming every vector of a diagonal matrix maps trivially." });

  Q({ id: "L2-DR-06", lec: 2, pg: [67], tp: "PCA selection", sb: "Drill: EVR + 90% rule", df: "medium", ty: "mcq", so: "lecture",
    pr: "Eigenvalues λ = (8, 2, 1, 1). How many components does the 90% rule keep?",
    op: ["2", "3", "4", "1"],
    an: 1, at: "Total 12. Cumulative: 8/12 ≈ 66.7%, 10/12 ≈ 83.3%, 11/12 ≈ 91.7% ≥ 90% ⇒ keep 3.",
    sl: "First crossing of 90% occurs at the third component.",
    ex: "Always compute the cumulative share instead of eyeballing.",
    mt: "Stopping at 2 (83.3% < 90%)." });

  Q({ id: "L2-DR-07", lec: 2, pg: [70], tp: "PCA selection", sb: "Drill: cumulative threshold", df: "medium", ty: "mcq", so: "lecture",
    pr: "Cumulative EVRs are 60%, 80%, 92%, 97%, 100%. Which smallest k reaches the 90% rule?",
    op: ["3", "2", "4", "5"],
    an: 0, at: "60, 80 (both < 90), then 92 ≥ 90 ⇒ k = 3.",
    sl: "Keep the smallest count whose cumulative variance reaches 90%.",
    ex: "The rule is a heuristic — the task may justify another k.",
    mt: "Rounding 80% up to 90%." });

  Q({ id: "L2-DR-08", lec: 2, pg: [59], tp: "PCA", sb: "Drill: projection", df: "hard", ty: "mcq", so: "lecture",
    pr: "Centred x = (4, 2), unit eigenvector v = (1/√5, 2/√5). What is the projection of x onto v?",
    op: ["(1.6, 3.2)", "(8, 4)", "(0.8, 1.6)", "(4, 2)"],
    an: 0, at: "Score = 4/√5 + 4/√5 = 8/√5 ≈ 3.578. Projection = score·v = (8/5, 16/5) = (1.6, 3.2).",
    sl: "x·v = 8/√5; multiply back by v to rebuild the vector.",
    ex: "The residual x − projection is orthogonal to v.",
    mt: "Reporting the scalar score as the projection." });

  Q({ id: "L2-DR-09", lec: 2, pg: [31], tp: "Covariance matrix", sb: "Drill: dimensions", df: "easy", ty: "mcq", so: "lecture",
    pr: "A dataset has 300 observations and 6 features. What is the shape of its covariance matrix?",
    op: ["6 × 6", "300 × 300", "300 × 6", "6 × 300"],
    an: 0, at: "Covariance is computed between features: p × p = 6 × 6.",
    sl: "One row/column per feature — observations never appear.",
    ex: "The diagonal holds the six feature variances.",
    mt: "Using the sample count." });

  Q({ id: "L2-DR-10", lec: 2, pg: [59], tp: "PCA algorithm", sb: "Drill: score shapes", df: "medium", ty: "mcq", so: "lecture",
    pr: "X_centered is 120 × 5 and k = 2. What is the shape of the score matrix Z?",
    op: ["120 × 2", "2 × 5", "120 × 5", "5 × 2"],
    an: 0, at: "Z = X_centered(120×5) · W_k(5×2) → 120 × 2.",
    sl: "n×p times p×k gives n×k.",
    ex: "Each row now has the two PC scores instead of five features.",
    mt: "Multiplying in the wrong order." });

  /* ---------------- Lecture 3 ---------------- */
  Q({ id: "L3-DR-01", lec: 3, pg: [10], tp: "Probability rules", sb: "Drill: union & neither", df: "medium", ty: "mcq", so: "lecture",
    pr: "P(A) = 0.7, P(B) = 0.4, P(A∩B) = 0.2. Compute P(neither A nor B).",
    op: ["0.1", "0.3", "0.2", "0.9"],
    an: 0, at: "P(A∪B) = 0.7 + 0.4 − 0.2 = 0.9 → P(neither) = 0.1.",
    sl: "Addition rule, then complement.",
    ex: "'Neither' is the complement of the union.",
    mt: "Forgetting the overlap subtraction." });

  Q({ id: "L3-DR-02", lec: 3, pg: [28], tp: "Conditional probability", sb: "Drill: conditional", df: "easy", ty: "mcq", so: "lecture",
    pr: "P(A∩B) = 0.12 and P(B) = 0.3. Compute P(A|B).",
    op: ["0.4", "0.36", "0.04", "0.25"],
    an: 0, at: "P(A|B) = 0.12/0.3 = 0.4.",
    sl: "Conditional = joint ÷ conditioning event.",
    ex: "Restrict the universe to B, then measure A inside it.",
    mt: "Multiplying instead of dividing." });

  Q({ id: "L3-DR-03", lec: 3, pg: [31], tp: "Bayes", sb: "Drill: posterior", df: "medium", ty: "mcq", so: "lecture",
    pr: "Prior 0.3, likelihood 0.8, evidence probability 0.5. Compute the posterior.",
    op: ["0.48", "0.24", "0.75", "0.6"],
    an: 0, at: "P(H|E) = 0.8 × 0.3 / 0.5 = 0.24/0.5 = 0.48.",
    sl: "Posterior = likelihood × prior ÷ evidence.",
    ex: "The prior and evidence both reshape the posterior.",
    mt: "Multiplying likelihood × evidence." });

  Q({ id: "L3-DR-04", lec: 3, pg: [30], tp: "Law of total probability", sb: "Drill: weighted defects", df: "medium", ty: "mcq", so: "lecture",
    pr: "Machine A makes 70% of items (1% defective); machine B makes 30% (4% defective). Compute the overall defect rate.",
    op: ["1.9%", "2.5%", "3.0%", "1.2%"],
    an: 0, at: "0.01(0.7) + 0.04(0.3) = 0.007 + 0.012 = 0.019 = 1.9%.",
    sl: "Weight each conditional rate by its machine share.",
    ex: "The simple average (2.5%) would ignore the production mix.",
    mt: "Averaging the two rates without weights." });

  Q({ id: "L3-DR-05", lec: 3, pg: [24], tp: "Distributions", sb: "Drill: binomial moments", df: "medium", ty: "mcq", so: "lecture",
    pr: "X ~ Binomial(n = 50, p = 0.4). Compute E[X] and Var(X).",
    op: ["E = 20, Var = 12", "E = 20, Var = 20", "E = 0.4, Var = 12", "E = 30, Var = 12"],
    an: 0, at: "E = np = 20; Var = np(1−p) = 50(0.4)(0.6) = 12.",
    sl: "Binomial moments: mean np, variance np(1−p).",
    ex: "Skewed here because p ≠ 0.5.",
    mt: "Using np for the variance." });

  Q({ id: "L3-DR-06", lec: 3, pg: [25], tp: "Distributions", sb: "Drill: Poisson zero", df: "medium", ty: "mcq", so: "lecture",
    pr: "X ~ Poisson(λ = 5) per hour. Compute P(X = 0).",
    op: ["e⁻⁵ ≈ 0.0067", "5e⁻⁵ ≈ 0.034", "0.5", "e⁻¹ ≈ 0.37"],
    an: 0, at: "P(X=0) = λ⁰e⁻λ/0! = e⁻⁵ ≈ 0.0067.",
    sl: "The k = 0 term of the Poisson PMF.",
    ex: "Mean = variance = 5; large λ makes the shape less skewed.",
    mt: "Leaving the λᵏ factor in." });

  Q({ id: "L3-DR-07", lec: 3, pg: [23], tp: "Distributions", sb: "Drill: empirical rule", df: "easy", ty: "mcq", so: "lecture",
    pr: "Scores ~ N(60, 5²). About 95% of scores lie between:",
    op: ["50 and 70", "55 and 65", "45 and 75", "40 and 80"],
    an: 0, at: "µ ± 2σ = 60 ± 10 = 50–70 covers ≈ 95%.",
    sl: "68-95-99.7: two standard deviations ⇒ 95%.",
    ex: "One σ (55–65) covers ≈ 68%.",
    mt: "Using 3σ for 95%." });

  Q({ id: "L3-DR-08", lec: 3, pg: [38], tp: "Confidence intervals", sb: "Drill: CI", df: "medium", ty: "mcq", so: "lecture",
    pr: "x̄ = 200, s = 30, n = 100, z* = 1.96. Compute the 95% CI.",
    op: ["[194.12, 205.88]", "[197.06, 202.94]", "[170, 230]", "[198.04, 201.96]"],
    an: 0, at: "SE = 30/√100 = 3 → 200 ± 1.96×3 = 200 ± 5.88.",
    sl: "CI = x̄ ± z*·s/√n.",
    ex: "Increasing n shrinks the standard error.",
    mt: "Using s (30) instead of the standard error (3)." });

  Q({ id: "L3-DR-09", lec: 3, pg: [46], tp: "Hypothesis testing", sb: "Drill: decision", df: "easy", ty: "mcq", so: "lecture",
    pr: "A test gives p = 0.08 with α = 0.05. What is the decision?",
    op: ["Fail to reject H₀", "Reject H₀", "Accept H₁ with 92% confidence", "Lower α to 0.10"],
    an: 0, at: "p = 0.08 > α = 0.05 → fail to reject H₀ (which is not the same as proving H₀ true).",
    sl: "Reject only when p < α.",
    ex: "Failing to reject can simply mean insufficient evidence.",
    mt: "Treating fail-to-reject as accepting the null." });

  /* ---------------- Lecture 4 ---------------- */
  Q({ id: "L4-DR-01", lec: 4, pg: [31], tp: "Quality assessment", sb: "Drill: missing proportion", df: "easy", ty: "mcq", so: "lecture",
    pr: "45 of 900 values are missing in a column. Which rules-of-thumb band applies?",
    op: ["5% — manageable, most strategies work", "Above 30% — drop the column", "Between 20% and 30% — careful strategy", "No missingness"],
    an: 0, at: "45/900 = 5% — at the boundary of the '< 5% manageable' band; standard strategies are usually safe.",
    sl: "Compute the share, then consult the thresholds (<5 / 5–30 / >30).",
    ex: "The mechanism still decides which strategy is valid.",
    mt: "Misfiling 5% in the 'consider dropping' band." });

  Q({ id: "L4-DR-02", lec: 4, pg: [54], tp: "Encoding", sb: "Drill: one-hot with drop", df: "easy", ty: "mcq", so: "lecture",
    pr: "A nominal feature has 6 categories. One-hot encoding with drop='first' produces how many columns?",
    op: ["5", "6", "7", "1"],
    an: 0, at: "k = 6 categories → 6 indicator columns, or 5 when the first level is dropped.",
    sl: "drop='first' removes one level to avoid redundancy with the intercept.",
    ex: "Without dropping, 6 columns are produced.",
    mt: "Answering 6 when drop='first' is specified." });

  Q({ id: "L4-DR-03", lec: 4, pg: [56], tp: "Scaling", sb: "Drill: standardise", df: "easy", ty: "mcq", so: "lecture",
    pr: "A feature has mean 200 and std 25. What is the z-score of x = 250?",
    op: ["2", "0.2", "50", "1.5"],
    an: 0, at: "(250 − 200)/25 = 2 — two standard deviations above the mean.",
    sl: "z = (x − mean)/std.",
    ex: "Standardise before distance-based or penalised methods.",
    mt: "Dividing by the raw difference." });

  Q({ id: "L4-DR-04", lec: 4, pg: [39], tp: "Missingness", sb: "Drill: scenario", df: "hard", ty: "mcq", so: "lecture",
    pr: "Questionnaire pages are missing more often for participants who left early — exit time is recorded for everyone. Which mechanism fits?",
    op: ["MAR — missingness is explained by an observed variable (exit time)", "MCAR", "MNAR — it depends on the unobserved answers", "No missingness"],
    an: 0, at: "The missingness is tied to exit time, which is observed → MAR; conditional imputation using exit time is justified.",
    sl: "Observed variable explains missingness → MAR.",
    ex: "If participants skipped pages precisely because of the sensitive content (unobserved), it would be MNAR.",
    mt: "Calling it MCAR despite the systematic pattern." });

  Q({ id: "L4-DR-05", lec: 4, pg: [31], tp: "Quality assessment", sb: "Drill: threshold", df: "easy", ty: "mcq", so: "lecture",
    pr: "At what missing share is dropping the column worth considering?",
    op: ["> 30%", "> 5%", "> 10%", "> 50%"],
    an: 0, at: "The rule of thumb: > 30% missing → consider dropping; 5–30% requires careful strategy.",
    sl: "Thresholds guide, mechanism decides.",
    ex: "An important feature with 40% missing may still be imputed carefully.",
    mt: "Dropping columns at <5% missingness." });

  Q({ id: "L4-DR-06", lec: 4, pg: [54], tp: "Encoding", sb: "Drill: one-hot columns", df: "easy", ty: "mcq", so: "lecture",
    pr: "A nominal 'color' feature has 4 categories and is one-hot encoded without dropping a level. How many binary columns result?",
    op: ["4", "3", "1", "8"],
    an: 0, at: "One indicator per category → 4 columns.",
    sl: "k categories → k columns (k−1 if a level is dropped).",
    ex: "Binary features like is_red, is_green, is_blue, is_other.",
    mt: "Answering 3 without drop='first'." });

  /* ---------------- Lecture 5 ---------------- */
  Q({ id: "L5-DR-01", lec: 5, pg: [10], tp: "OLS", sb: "Drill: slope from moments", df: "medium", ty: "mcq", so: "lecture",
    pr: "Given Cov(x, y) = 10 and Var(x) = 8, compute the OLS slope of y on x.",
    op: ["1.25", "0.8", "2.25", "18"],
    an: 0, at: "β₁ = Cov/Var = 10/8 = 1.25.",
    sl: "Simple-regression slope = covariance over predictor variance.",
    ex: "β₀ follows from β₀ = ȳ − β₁x̄.",
    mt: "Inverting the fraction." });

  Q({ id: "L5-DR-02", lec: 5, pg: [8], tp: "Regression", sb: "Drill: prediction & residual", df: "easy", ty: "mcq", so: "lecture",
    pr: "Model ŷ = 4 + 1.5x. For x = 8 the observed y is 17. Compute the residual.",
    op: ["+1 (under-prediction)", "−1 (over-prediction)", "0", "+16"],
    an: 0, at: "ŷ = 4 + 12 = 16; residual = 17 − 16 = +1 → the model predicted low.",
    sl: "e = y − ŷ = +1.",
    ex: "Positive residuals mean actual values exceed predictions.",
    mt: "Flipping the sign convention." });

  Q({ id: "L5-DR-03", lec: 5, pg: [27], tp: "Metrics", sb: "Drill: R²", df: "easy", ty: "mcq", so: "lecture",
    pr: "A model has SSres = 8 and SStot = 40. Compute R².",
    op: ["0.8", "0.2", "5", "0.9"],
    an: 0, at: "R² = 1 − 8/40 = 0.8 — the model explains 80% of the variance in y.",
    sl: "R² = 1 − SSres/SStot.",
    ex: "Unitless; compare with RMSE for error in units.",
    mt: "Reporting SSres/SStot without the 1 −." });

  Q({ id: "L5-DR-04", lec: 5, pg: [37], tp: "Metrics", sb: "Drill: RMSE", df: "easy", ty: "mcq", so: "lecture",
    pr: "A model has MSE = 0.25 (in seconds²). What is the RMSE and its units?",
    op: ["0.5 seconds", "0.5 seconds²", "0.0625 seconds", "0.25 seconds"],
    an: 0, at: "RMSE = √0.25 = 0.5, back in the original units (seconds).",
    sl: "RMSE = sqrt(MSE).",
    ex: "RMSE is directly comparable to the scale of the target.",
    mt: "Keeping the squared units." });

  Q({ id: "L5-DR-05", lec: 5, pg: [33], tp: "Bias-variance", sb: "Drill: regime", df: "medium", ty: "mcq", so: "lecture",
    pr: "Training error and test error are both large and similar. Which regime is this?",
    op: ["High bias (underfitting)", "High variance (overfitting)", "Ideal fit", "Noise-free data"],
    an: 0, at: "Both errors poor and close → the model is systematically missing the pattern: high bias/underfitting.",
    sl: "Poor train + poor test ≈ underfit; good train + poor test ≈ overfit.",
    ex: "Remedy for underfitting: more flexibility/features.",
    mt: "Confusing with overfitting because test error is high." });

  Q({ id: "L5-DR-06", lec: 5, pg: [23], tp: "Multicollinearity", sb: "Drill: VIF band", df: "easy", ty: "mcq", so: "lecture",
    pr: "A predictor has VIF = 3. What is the standard reading?",
    op: ["Moderate overlap — usually acceptable", "Serious — take action", "No overlap at all", "Perfectly collinear"],
    an: 0, at: "VIF 1–5 is the moderate/usually-acceptable band; investigate above 5 and act above 10.",
    sl: "VIF bands: =1 none; 1–5 moderate; >5 investigate; >10 act.",
    ex: "VIF measures variance inflation from linear dependence on other predictors.",
    mt: "Treating VIF = 3 as serious." });

  /* ---------------- Lecture 6 ---------------- */
  Q({ id: "L6-DR-01", lec: 6, pg: [23], tp: "Thresholds", sb: "Drill: label", df: "easy", ty: "mcq", so: "lecture",
    pr: "P(churn) = 0.48 and the threshold is 0.45. What label is assigned?",
    op: ["Churn (0.48 ≥ 0.45)", "No churn (0.48 < 0.5)", "No churn (0.48 ≥ 0.45)", "Undetermined"],
    an: 0, at: "Predict positive iff P ≥ θ: 0.48 ≥ 0.45 → flagged as churn.",
    sl: "The threshold θ converts probabilities into labels.",
    ex: "The default 0.5 is a choice, not a requirement.",
    mt: "Comparing against 0.5 instead of the stated threshold." });

  Q({ id: "L6-DR-02", lec: 6, pg: [24], tp: "Precision", sb: "Drill: precision", df: "easy", ty: "mcq", so: "lecture",
    pr: "TP = 90, FP = 30. Compute precision.",
    op: ["0.75", "0.6", "0.9", "0.25"],
    an: 0, at: "Precision = 90/(90+30) = 90/120 = 0.75.",
    sl: "Of all flagged positives, the fraction that are real.",
    ex: "Precision guides models when false alarms are costly.",
    mt: "Dividing by TP+FN." });

  Q({ id: "L6-DR-03", lec: 6, pg: [25], tp: "Recall", sb: "Drill: recall", df: "easy", ty: "mcq", so: "lecture",
    pr: "TP = 45, FN = 15. Compute recall.",
    op: ["0.75", "0.33", "0.45", "0.25"],
    an: 0, at: "Recall = 45/(45+15) = 45/60 = 0.75.",
    sl: "Of actual positives, the fraction caught.",
    ex: "Recall = TPR = sensitivity.",
    mt: "Dividing by predicted positives." });

  Q({ id: "L6-DR-04", lec: 6, pg: [30], tp: "F1", sb: "Drill: F1", df: "medium", ty: "mcq", so: "lecture",
    pr: "Precision = 0.6, recall = 0.4. Compute F1.",
    op: ["0.48", "0.50", "0.24", "0.52"],
    an: 0, at: "F1 = 2(0.6×0.4)/(0.6+0.4) = 0.48/1.0 = 0.48.",
    sl: "Harmonic mean of precision and recall.",
    ex: "The arithmetic mean (0.50) flatters the imbalance; F1 does not.",
    mt: "Using the arithmetic mean." });

  Q({ id: "L6-DR-05", lec: 6, pg: [38], tp: "ROC", sb: "Drill: specificity", df: "easy", ty: "mcq", so: "lecture",
    pr: "TN = 1,900 and FP = 100. Compute specificity.",
    op: ["0.95", "0.05", "0.9", "0.99"],
    an: 0, at: "Specificity = TN/(TN+FP) = 1,900/2,000 = 0.95 = 1 − FPR.",
    sl: "Specificity is the true-negative rate.",
    ex: "FPR = 0.05 for the same numbers.",
    mt: "Reporting FPR as specificity." });

  Q({ id: "L6-DR-06", lec: 6, pg: [16], tp: "Odds ratios", sb: "Drill: OR", df: "medium", ty: "mcq", so: "lecture",
    pr: "A logistic coefficient is β = 0.9. Compute e^β and interpret it.",
    op: ["≈2.46 — each unit multiplies the modelled odds by about 2.46", "≈0.41 — odds fall", "≈1.9 — odds add 1.9", "≈0.9 — the odds ratio equals β"],
    an: 0, at: "e^0.9 ≈ 2.46: per unit increase in the feature, the modelled odds multiply by ≈2.46, holding others fixed (association).",
    sl: "Exponentiate the log-odds coefficient to obtain the odds ratio.",
    ex: "OR > 1 → higher modelled odds.",
    mt: "Reading β as the odds ratio itself." });

  Q({ id: "L6-DR-07", lec: 6, pg: [27], tp: "Thresholds", sb: "Drill: utility", df: "hard", ty: "mcq", so: "lecture",
    pr: "At a threshold: TP = 100, FP = 40, FN = 20. Payoffs: TP +$400, FP −$60, FN −$300, TN $0. Compute the utility.",
    op: ["+$31,600", "+$24,000", "−$8,400", "+$40,000"],
    an: 0, at: "U = 400(100) − 60(40) − 300(20) = 40,000 − 2,400 − 6,000 = +$31,600.",
    sl: "U = c_TP·TP + c_FP·FP + c_FN·FN + c_TN·TN.",
    ex: "Compare utilities across thresholds and pick the best on validation data.",
    mt: "Forgetting the FN term." });
})();
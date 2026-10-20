/* Concept MCQs — pure concept/method questions (no slide recall, no course logistics).
   Data values are given inside the questions so nothing needs to be memorised from slides. */
(function () {
  /* ---------------- Lecture 1 — statistics & data types ---------------- */
  Q({ id: "L1-CC-01", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Mean vs median computation", df: "easy", ty: "mcq", so: "lecture",
    pr: "For the values 1, 2, 2, 3, 100, which statement is correct?",
    op: ["mean = 21.6 and median = 2; the mean is pulled up by the outlier", "mean = 2 and median = 21.6", "mean = 21.6 and median = 3", "mean = median = 21.6"],
    an: 0, at: "mean = 108/5 = 21.6, median = 2 — the mean is dragged up by the extreme value while the median stays robust.",
    sl: "Sum = 108 → mean = 21.6. Sorted middle value = 2 → median.",
    ex: "Robust statistics (median) describe skewed/outlier-heavy data better than the mean.",
    mt: "Computing the median as the middle of the unsorted list." });

  Q({ id: "L1-CC-02", lec: 1, pg: [38], tp: "Preprocessing", sb: "Min-max computation", df: "easy", ty: "calc", so: "lecture",
    pr: "Min-max normalise x = 30 given min = 10 and max = 50.",
    at: "x_norm = (30 − 10)/(50 − 10) = 20/40 = 0.5.",
    sl: "x_norm = (x − min)/(max − min) = 0.5.",
    ex: "Min-max maps the training range onto [0, 1]; new values outside the training range can exceed these bounds.",
    mt: "Subtracting max instead of min, or forgetting the correction of the range." });

  Q({ id: "L1-CC-03", lec: 1, pg: [38], tp: "Preprocessing", sb: "Z-score computation", df: "easy", ty: "calc", so: "lecture",
    pr: "Standardise x = 30 given sample mean = 20 and std = 5.",
    at: "z = (30 − 20)/5 = 2.",
    sl: "z = (x − mean)/std = 10/5 = 2 — the value lies 2 standard deviations above the mean.",
    ex: "Z-scores are unit-free, which is why they are used to compare features on different scales.",
    mt: "Dividing by variance instead of std." });

  Q({ id: "L1-CC-04", lec: 1, pg: [41], tp: "Descriptive stats", sb: "IQR computation", df: "medium", ty: "calc", so: "lecture",
    pr: "A dataset has Q1 = 12 and Q3 = 28. Compute the IQR and the range beyond which points are flagged as outliers (1.5×IQR rule).",
    at: "IQR = 28 − 12 = 16. Outlier fences: 12 − 1.5(16) = −12 and 28 + 1.5(16) = 52.",
    sl: "IQR = Q3 − Q1 = 16. Lower fence = Q1 − 1.5·IQR = −12; upper fence = Q3 + 1.5·IQR = 52.",
    ex: "Box-plot outliers are points beyond the 1.5×IQR fences.",
    mt: "Using Q1 − Q3 (negative IQR) or forgetting the 1.5 factor." });

  Q({ id: "L1-CC-05", lec: 1, pg: [44], tp: "Correlation", sb: "Direction and strength", df: "medium", ty: "mcq", so: "lecture",
    pr: "Two variables have r = −0.9. Which interpretation is correct?",
    op: ["Strong positive linear association", "Strong negative linear association: as one increases, the other tends to decrease", "No linear association", "The variables are independent"],
    an: 1, at: "r = −0.9: strong negative LINEAR association.",
    sl: "Sign gives direction (−), magnitude 0.9 gives strong linear association.",
    ex: "Correlation measures linear association only — a curve can have r ≈ 0.",
    mt: "Reading the magnitude as direction." });

  Q({ id: "L1-CC-06", lec: 1, pg: [43], tp: "Distributions", sb: "Skewness effect", df: "medium", ty: "mcq", so: "lecture",
    pr: "In a right-skewed distribution (long tail to the right), which ordering typically holds?",
    op: ["mean < median", "mean > median", "mean = median", "median < Q1"],
    an: 1, at: "mean > median — the long right tail of high values pulls the mean upward.",
    sl: "Right skew → extreme large values → mean pulled above the median.",
    ex: "For left skew the inequality flips (mean < median).",
    mt: "Reversing the inequality." });

  Q({ id: "L1-CC-07", lec: 1, pg: [36], tp: "Data cleaning", sb: "Outlier rule application", df: "medium", ty: "mcq", so: "lecture",
    pr: "A value has z-score = 4.5. Using the common rule of thumb, what does this indicate?",
    op: ["The value is typical", "It is a candidate outlier (|z| > 3) that should be investigated", "It must be deleted", "It equals the mean"],
    an: 1, at: "|z| > 3 flags a candidate outlier; investigate whether it is an error or a genuine extreme before deciding.",
    sl: "Standard rule: Z-score beyond ±3 is suspicious; decide with domain knowledge; never auto-delete.",
    ex: "Outliers may be the most informative points — investigate first.",
    mt: "Auto-deleting high-|z| values." });

  Q({ id: "L1-CC-08", lec: 1, pg: [35], tp: "Data cleaning", sb: "Imputation trade-offs", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about mean imputation of missing values is correct?",
    op: ["It preserves the variance exactly", "It can shrink variance and distort relationships with other variables", "It always biases the mean upward", "It is the only unbiased method"],
    an: 1, at: "Mean imputation keeps the mean but reduces variance and can distort correlations/relationships.",
    sl: "Replacing missing values by one constant artificially concentrates mass at the mean → variance shrinks.",
    ex: "Conditional/model-based imputation preserves relationships better (Lecture 4).",
    mt: "Assuming mean imputation is distortion-free." });

  Q({ id: "L1-CC-09", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Std dev interpretation", df: "medium", ty: "mcq", so: "lecture",
    pr: "A sample of commute times has mean 30 min and standard deviation 5 min. Which interpretation is correct?",
    op: ["Typical distance of observations from the mean is about 5 minutes, in the original units", "5% of commutes take 30 minutes", "The median is 5", "All commutes lie within 5 minutes of the mean"],
    an: 0, at: "Std dev ≈ typical deviation from the mean, expressed in the data's units (min).",
    sl: "SD = sqrt(variance) → same units as data. It measures spread, not a percentage or guarantee.",
    ex: "For the normal distribution, ~68% of values lie within 1 SD (68-95-99.7).",
    mt: "Confusing SD with a percentage or an absolute bound." });

  Q({ id: "L1-CC-10", lec: 1, pg: [44], tp: "Correlation", sb: "Causation", df: "medium", ty: "mcq", so: "lecture",
    pr: "Ice-cream sales and drowning deaths are strongly positively correlated. What is the correct conclusion?",
    op: ["Ice cream causes drowning", "Drowning causes ice-cream sales", "A third factor (e.g., season/temperature) may drive both — correlation is not causation", "The correlation must be an arithmetic error"],
    an: 2, at: "Correlation does not imply causation; a lurking variable (summer heat) plausibly drives both.",
    sl: "Association can arise from confounders, reverse causation, or coincidence.",
    ex: "The same caution applies when interpreting regression coefficients (Lecture 5/6).",
    mt: "Inferring a causal mechanism from r alone." });

  /* ---------------- Lecture 2 — distances, covariance, PCA ---------------- */
  Q({ id: "L2-CC-01", lec: 2, pg: [15], tp: "Distances", sb: "Euclidean properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which property does Euclidean distance NOT have?",
    op: ["Non-negativity", "Symmetry d(x,y) = d(y,x)", "Scale invariance", "d(x,y) = 0 only when x = y"],
    an: 2, at: "Euclidean distance is NOT scale-invariant — rescaling a vector changes distances (cosine similarity is the scale-invariant one).",
    sl: "Euclidean: ≥ 0; symmetric; identity only when equal; sensitive to scale.",
    ex: "This is why Euclidean suits physical measurements, not length-confounded text counts.",
    mt: "Confusing cosine's scale invariance with Euclidean." });

  Q({ id: "L2-CC-02", lec: 2, pg: [17], tp: "Distances", sb: "Cosine range mapping", df: "easy", ty: "mcq", so: "lecture",
    pr: "Match cosine values to geometry: +1, 0, −1",
    op: ["+1 same direction, 0 perpendicular, −1 opposite", "+1 opposite, 0 same, −1 perpendicular", "+1 perpendicular, 0 opposite, −1 same", "+1 = 0 degrees only in 2D"],
    an: 0, at: "+1 = same direction; 0 = perpendicular (orthogonal); −1 = opposite.",
    sl: "Cosine is the cosine of the angle between the vectors.",
    ex: "Text vectors sharing no vocabulary have cosine 0 (orthogonal).",
    mt: "Swapping 0 and −1." });

  Q({ id: "L2-CC-03", lec: 2, pg: [15], tp: "Distances", sb: "Euclidean computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Compute the Euclidean distance between u = (1, 2, 2) and v = (3, 4, 4).",
    at: "d = √[(3−1)² + (4−2)² + (4−2)²] = √(4+4+4) = √12 ≈ 3.464.",
    sl: "Differences (2, 2, 2); squares sum to 12; square root gives √12 ≈ 3.464.",
    ex: "The formula generalises the Pythagorean theorem to p dimensions.",
    mt: "Forgetting the square root (reporting 12)." });

  Q({ id: "L2-CC-04", lec: 2, pg: [17], tp: "Distances", sb: "Cosine computation", df: "hard", ty: "calc", so: "lecture",
    pr: "Compute cos(u, v) for u = (1, 0, 1) and v = (1, 1, 0).",
    at: "cos = (1·1 + 0·1 + 1·0)/(√2·√2) = 1/2 = 0.5.",
    sl: "Dot product = 1. ‖u‖ = √2, ‖v‖ = √2. cos = 1/(√2·√2) = 0.5.",
    ex: "cos = 0.5 corresponds to a 60° angle — same general direction but clearly not identical.",
    mt: "Forgetting to divide by both norms." });

  Q({ id: "L2-CC-05", lec: 2, pg: [20], tp: "Distances", sb: "Metric selection", df: "medium", ty: "mcq", so: "lecture",
    pr: "Documents are compared by raw word-count vectors and document length varies a lot. Which metric is better and why?",
    op: ["Euclidean, because it accounts for length", "Cosine, because it compares the proportional content (direction) and is invariant to length", "Euclidean, because it is scale-invariant", "Neither works for text"],
    an: 1, at: "Cosine — direction captures topic mix; length differences do not distort it.",
    sl: "Cosine ignores magnitude (length); Euclidean is dominated by it.",
    ex: "The canonical demo: a document repeated 3× has cos = 1 but a larger Euclidean distance.",
    mt: "Claiming Euclidean is scale-invariant." });

  Q({ id: "L2-CC-06", lec: 2, pg: [26], tp: "Covariance", sb: "Bessel correction", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why does the sample variance divide by n − 1 rather than n?",
    op: ["To make the result larger", "Because the deviations are taken from the estimated mean, which uses one degree of freedom — n−1 corrects the bias", "Because n is always odd", "To convert variance into standard deviation"],
    an: 1, at: "Bessel's correction: the mean was estimated from the same data (1 constraint), so n−1 degrees of freedom remain; dividing by n would underestimate population variance on average.",
    sl: "E[Σ(xᵢ−x̄)²] = (n−1)σ² — dividing by n−1 makes the estimator unbiased.",
    ex: "np.cov() uses n−1 by default.",
    mt: "Saying n−1 corrects the mean rather than the variance estimate." });

  Q({ id: "L2-CC-07", lec: 2, pg: [28], tp: "Covariance", sb: "Sign computation", df: "hard", ty: "calc", so: "lecture",
    pr: "Data: (1, 5), (2, 3), (3, 1). Compute x̄, ȳ and the sign of the covariance (no need to finish dividing).",
    at: "x̄ = 2, ȳ = 3. Deviations: (−1, 2), (0, 0), (1, −2). Products: −2, 0, −2 → sum negative → Cov < 0.",
    sl: "Every non-zero product is negative (opposite-side deviations) → covariance is negative.",
    ex: "A downward trend gives negative covariance.",
    mt: "Missing that the pairs of deviations have opposite signs." });

  Q({ id: "L2-CC-08", lec: 2, pg: [28], tp: "Covariance", sb: "Self-covariance", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is Cov(X, X)?",
    op: ["0", "1", "Var(X)", "2·Var(X)"],
    an: 2, at: "Cov(X, X) = Var(X) — a feature's covariance with itself is its variance.",
    sl: "Substitute Y = X into the covariance formula: the products become squared deviations averaged → variance.",
    ex: "This is why covariance-matrix diagonals hold the variances.",
    mt: "Answering 0." });

  Q({ id: "L2-CC-09", lec: 2, pg: [31], tp: "Covariance matrix", sb: "Required properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pair of properties must every covariance matrix satisfy?",
    op: ["Symmetric and positive semidefinite", "Diagonal and invertible", "Triangular and full rank", "All entries positive"],
    an: 0, at: "Symmetric (Σij = Σji) and positive semidefinite (all eigenvalues ≥ 0).",
    sl: "Symmetry from Cov(X,Y) = Cov(Y,X); PSD because variances can't be negative.",
    ex: "Off-diagonal entries may be negative — only variances (diagonal) cannot.",
    mt: "Requiring all entries to be positive." });

  Q({ id: "L2-CC-10", lec: 2, pg: [31], tp: "Covariance matrix", sb: "Validity test", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which 2×2 matrix CANNOT be a covariance matrix?",
    op: ["[[4, 2], [2, 1]]", "[[2, 0.5], [0.5, 3]]", "[[2, 1], [0, 3]]", "[[1, −0.3], [−0.3, 1]]"],
    an: 2, at: "[[2, 1], [0, 3]] is not symmetric (entry (1,2) = 1 ≠ 0 = entry (2,1)).",
    sl: "Covariance matrices are symmetric; the other three are symmetric with non-negative diagonal.",
    ex: "Negative off-diagonal (−0.3) is fine; asymmetry is not.",
    mt: "Rejecting the matrix with a negative covariance instead of the asymmetric one." });

  Q({ id: "L2-CC-11", lec: 2, pg: [46], tp: "Eigen", sb: "Eigenvalue equation", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does Σv = λv mean geometrically?",
    op: ["v is rotated by Σ", "v keeps its direction under Σ and is only scaled by λ", "v becomes the zero vector", "λ is the length of v"],
    an: 1, at: "Eigenvectors keep their direction under the transformation; λ scales them (stretch/compress).",
    sl: "Matrix transformation of an eigenvector = scalar multiplication.",
    ex: "For covariance matrices, λ is the variance along that direction.",
    mt: "Thinking λ is the vector's length rather than the stretch factor." });

  Q({ id: "L2-CC-12", lec: 2, pg: [47], tp: "Eigen", sb: "Zero eigenvalue", df: "hard", ty: "mcq", so: "lecture",
    pr: "A covariance matrix has an eigenvalue λ = 0. What does this imply?",
    op: ["The data has no variance anywhere", "One direction carries zero variance — the data is perfectly collinear along the remaining directions, and Σ is not invertible", "The matrix is invalid", "PCA cannot be computed"],
    an: 1, at: "λ = 0 means that principal direction has no variance (perfect linear dependence); Σ is singular but still a valid covariance matrix.",
    sl: "Zero eigenvalue ⇔ rank deficiency ⇔ collinear features; eigen-decomposition still works for PCA.",
    ex: "λ = 0 is impossible to be negative but perfectly allowed as zero.",
    mt: "Calling the matrix invalid — PSD allows zero eigenvalues." });

  Q({ id: "L2-CC-13", lec: 2, pg: [55], tp: "PCA algorithm", sb: "Step order", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which sequence is the correct PCA algorithm?",
    op: ["Project → centre → eigen → covariance", "Centre → covariance → eigenvectors sorted by eigenvalue → project onto top-k", "Covariance → centre → project → sort", "Eigen → centre → covariance → project"],
    an: 1, at: "Centre the data, compute the covariance matrix, compute/sort eigenvectors, project onto the top-k eigenvectors.",
    sl: "Centring is required because covariance is defined around the mean.",
    ex: "Projection Z = X_centered · W_k reduces n×p to n×k.",
    mt: "Projecting before centring." });

  Q({ id: "L2-CC-14", lec: 2, pg: [67], tp: "PCA selection", sb: "EVR computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Eigenvalues λ = (6, 3, 1). Compute EVR₁, EVR₂, and the cumulative share of the first two components.",
    at: "Total = 10. EVR₁ = 0.6 (60%), EVR₂ = 0.3 (30%), cumulative = 0.9 (90%).",
    sl: "EVR_i = λ_i / Σλ. (6+3)/10 = 0.9.",
    ex: "These two components just meet a 90% variance threshold.",
    mt: "Dividing by the number of components (3)." });

  Q({ id: "L2-CC-15", lec: 2, pg: [59], tp: "PCA", sb: "Projection computation", df: "hard", ty: "calc", so: "lecture",
    pr: "Centred point x = (2, 4), unit eigenvector v = (1/√2, 1/√2). Compute the PC score and the projection of x onto v.",
    at: "Score = 2/√2 + 4/√2 = 6/√2 = 3√2 ≈ 4.243. Projection = score·v = 3√2·(1/√2, 1/√2) = (3, 3).",
    sl: "x·v = 6/√2 = 3√2; multiply back by v to reconstruct the projection vector.",
    ex: "The residual x − (3,3) = (−1, 1) is orthogonal to v — the discarded part.",
    mt: "Reporting the scalar score as 'the projection' (missing the vector)." });

  /* ---------------- Lecture 3 — probability & statistics ---------------- */
  Q({ id: "L3-CC-01", lec: 3, pg: [10], tp: "Probability rules", sb: "Complement", df: "easy", ty: "calc", so: "lecture",
    pr: "If P(A) = 0.27, compute P(not A).",
    at: "P(not A) = 1 − 0.27 = 0.73.",
    sl: "Complement rule: P(Aᶜ) = 1 − P(A).",
    ex: "Something either happens or it doesn't — the probabilities sum to 1.",
    mt: "Answering 0.27." });

  Q({ id: "L3-CC-02", lec: 3, pg: [10], tp: "Probability rules", sb: "Addition with overlap", df: "medium", ty: "calc", so: "lecture",
    pr: "P(A) = 0.5, P(B) = 0.4, P(A∩B) = 0.2. Compute P(A∪B).",
    at: "P(A∪B) = 0.5 + 0.4 − 0.2 = 0.7.",
    sl: "Addition rule: subtract the overlap once to avoid double counting.",
    ex: "If the events were mutually exclusive, the overlap term would be 0.",
    mt: "Forgetting to subtract P(A∩B) (answering 0.9)." });

  Q({ id: "L3-CC-03", lec: 3, pg: [10], tp: "Probability rules", sb: "Independence", df: "medium", ty: "calc", so: "lecture",
    pr: "A fair coin is flipped twice. Compute P(two heads) and explain which rule applies.",
    at: "P = 0.5 × 0.5 = 0.25 — the multiplication rule for independent events.",
    sl: "Flips are independent ⇒ P(A∩B) = P(A)P(B).",
    ex: "If events were dependent, use P(A)P(B|A) instead.",
    mt: "Adding probabilities for 'and' questions." });

  Q({ id: "L3-CC-04", lec: 3, pg: [28], tp: "Conditional probability", sb: "Definition computation", df: "medium", ty: "calc", so: "lecture",
    pr: "In a group, 40% are runners; 25% are runners who also stretch daily. Compute P(stretch | runner).",
    at: "P(stretch|runner) = P(stretch ∩ runner)/P(runner) = 0.25/0.40 = 0.625.",
    sl: "Conditional = joint / condition: 0.25/0.40 = 0.625.",
    ex: "Contrast with P(runner|stretch), a different quantity.",
    mt: "Using the wrong denominator (0.25/0.75 or 0.25 alone)." });

  Q({ id: "L3-CC-05", lec: 3, pg: [29], tp: "Conditional probability", sb: "Direction of conditioning", df: "medium", ty: "mcq", so: "lecture",
    pr: "P(cloudy | rain) ≈ 0.95 while P(rain | cloudy) ≈ 0.3. What explains the gap?",
    op: ["An arithmetic error", "The conditionals answer different questions; rain makes cloudiness almost certain, but cloudy days are common and often dry", "Rain and cloudiness are independent", "The two must be equal"],
    an: 1, at: "P(A|B) ≠ P(B|A): conditioning changes the reference population.",
    sl: "Rain ⊂ cloudy outcomes, but the cloudy pool is much larger than the rainy pool.",
    ex: "Bayes' rule connects the two directions via the priors.",
    mt: "Assuming conditional probabilities are symmetric." });

  Q({ id: "L3-CC-06", lec: 3, pg: [31], tp: "Bayes", sb: "Posterior computation", df: "hard", ty: "calc", so: "lecture",
    pr: "Prior P(H) = 0.2, likelihood P(E|H) = 0.9, and total evidence probability P(E) = 0.33. Compute P(H|E).",
    at: "P(H|E) = 0.9 × 0.2 / 0.33 = 0.18/0.33 ≈ 0.545.",
    sl: "Bayes: posterior = likelihood × prior ÷ evidence.",
    ex: "The prior drags the posterior down from the impressive-looking 90% likelihood.",
    mt: "Writing likelihood × evidence / prior." });

  Q({ id: "L3-CC-07", lec: 3, pg: [30], tp: "Law of total probability", sb: "Weighted computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Machines A (60% of production) and B (40%) have defect rates 2% and 5%. Compute the overall defect probability.",
    at: "P(defect) = 0.02 × 0.6 + 0.05 × 0.4 = 0.012 + 0.02 = 0.032 (3.2%).",
    sl: "Law of total probability: weight each conditional by its machine's share.",
    ex: "This denominator is what Bayes' rule needs for 'which machine made a defective item?'.",
    mt: "Averaging the defect rates without weighting (3.5% would be wrong)." });

  Q({ id: "L3-CC-08", lec: 3, pg: [24], tp: "Distributions", sb: "Binomial moments", df: "medium", ty: "calc", so: "lecture",
    pr: "X ~ Binomial(n = 20, p = 0.3). Compute E[X] and Var(X).",
    at: "E[X] = np = 6. Var(X) = np(1−p) = 20 × 0.3 × 0.7 = 4.2.",
    sl: "Mean np; variance np(1−p).",
    ex: "The distribution is skewed here because p ≠ 0.5.",
    mt: "Using np for the variance." });

  Q({ id: "L3-CC-09", lec: 3, pg: [25], tp: "Distributions", sb: "Poisson property", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which property distinguishes the Poisson distribution?",
    op: ["Mean equals variance (both = λ)", "It has two parameters", "It is always symmetric", "It models waiting times"],
    an: 0, at: "For Poisson(λ): E[X] = Var(X) = λ — mean equals variance.",
    sl: "Counts of rare independent events at a constant rate.",
    ex: "Waiting times between those events follow the exponential (mean 1/λ).",
    mt: "Confusing the Poisson with the exponential's role." });

  Q({ id: "L3-CC-10", lec: 3, pg: [26], tp: "Distributions", sb: "Exponential mean", df: "medium", ty: "calc", so: "lecture",
    pr: "Calls arrive as a Poisson process at rate λ = 3 per minute. Compute the mean and variance of the waiting time between calls.",
    at: "Mean = 1/λ = 1/3 min ≈ 20 s; variance = 1/λ² = 1/9 min².",
    sl: "Exponential waiting time: E[X] = 1/λ, Var(X) = 1/λ².",
    ex: "The exponential is memoryless and always right-skewed.",
    mt: "Reporting the mean as λ instead of 1/λ." });

  Q({ id: "L3-CC-11", lec: 3, pg: [38], tp: "Confidence intervals", sb: "Critical values", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which critical values produce 95% and 99% confidence intervals for a mean (large-sample z)?",
    op: ["1.96 and 2.58", "0.95 and 0.99", "2.00 and 3.00", "1.645 and 1.96"],
    an: 0, at: "z* = 1.96 (95%) and 2.58 (99%).",
    sl: "Higher confidence ⇒ larger z* ⇒ wider interval.",
    ex: "1.645 corresponds to 90% one-sided/90% two-sided boundaries.",
    mt: "Using the confidence level itself as the multiplier." });

  Q({ id: "L3-CC-12", lec: 3, pg: [38], tp: "Confidence intervals", sb: "Width drivers", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which change makes a confidence interval NARROWER?",
    op: ["Increasing the confidence level", "Increasing the sample size n", "Increasing the sample standard deviation", "Increasing the critical value z*"],
    an: 1, at: "The standard error s/√n shrinks as n grows → narrower interval.",
    sl: "CI = x̄ ± z*·s/√n. Larger n reduces the width; larger z* or s increases it.",
    ex: "More data buys precision; more confidence costs width.",
    mt: "Expecting higher confidence to narrow the interval." });

  Q({ id: "L3-CC-13", lec: 3, pg: [47], tp: "P-values", sb: "Definition meaning", df: "hard", ty: "mcq", so: "lecture",
    pr: "A test gives p = 0.02. Which statement is correct?",
    op: ["There is a 2% chance the null hypothesis is true", "If the null were true, data this extreme would occur about 2% of the time", "The effect is practically important", "The null is proven false"],
    an: 1, at: "p = P(data this extreme or more | H₀ true) — a probability about the data, not about the hypothesis.",
    sl: "Small p = surprising under the null → evidence against H₀ (reject if p < α).",
    ex: "It says nothing directly about effect size or practical importance.",
    mt: "Flipping the conditional to P(H₀ | data)." });

  /* ---------------- Lecture 4 — wrangling concepts ---------------- */
  Q({ id: "L4-CC-01", lec: 4, pg: [29], tp: "Quality assessment", sb: "Four-check protocol", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which set names the four quality checks in the correct grouping?",
    op: ["Structural (dimensions/dtypes), completeness (missingness), validity (ranges/duplicates/inconsistencies), distributional (shapes/summaries)", "Mean, median, mode, range", "Collect, clean, model, deploy", "Train, validate, test, deploy"],
    an: 0, at: "Structural, completeness, validity, distributional — the four-check protocol.",
    sl: "Assess systematically before changing anything; the output is a quality report.",
    ex: "Missingness also needs a sentinel-value check (blanks, 'N/A', −999).",
    mt: "Treating modelling steps as quality checks." });

  Q({ id: "L4-CC-02", lec: 4, pg: [31], tp: "Quality assessment", sb: "Missingness thresholds", df: "medium", ty: "mcq", so: "lecture",
    pr: "According to the common rules of thumb, when should you start considering dropping a column for missingness?",
    op: ["More than 5% missing", "More than 10% missing", "More than 30% missing", "Any missing value"],
    an: 2, at: "> 30% missing → consider dropping; 5–30% needs careful strategy; < 5% is usually manageable.",
    sl: "Thresholds depend on mechanism and analysis goals, not just the percentage.",
    ex: "Always also ask WHY the values are missing (MCAR/MAR/MNAR).",
    mt: "Dropping columns at trivial missingness rates." });

  Q({ id: "L4-CC-03", lec: 4, pg: [39], tp: "Missingness", sb: "Mechanism definitions", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which mapping of mechanism to definition is correct?",
    op: ["MCAR: missingness depends on the missing value; MNAR: purely random", "MAR: given observed variables, missingness is unrelated to the missing values; MNAR: missingness depends on the missing values themselves", "MCAR implies MAR implies MNAR", "All three are the same in practice"],
    an: 1, at: "MAR conditions on OBSERVED variables; MNAR is self-referential (depends on the value you didn't see).",
    sl: "MCAR: unrelated to anything. MAR: explained by observed data. MNAR: depends on the hidden value.",
    ex: "Mechanism determines which cleaning strategy is valid; it cannot be proven from data alone.",
    mt: "Treating MAR as 'completely random'." });

  Q({ id: "L4-CC-04", lec: 4, pg: [41], tp: "Missingness", sb: "Strategy validity", df: "hard", ty: "mcq", so: "lecture",
    pr: "Under which mechanism is listwise deletion broadly safe from bias?",
    op: ["MCAR", "MAR", "MNAR", "None of them"],
    an: 0, at: "Deletion is unbiased under MCAR (though it wastes data); under MAR use conditional imputation; MNAR has no simple fix.",
    sl: "If missingness is unrelated to everything (MCAR), removed rows are a random subset.",
    ex: "With MAR, deletion can bias estimates because missingness correlates with observed variables.",
    mt: "Assuming deletion is safe under MAR." });

  Q({ id: "L4-CC-05", lec: 4, pg: [42], tp: "Cleaning", sb: "Imputation validity", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why is mean imputation problematic even when it keeps the variable's mean unchanged?",
    op: ["It changes the mean", "It artificially reduces variance and weakens relationships with other variables", "It requires no assumptions", "It only works for categorical data"],
    an: 1, at: "Filling many values with one constant shrinks variance and attenuates correlations — a distortion of the data's structure.",
    sl: "Values pile up at the mean (artificial spike) instead of following the natural spread.",
    ex: "Conditional (by-group) or model-based imputation preserves relationships better under MAR.",
    mt: "Believing 'mean preserved' means 'structure preserved'." });

  Q({ id: "L4-CC-06", lec: 4, pg: [54], tp: "Encoding", sb: "Nominal vs ordinal", df: "medium", ty: "mcq", so: "lecture",
    pr: "A variable has categories 'red', 'green', 'blue'. Which encoding suits a linear/logistic model?",
    op: ["Ordinal (1, 2, 3)", "One-hot (three binary columns)", "Either — order is irrelevant", "Keep as text strings"],
    an: 1, at: "Nominal categories have no natural order → one-hot encoding; integers would impose a false ordering.",
    sl: "Ordinal encoding is for genuinely ordered categories (e.g., low < medium < high).",
    ex: "One-hot increases the number of columns but keeps each binary column meaningful.",
    mt: "Assigning arbitrary integers to nominal categories for a linear model." });

  Q({ id: "L4-CC-07", lec: 4, pg: [56], tp: "Scaling", sb: "Algorithm sensitivity", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which algorithms REQUIRE feature scaling (features on very different ranges)?",
    op: ["Decision trees and random forests", "KNN, SVM, PCA and gradient-based models (logistic regression, neural nets)", "Gaussian Naïve Bayes", "None — scaling never matters"],
    an: 1, at: "Distance-based (KNN/SVM/PCA) and gradient-based (logistic/NN) methods need comparable scales; tree splits and Gaussian NB are invariant.",
    sl: "A feature with a big range otherwise dominates distances/gradients.",
    ex: "Penalized regression also requires scaling for a fair penalty (Lecture 5).",
    mt: "Scaling for tree models while skipping it for KNN." });

  Q({ id: "L4-CC-08", lec: 4, pg: [59], tp: "Pipelines", sb: "Leakage", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why must imputers/scalers be fit on the training split only?",
    op: ["To speed up training", "Fitting on all data leaks test information into training and inflates evaluation results", "Because test data has no missing values", "It is only a style preference"],
    an: 1, at: "Fitting preprocessing on the full dataset leaks information from the test set — evaluation becomes optimistically biased.",
    sl: "fit on train → transform train and test with the train-derived statistics.",
    ex: "Packaging steps in an sklearn pipeline enforces the correct order automatically.",
    mt: "Fitting the scaler before the split." });

  Q({ id: "L4-CC-09", lec: 4, pg: [32], tp: "Quality assessment", sb: "Duplicates concept", df: "medium", ty: "mcq", so: "lecture",
    pr: "df.duplicated.sum reports many duplicate rows. What is the correct next step?",
    op: ["Delete them immediately", "Investigate whether they are true duplicates or legitimate repeated measurements before deciding", "Replace them with the mean", "Ignore them"],
    an: 1, at: "Investigate first — duplicates can be entry errors or genuine repeated observations; domain context decides.",
    sl: "Validity checks flag; domain knowledge interprets.",
    ex: "Deleting genuine repeated measurements biases the data.",
    mt: "Auto-dropping duplicates." });

  Q({ id: "L4-CC-10", lec: 4, pg: [31], tp: "Quality assessment", sb: "Sentinel values", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why can.isnull under-report missing data?",
    op: ["It only works on numbers", "Missing values are often stored as sentinels — blank strings, 'N/A', -999 — which are not NaN", "It ignores whole columns", "It counts duplicates as missing"],
    an: 1, at: "Sentinel/placeholder values are valid-looking entries, so the null check never sees them.",
    sl: "Scan value counts and domain-plausible ranges to catch sentinels.",
    ex: "TotalCharges blanks (strings) were invisible to a simple null count.",
    mt: "Trusting .isnull() as the complete missingness audit." });

  Q({ id: "L4-CC-11", lec: 4, pg: [49], tp: "EDA", sb: "Discovery cycle", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the defining feature of EDA compared with quality assessment?",
    op: ["EDA is systematic, checking every column in order", "EDA is question-driven and creative: each visualization provokes the next question", "EDA uses only summary statistics", "EDA must be completed before any statistics are computed"],
    an: 1, at: "Quality assessment is systematic (find problems); EDA is discovery-driven (find patterns), following threads.",
    sl: "Cycle: visualize → notice → hypothesize → investigate → act.",
    ex: "Both are needed: diagnose quality first, then explore.",
    mt: "Treating EDA as a fixed checklist." });

  Q({ id: "L4-CC-12", lec: 4, pg: [56], tp: "Preprocessing", sb: "Standardization computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Standardise a feature with mean 50 and std 10. Compute the z-scores of x = 65 and x = 35.",
    at: "z(65) = (65−50)/10 = 1.5; z(35) = (35−50)/10 = −1.5.",
    sl: "z = (x − mean)/std; sign shows the side of the mean.",
    ex: "Standardising all features makes coefficients/penalties comparable.",
    mt: "Using variance (100) instead of std in the denominator." });

  /* ---------------- Lecture 5 — regression concepts ---------------- */
  Q({ id: "L5-CC-01", lec: 5, pg: [8], tp: "Coefficients", sb: "Slope interpretation", df: "medium", ty: "mcq", so: "lecture",
    pr: "A regression gives ŷ = 3 + 2.5x (y in kg, x in hours). What does 2.5 mean?",
    op: ["The predicted y when x = 0", "Each extra hour is associated with 2.5 kg higher predicted y, holding nothing else (simple regression)", "The correlation between x and y", "The average y"],
    an: 1, at: "β₁ = 2.5 kg per additional hour — the slope. The intercept 3 is the prediction at x = 0.",
    sl: "β₁ is the per-unit change in ŷ; β₀ is the value at x = 0.",
    ex: "In multiple regression the coefficient is a partial effect (holding other predictors fixed).",
    mt: "Swapping the roles of intercept and slope." });

  Q({ id: "L5-CC-02", lec: 5, pg: [10], tp: "OLS", sb: "Objective concept", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does ordinary least squares (OLS) minimise?",
    op: ["The sum of residuals", "The sum of squared residuals Σ(yᵢ − ŷᵢ)²", "The sum of absolute residuals", "The number of misclassified points"],
    an: 1, at: "OLS minimises the sum of squared residuals — large errors are penalised disproportionately.",
    sl: "Squaring makes all contributions positive and emphasises big misses.",
    ex: "Absolute-error regression (LAD) is the less outlier-sensitive alternative.",
    mt: "Confusing OLS with least absolute deviations." });

  Q({ id: "L5-CC-03", lec: 5, pg: [9], tp: "Regression", sb: "Residual sign", df: "easy", ty: "mcq", so: "lecture",
    pr: "For one observation, y = 8 and the model predicts ŷ = 6.5. What is the residual and its meaning?",
    op: ["+1.5 — the model under-predicted this point", "−1.5 — the model over-predicted", "+1.5 — the model over-predicted", "0 — no error"],
    an: 0, at: "e = y − ŷ = +1.5 → the model predicted too low (under-prediction).",
    sl: "Positive residual = actual above predicted; negative = actual below predicted.",
    ex: "SSres squares these values, so signs do not cancel in the loss.",
    mt: "Flipping the sign convention." });

  Q({ id: "L5-CC-04", lec: 5, pg: [27], tp: "Metrics", sb: "R² computation", df: "medium", ty: "calc", so: "lecture",
    pr: "A model has SSres = 12 and SStot = 60. Compute R² and interpret it.",
    at: "R² = 1 − 12/60 = 0.8. The model explains 80% of the variance in y.",
    sl: "R² = 1 − SSres/SStot.",
    ex: "R² is unit-free; compare with RMSE for error in the target's units.",
    mt: "Computing SSres/SStot without subtracting from 1." });

  Q({ id: "L5-CC-05", lec: 5, pg: [37], tp: "Metrics", sb: "RMSE computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Residuals are (2, −1, 0, 1, −2). Compute MSE and RMSE.",
    at: "Squares: 4, 1, 0, 1, 4 → SSE = 10; MSE = 10/5 = 2; RMSE = √2 ≈ 1.414.",
    sl: "RMSE = sqrt(mean of squared residuals) — same units as y.",
    ex: "RMSE penalises large errors heavily (squaring) before averaging.",
    mt: "Forgetting the square root (reporting MSE)." });

  Q({ id: "L5-CC-06", lec: 5, pg: [28], tp: "Metrics", sb: "R² limitation", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which is a genuine limitation of R²?",
    op: ["It can decrease when a feature is added to OLS on training data", "On training data it cannot decrease as features are added, so it cannot detect useless features", "It has units of y", "It requires normally distributed features"],
    an: 1, at: "Training R² is non-decreasing in the number of OLS features — even random columns raise it; it rewards complexity, not generalisation.",
    sl: "Additional limitations: it cannot detect a wrong functional form; it is not comparable across datasets with different variance.",
    ex: "Evaluate with RMSE, residual plots and held-out data.",
    mt: "Believing training R² penalises useless features." });

  Q({ id: "L5-CC-07", lec: 5, pg: [26], tp: "Evaluation", sb: "Split purpose", df: "easy", ty: "mcq", so: "lecture",
    pr: "Why is a train/test split needed?",
    op: ["To speed up training", "To estimate performance on unseen data — a model can fit training data well yet generalise poorly (overfitting)", "To increase R² on the training set", "Because OLS requires it mathematically"],
    an: 1, at: "The test set simulates new data; the train/test gap exposes overfitting.",
    sl: "Split before fitting; never let test data influence training (no leakage).",
    ex: "Typical split: 70–80% train / 20–30% test.",
    mt: "Evaluating solely on training data." });

  Q({ id: "L5-CC-08", lec: 5, pg: [22], tp: "Multicollinearity", sb: "Consequences", df: "hard", ty: "mcq", so: "lecture",
    pr: "Two predictors are almost perfectly correlated. What is the main consequence for OLS?",
    op: ["Predictions become impossible", "Individual coefficients become unstable with inflated standard errors, though overall predictions may stay accurate", "R² drops to zero", "The intercept is biased"],
    an: 1, at: "Multicollinearity destabilises individual coefficients and inflates their SEs; prediction is often unaffected.",
    sl: "Interpretation suffers (which feature matters?), prediction usually doesn't.",
    ex: "Diagnose with correlation matrices (|r| > 0.7–0.8) and VIF (investigate > 5, act > 10).",
    mt: "Claiming correlated predictors destroy prediction quality." });

  Q({ id: "L5-CC-09", lec: 5, pg: [33], tp: "Bias-variance", sb: "Diagnosis", df: "medium", ty: "mcq", so: "lecture",
    pr: "A model has low training error but much worse test error. Which regime is this?",
    op: ["High bias (underfitting)", "High variance (overfitting)", "Noise-free data", "Perfect generalisation"],
    an: 1, at: "High variance: the model fits noise in the training sample and fails on new data.",
    sl: "Training ≪ test performance ⇒ overfitting (variance). Both poor ⇒ underfitting (bias).",
    ex: "Remedies: more data, simpler model, regularisation, feature pruning.",
    mt: "Calling it underfitting." });

  Q({ id: "L5-CC-10", lec: 5, pg: [43], tp: "Ridge", sb: "Penalty behaviour", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which description matches Ridge (L2) regularisation?",
    op: ["Adds λΣ|βⱼ| and zeroes some coefficients", "Adds λΣβⱼ² and shrinks coefficients toward zero, generally keeping them non-zero", "Removes features before fitting", "Sets the intercept to zero"],
    an: 1, at: "Ridge adds a squared-coefficient penalty — shrinkage (not selection).",
    sl: "Lasso (L1, absolute penalty) is the one that produces exact zeros.",
    ex: "Ridge is preferred when many features contribute or features are correlated.",
    mt: "Expecting exact zeros from Ridge." });

  Q({ id: "L5-CC-11", lec: 5, pg: [42], tp: "Regularization", sb: "λ effect", df: "medium", ty: "mcq", so: "lecture",
    pr: "As the penalty strength λ increases from 0 to very large values, what happens?",
    op: ["Variance rises and bias falls", "Bias rises and coefficients shrink toward zero, possibly oversmoothing", "Nothing changes", "R² on training increases indefinitely"],
    an: 1, at: "Large λ over-constrains: coefficients shrink toward 0 → high bias/underfitting. λ = 0 recovers plain OLS.",
    sl: "Choose λ by validation error (try a range; pick the minimum).",
    ex: "Regularisation trades a little bias for much lower variance.",
    mt: "Believing larger λ always improves test performance." });

  Q({ id: "L5-CC-12", lec: 5, pg: [45], tp: "Regularization", sb: "Scaling requirement", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why must features be standardised before Ridge/Lasso?",
    op: ["To make coefficients negative", "The penalty treats all coefficients equally; unscaled features have differently scaled coefficients and would be penalised unfairly", "To remove outliers", "To increase R²"],
    an: 1, at: "Equal penalisation presumes comparable coefficients — which requires comparable feature scales.",
    sl: "Standardise (z-score) before penalised regression; fit the scaler on training data only.",
    ex: "PCA, KNN, SVM require scaling for the same reason (distances/gradients).",
    mt: "Skipping scaling because 'the penalty will figure it out'." });

  /* ---------------- Lecture 6 — classification concepts ---------------- */
  Q({ id: "L6-CC-01", lec: 6, pg: [11], tp: "Sigmoid", sb: "Basic properties", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which is true of the sigmoid function σ(z) = 1/(1+e⁻ᶻ)?",
    op: ["Output range is (−∞, ∞)", "Output range is (0, 1) and σ(0) = 0.5", "It is linear in z", "It returns 0 or 1 exactly"],
    an: 1, at: "The sigmoid maps any real input into (0, 1); σ(0) = 0.5, with asymptotes at 0 and 1 (never reached).",
    sl: "Range (0,1) makes outputs interpretable as probabilities; symmetry at 0.5.",
    ex: "Range does not guarantee calibration — check predicted vs observed frequencies.",
    mt: "Claiming outputs of exactly 0 or 1." });

  Q({ id: "L6-CC-02", lec: 6, pg: [10], tp: "Logistic regression", sb: "Why not linear", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why is linear regression inappropriate for a binary target?",
    op: ["It cannot fit the mean", "Its predictions are unbounded and can fall outside [0, 1], so they cannot be probabilities", "It always overfits", "It requires categorical predictors"],
    an: 1, at: "Unbounded predictions (e.g., 1.3 or −0.2) are invalid probabilities; the sigmoid constrains the output to (0,1).",
    sl: "Logistic regression = linear predictor wrapped in the sigmoid.",
    ex: "Even in-range linear outputs need not be calibrated.",
    mt: "Thinking in-range values automatically make a linear model valid." });

  Q({ id: "L6-CC-03", lec: 6, pg: [13], tp: "Odds ratios", sb: "Odds computation", df: "medium", ty: "calc", so: "lecture",
    pr: "A predicted churn probability is 0.8. Compute the odds and the log-odds.",
    at: "Odds = 0.8/0.2 = 4 (4-to-1 for churn). Log-odds = ln 4 ≈ 1.386.",
    sl: "Odds = p/(1−p); log-odds = log(odds).",
    ex: "β coefficients in logistic regression live in log-odds space.",
    mt: "Reporting the probability (0.8) as the odds." });

  Q({ id: "L6-CC-04", lec: 6, pg: [16], tp: "Odds ratios", sb: "Odds ratio computation", df: "hard", ty: "calc", so: "lecture",
    pr: "A logistic coefficient is β = 1.2 for a binary feature (1 vs 0). Compute and interpret e^β.",
    at: "e^1.2 ≈ 3.32: having the feature multiplies the odds by about 3.32, holding the other features fixed (an association).",
    sl: "OR > 1 → higher modelled odds when the feature takes value 1.",
    ex: "For continuous features the multiplier applies per one-unit increase.",
    mt: "Interpreting the multiplier as a probability change." });

  Q({ id: "L6-CC-05", lec: 6, pg: [18], tp: "Causality", sb: "Association vs causation", df: "medium", ty: "mcq", so: "lecture",
    pr: "A model shows customers on long-term contracts churn less. What can be concluded?",
    op: ["Switching all customers to long-term contracts will reduce churn", "The model describes an association; a causal effect needs experimental or stronger evidence (self-selection possible)", "The contract feature should be removed", "The coefficient is certainly causal"],
    an: 1, at: "Prediction/description ≠ causal prescription; loyal customers may self-select into long contracts.",
    sl: "Coefficients describe historical patterns, not guaranteed intervention effects.",
    ex: "Causal questions require designed experiments or dedicated causal methods.",
    mt: "Treating a regression coefficient as a treatment effect." });

  Q({ id: "L6-CC-06", lec: 6, pg: [24], tp: "Precision", sb: "Computation", df: "medium", ty: "calc", so: "lecture",
    pr: "A classifier produces TP = 60, FP = 40, FN = 20, TN = 880. Compute precision.",
    at: "Precision = TP/(TP+FP) = 60/100 = 0.60.",
    sl: "Precision asks: of all flagged positives, how many are real? Denominator = predicted positives.",
    ex: "High precision = less effort wasted on false alarms.",
    mt: "Using the total N or the actual positives in the denominator." });

  Q({ id: "L6-CC-07", lec: 6, pg: [25], tp: "Recall", sb: "Computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Using the same matrix (TP = 60, FN = 20), compute recall.",
    at: "Recall = TP/(TP+FN) = 60/80 = 0.75. Of all real positives, 75% were caught.",
    sl: "Recall's denominator is the ACTUAL positive count.",
    ex: "Recall = TPR = sensitivity — also the y-axis of the ROC curve.",
    mt: "Using predicted positives in the denominator (that is precision)." });

  Q({ id: "L6-CC-08", lec: 6, pg: [30], tp: "F1", sb: "Computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Precision = 0.8 and recall = 0.6. Compute F1.",
    at: "F1 = 2 × (0.8 × 0.6)/(0.8 + 0.6) = 0.96/1.4 ≈ 0.686.",
    sl: "F1 is the harmonic mean of precision and recall.",
    ex: "Because it is harmonic, the smaller value dominates — imbalanced P/R pairs get punished.",
    mt: "Averaging precision and recall arithmetically." });

  Q({ id: "L6-CC-09", lec: 6, pg: [38], tp: "ROC", sb: "FPR computation", df: "hard", ty: "calc", so: "lecture",
    pr: "FP = 30, TN = 1,170. Compute FPR and specificitiy.",
    at: "FPR = FP/(FP+TN) = 30/1,200 = 0.025. Specificity = 1 − FPR = 0.975.",
    sl: "FPR = of all actual negatives, the fraction incorrectly flagged; specificity = TN rate.",
    ex: "ROC plots TPR against FPR across thresholds.",
    mt: "Using actual positives in the FPR denominator." });

  Q({ id: "L6-CC-10", lec: 6, pg: [40], tp: "AUC", sb: "Probabilistic meaning", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which statement captures the probabilistic meaning of AUC = 0.9?",
    op: ["90% of predictions are correct", "In ~90% of random (positive, negative) pairs, the positive scores higher (ties half-credited)", "The model's precision is 0.9", "The optimal threshold is 0.9"],
    an: 1, at: "AUC = P(s⁺ > s⁻) + ½P(s⁺ = s⁻) — average pairwise ranking credit across thresholds.",
    sl: "AUC > 0.5 means better-than-random ranking; 1.0 is perfect separation.",
    ex: "AUC is threshold-independent, unlike precision/recall.",
    mt: "Interpreting AUC as accuracy." });

  Q({ id: "L6-CC-11", lec: 6, pg: [33], tp: "Accuracy", sb: "Imbalance trap", df: "medium", ty: "mcq", so: "lecture",
    pr: "In a dataset with 95% negatives, a classifier that predicts 'negative' for everyone achieves what, and why is it useless?",
    op: ["95% accuracy; recall = 1", "95% accuracy with recall = 0 — it never detects any positive; accuracy hides this on imbalanced data", "5% accuracy; perfect recall", "50% accuracy; random performance"],
    an: 1, at: "Always-majority gets accuracy ≈ the majority share (95%) but catches zero positives (recall = F1 = 0).",
    sl: "Accuracy weights the majority class proportionally; report precision/recall (or AUC) on imbalanced data.",
    ex: "Always compare against the majority-class baseline.",
    mt: "Treating 95% accuracy as evidence of a good model." });

  Q({ id: "L6-CC-12", lec: 6, pg: [27], tp: "Thresholds", sb: "Costs decision", df: "hard", ty: "mcq", so: "lecture",
    pr: "When false negatives are much more costly than false positives, how should the classification threshold be adjusted?",
    op: ["Raise the threshold (flag less)", "Lower the threshold (flag more) to increase recall at the cost of precision", "Keep 0.5 always", "Thresholds cannot trade off errors"],
    an: 1, at: "Lowering θ flags more cases → higher recall (fewer missed positives), typically lower precision. Choose θ from the cost structure.",
    sl: "Precision/recall trade off along the PR curve; the optimal point depends on error costs — a business input.",
    ex: "The model cannot infer costs; it can only optimise a cost function you specify.",
    mt: "Assuming 0.5 is always optimal." });

  /* ---------------- Additional concept drills (pool top-up) ---------------- */
  Q({ id: "L1-CC-11", lec: 1, pg: [12], tp: "Descriptive stats", sb: "When median is preferred", df: "medium", ty: "mcq", so: "lecture",
    pr: "Income data is strongly right-skewed. Which summary is more informative about a 'typical' value?",
    op: ["The mean, because it uses every observation", "The median, because it is not dragged by the long right tail", "The range, because it shows extremes", "The mode, because it is the most common value"],
    an: 1, at: "For skewed data the median resists the pull of extreme values; the mean overstates the typical value.",
    sl: "Use median + IQR for skewed/outlier-heavy distributions; mean + SD for roughly symmetric ones.",
    ex: "The choice of statistic should match the distribution's shape.",
    mt: "Defaulting to the mean for income-like data." });

  Q({ id: "L1-CC-12", lec: 1, pg: [36], tp: "Data cleaning", sb: "Outlier decision", df: "hard", ty: "mcq", so: "lecture",
    pr: "An extreme value passes the 1.5×IQR fence. What is the correct action?",
    op: ["Always delete it", "Always keep it", "Investigate with domain knowledge: fix/remove genuine errors, keep or cap genuine extremes, and document the decision", "Replace it with the mean automatically"],
    an: 2, at: "Fences only flag candidates; the treatment depends on whether the value is an error or a real extreme.",
    sl: "Options: fix errors, keep genuine extremes, cap (winsorize), or use robust methods (median, robust regression).",
    ex: "Never blindly remove outliers — document every decision.",
    mt: "Treating a fence violation as proof of an error." });

  Q({ id: "L2-CC-16", lec: 2, pg: [19], tp: "Distances", sb: "Ranking disagreement", df: "hard", ty: "mcq", so: "lecture",
    pr: "Short vector a = (1, 1, 0); long same-topic vector b = (10, 10, 0); different-topic vector c = (0.5, 0, 0.5). Which statement is correct?",
    op: ["Both metrics prefer b", "Cosine prefers b (angle 0), Euclidean prefers c (smaller literal distance) — the metrics can rank differently", "Both metrics prefer c", "Cosine prefers c"],
    an: 1, at: "cos(a,b) = 1 (same direction) while d(a,b) ≈ 12.7; cos(a,c) ≈ 0.707 with d(a,c) ≈ 1 — Euclidean rewards magnitude proximity, cosine rewards direction.",
    sl: "Compute: a·b = 20, ‖a‖ = √2, ‖b‖ = √200 → cos = 1. d(a,c) elements: (−0.5, −1, 0.5) → √1.5 ≈ 1.22.",
    ex: "Pick the metric that encodes what 'similar' should mean for the task.",
    mt: "Assuming every metric must agree on the closest pair." });

  Q({ id: "L2-CC-17", lec: 2, pg: [49], tp: "Eigen", sb: "Covariance eigen properties", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which property set is guaranteed for the eigenvectors and eigenvalues of a covariance matrix?",
    op: ["Complex eigenvalues, skewed eigenvectors", "Real eigenvalues ≥ 0 and mutually orthogonal eigenvectors", "Eigenvalues summing to 0", "Random directions"],
    an: 1, at: "Σ is symmetric ⇒ real eigenvalues; PSD ⇒ eigenvalues ≥ 0; symmetric ⇒ orthogonal eigenvectors (a natural perpendicular coordinate system).",
    sl: "These guarantees are what make PCA well-defined for any dataset.",
    ex: "λ ≥ 0 because a variance cannot be negative.",
    mt: "Expecting complex eigenvalues from a real covariance matrix." });

  Q({ id: "L2-CC-18", lec: 2, pg: [68], tp: "PCA selection", sb: "Elbow reading", df: "medium", ty: "mcq", so: "lecture",
    pr: "A scree plot's explained variance drops sharply from PC1 to PC3, then flattens. What does the elbow heuristic suggest?",
    op: ["Keep all components after the elbow", "Keep the components before the flattening — later components add little information", "The elbow point is the number of features", "Scree plots cannot guide selection"],
    an: 1, at: "Components before the elbow capture most of the variance; after it, gains are marginal.",
    sl: "The elbow is where the curve's slope changes markedly; it is a heuristic, combine with the 90% rule.",
    ex: "For standardized Iris, the elbow and the 90% rule both point to 2 components.",
    mt: "Keeping components after the elbow for extra safety." });

  Q({ id: "L2-CC-19", lec: 2, pg: [70], tp: "PCA selection", sb: "90% rule application", df: "medium", ty: "calc", so: "lecture",
    pr: "Cumulative EVRs are 55%, 75%, 88%, 96%, 100%. How many components does the 90% rule keep?",
    at: "4 components — the first time cumulative variance reaches ≥ 90% is at 96%.",
    sl: "1: 55 < 90; 2: 75 < 90; 3: 88 < 90; 4: 96 ≥ 90 ⇒ keep 4.",
    ex: "The rule keeps the smallest k satisfying the threshold; it is a heuristic, not a law.",
    mt: "Stopping at 3 because 88% is 'almost' 90%." });

  Q({ id: "L3-CC-14", lec: 3, pg: [23], tp: "Distributions", sb: "Empirical rule computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Heights are approximately N(µ = 170 cm, σ = 8 cm). Using 68-95-99.7, about what percentage lies between 154 and 186 cm?",
    at: "154 and 186 are µ ± 2σ, so about 95%.",
    sl: "154 = 170 − 2(8); 186 = 170 + 2(8). Two standard deviations ⇒ ≈ 95%.",
    ex: "One σ would cover ≈ 68% (162–178).",
    mt: "Using 68% (one σ) instead of 95% (two σ)." });

  Q({ id: "L3-CC-15", lec: 3, pg: [40], tp: "Confidence intervals", sb: "Coverage meaning", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which interpretation of '95% confidence interval' is correct?",
    op: ["95% probability the true mean lies in this computed interval", "95% of samples contain 95% of the data", "If we repeated sampling and rebuilt the interval each time, about 95% of those intervals would contain the fixed true mean", "The interval contains 95% of future observations"],
    an: 2, at: "Coverage is a property of the procedure over repeated samples; the parameter is fixed, the interval varies.",
    sl: "Once computed, a specific interval either covers µ or it doesn't — there is no probability left for that single interval.",
    ex: "Simulations of 20 intervals typically show ~19 covering µ.",
    mt: "Assigning 95% probability to a fixed parameter." });

  Q({ id: "L3-CC-16", lec: 3, pg: [22], tp: "Distributions", sb: "PMF vs PDF", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about PMF and PDF is correct?",
    op: ["PMF values can exceed 1", "A PDF gives probabilities of exact points", "For a discrete variable, PMF gives P(X = x); for a continuous variable, probabilities are areas under the PDF", "PMF applies to continuous variables"],
    an: 2, at: "Discrete → point probabilities via PMF; continuous → interval probabilities via PDF areas (exact-point probability is 0).",
    sl: "Match the description of the random variable to the right function.",
    ex: "PMF probabilities sum to 1; PDF integrates to 1 over the support.",
    mt: "Reading PDF heights as point probabilities." });

  Q({ id: "L4-CC-13", lec: 4, pg: [39], tp: "Missingness", sb: "Scenario classification", df: "hard", ty: "mcq", so: "lecture",
    pr: "A sensor fails and loses readings at random times, unrelated to the values themselves. Which mechanism is this?",
    op: ["MCAR — missingness unrelated to observed or unobserved values", "MAR", "MNAR", "Not missing data"],
    an: 0, at: "Random hardware failures unconnected to any variable's value are the classic MCAR case.",
    sl: "MCAR: unrelated to everything; MAR: explained by observed variables; MNAR: depends on the hidden value.",
    ex: "Under MCAR, complete-case analysis is broadly unbiased (though inefficient).",
    mt: "Confusing random device failure with MNAR." });

  Q({ id: "L4-CC-14", lec: 4, pg: [54], tp: "Encoding", sb: "Column count", df: "medium", ty: "calc", so: "lecture",
    pr: "A nominal feature has 5 categories and is one-hot encoded without dropping any level. How many new columns result?",
    at: "5 binary columns (one indicator per category).",
    sl: "One-hot creates k columns for k levels; dropping the first reduces it to k−1 and avoids perfect collinearity with the intercept.",
    ex: "High-cardinality features explode the feature count — consider grouping or target encoding.",
    mt: "Answering 4 without noting the drop-first variant." });

  Q({ id: "L4-CC-15", lec: 4, pg: [59], tp: "Pipelines", sb: "Leakage example", df: "hard", ty: "mcq", so: "lecture",
    pr: "A student standardises the full dataset, then splits into train/test and reports test accuracy. What is wrong?",
    op: ["Nothing", "Test statistics leaked into training through the scaler — evaluation is optimistically biased; fit on train only", "Standardisation should never be used", "The split should come after training"],
    an: 1, at: "Preprocessing fitted on all data leaks information; fit scaler/imputers on the training split and transform the test split with those training statistics.",
    sl: "Correct order: split → fit preprocessors on train → transform both → fit model → evaluate.",
    ex: "sklearn Pipelines/ColumnTransformer enforce this pattern.",
    mt: "Believing preprocessing order is cosmetic." });

  Q({ id: "L5-CC-13", lec: 5, pg: [23], tp: "Multicollinearity", sb: "VIF interpretation", df: "medium", ty: "mcq", so: "lecture",
    pr: "A predictor has VIF = 12. What does this indicate and what are the options?",
    op: ["No overlap; keep as is", "Serious multicollinearity — consider dropping/combining the predictor or using Ridge/Lasso", "The predictor is perfectly valid", "VIF measures prediction error"],
    an: 1, at: "VIF > 10 signals serious inflation of the coefficient's variance: investigate, drop/combine, or regularise.",
    sl: "Rules of thumb: 1 none; 1–5 moderate; >5 investigate; >10 act.",
    ex: "VIF measures how much a coefficient's variance is inflated by linear dependence on other predictors.",
    mt: "Interpreting VIF as an accuracy metric." });

  Q({ id: "L5-CC-14", lec: 5, pg: [30], tp: "Diagnostics", sb: "Pattern diagnosis", df: "hard", ty: "mcq", so: "lecture",
    pr: "A residual plot shows the spread of residuals increasing with predicted values. What is diagnosed?",
    op: ["Non-linearity", "Heteroscedasticity — non-constant error variance", "A missing categorical variable", "Perfect fit"],
    an: 1, at: "The funnel/cone pattern = heteroscedasticity; remedies include transforming the target or using variance-stabilising methods.",
    sl: "Random scatter = good; funnel = heteroscedasticity; curve = non-linearity; clusters = missing categorical variable.",
    ex: "Residual plots diagnose what summary metrics cannot.",
    mt: "Calling the funnel a non-linearity pattern." });

  Q({ id: "L6-CC-13", lec: 6, pg: [38], tp: "ROC", sb: "TPR formula", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which expression equals TPR (true positive rate)?",
    op: ["TP/(TP+FP)", "TP/(TP+FN)", "FP/(FP+TN)", "TN/(TN+FP)"],
    an: 1, at: "TPR = TP/(TP+FN) — the fraction of actual positives flagged; identical to recall/sensitivity.",
    sl: "FPR = FP/(FP+TN) = 1 − specificity; ROC plots TPR vs FPR.",
    ex: "The ROC diagonal corresponds to TPR = FPR (random ranking).",
    mt: "Using the precision denominator for TPR." });

  Q({ id: "L6-CC-14", lec: 6, pg: [39], tp: "ROC", sb: "Curve landmarks", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which ROC coordinate represents a perfect classifier?",
    op: ["(FPR = 0, TPR = 1) — catches every positive with no false alarms", "(1, 1)", "(0, 0)", "(1, 0)"],
    an: 0, at: "Top-left corner (0, 1) = perfect separation. (1,1) flags everyone; the diagonal is chance.",
    sl: "Better classifiers bend toward the top-left.",
    ex: "AUC is the area under this curve; 1.0 corresponds to reaching (0,1).",
    mt: "Choosing the top-right corner." });

  /* ---------------- Final concept drill batch (self-contained, exam-style) ---------------- */
  Q({ id: "L1-CC-13", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Variance computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Compute the sample variance of the values 2, 4, 6, 8 (use n − 1).",
    at: "Mean = 5; squared deviations = 9, 1, 1, 9 → sum 20; s² = 20/3 ≈ 6.67.",
    sl: "s² = Σ(xᵢ−x̄)²/(n−1) = 20/3 ≈ 6.67 (sample variance). Standard deviation = √6.67 ≈ 2.58.",
    ex: "Dividing by n would give 5 — Bessel's correction increases the estimate to remain unbiased.",
    mt: "Dividing by n instead of n−1 for a sample." });

  Q({ id: "L1-CC-14", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Range computation", df: "easy", ty: "calc", so: "lecture",
    pr: "For the values 12, 7, 19, 4, 15, compute the range and explain its weakness as a spread measure.",
    at: "Range = 19 − 4 = 15. Weakness: it depends only on the two most extreme values, so a single outlier can dominate it.",
    sl: "Range = max − min = 15.",
    ex: "IQR (Q3 − Q1) is the robust alternative.",
    mt: "Reporting the difference of the first two values instead of max − min." });

  Q({ id: "L1-CC-15", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Mode meaning", df: "easy", ty: "mcq", so: "lecture",
    pr: "For the categorical values [red, blue, blue, green], which summary statistic is meaningful and what is its value?",
    op: ["Mean, = blue", "Mode, = blue", "Median, = blue", "Standard deviation, = 1"],
    an: 1, at: "The mode (most frequent category) — 'blue'. Mean/median require numeric (or at least ordered) data.",
    sl: "Mode = most frequent value; the only summary that works for nominal data.",
    ex: "Ordinal data additionally supports the median; numeric data supports mean/SD.",
    mt: "Computing a mean over category labels." });

  Q({ id: "L1-CC-16", lec: 1, pg: [17], tp: "Data types", sb: "Type classification", df: "medium", ty: "mcq", so: "lecture",
    pr: "Classify: (i) shirt size S/M/L; (ii) phone brand; (iii) temperature in °C.",
    op: ["(i) ordinal, (ii) nominal, (iii) numerical", "(i) nominal, (ii) ordinal, (iii) numerical", "(i) numerical, (ii) nominal, (iii) ordinal", "All categorical"],
    an: 0, at: "S/M/L has order (ordinal); brands are unordered categories (nominal); temperature is a measurement (numerical).",
    sl: "Ordinal = ordered categories; nominal = unordered; numerical = measurable quantities.",
    ex: "The type dictates encodings (ordinal encoding vs one-hot) and valid statistics.",
    mt: "Treating ordered sizes as nominal or brands as ordinal." });

  Q({ id: "L2-CC-20", lec: 2, pg: [18], tp: "Distances", sb: "Cosine of orthogonal vectors", df: "medium", ty: "calc", so: "lecture",
    pr: "Compute cos(a, b) for a = (2, 0, 0) and b = (0, 3, 4).",
    at: "Dot product = 0 → cos = 0 (perpendicular).",
    sl: "a·b = 0, so the vectors are orthogonal regardless of their norms.",
    ex: "Orthogonal count vectors share no vocabulary — cosine 0.",
    mt: "Computing norms unnecessarily; the dot product already settles it." });

  Q({ id: "L2-CC-21", lec: 2, pg: [28], tp: "Covariance", sb: "Covariance computation", df: "hard", ty: "calc", so: "lecture",
    pr: "Data pairs: (1, 2), (2, 4), (3, 5). Compute the sample covariance and interpret the sign.",
    at: "x̄ = 2, ȳ = 11/3. Deviations: (−1, −5/3), (0, 1/3), (1, 4/3). Products: 5/3, 0, 4/3 → sum 3. Cov = 3/2 = 1.5 > 0.",
    sl: "Cov = Σ(xᵢ−x̄)(yᵢ−ȳ)/(n−1) = 3/(3−1) = 1.5. Positive covariance = same-side deviations dominate.",
    ex: "The value 1.5 is in squared units — interpret the SIGN; correlation standardises.",
    mt: "Dividing by n or losing the sign." });

  Q({ id: "L2-CC-22", lec: 2, pg: [46], tp: "Eigen", sb: "Eigenvector check", df: "hard", ty: "calc", so: "lecture",
    pr: "For the matrix A = [[2, 1], [1, 2]], check whether v = (1, 1) is an eigenvector, and give the eigenvalue.",
    at: "Av = (3, 3) = 3v → v is an eigenvector with eigenvalue 3.",
    sl: "Multiply: [2·1 + 1·1, 1·1 + 2·1] = (3, 3) = 3(1, 1).",
    ex: "(1, −1) is the other eigenvector with eigenvalue 1.",
    mt: "Concluding 'eigenvector' without verifying Av is a scalar multiple of v." });

  Q({ id: "L2-CC-23", lec: 2, pg: [56], tp: "PCA algorithm", sb: "Effect of centering", df: "hard", ty: "mcq", so: "lecture",
    pr: "A student runs PCA WITHOUT centring the data. What goes wrong?",
    op: ["Nothing — centring is optional", "The mean's location leaks into the covariance and the principal directions can change; PCA must be translation-invariant", "Eigenvalues turn negative", "The data becomes singular"],
    an: 1, at: "Without centring the uncentred product includes the mean's outer product; the computed 'directions' mix location into variation.",
    sl: "Covariance is defined around the mean — centring separates location from shape.",
    ex: "Centring = translation invariance: PCA directions should not depend on where the cloud sits.",
    mt: "Believing centring only affects the sign of scores." });

  Q({ id: "L2-CC-24", lec: 2, pg: [70], tp: "PCA selection", sb: "90% rule with given λ", df: "medium", ty: "calc", so: "lecture",
    pr: "Eigenvalues are λ = (5, 2, 1, 0.5, 0.5). How many components does the 90% rule keep?",
    at: "Total = 9. Cumulative: 5/9 ≈ 55.6%, 7/9 ≈ 77.8%, 8/9 ≈ 88.9%, 8.5/9 ≈ 94.4% ≥ 90% ⇒ keep 4.",
    sl: "First crossing of 90% is at component 4 (94.4%).",
    ex: "The rule is a heuristic — task validation can justify fewer or more.",
    mt: "Stopping at 3 (88.9% is below the threshold)." });

  Q({ id: "L2-CC-25", lec: 2, pg: [14], tp: "Covariance/correlation", sb: "Correlation from covariance", df: "hard", ty: "calc", so: "lecture",
    pr: "Given Cov(X, Y) = 6, sₓ = 3, sᵧ = 4, compute the correlation.",
    at: "r = Cov/(sₓ·sᵧ) = 6/(3·4) = 0.5.",
    sl: "r = 6/12 = 0.5 — a moderate positive linear association, dimensionless.",
    ex: "Dividing by the standard deviations removes the units of the covariance.",
    mt: "Forgetting to divide by BOTH standard deviations." });

  Q({ id: "L3-CC-17", lec: 3, pg: [10], tp: "Probability rules", sb: "Combined complement and intersection", df: "medium", ty: "calc", so: "lecture",
    pr: "P(A) = 0.6, P(B) = 0.5, P(A∩B) = 0.3. Compute P(neither A nor B).",
    at: "P(A∪B) = 0.6 + 0.5 − 0.3 = 0.8 → P(neither) = 1 − 0.8 = 0.2.",
    sl: "Addition rule first, then the complement.",
    ex: "'Neither' = complement of the union.",
    mt: "Using 1 − P(A∩B) directly." });

  Q({ id: "L3-CC-18", lec: 3, pg: [32], tp: "Bayes", sb: "Sensitivity vs PPV", df: "hard", ty: "calc", so: "lecture",
    pr: "Of 1,000 people, 50 have a condition. The test detects 45 of them and gives 95 false positives. Compute sensitivity and the probability of disease given a positive test.",
    at: "Sensitivity = 45/50 = 0.90. P(D|+) = 45/(45+95) = 45/140 ≈ 0.321 (≈32%).",
    sl: "Sensitivity conditions on disease (45/50); PPV conditions on the test result (45/140).",
    ex: "With a low base rate (5%), most positives are false positives despite 90% sensitivity.",
    mt: "Reporting sensitivity (0.90) as the answer to P(D|+)." });

  Q({ id: "L3-CC-19", lec: 3, pg: [24], tp: "Distributions", sb: "Binomial zero count", df: "medium", ty: "calc", so: "lecture",
    pr: "X ~ Binomial(n = 5, p = 0.2). Compute P(X = 0).",
    at: "P(X=0) = (0.8)⁵ = 0.32768 ≈ 0.328.",
    sl: "No successes in all five independent trials: each failure has probability 0.8.",
    ex: "E[X] = np = 1; the distribution is skewed right here (p < 0.5).",
    mt: "Using p⁵ instead of (1−p)⁵." });

  Q({ id: "L3-CC-20", lec: 3, pg: [25], tp: "Distributions", sb: "Poisson zero count", df: "medium", ty: "calc", so: "lecture",
    pr: "X ~ Poisson(λ = 2) events per hour. Compute P(X = 0) in an hour.",
    at: "P(X=0) = e⁻² ≈ 0.135.",
    sl: "PMF at k = 0: λ⁰e⁻λ/0! = e⁻².",
    ex: "Mean = variance = 2 for this distribution.",
    mt: "Computing 2e⁻² (forgetting k = 0 term)." });

  Q({ id: "L3-CC-21", lec: 3, pg: [23], tp: "Distributions", sb: "Empirical rule reverse", df: "hard", ty: "calc", so: "lecture",
    pr: "Scores are approximately normal with mean 100. About 95% of scores lie between 60 and 140. Estimate the standard deviation.",
    at: "The interval is mean ± 2σ → 2σ = 40 → σ = 20.",
    sl: "60 and 140 are 40 points from the mean; that span is 2σ under the 68-95-99.7 rule.",
    ex: "68% would correspond to ±1σ = 80–120.",
    mt: "Using 3σ (the 99.7% row)." });

  Q({ id: "L3-CC-22", lec: 3, pg: [38], tp: "Confidence intervals", sb: "CI computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Sample mean 50, sample std 10, n = 25, z* = 1.96. Compute the 95% CI.",
    at: "SE = 10/√25 = 2 → CI = 50 ± 1.96×2 = 50 ± 3.92 = [46.08, 53.92].",
    sl: "CI = x̄ ± z*·s/√n.",
    ex: "Increasing n would shrink the standard error and narrow the interval.",
    mt: "Using s directly (10) instead of the standard error (2)." });

  Q({ id: "L4-CC-16", lec: 4, pg: [39], tp: "Missingness", sb: "Scenario classification 2", df: "hard", ty: "mcq", so: "lecture",
    pr: "A survey's income question is skipped mostly by high earners; income is not otherwise recorded. Which mechanism applies?",
    op: ["MCAR", "MAR", "MNAR — missingness depends on the unobserved income itself", "Not missing data"],
    an: 2, at: "The probability of missingness depends on the value that is missing (income) → MNAR.",
    sl: "MCAR: unrelated to everything; MAR: explained by observed variables; MNAR: tied to the hidden value.",
    ex: "MNAR has no simple fix — model the missingness or acknowledge the limitation.",
    mt: "Calling it MAR because 'income is usually observed elsewhere'." });

  Q({ id: "L4-CC-17", lec: 4, pg: [29], tp: "Quality assessment", sb: "Which check catches it", df: "medium", ty: "mcq", so: "lecture",
    pr: "A column has 40% of values stored as the blank string ' '. Which check catches this, and what follow-up is needed?",
    op: ["Structural check via df.shape", "Completeness — but .isnull() will not see blank strings, so sentinel-aware scanning (.value_counts, domain ranges) is required", "Distributional check", "No check catches strings"],
    an: 1, at: "Completeness covers missingness, but sentinel values (blank strings, 'N/A', −999) hide from .isnull(); scan value counts/ranges.",
    sl: "Missing ≠ NaN: audit sentinels explicitly.",
    ex: "The dtype check also fires: a numeric column stored as object signals an issue.",
    mt: "Trusting .isnull().mean() as the missingness audit." });

  Q({ id: "L4-CC-18", lec: 4, pg: [54], tp: "Encoding", sb: "One-hot dimensionality", df: "medium", ty: "calc", so: "lecture",
    pr: "Two nominal features have 4 and 3 categories. One-hot encoding with drop='first' produces how many binary columns in total?",
    at: "(4−1) + (3−1) = 6 columns.",
    sl: "k categories → k binary columns (or k−1 if the first level is dropped to avoid collinearity with an intercept).",
    ex: "Without dropping: 4 + 3 = 7 columns.",
    mt: "Answering 7 when drop='first' is specified." });

  Q({ id: "L4-CC-19", lec: 4, pg: [56], tp: "Scaling", sb: "Effect on distances", df: "hard", ty: "mcq", so: "lecture",
    pr: "Feature A ranges 0–1000 and feature B ranges 0–1. Why does KNN perform poorly without scaling?",
    op: ["KNN ignores feature scales", "Euclidean distances are dominated by A's larger range, so B contributes almost nothing to 'nearest'", "Scaling changes the labels", "B has too few distinct values"],
    an: 1, at: "Distance-based methods sum squared coordinate differences — large-range features dominate the metric.",
    sl: "Standardise both features so each contributes comparably to distance.",
    ex: "Tree-based models are invariant to monotone rescaling — no scaling needed there.",
    mt: "Assuming KNN weighs all features equally regardless of scale." });

  Q({ id: "L4-CC-20", lec: 4, pg: [46], tp: "Cleaning", sb: "Type coercion", df: "medium", ty: "mcq", so: "lecture",
    pr: "A price column is stored as strings, including some 'N/A' entries. Which pandas call converts it while handling the failures?",
    op: ["df['price'].astype(float)", "pd.to_numeric(df['price'], errors='coerce')", "df['price'].str.lower()", "df.dropna()"],
    an: 1, at: "pd.to_numeric(errors='coerce') converts parseable values and turns the rest into NaN for a later missingness decision.",
    sl: "astype(float) would raise on 'N/A'; coerce turns failures into NaN.",
    ex: "Converting types is a validity fix; the resulting NaNs re-enter the completeness workflow.",
    mt: "Using astype(float) and crashing on non-numeric strings." });

  Q({ id: "L5-CC-15", lec: 5, pg: [8], tp: "Regression", sb: "Intercept meaning", df: "medium", ty: "mcq", so: "lecture",
    pr: "A regression gives ŷ = 3 + 2.5x (x = training hours, y = kg). What does the intercept 3 represent?",
    op: ["The typical value of x", "The predicted y when x = 0 (may be outside the observed data range and not physically meaningful)", "The slope", "The correlation"],
    an: 1, at: "β₀ = predicted value at x = 0; interpret cautiously if x = 0 is far outside the observed range.",
    sl: "Plugging x = 0 gives ŷ = 3.",
    ex: "Extrapolating beyond the data range is unreliable.",
    mt: "Interpreting the intercept as an average outcome." });

  Q({ id: "L5-CC-16", lec: 5, pg: [8], tp: "Regression", sb: "Prediction computation", df: "easy", ty: "calc", so: "lecture",
    pr: "For the fitted model ŷ = 3 + 2.5x, predict y when x = 6, and compute the residual if the observed value is 20.",
    at: "ŷ = 3 + 15 = 18. Residual = 20 − 18 = +2 (under-prediction).",
    sl: "Substitute x = 6; residual e = y − ŷ = +2.",
    ex: "Positive residuals mean the model predicted too low.",
    mt: "Computing ŷ − y (−2) instead of y − ŷ." });

  Q({ id: "L5-CC-17", lec: 5, pg: [27], tp: "Metrics", sb: "R² computation 2", df: "medium", ty: "calc", so: "lecture",
    pr: "Predictions are (3, 5, 7) for actual values (4, 4, 8). Compute SSres, SStot, and R².",
    at: "Residuals: −1, +1, −1 → SSres = 3. Mean actual = 16/3; SStot = (4−16/3)² + (4−16/3)² + (8−16/3)² = (16/9)+(16/9)+(64/9) = 96/9 ≈ 10.67. R² = 1 − 3/10.67 ≈ 0.719.",
    sl: "SSres = 1+1+1 = 3; SStot ≈ 10.67; R² ≈ 0.719.",
    ex: "R² is unitless; RMSE = √(SSres/3) ≈ 1.0 in the target's units complements it.",
    mt: "Forgetting to recompute SStot around the actual mean." });

  Q({ id: "L5-CC-18", lec: 5, pg: [23], tp: "Multicollinearity", sb: "VIF = 1 meaning", df: "medium", ty: "mcq", so: "lecture",
    pr: "A predictor has VIF exactly 1. What does that mean?",
    op: ["It is perfectly correlated with the others", "Its coefficient variance is not inflated by the other predictors — no linear dependence detected", "It should be removed", "Its p-value is 1"],
    an: 1, at: "VIF = 1 means the predictor is uncorrelated (linearly) with the other predictors — zero inflation of coefficient variance.",
    sl: "VIF = 1/(1 − R²ⱼ) where R²ⱼ regresses predictor j on the others; VIF=1 ⇔ R²ⱼ = 0.",
    ex: "Investigate VIF > 5; act above 10.",
    mt: "Reading VIF = 1 as a correlation of 1 with another feature." });

  Q({ id: "L5-CC-19", lec: 5, pg: [50], tp: "Ridge vs Lasso", sb: "Selection scenario", df: "hard", ty: "mcq", so: "lecture",
    pr: "A dataset has 500 features; you believe only a small subset matters and want the fitted model to drop the rest. Which penalty matches this belief?",
    op: ["Ridge (L2) — shrink but keep all features", "Lasso (L1) — can set coefficients exactly to zero, performing feature selection", "Either is equivalent", "Neither performs selection"],
    an: 1, at: "Lasso's L1 penalty zeroes out coefficients; Ridge only shrinks them. For a sparse true model, Lasso matches the prior belief.",
    sl: "Lasso geometry (diamond corners) produces exact zeros.",
    ex: "With highly correlated features Lasso picks arbitrarily — Ridge/Elastic Net are more stable there.",
    mt: "Choosing Ridge when explicit sparsity is the goal." });

  Q({ id: "L6-CC-15", lec: 6, pg: [23], tp: "Thresholds", sb: "Threshold to label", df: "medium", ty: "calc", so: "lecture",
    pr: "A model predicts P(churn) = 0.62 for a customer and the threshold is 0.55. What label is assigned, and what if the threshold were 0.70?",
    at: "At θ = 0.55: predicted churn (0.62 ≥ 0.55). At θ = 0.70: not churn (0.62 < 0.70).",
    sl: "The threshold converts probabilities into labels: predict positive iff P ≥ θ.",
    ex: "Changing θ changes both precision and recall — the choice is a cost decision.",
    mt: "Comparing against 0.5 out of habit." });

  Q({ id: "L6-CC-16", lec: 6, pg: [24], tp: "Precision", sb: "Computation 2", df: "medium", ty: "calc", so: "lecture",
    pr: "A model flags 250 cases; 200 of them are true positives. Compute precision.",
    at: "Precision = 200/250 = 0.8.",
    sl: "Flagged (predicted positive) = 250 including 50 false positives → 200/250 = 0.8.",
    ex: "Precision measures the reliability of positive flags.",
    mt: "Dividing by the number of actual positives instead." });

  Q({ id: "L6-CC-17", lec: 6, pg: [26], tp: "Confusion matrix", sb: "Counts from metrics", df: "hard", ty: "calc", so: "lecture",
    pr: "There are 800 actual positives. A model achieves recall = 0.25. How many positives did it miss?",
    at: "TP = 0.25 × 800 = 200 caught → FN = 600 missed.",
    sl: "Recall = TP/(TP+FN); with 800 actual positives, TP = 200 and FN = 600.",
    ex: "Recall quantifies the missed-positive problem directly.",
    mt: "Reporting 600 as caught instead of missed." });

  Q({ id: "L6-CC-18", lec: 6, pg: [38], tp: "ROC", sb: "Specificity computation", df: "medium", ty: "calc", so: "lecture",
    pr: "Of 2,000 non-churners, 100 are incorrectly flagged as churners. Compute the false positive rate and specificity.",
    at: "FPR = 100/2,000 = 0.05. Specificity = 1 − FPR = 0.95.",
    sl: "FPR = FP/(FP+TN) = 100/2,000; specificity = TN rate = 0.95.",
    ex: "ROC plots TPR against FPR across thresholds.",
    mt: "Using actual positives in the FPR denominator." });

  Q({ id: "L6-CC-19", lec: 6, pg: [40], tp: "AUC", sb: "AUC = 0.5 meaning", df: "medium", ty: "mcq", so: "lecture",
    pr: "A model has AUC = 0.5. What does this say about its ranking ability?",
    op: ["Perfect ranking", "Chance-level ranking — positives and negatives are ordered no better than randomly (equivalently, TPR = FPR across thresholds)", "The model always predicts positive", "AUC cannot equal 0.5"],
    an: 1, at: "AUC = 0.5 corresponds to the ROC diagonal: random ranking (P(s⁺ > s⁻) = 0.5 with ties/randomness).",
    sl: "AUC = P(s⁺ > s⁻) + ½P(s⁺ = s⁻); 0.5 = no discrimination.",
    ex: "AUC < 0.5 indicates systematically reversed ranking.",
    mt: "Reading 0.5 as 'half correct classification'." });

  Q({ id: "L6-CC-20", lec: 6, pg: [29], tp: "Thresholds", sb: "Cost scenario", df: "hard", ty: "mcq", so: "lecture",
    pr: "A retention campaign costs $50 per contacted customer; a missed churner loses $500 of revenue. Which threshold policy fits this cost structure?",
    op: ["High threshold — contact only very confident churners", "Lower threshold — contact more customers, accepting wasted contacts to catch more churners, because misses cost 10× more than wasted contacts", "Ignore costs and keep 0.5", "Threshold choice cannot use costs"],
    an: 1, at: "FN ($500) ≫ FP ($50): favour recall by lowering θ. The optimal point maximises the explicit utility U = c_TP·TP + c_FP·FP + c_FN·FN.",
    sl: "Compare error costs: when misses are much costlier than false alarms, flag more aggressively.",
    ex: "Specifying the costs is a business judgment the model cannot supply.",
    mt: "Defaulting to 0.5 when the costs clearly favour a different threshold." });


  /* ---------------- Final drills batch 3 ---------------- */
  Q({ id: "L1-CC-17", lec: 1, pg: [41], tp: "Descriptive stats", sb: "Median computation", df: "easy", ty: "calc", so: "lecture",
    pr: "Compute the median of 3, 7, 9, 12, 20 and of 4, 8, 10, 16.",
    at: "First set (n=5, odd): median = 9. Second set (n=4, even): median = (8+10)/2 = 9.",
    sl: "Sort; middle value if odd; average of the two middle values if even.",
    ex: "The median is robust — the outlier 20 does not move it much.",
    mt: "Forgetting to average the two middle values for even n." });

  Q({ id: "L1-CC-18", lec: 1, pg: [16], tp: "Visualization", sb: "Five-number reading", df: "medium", ty: "calc", so: "lecture",
    pr: "A box plot shows min 2, Q1 10, median 15, Q3 20, max 40. Compute the IQR and state whether 40 is flagged by the 1.5×IQR rule.",
    at: "IQR = 20 − 10 = 10. Upper fence = 20 + 15 = 35. Max = 40 > 35 → 40 is flagged as an outlier candidate.",
    sl: "IQR = Q3 − Q1 = 10; fence = Q3 + 1.5·IQR = 35.",
    ex: "Flagged ≠ error — investigate with domain knowledge.",
    mt: "Using the max value instead of Q3 in the fence." });

  Q({ id: "L1-CC-19", lec: 1, pg: [33], tp: "Data cleaning", sb: "Issue classification", df: "medium", ty: "mcq", so: "lecture",
    pr: "Classify each issue: (i) 'Female'/'female'/'F' in one column; (ii) a row duplicated exactly; (iii) a salary of −5000.",
    op: ["(i) inconsistent categories, (ii) duplicate, (iii) invalid value", "(i) invalid value, (ii) missing, (iii) duplicate", "(i) duplicate, (ii) inconsistent categories, (iii) outlier only", "All are outliers"],
    an: 0, at: "Category spelling variants = inconsistent format; exact repeated row = duplicate; negative salary = invalid value (out of valid range).",
    sl: "The quality taxonomy: missing, type, duplicates, inconsistent formats, outliers, invalid values.",
    ex: "Each issue type has its own cleaning strategy.",
    mt: "Calling negative salary merely an outlier." });

  Q({ id: "L2-CC-26", lec: 2, pg: [18], tp: "Distances", sb: "Dot product and cosine", df: "medium", ty: "calc", so: "lecture",
    pr: "u = (1, 2, 2), v = (3, 0, 4). Compute the dot product and cos(u, v).",
    at: "u·v = 3 + 0 + 8 = 11. ‖u‖ = 3, ‖v‖ = 5 → cos = 11/15 ≈ 0.733.",
    sl: "Dot product 11; norms 3 and 5; cosine 11/15.",
    ex: "cos ≈ 0.73 → the vectors point in a fairly similar direction (about 43°).",
    mt: "Forgetting the norms in the denominator." });

  Q({ id: "L2-CC-27", lec: 2, pg: [31], tp: "Covariance matrix", sb: "Dimensions given n, p", df: "easy", ty: "calc", so: "lecture",
    pr: "A dataset has n = 500 observations and p = 12 features. What are the dimensions of the data matrix and the covariance matrix?",
    at: "Data matrix: 500 × 12. Covariance matrix: 12 × 12.",
    sl: "Covariance is computed between features — one row/column per feature (p × p).",
    ex: "The number of observations never appears in the covariance dimensions.",
    mt: "Answering 500 × 500." });

  Q({ id: "L2-CC-28", lec: 2, pg: [59], tp: "PCA algorithm", sb: "Projection shapes", df: "hard", ty: "calc", so: "lecture",
    pr: "X_centered is 200 × 8 and you keep k = 3 components. What are the shapes of W_k and the score matrix Z?",
    at: "W_k: 8 × 3 (top-3 eigenvectors as columns). Z = X_centered·W_k: 200 × 3.",
    sl: "n×p times p×k gives n×k — the reduced representation.",
    ex: "Z's columns are PC1–PC3 scores for every observation.",
    mt: "Multiplying in the wrong order (200×8 · 3×8 is undefined)." });

  Q({ id: "L2-CC-29", lec: 2, pg: [50], tp: "PCA", sb: "Eigenvalue as variance", df: "hard", ty: "mcq", so: "lecture",
    pr: "The largest eigenvalue of a covariance matrix is 4. What is the variance of the data projected onto that eigenvector (scores' variance)?",
    op: ["1", "2", "4", "16"],
    an: 2, at: "Variance of the projection onto an eigenvector equals the eigenvalue → 4.",
    sl: "Var(Xv) = λ for a unit eigenvector v.",
    ex: "This is why EVR divides eigenvalues by their sum.",
    mt: "Taking the square root (2) or squaring (16)." });

  Q({ id: "L3-CC-23", lec: 3, pg: [10], tp: "Probability rules", sb: "Dependent events", df: "medium", ty: "calc", so: "lecture",
    pr: "P(A) = 0.5 and P(B | A) = 0.4. Compute P(A ∩ B).",
    at: "P(A∩B) = 0.5 × 0.4 = 0.2.",
    sl: "Multiplication rule for dependent events: P(A)P(B|A).",
    ex: "If A and B were independent, P(B|A) = P(B) would be used instead.",
    mt: "Adding or using P(B) without the conditional." });

  Q({ id: "L3-CC-24", lec: 3, pg: [6], tp: "Random variables", sb: "Expected value", df: "medium", ty: "calc", so: "lecture",
    pr: "A random variable X takes values 0, 1, 2 with probabilities 0.5, 0.3, 0.2. Compute E[X].",
    at: "E[X] = 0(0.5) + 1(0.3) + 2(0.2) = 0.7.",
    sl: "Expected value = probability-weighted average of the outcomes.",
    ex: "E[X] need not be an achievable value (0.7 is not in the support).",
    mt: "Averaging outcomes without weights ((0+1+2)/3)." });

  Q({ id: "L3-CC-25", lec: 3, pg: [46], tp: "Hypothesis testing", sb: "Decision rule", df: "medium", ty: "mcq", so: "lecture",
    pr: "A test yields p = 0.04 with α = 0.05. What is the decision, and what does it NOT mean?",
    op: ["Reject H₀; it does NOT mean H₀ has a 4% chance of being true", "Fail to reject H₀; the effect is proven absent", "Accept H₁ with 96% probability", "Increase α until p < α"],
    an: 0, at: "p < α → reject H₀. But p is P(data | H₀), not P(H₀) — and significance is not practical importance.",
    sl: "Decision: reject when p < α. Interpretation limit: p says nothing directly about the probability of H₀.",
    ex: "Also check the effect size before acting.",
    mt: "Reading p as the probability the null is true." });

  Q({ id: "L3-CC-26", lec: 3, pg: [25], tp: "Distributions", sb: "Poisson probability", df: "hard", ty: "calc", so: "lecture",
    pr: "X ~ Poisson(λ = 4). Compute P(X = 1).",
    at: "P(X=1) = 4·e⁻⁴/1! = 4e⁻⁴ ≈ 0.0733.",
    sl: "PMF: λᵏe⁻λ/k! with k = 1.",
    ex: "Mean = variance = 4; the distribution is right-skewed but less so than for small λ.",
    mt: "Forgetting the k! or the λᵏ factor." });

  Q({ id: "L4-CC-21", lec: 4, pg: [31], tp: "Quality assessment", sb: "Missing proportion", df: "medium", ty: "calc", so: "lecture",
    pr: "A column has 240 missing values out of 800 rows. Compute the missing proportion and place it in the rules-of-thumb band.",
    at: "30% missing — at the boundary where dropping the column becomes worth considering (5–30% needs careful strategy; >30% consider dropping).",
    sl: "240/800 = 0.30. At exactly 30%, weigh mechanism and importance before acting.",
    ex: "The percentage guides strategy, but the mechanism decides what is valid.",
    mt: "Placing 30% in the '<5% manageable' band." });

  Q({ id: "L4-CC-22", lec: 4, pg: [54], tp: "Encoding", sb: "Ordinal application", df: "medium", ty: "mcq", so: "lecture",
    pr: "Education level (high school < bachelor < master < PhD) is used in a linear model. Which encoding fits best?",
    op: ["One-hot with 4 columns", "Ordinal integers 1–4, respecting the natural order", "Random integers", "Drop the feature"],
    an: 1, at: "The categories are ordered, so ordinal encoding respects the structure; one-hot would discard the ordering information.",
    sl: "Ordinal → ordered integers; nominal → one-hot.",
    ex: "Misusing one-hot on ordered levels wastes information the model could use.",
    mt: "One-hot encoding ordered categories by default." });

  Q({ id: "L4-CC-23", lec: 4, pg: [29], tp: "Quality assessment", sb: "Finding classification", df: "medium", ty: "mcq", so: "lecture",
    pr: "A validation audit finds ages of 200 and −5 in an age column. Which check category does this fall under?",
    op: ["Structural", "Completeness", "Validity — out-of-range values relative to domain-plausible ranges", "Distributional"],
    an: 2, at: "Impossible values indicate validity failures (out-of-range relative to domain knowledge).",
    sl: "Validity covers ranges, type mismatches, duplicates, and inconsistencies.",
    ex: "Domain knowledge defines the valid range (age 0–120, say).",
    mt: "Classifying impossible values as outliers instead of invalid values." });

  Q({ id: "L5-CC-20", lec: 5, pg: [10], tp: "OLS", sb: "Slope from moments", df: "hard", ty: "calc", so: "lecture",
    pr: "Given Cov(x, y) = 6 and Var(x) = 4, compute the OLS slope of y on x.",
    at: "β₁ = Cov(x, y)/Var(x) = 6/4 = 1.5.",
    sl: "For simple regression, β₁ = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² = Cov/Var (sample versions).",
    ex: "β₀ follows from β₀ = ȳ − β₁x̄.",
    mt: "Inverting the ratio." });

  Q({ id: "L5-CC-21", lec: 5, pg: [42], tp: "Regularization", sb: "Extreme λ scenario", df: "medium", ty: "mcq", so: "lecture",
    pr: "A Ridge/Lasso penalty λ is set extremely large. What happens to the model?",
    op: ["It becomes identical to OLS", "Coefficients are driven toward zero — high bias, underfitting; predictions approach the intercept-only model", "Variance explodes", "Training error reaches zero"],
    an: 1, at: "Huge λ over-constrains coefficients to ≈ 0 → underfitting (bias↑, variance↓). Choose λ by validation error.",
    sl: "λ = 0 recovers OLS; very large λ approaches the constant model.",
    ex: "The optimal λ sits between these extremes.",
    mt: "Expecting heavier penalties to improve training fit." });

  Q({ id: "L5-CC-22", lec: 5, pg: [37], tp: "Metrics", sb: "RMSE from MSE", df: "easy", ty: "calc", so: "lecture",
    pr: "A model has MSE = 9 (in kg²). Compute RMSE and state its units.",
    at: "RMSE = √9 = 3 kg — the error is expressed back in the target's original units.",
    sl: "RMSE = sqrt(MSE).",
    ex: "RMSE is directly comparable to the scale of y — unlike R².",
    mt: "Reporting RMSE in kg²." });

  Q({ id: "L6-CC-21", lec: 6, pg: [16], tp: "Odds ratios", sb: "OR below one", df: "medium", ty: "mcq", so: "lecture",
    pr: "A logistic coefficient for 'has support plan' is β = −0.7. What does e^β ≈ 0.5 mean?",
    op: ["Having the plan halves the modelled odds of the event, holding other features fixed", "The event probability is −0.7", "The feature doubles the odds", "No association"],
    an: 0, at: "OR = e^{−0.7} ≈ 0.5 → the odds are multiplied by 0.5 (halved) per unit/level, other features held fixed — an association.",
    sl: "β < 0 → OR < 1: lower modelled odds.",
    ex: "As always: association, not proof of a causal intervention effect.",
    mt: "Interpreting the halving as a probability change." });

  Q({ id: "L6-CC-22", lec: 6, pg: [30], tp: "F1", sb: "F1 from counts", df: "hard", ty: "calc", so: "lecture",
    pr: "A model gives TP = 30, FP = 10, FN = 30. Compute precision, recall, and F1.",
    at: "Precision = 30/40 = 0.75. Recall = 30/60 = 0.5. F1 = 2(0.75×0.5)/(1.25) = 0.6.",
    sl: "P = TP/(TP+FP) = 0.75; R = TP/(TP+FN) = 0.5; F1 = 2PR/(P+R) = 0.6.",
    ex: "F1 (0.6) sits between the two — the harmonic mean is pulled toward the smaller value.",
    mt: "Using the arithmetic mean (0.625) instead of the harmonic mean." });

  Q({ id: "L6-CC-23", lec: 6, pg: [23], tp: "Confusion matrix", sb: "Actual positives from counts", df: "medium", ty: "calc", so: "lecture",
    pr: "A confusion matrix has TP = 80 and FN = 20. How many actual positives are there, and what is the recall?",
    at: "Actual positives = TP + FN = 100. Recall = 80/100 = 0.8.",
    sl: "The positives column (TP+FN) counts reality; recall = TP/(TP+FN).",
    ex: "The matrix columns sum to the actual class counts; rows sum to predicted counts.",
    mt: "Using TP+FP (predicted positives) instead." });


  /* ---------------- Final MCQ drills batch 4 ---------------- */
  Q({ id: "L1-CC-20", lec: 1, pg: [12], tp: "Descriptive stats", sb: "Robust pair", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which summary-statistic pair is resistant to outliers and suits skewed data?",
    op: ["Mean + standard deviation", "Median + IQR", "Mean + range", "Mode + variance"],
    an: 1, at: "Median and IQR are both rank-based and robust; mean, SD, and range are all distorted by extreme values.",
    sl: "Pair robust with robust (median + IQR); pair summary with summary (mean + SD).",
    ex: "Report both center and spread — but choose the pair matching the distribution.",
    mt: "Mixing a robust center with an outlier-sensitive spread." });

  Q({ id: "L1-CC-21", lec: 1, pg: [33], tp: "Data cleaning", sb: "Quality category boundary", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which of these is NOT a data-quality issue but a modelling concern?",
    op: ["Missing values", "Wrong data types", "Multicollinearity among predictors", "Invalid values outside the plausible range"],
    an: 2, at: "Multicollinearity is a modelling/interpretation issue between predictors, not a data-entry quality defect.",
    sl: "The quality taxonomy: missingness, types, duplicates, inconsistent formats, outliers, invalid values.",
    ex: "Knowing the taxonomy keeps cleaning and modelling concerns separate.",
    mt: "Filing multicollinearity under data cleaning." });

  Q({ id: "L2-CC-30", lec: 2, pg: [20], tp: "Distances", sb: "Property matching", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pairing is correct?",
    op: ["Euclidean — scale-invariant; cosine — sensitive to magnitude", "Euclidean — sensitive to magnitude; cosine — scale-invariant", "Both scale-invariant", "Both sensitive to magnitude"],
    an: 1, at: "Euclidean uses raw magnitudes (scale-sensitive); cosine divides them out (invariant to positive rescaling).",
    sl: "Doubling a vector changes Euclidean distances but leaves cosine unchanged.",
    ex: "Metric choice is a modelling decision about what 'similar' means.",
    mt: "Swapping the properties." });

  Q({ id: "L2-CC-31", lec: 2, pg: [72], tp: "PCA limitations", sb: "Unsupervised meaning", df: "hard", ty: "mcq", so: "lecture",
    pr: "What does it mean that PCA is 'unsupervised'?",
    op: ["It requires no data", "It never uses label information — directions are chosen by variance alone, which may not match the classification task", "It cannot be validated", "It selects features by their names"],
    an: 1, at: "PCA maximises variance without seeing labels; a low-variance direction can be the one that separates classes — validate on the task (or use supervised LDA).",
    sl: "Variance is a label-free criterion; task relevance must be checked separately.",
    ex: "This is why the 90%-variance rule is a heuristic, not a guarantee.",
    mt: "Assuming high-variance components are automatically the most useful." });

  Q({ id: "L3-CC-27", lec: 3, pg: [13], tp: "Descriptives", sb: "Skew decision", df: "medium", ty: "mcq", so: "lecture",
    pr: "A CEO's salary of $5M is added to a company's 100-employee salary list. Which summary better describes a 'typical' salary?",
    op: ["The mean, which uses all values", "The median, which is barely moved by the single extreme value", "The range", "The maximum"],
    an: 1, at: "One extreme value shifts the mean substantially but moves the median by at most a position — the median is robust.",
    sl: "Median resists outliers; mean absorbs them.",
    ex: "Income and housing data are the classic skewed examples.",
    mt: "Trusting the mean for skewed distributions." });

  Q({ id: "L3-CC-28", lec: 3, pg: [10], tp: "Probability rules", sb: "Independence check", df: "hard", ty: "mcq", so: "lecture",
    pr: "P(A) = 0.5, P(B) = 0.4, P(A∩B) = 0.2. Are A and B independent?",
    op: ["Yes — P(A)P(B) = 0.2 equals P(A∩B)", "No — the overlap is non-zero", "Cannot be determined", "Yes, because the probabilities differ"],
    an: 0, at: "Independence ⇔ P(A∩B) = P(A)P(B). Here 0.5 × 0.4 = 0.2 = P(A∩B) → independent.",
    sl: "Compare the observed intersection with the product of marginals.",
    ex: "Non-zero overlap does NOT imply dependence.",
    mt: "Concluding dependence merely because the events can co-occur." });

  Q({ id: "L4-CC-24", lec: 4, pg: [39], tp: "Missingness", sb: "Scenario classification 3", df: "hard", ty: "mcq", so: "lecture",
    pr: "A clinic's weight field is missing more often for heavier patients, but weight is never recorded elsewhere in the dataset. Which mechanism applies?",
    op: ["MCAR", "MAR", "MNAR — missingness is tied to the unobserved weight itself", "No missingness"],
    an: 2, at: "The missing value's own magnitude drives the missingness → MNAR (no simple fix; model the missingness or acknowledge the limitation).",
    sl: "If the hidden value controls its own absence, it is MNAR.",
    ex: "If a recorded variable (e.g., age) explained it, the mechanism would be MAR.",
    mt: "Assuming MAR because 'weights are usually correlated with height'." });

  Q({ id: "L4-CC-25", lec: 4, pg: [41], tp: "Missingness", sb: "MAR strategy", df: "medium", ty: "mcq", so: "lecture",
    pr: "Missingness is MAR with respect to an observed variable (age). Which strategy family is appropriate?",
    op: ["Listwise deletion, guaranteed unbiased", "Conditional imputation using the observed variables (e.g., age-based groups/models)", "Constant fill with 0", "Ignore the missingness"],
    an: 1, at: "Under MAR, imputation can borrow information from the observed variables that explain the missingness; deletion can bias estimates.",
    sl: "MAR → conditional/model-based imputation with suitable assumptions.",
    ex: "Always verify consequences before/after (distributions, relationships).",
    mt: "Applying the MCAR deletion rule under MAR." });

  Q({ id: "L5-CC-23", lec: 5, pg: [37], tp: "Metrics", sb: "R² vs RMSE roles", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about R² and RMSE is correct?",
    op: ["R² is in target units; RMSE is unitless", "R² is a unitless variance share; RMSE is an error in the target's units", "Both are unitless", "Neither can be compared across models"],
    an: 1, at: "R² = 1 − SSres/SStot (proportion of variance explained); RMSE = √(SSres/n) in y's units.",
    sl: "Use both: R² for variance explained, RMSE for practical error size.",
    ex: "R² is not comparable across datasets with different variance; RMSE is directly interpretable.",
    mt: "Swapping the two roles." });

  Q({ id: "L5-CC-24", lec: 5, pg: [24], tp: "Multicollinearity", sb: "Goal dependence", df: "medium", ty: "mcq", so: "lecture",
    pr: "Two correlated predictors inflate each other's standard errors. For which goal is this most damaging?",
    op: ["Predicting the outcome for new data", "Deciding which of the two features matters more (interpretation)", "Computing the intercept", "Splitting the data"],
    an: 1, at: "Inflated SEs and unstable coefficients undermine attribution between correlated features; overall predictions usually remain accurate.",
    sl: "Interpretation suffers; prediction typically tolerates multicollinearity.",
    ex: "Remedies: remove/combine one feature, or regularise (Ridge/Elastic Net).",
    mt: "Claiming predictions collapse under multicollinearity." });

  Q({ id: "L6-CC-24", lec: 6, pg: [34], tp: "Metrics", sb: "FP-costly choice", df: "medium", ty: "mcq", so: "lecture",
    pr: "When false positives are much more costly than false negatives, which metric should guide model choice?",
    op: ["Recall", "Precision — of flagged positives, how many are real", "Accuracy", "TPR"],
    an: 1, at: "FP-costly settings (wasted actions) favour precision; FN-costly settings favour recall.",
    sl: "Match the metric to the dominant error cost; use the PR curve for the full tradeoff.",
    ex: "F1 when both matter; the PR curve when costs differ.",
    mt: "Optimising recall when false alarms are the expensive error." });

  Q({ id: "L6-CC-25", lec: 6, pg: [38], tp: "ROC", sb: "Term equivalences", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which equality chain is correct?",
    op: ["TPR = Recall = Sensitivity", "TPR = Precision", "FPR = Recall", "Specificity = FPR"],
    an: 0, at: "TPR (true positive rate) = recall = sensitivity — of actual positives, the fraction flagged.",
    sl: "FPR = 1 − specificity is the other ROC axis.",
    ex: "These medical/security aliases appear side by side in exam questions.",
    mt: "Equating TPR with precision — different denominators." });

})();
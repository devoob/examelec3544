/* Extra MCQ bank — Lecture 2 (built for MCQ Sets; distinct angles from questions_l2.js). */
(function () {
  var L = 2;

  
  
  Q({ id: "L2-MCQ-03", lec: L, pg: [15], tp: "Distances", sb: "Pythagorean link", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which theorem is the 2D Euclidean distance formula an extension of?",
    op: ["Central Limit Theorem", "Pythagorean theorem c = √(a²+b²)", "Bayes' theorem", "Law of large numbers"],
    an: 1, at: "The Pythagorean theorem: d = √[(x₂−x₁)² + (y₂−y₁)²] extends c = √(a²+b²) to any number of dimensions.",
    sl: "Slide 15 connection note.",
    ex: "The same squaring-and-rooting pattern generalizes to p dimensions.",
    mt: "Attributing the distance formula to a statistical theorem." });

  Q({ id: "L2-MCQ-04", lec: L, pg: [16], tp: "Distances", sb: "Example check", df: "medium", ty: "mcq", so: "lecture",
    pr: "For xA = [5.1, 3.5, 1.4, 0.2] and xB = [4.9, 3.0, 1.4, 0.2], which difference vector is correct?",
    op: ["[0.2, 0.5, 0, 0]", "[0.2, 0.5, 0, 0.4]", "[−0.2, 0.5, 0, 0]", "[0.2, 0.5, 0.0, −0.0]"],
    an: 0, at: "[0.2, 0.5, 0, 0] — petal measurements identical; only sepal dims differ.",
    sl: "5.1−4.9 = 0.2; 3.5−3.0 = 0.5; 1.4−1.4 = 0; 0.2−0.2 = 0.",
    ex: "d = √(0.04+0.25) = √0.29 ≈ 0.539.",
    mt: "Sign slips on the first difference (5.1 − 4.9 = 0.2, not −0.2 if ordered A−B)." });

  
  Q({ id: "L2-MCQ-06", lec: L, pg: [18], tp: "Distances", sb: "Example norms", df: "hard", ty: "mcq", so: "lecture",
    pr: "In the flower cosine example, what is ‖xA‖ for xA = [5.1, 3.5, 1.4, 0.2]?",
    op: ["√40.26 ≈ 6.35", "√35.01 ≈ 5.92", "37.49", "6.35² = 40.26"],
    an: 0, at: "‖xA‖ = √(5.1²+3.5²+1.4²+0.2²) = √40.26 ≈ 6.35.",
    sl: "Squares: 26.01 + 12.25 + 1.96 + 0.04 = 40.26; √40.26 ≈ 6.35. (‖xB‖ = √35.01 ≈ 5.92.)",
    ex: "cos = 37.49/(6.35×5.92) ≈ 0.999.",
    mt: "Mixing the two flowers' norms." });

  Q({ id: "L2-MCQ-07", lec: L, pg: [20], tp: "Distances", sb: "Scale sensitivity", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which metric is invariant to positive vector rescaling?",
    op: ["Euclidean distance", "Cosine similarity", "Manhattan distance", "Both equally"],
    an: 1, at: "Cosine similarity — invariant to positive rescaling (direction only).",
    sl: "Slide 20 table: Euclidean = scale sensitive; cosine = invariant to positive vector rescaling.",
    ex: "This is why cosine suits text/sparse data and recommendation systems.",
    mt: "Claiming Euclidean is scale-invariant." });

  Q({ id: "L2-MCQ-08", lec: L, pg: [21], tp: "Distances", sb: "Review example numbers", df: "hard", ty: "mcq", so: "lecture",
    pr: "In the review-vector example (A = [1,1,1,1,0,0,0,0], B = [3,3,3,3,0,0,0,0]), what is d(A,B)?",
    op: ["2", "4", "8", "√8"],
    an: 1, at: "d(A,B) = √(4+4+4+4) = √16 = 4.",
    sl: "Differences are [2,2,2,2,0,0,0,0]; squares sum to 16; root gives 4.",
    ex: "cos(A,B) = 1 (same direction) even though d(A,B) = 4 — the metrics disagree by design.",
    mt: "Reporting √16 as 8, or forgetting the root and reporting 16." });

  Q({ id: "L2-MCQ-09", lec: L, pg: [21], tp: "Distances", sb: "Review example cosine", df: "hard", ty: "mcq", so: "lecture",
    pr: "For A = [1,1,1,1,0,0,0,0] and C = [0,0,0,0,1,1,1,1], what is cos(A,C)?",
    op: ["1", "0.5", "0", "−1"],
    an: 2, at: "cos(A,C) = 0 — the dot product is 0 (no shared vocabulary), so the vectors are orthogonal.",
    sl: "A·C = 0 → cos = 0. (d(A,C) = √8 ≈ 2.83, so Euclidean prefers C!)",
    ex: "This is the canonical demonstration that Euclidean can be fooled by topic-disjoint but short vectors.",
    mt: "Computing cos before the dot product (it is 0 immediately)." });

  
  
  Q({ id: "L2-MCQ-12", lec: L, pg: [26], tp: "Covariance", sb: "Variance properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "If all values of a feature are identical, what is its variance?",
    op: ["1", "Undefined", "0", "Equal to the mean"],
    an: 2, at: "0 — no spread around the mean.",
    sl: "Slide 26: 'If all values are the same, variance = 0. More spread = higher variance.'",
    ex: "Variance is the average squared deviation from the mean.",
    mt: "Saying variance equals the mean when identical." });

  
  
  
  
  
  
  Q({ id: "L2-MCQ-19", lec: L, pg: [36], tp: "Covariance", sb: "np.cov default (n−1)", df: "hard", ty: "mcq", so: "lecture",
    pr: "What denominator does NumPy's np.cov use by default?",
    op: ["n", "n−1 (Bessel's correction, sample covariance)", "n+1", "p−1"],
    an: 1, at: "n−1 — sample covariance by default.",
    sl: "Slide 36: population covariance uses n; sample uses n−1; np.cov() uses n−1 by default; always know which you're using.",
    ex: "This assumption caused the demo's discrepancy — a learning opportunity, not a failure.",
    mt: "Assuming np.cov() uses n." });

  
  
  Q({ id: "L2-MCQ-22", lec: L, pg: [41], tp: "PCA", sb: "Sparsity", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why does data become sparse in high dimensions?",
    op: ["Storage is limited", "Ten intervals per feature create 10^p cells; maintaining coverage requires exponentially more data", "Values become zero", "The data matrix shrinks"],
    an: 1, at: "10 intervals per feature → 10^p cells; keeping coverage requires exponentially more data.",
    sl: "Slide 41 middle block; key insight: the curse is about geometry, not computation.",
    ex: "Distances converging compounds the problem for nearest-neighbor methods.",
    mt: "Calling sparsity a storage issue." });

  
  
  
  
  
  Q({ id: "L2-MCQ-28", lec: L, pg: [50], tp: "PCA", sb: "Theorem", df: "hard", ty: "mcq", so: "lecture",
    pr: "The variance of data projected onto an eigenvector equals what?",
    op: ["1", "The corresponding eigenvalue", "The mean", "The eigenvector's norm"],
    an: 1, at: "The eigenvalue — eigenvalues ARE variances of the principal components.",
    sl: "Slide 50: λ₁ = variance captured by PC1; the eigenvector with largest λ is the max-variance direction.",
    ex: "This is the theorem that makes PCA (and EVR) work.",
    mt: "Equating projection variance with 1 (unit-normalized eigenvectors only fix direction, not variance)." });

  
  
  
  
  Q({ id: "L2-MCQ-33", lec: L, pg: [57], tp: "PCA algorithm", sb: "np.cov transpose", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why does the standard code write np.cov(X_centered.T)?",
    op: ["To speed up computation", "Because np.cov expects features as rows by default", "To compute the mean", "To sort the columns"],
    an: 1, at: "np.cov expects variables as rows — transposing puts features in rows.",
    sl: "Slide 57 code comment: '# .T: np.cov expects features as rows by default.'",
    ex: "Forgetting the transpose yields an n×n observation covariance.",
    mt: "Omitting the transpose." });

  
  Q({ id: "L2-MCQ-35", lec: L, pg: [60], tp: "PCA algorithm", sb: "Implementation", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the complete pca(X, k) implementation, which NumPy function computes eigenvectors?",
    op: ["np.linalg.inv", "np.linalg.eigh", "np.sort", "np.dot"],
    an: 1, at: "np.linalg.eigh — used for symmetric matrices like the covariance matrix.",
    sl: "Slide 60 code: eigenvalues, eigenvectors = np.linalg.eigh(cov_matrix); then argsort descending.",
    ex: "eigh returns eigenvalues in ascending order — remember the [::-1] sort.",
    mt: "Using np.linalg.inv on a covariance matrix." });

  
  Q({ id: "L2-MCQ-37", lec: L, pg: [62], tp: "PCA", sb: "Iris clusters", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which species separates most clearly in the PC1–PC2 scatter?",
    op: ["Versicolor", "Virginica", "Setosa", "None separate"],
    an: 2, at: "Setosa separates most clearly — the 2D projection reveals hidden 4D cluster structure.",
    sl: "Slide 62: 150 points colored by species; clear separation, especially setosa.",
    ex: "PCA reveals structure without using labels.",
    mt: "Claiming all three species separate equally." });

  
  
  
  
  
  
  
  Q({ id: "L2-MCQ-45", lec: L, pg: [75], tp: "PCA limitations", sb: "Scaling sensitivity", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which limitation states PCA is 'unsupervised — doesn't know your labels'?",
    op: ["Linear subspace", "Variance ≠ relevance", "Unsupervised nature (consider LDA for classification)", "Scaling sensitivity"],
    an: 2, at: "Unsupervised — consider LDA (supervised) for classification.",
    sl: "Slide 75 four limitations; LDA is named as the supervised alternative.",
    ex: "Challenge: 'when does this fail?' — every technique has assumptions.",
    mt: "Thinking PCA adapts to labels — it never sees them." });

  
  })();
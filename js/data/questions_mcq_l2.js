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

  Q({ id: "L2-MCQ-05", lec: L, pg: [17], tp: "Distances", sb: "Range", df: "easy", ty: "mcq", so: "lecture",
    pr: "What does a cosine similarity of 0 mean?",
    op: ["Identical direction", "Opposite direction", "Perpendicular vectors", "Scale-invariance failure"],
    an: 2, at: "0 = perpendicular (orthogonal) vectors.",
    sl: "Range: +1 same direction; 0 perpendicular; −1 opposite.",
    ex: "Cosine is bounded [−1, 1] and scale-invariant.",
    mt: "Reading 0 as 'no data' rather than orthogonality." });

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

  
  Q({ id: "L2-MCQ-11", lec: L, pg: [25], tp: "Covariance", sb: "Key question", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is 'the key question' when moving from distances to covariance?",
    op: ["How similar are two observations?", "When one feature increases, what happens to other features?", "What is the sample size?", "Which model should we use?"],
    an: 1, at: "When one feature increases, what happens to other features — do they increase together, decrease, or move independently?",
    sl: "Slide 25: rows comparison (distances) → columns comparison (covariance matrix).",
    ex: "The covariance matrix captures the 'shape' of the data cloud.",
    mt: "Keeping the row-wise (observation) framing when moving to features." });

  Q({ id: "L2-MCQ-12", lec: L, pg: [26], tp: "Covariance", sb: "Variance properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "If all values of a feature are identical, what is its variance?",
    op: ["1", "Undefined", "0", "Equal to the mean"],
    an: 2, at: "0 — no spread around the mean.",
    sl: "Slide 26: 'If all values are the same, variance = 0. More spread = higher variance.'",
    ex: "Variance is the average squared deviation from the mean.",
    mt: "Saying variance equals the mean when identical." });

  Q({ id: "L2-MCQ-13", lec: L, pg: [28], tp: "Covariance", sb: "Self-covariance", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is Cov(X, X) equal to?",
    op: ["0", "1", "Var(X)", "The mean of X"],
    an: 2, at: "Cov(X, X) = Var(X) — the covariance of a feature with itself is its variance.",
    sl: "Slide 28 note.",
    ex: "This is why covariance-matrix diagonals hold variances.",
    mt: "Confusing Cov(X,X) with 0 or 1." });

  Q({ id: "L2-MCQ-14", lec: L, pg: [29], tp: "Covariance", sb: "Units", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why is raw covariance hard to interpret?",
    op: ["It is always negative", "Its magnitude depends on the units of X and Y", "It only works for categorical data", "It has no sign"],
    an: 1, at: "Its magnitude depends on the units — standardizing gives correlation.",
    sl: "Slide 29: 'Covariance measures linear co-variation; its magnitude depends on units.' (Correlation removes the unit dependence — L3 p.14.)",
    ex: "So compare covariance SIGN and structure, or use correlation for scale-free strength.",
    mt: "Interpreting covariance magnitude as strength without units." });

  Q({ id: "L2-MCQ-15", lec: L, pg: [31], tp: "Covariance matrix", sb: "Dimensions", df: "medium", ty: "mcq", so: "lecture",
    pr: "For a dataset with p features, what are the dimensions of the covariance matrix?",
    op: ["n × n", "p × p", "n × p", "p × 1"],
    an: 1, at: "p × p — one row/column per feature.",
    sl: "Slide 31: 'A p×p matrix containing all pairwise covariances between features.'",
    ex: "Iris: 4×4 covariance matrix.",
    mt: "Using n (observations) for the covariance dimensions." });

  Q({ id: "L2-MCQ-16", lec: L, pg: [32], tp: "Covariance matrix", sb: "Heatmap reading", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the Iris covariance heatmap, which features show high positive covariance?",
    op: ["Sepal width and petals", "Petal length and petal width", "Sepal length and sepal width", "All pairs equally"],
    an: 1, at: "Petal length & petal width — bright cells; sepal width has low covariance with petals.",
    sl: "Slide 32 heatmap observations; diagonal shows variances (petal length highest).",
    ex: "PCA will exploit these 'move together' patterns.",
    mt: "Reading the heatmap diagonal as covariances (they are variances)." });

  Q({ id: "L2-MCQ-17", lec: L, pg: [33], tp: "Covariance matrix", sb: "Shape bridge", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the data-cloud ellipse figure, what do the ellipse axes point along?",
    op: ["The original feature axes", "The directions of the covariance matrix's eigenvectors", "The data mean", "The largest data values"],
    an: 1, at: "The ellipse axes point in the directions of the eigenvectors of Σ — the principal components (preview).",
    sl: "Slide 33: the covariance matrix describes the ellipsoid shape of the data cloud.",
    ex: "This is the bridge from Part 1 to PCA.",
    mt: "Assuming ellipse axes align with x/y feature axes." });

  
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

  Q({ id: "L2-MCQ-23", lec: L, pg: [42], tp: "PCA", sb: "Motivations", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which motivation belongs to dimensional reduction?",
    op: ["Visualization (we can only see 2D/3D)", "Faster internet", "Smaller file sizes", "Better colors"],
    an: 0, at: "Visualization — project high-D data down while preserving structure; also computation (O(p²) scaling) and generalization (overfitting risk).",
    sl: "Slide 42 three motivations.",
    ex: "Reducing p before modeling can speed up training dramatically.",
    mt: "Treating PCA as data compression for storage only." });

  Q({ id: "L2-MCQ-24", lec: L, pg: [43], tp: "PCA", sb: "Cigar intuition", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the cigar-shaped cloud intuition, which axis captures most variance?",
    op: ["The short axis", "The long axis", "Both equally", "Neither — variance is uniform"],
    an: 1, at: "The long axis captures most variance; the short axis little; PCA finds these axes automatically.",
    sl: "Slide 43 conceptual ellipse with PC1 along the long axis, PC2 along the short axis.",
    ex: "Projecting onto high-variance directions preserves the signal.",
    mt: "Thinking PCA drops the long axis to compress." });

  Q({ id: "L2-MCQ-25", lec: L, pg: [45], tp: "Eigen", sb: "Transformation behavior", df: "medium", ty: "mcq", so: "lecture",
    pr: "What happens to MOST vectors under a matrix transformation?",
    op: ["They only stretch", "They are both stretched AND rotated", "They stay unchanged", "They disappear"],
    an: 1, at: "Most vectors are stretched and rotated; eigenvectors only stretch (no rotation).",
    sl: "Slide 45 key observation.",
    ex: "Eigenvectors are the exceptions that make the matrix 'behave simply'.",
    mt: "Claiming all vectors preserve direction." });

  Q({ id: "L2-MCQ-26", lec: L, pg: [47], tp: "Eigen", sb: "λ interpretation", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does an eigenvalue λ = 0.5 mean for vectors in that eigenvector direction?",
    op: ["They double", "They are compressed (shorter)", "They flip direction", "They vanish exactly"],
    an: 1, at: "0 < λ < 1 = compression — vectors get shorter.",
    sl: "Slide 47: λ>1 stretch; λ=1 no change; 0<λ<1 compress; λ=0 collapse; λ<0 flip+scale (impossible for exact covariance).",
    ex: "For PCA: larger eigenvalue = more variance along that direction.",
    mt: "Reading 0.5 as a flip or collapse." });

  Q({ id: "L2-MCQ-27", lec: L, pg: [49], tp: "Eigen", sb: "Properties", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why are all eigenvalues of a covariance matrix non-negative?",
    op: ["Because data is normally distributed", "Because Σ is positive semidefinite — you can't have negative variance", "Because eigenvectors are orthogonal", "Because the matrix is invertible"],
    an: 1, at: "Σ is positive semidefinite; negative variance is impossible.",
    sl: "Slide 49 three properties: real eigenvalues (symmetric); non-negative (PSD); orthogonal eigenvectors.",
    ex: "These guarantee perpendicular axes with non-negative importance values.",
    mt: "Attributing non-negativity to the data distribution." });

  Q({ id: "L2-MCQ-28", lec: L, pg: [50], tp: "PCA", sb: "Theorem", df: "hard", ty: "mcq", so: "lecture",
    pr: "The variance of data projected onto an eigenvector equals what?",
    op: ["1", "The corresponding eigenvalue", "The mean", "The eigenvector's norm"],
    an: 1, at: "The eigenvalue — eigenvalues ARE variances of the principal components.",
    sl: "Slide 50: λ₁ = variance captured by PC1; the eigenvector with largest λ is the max-variance direction.",
    ex: "This is the theorem that makes PCA (and EVR) work.",
    mt: "Equating projection variance with 1 (unit-normalized eigenvectors only fix direction, not variance)." });

  Q({ id: "L2-MCQ-29", lec: L, pg: [51], tp: "PCA", sb: "Dictionary", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does 'vi ⊥ vj' imply for PCA?",
    op: ["PC scores are correlated", "Projected PC scores are uncorrelated", "Eigenvalues are equal", "The mean is zero"],
    an: 1, at: "Orthogonal eigenvectors ⇒ projected PC scores are uncorrelated.",
    sl: "Slide 51 dictionary rows: v₂ → PC2; λ₁ → variance in PC1; λ₁/Σλⱼ → fraction of variance; vi ⊥ vj → uncorrelated scores.",
    ex: "Uncorrelated components are a key benefit of PCA coordinates.",
    mt: "Reading orthogonality as score correlation." });

  Q({ id: "L2-MCQ-30", lec: L, pg: [53], tp: "PCA", sb: "Coordinate contrast", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which claim about PC coordinates is correct?",
    op: ["Ordered arbitrarily", "Ordered by importance (λ₁ ≥ λ₂ ≥ …)", "Components are correlated", "Axes follow the feature order"],
    an: 1, at: "PC coordinates: axes = eigenvectors; aligned with max variance; components uncorrelated; ordered by λ₁ ≥ λ₂ ≥ …",
    sl: "Slide 53 comparison table (original vs PC coordinates).",
    ex: "Ordering by eigenvalue defines PC1, PC2, …",
    mt: "Assuming PC order follows original feature order." });

  Q({ id: "L2-MCQ-31", lec: L, pg: [55], tp: "PCA algorithm", sb: "Step 2", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does Step 2 of the PCA algorithm compute?",
    op: ["The mean of each row", "The covariance matrix Σ = XᵀX/(n−1) of the centered data", "The eigenvectors directly", "The projection Z"],
    an: 1, at: "Covariance matrix of the centered data: Σ = XᵀX/(n−1).",
    sl: "Slide 55: 1) center; 2) covariance; 3) eigenvectors sorted; 4) project onto top k.",
    ex: "Skipping centering would mix location into the covariance.",
    mt: "Computing covariance before centering." });

  Q({ id: "L2-MCQ-32", lec: L, pg: [56], tp: "PCA algorithm", sb: "Centering reasons", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which reason for centering is given?",
    op: ["It removes outliers", "It separates location from shape and removes the mean's outer-product contribution", "It standardizes variances", "It reduces dimensions"],
    an: 1, at: "Four reasons: definitional necessity (covariance is around the mean); separate location from shape; translation invariance; remove the mean's outer-product contribution.",
    sl: "Slide 56: without centering, 'uncentered PCA mixes the mean's location with variation around it.'",
    ex: "Translation invariance: PCA directions should depend only on internal structure.",
    mt: "Confusing centering with standardizing." });

  Q({ id: "L2-MCQ-33", lec: L, pg: [57], tp: "PCA algorithm", sb: "np.cov transpose", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why does the standard code write np.cov(X_centered.T)?",
    op: ["To speed up computation", "Because np.cov expects features as rows by default", "To compute the mean", "To sort the columns"],
    an: 1, at: "np.cov expects variables as rows — transposing puts features in rows.",
    sl: "Slide 57 code comment: '# .T: np.cov expects features as rows by default.'",
    ex: "Forgetting the transpose yields an n×n observation covariance.",
    mt: "Omitting the transpose." });

  Q({ id: "L2-MCQ-34", lec: L, pg: [58], tp: "PCA algorithm", sb: "Total variance", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the sum of all eigenvalues equal to?",
    op: ["The number of components", "The total variance", "1", "The largest eigenvalue"],
    an: 1, at: "Sum of all λᵢ = total variance.",
    sl: "Slide 58: eigenvalues = variance captured by each principal direction; sums to total variance.",
    ex: "EVR divides each eigenvalue by this total.",
    mt: "Assuming eigenvalues sum to 1 unless normalized." });

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

  
  Q({ id: "L2-MCQ-39", lec: L, pg: [67], tp: "PCA selection", sb: "EVR sum", df: "easy", ty: "mcq", so: "lecture",
    pr: "What do all explained variance ratios sum to?",
    op: ["p (the number of features)", "1.0 (100%)", "The largest EVR", "0.90"],
    an: 1, at: "1.0 — every EVR is a proportion of the total variance.",
    sl: "Slide 67: each eigenvalue divided by the sum of all eigenvalues; EVRs sum to 100%.",
    ex: "Choose k components to capture 'enough' variance.",
    mt: "Assuming EVRs sum to the number of components." });

  Q({ id: "L2-MCQ-40", lec: L, pg: [68], tp: "PCA selection", sb: "Scree name", df: "easy", ty: "mcq", so: "lecture",
    pr: "Where does the term 'scree plot' come from?",
    op: ["An acronym", "Rocky debris at the base of a cliff", "The inventor's name", "A type of eigenvalue"],
    an: 1, at: "Named after 'scree' — rocky debris at the base of a cliff.",
    sl: "Slide 68 reading notes: look for the elbow; components before it capture most variance.",
    ex: "After the elbow, extra components add little new information.",
    mt: "Inventing an acronym meaning." });

  Q({ id: "L2-MCQ-41", lec: L, pg: [69], tp: "PCA selection", sb: "Cumulative table", df: "hard", ty: "mcq", so: "lecture",
    pr: "In the standardized-Iris cumulative table, what does PC3 add to the cumulative share?",
    op: ["3.67% (cumulative 99.48%)", "22.85%", "72.96%", "0.52%"],
    an: 0, at: "PC3 EVR = 3.67%, lifting cumulative to 99.48%; PC4 adds 0.52% to reach 100%.",
    sl: "Slide 69 table rows: 72.96 / 95.81 / 99.48 / 100.0.",
    ex: "PC3+PC4 add only 4.19% — check whether that matters for your task.",
    mt: "Reading PC4's 0.52% as the PC3 contribution." });

  Q({ id: "L2-MCQ-42", lec: L, pg: [70], tp: "PCA selection", sb: "Rule variants", df: "medium", ty: "mcq", so: "lecture",
    pr: "Besides 90%, which alternative cumulative-variance thresholds are commonly used when choosing the number of principal components?",
    op: ["50% and 75%", "95% conservative; 80% for compression", "99% and 99.9%", "No alternatives"],
    an: 1, at: "95% if you want to be conservative; 80% if you prioritize compression.",
    sl: "Slide 70 rule + caution that 90% is arbitrary; for prediction select by task validation.",
    ex: "The right threshold depends on the application.",
    mt: "Treating 90% as fixed for all purposes." });

  
  Q({ id: "L2-MCQ-44", lec: L, pg: [72], tp: "PCA limitations", sb: "Classification example", df: "hard", ty: "mcq", so: "lecture",
    pr: "In the classification example, which component is more valuable if PC3 separates classes but PC1 doesn't?",
    op: ["PC1 because it has 90% variance", "PC3 because task relevance trumps variance share", "Neither", "Both equally"],
    an: 1, at: "PC3 — if your goal is classification, the separating component is more valuable than the high-variance one.",
    sl: "Slide 72: always validate PCA on your actual task (classification accuracy, reconstruction error), not just explained variance.",
    ex: "Explained variance is a proxy, not a guarantee.",
    mt: "Choosing PC1 by variance share alone." });

  Q({ id: "L2-MCQ-45", lec: L, pg: [75], tp: "PCA limitations", sb: "Scaling sensitivity", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which limitation states PCA is 'unsupervised — doesn't know your labels'?",
    op: ["Linear subspace", "Variance ≠ relevance", "Unsupervised nature (consider LDA for classification)", "Scaling sensitivity"],
    an: 2, at: "Unsupervised — consider LDA (supervised) for classification.",
    sl: "Slide 75 four limitations; LDA is named as the supervised alternative.",
    ex: "Challenge: 'when does this fail?' — every technique has assumptions.",
    mt: "Thinking PCA adapts to labels — it never sees them." });

  
  })();
/* Question bank — Lecture 2 (pages 1–80).
   Distances/similarities, covariance, eigen-decomposition, PCA algorithm and interpretation. */
(function () {
  var L = 2;

  Q({ id: "L2-3-Q1", lec: L, pg: [3], tp: "Geometric view", sb: "Data as points", df: "easy", ty: "short", so: "lecture",
    pr: "In the geometric view of a data matrix, what does each row represent, and what is a dataset geometrically?",
    at: "Each row is one observation — a point in p-dimensional feature space; the dataset is a cloud of n points (e.g., 150 Iris flowers as points in 4-D).",
    sl: "Rows = observations (points), columns = features (dimensions). Distances/angles between rows are the basis for similarity measures.",
    ex: "Today's goal: see data this way and extract meaning from it.",
    mt: "Thinking of rows as rows of a spreadsheet rather than points in p-dimensional space." });

  
  
  Q({ id: "L2-7-Q1", lec: L, pg: [7], tp: "Data matrices", sb: "DataFrame vs matrix", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the key distinction between a spreadsheet and a matrix?",
    op: [
      "A spreadsheet stores only text; a matrix stores only images",
      "A spreadsheet is for humans (labels, types, context); a matrix is for math (pure numbers, no labels)",
      "A matrix can contain categorical labels, a spreadsheet cannot",
      "They are mathematically identical objects with identical operations"
    ], an: 1,
    at: "A spreadsheet is for humans (labels, types, context); a matrix is for math (pure numbers, no labels). Same information, different representation.",
    sl: "Slide 7 [FIGURE 3: DataFrame vs. Matrix Comparison] — left: pandas DataFrame with labels; right: mathematical matrix X.",
    ex: "This abstraction enables all linear algebra operations on your data.",
    mt: "Assuming you can apply matrix operations directly to a DataFrame with dtypes/labels unhandled." });

  Q({ id: "L2-8-Q1", lec: L, pg: [8], tp: "Notation", sb: "X, n, p, xi", df: "easy", ty: "mcq", so: "lecture",
    pr: "In the data-matrix notation, what do n and p denote?",
    op: [
      "n = number of features; p = number of observations",
      "n = number of observations (rows); p = number of features (columns)",
      "n = number of classes; p = number of samples",
      "n = matrix rank; p = determinant"
    ], an: 1,
    at: "n = number of observations (rows) — how many data points; p = number of features (columns) — measurements per point. X ∈ ℝ^{n×p}; xi ∈ ℝ^p is the i-th row.",
    sl: "Slide 8 symbol table + example: Iris has n = 150 flowers, p = 4 measurements → X ∈ ℝ^{150×4}.",
    ex: "Memorize this convention: it recurs in covariance (p×p), PCA (X_centered is n×p, W_k is p×k, Z is n×k).",
    mt: "Swapping n and p — the covariance matrix is p×p, so a p×p matrix cannot be n×n." });

  Q({ id: "L2-9-Q1", lec: L, pg: [9], tp: "Data matrices", sb: "Rows as observations", df: "easy", ty: "short", so: "lecture",
    pr: "Interpret the row x₆₂ = [5.9, 3.0, 4.2, 1.5] for the Iris dataset.",
    at: "It is one versicolor flower: sepal length 5.9 cm, sepal width 3.0 cm, petal length 4.2 cm, petal width 1.5 cm — one observation (data point) in 4D.",
    sl: "Slide 9 [FIGURE 4: Row Highlighted with Observation]. Each row xi represents one data point.",
    ex: "Rows as observations is the first of the two 'lenses' (rows vs columns) used all lecture.",
    mt: "Reading a row as a feature across samples — rows are samples here." });

  Q({ id: "L2-10-Q1", lec: L, pg: [10], tp: "Data matrices", sb: "Columns as features", df: "easy", ty: "short", so: "lecture",
    pr: "In the data matrix, what does each column represent, and why does each column's own variance matter for PCA?",
    at: "Each column is one measurement (feature) across all observations. Each column has its own distribution, mean, and variance — this matters for PCA (centering uses per-feature means; covariance is computed from column deviations).",
    sl: "Slide 10 [FIGURE 5: Column Highlighted with Distribution] — histogram of sepal length.",
    ex: "The per-column variance appears on the covariance matrix diagonal (slide 31).",
    mt: "Forgetting that centering is per column (subtract each feature's mean)." });

  Q({ id: "L2-11-Q1", lec: L, pg: [11], tp: "Geometric view", sb: "Cloud of points", df: "easy", ty: "short", so: "lecture",
    pr: "State the key insight and what the 2D plot shows for Iris.",
    at: "Each row xi is a point in p-dimensional space; your dataset is a cloud of n points. For Iris, each flower is a point in 4D space (the slide shows a 2D projection: sepal length vs sepal width).",
    sl: "Slide 11 key insight + [FIGURE 6: 2D Scatter — Rows as Points].",
    ex: "This geometric view is what makes distances/angles meaningful.",
    mt: "Treating the 2D plot as the full data — it is a projection of 4D." });

  
  Q({ id: "L2-13-Q1", lec: L, pg: [13], tp: "Geometric view", sb: "Why it matters", df: "easy", ty: "short", so: "lecture",
    pr: "What three capabilities does the geometric view unlock?",
    at: "Measure distances (quantify similarity between data points); find structure (identify relationships between features); reduce dimensions (find directions that matter most).",
    sl: "Slide 13 three bullets + key insight: Spreadsheet → Matrix → Points in Space.",
    ex: "The entire linear algebra toolkit becomes available after this transformation.",
    mt: "Listing only 'reduce dimensions' — all three capabilities matter." });

  Q({ id: "L2-15-Q1", lec: L, pg: [15], tp: "Distances", sb: "Euclidean", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which property set correctly describes Euclidean distance?",
    op: [
      "Always ≥ 0; zero only when x = y; symmetric; sensitive to scale",
      "Bounded in [−1, 1]; scale-invariant; not a true metric",
      "Always positive; asymmetric; robust to outliers",
      "Defined only in 2D; ignores magnitudes"
    ], an: 0,
    at: "Always ≥ 0 (non-negative); d(x,y) = 0 only when x = y; symmetric d(x,y) = d(y,x); sensitive to scale.",
    sl: "Slide 15: EQ2 Euclidean distance = √Σ(xj−yj)²; Pythagorean connection d = √[(x₂−x₁)² + (y₂−y₁)²] = c = √(a²+b²) extended to any dimension.",
    ex: "Sensitivity to scale is exactly what makes it appropriate when absolute magnitude matters (midterm 1(a)(i)).",
    mt: "Calling Euclidean distance scale-invariant — that property belongs to cosine.",
    mr: "MT-1a-i" });

  Q({ id: "L2-16-Q1", lec: L, pg: [16], tp: "Distances", sb: "Euclidean example", df: "medium", ty: "calc", so: "lecture",
    pr: "Compute the Euclidean distance between flowers xA = [5.1, 3.5, 1.4, 0.2] and xB = [4.9, 3.0, 1.4, 0.2] (show each step).",
    at: "d(A,B) = √(0.04 + 0.25 + 0 + 0) = √0.29 ≈ 0.539 cm.",
    sl: "Step 1 differences: [0.2, 0.5, 0, 0]. Step 2 squares: [0.04, 0.25, 0, 0]. Step 3 sum + root: √0.29 ≈ 0.539.",
    ex: "These two flowers are 0.539 units apart in 4D feature space — an example of quantifying similarity between observations.",
    mt: "Forgetting the square root; sign errors before squaring (squares remove signs anyway)." });

  Q({ id: "L2-17-Q1", lec: L, pg: [17], tp: "Distances", sb: "Cosine similarity", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about cosine similarity is correct?",
    op: [
      "Range [0,1]; it is a true distance metric",
      "Range [−1,1]; +1 same direction, 0 perpendicular, −1 opposite; scale-invariant but NOT a true distance metric",
      "Range (−∞,∞); sensitive to magnitude; equals Euclidean in 2D",
      "Range [−1,1]; changes when a vector is doubled"
    ], an: 1,
    at: "Range [−1,1]: +1 same direction, 0 perpendicular, −1 opposite. Properties: bounded, scale-invariant (2x doesn't change similarity), symmetric, NOT a true distance metric.",
    sl: "Slide 17: EQ3 cosine similarity = dot product / product of magnitudes; [FIGURE 8] two vectors with angle θ. Key insight: cosine only cares about direction, not length.",
    ex: "The 'not a true distance metric' caveat matters: it violates metric axioms (e.g., triangle inequality fails for 1−cos in general).",
    mt: "Claiming cosine is a distance; forgetting it is bounded and scale-invariant.",
    mr: "MT-1a-ii" });

  Q({ id: "L2-18-Q1", lec: L, pg: [18], tp: "Distances", sb: "Cosine example", df: "medium", ty: "calc", so: "lecture",
    pr: "Compute the cosine similarity of xA = [5.1, 3.5, 1.4, 0.2] and xB = [4.9, 3.0, 1.4, 0.2].",
    at: "cos(A,B) = 37.49 / (6.35 × 5.92) ≈ 0.999.",
    sl: "Dot product: (5.1×4.9)+(3.5×3.0)+(1.4×1.4)+(0.2×0.2) = 24.99+10.5+1.96+0.04 = 37.49. Norms: ‖xA‖ = √40.26 ≈ 6.35; ‖xB‖ = √35.01 ≈ 5.92. cos = 37.49/(6.35×5.92) ≈ 0.99858 ≈ 0.999.",
    ex: "The flowers point in nearly the same direction — angular similarity is very high even though their magnitudes differ slightly.",
    mt: "Forgetting to divide by both norms (reporting 37.49); arithmetic on the dot product.", mr: "MT-1a-iii" });

  Q({ id: "L2-19-Q1", lec: L, pg: [19], tp: "Distances", sb: "Euclidean vs cosine", df: "medium", ty: "short", so: "lecture",
    pr: "Explain the key insight: with points A, B, C where B is closest to A by Euclidean distance and C is closest by cosine similarity.",
    at: "Euclidean cares about absolute position in space; cosine cares about direction from origin. Neither is 'better' — the right choice depends on what similarity means for your problem.",
    sl: "Slide 19 [FIGURE 9: Euclidean vs. Cosine Comparison] with three points A, B, C.",
    ex: "This figure anticipates the review example (slide 21) where Euclidean prefers C and cosine prefers B.",
    mt: "Asserting one metric is universally superior." });

  Q({ id: "L2-20-Q1", lec: L, pg: [20], tp: "Distances", sb: "Choosing a metric", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which use-case pairing is correct's table?",
    op: [
      "Cosine — physical measurements; Euclidean — document similarity",
      "Euclidean — k-NN and clustering physical data; cosine — document similarity and recommendation systems",
      "Euclidean — text; cosine — image pixels",
      "Both are scale-invariant; the choice never matters"
    ], an: 1,
    at: "Euclidean: absolute position/magnitude; scale-sensitive; best for physical measurements and when scale matters; typical for k-NN, clustering, pixels. Cosine: direction; invariant to positive rescaling; best for text/sparse data; typical for document similarity and recommendation.",
    sl: "Slide 20 four-row comparison table.",
    ex: "The choice between metrics is a modeling decision — it reflects what 'similar' means in your context.",
    mt: "Reversing the typical use cases." });

  Q({ id: "L2-21-Q1", lec: L, pg: [21], tp: "Distances", sb: "Review example", df: "hard", ty: "calc", so: "lecture",
    pr: "Vocabulary: great, product, fast, shipping, terrible, broken, on, arrival. Reviews: A = [1,1,1,1,0,0,0,0]; B = [3,3,3,3,0,0,0,0]; C = [0,0,0,0,1,1,1,1]. Compute d(A,B), d(A,C), cos(A,B), cos(A,C) and state which review each metric says is more similar to A.",
    at: "d(A,B) = 4; d(A,C) = √8 ≈ 2.828 → Euclidean prefers C. cos(A,B) = 1; cos(A,C) = 0 → cosine prefers B.",
    sl: "d(A,B): differences (2,2,2,2,0,0,0,0) → √(4+4+4+4) = √16 = 4. d(A,C): differences (1,1,1,1,−1,−1,−1,−1) → √8 ≈ 2.828. cos(A,B): A·B = 12, ‖A‖ = 2, ‖B‖ = 6 → 12/12 = 1. cos(A,C): A·C = 0 → 0.",
    ex: "B is A's text repeated three times (same direction, longer) — cosine = 1. C is a different topic — cosine = 0. Euclidean is fooled by B's length. This is the canonical demo that cosine aligns with document/topic similarity.",
    mt: "Concluding Euclidean 'correctly' prefers C — C is a different topic; Euclidean is dominated by magnitude.",
    mr: "MT-1a-iii" });

  
  
  Q({ id: "L2-25-Q1", lec: L, pg: [25], tp: "Covariance", sb: "Rows vs columns", df: "medium", ty: "short", so: "lecture",
    pr: "What transition does describe from distances to the covariance matrix, and what is 'the key question'?",
    at: "Transition: from comparing rows (how similar are two observations — distances/similarities) to comparing columns (how do features relate — covariance matrix). Key question: when one feature increases, what happens to other features? Do they increase together, decrease, or move independently? The covariance matrix captures the 'shape' of the data cloud — essential for PCA.",
    sl: "Slide 25 arrow diagram Distances & Similarities → Covariance Matrix + key question box.",
    ex: "This is the pivot of the lecture from measuring points to measuring features.",
    mt: "Confusing row-wise similarity (distance) with column-wise relationship (covariance)." });

  Q({ id: "L2-26-Q1", lec: L, pg: [26], tp: "Covariance", sb: "Variance and Bessel", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why does the sample variance use n−1 instead of n?",
    op: [
      "Because n is too large",
      "Bessel's correction: the mean was estimated from the same data, so the degrees of freedom is n−1 — this makes the variance estimate unbiased",
      "Because the population variance is always smaller",
      "n−1 is just a convention with no statistical meaning"
    ], an: 1,
    at: "Bessel's correction for sample variance: we estimated the mean from the same data, so degrees of freedom = n−1; this makes the estimate unbiased.",
    sl: "Slide 26: EQ4 variance (sample) = average squared deviation from the mean; intuition: spread around the mean; all values equal → variance 0. [FIGURE 10: low vs high variance histograms].",
    ex: "The n vs n−1 distinction returns in Demo 2 (np.cov uses n−1) — 'this isn't a technicality — it affects statistical inference.'",
    mt: "Saying n−1 'corrects' the mean; it corrects the variance estimate's bias caused by using the sample mean." });

  Q({ id: "L2-28-Q1", lec: L, pg: [28], tp: "Covariance", sb: "Definition and signs", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which interpretation of covariance sign is correct?",
    op: [
      "Cov > 0: X above mean → Y tends below mean",
      "Cov ≈ 0 implies independence",
      "Cov > 0: X above its mean → Y tends above its mean; Cov ≈ 0: little linear association, does NOT imply independence",
      "Cov(X,X) = 0"
    ], an: 2,
    at: "Cov > 0: both above their means together. Cov < 0: X above mean ↔ Y below mean. Cov ≈ 0: little linear association — does not imply independence (note on slide 28: Cov(X,X) = Var(X)).",
    sl: "Slide 28: EQ5 covariance = product of deviations from each mean, averaged; interpretation table; note Cov(X,X) = Var(X).",
    ex: "The midterm's 1(b)(ii) true/false statement is exactly the positive-covariance interpretation.",
    mt: "Equating zero covariance with independence — the exam and slides stress it does not imply independence.",
    mr: "MT-1b-ii" });

  Q({ id: "L2-29-Q1", lec: L, pg: [29], tp: "Covariance", sb: "Visualization", df: "medium", ty: "short", so: "lecture",
    pr: "Two variables can have positive, negative, or near-zero covariance. Give an example where two DEPENDENT variables have covariance ≈ 0, and state the consequence.",
    at: "Example: Y = X² with X symmetric around 0 — Y is completely determined by X, yet positive and negative deviation products cancel, giving Cov ≈ 0. Consequence: zero covariance does not imply independence — it only rules out linear association.",
    sl: "Cov measures linear co-movement; a symmetric non-linear dependence averages to zero.",
    ex: "The classic zero-covariance-yet-dependent example is a symmetric pattern (e.g., Y = X² around zero).",
    mt: "Treating the zero-covariance panel as 'independent variables'.", mr: "MT-1b-i" });

  
  Q({ id: "L2-31-Q1", lec: L, pg: [31], tp: "Covariance matrix", sb: "Structure/properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which property set of the covariance matrix Σ is correct?",
    op: [
      "Diagonal = covariances; off-diagonal = variances; not symmetric",
      "Diagonal = variances; off-diagonal = covariances; symmetric (Σij = Σji); positive semidefinite (all eigenvalues ≥ 0)",
      "Diagonal = 1s; off-diagonal = correlations; always positive definite",
      "It is n×n with eigenvalues equal to the data values"
    ], an: 1,
    at: "Diagonal = variances of each feature; off-diagonal = covariances; symmetric Σij = Σji; positive semidefinite (all eigenvalues ≥ 0).",
    sl: "Slide 31: EQ6 + 3×3 structure table (Feature 1..3) + key properties list.",
    ex: "The midterm 'which can be covariance matrices' question tests exactly these properties: symmetry + PSD (and diagonal ≥ 0).",
    mt: "Forgetting positive semidefiniteness — asymmetric or negative-variance matrices are invalid.",
    mr: "MT-1b-iii" });

  Q({ id: "L2-32-Q1", lec: L, pg: [32], tp: "Covariance matrix", sb: "Iris heatmap", df: "medium", ty: "short", so: "lecture",
    pr: "Reading a covariance-matrix heatmap (petal/sepal measurements): what do bright off-diagonal cells, dim cells, and the diagonal represent?",
    at: "1) Petal length & width have high positive covariance (bright cells); 2) sepal width has low covariance with petals (dim); 3) the diagonal shows variances — petal length has the highest. Key insight: the covariance matrix reveals which features 'move together' — exactly what PCA exploits.",
    sl: "Slide 32 [FIGURE 12: Iris Covariance Matrix Heatmap] 4×4 with color scale.",
    ex: "This 'moves together' reading motivates finding directions of maximum variance.",
    mt: "Reading the heatmap diagonals as covariances — diagonal cells are variances." });

  Q({ id: "L2-33-Q1", lec: L, pg: [33], tp: "Covariance matrix", sb: "Data cloud shape", df: "medium", ty: "short", so: "lecture",
    pr: "How does the covariance matrix describe the shape of the data cloud, and how does that connect to principal components?",
    at: "The covariance matrix describes the ellipsoid shape of the data cloud; the ellipse axes point in the directions of the eigenvectors of Σ — these are the principal components. The covariance matrix encodes the 'shape' of your data cloud.",
    sl: "Slide 33 [FIGURE 13: Data Cloud with Covariance Ellipse] — 2D scatter with overlaid ellipse.",
    ex: "This is the bridge from Part 1 to PCA: eigenvectors of Σ = principal axes of the ellipsoid = maximal-variance directions.",
    mt: "Saying eigenvectors point to the data mean — they point along the ellipse axes through the (centered) cloud." });

  
  
  
  
  
  Q({ id: "L2-41-Q1", lec: L, pg: [41], tp: "PCA", sb: "Curse of dimensionality", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which is NOT one of the three curse-of-dimensionality effects?",
    op: [
      "Distances converge (nearest and farthest become similar relative to size)",
      "Data becomes sparse (10 intervals per feature → 10^p cells)",
      "Nearest neighbors lose contrast (when all distances are similar)",
      "Eigenvalues become complex numbers in high dimensions"
    ], an: 3,
    at: "Complex eigenvalues are not a curse-of-dimensionality effect — covariance-matrix eigenvalues are always real. The three effects: distances converge, data becomes sparse, nearest neighbors lose contrast.",
    sl: "Slide 41 three blocks + key insight: 'The curse isn't about computation — it's about the geometry of high-dimensional space itself. We need methods that find lower-dimensional structure.'",
    ex: "Distances converging is stated carefully: 'in many high-dimensional distributions ... this depends on the data and metric.'",
    mt: "Thinking the curse is a computational-speed issue — it is geometric." });

  Q({ id: "L2-42-Q1", lec: L, pg: [42], tp: "PCA", sb: "Motivation", df: "easy", ty: "short", so: "lecture",
    pr: "Give the three motivations for dimensionality reduction.",
    at: "Visualization (we can only see in 2D/3D; project down while preserving structure); Computation (algorithms scale poorly with dimensions, O(p²) or worse; reducing p speeds up training); Generalization (more features = more parameters = more overfitting risk; reducing dimensions can improve generalization).",
    sl: "Slide 42 three blocks + closing question: 'But how do we reduce dimensions without losing important information?'",
    ex: "Generalization motivation links directly to L5's bias-variance discussion.",
    mt: "Listing only visualization." });

  Q({ id: "L2-43-Q1", lec: L, pg: [43], tp: "PCA", sb: "Core insight", df: "medium", ty: "short", so: "lecture",
    pr: "State PCA's core insight and the cigar-shaped cloud intuition.",
    at: "Core insight: not all directions in feature space are equally important — some capture lots of variation, others almost none. Project onto high-variance directions, ignore low-variance ones, and you reduce dimensions while keeping the 'signal'. Cigar-shaped cloud: the long axis captures most variance, the short axis little; PCA finds these axes automatically.",
    sl: "Slide 43 core-insight box + [Conceptual: elongated ellipse with PC1 along long axis, PC2 along short axis].",
    ex: "Next question posed on the slide: how do we find these maximum-variance directions mathematically? Answer: eigenvectors of the covariance matrix.",
    mt: "Believing PCA picks subsets of original features — it finds new directions (slide 65: 'PCA creates, doesn't select')." });

  
  Q({ id: "L2-45-Q1", lec: L, pg: [45], tp: "Eigen", sb: "Matrix transformations", df: "medium", ty: "short", so: "lecture",
    pr: "What does the key observation say about matrix transformations and eigenvectors?",
    at: "Most vectors get both stretched AND rotated by a matrix. But some special vectors only get stretched (or compressed) — their direction doesn't change. These are the eigenvectors.",
    sl: "Slide 45 key observation box (accompanied by transformation visual).",
    ex: "This 'only stretch, no rotate' property is the definition intuition behind Σv = λv.",
    mt: "Assuming all vectors merely scale — in general a matrix rotates and scales." });

  Q({ id: "L2-46-Q1", lec: L, pg: [46], tp: "Eigen", sb: "Eigenvalue equation", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which equation is the eigenvalue equation, and what does it mean?",
    op: [
      "Σ + v = λv",
      "Σv = λv — multiplying by Σ gives λv: no rotation, just stretching (or compressing)",
      "Σv = 0 for all v",
      "v = λΣv"
    ], an: 1,
    at: "Σv = λv. When the covariance matrix Σ multiplies v, the result is λv — no rotation, just stretching (or compressing if |λ| < 1).",
    sl: "Slide 46: EQ7 eigenvalue equation; intuition: eigenvectors are the 'natural axes' of the transformation — directions along which the matrix behaves simply.",
    ex: "Note: the eigenvalue equation for a symmetric Σ guarantees real λ and orthogonal v (slide 49).",
    mt: "Reading Σv = λv as 'Σ is applied to λv' — λ multiplies the vector v." });

  Q({ id: "L2-47-Q1", lec: L, pg: [47], tp: "Eigen", sb: "Eigenvalue interpretation", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which eigenvalue interpretation is correct?",
    op: [
      "λ>1 compresses; 0<λ<1 stretches",
      "λ>1 stretches; λ=1 no change; 0<λ<1 compresses; λ=0 collapses; λ<0 flips + scales (impossible for an exact covariance matrix)",
      "λ<0 means more variance",
      "λ is always between 0 and 1"
    ], an: 1,
    at: "λ>1 stretching; λ=1 no change; 0<λ<1 compression; λ=0 collapse; λ<0 flip + scale — impossible for an exact covariance matrix.",
    sl: "Slide 47 interpretation table + PCA note: 'Larger eigenvalue = more variance along that direction. Sort by eigenvalue → principal components in order of importance.'",
    ex: "The 'λ<0 impossible for covariance' note connects to positive semidefiniteness (slide 31, midterm matrices question).",
    mt: "Forgetting λ<0 cannot occur for a covariance matrix — it signals an invalid matrix.",
    mr: "MT-1b-iii" });

  
  Q({ id: "L2-49-Q1", lec: L, pg: [49], tp: "Eigen", sb: "Covariance eigen properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why does the covariance matrix have real, non-negative eigenvalues and orthogonal eigenvectors?",
    op: [
      "Because of the central limit theorem",
      "Real eigenvalues because Σ is symmetric; non-negative because Σ is positive semi-definite (you can't have negative variance); orthogonal eigenvectors forming a natural coordinate system",
      "Because data is always normally distributed",
      "Because eigenvectors are unit length"
    ], an: 1,
    at: "Real eigenvalues (Σ symmetric); eigenvalues ≥ 0 (Σ positive semidefinite — no negative variance); eigenvectors perpendicular (orthogonal) forming a natural coordinate system.",
    sl: "Slide 49 three property blocks + 'Why this matters for PCA': perpendicular axes with non-negative importance values — exactly what dimensionality reduction needs.",
    ex: "These spectral properties make testing 'could this be a covariance matrix?' equivalent to symmetry + PSD.",
    mt: "Claiming orthogonality holds for any matrix — it is guaranteed for symmetric matrices like Σ.",
    mr: "MT-1b-iii" });

  Q({ id: "L2-50-Q1", lec: L, pg: [50], tp: "PCA", sb: "Variance = eigenvalue", df: "hard", ty: "mcq", so: "lecture",
    pr: "State the key theorem and what it implies about eigenvalues.",
    op: [
      "Variance along any random direction equals 1",
      "The variance of data projected onto an eigenvector equals the corresponding eigenvalue — so eigenvalues ARE variances of the principal components",
      "Eigenvalues equal the data means",
      "Variance equals the sum of all eigenvalues"
    ], an: 1,
    at: "The variance of data projected onto an eigenvector equals the corresponding eigenvalue; eigenvalue with largest λ = direction of maximum variance. λ₁ = variance captured by PC1, and so on.",
    sl: "Slide 50: EQ8 variance along a direction; key insight: 'Eigenvalues ARE Variances'; completes the connection eigenvectors of Σ = principal components, eigenvalues = importance.",
    ex: "This theorem is why EVR = λᵢ/Σλⱼ works (midterm 1(c)).",
    mt: "Dividing by p or n when defining EVR — the denominator is the sum of the eigenvalues, not the count.",
    mr: "MT-1c-i" });

  Q({ id: "L2-51-Q1", lec: L, pg: [51], tp: "PCA", sb: "Eigenvector ↔ PC dictionary", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which translation from eigen concept to PCA interpretation is correct?",
    op: [
      "v₁ (largest λ) → PC2",
      "λ₁/Σλⱼ → the fraction of total variance in PC1",
      "vi ⊥ vj → projected PC scores are correlated",
      "λ₂ → variance explained by PC1"
    ], an: 1,
    at: "v₁ (largest λ) → PC1; v₂ → PC2; λ₁ → variance explained by PC1; λ₁/Σλⱼ → fraction of total variance in PC1; vi ⊥ vj → projected PC scores are uncorrelated.",
    sl: "Slide 51 two-column dictionary + summary: PCA projects onto top-k eigenvectors of the covariance matrix — directions that capture the most variance.",
    ex: "Orthogonal eigenvectors ⇒ uncorrelated PC scores is a subtle, testable statement.",
    mt: "Assigning the largest eigenvector to the second component." });

  
  Q({ id: "L2-53-Q1", lec: L, pg: [53], tp: "PCA", sb: "New coordinate system", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which contrast between original coordinates and PC coordinates is correct?",
    op: [
      "Original axes are aligned with max variance; PC axes are arbitrary",
      "PC coordinates: components are correlated; ordered arbitrarily",
      "Original axes are defined by features (often arbitrary order, features may be correlated); PC axes are defined by eigenvectors of Σ, aligned with max variance, components uncorrelated, ordered by importance (λ₁ ≥ λ₂ ≥ ...)",
      "Both coordinate systems are orthogonal with unit variance per axis"
    ], an: 2,
    at: "PC coordinates: axes = eigenvectors of Σ; aligned with max-variance directions; components uncorrelated; ordered by λ₁ ≥ λ₂ ≥ ...",
    sl: "Slide 53 two-column contrast + 'What We've Learned' checklist: matrices transform vectors; eigenvectors only stretch; λ measures stretching; for Σ: eigenvectors = PCs, eigenvalues = variances; PCA gives a new coordinate system.",
    ex: "Uncorrelated components follow from orthogonal eigenvectors.",
    mt: "Saying original features are uncorrelated — that's exactly what PCA fixes." });

  Q({ id: "L2-55-Q1", lec: L, pg: [55], tp: "PCA algorithm", sb: "Four steps", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which sequence is the four-step PCA algorithm?",
    op: [
      "Project → center → eigen → covariance",
      "Center the data → compute covariance matrix Σ = XᵀX/(n−1) → find eigenvectors sorted by eigenvalue → project data onto top-k eigenvectors",
      "Standardize → cluster → eigen → plot",
      "Covariance → center → project → sort eigenvalues"
    ], an: 1,
    at: "1) Center the data; 2) compute covariance Σ = XᵀX/(n−1) (X centered); 3) find eigenvectors/eigenvalues, sort by eigenvalue; 4) project centered data onto top k eigenvectors → k-dimensional representation.",
    sl: "Slide 55 four numbered steps with descriptions.",
    ex: "Memorize this order — midterm PCA questions assume centered data before projection.",
    mt: "Projecting before centering, or computing covariance before centering." });

  Q({ id: "L2-56-Q1", lec: L, pg: [56], tp: "PCA algorithm", sb: "Centering", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which of the four 'why center?' reasons is given?",
    op: [
      "Centering removes outliers automatically",
      "Definitional necessity (covariance is defined relative to the mean); separates location from shape; translation invariance; removes the mean's outer-product contribution that can change principal directions",
      "Centering converts categorical to numerical data",
      "Centering normalizes variances to 1"
    ], an: 1,
    at: "Four reasons: definitional necessity; separates location from shape; translation invariance (PCA directions should depend only on internal structure); removes the mean contribution (the uncentered product includes the mean's outer product).",
    sl: "Slide 56: EQ9 centering (subtract per-feature mean) + the four reasons.",
    ex: "Demo 4's intriguing question: 'What happens if you don't center before PCA?' You can test with the CTA.",
    mt: "Confusing centering (subtract mean) with standardizing (also divide by std)." });

  Q({ id: "L2-57-Q1", lec: L, pg: [57], tp: "PCA algorithm", sb: "Covariance step", df: "medium", ty: "short", so: "lecture",
    pr: "Give the covariance-matrix formula for centered data and the numpy code shown.",
    at: "Σ = XᵀX/(n−1) where X is the centered n×p matrix; Σ is p×p with Σij = Cov(feature i, feature j) — diagonal = variances, off-diagonal = covariances. NumPy: X_centered = X − X.mean(axis=0); cov_matrix = np.cov(X_centered.T) (the .T because np.cov expects features as rows).",
    sl: "Slide 57: EQ10 + recall box + Python snippet.",
    ex: "The (n−1) denominator is the sample-covariance convention (Demo 2).",
    mt: "Forgetting the transpose in np.cov — without it you get an n×n observation covariance." });

  Q({ id: "L2-58-Q1", lec: L, pg: [58], tp: "PCA algorithm", sb: "Eigen step", df: "medium", ty: "mcq", so: "lecture",
    pr: "What must you do after computing eigenvectors and eigenvalues, and why?",
    op: [
      "Nothing — numpy returns them in order",
      "Sort eigenvectors by eigenvalue (largest first) — the ordering defines PC1, PC2, ...; the largest-eigenvalue eigenvector is PC1",
      "Normalize eigenvalues to sum to 1",
      "Take only the smallest eigenvalues"
    ], an: 1,
    at: "Sort eigenvectors by their eigenvalues, largest first. The eigenvector with the largest eigenvalue is PC1. Sum of all λi = total variance.",
    sl: "Slide 58: eigenvector/eigenvalue descriptions + critical sorting note + numpy snippet (np.linalg.eigh, np.argsort(eigenvalues)[::-1]).",
    ex: "np.linalg.eigh is used because Σ is symmetric (faster, guaranteed real eigenvalues).",
    mt: "Forgetting to sort — unsorted output would mislabel PC1/PC2 and break EVR interpretation." });

  Q({ id: "L2-59-Q1", lec: L, pg: [59], tp: "PCA algorithm", sb: "Projection", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the projection step Z = X_centered @ W_k, what are the shapes of X_centered, W_k, and Z?",
    op: [
      "n×p, p×k, n×k — reduced from p to k dimensions",
      "n×k, k×p, n×p",
      "p×p, p×k, p×k",
      "n×n, n×k, n×k"
    ], an: 0,
    at: "X_centered is n×p, W_k is p×k (first k eigenvectors as columns), so Z is n×k — reduced from p to k dimensions. Z[:,0] = PC1 scores, Z[:,1] = PC2 scores, etc.",
    sl: "Slide 59: EQ11 projection + what it means + numpy snippet (W_k = eigenvectors[:, :k]; Z = X_centered @ W_k).",
    ex: "Each row of Z is the original data point expressed in PC coordinates.",
    mt: "Reversing the multiplication order or using uncentered X." });

  
  Q({ id: "L2-61-Q1", lec: L, pg: [61], tp: "PCA", sb: "Iris walkthrough", df: "hard", ty: "calc", so: "lecture",
    pr: "For standardized Iris (150×4), PCA gives λ = 2.938, 0.920, 0.148, 0.021. Compute the EVR of each component and the cumulative variance for PC1+PC2.",
    at: "Total = 2.938+0.920+0.148+0.021 = 4.027. EVR₁ = 2.938/4.027 ≈ 72.96%; EVR₂ = 0.920/4.027 ≈ 22.85%; EVR₃ ≈ 3.67%; EVR₄ ≈ 0.52%. Cumulative PC1+PC2 ≈ 95.81%.",
    sl: "Slide 61 steps: standardize → 4×4 covariance → eigenvalues (given) → project keep top 2: Z = X_scaled·W₂ is 150×2, retaining 95.81% of standardized variance.",
    ex: "Result: we can visualize the 4D Iris data in 2D.",
    mt: "Using the wrong total (the sum is 4.027, not 4.0 — and for standardized data the total equals p = 4 only in the population limit).",
    mr: "MT-1c-i" });

  
  
  Q({ id: "L2-65-Q1", lec: L, pg: [65], tp: "PCA", sb: "Creates vs selects", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about PCA features is correct?",
    op: [
      "PCA selects a subset of the original features",
      "PCA creates NEW features (weighted sums of all original features); feature selection is a different technique",
      "Principal components equal the original features when standardized",
      "PCA drops features with low eigenvalues, keeping the rest unchanged"
    ], an: 1,
    at: "PCA creates NEW features (linear combinations of originals), not subsets. Principal components are weighted sums of all original features. Feature selection picks a subset — a different technique. Covariance PCA uses centered features; scaling choice depends on units and task.",
    sl: "Slide 65 content insight + collaboration pattern (state confusion explicitly; ask clarification; request analogies; test understanding) + VERIFY (Examine/Refine/Yield).",
    ex: "Meta-lesson: confusion is valuable data — fix misconceptions early before they compound.",
    mt: "Confusing PCA (feature construction) with Lasso (feature selection, L5)." });

  Q({ id: "L2-67-Q1", lec: L, pg: [67], tp: "PCA selection", sb: "EVR definition", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the explained variance ratio and its key properties?",
    op: [
      "The raw eigenvalue of component i; sums to the number of features",
      "The proportion of total variance captured by component i: λᵢ/Σλⱼ; all EVRs sum to 1.0; choose k to capture 'enough' variance",
      "The ratio of two eigenvalues",
      "The accuracy of the reduced model"
    ], an: 1,
    at: "EVRᵢ = λᵢ/Σλⱼ — proportion of total variance captured by component i. Example: EVR₁ = 0.73 (73%), EVR₂ = 0.23, EVR₁+EVR₂ = 0.96. All EVRs sum to 1.0.",
    sl: "Slide 67: EQ13 EVR + interpretation examples + key line 'Choose k components to capture enough variance.'",
    ex: "This is the exact formula used in midterm 1(c) with λ = 4, 1.5, 0.3, 0.2.",
    mt: "Normalizing by p or by the largest eigenvalue instead of the eigenvalue sum.",
    mr: "MT-1c-i" });

  Q({ id: "L2-68-Q1", lec: L, pg: [68], tp: "PCA selection", sb: "Scree plot", df: "medium", ty: "mcq", so: "lecture",
    pr: "How do you read a scree plot?",
    op: [
      "Keep components after the elbow",
      "Look for the 'elbow' where the curve flattens; components before the elbow capture most variance; after the elbow they add little new information",
      "Always keep exactly 2 components",
      "The plot shows accuracy vs components"
    ], an: 1,
    at: "Named after 'scree' (rocky debris at a cliff base). Find the elbow where the slope changes; components before it capture most variance; components after add little. For standardized Iris, 2 components retain 95.81%.",
    sl: "Slide 68 scree plot figure + reading guide + elbow-method note.",
    ex: "The elbow method is a visual heuristic; the 90% rule is a quantitative one (slide 70).",
    mt: "Confusing elbow selection with the 90% rule — both are heuristics used together." });

  
  Q({ id: "L2-70-Q1", lec: L, pg: [70], tp: "PCA selection", sb: "90% rule", df: "medium", ty: "mcq", so: "lecture",
    pr: "State the 90% rule of thumb and its caution.",
    op: [
      "Keep all components; 90% is the maximum allowed",
      "Keep enough components to explain at least 90% of total variance (95% conservative, 80% for compression); but 90% is arbitrary — the right threshold depends on the application; for prediction, select the count using task validation",
      "Keep exactly 9 of 10 components",
      "90% refers to model accuracy"
    ], an: 1,
    at: "Keep enough components to explain ≥ 90% of total variance (or 95% conservative; 80% if prioritizing compression). Caution: 90% is arbitrary; for visualization 80% may suffice; for prediction select the count using task validation.",
    sl: "Slide 70 rule + Python (PCA(n_components=0.90); manual cumulative searchsorted) + caution box.",
    ex: "Midterm 1(c)(iii) applies this rule: keep 2 components (91.67% ≥ 90%).",
    mt: "Treating 90% as a law — the slide explicitly calls it arbitrary.",
    mr: "MT-1c-iii" });

  
  Q({ id: "L2-72-Q1", lec: L, pg: [72], tp: "PCA limitations", sb: "Variance ≠ importance", df: "hard", ty: "mcq", so: "lecture",
    pr: "What is the variance limitation of PCA illustrated?",
    op: [
      "Variance can be negative",
      "High-variance directions may be noise, task-relevant signal may have low variance — e.g., PC1 captures 90% variance but doesn't separate classes; PC3 captures 2% but perfectly separates them; for classification PC3 is more valuable",
      "PCA cannot reduce more than 2 dimensions",
      "Variance always equals classification accuracy"
    ], an: 1,
    at: "PCA maximizes retained variance, but usefulness depends on the task: signal may have low variance; high-variance directions may be noise; downstream tasks may need the 'unimportant' components. Example: if PC3 (2% variance) separates classes but PC1 (90%) doesn't, PC3 is more valuable for classification. Key insight: always validate PCA on your actual task (classification accuracy, reconstruction error), not just explained variance.",
    sl: "Slide 72 warning + classification example + key insight box.",
    ex: "Considers LDA as supervised alternative (slide 75) — PCA is unsupervised and doesn't know labels.",
    mt: "Assuming the 90% rule guarantees a good reduced representation for downstream tasks." });

  
  
  
  
  
  })();
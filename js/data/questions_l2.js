/* Question bank — Lecture 2 (pages 1–80).
   Distances/similarities, covariance, eigen-decomposition, PCA algorithm and interpretation. */
(function () {
  var L = 2;

  Q({ id: "L2-3-Q1", lec: L, pg: [3], tp: "Geometric view", sb: "Data as points", df: "easy", ty: "short", so: "lecture",
    pr: "What is the central metaphor of Lecture 2 for a dataset, and which dataset is used as the running example?",
    at: "\u201cEvery dataset is a cloud of points floating in space.\u201d The Iris dataset (three species of flowers as points in 3D space) is the running example (UCI ML repo).",
    sl: "Slide 3 quote + [FIGURE 1: 3D Iris Scatter Plot]. UCI link: archive.ics.uci.edu/dataset/53/iris.",
    ex: "Today's goal: see data this way and extract meaning from it.",
    mt: "Thinking of rows as rows of a spreadsheet rather than points in p-dimensional space." });

  Q({ id: "L2-4-Q1", lec: L, pg: [4], tp: "Objectives", sb: "Lecture roadmap", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which of the following is one of the five stated learning objectives of Lecture 2?",
    op: [
      "Prove Bayes' theorem from first principles",
      "Apply PCA to reduce dimensionality and understand why eigenvectors define components",
      "Implement gradient boosting from scratch",
      "Derive the Kalman filter"
    ], an: 1,
    at: "Apply PCA to reduce dimensionality — understand why eigenvectors define components.",
    sl: "Slide 4 objectives: (1) represent datasets as matrices and compute distances/similarities; (2) explain how the covariance matrix captures feature relationships; (3) apply PCA — why eigenvectors define components; (4) interpret PCA results by selecting components using explained variance; (5) practice CTA collaboration.",
    ex: "Key insight: linear algebra transforms data from spreadsheet rows into geometric objects you can measure and manipulate.",
    mt: "Missing that PCA interpretation (EVR selection) is a separate objective from the PCA mechanics." });

  Q({ id: "L2-6-Q1", lec: L, pg: [6], tp: "Connections", sb: "Course links", df: "easy", ty: "short", so: "lecture",
    pr: "Give three course connections listed on slide 6 (which lectures use linear algebra and how).",
    at: "Lecture 3: covariance connects to joint distributions. Lecture 5: solving normal equations uses linear algebra. Lecture 6: linear classifiers have hyperplane boundaries. Lecture 7 (Embeddings): similarity search uses vector distances. Lecture 10: attention is matrix multiplication.",
    sl: "Slide 6 lists five connections; any three suffice.",
    ex: "The slide notes the CTA will help explore these through demonstrations.",
    mt: "Claiming linear algebra is only needed for PCA — it underpins regression, classifiers, embeddings, and attention." });

  Q({ id: "L2-7-Q1", lec: L, pg: [7], tp: "Data matrices", sb: "DataFrame vs matrix", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the key distinction between a spreadsheet and a matrix (slide 7)?",
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
    pr: "What does each column represent, and what does the slide note about columns that 'will matter for PCA'?",
    at: "Each column is one measurement (feature) across all observations. Each column has its own distribution, mean, and variance — this matters for PCA (centering uses per-feature means; covariance is computed from column deviations).",
    sl: "Slide 10 [FIGURE 5: Column Highlighted with Distribution] — histogram of sepal length.",
    ex: "The per-column variance appears on the covariance matrix diagonal (slide 31).",
    mt: "Forgetting that centering is per column (subtract each feature's mean)." });

  Q({ id: "L2-11-Q1", lec: L, pg: [11], tp: "Geometric view", sb: "Cloud of points", df: "easy", ty: "short", so: "lecture",
    pr: "State the key insight of slide 11 and what the 2D plot shows for Iris.",
    at: "Each row xi is a point in p-dimensional space; your dataset is a cloud of n points. For Iris, each flower is a point in 4D space (the slide shows a 2D projection: sepal length vs sepal width).",
    sl: "Slide 11 key insight + [FIGURE 6: 2D Scatter — Rows as Points].",
    ex: "This geometric view is what makes distances/angles meaningful.",
    mt: "Treating the 2D plot as the full data — it is a projection of 4D." });

  Q({ id: "L2-12-Q1", lec: L, pg: [12], tp: "High dimensions", sb: "Curse of dimensionality", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pairing of dataset and dimensionality is correct (slide 12)?",
    op: [
      "MNIST digits — 784 dimensions (28×28 pixels)",
      "Gene expression — 784 dimensions",
      "Iris — 300 dimensions",
      "Word embeddings — 20,000 dimensions"
    ], an: 0,
    at: "MNIST: 784 dimensions (28×28 pixels, one per pixel). Gene expression: ~20,000 (one per gene). Word embeddings: e.g. 300 dimensions. Iris: 4.",
    sl: "Slide 12 table + Curse of Dimensionality preview: distances become similar, data becomes sparse, nearest neighbors lose meaning — we need to reduce dimensionality (e.g., PCA).",
    ex: "The curse preview is fully developed in slides 40–41.",
    mt: "Mixing up gene expression (~20,000) and MNIST (784)." });

  Q({ id: "L2-13-Q1", lec: L, pg: [13], tp: "Geometric view", sb: "Why it matters", df: "easy", ty: "short", so: "lecture",
    pr: "What three capabilities does the geometric view unlock (slide 13)?",
    at: "Measure distances (quantify similarity between data points); find structure (identify relationships between features); reduce dimensions (find directions that matter most).",
    sl: "Slide 13 three bullets + key insight: Spreadsheet → Matrix → Points in Space.",
    ex: "The entire linear algebra toolkit becomes available after this transformation.",
    mt: "Listing only 'reduce dimensions' — all three capabilities matter." });

  Q({ id: "L2-15-Q1", lec: L, pg: [15], tp: "Distances", sb: "Euclidean", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which property set correctly describes Euclidean distance on slide 15?",
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
    pr: "Which statement about cosine similarity is correct per slide 17?",
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
    pr: "Explain the key insight of slide 19: with points A, B, C where B is closest to A by Euclidean distance and C is closest by cosine similarity.",
    at: "Euclidean cares about absolute position in space; cosine cares about direction from origin. Neither is 'better' — the right choice depends on what similarity means for your problem.",
    sl: "Slide 19 [FIGURE 9: Euclidean vs. Cosine Comparison] with three points A, B, C.",
    ex: "This figure anticipates the review example (slide 21) where Euclidean prefers C and cosine prefers B.",
    mt: "Asserting one metric is universally superior." });

  Q({ id: "L2-20-Q1", lec: L, pg: [20], tp: "Distances", sb: "Choosing a metric", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which use-case pairing is correct from slide 20's table?",
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

  Q({ id: "L2-22-Q1", lec: L, pg: [22], tp: "CTA patterns", sb: "Iterative refinement", df: "medium", ty: "short", so: "lecture",
    pr: "List the four key questions of CTA Demo 1 (iterative refinement for distance metrics) and the collaboration pattern + VERIFY steps used.",
    at: "Questions: (1) When should I use Euclidean vs cosine? (2) Give a concrete example where they rank pairs differently. (3) For text data specifically — which do you recommend? (4) Let's verify with code: create vectors where they disagree. Pattern: Iterative Refinement; VERIFY: Examine, Investigate, Validate.",
    sl: "Slide 22 four numbered questions + pattern/VERIFY footer.",
    ex: "The method: start broad → get specific → ask for examples → verify with code — building understanding through conversation, not memorization.",
    mt: "Asking 'what is cosine similarity' and stopping — the pattern demands verification with code." });

  Q({ id: "L2-24-Q1", lec: L, pg: [24], tp: "CTA patterns", sb: "Demo 1 takeaways", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which content insight is NOT from Demo 1 takeaways (slide 24)?",
    op: [
      "Euclidean: use when absolute magnitude matters",
      "Cosine: use when direction matters more than scale",
      "The choice is a modeling decision defining 'similar'",
      "NumPy's np.cov() uses n−1 by default"
    ], an: 3,
    at: "np.cov()'s n−1 default belongs to Demo 2 takeaways (slide 36), not Demo 1.",
    sl: "Slide 24 takeaways: Euclidean for magnitude; cosine for direction; the choice is a modeling decision; collaboration pattern = iterative refinement (start broad, follow up, verify with code); VERIFY: Examine/Investigate/Validate.",
    ex: "Demo 1 is about distance metrics; n vs n−1 is a covariance-computation subtlety from Demo 2.",
    mt: "Attributing covariance facts to the distance-metric demo." });

  Q({ id: "L2-25-Q1", lec: L, pg: [25], tp: "Covariance", sb: "Rows vs columns", df: "medium", ty: "short", so: "lecture",
    pr: "What transition does slide 25 describe from distances to the covariance matrix, and what is 'the key question'?",
    at: "Transition: from comparing rows (how similar are two observations — distances/similarities) to comparing columns (how do features relate — covariance matrix). Key question: when one feature increases, what happens to other features? Do they increase together, decrease, or move independently? The covariance matrix captures the 'shape' of the data cloud — essential for PCA.",
    sl: "Slide 25 arrow diagram Distances & Similarities → Covariance Matrix + key question box.",
    ex: "This is the pivot of the lecture from measuring points to measuring features.",
    mt: "Confusing row-wise similarity (distance) with column-wise relationship (covariance)." });

  Q({ id: "L2-26-Q1", lec: L, pg: [26], tp: "Covariance", sb: "Variance and Bessel", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why does the sample variance use n−1 instead of n (slide 26)?",
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
    pr: "Which interpretation of covariance sign is correct (slide 28)?",
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
    pr: "What does the covariance scatter-plot trio (slide 29) show, and what is the key insight about the third panel?",
    at: "Three panels: positive covariance (upward trend), negative covariance (downward trend), near-zero covariance (no trend/circular). Key insight: zero covariance does not imply independence — in the third panel Y is completely determined by X, yet covariance is zero.",
    sl: "Slide 29 [FIGURE 11: Covariance Scatter Plot Trio] with three panels; note magnitude depends on units.",
    ex: "The classic zero-covariance-yet-dependent example is a symmetric pattern (e.g., Y = X² around zero).",
    mt: "Treating the zero-covariance panel as 'independent variables'.", mr: "MT-1b-i" });

  Q({ id: "L2-30-Q1", lec: L, pg: [30], tp: "Covariance", sb: "Simpler case", df: "easy", ty: "short", so: "lecture",
    pr: "What does the repeated 'Visualizing Covariance — Let's see a simpler case!' slide (30) emphasize?",
    at: "It repeats the same trio figure and the key insight: zero covariance does not imply independence — Y is completely determined by X in the third panel yet covariance is zero. The 'simpler case' addition signals the instructor walks through an easier example of the same phenomenon.",
    sl: "Slide 30 duplicates slide 29's figure and insight with the subtitle 'Let's see a simpler case!'.",
    ex: "Content is identical to slide 29 — a deliberate repetition for emphasis.",
    mt: "Assuming slide 30 introduces new content — it is a repetition." });

  Q({ id: "L2-31-Q1", lec: L, pg: [31], tp: "Covariance matrix", sb: "Structure/properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which property set of the covariance matrix Σ is correct (slide 31)?",
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
    pr: "What three observations do we make reading the Iris covariance matrix heatmap (slide 32)?",
    at: "1) Petal length & width have high positive covariance (bright cells); 2) sepal width has low covariance with petals (dim); 3) the diagonal shows variances — petal length has the highest. Key insight: the covariance matrix reveals which features 'move together' — exactly what PCA exploits.",
    sl: "Slide 32 [FIGURE 12: Iris Covariance Matrix Heatmap] 4×4 with color scale.",
    ex: "This 'moves together' reading motivates finding directions of maximum variance.",
    mt: "Reading the heatmap diagonals as covariances — diagonal cells are variances." });

  Q({ id: "L2-33-Q1", lec: L, pg: [33], tp: "Covariance matrix", sb: "Data cloud shape", df: "medium", ty: "short", so: "lecture",
    pr: "Explain the 'shape of data' bridge to PCA from slide 33.",
    at: "The covariance matrix describes the ellipsoid shape of the data cloud; the ellipse axes point in the directions of the eigenvectors of Σ — these are the principal components. The covariance matrix encodes the 'shape' of your data cloud.",
    sl: "Slide 33 [FIGURE 13: Data Cloud with Covariance Ellipse] — 2D scatter with overlaid ellipse.",
    ex: "This is the bridge from Part 1 to PCA: eigenvectors of Σ = principal axes of the ellipsoid = maximal-variance directions.",
    mt: "Saying eigenvectors point to the data mean — they point along the ellipse axes through the (centered) cloud." });

  Q({ id: "L2-34-Q1", lec: L, pg: [34], tp: "CTA patterns", sb: "Verifying code", df: "medium", ty: "short", so: "lecture",
    pr: "Describe the verification process used in Demo 2 (slide 34) for a CTA-written covariance computation.",
    at: "Prompt: 'Write Python code that loads the Iris dataset and computes its covariance matrix. Explain what each step does and what the output tells us.' Verification process: (1) run the code — does it execute without errors? (2) check the output — is it a 4×4 symmetric matrix? are diagonal values positive? (3) sanity check — do high covariances match expectations from scatter plots?",
    sl: "Slide 34 structured prompt + three verification steps + pattern label 'Verifying CTA-Generated Code'; VERIFY: Validate, Examine, Investigate.",
    ex: "Verification is a recurring workflow: ask → run → check → sanity-check.",
    mt: "Accepting a plausible-looking matrix without checking symmetry and positive diagonal." });

  Q({ id: "L2-36-Q1", lec: L, pg: [36], tp: "CTA patterns", sb: "n vs n−1", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the Demo 2 content insight about n vs n−1 (slide 36)?",
    op: [
      "Population covariance uses n−1; sample covariance uses n",
      "Population covariance uses n; sample covariance uses n−1 (Bessel's correction); NumPy np.cov() uses n−1 by default; the choice affects statistical inference",
      "Both use n and it never matters",
      "np.cov() uses n by default"
    ], an: 1,
    at: "Population covariance uses n; sample covariance uses n−1 (Bessel's correction). np.cov() uses n−1 by default. Always know which you're using — it affects statistical inference.",
    sl: "Slide 36 takeaways: content insight (n vs n−1) + collaboration pattern (verification through computation: ask for step-by-step work, verify independently, discrepancies are learning opportunities) + VERIFY note (Flag the unstated n vs n−1 assumption).",
    ex: "Meta-lesson: 'Verification isn't about distrust — it's about understanding.'",
    mt: "Swapping which denominator belongs to population vs sample." });

  Q({ id: "L2-37-Q1", lec: L, pg: [37], tp: "Summary", sb: "Part 1 recap", df: "easy", ty: "short", so: "lecture",
    pr: "List the three transformations of Part 1 and the tools acquired (slide 37).",
    at: "Transformations: Spreadsheet → Matrix (data becomes a mathematical object); Matrix → Points in Space (each row is a point in p-dimensional space); Points → Covariance Structure (the covariance matrix captures how features relate). Tools: Euclidean distance & cosine similarity; variance & covariance; the covariance matrix.",
    sl: "Slide 37 three blocks + tools list.",
    ex: "This recap sets up Part 2: finding directions that matter most.",
    mt: "Omitting the covariance-structure step." });

  Q({ id: "L2-38-Q1", lec: L, pg: [38], tp: "PCA", sb: "Part 2 preview", df: "easy", ty: "short", so: "lecture",
    pr: "State the central question of Part 2 and the four upcoming topics (slide 38).",
    at: "Central question: the covariance matrix captures 'shape' — but which directions capture the MOST variance? How do we find them, and use them to reduce dimensionality? Topics: Eigenvectors & eigenvalues (special directions); the PCA algorithm (center → covariance → eigenvectors → project); interpreting components; selecting components (90% rule and beyond).",
    sl: "Slide 38 question box + four bullets + CTA note.",
    ex: "The four-part path (matrix transformations → eigen → connection to covariance → algorithm) structures slides 44–59.",
    mt: "Forgetting the ordering of the PCA algorithm: center first, then covariance." });

  Q({ id: "L2-40-Q1", lec: L, pg: [40], tp: "PCA", sb: "High-dimensional examples", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which high-dimensional example pairing is correct (slide 40)?",
    op: [
      "Text bag-of-words — 784 dimensions",
      "Sensor networks — 10,000+ dimensions",
      "Gene expression — ~20,000 dimensions (one per gene)",
      "Financial data — 1 dimension"
    ], an: 2,
    at: "Gene expression ~20,000 (one dimension per gene); MNIST 784 (28×28 pixels); text 10,000+ (one per vocabulary word); sensor networks 100s–1000s; financial 100s.",
    sl: "Slide 40 table of five examples + the central question: how do we work with data when p ≫ 3 or even p ≫ n?",
    ex: "The p ≫ n case matters later for regularization (L5: 100+ features, 20,640 observations).",
    mt: "Mixing up bag-of-words (10,000+) with gene expression (~20,000) — both large but distinct examples." });

  Q({ id: "L2-41-Q1", lec: L, pg: [41], tp: "PCA", sb: "Curse of dimensionality", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which is NOT one of the three curse-of-dimensionality effects on slide 41?",
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
    pr: "Give the three motivations for dimensionality reduction (slide 42).",
    at: "Visualization (we can only see in 2D/3D; project down while preserving structure); Computation (algorithms scale poorly with dimensions, O(p²) or worse; reducing p speeds up training); Generalization (more features = more parameters = more overfitting risk; reducing dimensions can improve generalization).",
    sl: "Slide 42 three blocks + closing question: 'But how do we reduce dimensions without losing important information?'",
    ex: "Generalization motivation links directly to L5's bias-variance discussion.",
    mt: "Listing only visualization." });

  Q({ id: "L2-43-Q1", lec: L, pg: [43], tp: "PCA", sb: "Core insight", df: "medium", ty: "short", so: "lecture",
    pr: "State PCA's core insight and the cigar-shaped cloud intuition (slide 43).",
    at: "Core insight: not all directions in feature space are equally important — some capture lots of variation, others almost none. Project onto high-variance directions, ignore low-variance ones, and you reduce dimensions while keeping the 'signal'. Cigar-shaped cloud: the long axis captures most variance, the short axis little; PCA finds these axes automatically.",
    sl: "Slide 43 core-insight box + [Conceptual: elongated ellipse with PC1 along long axis, PC2 along short axis].",
    ex: "Next question posed on the slide: how do we find these maximum-variance directions mathematically? Answer: eigenvectors of the covariance matrix.",
    mt: "Believing PCA picks subsets of original features — it finds new directions (slide 65: 'PCA creates, doesn't select')." });

  Q({ id: "L2-44-Q1", lec: L, pg: [44], tp: "PCA", sb: "Path to the answer", df: "easy", ty: "short", so: "lecture",
    pr: "What is 'the key question' of slide 44 and the four-step path to the answer?",
    at: "Question: 'Which directions in feature space capture the most variance?' — a mathematical optimization problem whose answer comes from linear algebra: eigenvectors of the covariance matrix. Path: (1) matrix transformations; (2) eigenvectors & eigenvalues; (3) connection to covariance; (4) the PCA algorithm.",
    sl: "Slide 44 question + four numbered path steps.",
    ex: "This 'eigenvectors of Σ solve the optimization' is the theoretical heart of PCA.",
    mt: "Jumping to the algorithm without the eigen-connection." });

  Q({ id: "L2-45-Q1", lec: L, pg: [45], tp: "Eigen", sb: "Matrix transformations", df: "medium", ty: "short", so: "lecture",
    pr: "What does the key observation on slide 45 say about matrix transformations and eigenvectors?",
    at: "Most vectors get both stretched AND rotated by a matrix. But some special vectors only get stretched (or compressed) — their direction doesn't change. These are the eigenvectors.",
    sl: "Slide 45 key observation box (accompanied by transformation visual).",
    ex: "This 'only stretch, no rotate' property is the definition intuition behind Σv = λv.",
    mt: "Assuming all vectors merely scale — in general a matrix rotates and scales." });

  Q({ id: "L2-46-Q1", lec: L, pg: [46], tp: "Eigen", sb: "Eigenvalue equation", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which equation is the eigenvalue equation, and what does it mean (slide 46)?",
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
    pr: "Which eigenvalue interpretation is correct (slide 47)?",
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

  Q({ id: "L2-48-Q1", lec: L, pg: [48], tp: "Eigen", sb: "Visual", df: "easy", ty: "short", so: "lecture",
    pr: "Describe what the eigenvector visualization on slide 48 shows.",
    at: "Multiple vectors before and after a transformation: most vectors change direction (gray arrows rotate); eigenvectors only change length, same direction (colored arrows). Two eigenvector directions are clearly highlighted, pointing along the 'natural axes' of the transformation — the directions the ellipse is stretched along.",
    sl: "Slide 48 [FIGURE 15: Eigenvector Visualization].",
    ex: "Ties the algebra (Σv = λv) to the geometry (ellipse stretching).",
    mt: "Looking for eigenvectors among the rotating arrows — they are the non-rotating ones." });

  Q({ id: "L2-49-Q1", lec: L, pg: [49], tp: "Eigen", sb: "Covariance eigen properties", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why does the covariance matrix have real, non-negative eigenvalues and orthogonal eigenvectors (slide 49)?",
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
    pr: "State the key theorem on slide 50 and what it implies about eigenvalues.",
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
    pr: "Which translation from eigen concept to PCA interpretation is correct (slide 51)?",
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

  Q({ id: "L2-52-Q1", lec: L, pg: [52], tp: "PCA", sb: "2D visualization", df: "medium", ty: "short", so: "lecture",
    pr: "Describe the canonical PCA visualization (slide 52) and what to see in it.",
    at: "A scatter plot with a tilted elliptical cloud; PC1 arrow along the long axis (captures most variance); PC2 arrow along the short axis, orthogonal to PC1; annotations show eigenvalues and explained-variance %. Together they form a new coordinate system aligned with the data's natural structure, not the original feature axes.",
    sl: "Slide 52 [FIGURE 16: PCA on 2D Data — Canonical Visualization].",
    ex: "PC1 points along the direction of maximum spread; PC2 is perpendicular.",
    mt: "Assuming PCs stay parallel to original axes — they rotate to align with the cloud." });

  Q({ id: "L2-53-Q1", lec: L, pg: [53], tp: "PCA", sb: "New coordinate system", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which contrast between original coordinates and PC coordinates is correct (slide 53)?",
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
    pr: "Which sequence is the four-step PCA algorithm (slide 55)?",
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
    pr: "Which of the four 'why center?' reasons is given on slide 56?",
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
    pr: "Give the covariance-matrix formula for centered data (slide 57) and the numpy code shown.",
    at: "Σ = XᵀX/(n−1) where X is the centered n×p matrix; Σ is p×p with Σij = Cov(feature i, feature j) — diagonal = variances, off-diagonal = covariances. NumPy: X_centered = X − X.mean(axis=0); cov_matrix = np.cov(X_centered.T) (the .T because np.cov expects features as rows).",
    sl: "Slide 57: EQ10 + recall box + Python snippet.",
    ex: "The (n−1) denominator is the sample-covariance convention (Demo 2).",
    mt: "Forgetting the transpose in np.cov — without it you get an n×n observation covariance." });

  Q({ id: "L2-58-Q1", lec: L, pg: [58], tp: "PCA algorithm", sb: "Eigen step", df: "medium", ty: "mcq", so: "lecture",
    pr: "What must you do after computing eigenvectors and eigenvalues, and why (slide 58)?",
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
    pr: "In the projection step Z = X_centered @ W_k, what are the shapes of X_centered, W_k, and Z (slide 59)?",
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

  Q({ id: "L2-60-Q1", lec: L, pg: [60], tp: "PCA algorithm", sb: "Implementation", df: "medium", ty: "short", so: "lecture",
    pr: "Summarize the complete pca(X, k) implementation on slide 60 and the practical note.",
    at: "def pca(X, k): center (X − X.mean(axis=0)); cov_matrix = np.cov(X_centered.T); eigenvalues, eigenvectors = np.linalg.eigh(cov_matrix); sort descending with np.argsort(eigenvalues)[::-1]; W_k = eigenvectors[:, :k]; Z = X_centered @ W_k; return Z, eigenvalues, eigenvectors. Practical note: use sklearn.decomposition.PCA in practice — but understanding this code is essential.",
    sl: "Slide 60 full code block.",
    ex: "The four steps map one-to-one onto the code lines.",
    mt: "Using np.linalg.eig instead of eigh (eig is fine but eigh exploits symmetry and returns ascending order — remember to sort)." });

  Q({ id: "L2-61-Q1", lec: L, pg: [61], tp: "PCA", sb: "Iris walkthrough", df: "hard", ty: "calc", so: "lecture",
    pr: "For standardized Iris (150×4), PCA gives λ = 2.938, 0.920, 0.148, 0.021. Compute the EVR of each component and the cumulative variance for PC1+PC2.",
    at: "Total = 2.938+0.920+0.148+0.021 = 4.027. EVR₁ = 2.938/4.027 ≈ 72.96%; EVR₂ = 0.920/4.027 ≈ 22.85%; EVR₃ ≈ 3.67%; EVR₄ ≈ 0.52%. Cumulative PC1+PC2 ≈ 95.81%.",
    sl: "Slide 61 steps: standardize → 4×4 covariance → eigenvalues (given) → project keep top 2: Z = X_scaled·W₂ is 150×2, retaining 95.81% of standardized variance.",
    ex: "Result: we can visualize the 4D Iris data in 2D.",
    mt: "Using the wrong total (the sum is 4.027, not 4.0 — and for standardized data the total equals p = 4 only in the population limit).",
    mr: "MT-1c-i" });

  Q({ id: "L2-62-Q1", lec: L, pg: [62], tp: "PCA", sb: "Iris scatter", df: "medium", ty: "short", so: "lecture",
    pr: "What does the Iris PCA scatter plot (PC1 vs PC2) show, and what is the key insight (slide 62)?",
    at: "150 flowers projected onto two principal axes, colored by species (setosa, versicolor, virginica): clear cluster separation, especially setosa; axes annotated PC1 (73% variance), PC2 (~4-23% depending on version shown). Key insight: the species cluster structure was hidden in 4D; PCA reveals it by finding the 2D projection retaining the most variance.",
    sl: "Slide 62 [FIGURE 18: Iris PCA Scatter Plot].",
    ex: "Note the axis-labeling discrepancy in the deck (PC1 73%, PC2 4% on the figure vs 22.85% in the table on slide 61/69) — trust the table's eigen-decomposition numbers when computing.",
    mt: "Assuming PCA uses labels to separate species — PCA is unsupervised; separation emerges from variance structure." });

  Q({ id: "L2-63-Q1", lec: L, pg: [63], tp: "CTA patterns", sb: "Debugging understanding", df: "medium", ty: "short", so: "lecture",
    pr: "List the common confusions Demo 3 addresses (slide 63) and the collaboration pattern used.",
    at: "Confusions: 'Are principal components the same as original features?'; 'Does PCA pick features to drop, or create new ones?'; 'Why do we center but not always standardize?'; 'Is explained variance the same as accuracy?' Pattern: Debugging Understanding; VERIFY: Examine, Refine, Yield.",
    sl: "Slide 63 four quoted confusions + pattern and VERIFY labels.",
    ex: "The resolution (slide 65): PCA creates new features — linear combinations of originals — and EVR is not accuracy.",
    mt: "Believing explained variance measures prediction quality — it is a variance proxy, validated separately (slide 72)." });

  Q({ id: "L2-65-Q1", lec: L, pg: [65], tp: "PCA", sb: "Creates vs selects", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about PCA features is correct (slide 65)?",
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
    pr: "What is the explained variance ratio and its key properties (slide 67)?",
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
    pr: "How do you read a scree plot (slide 68)?",
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

  Q({ id: "L2-69-Q1", lec: L, pg: [69], tp: "PCA selection", sb: "Cumulative EVR table", df: "medium", ty: "calc", so: "lecture",
    pr: "Reproduce the standardized-Iris cumulative EVR table (slide 69) and state two interpretations.",
    at: "PC1: λ=2.938, EVR 72.96%, cumulative 72.96%; PC2: λ=0.920, EVR 22.85%, cumulative 95.81%; PC3: λ=0.148, EVR 3.67%, cumulative 99.48%; PC4: λ=0.021, EVR 0.52%, cumulative 100%. Interpretations: PC1 alone explains 72.96% of standardized variance; PC1+PC2 explain 95.81%; PC3+PC4 add 4.19% — check whether this matters for the task.",
    sl: "Slide 69 table + interpretation bullets.",
    ex: "Memorize these numbers — they are reused across PCA questions and the scree/elbow discussion.",
    mt: "Rounding cumulative percentages inconsistently so the last row isn't 100%." });

  Q({ id: "L2-70-Q1", lec: L, pg: [70], tp: "PCA selection", sb: "90% rule", df: "medium", ty: "mcq", so: "lecture",
    pr: "State the 90% rule of thumb and its caution (slide 70).",
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

  Q({ id: "L2-71-Q1", lec: L, pg: [71], tp: "PCA selection", sb: "Wine dataset", df: "medium", ty: "short", so: "lecture",
    pr: "What are the Wine dataset PCA results and lesson (slide 71)?",
    at: "Standardized Wine: 178 observations, 13 features. With the 90% threshold: 8 components needed; first 2 PCs retain only 55.41% (vs Iris 95.81%) — variance is spread across more PCs; elbow around component 3–4, with 90% reached at ~6 components (per figure annotation). Lesson: the 'right' number of components is data-dependent.",
    sl: "Slide 71 [FIGURE 19: Wine Dataset Scree Plot] — left: EVR bars; right: cumulative with 90% threshold; results bullets.",
    ex: "The slide contains two slightly different counts (text says 8 components for 90%; the figure annotation reads ~6) — note the discrepancy and trust the explicit computation in your own work.",
    mt: "Expecting Iris-like 2-component reduction for every dataset." });

  Q({ id: "L2-72-Q1", lec: L, pg: [72], tp: "PCA limitations", sb: "Variance ≠ importance", df: "hard", ty: "mcq", so: "lecture",
    pr: "What is the variance limitation of PCA illustrated on slide 72?",
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

  Q({ id: "L2-73-Q1", lec: L, pg: [73], tp: "CTA patterns", sb: "Challenging completeness", df: "medium", ty: "short", so: "lecture",
    pr: "What three questions does Demo 4 (challenging for completeness) ask (slide 73)?",
    at: "(1) 'When would keeping 99% variance still be a bad idea?' (2) 'What if my data has nonlinear structure?' (3) 'Are there alternatives to PCA for dimensionality reduction?' Pattern: Challenging for Completeness; VERIFY: Validate, Investigate, Yield.",
    sl: "Slide 73 question list + goal: build a nuanced understanding that acknowledges when standard advice doesn't apply.",
    ex: "Takeaways on slide 75: linear subspace limits, task-relevant low-variance signal, unsupervised nature, scaling sensitivity.",
    mt: "Accepting the first answer as complete — the pattern is to push for exceptions." });

  Q({ id: "L2-75-Q1", lec: L, pg: [75], tp: "PCA limitations", sb: "Demo 4 takeaways", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which of the four PCA limitations is NOT listed in Demo 4 takeaways (slide 75)?",
    op: [
      "PCA uses a linear subspace; curved structure may need more components",
      "PCA maximizes variance; task-relevant signal can have low variance",
      "PCA is unsupervised — doesn't know your labels (consider LDA for classification)",
      "PCA cannot handle more than 100 features"
    ], an: 3,
    at: "No such limit exists in the slide. The four limitations: linear subspace; variance ≠ task relevance; unsupervised; sensitive to scaling.",
    sl: "Slide 75 content insights + collaboration pattern (don't accept first answer; ask when it fails; push for edge cases; know the boundaries of your tools) + VERIFY (Validate/Investigate/Yield).",
    ex: "Meta-lesson: every technique has assumptions — challenging the CTA to reveal them builds judgment.",
    mt: "Believing PCA fails on high-dimensional data — that is where it is most useful." });

  Q({ id: "L2-76-Q1", lec: L, pg: [76], tp: "Summary", sb: "Five concepts", df: "medium", ty: "short", so: "lecture",
    pr: "List the five key concept takeaways of Lecture 2 (slide 76).",
    at: "1) Data as matrices: rows = observations, columns = features. 2) Geometric intuition: rows are points in p-dimensional space; distances/similarities measure relationships. 3) Covariance & correlation: the covariance matrix captures feature relationships — the 'shape' of the data cloud. 4) Eigenvectors as axes: eigenvectors of Σ point along maximum-variance directions. 5) PCA for reduction: project onto top eigenvectors — center, covariance, eigenvectors, project.",
    sl: "Slide 76 five numbered takeaways.",
    ex: "These five are the exam skeleton for any PCA question.",
    mt: "Omitting the center step in takeaway 5." });

  Q({ id: "L2-77-Q1", lec: L, pg: [77], tp: "CTA patterns", sb: "Four patterns", df: "medium", ty: "mcq", so: "lecture",
    pr: "Match the four CTA collaboration patterns to their demos (slide 77).",
    op: [
      "Exploring Concepts (Demo 1), Verifying Intuitions (Demo 2), Debugging Understanding (Demo 3), Challenging for Completeness (Demo 4)",
      "Debugging (Demo 1), Exploring (Demo 2), Challenging (Demo 3), Verifying (Demo 4)",
      "Verifying (Demo 1), Challenging (Demo 2), Exploring (Demo 3), Debugging (Demo 4)",
      "All four demos use Challenging for Completeness"
    ], an: 0,
    at: "Demo 1 Exploring Concepts (building intuition); Demo 2 Verifying Intuitions (checking understanding/testing predictions); Demo 3 Debugging Understanding (fixing misconceptions); Demo 4 Challenging for Completeness (edge cases/limitations).",
    sl: "Slide 77 pattern table + meta-skill note: transferable skills; know which pattern fits your learning need and always verify.",
    ex: "The table also states each demo's 'when to use'.",
    mt: "Swapping Demos 1 and 2 — Demo 1 is distance metrics (exploring), Demo 2 is covariance code (verifying)." });

  Q({ id: "L2-78-Q1", lec: L, pg: [78], tp: "CTA patterns", sb: "VERIFY (L2 variant)", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the L2 expansion of VERIFY (slide 78)?",
    op: [
      "Validate, Execute, Reason, Inspect, Fix, Yours",
      "Validate, Examine, Refine, Investigate, Find Sources, Yield",
      "Verify, Evaluate, Run, Inspect, Finalize, Yield",
      "Validate, Explore, Refine, Inspect, Fix, Yield"
    ], an: 1,
    at: "Validate (check the AI's response addresses your actual question); Examine (scrutinize claims and reasoning); Refine (follow-ups to fill gaps); Investigate (test with examples/edge cases); Find Sources (cross-reference textbooks/documentation); Yield (synthesize into your own understanding).",
    sl: "Slide 78 six-letter table + 'Make VERIFY a habit'.",
    ex: "L1's VERIFY is Validate/Execute/Reason/Inspect/Fix/Yours; L2 re-educates it for AI-assisted learning. Know both expansions.",
    mt: "Using the L1 expansion when the question explicitly asks for the L2 one (or vice versa)." });

  Q({ id: "L2-79-Q1", lec: L, pg: [79], tp: "PCA extensions", sb: "Intriguing questions", df: "medium", ty: "short", so: "lecture",
    pr: "List the four 'technically intriguing questions' on slide 79.",
    at: "(1) What happens if you don't center the data before PCA? (2) Is there a version of PCA robust to outliers? (Robust PCA, RANSAC-like approaches.) (3) How does PCA relate to SVD? (deep mathematical connection; sklearn can use SVD or covariance eigendecomposition.) (4) Can you do PCA on categorical features? (Multiple Correspondence Analysis; what goes wrong with one-hot encoding.)",
    sl: "Slide 79 four 💡 questions with exploration prompts.",
    ex: "Designed to reward curiosity — 15 minutes exploring with the CTA each.",
    mt: "Assuming PCA has no categorical analogue — MCA exists." });
})();
/* Per-page metadata overlays — Lecture 2 (pages 1–80). */
window.DSFM_META = window.DSFM_META || {};
DSFM_META['2'] = {
  pages: {
    1: { t: "Course title slide", m: "Administrative.", p: [] },
    2: { t: "Lecture 2 title: Linear Algebra for Data Science — Seeing Data as Geometry", m: "Divider slide — the subtitle frames all exam content as 'data as geometry'.", p: [] },
    3: { m: "Opening metaphor + Iris running example; supports distance/PCA questions.", p: [] },
    4: { m: "Five objectives are a checklist for the whole lecture — any can be a question.", p: [] },
    5: { t: "The Journey Ahead (image-only divider)", m: "Divider slide — image-only; no extractable content. Check slide image if needed.", p: [] },
    6: { m: "Course connections (L3 covariance, L5 normal equations, L6 hyperplanes, L10 attention) — matching questions possible.", p: [] },
    7: { m: "DataFrame vs matrix distinction — definitional.", p: ["Applying matrix operations to labelled DataFrames without converting."] },
    8: {
      m: "Notation n/p/xi — prerequisite for every formula question; Iris example numbers should be known.",
      p: ["Swapping n and p (covariance is p×p)."],
      b: [{ k: "table", caption: "Data matrix notation (slide 8)",
        headers: ["Symbol", "Domain", "Meaning"],
        rows: [["X", "ℝ^{n×p}", "Data matrix — all our data in one object"], ["n", "ℤ⁺", "Number of observations (rows)"], ["p", "ℤ⁺", "Number of features (columns)"], ["xᵢ", "ℝ^p", "The i-th observation — a single data point (row vector)"]] }]
    },
    9: { m: "Row-as-observation concept; x₆₂ example may be asked to interpret.", p: [] },
    10: { m: "Column-as-feature concept + per-column distribution/mean/variance (why centering is per column).", p: [] },
    11: { m: "Geometric view (rows are points) — conceptual foundation.", p: ["Reading the 2D projection as complete data."] },
    12: { m: "Dimension counts per dataset are memorizable facts.", p: ["Mixing MNIST 784 with gene expression ~20,000."] },
    13: { m: "Three capabilities unlocked by geometry — summary-level.", p: [] },
    14: { t: "Measuring Relationships (divider)", m: "Divider slide.", p: [] },
    15: {
      m: "Euclidean distance definition + properties; midterm 1(a)(i) relies on the magnitude-sensitivity property.",
      p: ["Calling Euclidean scale-invariant."],
      b: [{ k: "formula", name: "Euclidean distance", latex: "d(x,y)=\\sqrt{\\sum_{j=1}^{p}(x_j-y_j)^2}", note: "Always ≥ 0; = 0 only if x = y; symmetric; sensitive to scale." }]
    },
    16: { m: "Worked example numbers (√0.29 ≈ 0.539) could be asked directly.", p: ["Missing the square root."] },
    17: {
      m: "Cosine definition, range, and properties; midterm 1(a)(ii) depends on scale-invariance; 'not a true distance metric' is a favorite true/false target.",
      p: ["Claiming cosine is a distance; confusing [−1,1] with [0,1]."],
      b: [{ k: "formula", name: "Cosine similarity", latex: "\\cos(x,y)=\\frac{x\\cdot y}{\\lVert x\\rVert\\,\\lVert y\\rVert}", note: "Range [−1,1]: +1 same direction, 0 perpendicular, −1 opposite. Scale-invariant; not a true distance metric." }]
    },
    18: { m: "Worked cosine example (≈0.999) — direct calculation question candidate.", p: ["Forgetting both norms in the denominator."] },
    19: { m: "Euclidean vs cosine disagreement figure — conceptual (midterm 1(a)(iii)).", p: [] },
    20: { m: "When-to-use table is highly testable (MCQ matching).", p: ["Reversing text ↔ physical-measurement use cases."] },
    21: { m: "The review-vector example is the exact pattern of midterm 1(a)(iii) — practice until automatic.", p: ["Computing Euclidean without the square root; concluding magnitude-based metric matches human judgment for topics."] },
    22: { m: "Iterative-refinement demo structure; supports AI-collaboration questions.", p: [] },
    23: { t: "LIVE DEMO — Exploring distance metrics", m: "Demo slide; takeaway is the four-step pattern.", p: [] },
    24: { m: "Demo 1 takeaways summary.", p: [] },
    25: { m: "Rows→columns transition; the 'key question' phrasing is quotable.", p: ["Confusing row similarity with feature relationship."] },
    26: {
      m: "Sample variance formula + Bessel's correction reasoning is a standard exam item.",
      p: ["Saying n−1 removes mean bias — it corrects variance bias from estimating the mean."],
      b: [{ k: "formula", name: "Sample variance", latex: "s^2=\\frac{1}{n-1}\\sum_{i=1}^{n}(x_i-\\bar{x})^2", note: "Bessel's correction (n−1): the mean was estimated from the same data; degrees of freedom = n−1." }]
    },
    27: {
      t: "Why Divide by n−1? (image-only slide — content verified from the slide image)",
      m: "Full mathematical justification of Bessel's correction: Bias(estimate) = E[estimate] − true value; E[R] = (n−1)σ²; the exact repeated-sampling table for n = 2 shows E[R/n] = 0.5 vs E[R/(n−1)] = 1 = σ². A possible derivation question.",
      p: ["Unbiasedness is an average-over-samples property — a single estimate can still be too high or too low."],
      b: [
        { k: "formula", name: "Bias of an estimator", latex: "\\mathrm{Bias}(\\hat{\\theta}) = \\mathbb{E}[\\hat{\\theta}] - \\theta", note: "Expectation averages estimates over repeated samples of the same size." },
        { k: "formula", name: "Expected residual sum of squares", latex: "R = \\sum_i (X_i-\\bar{X})^2 = \\sum_i (X_i-\\mu)^2 - n(\\bar{X}-\\mu)^2 \\;\\Rightarrow\\; \\mathbb{E}[R] = (n-1)\\sigma^2", note: "This is why dividing by n−1 gives E[R/(n−1)] = σ² (unbiased) while dividing by n gives E[R/n] = ((n−1)/n)σ² (biased low)." },
        { k: "table", caption: "Exact repeated sampling (slide 27): X = ±1 with probability ½ each; µ = 0, σ² = 1; n = 2; each sample has probability ¼",
          headers: ["Sample", "R", "R/n", "R/(n−1)"],
          rows: [["(−1, −1)", "0", "0", "0"], ["(−1, +1)", "2", "1", "2"], ["(+1, −1)", "2", "1", "2"], ["(+1, +1)", "0", "0", "0"], ["Average over all four samples", "—", "0.5 (biased)", "1 = true σ² (unbiased)"]] },
        { k: "callout", style: "key", title: "Degrees of freedom:", text: "The deviations sum to zero — one constraint — leaving n−1 degrees of freedom. Unbiased means correct on average across repeated samples; a single estimate can still be too high or too low." }
      ]
    },
    28: {
      m: "Covariance definition + sign interpretations; midterm 1(b)(ii) is this slide's first row verbatim; Cov(X,X)=Var(X) is a frequent one-liner.",
      p: ["Equating zero covariance with independence; forgetting Cov(X,X)=Var(X)."],
      b: [{ k: "formula", name: "Sample covariance", latex: "\\mathrm{Cov}(X,Y)=\\frac{1}{n-1}\\sum_{i=1}^{n}(x_i-\\bar{x})(y_i-\\bar{y})", note: ">0 same-side deviations; <0 opposite; ≈0 little linear association (not independence). Cov(X,X)=Var(X)." }]
    },
    29: { m: "Sign-reading figure — directly trains midterm 1(b)(i).", p: ["Treating zero-covariance as independence (third panel is deterministic yet zero-covariance)."] },
    30: { m: "Repeat of slide 29 with 'simpler case' — same examinable content.", p: [] },
    31: {
      m: "Covariance-matrix structure and the four properties; midterm 1(b)(iii) tests symmetry + PSD + non-negative diagonal.",
      p: ["Forgetting positive semidefiniteness; accepting asymmetric matrices."],
      b: [{ k: "formula", name: "Covariance matrix", latex: "\\Sigma = \\frac{1}{n-1}X_c^{\\top}X_c,\\quad \\Sigma_{ij}=\\mathrm{Cov}(X_i,X_j)", note: "p×p; diagonal = variances; symmetric; positive semidefinite (eigenvalues ≥ 0)." },
          { k: "table", caption: "Covariance matrix structure (slide 31)",
            headers: ["", "Feature 1", "Feature 2", "Feature 3"],
            rows: [["Feature 1", "Var(X₁)", "Cov(X₁,X₂)", "Cov(X₁,X₃)"], ["Feature 2", "Cov(X₂,X₁)", "Var(X₂)", "Cov(X₂,X₃)"], ["Feature 3", "Cov(X₃,X₁)", "Cov(X₃,X₂)", "Var(X₃)"]] }]
    },
    32: { m: "Iris heatmap observations; heatmap-reading questions possible.", p: ["Reading diagonal as covariances (they are variances)."] },
    33: { m: "Ellipse = covariance shape; eigenvectors as ellipse axes (bridge to PCA).", p: [] },
    34: { m: "Verification-of-code process; exam may ask the three verification steps.", p: [] },
    35: { t: "LIVE DEMO — Verifying covariance", m: "Demo slide; pattern = verification through computation.", p: [] },
    36: { m: "n vs n−1 and np.cov() default — precise numeric fact likely on exams.", p: ["Swapping population/sample denominators."] },
    37: { m: "Part 1 recap — used as a summary question shape.", p: [] },
    38: { m: "Part 2 roadmap; central question phrasing may be asked.", p: [] },
    39: { t: "Finding What Matters — Principal Component Analysis (divider)", m: "Divider slide.", p: [] },
    40: { m: "High-dimensional examples (784 / 20k / 10k+ / 100s–1000s / 100s).", p: ["Swapping examples."] },
    41: { m: "Three curse effects (distances converge, sparsity, nearest-neighbor contrast loss).", p: ["Framing the curse as a compute problem rather than geometry."] },
    42: { m: "Three motivations (visualization, computation, generalization).", p: [] },
    43: { m: "PCA core insight (max-variance directions, cigar/ellipse).", p: ["Thinking PCA drops original features rather than constructing directions."] },
    44: { m: "The optimization question and four-step path.", p: [] },
    45: { m: "Matrices stretch and rotate; eigenvectors stretch only.", p: [] },
    46: {
      m: "Eigenvalue equation Σv = λv — the single most important formula of Part 2.",
      p: ["Misreading which side λ multiplies; assuming every vector is an eigenvector."],
      b: [{ k: "formula", name: "Eigenvalue equation", latex: "\\Sigma v = \\lambda v", note: "Covariance matrix times v = no rotation, only stretching/compression. Eigenvectors are the 'natural axes'." }]
    },
    47: { m: "Eigenvalue interpretation table + λ<0 impossible for exact covariance — tested via matrix validity questions.", p: ["Assigning negative eigenvalues to real data (impossible for an exact covariance matrix)."] },
    48: { m: "Eigenvector visual — non-rotating arrows.", p: [] },
    49: { m: "Why real/non-negative/orthogonal: symmetry + PSD — exam-ready explanation.", p: ["Claiming orthogonality holds for arbitrary matrices."] },
    50: {
      m: "Variance-along-eigenvector = eigenvalue theorem; underpins EVR questions.",
      p: ["Dividing variance by p or n instead of the eigenvalue sum."],
      b: [{ k: "formula", name: "Variance along a direction / eigenvalues are variances", latex: "\\mathrm{Var}(X v)=\\lambda,\\qquad \\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p \\ge 0", note: "Projection variance onto eigenvector v equals its eigenvalue." }]
    },
    51: { m: "Eigen↔PC translation table — matching question material.", p: ["λ₁ belongs to PC1 (largest to first)."] },
    52: { m: "Canonical 2D PCA figure — describe PC1/PC2 roles.", p: [] },
    53: { m: "Original vs PC coordinate comparison; 'what we've learned' checklist.", p: ["Claiming original features are uncorrelated."] },
    54: { t: "The PCA Algorithm (divider)", m: "Divider slide.", p: [] },
    55: {
      m: "The four-step algorithm — memorize order: center → covariance → eigenvectors → project.",
      p: ["Projecting before centering."],
      b: [{ k: "formula", name: "Projection onto top-k PCs", latex: "Z = X_{centered} W_k,\\quad X_{centered}\\, (n\\times p),\\; W_k\\, (p\\times k),\\; Z\\, (n\\times k)", note: "W_k columns are the top-k eigenvectors; Z columns are PC scores." }]
    },
    56: {
      m: "Centering definition + four reasons (definitional necessity, location vs shape, translation invariance, mean outer-product).",
      p: ["Confusing centering with standardizing."],
      b: [{ k: "formula", name: "Centering", latex: "X_{centered} = X - \\mathbf{1}\\bar{x}^{\\top}", note: "Subtract each feature's mean so the cloud is centred at the origin." }]
    },
    57: { m: "Σ = XᵀX/(n−1) for centered X + np.cov(X_centered.T) — code-level facts.", p: ["Forgetting the transpose in np.cov."] },
    58: { m: "Sort descending — largest eigenvalue ↔ PC1; sum of λ = total variance.", p: ["Using unsorted eigh output without sorting."] },
    59: { m: "Shape check n×p · p×k = n×k — standard exam sub-question (midterm 1(c)(iv) uses the dot-product view).", p: ["Reversing multiplication order."] },
    60: { m: "One-block implementation; ties the four steps together.", p: [] },
    61: { m: "Iris numbers: λ = 2.938/0.920/0.148/0.021; 72.96%/22.85%/3.67%/0.52%; cumulative 95.81% — memorizable set.", p: ["Wrong denominator in EVR; flipping PC1/PC2 own numbers."] },
    62: { m: "Iris PC scatter: setosa separation; PCA reveals hidden structure without labels.", p: ["Thinking PCA uses species labels."] },
    63: { m: "Four PCA misconceptions — each can be a true/false item.", p: [] },
    64: { t: "LIVE DEMO — Debugging PCA understanding", m: "Demo slide; pattern = debug understanding.", p: [] },
    65: { m: "'PCA creates, doesn't select' — a classic exam statement to classify.", p: ["Confusing PCA with feature selection (e.g., Lasso)."] },
    66: { t: "Selecting Components (divider)", m: "Divider slide: trade-off framing (fewer = simpler, more = information).", p: [] },
    67: {
      m: "EVR formula — direct computation target (midterm 1(c)(i)–(ii)).",
      p: ["Sum of EVRs must equal 1; check your rounding."],
      b: [{ k: "formula", name: "Explained variance ratio", latex: "EVR_i = \\frac{\\lambda_i}{\\sum_{j=1}^{p}\\lambda_j}", note: "All EVRs sum to 1." }]
    },
    68: { m: "Scree plot/elbow reading — describe-the-figure question.", p: ["Choosing components after the elbow."] },
    69: {
      m: "Cumulative EVR table for standardized Iris — memorize the row values.",
      p: ["Rounding so cumulative ≠ 100%."],
      b: [{ k: "table", caption: "Cumulative explained variance — standardized Iris (slide 69)",
        headers: ["Component", "Eigenvalue (λ)", "EVR (%)", "Cumulative (%)"],
        rows: [["PC1", "2.938", "72.96%", "72.96%"], ["PC2", "0.920", "22.85%", "95.81%"], ["PC3", "0.148", "3.67%", "99.48%"], ["PC4", "0.021", "0.52%", "100.0%"]] }]
    },
    70: { m: "90% rule statement + caution — midterm 1(c)(iii) applies it.", p: ["Treating 90% as universally correct; using accuracy instead of variance."] },
    71: { m: "Wine dataset: 13 features → 8 components at 90%; first 2 PCs only 55.41% — data-dependence lesson.", p: ["Assuming Iris-like compression everywhere."] },
    72: { m: "Variance ≠ task importance (PC3 example); validate on downstream task — high-value conceptual question.", p: ["Believing 90% variance guarantees good classification."] },
    73: { m: "Challenging-for-completeness questions (99% variance still bad? nonlinear? alternatives?).", p: [] },
    74: { t: "LIVE DEMO — When does variance fail?", m: "Demo slide; pattern = challenge for completeness.", p: [] },
    75: { m: "Four PCA limitations (linear subspace, variance≠relevance, unsupervised, scaling-sensitive).", p: ["Missing the supervised alternative (LDA) mention."] },
    76: { m: "Five concept takeaways — summary-question skeleton.", p: [] },
    77: { m: "Four collaboration-pattern matches (Demo 1–4).", p: ["Swapping Demo 1/Demo 2 themes."] },
    78: { m: "L2 VERIFY expansion (Validate/Examine/Refine/Investigate/Find Sources/Yield) — distinguish from L1's.", p: ["Using the L1 expansion when asked for L2's."] },
    79: { m: "Four extension questions (no-centering, robust PCA, SVD, MCA).", p: [] },
    80: { m: "Closing contact slide — administrative.", p: [] }
  }
};
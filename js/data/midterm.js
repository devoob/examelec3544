/* Mid-term Exam Example Questions — full reproduction + worked solutions.
   Source: "Mid-term Exam Example Questions.pdf" (7 pages, A4).
   All mathematics is authored in LaTeX (\\( \\) inline) and rendered with MathJax.
   Figures use high-resolution crops: img/mid_fig_*.jpg (full pages: img/mid_*.jpg). */
window.DSFM_MIDTERM = {
  title: "Mid-term Exam Example Questions",
  source: "Mid-term Exam Example Questions.pdf — 7 pages",
  intro: "Full reproduction of every question and subpart with page references, worked solutions, methods, and common mistakes. Solutions are hidden by default. Equations are rendered in LaTeX; figure questions use high-resolution crops of the original exam pages.",
  parts: [
    /* ================= Q1(a)(i) ================= */
    {
      id: "MT-1a-i", q: "1(a)(i)", pg: [1],
      statement: "Student A says: “Euclidean distance is more appropriate when absolute magnitude matters.” Write True or False, and give one brief reason.",
      answer: "True.",
      steps: [
        "Euclidean distance computes \\(d(x,y)=\\sqrt{\\sum_j (x_j-y_j)^2}\\) from the actual coordinate values — it is sensitive to scale and magnitude.",
        "When absolute magnitude/position matters (physical measurements, image pixels), you want distances that grow with the size of the values, which is exactly what Euclidean distance does.",
        "Reason to write: Euclidean distance uses the actual magnitudes of the values, so it reflects absolute differences; cosine similarity ignores magnitude (it is scale-invariant)."
      ],
      explain: "Euclidean distance compares absolute positions in feature space. Doubling a vector changes its Euclidean distances to other points, but not its cosine similarity. So “absolute magnitude matters” ⇒ Euclidean.",
      mistakes: [
        "Saying False because “cosine also measures similarity” — the statement is about when each metric is appropriate, not about which is “better”.",
        "Giving a reason about “angle” instead of magnitude.",
        "Forgetting to state True/False explicitly."
      ],
      rel: [["2", 15], ["2", 19], ["2", 20]]
    },
    /* ================= Q1(a)(ii) ================= */
    {
      id: "MT-1a-ii", q: "1(a)(ii)", pg: [1],
      statement: "Student B says: “Cosine similarity is more appropriate when direction matters more than magnitude.” Write True or False, and give one brief reason.",
      answer: "True.",
      steps: [
        "Cosine similarity is \\(\\cos(x,y)=\\dfrac{x\\cdot y}{\\lVert x\\rVert\\,\\lVert y\\rVert}\\) — the cosine of the angle between the vectors.",
        "It is invariant to positive rescaling: \\(\\cos(2x,y)=\\cos(x,y)\\). Only direction (relative proportions) matters.",
        "Therefore when direction/orientation carries the meaning (text counts, sparse data, embeddings), cosine is the appropriate similarity."
      ],
      explain: "Cosine only keeps the angle; multiplying a document’s word-count vector by 3 (a longer document repeating the same words) leaves the cosine at 1. Direction dominates interpretation.",
      mistakes: [
        "Confusing cosine similarity with a distance metric — cosine is a similarity in \\([-1,\\,1]\\), not a true distance.",
        "Claiming cosine ignores the vector entirely — it ignores magnitude, not the values’ proportions.",
        "Not answering True/False."
      ],
      rel: [["2", 17], ["2", 19], ["2", 20]]
    },
    /* ================= Q1(a)(iii) ================= */
    {
      id: "MT-1a-iii", q: "1(a)(iii)", pg: [1, 2], fullPage: "img/mid_02.jpg",
      statement: "A student wants to compare three paragraphs using word-count vectors. Focus only on the three keywords: data, model, accuracy. Paragraphs A, B, C are given in the exam (see the full-page images). Using only the three keywords: (1) write the word-count vectors; (2) compute Euclidean distances \\(d(A,B)\\) and \\(d(B,C)\\); (3) compute cosine similarities \\(\\cos(A,B)\\) and \\(\\cos(B,C)\\); (4) state which pair is more similar under cosine, which pair is closer under Euclidean distance, and which metric is more aligned with human judgment.",
      answer: "Vectors: \\(A=(2,2,1)\\), \\(B=(8,9,6)\\), \\(C=(6,11,4)\\). \\(d(A,B)=\\sqrt{110}\\approx 10.49\\), \\(d(B,C)=\\sqrt{12}\\approx 3.46\\). \\(\\cos(A,B)\\approx 0.991\\), \\(\\cos(B,C)\\approx 0.966\\). Cosine: A–B most similar; Euclidean: B–C closest. Cosine aligns better with human judgment.",
      steps: [
        "Count occurrences of each keyword (order: data, model, accuracy). Paragraph A: “Good data helps a model learn useful patterns. Better accuracy often depends on both data quality and model design.” → data \\(2\\), model \\(2\\), accuracy \\(1\\), so \\[A=(2,\\;2,\\;1).\\]",
        "Paragraph B: data \\(8\\), model \\(9\\), accuracy \\(6\\) → \\[B=(8,\\;9,\\;6).\\] (B is a long, repetitive document: the three keywords recur many times.)",
        "Paragraph C: data \\(6\\), model \\(11\\), accuracy \\(4\\) → \\[C=(6,\\;11,\\;4).\\]",
        "Euclidean: \\(d(A,B)=\\sqrt{(2-8)^2+(2-9)^2+(1-6)^2}=\\sqrt{36+49+25}=\\sqrt{110}\\approx 10.488\\).",
        "Euclidean: \\(d(B,C)=\\sqrt{(8-6)^2+(9-11)^2+(6-4)^2}=\\sqrt{4+4+4}=\\sqrt{12}\\approx 3.464\\).",
        "Cosine: \\(A\\cdot B = 2(8)+2(9)+1(6)=40\\), \\(\\lVert A\\rVert=\\sqrt{4+4+1}=3\\), \\(\\lVert B\\rVert=\\sqrt{64+81+36}=\\sqrt{181}\\approx 13.454\\), so \\(\\cos(A,B)=\\dfrac{40}{3\\sqrt{181}}\\approx 0.991\\).",
        "Cosine: \\(B\\cdot C = 8(6)+9(11)+6(4)=171\\), \\(\\lVert C\\rVert=\\sqrt{36+121+16}=\\sqrt{173}\\approx 13.153\\), so \\(\\cos(B,C)=\\dfrac{171}{\\sqrt{181}\\,\\sqrt{173}}\\approx 0.966\\).",
        "Compare: cosine says A–B more similar (\\(0.991 > 0.966\\)); Euclidean says B–C closer (\\(3.464 < 10.488\\)).",
        "Interpretation: the Euclidean result is dominated by document length — B is long, so it is numerically “close” to C even though C talks about committee review failures (a different topic/sentiment). Human readers judge A and B as more similar because both are friendly statements about how data, models, and accuracy relate. Cosine — which ignores length and compares the proportional keyword mix (direction) — agrees with that human judgment."
      ],
      explain: "This is the Lecture 2 demo: document B (A repeated three times) has \\(\\cos(A,B)=1\\) but a larger Euclidean distance; the short unrelated document C is Euclidean-closer but cosine-farther. Magnitude (length) drives Euclidean; direction (topic mix) drives cosine. For text, cosine is usually more aligned with human judgment.",
      mistakes: [
        "Counting “data” inside other words or missing repeated occurrences — count the exact keywords only, case-insensitively.",
        "Forgetting the square root in Euclidean distance (reporting 110 and 12 instead of 10.49, 3.46).",
        "Forgetting to normalise by both norms in cosine (reporting the raw dot products \\(40\\) or \\(171\\)).",
        "Concluding Euclidean matches human judgment because B and C share many keywords — length is what makes them Euclidean-close, and C’s topic is different."
      ],
      rel: [["2", 17], ["2", 18], ["2", 19], ["2", 21]]
    },
    /* ================= Q1(b)(i) ================= */
    {
      id: "MT-1b-i", q: "1(b)(i)", pg: [2], img: "img/mid_fig_scatter.jpg", fullPage: "img/mid_02.jpg",
      statement: "The three scatter plots show three different relationships between \\(X\\) and \\(Y\\). For each plot, determine whether the covariance is positive, negative, or approximately zero. For one of the three plots, explain in one sentence why it has that covariance sign.",
      answer: "Plot I: \\(\\mathrm{Cov}(X,Y)>0\\) (positive). Plot II: \\(\\mathrm{Cov}(X,Y)<0\\) (negative). Plot III: \\(\\mathrm{Cov}(X,Y)\\approx 0\\).",
      steps: [
        "Covariance sign rule: \\(\\mathrm{Cov}(X,Y)=\\frac{1}{n-1}\\sum_i (x_i-\\bar{x})(y_i-\\bar{y})\\) — the sign follows the dominant direction of co-deviation.",
        "Plot I: points trend upward (as \\(X\\) increases, \\(Y\\) increases) → deviations from the mean tend to share signs → products positive → covariance positive.",
        "Plot II: points trend downward → when \\(X\\) is above its mean, \\(Y\\) tends to be below its mean → products mostly negative → covariance negative.",
        "Plot III: no monotone trend (a cloud with no direction) → positive and negative products cancel → covariance approximately zero.",
        "One-sentence justification (Plot II): the points fall along a downward-sloping pattern, so observations with \\(X\\) above its mean tend to have \\(Y\\) below its mean, making the average product of deviations negative — hence a negative covariance."
      ],
      explain: "Covariance is the average of \\((x-\\bar{x})(y-\\bar{y})\\). Its sign is the sign of the dominant co-movement: same-direction deviations → positive; opposite → negative; mixed/no pattern → ≈ 0.",
      mistakes: [
        "Calling Plot III “negative because the cloud is below zero” — zero covariance means no linear association, not position below an axis.",
        "Reading a curve as zero covariance without checking symmetry — a symmetric pattern can have ≈ 0 despite dependence (zero covariance does not imply independence).",
        "Justifying with correlation strength instead of the sign of co-deviation."
      ],
      rel: [["2", 28], ["2", 29], ["2", 30], ["3", 14]]
    },
    /* ================= Q1(b)(ii) ================= */
    {
      id: "MT-1b-ii", q: "1(b)(ii)", pg: [3], fullPage: "img/mid_03.jpg",
      statement: "Consider: “If \\(\\mathrm{Cov}(X,Y)>0\\), then observations with \\(X>\\bar{X}\\) tend to also have \\(Y>\\bar{Y}\\).” Write True or False, and give one brief reason.",
      answer: "True.",
      steps: [
        "\\(\\mathrm{Cov}(X,Y)=\\frac{1}{n-1}\\sum_i (x_i-\\bar{x})(y_i-\\bar{y})\\).",
        "If the covariance is positive, the average product of deviations is positive — the dominant pattern must be that \\(X\\) and \\(Y\\) are on the same side of their means together.",
        "So when \\(X>\\bar{X}\\), \\(Y\\) tends to be \\(>\\bar{Y}\\) (hence the phrase “tend to”, which allows exceptions)."
      ],
      explain: "The statement is the verbal definition of positive covariance. The word “tend” is important: covariance is an average over all points, so individual counterexamples can exist.",
      mistakes: [
        "Answering False by over-reading “tend to also” as “always”.",
        "Confusing covariance sign with correlation strength or with any causal claim.",
        "Restating the formula without connecting same-sign deviation products to the conclusion."
      ],
      rel: [["2", 28], ["3", 14]]
    },
    /* ================= Q1(b)(iii) ================= */
    {
      id: "MT-1b-iii", q: "1(b)(iii)", pg: [3], img: "img/mid_fig_matrices.jpg", fullPage: "img/mid_03.jpg",
      statement: "Three \\(3\\times 3\\) matrices are shown. Identify all matrices that could be covariance matrices. For each matrix that cannot be a covariance matrix, briefly explain why not.",
      givens: [
        "Matrix I = \\[\\begin{bmatrix}\\;2 & 1 & -0.5\\\\[2pt] 1 & 3 & 0.2\\\\[2pt] -0.5 & 0.2 & 1\\end{bmatrix}\\]",
        "Matrix II = \\[\\begin{bmatrix}2 & 1 & -0.5\\\\[2pt] 0 & 3 & 0.2\\\\[2pt] -0.5 & 0.2 & 1\\end{bmatrix}\\]",
        "Matrix III = \\[\\begin{bmatrix}-2 & 0.4 & 0.1\\\\[2pt] 0.4 & 1 & 0.3\\\\[2pt] 0.1 & 0.3 & 2\\end{bmatrix}\\]"
      ],
      answer: "Only Matrix I. Matrix II is not symmetric (\\(\\Sigma_{12}=1\\), \\(\\Sigma_{21}=0\\)). Matrix III has a negative diagonal entry \\(-2\\) — a negative variance — and a negative eigenvalue (\\(\\approx -2.05\\)), violating positive semidefiniteness.",
      steps: [
        "Required properties of a covariance matrix: (1) symmetric \\(\\Sigma_{ij}=\\Sigma_{ji}\\); (2) positive semidefinite — all eigenvalues \\(\\ge 0\\); (3) diagonal entries are variances \\(\\ge 0\\).",
        "Matrix I: symmetric ✓. Leading principal minors: \\(2>0\\); \\(\\det\\begin{bmatrix}2&1\\\\1&3\\end{bmatrix}=6-1=5>0\\); full determinant \\(=3.97>0\\) → positive definite → valid. Eigenvalues \\(\\approx 0.625,\\;1.753,\\;3.621\\), all \\(>0\\).",
        "Matrix II: entry \\((1,2)=1\\) but entry \\((2,1)=0\\) → not symmetric → cannot be a covariance matrix (since \\(\\mathrm{Cov}(X,Y)\\) must equal \\(\\mathrm{Cov}(Y,X)\\)).",
        "Matrix III: diagonal entry \\(\\Sigma_{11}=-2=\\mathrm{Var}(X_1)<0\\), impossible for a variance → cannot be a covariance matrix. Eigendecomposition confirms a negative eigenvalue \\(\\approx -2.05\\), so it is not positive semidefinite."
      ],
      explain: "Symmetry and positive semidefiniteness (all eigenvalues \\(\\ge 0\\)) are the defining structural properties. Test symmetry first (fast), then eigenvalues or leading minors.",
      mistakes: [
        "Checking only symmetry for all matrices and skipping the PSD check for Matrix I.",
        "Claiming Matrix III is fine because the other diagonal entries are positive — one negative variance is fatal.",
        "Thinking negative off-diagonal entries (\\(-0.5\\)) are invalid — negative covariances are allowed; only variances (the diagonal) cannot be negative.",
        "Declaring Matrix I invalid “because it contains negative entries”."
      ],
      rel: [["2", 31], ["2", 49]]
    },
    /* ================= Q1(c)(i) ================= */
    {
      id: "MT-1c-i", q: "1(c)(i)", pg: [3], img: "img/mid_fig_evr.jpg", fullPage: "img/mid_03.jpg",
      statement: "The explained variance ratio of principal component \\(i\\) is \\[\\mathrm{EVR}_i=\\frac{\\lambda_i}{\\sum_j \\lambda_j}.\\] Given eigenvalues \\(\\lambda_1=4,\\;\\lambda_2=1.5,\\;\\lambda_3=0.3,\\;\\lambda_4=0.2\\) for a dataset with four original features, compute the explained variance ratio for each of the four principal components.",
      answer: "Total \\(=6\\). \\(\\mathrm{EVR}_1=\\frac{4}{6}\\approx 0.6667\\;(66.67\\%)\\), \\(\\mathrm{EVR}_2=\\frac{1.5}{6}=0.25\\;(25\\%)\\), \\(\\mathrm{EVR}_3=\\frac{0.3}{6}=0.05\\;(5\\%)\\), \\(\\mathrm{EVR}_4=\\frac{0.2}{6}=\\frac{1}{30}\\approx 0.0333\\;(3.33\\%)\\).",
      steps: [
        "Sum of eigenvalues: \\(4+1.5+0.3+0.2=6\\).",
        "\\(\\mathrm{EVR}_1=\\dfrac{4}{6}=\\dfrac{2}{3}\\approx 0.6667\\).",
        "\\(\\mathrm{EVR}_2=\\dfrac{1.5}{6}=\\dfrac{1}{4}=0.25\\).",
        "\\(\\mathrm{EVR}_3=\\dfrac{0.3}{6}=\\dfrac{1}{20}=0.05\\).",
        "\\(\\mathrm{EVR}_4=\\dfrac{0.2}{6}=\\dfrac{1}{30}\\approx 0.0333\\).",
        "Check: \\(0.6667+0.25+0.05+0.0333=1.0\\) ✓ (all EVRs sum to 1)."
      ],
      explain: "The eigenvalue of a covariance matrix is the variance captured by that component; dividing by the total variance gives the proportion of information retained.",
      mistakes: [
        "Dividing by the number of components (4) instead of the sum of eigenvalues.",
        "Rounding too early, then reporting a sum that does not equal 1.",
        "Forgetting EVR is a proportion of total variance, not a percentage of components."
      ],
      rel: [["2", 50], ["2", 67], ["2", 69]]
    },
    /* ================= Q1(c)(ii) ================= */
    {
      id: "MT-1c-ii", q: "1(c)(ii)", pg: [4],
      statement: "What proportion of the total variance is explained by the first two principal components together?",
      answer: "\\(\\dfrac{4+1.5}{6}=\\dfrac{5.5}{6}\\approx 0.9167=91.67\\%\\).",
      steps: [
        "Add the eigenvalues of PC1 and PC2: \\(\\lambda_1+\\lambda_2=4+1.5=5.5\\).",
        "Divide by the total: \\(\\dfrac{5.5}{6}\\approx 0.9167\\).",
        "So PC1 + PC2 retain about \\(91.67\\%\\) of the total variance."
      ],
      explain: "Cumulative EVR \\(=\\frac{\\lambda_1+\\lambda_2}{\\sum_j\\lambda_j}\\) — the same cumulative explained variance read from a scree plot; \\(91.67\\%\\ge 90\\%\\) is the input to the 90% rule in the next subpart.",
      mistakes: [
        "Averaging the two EVRs instead of summing (\\(0.458\\) is wrong; \\(0.9167\\) is correct).",
        "Using \\(\\mathrm{EVR}_1\\) alone (\\(66.67\\%\\)).",
        "Dividing by the wrong total."
      ],
      rel: [["2", 67], ["2", 69], ["2", 70]]
    },
    /* ================= Q1(c)(iii) ================= */
    {
      id: "MT-1c-iii", q: "1(c)(iii)", pg: [4],
      statement: "Using the 90% rule of thumb, how many principal components would you keep? Briefly justify your answer.",
      answer: "Keep 2 components.",
      steps: [
        "Cumulative variance: PC1 \\(=66.67\\%\\); PC1+PC2 \\(=91.67\\%\\); PC1+PC2+PC3 \\(=96.67\\%\\); all four \\(=100\\%\\).",
        "The 90% rule keeps the smallest number of components whose cumulative EVR reaches at least \\(90\\%\\).",
        "With 1 component: \\(66.67\\%<90\\%\\) (insufficient). With 2 components: \\(91.67\\%\\ge 90\\%\\) ✓.",
        "Justification: the first two components already explain more than 90% of the total variance, so keeping 2 suffices; adding PC3 only raises the cumulative share to \\(96.67\\%\\)."
      ],
      explain: "The 90% rule is a heuristic, not a law: it depends on the application (80% may suffice for visualization; prediction may demand task-based selection).",
      mistakes: [
        "Keeping 1 component (\\(66.67\\%<90\\%\\)).",
        "Keeping 3 “because it is closer to 100%” — the rule asks for the smallest \\(k\\) reaching the threshold.",
        "Forgetting to justify with the cumulative percentages."
      ],
      rel: [["2", 69], ["2", 70]]
    },
    /* ================= Q1(c)(iv) ================= */
    {
      id: "MT-1c-iv", q: "1(c)(iv)", pg: [4],
      statement: "PCA Projection. A centered three-dimensional dataset has first two principal component directions \\[v_1=\\left(\\tfrac{1}{\\sqrt{2}},\\;\\tfrac{1}{\\sqrt{2}},\\;0\\right),\\qquad v_2=\\left(\\tfrac{1}{\\sqrt{6}},\\;-\\tfrac{1}{\\sqrt{6}},\\;\\tfrac{2}{\\sqrt{6}}\\right),\\] and the centered observation \\(x=(3,\\,1,\\,2)\\). Compute the PC1 score \\(x\\cdot v_1\\), the PC2 score \\(x\\cdot v_2\\), and the projection of \\(x\\) onto the first two principal components.",
      answer: "PC1 score \\(=2\\sqrt{2}\\approx 2.8284\\); PC2 score \\(=\\sqrt{6}\\approx 2.4495\\); projection \\(=(3,\\,1,\\,2)=x\\) itself (zero residual — \\(x\\) already lies in the plane spanned by \\(v_1,v_2\\)).",
      steps: [
        "PC1 score: \\(x\\cdot v_1=3\\cdot\\frac{1}{\\sqrt{2}}+1\\cdot\\frac{1}{\\sqrt{2}}+2\\cdot 0=\\frac{4}{\\sqrt{2}}=2\\sqrt{2}\\approx 2.8284\\).",
        "PC2 score: \\(x\\cdot v_2=3\\cdot\\frac{1}{\\sqrt{6}}+1\\cdot\\left(-\\frac{1}{\\sqrt{6}}\\right)+2\\cdot\\frac{2}{\\sqrt{6}}=\\frac{3-1+4}{\\sqrt{6}}=\\frac{6}{\\sqrt{6}}=\\sqrt{6}\\approx 2.4495\\).",
        "Reconstruction (projection onto the PC1–PC2 plane): \\(\\hat{x}=(x\\cdot v_1)\\,v_1+(x\\cdot v_2)\\,v_2\\), valid because \\(v_1\\perp v_2\\) are orthonormal.",
        "\\((x\\cdot v_1)\\,v_1=2\\sqrt{2}\\left(\\tfrac{1}{\\sqrt{2}},\\tfrac{1}{\\sqrt{2}},0\\right)=(2,\\,2,\\,0)\\).",
        "\\((x\\cdot v_2)\\,v_2=\\sqrt{6}\\left(\\tfrac{1}{\\sqrt{6}},-\\tfrac{1}{\\sqrt{6}},\\tfrac{2}{\\sqrt{6}}\\right)=(1,\\,-1,\\,2)\\).",
        "Add: \\(\\hat{x}=(2,2,0)+(1,-1,2)=(3,\\,1,\\,2)=x\\). The projection reproduces \\(x\\) exactly, so the residual \\(x-\\hat{x}=(0,0,0)\\) and \\(x\\) carries zero information along the third principal direction."
      ],
      explain: "PC scores are dot products with unit eigenvectors; the projection is the sum of score×direction over the retained components. When \\(x\\) lies in the retained subspace, reconstruction is lossless.",
      mistakes: [
        "Leaving \\(\\frac{4}{\\sqrt{2}}\\) unreduced instead of \\(2\\sqrt{2}\\).",
        "Summing the scores (\\(5.28\\)) instead of forming the projection vector.",
        "Dividing by \\(\\lVert x\\rVert\\) (that would give a cosine, not a projection).",
        "Assuming the projection must differ from \\(x\\) — here it exactly equals \\(x\\) because \\(x\\) is in the retained plane."
      ],
      rel: [["2", 50], ["2", 51], ["2", 59], ["2", 67]]
    },
    /* ================= Q2(a) ================= */
    {
      id: "MT-2a", q: "2(a)", pg: [5], img: "img/mid_fig_table5.jpg", fullPage: "img/mid_05.jpg",
      statement: "A gym records personal training hours \\(x\\) (hrs) and weight loss \\(y\\) (kg) for five members (table shown). Compute the means \\(\\bar{x}\\) and \\(\\bar{y}\\).",
      answer: "\\(\\bar{x}=6\\) hrs, \\(\\bar{y}=5\\) kg.",
      steps: [
        "Sum of \\(x\\): \\(2+4+6+8+10=30\\). Divide by \\(n=5\\): \\(\\bar{x}=6\\).",
        "Sum of \\(y\\): \\(2+3+5+7+8=25\\). Divide by \\(n=5\\): \\(\\bar{y}=5\\)."
      ],
      explain: "Sample means are the balance points used everywhere downstream (centering for OLS, \\(SS_{tot}\\), covariance).",
      mistakes: [
        "Dividing by 4 (degrees of freedom rather than the count).",
        "Mixing up the \\(x\\) and \\(y\\) sums (30 vs 25)."
      ],
      rel: [["5", 19], ["5", 27]]
    },
    /* ================= Q2(b) ================= */
    {
      id: "MT-2b", q: "2(b)", pg: [5],
      statement: "For the linear model \\(y=\\beta_0+\\beta_1 x\\), the OLS estimator is \\[\\hat{\\beta}=\\arg\\min_{\\beta}\\ \\lVert y-X\\beta\\rVert_2^2,\\qquad \\beta=\\begin{pmatrix}\\beta_0\\\\[2pt]\\beta_1\\end{pmatrix},\\] with the closed-form solution \\[\\hat{\\beta}=(X^{\\top}X)^{-1}X^{\\top}y,\\qquad X=\\begin{pmatrix}1 & x_1\\\\[2pt] \\vdots & \\vdots\\\\[2pt] 1 & x_n\\end{pmatrix},\\quad y=\\begin{pmatrix}y_1\\\\[2pt]\\vdots\\\\[2pt]y_n\\end{pmatrix}.\\] Use this to compute \\(\\hat{\\beta}_1\\) and \\(\\hat{\\beta}_0\\), and write the regression equation. (Hint: for \\(A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\), \\(A^{-1}=\\frac{1}{\\det(A)}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}\\).)",
      answer: "\\(\\hat{\\beta}_1=0.8\\), \\(\\hat{\\beta}_0=0.2\\) → \\(\\hat{y}=0.2+0.8x\\).",
      steps: [
        "Build \\(X=\\begin{bmatrix}1&2\\\\1&4\\\\1&6\\\\1&8\\\\1&10\\end{bmatrix}\\) and \\(y=(2,\\,3,\\,5,\\,7,\\,8)^{\\top}\\).",
        "\\(X^{\\top}X=\\begin{bmatrix}n & \\sum x\\\\ \\sum x & \\sum x^2\\end{bmatrix}=\\begin{bmatrix}5 & 30\\\\ 30 & 220\\end{bmatrix}\\), since \\(\\sum x=30\\) and \\(\\sum x^2=4+16+36+64+100=220\\).",
        "\\(\\det(X^{\\top}X)=5(220)-30^2=1100-900=200\\), so \\((X^{\\top}X)^{-1}=\\frac{1}{200}\\begin{bmatrix}220 & -30\\\\ -30 & 5\\end{bmatrix}=\\begin{bmatrix}1.1 & -0.15\\\\ -0.15 & 0.025\\end{bmatrix}\\).",
        "\\(X^{\\top}y=\\begin{bmatrix}\\sum y\\\\ \\sum xy\\end{bmatrix}=\\begin{bmatrix}25\\\\ 182\\end{bmatrix}\\), since \\(\\sum xy = 2(2)+4(3)+6(5)+8(7)+10(8)=4+12+30+56+80=182\\).",
        "\\(\\hat{\\beta}=\\begin{bmatrix}1.1(25)-0.15(182)\\\\ -0.15(25)+0.025(182)\\end{bmatrix}=\\begin{bmatrix}27.5-27.3\\\\ -3.75+4.55\\end{bmatrix}=\\begin{bmatrix}0.2\\\\ 0.8\\end{bmatrix}\\).",
        "So \\(\\hat{\\beta}_0=0.2\\) kg and \\(\\hat{\\beta}_1=0.8\\) kg per hour; regression equation \\[\\hat{y}=0.2+0.8x.\\]",
        "Check with the shortcut formulas: \\(\\hat{\\beta}_1=\\frac{\\sum(x-\\bar{x})(y-\\bar{y})}{\\sum(x-\\bar{x})^2}=\\frac{32}{40}=0.8\\) and \\(\\hat{\\beta}_0=\\bar{y}-\\hat{\\beta}_1\\bar{x}=5-0.8(6)=0.2\\) ✓."
      ],
      explain: "The normal-equation solution minimises the sum of squared residuals. For one predictor it reduces to \\((X^{\\top}X)^{-1}X^{\\top}y\\), with \\(X^{\\top}X\\) containing \\(n,\\ \\sum x,\\ \\sum x^2\\).",
      mistakes: [
        "Forgetting the column of ones in \\(X\\) (or using \\(n=4\\)).",
        "Arithmetic slips in \\(X^{\\top}y\\) (182, not 180 — re-add individually).",
        "Swapping \\(\\hat{\\beta}_0\\) and \\(\\hat{\\beta}_1\\) in the final equation.",
        "Computing \\(\\sum xy\\) over only some points."
      ],
      rel: [["5", 8], ["5", 10], ["5", 13]]
    },
    /* ================= Q2(c) ================= */
    {
      id: "MT-2c", q: "2(c)", pg: [5, 6],
      statement: "Compute the residual sum of squares \\(SS_{res}\\) (prediction error) and the total variance in the labels \\(SS_{tot}\\).",
      answer: "\\(SS_{res}=0.4\\ \\mathrm{kg}^2\\), \\(SS_{tot}=26\\ \\mathrm{kg}^2\\).",
      steps: [
        "Predictions from \\(\\hat{y}=0.2+0.8x\\): for \\(x=2,4,6,8,10\\) → \\(\\hat{y}=1.8,\\;3.4,\\;5.0,\\;6.6,\\;8.2\\).",
        "Residuals \\(e=y-\\hat{y}\\): \\(0.2,\\;-0.4,\\;0.0,\\;0.4,\\;-0.2\\).",
        "\\(SS_{res}=\\sum e^2=0.04+0.16+0+0.16+0.04=0.4\\).",
        "\\(SS_{tot}=\\sum (y-\\bar{y})^2\\) with \\(\\bar{y}=5\\): \\((-3)^2+(-2)^2+0^2+2^2+3^2=9+4+0+4+9=26\\)."
      ],
      explain: "\\(SS_{res}\\) is unexplained variation around the fitted line; \\(SS_{tot}\\) is variation around the label mean. \\(R^2=1-\\frac{SS_{res}}{SS_{tot}}\\) combines them.",
      mistakes: [
        "Sign errors — \\(SS_{res}\\) uses squares, so all residuals contribute positively.",
        "Using \\(\\bar{y}=0\\) instead of \\(\\bar{y}=5\\) in \\(SS_{tot}\\).",
        "Reporting \\(SS_{res}=0.4\\) with wrong units (it is in \\(\\mathrm{kg}^2\\))."
      ],
      rel: [["5", 9], ["5", 27]]
    },
    /* ================= Q2(d) ================= */
    {
      id: "MT-2d", q: "2(d)", pg: [6],
      statement: "Compute \\(R^2\\) (coefficient of determination) and \\(\\mathrm{RMSE}\\) (Root Mean Squared Error) of the model.",
      answer: "\\(R^2=1-\\frac{0.4}{26}\\approx 0.9846\\). \\(\\mathrm{RMSE}=\\sqrt{0.4/5}\\approx 0.2828\\) kg.",
      steps: [
        "\\(R^2=1-\\dfrac{SS_{res}}{SS_{tot}}=1-\\dfrac{0.4}{26}=1-0.0153846\\approx 0.9846\\).",
        "Interpretation: the model explains about \\(98.5\\%\\) of the variance in weight loss.",
        "\\(\\mathrm{RMSE}=\\sqrt{\\frac{SS_{res}}{n}}=\\sqrt{\\frac{0.4}{5}}=\\sqrt{0.08}\\approx 0.2828\\) kg.",
        "Interpretation: the typical prediction error is about \\(0.28\\) kg — back in the original units, complementing \\(R^2\\)."
      ],
      explain: "\\(R^2\\) is unitless (a variance proportion); RMSE is in the target’s units and speaks to practical accuracy. Use both.",
      mistakes: [
        "Computing RMSE as \\(\\sqrt{SS_{res}/(n-2)}\\) without stating the convention — state which you use (here \\(n=5\\)).",
        "Reporting \\(R^2\\approx 98.46\\%\\) as “0.9846%”.",
        "Computing RMSE from \\(SS_{tot}\\) instead of \\(SS_{res}\\)."
      ],
      rel: [["5", 27], ["5", 29], ["5", 37]]
    },
    /* ================= Q2(e)(i) ================= */
    {
      id: "MT-2e-i", q: "2(e)(i)", pg: [6], img: "img/mid_fig_table6.jpg", fullPage: "img/mid_06.jpg",
      statement: "A new member F is added (six points now, see table). Re-fit the regression equation using all 6 data points (use the OLS closed-form solution).",
      answer: "\\(\\hat{\\beta}_1=0.8\\), \\(\\hat{\\beta}_0=\\frac{1}{30}\\approx 0.0333\\) → \\(\\hat{y}=0.0333+0.8x\\).",
      steps: [
        "New \\(n=6\\). \\(\\sum x=36\\) → \\(\\bar{x}=6\\); \\(\\sum y=29\\) → \\(\\bar{y}=\\frac{29}{6}\\approx 4.8333\\).",
        "\\(X^{\\top}X=\\begin{bmatrix}6 & 36\\\\ 36 & 256\\end{bmatrix}\\) (new \\(\\sum x^2=220+6^2=256\\)).",
        "\\(\\det=6(256)-36^2=1536-1296=240\\), so \\((X^{\\top}X)^{-1}=\\frac{1}{240}\\begin{bmatrix}256 & -36\\\\ -36 & 6\\end{bmatrix}=\\begin{bmatrix}1.06667 & -0.15\\\\ -0.15 & 0.025\\end{bmatrix}\\).",
        "\\(X^{\\top}y=\\begin{bmatrix}\\sum y\\\\ \\sum xy\\end{bmatrix}=\\begin{bmatrix}29\\\\ 206\\end{bmatrix}\\) (new \\(\\sum xy=182+6(4)=206\\)).",
        "\\(\\hat{\\beta}=\\begin{bmatrix}1.06667(29)-0.15(206)\\\\ -0.15(29)+0.025(206)\\end{bmatrix}=\\begin{bmatrix}30.9333-30.9\\\\ -4.35+5.15\\end{bmatrix}=\\begin{bmatrix}0.0333\\\\ 0.8\\end{bmatrix}\\).",
        "Regression equation: \\(\\hat{y}=\\frac{1}{30}+0.8x\\approx 0.0333+0.8x\\).",
        "Note: the slope is unchanged (\\(0.8\\)) because \\(x_F=\\bar{x}=6\\), so F contributes nothing to the slope numerator or denominator; only the intercept shifts."
      ],
      explain: "Adding a point at \\(\\bar{x}\\) changes the intercept but not the slope. Still, the new point sits \\(1\\) kg below the old line’s prediction (\\(5.0\\)), so the fit quality (\\(R^2\\), RMSE) changes.",
      mistakes: [
        "Reusing the 5-point \\(X^{\\top}X\\) and only updating \\(\\sum y\\).",
        "Arithmetic: for six points \\(\\sum xy=206\\) and \\(\\sum x^2=256\\).",
        "Concluding the equation is unchanged — the intercept moved from \\(0.2\\) to \\(\\frac{1}{30}\\)."
      ],
      rel: [["5", 10], ["5", 13], ["5", 28]]
    },
    /* ================= Q2(e)(ii) ================= */
    {
      id: "MT-2e-ii", q: "2(e)(ii)", pg: [6],
      statement: "Compute the new \\(R^2\\) value for the new model on the new dataset (6 points).",
      answer: "\\(R^2\\approx 0.9540\\) (down from \\(\\approx 0.9846\\)).",
      steps: [
        "Predictions with \\(\\hat{y}=\\frac{1}{30}+0.8x\\): \\(x=2\\to 1.6333\\); \\(4\\to 3.2333\\); \\(6\\to 4.8333\\); \\(8\\to 6.4333\\); \\(10\\to 8.0333\\); \\(6\\to 4.8333\\).",
        "Residuals \\(y-\\hat{y}\\): \\(0.3667\\); \\(-0.2333\\); \\(0.1667\\); \\(0.5667\\); \\(-0.0333\\); \\(-0.8333\\).",
        "\\(SS_{res}=0.3667^2+0.2333^2+0.1667^2+0.5667^2+0.0333^2+0.8333^2\\approx 0.1344+0.0544+0.0278+0.3211+0.0011+0.6944=1.2333\\).",
        "\\(SS_{tot}=\\sum\\left(y-\\frac{29}{6}\\right)^2\\approx 8.0278+3.3611+0.0278+4.6944+10.0278+0.6944=26.8333\\).",
        "\\(R^2=1-\\dfrac{1.2333}{26.8333}\\approx 1-0.0460=0.9540\\)."
      ],
      explain: "\\(R^2\\) falls because the new point is poorly predicted by the linear pattern (residual \\(-0.833\\)): unexplained variance grows from \\(0.4\\) to \\(1.233\\) while total variance also grows slightly.",
      mistakes: [
        "Using the old \\(\\bar{y}=5\\) (must recompute \\(\\bar{y}=\\frac{29}{6}\\)).",
        "Reporting the old \\(R^2=0.9846\\).",
        "Mixing 5-point and 6-point quantities in the ratio."
      ],
      rel: [["5", 27], ["5", 28]]
    },
    /* ================= Q2(e)(iii) ================= */
    {
      id: "MT-2e-iii", q: "2(e)(iii)", pg: [6],
      statement: "Compute the RMSE value for the new model on the new dataset.",
      answer: "\\(\\mathrm{RMSE}=\\sqrt{1.2333/6}\\approx 0.4534\\) kg (up from \\(\\approx 0.2828\\) kg).",
      steps: [
        "\\(\\mathrm{RMSE}=\\sqrt{\\dfrac{SS_{res}}{n}}=\\sqrt{\\dfrac{1.2333}{6}}\\).",
        "\\(\\dfrac{1.2333}{6}=0.20556\\).",
        "\\(\\sqrt{0.20556}\\approx 0.4534\\) kg.",
        "Interpretation: typical prediction error has grown by about 60% after the off-pattern point entered the data."
      ],
      explain: "RMSE is in kg, so it communicates the degradation in practical units; \\(R^2\\) communicates it as lost variance share. Report both.",
      mistakes: [
        "Dividing by 5 (old \\(n\\)) instead of 6.",
        "Forgetting the square root.",
        "Reporting 0.2056 — that is MSE, not RMSE."
      ],
      rel: [["5", 27], ["5", 37]]
    },
    /* ================= Q2(e)(iv) ================= */
    {
      id: "MT-2e-iv", q: "2(e)(iv)", pg: [6, 7],
      statement: "Given the above calculation, articulate why we cannot solely use \\(R^2\\) as an indicator of model fitness.",
      answer: "Because \\(R^2\\) (i) measures fit only relative to the specific dataset’s variance, (ii) cannot detect a wrong functional form or bad residual patterns, (iii) can only stay the same or increase when OLS gains features on training data, and (iv) is not comparable across datasets with different variance. Here the model/slope is unchanged yet \\(R^2\\) dropped from \\(0.9846\\) to \\(0.954\\) when one point was added — the number alone says nothing about whether the model captures the right structure or will generalise. Pair it with RMSE and residual plots, and evaluate on held-out data.",
      steps: [
        "Point 1 — dataset-relative: \\(R^2=1-\\frac{SS_{res}}{SS_{tot}}\\) depends on the baseline variance of the particular dataset; a high \\(R^2\\) on a clean dataset may hide a worse model than a moderate \\(R^2\\) on a noisy one.",
        "Point 2 — no pattern detection: a straight line fitted to curved data can still produce a moderate-to-high \\(R^2\\); the metric does not reveal systematic structure in residuals. Residual plots do.",
        "Point 3 — complexity blindness: on training data, adding any feature (even random noise) can only increase \\(R^2\\) — OLS exploits spurious correlations — so \\(R^2\\) rewards memorisation rather than generalisation.",
        "Point 4 — what happened in 2(e): the slope stayed \\(0.8\\), yet \\(R^2\\) moved from \\(0.9846\\) to \\(0.954\\); the metric is a statement about the current sample, not about validity. In parallel, RMSE rose \\(0.28\\to 0.45\\) kg, conveying the practical degradation in units.",
        "Conclusion: use \\(R^2\\) together with RMSE, residual diagnostics, and validation/test-set performance — and interpret \\(R^2\\) only alongside its setting (e.g., stock prediction with \\(R^2=0.05\\) can be valuable)."
      ],
      explain: "This subpart deliberately pairs with the Lecture 5 material: the three \\(R^2\\) limitations plus train/test evaluation discipline.",
      mistakes: [
        "Writing only “\\(R^2\\) can be misleading” without a concrete reason from the data or from the three limitations.",
        "Claiming \\(R^2\\) decreased “because the model got worse” — the slope stayed \\(0.8\\); the new point simply breaks the perfect linear pattern.",
        "Confusing \\(R^2\\) with correlation or with accuracy."
      ],
      rel: [["5", 27], ["5", 28], ["5", 34], ["5", 38]]
    },
    /* ================= Q2(f)(i) ================= */
    {
      id: "MT-2f-i", q: "2(f)(i)", pg: [7], img: "img/mid_fig_overfit.jpg", fullPage: "img/mid_07.jpg",
      statement: "Consider increasing model complexity (e.g., adding higher-order terms): training error decreases monotonically with complexity, while validation error first decreases then increases due to overfitting. Based on the figure, mark (circle) the best stopping point for model complexity to minimise the validation error.",
      answer: "Mark the point on the complexity axis where the validation-error curve (the dashed curve in the exam figure) attains its minimum — the lowest point of the dashed U-shaped curve, which occurs around where the falling training (solid) curve crosses it.",
      steps: [
        "Read the figure: the solid curve is the Training error (falling monotonically); the dashed curve is the Validation error (U-shaped: falls, reaches a minimum, then rises).",
        "The validation curve decreases while the model underfits (high bias), reaches a minimum at the sweet spot, then increases as the model starts memorising noise (high variance).",
        "The best stopping point is the \\(x\\)-value at the minimum of the dashed validation curve — not the minimum of training error (which keeps falling toward maximal complexity).",
        "Circle that minimum. Justification sentence: at that complexity the validation error is smallest; to either side, underfitting or overfitting makes generalisation worse."
      ],
      explain: "The sweet spot minimises expected error on unseen data. Selecting it requires validation data — training error alone always pushes toward more complexity.",
      mistakes: [
        "Circling a point on the solid training-error curve (that is the overfitting end).",
        "Circling the crossing point of the two curves — the intended answer is the minimum of the dashed validation curve (which lies in the same region but is defined by the dashed curve’s lowest point).",
        "Not relating the answer to bias-variance: the minimum sits where added flexibility stops paying off."
      ],
      rel: [["5", 33], ["5", 34], ["5", 35]]
    },
    /* ================= Q2(f)(ii) ================= */
    {
      id: "MT-2f-ii", q: "2(f)(ii)", pg: [7],
      statement: "Briefly explain why selecting a model purely by maximising training \\(R^2\\) can lead to overfitting.",
      answer: "Training \\(R^2\\) can only stay the same or increase as the model gains flexibility (adding features or higher-order terms) — even when the extra capacity is meaningless. Maximising it therefore drives you to the most complex model, which fits noise peculiar to the training sample. Validation/test error, by contrast, first falls then rises — the extra flexibility buys memorisation, not generalisation.",
      steps: [
        "Fact: under OLS, adding features (or polynomial terms) cannot decrease training \\(R^2\\) — the fit only improves (RSS cannot increase).",
        "Mechanism: with enough capacity the model can interpolate the training points, including their noise. Training residuals \\(\\to 0\\), so \\(R^2\\to 1\\).",
        "Consequence: on new data the memorised noise does not repeat, so test error rises — classic overfitting / high variance.",
        "Evidence from the course: the Auto MPG example — going from 3 to 16 coefficients lowered training RMSE (\\(4.31\\to 4.03\\)) but raised test RMSE (\\(4.52\\to 6.95\\)).",
        "Correct practice: select complexity by validation/test performance (minimum validation error), not by training \\(R^2\\)."
      ],
      explain: "The bias-variance tradeoff: more flexibility lowers bias but raises variance. Training \\(R^2\\) measures only the fit side on data the model has already seen.",
      mistakes: [
        "Saying “high \\(R^2\\) is always overfitting” — it is only suspicious when high on training while test performance is poor.",
        "Not mentioning that \\(R^2\\) cannot decrease with added features (the key mechanism).",
        "Ignoring the train/test distinction entirely."
      ],
      rel: [["5", 28], ["5", 33], ["5", 34], ["5", 38]]
    }
  ]
};
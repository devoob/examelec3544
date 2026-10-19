window.DSFM_SLIDES = window.DSFM_SLIDES || {};
DSFM_SLIDES["2"] = {
 "id": "2",
 "title": "Lecture 2 — Linear Algebra for Data Science (Distances, Covariance, PCA)",
 "pages": [
  {
   "n": 1,
   "title": "Data Science with Foundation Models",
   "raw": "ELEC3544 · Fall 2026\n\n\n\n\nData Science with Foundation Models\n\n\nYang Liu\n\nThe University of Hong Kong",
   "status": "partial",
   "img": "img/l2_01.jpg"
  },
  {
   "n": 2,
   "title": "Linear Algebra for Data Science",
   "raw": "Linear Algebra for Data Science\n\n       Seeing Data as Geometry\n\n\n\n\n                                  2",
   "status": "partial",
   "img": "img/l2_02.jpg"
  },
  {
   "n": 3,
   "title": "The Hidden Geometry of Data",
   "raw": "The Hidden Geometry of Data\n\"Every dataset is a cloud of points floating in space.\"\n\n\n\n\n                                                            [FIGURE 1: 3D Iris Scatter\n                                                                       Plot]\n                                                            Three species of flowers as\n                                                                points in 3D space\n\n\n\nToday we'll learn to see your data this way —\nand extract meaning from it.\n\n\n[UCI ML repo] https://archive.ics.uci.edu/dataset/53/iris\n                                                                                          3",
   "status": "full",
   "img": "img/l2_03.jpg"
  },
  {
   "n": 4,
   "title": "What You'll Learn Today",
   "raw": "What You'll Learn Today\n\n1. Represent datasets as matrices and compute distances/similarities\n2. Explain how the covariance matrix captures feature relationships\n3. Apply PCA to reduce dimensionality — understand why eigenvectors define components\n4. Interpret PCA results by selecting components using explained variance\n5. Practice sophisticated CTA collaboration: iterative refinement and verification\n\n\n\n\n Key Insight: Linear algebra transforms data from spreadsheet rows into geometric objects\n you can measure and manipulate.\n\n                                                                                            4",
   "status": "full",
   "img": "img/l2_04.jpg"
  },
  {
   "n": 5,
   "title": "The Journey Ahead",
   "raw": "The Journey Ahead\n\n\n\n\n                    5",
   "status": "partial",
   "img": "img/l2_05.jpg"
  },
  {
   "n": 6,
   "title": "Connection to Course",
   "raw": "Connection to Course\nWhy does linear algebra matter for data science?\n\n Lecture 3: Probability: Covariance connects to joint distributions\n\n\n Lecture 5: Regression: Solving normal equations uses linear algebra\n\n\n Lecture 6: Classification: Linear classifiers have hyperplane boundaries\n\n\n Lecture 7: Embeddings: Similarity search uses vector distances\n\n\n Lecture 10: How FMs Work: Attention is matrix multiplication\n 🤖 Your CTA will help you explore these concepts through demonstrations.\n\n                                                                            6",
   "status": "full",
   "img": "img/l2_06.jpg"
  },
  {
   "n": 7,
   "title": "From Spreadsheet to Matrix",
   "raw": "From Spreadsheet to Matrix\nThe same data, two diﬀerent lenses\n\n\n\n\n                               [FIGURE 3: DataFrame vs. Matrix Comparison]\n                     Left: pandas DataFrame with labels | Right: Mathematical matrix X\n\n\n\n\n Key Insight: A spreadsheet is for humans (labels, types, context).\n A matrix is for math (pure numbers, no labels). Same information, different representation.\n\n                                                                                               7",
   "status": "full",
   "img": "img/l2_07.jpg"
  },
  {
   "n": 8,
   "title": "The Data Matrix",
   "raw": "The Data Matrix\n Symbol            Domain                  Meaning\n\n X                 ℝn×p                    Data matrix — all our data in one object\n n                 ℤ⁺                      Number of observations (rows) — how many data points\n p                 ℤ⁺                      Number of features (columns) — measurements per point\n xi                ℝp                      The i-th observation — a single data point (row vector)\n\n\n EQ1: Data Matrix Notation\n\n\n\n\n Interpretation: Every dataset with n observations and p features is a matrix X.\n\n\nExample: Iris dataset has n = 150 flowers and p = 4 measurements → X ∈ ℝ150×4\n\n\n                                                                                                     8",
   "status": "full",
   "img": "img/l2_08.jpg"
  },
  {
   "n": 9,
   "title": "Rows as Observations",
   "raw": "Rows as Observations\nEach row xi represents one data point — one observation in our dataset.\n\n\n\n\n                                  [FIGURE 4: Row Highlighted with Observation]\n                             One row = one flower with its 4 measurements highlighted\n\n\n\n\n Example: Iris Flower #62\n\n x₆₂ = [5.9, 3.0, 4.2, 1.5] — One versicolor flower: 5.9cm sepal length, 3.0cm sepal width, 4.2cm petal length, 1.5cm petal width\n\n                                                                                                                                    9",
   "status": "full",
   "img": "img/l2_09.jpg"
  },
  {
   "n": 10,
   "title": "Columns as Features",
   "raw": "Columns as Features\nEach column represents one measurement — one feature across all observations.\n\n\n\n\n                           [FIGURE 5: Column Highlighted with Distribution]\n                    Column highlighted + histogram showing distribution of sepal length\n\n\n\n\nEach column has its own distribution, mean, and variance — this will matter for PCA.\n                                                                                          10",
   "status": "full",
   "img": "img/l2_10.jpg"
  },
  {
   "n": 11,
   "title": "The Geometric View",
   "raw": "The Geometric View\n Key Insight: Each row xi is a point in p-dimensional space. Your dataset is a cloud of n points.\n\n\n\n\n                                    [FIGURE 6: 2D Scatter — Rows as Points]\n                            Iris flowers plotted: sepal length (x) vs sepal width (y)\n\n\n\n\nFor Iris: each flower is a point in 4D space. We are seeing a 2D projection above.                  11",
   "status": "full",
   "img": "img/l2_11.jpg"
  },
  {
   "n": 12,
   "title": "Extending to Higher Dimensions",
   "raw": "Extending to Higher Dimensions\nThe geometric intuition extends beyond what we can visualize\n\n Iris flowers                  4 dimensions              Can project to 2D/3D\n\n MNIST digits                  784 dimensions            Each pixel in a 28×28 image is one feature\n\n Gene expression               ~20,000 dimensions        Each gene is a dimension\n\n                               e.g., 300 dimensions\n Word embeddings                                         Meaning encoded in high-D space\n                               (tokens)\n\n ⚠ The Curse of Dimensionality (Preview)\n High dimensions create counter-intuitive effects: distances become similar, data becomes sparse, and\n nearest neighbors become less meaningful. We need to reduce the dimensionality – e.g. using PCA.\n\n\n\n                                                                                                        12",
   "status": "full",
   "img": "img/l2_12.jpg"
  },
  {
   "n": 13,
   "title": "Why This View Matters",
   "raw": "Why This View Matters\nThe geometric view unlocks powerful capabilities:\n\n  Measure Distances\n  Quantify similarity between data points\n\n\n  Find Structure\n  Identify relationships between features\n\n\n  Reduce Dimensions\n  Find directions that matter most\n\n\n Key Insight: Spreadsheet → Matrix → Points in Space.\n This transformation enables the entire toolkit of linear algebra for data science.\n                                                                                      13",
   "status": "full",
   "img": "img/l2_13.jpg"
  },
  {
   "n": 14,
   "title": "Measuring Relationships",
   "raw": "Measuring Relationships\nQuantifying how close or similar data points are\n\n\n\n\n                                                   14",
   "status": "partial",
   "img": "img/l2_14.jpg"
  },
  {
   "n": 15,
   "title": "Euclidean Distance: The Straight Line",
   "raw": "Euclidean Distance: The Straight Line\nThe most intuitive distance — as the crow flies.\n\n EQ2: Euclidean Distance\n\n\n\n\n Sum of squared differences, then take the\n square root.\n\n\n\n Connection to Pythagorean Theorem: In 2D, d = √[(x₂-x₁)² + (y₂-y₁)²]. This is just c = √(a² + b²) — the\n distance formula from geometry, extended to any number of dimensions.\n\nProperties:\n• Always ≥ 0 (non-negative)   • d(x, y) = 0 only when x = y • Symmetric: d(x, y) = d(y, x)   • Sensitive to scale\n                                                                                                                    15",
   "status": "full",
   "img": "img/l2_15.jpg"
  },
  {
   "n": 16,
   "title": "Euclidean Distance Example",
   "raw": "Euclidean Distance Example\nComputing distance between two Iris flowers\n\n Example: Distance Between Two Setosa Flowers\n  Flower A: xA = [5.1, 3.5, 1.4, 0.2]         (sepal length, sepal width, petal length, petal width)\n  Flower B: xB = [4.9, 3.0, 1.4, 0.2]\n\n  Step 1: Compute diﬀerences\n  xA - xB = [5.1-4.9, 3.5-3.0, 1.4-1.4, 0.2-0.2] = [0.2, 0.5, 0, 0]\n  Step 2: Square each difference\n  [0.2², 0.5², 0², 0²] = [0.04, 0.25, 0, 0]\n  Step 3: Sum and take square root\n  d(A, B) = √(0.04 + 0.25 + 0 + 0) = √0.29 ≈ 0.539 cm\n\n  Result: These two flowers are 0.539 units apart in 4D feature space.\n\n\n                                                                                                       16",
   "status": "full",
   "img": "img/l2_16.jpg"
  },
  {
   "n": 17,
   "title": "Cosine Similarity: The Angle",
   "raw": "Cosine Similarity: The Angle\nMeasures the angle between vectors — ignores\nmagnitude, focuses on direction.\n\n EQ3: Cosine Similarity\n                                                                           [FIGURE 8: Cosine\n                                                                         Similarity Illustration]\n                                                                            Two vectors with\n Dot product divided by product of magnitudes.                           angle θ between them\n Range: [-1, +1]       +1 = same direction\n                        0 = perpendicular\n                       -1 = opposite direction\n\n\n Key Insight: Cosine similarity only cares about direction, not length.\n Two vectors pointing the same way have cosine = 1, regardless of their magnitudes.\nProperties:\n• Bounded [-1, 1]   • Scale-invariant (2x doesn't change similarity)   • Symmetric    • NOT a true distance metric\n                                                                                                               17",
   "status": "full",
   "img": "img/l2_17.jpg"
  },
  {
   "n": 18,
   "title": "Cosine Similarity Example",
   "raw": "Cosine Similarity Example\nSame two flowers — now measuring angular similarity\n\n Example: Cosine Similarity of Two Setosa Flowers\n  Flower A: xA = [5.1, 3.5, 1.4, 0.2]      Flower B: xB = [4.9, 3.0, 1.4, 0.2]\n\n  Step 1: Compute dot product (xA · xB)\n  (5.1×4.9) + (3.5×3.0) + (1.4×1.4) + (0.2×0.2) = 24.99 + 10.5 + 1.96 + 0.04 = 37.49\n  Step 2: Compute magnitudes\n  ‖xA‖ = √(5.1² + 3.5² + 1.4² + 0.2²) = √40.26 ≈ 6.35\n  ‖xB‖ = √(4.9² + 3.0² + 1.4² + 0.2²) = √35.01 ≈ 5.92\n  Step 3: Divide\n  cos(A, B) = 37.49 / (√40.26 × √35.01) ≈ 0.99858 ≈ 0.999\n\n  Result: Cosine similarity ≈ 0.999 — these flowers point in nearly the same direction!\n\n\n                                                                                          18",
   "status": "full",
   "img": "img/l2_18.jpg"
  },
  {
   "n": 19,
   "title": "Euclidean vs. Cosine: Visual Comparison",
   "raw": "Euclidean vs. Cosine: Visual Comparison\nThe two metrics can give different answers about which points are \"closest\"\n\n\n\n\n                               [FIGURE 9: Euclidean vs. Cosine Comparison]\n                                         Three points A, B, C where:\n                                  • B is closest to A by Euclidean distance\n                                   • C is closest to A by cosine similarity\n\n\n\n\n Key Insight: Euclidean cares about absolute position in space. Cosine cares about direction from origin.\n Neither is \"better\" — the right choice depends on what similarity means for your problem.\n\n                                                                                                            19",
   "status": "full",
   "img": "img/l2_19.jpg"
  },
  {
   "n": 20,
   "title": "When to Use Which?",
   "raw": "When to Use Which?\n                                   Euclidean Distance                    Cosine Similarity\n\n Measures                        Absolute position/magnitude             Direction/orientation\n\n\n\n Scale sensitive?                Yes — affected by magnitude          Invariant to positive vector\n                                                                               rescaling\n\n\n Best for                          Physical measurements,                 Text, sparse data,\n                                     when scale matters                 when direction matters\n\n\n Typical use cases              k-NN, clustering physical data,          Document similarity,\n                                         image pixels                  recommendation systems\n\n\nThe choice between metrics is a modeling decision — it reflects what \"similar\" means in your context.\n                                                                                                     20",
   "status": "full",
   "img": "img/l2_20.jpg"
  },
  {
   "n": 21,
   "title": "The Choice Matters",
   "raw": "The Choice Matters\nA document similarity example to set up our CTA exploration\n\n Example: Comparing Customer Reviews\n  Vocabulary: great, product, fast, shipping, terrible, broken, on, arrival.\n  Review A (short): \"Great product, fast shipping\"     → [1, 1, 1, 1, 0, 0, 0, 0]\n  Review B (long): A's phrase repeated three times → [3, 3, 3, 3, 0, 0, 0, 0]\n  Review C (short, different topic): \"Terrible, broken on arrival\"    → [0, 0, 0, 0, 1, 1, 1, 1]\n  Question: Which review is more similar to A?\n  • Euclidean prefers C: d(A,C) = √8 < d(A,B) = 4.\n  • Cosine prefers B: cos(A,B) = 1 > cos(A,C) = 0.\n\n\n 🤖 Let's Explore This with the CTA\n Rather than memorizing rules, let's build intuition through conversation.\n We'll ask the CTA when to use each metric and verify with code.\n\n                                                                                                   21",
   "status": "full",
   "img": "img/l2_21.jpg"
  },
  {
   "n": 22,
   "title": "CTA Demo 1: Iterative Refinement",
   "raw": "CTA Demo 1: Iterative Refinement\nBuilding understanding through progressive questioning\n\n 🤖 What We'll Explore\n When should you use Euclidean distance vs. cosine similarity? We'll start broad, get specific, ask for\n examples, and verify with code — building understanding through conversation, not memorization.\n\nKey Questions We'll Ask:\n 1. \"When should I use Euclidean distance vs. cosine similarity?\"\n\n 2. \"Give me a concrete example where they rank pairs differently.\"\n\n 3. \"For text data specifically — which would you recommend?\"\n\n 4. \"Let's verify with code: create vectors where they disagree.\"\n\n\n Collaboration Pattern: Iterative Refinement                VERIFY: Examine, Investigate, Validate\n                                                                                                          22",
   "status": "full",
   "img": "img/l2_22.jpg"
  },
  {
   "n": 23,
   "title": "🤖 CTA Demo: Exploring Distance Metrics",
   "raw": "🤖 CTA Demo: Exploring Distance Metrics\n\n\n\n\n                             LIVE DEMO\n            Watch the iterative refinement pattern in action:\n       Start broad → Get specific → Request examples → Verify with code\n\n\n          Notice: We don't need the perfect prompt. We have a conversation.\n\n\n\n                                                                    Pattern: Iterative Refinement\n                                                                                                    23",
   "status": "full",
   "img": "img/l2_23.jpg"
  },
  {
   "n": 24,
   "title": "Demo 1 Takeaways",
   "raw": "Demo 1 Takeaways\n Content Insight: Distance Metrics\n • Euclidean: Use when absolute magnitude matters (physical measurements, images)\n\n • Cosine: Use when direction matters more than scale (text, sparse data)\n\n • The choice is a modeling decision — it defines what \"similar\" means\n\n 🤖 Collaboration Pattern: Iterative Refinement\n • Start with a broad question — don't stress about the \"perfect\" prompt\n • Follow up to get specific: \"Give me a concrete example…\"\n • Verify understanding with code or computation\n • Build understanding through conversation, not memorization\n\n ✓ VERIFY Framework Connection\n Examine: We checked reasoning with specific examples\n Investigate: We explored the text data edge case\n Validate: We verified with working code\n                                                                                    24",
   "status": "full",
   "img": "img/l2_24.jpg"
  },
  {
   "n": 25,
   "title": "Relationships Between Features",
   "raw": "Relationships Between Features\nTransitioning from measuring between rows to measuring between columns\n\n\n\n        Distances & Similarities                                           Covariance Matrix\n                                                    →\n      How similar are two observations?                             How do features relate to each other?\n             (Comparing rows)                                             (Comparing columns)\n\n\n\n\n The Key Question:\n When one feature increases, what happens to other features? Do they increase together? Decrease?\n Move independently?\n\n\nWhy this matters: The covariance matrix captures the \"shape\" of your data cloud — essential for PCA.\n                                                                                                            25",
   "status": "full",
   "img": "img/l2_25.jpg"
  },
  {
   "n": 26,
   "title": "Variance: Spread of One Feature",
   "raw": "Variance: Spread of One Feature\nBefore covariance, let's recall variance — how spread out a single feature is.\n\n EQ4: Variance (Sample)\n\n                                                              [FIGURE 10: Variance Comparison]\n                                                      Two histograms: low variance (tight) vs high variance\n                                                                           (spread)\n Average squared deviation from the mean.\n Larger variance = more spread.\n\n\n Intuition: Variance measures how much a feature \"varies\" around its mean.\n If all values are the same, variance = 0. More spread = higher variance.\n\n\n Why n-1 instead of n? This is Bessel’s correction for sample variance. We use n-1 because we estimated the\n mean from the same data. The degrees of freedom is n-1. This makes our variance estimate unbiased.\n\n                                                                                                              26",
   "status": "full",
   "img": "img/l2_26.jpg"
  },
  {
   "n": 27,
   "title": "Why Divide by n−1?",
   "raw": "Why Divide by n−1?\n\n\n\n\n                     27",
   "status": "partial",
   "img": "img/l2_27.jpg"
  },
  {
   "n": 28,
   "title": "Covariance: Two Features Together",
   "raw": "Covariance: Two Features Together\nExtending variance to capture how two features vary together.\n\n  EQ5: Covariance\n\n  Product of deviations from\n  each mean, averaged.\n\n\n\n\nInterpretation:\n Cov(X,Y) > 0                Positive covariance            When X is above its mean, Y tends to be above its mean too\n\n\n Cov(X,Y) < 0                Negative covariance            When X is above its mean, Y tends to be below its mean\n\n\n Cov(X,Y) ≈ 0                Near-zero covariance           Little linear association does not imply independence.\n\nNote: Cov(X,X) = Var(X) — covariance of a feature with itself is just its variance.                                      28",
   "status": "full",
   "img": "img/l2_28.jpg"
  },
  {
   "n": 29,
   "title": "Visualizing Covariance",
   "raw": "Visualizing Covariance\nCovariance measures linear co-variation; its magnitude depends on units.\n\n\n\n\n                                 [FIGURE 11: Covariance Scatter Plot Trio]\n                                             Three panels showing:\n                                     • Positive covariance (upward trend)\n                                   • Negative covariance (downward trend)\n                                  • Near-zero covariance (no trend/circular)\n\n\n\n\n Key Insight: Zero covariance does not imply independence.\n In the third panel, Y is completely determined by X, yet covariance is zero.\n                                                                                29",
   "status": "full",
   "img": "img/l2_29.jpg"
  },
  {
   "n": 30,
   "title": "Visualizing Covariance",
   "raw": "Visualizing Covariance\nLet’s see a simpler case!\n\n\n\n\n                                  [FIGURE 11: Covariance Scatter Plot Trio]\n                                             Three panels showing:\n                                     • Positive covariance (upward trend)\n                                   • Negative covariance (downward trend)\n                                  • Near-zero covariance (no trend/circular)\n\n\n\n\n Key Insight: Zero covariance does not imply independence.\n In the third panel, Y is completely determined by X, yet covariance is zero.\n                                                                                30",
   "status": "full",
   "img": "img/l2_30.jpg"
  },
  {
   "n": 31,
   "title": "The Covariance Matrix",
   "raw": "The Covariance Matrix\nCollecting all pairwise covariances into one matrix.\n\n EQ6: Covariance Matrix\n A p×p matrix containing\n all pairwise covariances\n between features.\n\n\nStructure of the Covariance Matrix:\n                                                       Key Properties:\n\n           Feature 1  Feature 2     Feature 3          • Diagonal = variances of each feature\n Feature 1 Var(X₁)    Cov(X₁,X₂)   Cov(X₁,X₃)          • Off-diagonal = covariances between features\n Feature 2 Cov(X₂,X₁)  Var(X₂)     Cov(X₂,X₃)          • Symmetric: Σij = Σji (order does not matter)\n Feature 3 Cov(X₃,X₁) Cov(X₃,X₂)    Var(X₃)\n                                                       • Positive semidefinite (all eigenvalues ≥ 0)\n\n                                                                                                        31",
   "status": "full",
   "img": "img/l2_31.jpg"
  },
  {
   "n": 32,
   "title": "Reading the Covariance Matrix",
   "raw": "Reading the Covariance Matrix\nInterpreting the Iris dataset covariance matrix as a heatmap.\n\n                                                                     What We See:\n\n\n                                                                     • Petal length & width have high\n                                                                     positive covariance (bright)\n         [FIGURE 12: Iris Covariance Matrix Heatmap]\n                4×4 heatmap with color scale                         • Sepal width has low covariance\n           Showing petal features strongly correlated                with petals (dim)\n\n                                                                     • Diagonal shows variances — petal\n                                                                     length has highest\n\n\n\n\n Key Insight: The covariance matrix reveals which features \"move together\" — this is exactly what PCA\n will exploit to find principal components.\n                                                                                                          32",
   "status": "full",
   "img": "img/l2_32.jpg"
  },
  {
   "n": 33,
   "title": "The Shape of Data",
   "raw": "The Shape of Data\n\n\nThe covariance matrix describes the\nellipsoid shape of your data cloud.             [FIGURE 13: Data Cloud with Covariance Ellipse]\n                                                   2D scatter plot with overlaid ellipse showing\n                                                                covariance structure\n                                                  Ellipse axes point in directions of eigenvectors\n Key Insight: The Bridge to PCA                                  (preview of PCA!)\n\n The covariance matrix encodes the \"shape\"\n of your data cloud. We'll see that the\n eigenvectors of this matrix point along the\n principal axes of this ellipsoid — these are\n the principal components!\n\n\n\n                                                                                                     33",
   "status": "full",
   "img": "img/l2_33.jpg"
  },
  {
   "n": 34,
   "title": "CTA Demo 2: Verifying Code from the CTA",
   "raw": "CTA Demo 2: Verifying Code from the CTA\nAsking the CTA to write code, then verifying it actually works\n\n What We'll Do\n We'll ask the CTA to write Python code that computes the covariance matrix for the Iris dataset.\n Then we'll run the code ourselves to verify it works — and check if the output makes sense.\n\nOur Prompt to the CTA:\n\n \"Write Python code that loads the Iris dataset and computes its covariance matrix.\n Explain what each step does and what the output tells us about feature relationships.\"\n\nOur Verification Process:\n 1. Run the code — does it execute without errors?\n 2. Check the output — is it a 4×4 symmetric matrix? Are diagonal values positive?\n 3. Sanity check — do high covariances match what we expect from the scatter plots?\n\n\n Pattern: Verifying CTA-Generated Code                          VERIFY: Validate, Examine, Investigate\n                                                                                                         34",
   "status": "full",
   "img": "img/l2_34.jpg"
  },
  {
   "n": 35,
   "title": "🤖 CTA Demo: Verifying Covariance",
   "raw": "🤖 CTA Demo: Verifying Covariance\n\n\n\n                                 LIVE DEMO\n               Watch the verification through computation pattern:\n   Ask for step-by-step work → Verify independently → Investigate discrepancy → Learn!\n\n\n\n\n                                                        Pattern: Verification Through Computation\n                                                                                                   35",
   "status": "full",
   "img": "img/l2_35.jpg"
  },
  {
   "n": 36,
   "title": "Demo 2 Takeaways",
   "raw": "Demo 2 Takeaways\n Content Insight: n vs. n-1 Matters!\n • Population covariance uses n; sample covariance uses n-1 (Bessel's correction)\n • NumPy's np.cov() uses n-1 by default (sample covariance)\n • This isn't a technicality — it affects statistical inference. Always know which you're using!\n\n 🤖 Collaboration Pattern: Verification Through Computation\n • Ask for step-by-step work — makes verification possible\n • Always verify independently with trusted tools (NumPy, calculator, etc.)\n • Discrepancies aren't failures — they're learning opportunities\n • The goal is understanding, not just getting an answer\n\n ✓ VERIFY Framework Connection\n Validate: We checked against NumPy   |   Examine: We investigated the discrepancy   |   Flag: We noted the unstated n\n vs. n-1 assumption\n\n Meta-Lesson: Verification isn't about distrust — it's about understanding.\n The discrepancy taught us more than a \"correct\" answer would have.\n                                                                                                                         36",
   "status": "full",
   "img": "img/l2_36.jpg"
  },
  {
   "n": 37,
   "title": "Part 1 Recap",
   "raw": "Part 1 Recap\nThree transformations that changed how we see data\n\n  Spreadsheet → Matrix\n  Data becomes a mathematical object we can manipulate\n\n\n  Matrix → Points in Space\n  Each row is a point in p-dimensional space\n\n\n  Points → Covariance Structure\n  The covariance matrix captures how features relate\n\nTools Acquired:\nEuclidean distance & cosine similarity (measuring between points) • Variance & covariance (measuring feature relationships) •\nThe covariance matrix (capturing data shape)\n                                                                                                                                37",
   "status": "full",
   "img": "img/l2_37.jpg"
  },
  {
   "n": 38,
   "title": "Looking Ahead: Part 2",
   "raw": "Looking Ahead: Part 2\nFinding the directions that matter most\n\n The Central Question of Part 2:\n The covariance matrix captures \"shape\" — but which directions capture the MOST variance?\n How do we find them? And how do we use them to reduce dimensionality?\n\n\nComing Up:\n • Eigenvectors & Eigenvalues:     Special directions where matrices just stretch\n\n • PCA Algorithm:                  Center → Covariance → Eigenvectors → Project\n\n • Interpreting Components:        What do principal components \"mean\"?\n\n • Selecting Components:           How many to keep? The 90% rule and beyond\n\n 🤖 CTA: Debugging Understanding + Challenging for Completeness\n                                                                                            38",
   "status": "full",
   "img": "img/l2_38.jpg"
  },
  {
   "n": 39,
   "title": "Finding What Matters",
   "raw": "Finding What Matters\nPrincipal Component Analysis (PCA)\n\n\n\n\n                                     39",
   "status": "partial",
   "img": "img/l2_39.jpg"
  },
  {
   "n": 40,
   "title": "The Problem with High Dimensions",
   "raw": "The Problem with High Dimensions\nReal-world data often has far more features than we can visualize or efficiently process.\n\nExamples of High-Dimensional Data:\n\n Images (MNIST)                784 dimensions             28×28 pixels, each is a feature\n\n\n Gene Expression               ~20,000 dimensions         One dimension per gene\n\n\n Text (Bag of Words)           10,000+ dimensions         One dimension per word in vocabulary\n\n\n Sensor Networks               100s-1000s dimensions      One dimension per sensor reading\n\n\n Financial Data                100s dimensions            Multiple indicators per asset\n\n\n The Question: How do we work with data when feature dimension p >> 3 (or even feature\n dimension p >> sample dimension n)?\n                                                                                                 40",
   "status": "full",
   "img": "img/l2_40.jpg"
  },
  {
   "n": 41,
   "title": "The Curse of Dimensionality",
   "raw": "The Curse of Dimensionality\nHigh dimensions create counter-intuitive problems that break our low-dimensional intuitions.\n\n Distances Converge\n In many high-dimensional distributions, nearest and farthest distances become similar relative to their\n size. This depends on the data and metric.\n\n Data Becomes Sparse\n Ten intervals per feature create 10p cells. Maintaining the same coverage can require exponentially more\n data.\n\n Nearest Neighbors Can Lose Contrast\n When all distances are similar, \"nearest\" loses meaning. Algorithms relying on local structure struggle.\n\n\n Key Insight: The curse isn't about computation — it's about the geometry of high-dimensional space itself.\n We need methods that find lower-dimensional structure.\n                                                                                                              41",
   "status": "full",
   "img": "img/l2_41.jpg"
  },
  {
   "n": 42,
   "title": "The Need to Reduce",
   "raw": "The Need to Reduce\nThree motivations for dimensionality reduction\n\n 👁 Visualization\n We can only see in 2D or 3D. To visually explore high-dimensional data, we must project it down while\n preserving structure.\n\n\n ⚡ Computation\n Many algorithms scale poorly with dimensions (O(p2) or worse). Reducing p before modeling can\n dramatically speed up training.\n\n\n 🎯 Generalization\n More features = more parameters = more risk of overfitting.\n Reducing dimensions can improve model generalization.\n\n             But how do we reduce dimensions without losing important information?\n                                                                                                         42",
   "status": "full",
   "img": "img/l2_42.jpg"
  },
  {
   "n": 43,
   "title": "The Goal: Preserve What Matters",
   "raw": "The Goal: Preserve What Matters\nPCA's big idea: Find the directions that capture the most variance.\n\n The Core Insight of PCA\n Not all directions in feature space are equally important. Some directions capture lots of variation in the\n data; others capture almost none.\n If we project onto the high-variance directions and ignore the low-variance ones, we can reduce\n dimensions while preserving most of the \"signal\" in the data.\n\nVisual Intuition:\n Imagine a cigar-shaped data cloud\n                                                                               [Conceptual: Elongated\n The long axis captures most variance.                                                 ellipse\n The short axis captures little.                                                with PC1 along long\n                                                                                        axis,\n PCA finds these axes automatically.                                            PC2 along short axis]\nNext question: How do we find these \"maximum variance\"\ndirections mathematically?\n                                                                                                               43",
   "status": "full",
   "img": "img/l2_43.jpg"
  },
  {
   "n": 44,
   "title": "The Key Question",
   "raw": "The Key Question\n\n           \"Which directions in feature space capture the most variance?\"\n           This is a mathematical optimization problem. The answer comes from linear algebra:\n                                  eigenvectors of the covariance matrix.\n\n\nOur Path to the Answer:\n 1.   Matrix Transformations:         Understand what matrices \"do\" to vectors\n\n 2.   Eigenvectors & Eigenvalues:     Find special directions where matrices just stretch\n\n 3.   Connection to Covariance:       See why eigenvectors of Σ give max-variance directions\n\n 4.   The PCA Algorithm:              Put it all together into a practical procedure\n\n\n                                                                                                44",
   "status": "full",
   "img": "img/l2_44.jpg"
  },
  {
   "n": 45,
   "title": "Matrix Transformations",
   "raw": "Matrix Transformations\nMatrices stretch and rotate vectors — they transform shapes.\n\n\n\n\n Key Observation\n Most vectors get both stretched AND rotated by a matrix. But some special vectors only get stretched (or\n compressed) — their direction doesn't change. These are the eigenvectors.\n\n                                                                                                            45",
   "status": "full",
   "img": "img/l2_45.jpg"
  },
  {
   "n": 46,
   "title": "Special Directions: Eigenvectors",
   "raw": "Special Directions: Eigenvectors\nEigenvectors are directions where a matrix transformation only stretches, without rotating.\n\n EQ7: Eigenvalue Equation\n\n\n\n When the covariance matrix Σ multiplies v, the result is λv.\n No rotation — just stretching (or compressing if |λ| < 1).\n\nWhere:\n\n\n\n\nIntuition: Eigenvectors are the \"natural axes\" of the transformation — the directions along which the matrix\nbehaves simply.\n\n                                                                                                               46",
   "status": "full",
   "img": "img/l2_46.jpg"
  },
  {
   "n": 47,
   "title": "Eigenvalues: The Stretch Factor",
   "raw": "Eigenvalues: The Stretch Factor\nThe eigenvalue λ tells us how much the matrix stretches vectors in the eigenvector direction.\n\nInterpreting Eigenvalues:\n λ>1               Stretching                Vectors in this direction get longer\n\n λ=1               No change                 Vectors in this direction stay same length\n\n 0<λ<1             Compression               Vectors in this direction get shorter\n\n λ=0               Collapse                  This direction gets squashed to zero\n\n λ<0               Flip + scale              Direction reverses (impossible for an exact covariance matrix)\n\n\n For PCA: Larger eigenvalue = more variance along that direction\n When we compute eigenvectors of the covariance matrix, the eigenvalue tells us how much variance is\n captured in that direction. Sort by eigenvalue → get principal components in order of importance.\n                                                                                                              47",
   "status": "full",
   "img": "img/l2_47.jpg"
  },
  {
   "n": 48,
   "title": "Visual: Eigenvectors in Action",
   "raw": "Visual: Eigenvectors in Action\nMost vectors rotate when transformed. Eigenvectors only stretch.\n\n\n\n\n                                    [FIGURE 15: Eigenvector Visualization]\n                               Multiple vectors before and after transformation.\n                              Most vectors: change direction (gray arrows rotate).\n                       Eigenvectors: only change length, same direction (colored arrows).\n                             Shows two eigenvector directions clearly highlighted.\n\n\n\n\nNotice: The eigenvectors point along the \"natural axes\" of the transformation — the directions the ellipse is\nstretched along.\n                                                                                                                48",
   "status": "full",
   "img": "img/l2_48.jpg"
  },
  {
   "n": 49,
   "title": "Eigenvectors of the Covariance Matrix",
   "raw": "Eigenvectors of the Covariance Matrix\nThe covariance matrix has special properties that make its eigenvectors particularly useful.\n\nSpecial Properties of Covariance Matrix Eigenvectors:\n\n Real eigenvalues\n All eigenvalues are real numbers (not complex) — because Σ is symmetric.\n\n Non-negative eigenvalues\n All eigenvalues are ≥ 0 — because Σ is positive semi-definite. (You can't have negative variance!)\n\n Orthogonal eigenvectors\n Eigenvectors are perpendicular to each other — they form a natural coordinate system.\n\n Why This Matters for PCA:\n These properties guarantee that we can always find a set of perpendicular axes (eigenvectors) with non-\n negative importance values (eigenvalues). This is exactly what we need for dimensionality reduction!\n                                                                                                           49",
   "status": "full",
   "img": "img/l2_49.jpg"
  },
  {
   "n": 50,
   "title": "The Connection to Variance",
   "raw": "The Connection to Variance\nHere's the key theorem that makes PCA work.\n\n EQ8: Variance Along a Direction\n\n\n\n The variance of data projected onto an\n eigenvector equals the corresponding eigenvalue!\n This means eigenvector with largest\n eigenvalue = direction of maximum variance.\n\n Key Insight: Eigenvalues ARE Variances\n λ₁ = variance captured by first principal component\n λ₂ = variance captured by second principal component\n ... and so on. The eigenvalues tell us exactly how much information each direction contains.\n\nThis completes the connection: eigenvectors of Σ = principal components, eigenvalues = their importance.\n\n                                                                                                           50",
   "status": "full",
   "img": "img/l2_50.jpg"
  },
  {
   "n": 51,
   "title": "Eigenvectors Define Principal Directions",
   "raw": "Eigenvectors Define Principal Directions\nThe eigenvectors of Σ define the principal axes; projections give PC scores.\n\n Eigenvector Concept                                  PCA Interpretation\n\n v₁ (eigenvector with largest λ)                      PC1 — first principal component\n\n v2 (eigenvector with 2nd largest λ)                  PC2 — second principal component\n\n λ₁ (largest eigenvalue)                              Variance explained by PC1\n\n λ1 / ∑j λj (proportion)                              Fraction of total variance in PC1\n\n vi ⊥ vj (orthogonal eigenvectors)                    Projected PC scores are uncorrelated\n\n\n Summary\n PCA reduces dimensionality by projecting data onto the top k eigenvectors of the covariance matrix.\n These are the directions that capture the most variance — the directions that \"matter most.\"\n                                                                                                       51",
   "status": "full",
   "img": "img/l2_51.jpg"
  },
  {
   "n": 52,
   "title": "Visual: PCA on 2D Data",
   "raw": "Visual: PCA on 2D Data\n\n\nThe canonical visualization: eigenvectors as\nnew axes aligned with data structure.\n                                                    [FIGURE 16: PCA on 2D Data — Canonical Visualization]\n                                                        Scatter plot with tilted elliptical cloud of points.\nWhat to See:                                           PC1 arrow along long axis (captures most variance).\nPC1 points along the direction of maximum spread.       PC2 arrow along short axis (orthogonal to PC1).\nPC2 is perpendicular.                               Annotations showing eigenvalues and explained variance\n                                                                                %.\nTogether they form a new coordinate system\naligned with the data's natural structure,\nnot the original feature axes.\n\n\n\n\n                                                                                                               52",
   "status": "full",
   "img": "img/l2_52.jpg"
  },
  {
   "n": 53,
   "title": "Eigenvectors as a New Coordinate System",
   "raw": "Eigenvectors as a New Coordinate System\nThe eigenvectors form new axes aligned with the data's structure.\n\n            Original Coordinates                                                             PC Coordinates\n\n • Axes defined by features                                                 • Axes defined by eigenvectors of Σ\n • Often arbitrary (which measurement comes first)\n                                                   →                        • Aligned with directions of max variance\n • Features may be correlated                                               • Components are uncorrelated\n • Not aligned with data structure                                          • Ordered by importance (λ₁ ≥ λ₂ ≥ ...)\n\n\nWhat We've Learned:\n ✓ Matrices transform vectors by stretching and rotating\n ✓ Eigenvectors are special directions where matrices only stretch (no rotation)\n ✓ Eigenvalues tell us how much stretching occurs\n ✓ For the covariance matrix: eigenvectors = principal components, eigenvalues = variances\n ✓ PCA gives us a new coordinate system aligned with the data's natural structure\n\nNext: The PCA algorithm — putting this into practice.                                                                   53",
   "status": "full",
   "img": "img/l2_53.jpg"
  },
  {
   "n": 54,
   "title": "The PCA Algorithm",
   "raw": "The PCA Algorithm\nFrom theory to practice: the four-step recipe\n\n\n\n\n                                                54",
   "status": "partial",
   "img": "img/l2_54.jpg"
  },
  {
   "n": 55,
   "title": "The Four Steps of PCA",
   "raw": "The Four Steps of PCA\nA simple algorithm with deep mathematical foundations.\n\n  Step 1: Center the Data\n  Subtract the mean of each feature so data is centered at origin\n\n\n  Step 2: Compute Covariance Matrix\n  Calculate Σ = XTX / (n − 1), where X is the centered n×p data matrix.\n\n\n  Step 3: Find Eigenvectors\n  Compute eigenvectors and eigenvalues of Σ, sort by eigenvalue\n\n\n  Step 4: Project the Data\n  Multiply centered data by top k eigenvectors to get k-dimensional representation\n\nThat's the entire algorithm. Let's walk through each step in detail.                 55",
   "status": "full",
   "img": "img/l2_55.jpg"
  },
  {
   "n": 56,
   "title": "Step 1: Center the Data",
   "raw": "Step 1: Center the Data\nSubtract the mean of each feature so the data is centered at the origin.\n\n  EQ9: Centering\n\n\n\n\nWhy Center?\nDefinitional necessity: Covariance is defined relative\nto the mean, so computing it correctly requires\ncentering.\nSeparates location from shape: Without centering,\nUncentered PCA mixes the mean's location with\nvariation around it.\nTranslation invariance: PCA directions should\ndepend only on the data‘s internal structure, and\nagnostic to coordinate choices.\nRemoves the mean contribution: The uncentered\nproduct includes the mean's outer product, which can\nchange the principal directions.\n                                                                           56",
   "status": "full",
   "img": "img/l2_56.jpg"
  },
  {
   "n": 57,
   "title": "Step 2: Compute Covariance Matrix",
   "raw": "Step 2: Compute Covariance Matrix\nCalculate how features vary together — this captures the data's \"shape\".\n\n EQ10: Covariance Matrix (for centered data)\n\n\n\n For centered X (n×p), Σ is p×p. Each entry Σij = Cov(feature i, feature j).\n\n Recall: The covariance matrix Σ encodes the \"shape\" of your data cloud.\n Diagonal = variances, off-diagonal = covariances between features.\n\nIn Python:\n import numpy as np\n\n X_centered = X - X.mean(axis=0) # Center each feature\n # .T: np.cov expects features as rows by default\n cov_matrix = np.cov(X_centered.T)\n\n                                                                               57",
   "status": "full",
   "img": "img/l2_57.jpg"
  },
  {
   "n": 58,
   "title": "Step 3: Find Eigenvectors",
   "raw": "Step 3: Find Eigenvectors\nCompute the eigenvectors and eigenvalues, then sort by decreasing eigenvalue.\n\nWhat We Compute:\n Eigenvectors (v1, v2, ..., vp)                           Eigenvalues (λ1, λ2, …, λp)\n\n The directions of maximum variance.                      Variance captured by each principal direction.\n These become our principal components.                   Larger eigenvalue = more variance.\n Each is a unit vector (length = 1).                      Sum of all λi = total variance.\n\n\n Critical: Sort eigenvectors by their eigenvalues (largest first). This ordering defines PC1, PC2, etc. The\n eigenvector with the largest eigenvalue is PC1.\n\nIn Python:\n eigenvalues, eigenvectors = np.linalg.eigh(cov_matrix)\n sorted_idx = np.argsort(eigenvalues)[::-1]   # Sort descending\n eigenvalues = eigenvalues[sorted_idx]\n eigenvectors = eigenvectors[:, sorted_idx]   # Columns are eigenvectors\n                                                                                                              58",
   "status": "full",
   "img": "img/l2_58.jpg"
  },
  {
   "n": 59,
   "title": "Step 4: Project the Data",
   "raw": "Step 4: Project the Data\nTransform data into the new coordinate system defined by the principal components.\n\n EQ11: Projection\n\n\n\n Xcentered is n×p, Wk is p×k, so Z is n×k. We have reduced from p to k dimensions!\n\n\nWhat This Means:\n • Each row of Z is the original data point expressed in PC coordinates\n • Z[:,0] contains PC1 scores (projections onto first eigenvector)\n • Z[:,1] contains PC2 scores, and so on\n • If we keep k < p components, we've reduced dimensionality from p to k\n\nIn Python:\n k = 2                                      # Keep top 2 components\n W_k = eigenvectors[:, :k]                  # First k eigenvectors\n Z = X_centered @ W_k                       # Project! Now n×k\n                                                                                     59",
   "status": "full",
   "img": "img/l2_59.jpg"
  },
  {
   "n": 60,
   "title": "Complete PCA Implementation",
   "raw": "Complete PCA Implementation\nAll four steps in one code block — it's surprisingly simple!\n import numpy as np\n\n def pca(X, k):\n     \"\"\"Perform PCA, reducing X from n×p to n×k.\"\"\"\n\n     # Step 1: Center the data\n     X_centered = X - X.mean(axis=0)\n\n     # Step 2: Compute covariance matrix\n     cov_matrix = np.cov(X_centered.T)\n\n     # Step 3: Find eigenvectors, sort by eigenvalue\n     eigenvalues, eigenvectors = np.linalg.eigh(cov_matrix)\n     sorted_idx = np.argsort(eigenvalues)[::-1]\n     eigenvalues = eigenvalues[sorted_idx]\n     eigenvectors = eigenvectors[:, sorted_idx]\n\n     # Step 4: Project onto top k eigenvectors\n     W_k = eigenvectors[:, :k]\n     Z = X_centered @ W_k\n\n     return Z, eigenvalues, eigenvectors\n\n 🤖 In practice, use sklearn.decomposition.PCA — but understanding this code is essential!\n                                                                                            60",
   "status": "full",
   "img": "img/l2_60.jpg"
  },
  {
   "n": 61,
   "title": "PCA on Iris: Step by Step",
   "raw": "PCA on Iris: Step by Step\nPCA on Iris after standardizing all four features.\n\n Example: Iris Dataset (150 samples × 4 features)\n Step 1: Standardize → center and scale each feature\n Xscaled: 150×4 matrix with feature means ≈ 0 and population standard deviations = 1\n\n Step 2: Covariance matrix → 4×4 symmetric matrix\n Σ captures how each pair of features varies together\n\n Step 3: Eigenvectors → 4 eigenvectors, 4 eigenvalues\n λ1 = 2.938 (72.96%), λ2 = 0.920 (22.85%), λ3 = 0.148 (3.67%), λ4 = 0.021 (0.52%)\n PC1 captures 72.96% of variance. PC1+PC2 capture 95.81%.\n\n Step 4: Project → keep top 2 components\n Z = Xscaled · W2 → 150×2 matrix. We went from 4D to 2D while retaining 95.81% of standardized variance.\n\n\nResult: We can now visualize the 4D Iris data in 2D!\n\n\n                                                                                                           61",
   "status": "full",
   "img": "img/l2_61.jpg"
  },
  {
   "n": 62,
   "title": "Iris PCA Visualization",
   "raw": "Iris PCA Visualization\n150 flowers, four standardized features, projected onto two principal axes.\n\n\n\n\n                                              [FIGURE 18: Iris PCA Scatter Plot]\n                                            150 points plotted in PC1 vs PC2 space\n                                       Colored by species (setosa, versicolor, virginica)\n                                      Shows clear cluster separation — especially setosa\n                                     Axes labeled: PC1 (73% variance), PC2 (4% variance)\n\n\n\n\n Key Insight: The species cluster structure was \"hidden\" in 4D. PCA reveals it by finding the 2D projection that retains the\n most variance among 2D linear projections.\n                                                                                                                               62",
   "status": "full",
   "img": "img/l2_62.jpg"
  },
  {
   "n": 63,
   "title": "CTA Demo 3: Debugging Understanding",
   "raw": "CTA Demo 3: Debugging Understanding\nUsing the CTA to clarify confusions and fix misconceptions\n\n 🤖 What We'll Explore\n PCA involves several concepts that are easy to confuse. We‘ll deliberately surface common misconceptions\n and use the CTA to debug our understanding — treating confusion as a feature to help learning, not a bug.\n\n\nCommon Confusions We'll Address:\n • \"Are principal components the same as original features?\"\n\n • \"Does PCA pick features to drop, or does it create new ones?\"\n\n • \"Why do we center but not always standardize?\"\n\n • \"Is explained variance the same as accuracy?\"\n\n Collaboration Pattern: Debugging Understanding           VERIFY: Examine, Refine, Yield\n\n                                                                                                             63",
   "status": "full",
   "img": "img/l2_63.jpg"
  },
  {
   "n": 64,
   "title": "🤖 CTA Demo: Debugging PCA Understanding",
   "raw": "🤖 CTA Demo: Debugging PCA Understanding\n\n\n\n                                    LIVE DEMO\n                        The debugging understanding pattern:\n    State confusion explicitly → Ask for clarification → Request analogies → Test understanding\n\n\n                        Example: \"I'm confused about whether PCA picks\n                     existing features or creates new ones. Can you clarify?\"\n\n\n\n\n                                                                       Pattern: Debugging Understanding\n                                                                                                          64",
   "status": "full",
   "img": "img/l2_64.jpg"
  },
  {
   "n": 65,
   "title": "Demo 3 Takeaways",
   "raw": "Demo 3 Takeaways\n Content Insight: PCA Creates, Doesn't Select\n • PCA creates NEW features (linear combinations of originals), not subsets\n • Principal components are weighted sums of all original features\n • \"Feature selection\" is a diﬀerent technique that picks a subset of original features\n • Covariance PCA uses centered features; choose scaling based on units and task\n\n\n 🤖 Collaboration Pattern: Debugging Understanding\n • State your confusion explicitly — \"I'm confused about X vs Y\"\n • Ask for clarification with specifics — \"Does this mean...?\"\n • Request analogies — \"Can you give me an intuitive example?\"\n • Test your understanding — \"So if I understand correctly...\"\n\n ✓ VERIFY Framework Connection\n Examine: We surfaced hidden assumptions | Refine: We iterated until clarity | Yield: We emerged with corrected mental models\n\n\n Meta-Lesson: Confusion is valuable data. Stating it explicitly to the CTA lets you fix misconceptions early, before they\n compound into larger errors.\n                                                                                                                                65",
   "status": "full",
   "img": "img/l2_65.jpg"
  },
  {
   "n": 66,
   "title": "Selecting Components",
   "raw": "Selecting Components\n    How many principal components should we keep?\n\n\nThe Trade-off: Fewer components = simpler model, but more information lost.\n    More components = more information retained, but less compression.\n\n\n\n\n                                                                              66",
   "status": "full",
   "img": "img/l2_66.jpg"
  },
  {
   "n": 67,
   "title": "Explained Variance Ratio",
   "raw": "Explained Variance Ratio\nMeasuring how much information each component captures.\n\n EQ13: Explained Variance Ratio\n\n\n\n The proportion of total variance captured by component i.\n Each eigenvalue divided by the sum of all eigenvalues.\n\nHow to Interpret:\n EVR₁ = 0.73                       PC1 captures 73% of the total variance\n\n EVR₂ = 0.23                       PC2 captures 23% of the total variance\n\n EVR₁ + EVR₂ = 0.96                Together, first 2 PCs capture 96% of variance\n\n Key: All EVRs sum to 1.0 (100%). Choose k components to capture \"enough\" variance.\n                                                                                      67",
   "status": "full",
   "img": "img/l2_67.jpg"
  },
  {
   "n": 68,
   "title": "The Scree Plot",
   "raw": "The Scree Plot\nVisualizing explained variance to find the \"elbow\" point.\n\n                                                                                  Reading the Scree Plot\n                                                                                  • Named after \"scree\" — rocky\n                                                                                  debris at the base of a cliff\n\n                                                 \"elbow\" point                    • Look for the \"elbow\" where the\n                                                                                  curve flattens (the slope changes)\n\n                                                                                  • Components before the elbow\n                                                                                  capture most variance\n\n                                                                                  • Components after the elbow add\n                                                                                  little new information\n\n\n Elbow Method: Use the elbow as a heuristic. For standardized Iris, 2 components retain 95.81% of variance.\n\n                                                                                                                       68",
   "status": "full",
   "img": "img/l2_68.jpg"
  },
  {
   "n": 69,
   "title": "Cumulative Explained Variance",
   "raw": "Cumulative Explained Variance\nStandardized Iris: adding up variance to see how many components are \"enough\".\n\n Component               Eigenvalue (λ)            EVR (%)            Cumulative (%)\n\n PC1                     2.938                     72.96%             72.96%\n\n PC2                     0.920                     22.85%             95.81%\n\n PC3                     0.148                     3.67%              99.48%\n\n PC4                     0.021                     0.52%              100.0%\n\n Interpretation for Iris:\n • PC1 alone captures 72.96% of standardized feature variance\n • PC1 + PC2 capture 95.81% of standardized variance.\n • PC3 and PC4 add 4.19%. Check whether this matters for your task.                    69",
   "status": "full",
   "img": "img/l2_69.jpg"
  },
  {
   "n": 70,
   "title": "The 90% Rule of Thumb",
   "raw": "The 90% Rule of Thumb\nA common heuristic for choosing the number of components.\n\n The Rule\n\n Keep enough components to explain at least 90% of the total variance.\n Or 95% if you want to be conservative. Or 80% if you prioritize compression.\n\nIn Python:\n from sklearn.decomposition import PCA\n import numpy as np\n\n # Method 1: Let sklearn pick automatically\n X_scaled = (X - X.mean(axis=0)) / X.std(axis=0, ddof=0)\n pca = PCA(n_components=0.90, svd_solver=\"full\") # Keep 90% variance\n X_reduced = pca.fit_transform(X_scaled)\n print(f\"Components needed: {pca.n_components_}\")\n\n # Method 2: Compute manually\n pca_full = PCA(svd_solver=\"full\").fit(X_scaled)\n cumsum = np.cumsum(pca_full.explained_variance_ratio_)\n k = np.searchsorted(cumsum, 0.90, side=\"right\") + 1 # First index above 90%\n\n Caution: 90% is arbitrary! The right threshold depends on your application. For visualization, 80% might suffice. For prediction, select\n the component count using task validation.\n                                                                                                                                            70",
   "status": "full",
   "img": "img/l2_70.jpg"
  },
  {
   "n": 71,
   "title": "Applying to Real Data: Wine Dataset",
   "raw": "Applying to Real Data: Wine Dataset\nStandardized Wine: 178 observations and 13 features. How many components?\n\n\n\n\n                                               [FIGURE 19: Wine Dataset Scree Plot]\n                                                     Two subplots side by side:\n                                Left: Explained variance ratio per component (bars, 13 components)\n                            Right: Cumulative explained variance (line plot with 90% threshold marked)\n                                   Elbow around component 3-4, 90% reached at ~6 components\n\n\n\n\n Wine Dataset Results:\n • Original: 13 features → With 90% threshold: 8 components needed\n • First 2 PCs retain 55.41% (standardized Iris: 95.81%) — variance is spread across more PCs\n • Lesson: The \"right\" number of components is data-dependent!\n                                                                                                         71",
   "status": "full",
   "img": "img/l2_71.jpg"
  },
  {
   "n": 72,
   "title": "But Is Variance Always Right?",
   "raw": "But Is Variance Always Right?\nA critical question: variance ≠ importance for your task.\n\n ⚠ The Variance Limitation\n PCA maximizes retained variance; usefulness depends on the task.\n\n But retained variance may not serve your task. Consider:\n • What if the signal you care about has low variance?\n • What if high-variance directions are just noise?\n • What if your downstream task needs those \"unimportant\" components?\n\nExample: Classification Task\n Imagine: PC1 captures 90% of variance but doesn't separate classes at all.\n PC3 captures only 2% of variance but perfectly separates two classes.\n\n If your goal is classification, PC3 is more valuable than PC1!\n\n Key Insight: Always validate PCA on your actual task (classification accuracy, reconstruction error, etc.), not just\n explained variance. Explained variance is a proxy, not a guarantee.\n                                                                                                                        72",
   "status": "full",
   "img": "img/l2_72.jpg"
  },
  {
   "n": 73,
   "title": "CTA Demo 4: Challenging for Completeness",
   "raw": "CTA Demo 4: Challenging for Completeness\nPushing the CTA to explore edge cases and limitations\n\n  🤖 What We'll Explore\n  We've learned that variance-based selection has limitations. Now we'll challenge the CTA to give us a\n  more complete picture: When does PCA fail? What are the alternatives? This pattern — challenging for\n  completeness — helps avoid oversimplified mental models.\n\nQuestions We'll Ask:\n • \"When would keeping 99% variance still be a bad idea?\"\n\n • \"What if my data has nonlinear structure?\"\n\n • \"Are there alternatives to PCA for dimensionality reduction?\"\n\n\n Collaboration Pattern: Challenging for Completeness                VERIFY: Validate, Investigate, Yield\n\n\nGoal: Build a nuanced understanding that acknowledges when standard advice doesn't apply.\n                                                                                                           73",
   "status": "full",
   "img": "img/l2_73.jpg"
  },
  {
   "n": 74,
   "title": "🤖 CTA Demo: When Does Variance Fail?",
   "raw": "🤖 CTA Demo: When Does Variance Fail?\n\n\n\n                                   LIVE DEMO\n                  Watch the challenging for completeness pattern:\n   Accept standard answer → Push for exceptions → Ask for alternatives → Synthesize limitations\n\n\n        \"I know PCA maximizes variance, but when would that be exactly the wrong thing\n                             to do? Give me concrete examples.\"\n\n\n\n\n                                                                  Pattern: Challenging for Completeness\n                                                                                                          74",
   "status": "full",
   "img": "img/l2_74.jpg"
  },
  {
   "n": 75,
   "title": "Demo 4 Takeaways",
   "raw": "Demo 4 Takeaways\n Content Insight: PCA's Limitations\n • PCA uses a linear subspace; curved structure may need more components\n • PCA maximizes variance; task-relevant signal can have low variance\n • PCA is unsupervised — doesn't know your labels (consider LDA for classification)\n • PCA is sensitive to scaling — choose feature scaling for the data and task\n\n\n 🤖 Collaboration Pattern: Challenging for Completeness\n • Don't accept the first answer as the complete picture\n • Ask \"when does this fail?\" and \"what are the alternatives?\"\n • Push for edge cases and exceptions — this builds robust understanding\n • The goal isn't to find problems, but to know the boundaries of your tools\n\n ✓ VERIFY Framework Connection\n Validate: We questioned the \"always use 90% variance\" rule\n Investigate: We explored when PCA assumptions break down\n Yield: We emerged with a nuanced view of when PCA is/isn't appropriate\n\n Meta-Lesson: Every technique has assumptions.\n Challenging the CTA to reveal them builds the judgment to know when tools apply — and when they don't.\n                                                                                                          75",
   "status": "full",
   "img": "img/l2_75.jpg"
  },
  {
   "n": 76,
   "title": "Key Takeaways: Concepts",
   "raw": "Key Takeaways: Concepts\nFive core ideas you can now explain and apply.\n 1. Data as Matrices\n Numeric tabular data can be represented as an n×p matrix — rows are observations, columns are features. This perspective\n unlocks all of linear algebra.\n\n 2. Geometric Intuition\n Rows are points in p-dimensional space. Distances and similarities measure relationships between observations.\n\n 3. Covariance & Correlation\n The covariance matrix captures feature relationships. It encodes the \"shape\" of your data cloud.\n\n 4. Eigenvectors as Axes\n Eigenvectors of the covariance matrix point along directions of maximum variance — the \"natural axes\" of your data.\n\n 5. PCA for Reduction\n Project onto top eigenvectors to reduce dimensions while preserving maximum variance: center, covariance, eigenvectors,\n project.\n                                                                                                                            76",
   "status": "full",
   "img": "img/l2_76.jpg"
  },
  {
   "n": 77,
   "title": "Key Takeaways: CTA Collaboration",
   "raw": "Key Takeaways: CTA Collaboration\nFour patterns for eﬀective AI-assisted learning you practiced today.\n\n Pattern                                 Demo               When to Use\n\n Exploring Concepts                      Demo 1             Building intuition for new ideas; asking \"what does this mean?\"\n\n\n Verifying Intuitions                    Demo 2             Checking if your understanding is correct; testing predictions\n\n\n Debugging Understanding                 Demo 3             Fixing misconceptions; clarifying confusions\n\n\n Challenging for Completeness            Demo 4             Finding edge cases and limitations; building robust knowledge\n\n\n The Meta-Skill\n These patterns aren't just for this course — they're transferable skills for learning anything with AI assistance.\n The key is knowing which pattern fits your current learning need, and always verifying the AI's outputs.\n                                                                                                                              77",
   "status": "full",
   "img": "img/l2_77.jpg"
  },
  {
   "n": 78,
   "title": "The VERIFY Habit",
   "raw": "The VERIFY Habit\nA framework for responsible AI-assisted learning.\n\n  ✓ VERIFY\n  V     Validate:               Check that the AI's response addresses your actual question\n\n\n  E     Examine:                Scrutinize claims and reasoning — does it make sense?\n\n\n  R     Refine:                 Ask follow-up questions to fill gaps or clarify ambiguities\n\n\n  I     Investigate:            Test with examples, edge cases, or alternative approaches\n\n\n  F     Find Sources:           Cross-reference with textbooks, documentation, or trusted resources\n\n\n  Y     Yield:                  Synthesize into your own understanding — can you explain it yourself?\n\n\n\n Make VERIFY a habit. Every interaction with the CTA is a chance to practice critical engagement.\n                                                                                                        78",
   "status": "full",
   "img": "img/l2_78.jpg"
  },
  {
   "n": 79,
   "title": "Technically Intriguing Questions",
   "raw": "Technically Intriguing Questions\nExplore these with the CTA to deepen your understanding.\n\n 💡 What happens if you don't center the data before PCA?\n\n Ask the CTA for an example where centering matters — have it show you the diﬀerence!\n\n\n 💡 Is there a version of PCA that's robust to outliers?\n\n Explore Robust PCA and RANSAC-like approaches. When might you need these?\n\n\n 💡 How does PCA relate to SVD (Singular Value Decomposition)?\n\n There's a deep mathematical connection. sklearn can use SVD or covariance eigendecomposition.\n\n\n 💡 Can you do PCA on categorical features?\n\n Explore Multiple Correspondence Analysis. What goes wrong with one-hot encoding?\n\n\nThese questions are designed to reward curiosity. Pick one and spend 15 minutes exploring with the CTA!   79",
   "status": "full",
   "img": "img/l2_79.jpg"
  },
  {
   "n": 80,
   "title": "Questions?",
   "raw": "Questions?\nCONTACT INFORMATION\n\n\n\n\n                  Instructor: Prof. Yang Liu   Office Hours: 5:00 - 5:50 PM, Thursdays\n                  Email: yliu12@hku.hk         Location: CB-714, Chow Yei Ching Building\n\n\nyangliu.mit.edu                                Let me know if you want remote!\n\n\n\n\n🤖 CTA is your 24/7 interactive and responsive learning partner!\n\n                                                                                           80",
   "status": "full",
   "img": "img/l2_80.jpg"
  }
 ]
};

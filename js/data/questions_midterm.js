/* Question bank — Midterm Example Questions (practice versions + variants).
   These mirror the exam PDF subparts; full worked solutions live in the Mid-term Example section.
   mr: links to the corresponding midterm part id (MT-...). */
(function () {
  var L = 0; // rendered under the Mid-term source

  Q({ id: "MTQ-1a-i", lec: L, pg: [], tp: "Similarity measures", sb: "Euclidean vs cosine", df: "easy", ty: "tf", so: "midterm example", mr: "MT-1a-i",
    pr: "True or False: 'Euclidean distance is more appropriate than cosine similarity when absolute magnitude matters.'",
    op: ["True", "False"], an: 0,
    at: "True.",
    sl: "Euclidean uses actual coordinate values (magnitudes), so it reacts to absolute size/position; cosine ignores magnitude (scale-invariant).\nWhen magnitude matters → Euclidean; when only direction matters → cosine.",
    ex: "Doubling a vector changes Euclidean distances to other points but leaves all cosine similarities unchanged — the clearest way to see the magnitude sensitivity.",
    mt: "Answering False with an 'angle' reason — the statement is about when each metric is appropriate.",
    ref: "Midterm Example 1(a)(i) — Lecture 2, p. 15/20" });

  Q({ id: "MTQ-1a-ii", lec: L, pg: [], tp: "Similarity measures", sb: "Euclidean vs cosine", df: "easy", ty: "tf", so: "midterm example", mr: "MT-1a-ii",
    pr: "True or False: 'Cosine similarity is more appropriate when direction matters more than magnitude.'",
    op: ["True", "False"], an: 0,
    at: "True.",
    sl: "cos(x,y) = x·y/(‖x‖‖y‖) is the angle between vectors; rescaling x by a positive constant leaves it unchanged.\nDirection-dominant data (text counts, sparse vectors, embeddings) ⇒ cosine.",
    ex: "cos(2x, y) = cos(x, y) — scale invariance is the formal reason.",
    mt: "Forgetting cosine is a similarity in [−1,1], not a distance.",
    ref: "Midterm Example 1(a)(ii) — Lecture 2, p. 17/20" });

  Q({ id: "MTQ-1a-iii", lec: L, pg: [], tp: "Similarity measures", sb: "Word-count computation", df: "hard", ty: "calc", so: "midterm example", mr: "MT-1a-iii",
    pr: "Paragraphs A, B, C (as in the exam). Using only keywords (data, model, accuracy): (1) write the count vectors; (2) compute d(A,B), d(B,C); (3) compute cos(A,B), cos(B,C); (4) which pair does each metric rank most similar, and which metric matches human judgment?",
    at: "A = (2,2,1); B = (8,9,6); C = (6,11,4). d(A,B) = √110 ≈ 10.49; d(B,C) = √12 ≈ 3.46. cos(A,B) ≈ 0.991; cos(B,C) ≈ 0.966. Cosine ranks A–B most similar; Euclidean ranks B–C closest. Cosine aligns with human judgment (A and B share the same topic and sentiment; C shares vocabulary but discusses review failures).",
    sl: "Counts: A has data×2, model×2, accuracy×1; B has 8/9/6; C has 6/11/4.\nd(A,B)² = 6²+7²+5² = 110; d(B,C)² = 2²+2²+2² = 12.\ncos(A,B) = (2·8+2·9+1·6)/(3·√181) = 40/40.36 ≈ 0.991.\ncos(B,C) = (8·6+9·11+6·4)/(√181·√173) = 171/176.96 ≈ 0.966.\nInterpretation: Euclidean is dominated by B's length; cosine compares proportional keyword mix (topic direction).",
    ex: "This is the review example from Lecture 2, p. 21 applied to paragraphs: Euclidean prefers the long same-topic document's neighbor; cosine prefers the same-topic pair.",
    mt: "Skipping the square root; forgetting norm normalisation; assuming Euclidean's ranking reflects topic similarity.",
    ref: "Midterm Example 1(a)(iii) — Lecture 2, p. 17–21" });

  Q({ id: "MTQ-1b-i", lec: L, pg: [], tp: "Covariance", sb: "Scatterplot signs", df: "easy", ty: "short", so: "midterm example", mr: "MT-1b-i",
    pr: "Three scatterplots: Plot I trends upward; Plot II trends downward; Plot III shows no trend. Give the covariance sign for each and justify one in one sentence.",
    at: "Plot I: positive; Plot II: negative; Plot III: approximately zero. Justification (Plot II): points fall along a downward-sloping pattern, so X above its mean tends to pair with Y below its mean — the average product of deviations is negative.",
    sl: "Cov(X,Y) = average of (x−x̄)(y−ȳ).\nUpward trend → same-sign deviations dominate → positive.\nDownward trend → opposite-sign deviations dominate → negative.\nNo trend → mixed products cancel → ≈0.",
    ex: "Careful: in the first midterm-style plot presentation, Plot I is positive, Plot II negative, Plot III ≈0 — read the axes labels on each figure.",
    mt: "Calling no-trend plots 'negative because points are low'; confusing covariance sign with correlation strength.",
    ref: "Midterm Example 1(b)(i) — Lecture 2, p. 28–30" });

  Q({ id: "MTQ-1b-ii", lec: L, pg: [], tp: "Covariance", sb: "Interpretation statement", df: "medium", ty: "tf", so: "midterm example", mr: "MT-1b-ii",
    pr: "True or False: 'If Cov(X, Y) > 0, then observations with X > x̄ tend to also have Y > ȳ.'",
    op: ["True", "False"], an: 0,
    at: "True.",
    sl: "Positive covariance means the average product of deviations is positive.\nThe dominant pattern is same-side deviations: X above its mean tends to accompany Y above its mean ('tend' allows exceptions).",
    ex: "This is the verbal definition of positive covariance from Lecture 2, p. 28.",
    mt: "Over-reading 'tend' as 'always'; conflating with causation.",
    ref: "Midterm Example 1(b)(ii) — Lecture 2, p. 28" });

  Q({ id: "MTQ-1b-iii", lec: L, pg: [], tp: "Covariance matrix", sb: "Validity test", df: "hard", ty: "calc", so: "midterm example", mr: "MT-1b-iii",
    pr: "Given Matrix I = [[2,1,−0.5],[1,3,0.2],[−0.5,0.2,1]], Matrix II = [[2,1,−0.5],[0,3,0.2],[−0.5,0.2,1]], Matrix III = [[−2,0.4,0.1],[0.4,1,0.3],[0.1,0.3,2]]: which could be covariance matrices, and why not the others?",
    at: "Only Matrix I. Matrix II is not symmetric (entry (1,2)=1 ≠ entry (2,1)=0). Matrix III has negative diagonal entry −2, i.e., a negative variance; equivalently its smallest eigenvalue ≈ −2.05 violates positive semidefiniteness.",
    sl: "Required: symmetric (Σij = Σji) and positive semidefinite (eigenvalues ≥ 0; diagonal ≥ 0).\nMatrix I: symmetric; leading minors 2 > 0, 5 > 0, det = 3.97 > 0 ⇒ positive definite; eigenvalues 0.625, 1.753, 3.621 > 0 ⇒ valid.\nMatrix II: fails symmetry — cov(X,Y) must equal cov(Y,X).\nMatrix III: fails non-negativity of variances (diagonal) and PSD (negative eigenvalue).",
    ex: "Fast exam order: check symmetry first, then the diagonal, then eigenvalues/leading minors.",
    mt: "Rejecting Matrix I for having negative off-diagonal entries — negative covariances are allowed; only variances cannot be negative.",
    ref: "Midterm Example 1(b)(iii) — Lecture 2, p. 31/49" });

  Q({ id: "MTQ-1c-i", lec: L, pg: [], tp: "PCA", sb: "EVR computation", df: "medium", ty: "calc", so: "midterm example", mr: "MT-1c-i",
    pr: "λ = (4, 1.5, 0.3, 0.2). Compute EVR₁–EVR₄ and the total variance.",
    at: "Total = 6. EVR₁ = 2/3 ≈ 0.667; EVR₂ = 0.25; EVR₃ = 0.05; EVR₄ ≈ 0.0333. Sum = 1.",
    sl: "EVRᵢ = λᵢ / Σλ. Σλ = 4+1.5+0.3+0.2 = 6.\n4/6 = 0.6667; 1.5/6 = 0.25; 0.3/6 = 0.05; 0.2/6 = 0.0333.",
    ex: "EVR tells the fraction of total variance each component captures; the eigenvalue IS the variance of that projection (L2 p. 50).",
    mt: "Dividing by 4 (number of components) instead of the eigenvalue sum.",
    ref: "Midterm Example 1(c)(i) — Lecture 2, p. 67" });

  Q({ id: "MTQ-1c-ii", lec: L, pg: [], tp: "PCA", sb: "Cumulative variance", df: "easy", ty: "calc", so: "midterm example", mr: "MT-1c-ii",
    pr: "Using the same eigenvalues, what proportion of variance do the first two PCs explain together?",
    at: "(4+1.5)/6 = 5.5/6 ≈ 0.9167 = 91.67%.",
    sl: "Cumulative EVR = (λ₁+λ₂)/Σλ = 5.5/6.",
    ex: "91.67% ≥ 90% is why the 90% rule keeps exactly 2 components.",
    mt: "Averaging (0.458) instead of summing cumulative variance.",
    ref: "Midterm Example 1(c)(ii) — Lecture 2, p. 69–70" });

  Q({ id: "MTQ-1c-iii", lec: L, pg: [], tp: "PCA", sb: "90% rule", df: "medium", ty: "short", so: "midterm example", mr: "MT-1c-iii",
    pr: "With cumulative EVRs of 66.67%, 91.67%, 96.67%, 100%, how many components should you keep under the 90% rule and why?",
    at: "Keep 2: cumulative 91.67% ≥ 90% is the first time the threshold is met; 1 component (66.67%) is insufficient.",
    sl: "Smallest k with cumulative ≥ 0.90: k = 2.",
    ex: "90% is a heuristic, not a law — a task could justify fewer or more (L2 p. 70/72).",
    mt: "Keeping 3 for extra safety when the rule asks for the smallest k meeting 90%.",
    ref: "Midterm Example 1(c)(iii) — Lecture 2, p. 70" });

  Q({ id: "MTQ-1c-iv", lec: L, pg: [], tp: "PCA", sb: "Projection computation", df: "hard", ty: "calc", so: "midterm example", mr: "MT-1c-iv",
    pr: "v₁ = (1/√2, 1/√2, 0), v₂ = (1/√6, −1/√6, 2/√6), centered x = (3, 1, 2). Compute PC1 and PC2 scores and the projection onto the first two PCs.",
    at: "PC1 = x·v₁ = 4/√2 = 2√2 ≈ 2.828; PC2 = x·v₂ = 6/√6 = √6 ≈ 2.449; projection = 2√2·v₁ + √6·v₂ = (2,2,0)+(1,−1,2) = (3,1,2) = x. The residual is zero: x lies exactly in the PC1–PC2 plane.",
    sl: "x·v₁ = 3/√2 + 1/√2 + 0 = 4/√2 = 2√2.\nx·v₂ = 3/√6 − 1/√6 + 4/√6 = 6/√6 = √6.\nProjection = (x·v₁)v₁ + (x·v₂)v₂ (orthonormal basis).\n2√2·(1/√2,1/√2,0) = (2,2,0); √6·(1/√6,−1/√6,2/√6) = (1,−1,2).\nSum = (3,1,2) = x ⇒ lossless reconstruction.",
    ex: "Check: a projection computed with all data dimensions retained (here x ∈ span{v₁,v₂}) returns x — a useful verification trick.",
    mt: "Computing 5.28 as 'the projection' (summing scores); forgetting to reduce 4/√2 to 2√2.",
    ref: "Midterm Example 1(c)(iv) — Lecture 2, p. 59" });

  Q({ id: "MTQ-2a", lec: L, pg: [], tp: "Regression", sb: "Means", df: "easy", ty: "calc", so: "midterm example", mr: "MT-2a",
    pr: "Members A–E: x = (2,4,6,8,10), y = (2,3,5,7,8). Compute x̄ and ȳ.",
    at: "x̄ = 30/5 = 6; ȳ = 25/5 = 5.",
    sl: "Σx = 30; Σy = 25; n = 5.",
    ex: "Means center the OLS computation.",
    mt: "Dividing by n−1.",
    ref: "Midterm Example 2(a) — Lecture 5, p. 19/27" });

  Q({ id: "MTQ-2b", lec: L, pg: [], tp: "Regression", sb: "OLS closed form", df: "hard", ty: "calc", so: "midterm example", mr: "MT-2b",
    pr: "Using β̂ = (XᵀX)⁻¹Xᵀy on the five points, compute β̂₁, β̂₀ and write the equation.",
    at: "β̂₁ = 0.8; β̂₀ = 0.2; ŷ = 0.2 + 0.8x.",
    sl: "XᵀX = [[5,30],[30,220]]; det = 200; (XᵀX)⁻¹ = [[1.1,−0.15],[−0.15,0.025]].\nXᵀy = [[25],[182]].\nβ̂ = [[1.1·25 − 0.15·182],[−0.15·25 + 0.025·182]] = [[0.2],[0.8]].\nCheck: β̂₁ = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² = 32/40 = 0.8; β̂₀ = ȳ − β̂₁x̄ = 5 − 4.8 = 0.2.",
    ex: "The closed form is the minimiser of ‖y − Xβ‖₂²; the normal equations give the same answer as the shortcut formulas.",
    mt: "Arithmetic slips in Σxy (182) or forgetting the ones column.",
    ref: "Midterm Example 2(b) — Lecture 5, p. 10/13" });

  Q({ id: "MTQ-2c", lec: L, pg: [], tp: "Regression", sb: "SSres/SStot", df: "medium", ty: "calc", so: "midterm example", mr: "MT-2c",
    pr: "For ŷ = 0.2 + 0.8x on the five points, compute SSres and SStot.",
    at: "SSres = 0.4; SStot = 26.",
    sl: "Predictions: 1.8, 3.4, 5.0, 6.6, 8.2.\nResiduals: 0.2, −0.4, 0, 0.4, −0.2.\nSSres = 0.04+0.16+0+0.16+0.04 = 0.4.\nSStot = (2−5)²+(3−5)²+0²+(7−5)²+(8−5)² = 9+4+0+4+9 = 26.",
    ex: "SSres measures unexplained variation; SStot measures variation around ȳ.",
    mt: "Using ȳ = 0; sign errors before squaring.",
    ref: "Midterm Example 2(c) — Lecture 5, p. 9/27" });

  Q({ id: "MTQ-2d", lec: L, pg: [], tp: "Regression", sb: "R²/RMSE", df: "medium", ty: "calc", so: "midterm example", mr: "MT-2d",
    pr: "Compute R² and RMSE for the five-point model (SSres = 0.4, SStot = 26).",
    at: "R² = 1 − 0.4/26 ≈ 0.9846; RMSE = √(0.4/5) ≈ 0.2828 kg.",
    sl: "R² = 1 − SSres/SStot = 1 − 0.0153846.\nRMSE = √(MSE) = √(SSres/n) = √0.08.",
    ex: "R² is unitless variance share; RMSE is in target units (kg) — report both.",
    mt: "Reporting MSE (0.08) as RMSE; dividing SSres by 4 by habit.",
    ref: "Midterm Example 2(d) — Lecture 5, p. 27/37" });

  Q({ id: "MTQ-2e-i", lec: L, pg: [], tp: "Regression", sb: "Refit with 6 points", df: "hard", ty: "calc", so: "midterm example", mr: "MT-2e-i",
    pr: "Add F(6,4). Refit the OLS equation on all six points.",
    at: "β̂₁ = 0.8 (unchanged); β̂₀ = 1/30 ≈ 0.0333; ŷ = 0.0333 + 0.8x.",
    sl: "Σx = 36 → x̄ = 6; Σy = 29 → ȳ = 29/6.\nXᵀX = [[6,36],[36,256]]; det = 240; inverse = [[1.06667,−0.15],[−0.15,0.025]].\nXᵀy = [[29],[206]].\nβ̂ = [[0.0333],[0.8]].\nWhy slope unchanged: F has x = x̄ = 6, contributing zero to the slope numerator and denominator.",
    ex: "Adding a point at the mean moves the intercept only — a neat checkable property.",
    mt: "Recomputation errors: Σxy = 206, Σx² = 256 for six points.",
    ref: "Midterm Example 2(e)(i) — Lecture 5, p. 10–13" });

  Q({ id: "MTQ-2e-ii", lec: L, pg: [], tp: "Regression", sb: "New R²", df: "hard", ty: "calc", so: "midterm example", mr: "MT-2e-ii",
    pr: "Compute the new R² on all six points.",
    at: "R² ≈ 0.9540.",
    sl: "Predictions: 1.6333, 3.2333, 4.8333, 6.4333, 8.0333, 4.8333.\nResiduals: 0.3667, −0.2333, 0.1667, 0.5667, −0.0333, −0.8333.\nSSres ≈ 1.2333. SStot = Σ(y − 29/6)² ≈ 26.8333.\nR² = 1 − 1.2333/26.8333 ≈ 0.9540.",
    ex: "R² fell (0.9846 → 0.9540) although the slope is unchanged — evidence for R²'s limits.",
    mt: "Using the old ȳ = 5.",
    ref: "Midterm Example 2(e)(ii) — Lecture 5, p. 27–28" });

  Q({ id: "MTQ-2e-iii", lec: L, pg: [], tp: "Regression", sb: "New RMSE", df: "medium", ty: "calc", so: "midterm example", mr: "MT-2e-iii",
    pr: "Compute the new RMSE on all six points.",
    at: "RMSE = √(1.2333/6) ≈ 0.4534 kg.",
    sl: "RMSE = √(SSres/n) with n = 6.\n1.2333/6 = 0.20556 → √ = 0.4534.",
    ex: "RMSE says the typical error grew ~60% — the practical-unit counterpart to R²'s decline.",
    mt: "Dividing by 5; forgetting the square root.",
    ref: "Midterm Example 2(e)(iii) — Lecture 5, p. 37" });

  Q({ id: "MTQ-2e-iv", lec: L, pg: [], tp: "Model evaluation", sb: "R² insufficiency", df: "hard", ty: "long", so: "midterm example", mr: "MT-2e-iv",
    pr: "Articulate why R² alone cannot indicate model fitness, using the 2(e) results.",
    at: "Four reasons: (1) R² is relative to the dataset's own variance — it changed (0.9846 → 0.954) when a point was added even though the model/slope did not; (2) it cannot detect a wrong functional form or systematic residual patterns; (3) on training data R² cannot decrease as features are added (it rewards memorisation/complexity); (4) it is not comparable across datasets with different baseline variance. Complement with RMSE, residual plots, and validation/test evaluation.",
    sl: "Reference the numbers: same β̂₁ = 0.8; R² fell; RMSE rose 0.28 → 0.45 kg.\nThen map to L5 p. 28's three limitations + p. 38's random-feature mechanism + p. 34–35's validation curves.",
    ex: "Exam tip: cite both the concrete computation and the general limitations — a strong answer uses evidence plus theory.",
    mt: "Saying the model 'got worse' — the model form/slope is unchanged; the data changed.",
    ref: "Midterm Example 2(e)(iv) — Lecture 5, p. 28/38" });

  Q({ id: "MTQ-2f-i", lec: L, pg: [], tp: "Model evaluation", sb: "Stopping point", df: "medium", ty: "short", so: "midterm example", mr: "MT-2f-i",
    pr: "On a complexity-vs-error figure (training error falling, validation error U-shaped), where is the best stopping point?",
    at: "At the minimum of the validation-error curve — the lowest point of the U (before validation error rises again). This is the sweet spot balancing bias and variance.",
    sl: "Training error decreases monotonically; validation error first decreases then increases.\nMinimum validation error = best generalisation.",
    ex: "Do not circle the crossing point of the two curves or the end of the training curve.",
    mt: "Circling the minimum of training error (the overfitting end).",
    ref: "Midterm Example 2(f)(i) — Lecture 5, p. 33–35" });

  Q({ id: "MTQ-2f-ii", lec: L, pg: [], tp: "Model evaluation", sb: "Training R² vs overfitting", df: "hard", ty: "long", so: "midterm example", mr: "MT-2f-ii",
    pr: "Why can selecting a model purely by maximising training R² lead to overfitting?",
    at: "Under OLS, training R² cannot decrease as the model gains features or higher-order terms — even for irrelevant/random ones (finite-sample spurious correlations get exploited). Maximising training R² therefore selects the most flexible model, which fits noise peculiar to the training sample. Generalisation requires validation/test error, which first falls then rises — the extra flexibility eventually buys memorisation, not signal.",
    sl: "Mechanism chain: more flexibility → training RSS ↓ (never ↑) → training R² → 1 with enough capacity → predicted values chase noise → test error rises.\nCourse evidence: Auto MPG 3→16 coefficients: training RMSE −6% but test RMSE +54%.",
    ex: "Pair with the bias-variance framing: maximising training fit minimises bias but inflates variance.",
    mt: "Equating high training R² with overfitting — the failure is selecting by training performance while test performance degrades.",
    ref: "Midterm Example 2(f)(ii) — Lecture 5, p. 28/34/38" });

  /* ---- Variants ---- */
  Q({ id: "MTQV-1", lec: L, pg: [], tp: "Similarity measures", sb: "Variant — vectors", df: "hard", ty: "calc", so: "midterm example", mr: "MT-1a-iii", vo: "MTQ-1a-iii",
    pr: "Variant: vectors u = (1, 0, 2), v = (2, 0, 4), w = (0, 3, 0). Compute d(u,v), d(u,w), cos(u,v), cos(u,w). Which metric says which is more similar to u?",
    at: "d(u,v) = √(1+0+4) = √5 ≈ 2.236; d(u,w) = √(1+9+4) = √14 ≈ 3.742. cos(u,v) = (2+0+8)/(√5·√20) = 10/10 = 1; cos(u,w) = 0. Euclidean says v is closer; cosine says v is identical in direction (1) and w is perpendicular (0).",
    sl: "v = 2u exactly — same direction, larger magnitude.\nEuclidean still sees the magnitude difference (√5); cosine is exactly 1.\nw is orthogonal to u (dot product 0) — Euclidean distance is finite (√14) but cosine is 0.",
    ex: "Another instance of magnitude (Euclidean) vs direction (cosine): the classic 'same topic, longer document' pattern.",
    mt: "Expecting d(u,v) = 0 because directions match — magnitude still separates them.",
    ref: "Variant of Midterm 1(a)(iii) — Lecture 2, p. 17–21" });

  Q({ id: "MTQV-2", lec: L, pg: [], tp: "PCA", sb: "Variant — different eigenvalues", df: "medium", ty: "calc", so: "midterm example", mr: "MT-1c-i", vo: "MTQ-1c-i",
    pr: "Variant: λ = (9, 4, 1, 0.4, 0.1, 0.05) for six features. Compute EVR₁, EVR₂, cumulative for 2 PCs, and the number of components for the 90% rule.",
    at: "Total = 14.55. EVR₁ = 9/14.55 ≈ 61.9%; EVR₂ = 4/14.55 ≈ 27.5%; first two ≈ 89.4% (< 90%); PC1–PC3 = 9+4+1 = 14 → ≈ 96.2% ≥ 90% ⇒ keep 3.",
    sl: "Σλ = 9+4+1+0.4+0.1+0.05 = 14.55.\n9/14.55 = 0.6186; 4/14.55 = 0.2750; cumulative 2 PCs = 0.8935 < 0.90.\nAdd λ₃: 14/14.55 = 0.9622 ≥ 0.90 ⇒ k = 3.",
    ex: "Illustrates that 'how many components' depends entirely on the eigenvalue spectrum.",
    mt: "Stopping at 2 components because 89.4% 'looks close' — the rule requires ≥ 90%.",
    ref: "Variant of Midterm 1(c) — Lecture 2, p. 67–70" });

  Q({ id: "MTQV-3", lec: L, pg: [], tp: "Regression", sb: "Variant — new dataset", df: "hard", ty: "calc", so: "midterm example", mr: "MT-2b", vo: "MTQ-2b",
    pr: "Variant: points (1,2), (2,4), (3,5), (4,7), (5,9). Compute x̄, ȳ, β̂₁, β̂₀, predictions, SSres, SStot, R², RMSE.",
    at: "x̄ = 3, ȳ = 5.4. Σ(x−x̄)(y−ȳ) = (−2)(−3.4)+(−1)(−1.4)+0+(1)(1.6)+(2)(3.6) = 6.8+1.4+0+1.6+7.2 = 17; Σ(x−x̄)² = 10; β̂₁ = 1.7; β̂₀ = 5.4 − 1.7×3 = 0.3. ŷ = 0.3 + 1.7x. Predictions: 2.0, 3.7, 5.4, 7.1, 8.8. Residuals: 0, 0.3, −0.4, −0.1, 0.2. SSres = 0.30; SStot = 11.56+1.96+0+2.56+12.96 = 29.04. R² = 1 − 0.30/29.04 ≈ 0.9897; RMSE = √(0.30/5) = √0.06 ≈ 0.245.",
    sl: "Full step-by-step as computed above; verify β̂ with the (XᵀX)⁻¹Xᵀy route if desired: XᵀX = [[5,15],[15,55]], det = 50, Xᵀy = [[27],[94]] → β̂ = [[0.3],[1.7]].",
    ex: "Same machinery as the exam question with different numbers — practice the routine end-to-end.",
    mt: "Skipping the residual table — write it out to avoid arithmetic slips.",
    ref: "Variant of Midterm Question 2 — Lecture 5" });

  Q({ id: "MTQV-4", lec: L, pg: [], tp: "Classification", sb: "Variant — confusion matrix", df: "hard", ty: "calc", so: "midterm example", mr: "MT-1a-iii", vo: "MTQ-1a-iii",
    pr: "Variant (classification bridge): a classifier flags 500 of 5,000 customers; 250 flags are true churners; there are 1,000 actual churners. Compute TP, FP, FN, TN, precision, recall, accuracy, and F1. Comment on using accuracy.",
    at: "TP = 250; FP = 250; FN = 750; TN = 3,750. Precision = 250/500 = 0.50. Recall = 250/1,000 = 0.25. Accuracy = (250+3,750)/5,000 = 0.80. F1 = 2(0.5×0.25)/(0.75) = 0.333. Accuracy 0.80 hides recall 0.25 — the always-negative baseline is 0.80 too; report precision/recall alongside accuracy on imbalanced data.",
    sl: "TP = correctly flagged churners = 250.\nFP = flagged but loyal = 500 − 250 = 250.\nFN = churners missed = 1,000 − 250 = 750.\nTN = 5,000 − 1,000 − 250 = 3,750 (or 4,000 non-churners − 250 FP).\nMetrics as above.",
    ex: "This bridges the midterm's similarity/covariance/regression content to L6 classification evaluation.",
    mt: "Using total N in precision/recall denominators; forgetting F1's harmonic mean formula.",
    ref: "Integrated variant — Lecture 6, p. 26/33/38" });
})();
/* Question bank — Lecture 5 (pages 1–58).
   OLS, coefficient interpretation, multicollinearity/VIF, R², RMSE, residuals, bias-variance, Ridge/Lasso. */
(function () {
  var L = 5;

  Q({ id: "L5-3-Q1", lec: L, pg: [3], tp: "Course map", sb: "Module 2 start", df: "easy", ty: "mcq", so: "lecture",
    pr: "How does slide 3 frame Lecture 5 in the course structure?",
    op: [
      "Module 1 foundations end; Module 2 core methods begin: L5–L7 = Regression, Classification, Unsupervised; L4→L5 connection: use prepared data to build predictive models",
      "Lecture 5 is part of Module 3 (Modern Integration)",
      "Lecture 5 covers deep learning",
      "Lecture 5 is a review of L1"
    ], an: 0,
    at: "Module 1: Foundations (L1–L4); Module 2: Core Methods (L5–L7: Regression, Classification, Unsupervised); Module 3: Modern Integration (L8–L10).",
    sl: "Slide 3 three-module layout + L4→L5 connection box.",
    ex: "The prepared (cleaned/encoded) data from L4 is the input to L5 modeling.",
    mt: "Placing L5 in the wrong module." });

  Q({ id: "L5-4-Q1", lec: L, pg: [4], tp: "Objectives", sb: "Learning goals", df: "easy", ty: "short", so: "lecture",
    pr: "List the seven learning objectives of Lecture 5.",
    at: "1) Explain what linear regression computes and why squared errors are the standard loss; 2) interpret coefficients in simple and multiple regression and diagnose multicollinearity; 3) evaluate models using train/test splits, R², residual plots, and RMSE; 4) apply Ridge and Lasso regularization with geometric intuition; 5) direct CTA-assisted model building; 6) connect L4's data pipeline to model performance; 7) describe the bias-variance tradeoff using the dartboard analogy.",
    sl: "Slide 4 seven numbered objectives.",
    ex: "Objectives 2–4 map onto Sessions 1–3 of the lecture.",
    mt: "Missing the geometric intuition requirement for Ridge/Lasso." });

  Q({ id: "L5-5-Q1", lec: L, pg: [5], tp: "CTA patterns", sb: "Implementation assistant", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are your three new responsibilities in the CTA's 'implementation assistant' era (slide 5)?",
    op: [
      "Specify clearly; verify outputs; interpret results",
      "Write code; debug code; deploy code",
      "Ask questions; take notes; memorize formulas",
      "Compute; code; plot"
    ], an: 0,
    at: "1) Specify clearly (tell the CTA exactly what to produce); 2) verify outputs (check computations and plots are correct); 3) interpret results (decide what they mean for your problem).",
    sl: "Slide 5 before/after prompt examples ('Fit a regression with these 3 features and report R²'; 'Generate a residual plot and interpret it'; 'Apply Lasso for 50 α values and plot the path').",
    ex: "L2–L4 used the CTA as learning partner; now you direct, it implements, you evaluate.",
    mt: "Delegating interpretation to the CTA — it is listed as your responsibility." });

  Q({ id: "L5-6-Q1", lec: L, pg: [6], tp: "Regression", sb: "How much vs which", df: "easy", ty: "mcq", so: "lecture",
    pr: "What does regression predict, and how does it differ from classification (slide 6)?",
    op: [
      "Regression predicts categories; classification predicts quantities",
      "Regression predicts continuous outcomes ('how much', e.g., price, temperature); classification predicts categories ('which category')",
      "Both predict continuous outcomes",
      "Regression only works on time series"
    ], an: 1,
    at: "Regression predicts continuous outcomes — numbers on a scale (price, quantity, °C, hours). Classification (L6 preview) predicts which category (discrete).",
    sl: "Slide 6 four example questions with output types + regression-vs-classification box.",
    ex: "The how-much/which distinction is a likely MCQ.",
    mt: "Classifying 'number of units sold' as classification — it's a continuous count prediction here." });

  Q({ id: "L5-8-Q1", lec: L, pg: [8], tp: "Regression", sb: "Equation symbols", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which symbol interpretation is correct for ŷ = β₀ + β₁x (slide 8)?",
    op: [
      "β₀ = slope; β₁ = intercept",
      "β₀ = intercept (predicted value when x = 0); β₁ = slope (change in ŷ per one-unit increase in x); ŷ = model's predicted value; y = actual target",
      "x = target; y = predictor",
      "ŷ always equals y"
    ], an: 1,
    at: "y target (what we predict); x predictor (input feature); ŷ predicted value; β₀ intercept (predicted value when x = 0); β₁ slope (change in ŷ per one-unit increase in x). Interpretation: 'for each 1-unit increase in x, ŷ changes by β₁ units'.",
    sl: "Slide 8 symbol table + Simple Linear Regression equation + [FIGURE 2: annotated scatter with β₀ and β₁ labeled].",
    ex: "This β₁ phrasing is reused for the midterm's ŷ = 0.2 + 0.8x (0.8 kg per extra training hour).",
    mt: "Swapping intercept and slope roles.",
    mr: "MT-2b" });

  Q({ id: "L5-9-Q1", lec: L, pg: [9], tp: "Regression", sb: "Residuals", df: "medium", ty: "mcq", so: "lecture",
    pr: "How are residuals defined and interpreted (slide 9)?",
    op: [
      "eᵢ = ŷᵢ − yᵢ; positive means over-predicted",
      "eᵢ = yᵢ − ŷᵢ; positive = under-predicted (actual > predicted), negative = over-predicted",
      "eᵢ = yᵢ + ŷᵢ",
      "Residuals are always positive"
    ], an: 1,
    at: "eᵢ = residual = yᵢ − ŷᵢ (prediction error). Positive = under-predicted (actual > predicted); negative = over-predicted.",
    sl: "Slide 9 definitions + Residual Definition box + closing: 'We need a single number summarizing all residuals → the objective function.'",
    ex: "The midterm 2(c) residuals (0.2, −0.4, 0, 0.4, −0.2) sum to zero — a property of OLS with an intercept.",
    mt: "Flipping the sign convention; expecting all residuals positive.",
    mr: "MT-2c" });

  Q({ id: "L5-10-Q1", lec: L, pg: [10], tp: "OLS", sb: "Objective", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does OLS minimize, and what are the three computational steps (slide 10)?",
    op: [
      "Minimize the sum of absolute residuals; steps: predict, subtract, sum",
      "Minimize the sum of squared residuals Σeᵢ²; steps: (1) compute predictions ŷᵢ = β₀ + β₁xᵢ; (2) compute residuals eᵢ = yᵢ − ŷᵢ; (3) square and sum → find β₀, β₁ minimizing Σeᵢ²",
      "Maximize R² directly",
      "Minimize the number of parameters"
    ], an: 1,
    at: "OLS minimizes Σeᵢ² (squared errors). Squaring makes all errors nonnegative and penalizes large errors disproportionately.",
    sl: "Slide 10 objective box + three steps + note: 'We can do the derivation of the closed-form solution — but the CTA handles computation.'",
    ex: "The 'why squared' question is explored in the OLS-vs-LAD demo (slide 11–12).",
    mt: "Saying OLS minimizes absolute errors — that's LAD (least absolute deviations).",
    mr: "MT-2b" });

  Q({ id: "L5-12-Q1", lec: L, pg: [12], tp: "OLS", sb: "Outlier sensitivity", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why is OLS sensitive to outliers, and when is that a feature vs a bug (slide 12)?",
    op: [
      "Squaring amplifies large errors — a single large residual contributes disproportionately; feature when outliers are real signal, bug when they are noise/data errors",
      "OLS ignores outliers by design",
      "LAD is more sensitive to outliers than OLS",
      "Outlier sensitivity is always a bug"
    ], an: 0,
    at: "Squaring amplifies large errors: OLS is pulled toward outliers because one large residual dominates the squared sum. ✓ Feature when outliers are real signal that should influence the model; ✗ Bug when outliers are noise or data errors that distort the model.",
    sl: "Slide 12 key insight + feature/bug boxes + [FIGURE 4: OLS vs LAD comparison — 2-panel with/without outlier]; open question: connection between OLS and maximum likelihood under normal errors.",
    ex: "LAD (absolute-error) fits react far less to a single outlier — the demo's point.",
    mt: "Claiming squared error is always preferable — the choice depends on whether outliers are signal or noise." });

  Q({ id: "L5-13-Q1", lec: L, pg: [13], tp: "Multiple regression", sb: "Several features", df: "medium", ty: "mcq", so: "lecture",
    pr: "How does multiple regression extend the simple model (slide 13)?",
    op: [
      "ŷ = β₀ + β₁x₁ + β₂x₂ + ... + βp xp — each βj measures the effect of feature xj, controlling for all other features; geometry shifts from a line to a hyperplane",
      "It runs separate simple regressions and averages them",
      "It uses only the single best feature",
      "It removes the intercept"
    ], an: 0,
    at: "ŷ = β₀ + β₁x₁ + ... + βp xp; p predictors each with its own coefficient; β₀ still the intercept; geometry: hyperplane, same math.",
    sl: "Slide 13 simple vs multiple equation + 'each βj measures the effect of xj controlling for all other features'.",
    ex: "The 'controlling for' phrasing is the partial-effect interpretation (slide 14).",
    mt: "Interpreting βj as the total effect of xj — it is the partial effect holding others fixed." });

  Q({ id: "L5-14-Q1", lec: L, pg: [14], tp: "Coefficients", sb: "Partial effect", df: "hard", ty: "calc", so: "lecture",
    pr: "With California Housing (value in $100,000s): β(MedInc) = 0.45 and β(AveRooms) = 0.12. Interpret each coefficient in units, and state the caution on the slide.",
    at: "MedInc: each $10K increase in median income is associated with a $45K increase in house value, holding rooms/age/location constant. AveRooms: a 1-room rise in block-group average rooms per household is associated with $12K higher median house value, holding other predictors constant. Caution: association, not causation — 'holding constant' is statistical, not a physical experiment.",
    sl: "Slide 14 partial-effect definition + worked examples + caution box + two questions every coefficient answer addresses (direction; magnitude in meaningful units).",
    ex: "The unit arithmetic: 0.45 in $100K units × $10K = $4.5K per $1K? No — β=0.45 means +1 unit of MedInc (which is measured in $10K) raises value by 0.45×$100K = $45K. Track units carefully.",
    mt: "Forgetting the $100,000s scaling — interpreting 0.45 as $0.45 or $45.",
    mr: null });

  Q({ id: "L5-15-Q1", lec: L, pg: [15], tp: "Datasets", sb: "California Housing", df: "easy", ty: "short", so: "lecture",
    pr: "Describe the California Housing dataset dimensions and features (slide 15).",
    at: "20,640 observations, 8 features (MedInc, HouseAge, AveRooms, AveBedrms, Population, AveOccup, Latitude, Longitude), target = median house value in $100,000s. Each row one observation (n = 20,640), each column one feature (p = 8) — the L2 matrix view. L4 connection: the data has already been cleaned.",
    sl: "Slide 15 three stat cards + L2/L4 connection notes + [FIGURE 18: data preview 5 rows].",
    ex: "These numbers (20,640 × 8) recur in regularization motivation (slide 41: 100+ features).",
    mt: "Forgetting the target's unit ($100,000s) when interpreting coefficients." });

  Q({ id: "L5-16-Q1", lec: L, pg: [16], tp: "Coefficients", sb: "Coefficient change", df: "medium", ty: "calc", so: "lecture",
    pr: "Simple: Price ~ AveRooms gives β(AveRooms) = +0.35. Multiple: Price ~ AveRooms + MedInc gives β(AveRooms) = +0.12. By how much did it drop, and what question does the slide pose?",
    at: "It dropped by roughly two-thirds (0.35 → 0.12). Questions: is the simple regression wrong? Is the multiple regression wrong? Or are they answering different questions?",
    sl: "Slide 16 motivating puzzle with the two models.",
    ex: "The resolution (slide 18): correlated predictors share variance; in simple regression rooms 'gets credit' for income's contribution.",
    mt: "Concluding one model is wrong — they answer different questions (marginal vs partial effect)." });

  Q({ id: "L5-17-Q1", lec: L, pg: [17], tp: "Multicollinearity", sb: "Verification demo", df: "medium", ty: "short", so: "lecture",
    pr: "What verification turns does CTA Demo 2 use for the coefficient change (slide 17), and what correlations confirm the explanation?",
    at: "Turn 1: ask why the rooms coefficient changes when adding income. Turn 2: CTA explains shared variance/confounding. Turn 3: compute correlations — r(AveRooms, MedInc) ≈ 0.33; r(Price, MedInc) ≈ 0.69. Turn 4: substantial correlation confirms the explanation. VERIFY: Validate (explanation consistent with data) + Execute (correlation computation confirms).",
    sl: "Slide 17 four turns + VERIFY connection + pattern 'Verification Through Computation'.",
    ex: "The r ≈ 0.33 predictor correlation is the multicollinearity seed formalized on slide 22.",
    mt: "Thinking r ≈ 0.33 is 'high' — it is moderate; the point is shared variance, not extreme correlation." });

  Q({ id: "L5-18-Q1", lec: L, pg: [18], tp: "Multicollinearity", sb: "Shared variance", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why does the rooms coefficient shrink when income is added (slide 18)?",
    op: [
      "Because the model becomes nonlinear",
      "Because correlated predictors share explanatory power — in simple regression rooms gets credit for everything, including the part really due to income",
      "Because the data changed",
      "Because OLS is biased"
    ], an: 1,
    at: "When two predictors are correlated, they share explanatory power. Simple regression gives rooms credit for income's contribution; multiple regression separates the partial effects.",
    sl: "Slide 18 explanation + verification loop description (CTA explains → human designs test → CTA runs → human evaluates).",
    ex: "This is the implementation-assistant workflow in action.",
    mt: "Attributing the change to a bug or to overfitting instead of shared variance." });

  Q({ id: "L5-19-Q1", lec: L, pg: [19], tp: "Inference", sb: "Four statistics", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the chain of four statistics for coefficient trustworthiness (slide 19)?",
    op: [
      "Estimate → how uncertain? (SE) → signal vs noise? (t = β̂/SE) → verdict (p-value + 95% CI)",
      "Mean → median → mode → range",
      "R² → RMSE → MAE → MAPE",
      "VIF → correlation → covariance → variance"
    ], an: 0,
    at: "1) Estimate β̂ (best guess); 2) Std Error (how much β̂ would vary with new data); 3) t = β̂/SE (signal-to-noise); 4) verdict: p-value + 95% CI (how likely if the feature had no effect; plausible range of true values).",
    sl: "Slide 19 four-step chain with down-arrows + key insight (the CTA generates the statistics; you understand the chain to spot when numbers don't tell a trustworthy story).",
    ex: "'In Session 2, you'll see multicollinearity break this chain by inflating standard errors.'",
    mt: "Skipping the SE step — it is the bridge from estimate to verdict." });

  Q({ id: "L5-20-Q1", lec: L, pg: [20], tp: "Summary", sb: "Session 1", df: "medium", ty: "short", so: "lecture",
    pr: "List the five Session 1 summary points (slide 20).",
    at: "1) Simple linear regression finds the best-fitting line by minimizing squared errors (OLS); 2) squaring amplifies large errors — a deliberate choice, not the only option; 3) multiple regression uses p features simultaneously, each with a partial-effect coefficient; 4) coefficients change when you add predictors because correlated features share explanatory power; 5) a regression summary table connects to L3's statistics: coefficients, standard errors, p-values, CIs.",
    sl: "Slide 20 five numbered points + next-session teaser.",
    ex: "Session 2 asks: can we trust the model on new data?",
    mt: "Forgetting that squared error is a choice (LAD is the alternative)." });

  Q({ id: "L5-22-Q1", lec: L, pg: [22], tp: "Multicollinearity", sb: "Definition/consequences", df: "hard", ty: "mcq", so: "lecture",
    pr: "What is multicollinearity and what are its three consequences (slide 22)?",
    op: [
      "When predictors are uncorrelated; consequences: none",
      "When two or more predictors are highly correlated (overlapping information); consequences: coefficient instability (small data changes → large β swings), inflated standard errors (harder to judge significance), unreliable individual interpretation — but predictions can still be accurate",
      "When the target is correlated with itself",
      "A synonym for overfitting"
    ], an: 1,
    at: "Multicollinearity/collinearity: predictors highly correlated with each other — overlapping information. Consequences: coefficient instability; inflated SEs; unreliable individual interpretation. Key insight: predictions can still be accurate — the problem is interpreting individual coefficients, not overall predictions. Demo 2's r ≈ 0.33 is the seed.",
    sl: "Slide 22 definition + three ⚠ consequences + key insight.",
    ex: "The interpretation-vs-prediction split returns on slide 24.",
    mt: "Claiming multicollinearity invalidates the model's predictions — only interpretation suffers." });

  Q({ id: "L5-23-Q1", lec: L, pg: [23], tp: "Multicollinearity", sb: "VIF table", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the VIF interpretation thresholds, and the three remedies for multicollinearity (slide 23)?",
    op: [
      "VIF = 1 no overlap; 1–5 moderate/usually acceptable; >5 concerning/investigate; >10 serious/take action. Remedies: remove one correlated feature; combine into a composite; regularize (Ridge/Lasso). Correlation matrix: look for |r| > 0.7–0.8 between predictor pairs",
      "VIF > 0.5 is serious; remedy: add more features",
      "VIF measures accuracy",
      "No remedies exist"
    ], an: 0,
    at: "VIF thresholds as above; VIF measures how much a coefficient estimate's variance is inflated by correlation with other predictors. Remedies: Remove / Combine / Regularize. Correlation tool: watch |r| > 0.7–0.8.",
    sl: "Slide 23 two tools + thresholds table + look-for + three remedies.",
    ex: "Ridge is listed as a remedy here and elaborated in Session 3.",
    mt: "Mixing thresholds (>5 investigate, >10 act)." });

  Q({ id: "L5-24-Q1", lec: L, pg: [24], tp: "Multicollinearity", sb: "When it matters", df: "medium", ty: "mcq", so: "lecture",
    pr: "When is multicollinearity a problem and when is it not (slide 24)?",
    op: [
      "Always a problem for both interpretation and prediction",
      "Matters for interpretation ('which features drive prices?', 'is income or rooms more important?') — individual coefficients unreliable, SEs inflated; less of an issue for prediction ('what will this house sell for?') — the model uses combined information effectively. Takeaway: always check; whether it's a problem depends on your goal",
      "Never a problem if R² is high",
      "Only matters for classification"
    ], an: 1,
    at: "Interpretation questions suffer; prediction questions usually don't. Always check for multicollinearity — goal determines impact.",
    sl: "Slide 24 two-column comparison + practical takeaway + transition to overfitting.",
    ex: "The transition line: 'a model can look great on training data and fail on new data. This is overfitting.'",
    mt: "Assuming high R² immunizes against multicollinearity's interpretation issues." });

  Q({ id: "L5-25-Q1", lec: L, pg: [25], tp: "Overfitting", sb: "Definition", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is overfitting, and what analogy is used (slide 25)?",
    op: [
      "A model that performs well on training data but poorly on new data — it captured noise rather than signal. Analogy: memorizing past exam answers vs understanding the material",
      "A model underfitted to training data",
      "A model with too few features",
      "A model that cannot compute R²"
    ], an: 0,
    at: "Overfitting: performs well on training data, poorly on new unseen data — captured noise rather than signal. Student analogy: the memorizer scores 100% on practice tests but fails new questions.",
    sl: "Slide 25 definition + analogy + 'how do we detect this? We need to test on data the model has never seen.'",
    ex: "The memorizer analogy returns in the midterm 2(f)(ii) explanation style.",
    mt: "Confusing overfitting (high variance) with underfitting (high bias)." });

  Q({ id: "L5-26-Q1", lec: L, pg: [26], tp: "Evaluation", sb: "Train/test split", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the standard train/test split procedure (slide 26)?",
    op: [
      "Split after fitting; 50/50; not random",
      "Split before fitting: typically 70–80% training, 20–30% test (keep it random and balanced); the model learns only from training; evaluate on the unseen test set. Code: train_test_split(X, y, test_size=0.2, random_state=42)",
      "Use all data for training and testing",
      "Use the test set for feature selection"
    ], an: 1,
    at: "Split before fitting; 70–80/20–30; random and balanced; test set unseen and not leaked.",
    sl: "Slide 26 three numbered principles + [FIGURE 7: 80/20 split diagram] + implementation code.",
    ex: "random_state fixes reproducibility; test_size=0.2 gives 80/20.",
    mt: "Splitting after preprocessing that uses the full dataset (leakage) — a mistake the slide's 'not leaked' note forbids." });

  Q({ id: "L5-27-Q1", lec: L, pg: [27], tp: "Metrics", sb: "R²", df: "medium", ty: "calc", so: "lecture",
    pr: "Define R² and interpret R² = 0.7. What counts as a 'good' R²? If SSres = 0.4 and SStot = 26, compute R².",
    at: "R² = 1 − SSres/SStot (fraction of variance in y explained). R² = 0.7 means the model explains 70% of the variance in y. R² = 0: no better than predicting the mean; 0.5: half the variance; 1: perfect prediction (suspicious — likely overfit!). Good depends on domain (stock prices: 0.05 may be valuable; physics: 0.95 expected). Computation: R² = 1 − 0.4/26 ≈ 0.9846.",
    sl: "Slide 27 R² formula (unexplained variance SSres; total variance SStot) + interpretation guide + domain note.",
    ex: "The midterm regression uses exactly this computation (0.9846 for 5 points).",
    mt: "Declaring R² = 1 desirable — 'suspicious — likely overfit!' per the slide.",
    mr: "MT-2d" });

  Q({ id: "L5-28-Q1", lec: L, pg: [28], tp: "Metrics", sb: "R² limitations", df: "hard", ty: "mcq", so: "lecture",
    pr: "State the three limitations of R² (slide 28).",
    op: [
      "R² can only decrease with features; detects wrong patterns; comparable across datasets",
      "1) On training data R² cannot decrease as OLS gains features (even random noise); 2) R² does not detect wrong patterns (a line fit to curved data can have moderate R²); 3) R² cannot compare across different datasets (baseline variance differs)",
      "R² is only valid for classification",
      "R² requires normally distributed features"
    ], an: 1,
    at: "The three limitations as stated. This is why we need additional tools: RMSE for absolute error and residual plots for pattern detection.",
    sl: "Slide 28 three limitation blocks + closing.",
    ex: "Midterm 2(e)(iv) asks exactly for why R² alone is insufficient — combine this slide with the 2(e) numbers.",
    mt: "Believing adding random features lowers training R² — it cannot (only test R² typically drops).",
    mr: "MT-2e-iv" });

  Q({ id: "L5-29-Q1", lec: L, pg: [29], tp: "Diagnostics", sb: "Residual plots", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does a good residual plot look like, and why do residual plots beat metrics (slide 29)?",
    op: [
      "A U-shape; patterns are good news",
      "Random scatter around zero across predicted values; any visible pattern reveals a problem. Metrics give a number; residual plots give a diagnosis — R² = 0.8 with patterned residuals needs fixing; R² = 0.6 with random residuals may be fine",
      "A straight line through all points",
      "Residual plots are only for classification"
    ], an: 1,
    at: "Good: random scatter around zero (plot residuals y-axis vs predicted ŷ x-axis). Key insight: metrics give a number, residual plots give a diagnosis.",
    sl: "Slide 29 definition + [FIGURE 8: good residual plot — random scatter around y=0] + key insight.",
    ex: "The four-pattern reference is the next slide.",
    mt: "Judging a model only by R² while ignoring visible residual structure." });

  Q({ id: "L5-30-Q1", lec: L, pg: [30], tp: "Diagnostics", sb: "Four residual patterns", df: "hard", ty: "mcq", so: "lecture",
    pr: "Name the four residual patterns and what each diagnoses (slide 30).",
    op: [
      "Random scatter (good); Funnel shape (heteroscedasticity — variance increases with predicted value); Curved pattern (non-linearity — missing nonlinear term); Clusters (missing categorical — two groups with different intercepts)",
      "Random (bad); funnel (good); straight line (curved); dots (missing data)",
      "U-shape (heteroscedasticity); funnel (non-linearity); clusters (outliers); random (bad)",
      "All four patterns indicate missing data"
    ], an: 0,
    at: "✓ Random Scatter (Good); ✗ Funnel Shape (Heteroscedasticity — variance increases with predicted value); ✗ Curved Pattern (Non-linearity — missing nonlinear term); ✗ Clusters (Missing Categorical — two groups with different intercepts). Random scatter = good; anything else = diagnosis needed.",
    sl: "Slide 30 [FIGURE: Four Residual Patterns and What They Diagnose] — 4-panel 2×2 grid with example scatter clouds and annotations.",
    ex: "This is the reference slide to consult whenever generating residual plots.",
    mt: "Diagnosing a funnel as non-linearity (it is heteroscedasticity) or clusters as outliers (it is a missing categorical variable)." });

  Q({ id: "L5-32-Q1", lec: L, pg: [32], tp: "Diagnostics", sb: "CTA residual demo", df: "medium", ty: "mcq", so: "lecture",
    pr: "What happened in the complete-evaluation demo, and what is the key insight (slide 32)?",
    op: [
      "The CTA failed all six deliverables",
      "The CTA executed all 6 deliverables correctly and quickly and said residuals 'look randomly distributed' — but the residual plot shows a non-linear curve in the lower range; when asked, the CTA suggested feature transformations",
      "The CTA correctly identified the nonlinearity immediately",
      "The residual plot was perfectly random"
    ], an: 1,
    at: "The CTA computes quickly; interpreting residuals requires you. Cycle: diagnose from residuals → iterate with CTA → re-evaluate.",
    sl: "Slide 32 what-happened bullets + key insight.",
    ex: "The six deliverables: 80/20 split, fit all features, R² train/test, residual plot, residual histogram, 3-sentence interpretation.",
    mt: "Trusting the CTA's verbal 'looks random' verdict over the plot itself." });

  Q({ id: "L5-33-Q1", lec: L, pg: [33], tp: "Bias-variance", sb: "Dartboard analogy", df: "medium", ty: "mcq", so: "lecture",
    pr: "What do bias and variance mean, and how do the four dartboard quadrants map (slide 33)?",
    op: [
      "Bias = instability; variance = systematic error",
      "Bias = how far off the average prediction is from the true value (high bias = systematically wrong = underfitting); Variance = how much predictions change with different training data (high variance = unstable = overfitting). Quadrants: high bias low variance (clustered off-center = underfitting); low bias low variance (clustered on-center = ideal); high bias high variance (scattered off-center = worst); low bias high variance (scattered on-center = overfitting)",
      "Bias and variance are both reducible to zero simultaneously",
      "The dartboard analogy shows accuracy only"
    ], an: 1,
    at: "The definitions and quadrant mapping as above. Key insight: more flexible models trade lower bias for higher variance; aim to minimize expected squared error = squared bias + variance + irreducible noise.",
    sl: "Slide 33 definitions + [Dartboard Analogy — 4-quadrant visual] + decomposition note.",
    ex: "The expected-error decomposition (bias² + variance + noise) is a potential formula question.",
    mt: "Swapping bias (systematic offset) and variance (spread across training sets)." });

  Q({ id: "L5-34-Q1", lec: L, pg: [34], tp: "Overfitting", sb: "Polynomial illustration", df: "medium", ty: "mcq", so: "lecture",
    pr: "Describe the underfit/good/overfit polynomial comparison (slide 34).",
    op: [
      "Degree 1 underfits (too simple, misses the pattern); degree 4 fits well (captures pattern without memorizing noise); degree 15 overfits (memorizes training data, fails on new data); degree 15 has the lowest training error but the highest test error",
      "All three degrees perform equally",
      "Degree 15 is best because training error is lowest",
      "Degree 1 is best because it is simplest"
    ], an: 0,
    at: "Degree 1 underfit; degree 4 good fit; degree 15 overfit. Notice: degree 15 has the lowest training error but the highest test error — more complexity doesn't mean better generalization.",
    sl: "Slide 34 [FIGURE 10: 3-panel polynomial comparison on synthetic sinusoidal data] with train/test errors under each panel.",
    ex: "Directly supports midterm 2(f)(i) (best stopping point) and 2(f)(ii) (why training R² selection overfits).",
    mt: "Choosing degree 15 for lowest training error.",
    mr: "MT-2f-i" });

  Q({ id: "L5-35-Q1", lec: L, pg: [35], tp: "Bias-variance", sb: "Most important figure", df: "hard", ty: "mcq", so: "lecture",
    pr: "What does the 'most important figure in the course' show (slide 35)?",
    op: [
      "Training error cannot increase as OLS gains features; test error first decreases (less bias) then increases (more variance); the gap between curves is the generalization gap — find the sweet spot",
      "Test error decreases monotonically with complexity",
      "Training error increases with complexity",
      "The two curves never cross"
    ], an: 0,
    at: "Training error (monotone non-increasing) vs test error (U-shaped: decreases then increases). The gap = generalization gap. Practical implication: always evaluate on test data — training performance alone tells you nothing about generalization.",
    sl: "Slide 35 figure description + callout text.",
    ex: "Midterm 2(f)(i) circles the minimum of the validation curve on exactly this figure.",
    mt: "Marking the crossing point instead of the validation minimum.",
    mr: "MT-2f-i" });

  Q({ id: "L5-36-Q1", lec: L, pg: [36], tp: "Overfitting", sb: "Auto MPG example", df: "hard", ty: "calc", so: "lecture",
    pr: "Auto MPG study: 274 training cars, 118 held out. Degree 1: train RMSE 4.89, test 4.96. Degree 2: 4.31/4.52. Degree 15: 4.03/6.95. Coefficient counts? Compare the 3-vs-16 coefficient change.",
    at: "Coefficients = degree + 1 (including intercept): degree 1 → 2 coefficients; degree 2 → 3; degree 15 → 16. From 3 to 16 coefficients: training RMSE improved 4.31 → 4.03 mpg (~6% lower); test RMSE worsened 4.52 → 6.95 mpg (~54% higher).",
    sl: "Slide 36 three fitted panels (degree 1/2/15) with train/test RMSE and 'Coefficients = degree + 1 (including the intercept). Train/test errors are RMSE in mpg.'",
    ex: "Slide 37 highlights exactly the 6% vs 54% contrast — extra flexibility improves fitting but can make predictions less reliable.",
    mt: "Forgetting the intercept in the coefficient count." });

  Q({ id: "L5-37-Q1", lec: L, pg: [37], tp: "Metrics", sb: "RMSE vs complexity", df: "medium", ty: "short", so: "lecture",
    pr: "Define RMSE and summarize the training/test error behavior across coefficients (slide 37).",
    at: "Least squares minimizes MSE; RMSE is its square root, in mpg (lower is better). Training RMSE falls (4.31 → 4.03, 6% lower from 3→16 coefficients); test RMSE rises (4.52 → 6.95, 54% higher). Training set: the 274 cars used to fit; test: 118 cars the fit never saw. Extra flexibility improves fitting, but can make predictions less reliable.",
    sl: "Slide 37 RMSE definition + error-vs-coefficients chart + note boxes.",
    ex: "RMSE units (mpg) make the degradation interpretable — mirror of the midterm's kg example.",
    mt: "Mixing up which curve falls and which rises." });

  Q({ id: "L5-38-Q1", lec: L, pg: [38], tp: "Metrics", sb: "Random feature puzzle", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why can't training R² decrease when adding a completely random feature, and what happens to test R² (slide 38)?",
    op: [
      "Random features are always rejected by OLS; test R² unchanged",
      "Adding a feature gives the model more flexibility; even a random column correlates slightly with the target by chance in any finite sample; the model exploits this spurious correlation to reduce training error. Irrelevant features add no predictive signal but increase variance by fitting noise: training R² cannot decrease; test R² typically goes down",
      "Training R² decreases because of noise",
      "Test R² always improves with more features"
    ], an: 1,
    at: "The bias-variance connection as above. Suggested experiment: add 1, 5, 10 random columns to California Housing and plot train vs test R².",
    sl: "Slide 38 puzzle + answer + experiment prompt.",
    ex: "Midterm 2(e)(iv)/2(f)(ii) arguments rely on this mechanism.",
    mt: "Claiming random features leave training R² unchanged — it cannot decrease, so it may increase slightly." });

  Q({ id: "L5-39-Q1", lec: L, pg: [39], tp: "Summary", sb: "Session 2", df: "medium", ty: "short", so: "lecture",
    pr: "List the six Session 2 summary points (slide 39).",
    at: "1) Multicollinearity makes individual coefficients unreliable — diagnose with correlation matrices and VIF; 2) overfitting means a model memorizes noise; train/test split detects it; 3) R² measures variance explained, RMSE measures error in target units — use both; 4) residual plots reveal problems metrics miss — the CTA computes, you interpret; 5) bias-variance tradeoff: more complexity reduces bias but increases variance; 6) always evaluate on test data — training performance alone is misleading.",
    sl: "Slide 39 six points + next-session teaser (regularization as the way out).",
    ex: "Directly maps to midterm 2(f) language.",
    mt: "Saying R² or RMSE alone suffices — point 3 says use both." });

  Q({ id: "L5-41-Q1", lec: L, pg: [41], tp: "Regularization", sb: "Motivation", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why does OLS overfit when p is large relative to n (slide 41)?",
    op: [
      "Because OLS is biased",
      "p small vs n: 8 features/20,640 obs (n/p ≈ 2,580) — OLS works well; p large vs n: 100+ features/same obs (n/p ≈ 200 or worse) — OLS overfits (too many knobs). More features = more complexity = lower bias but higher variance; when p is large relative to n the variance penalty dominates. Solution: keep all features but constrain influence — regularization",
      "Because n is too large",
      "Because features are uncorrelated"
    ], an: 1,
    at: "The n/p comparison and bias-variance connection as stated; solution: regularization.",
    sl: "Slide 41 two-column comparison + bias-variance connection + solution statement.",
    ex: "Feature engineering (L4) can expand 8 → 100+ features, creating exactly this situation.",
    mt: "Thinking more features always help — the variance penalty dominates." });

  Q({ id: "L5-42-Q1", lec: L, pg: [42], tp: "Regularization", sb: "Penalized objective", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the two terms of the regularized objective, and what does each λ value do (slide 42)?",
    op: [
      "First term keeps the model simple; second fits the data",
      "First term = data fidelity Σ(yᵢ − ŷᵢ)² (same as OLS); second = complexity penalty λ·Penalty(β) discouraging large coefficients; λ (=α in sklearn) controls the balance: λ=0 pure OLS (high variance); small λ light constraint; optimal λ minimizes total test error; large λ all coefficients near zero (high bias)",
      "λ controls the number of features directly",
      "The penalty term measures prediction error"
    ], an: 1,
    at: "Fit the data + keep the model simple; λ spectrum as described. Key insight: regularization trades a small, controlled increase in bias for a substantial reduction in variance — usually better generalization.",
    sl: "Slide 42 objective + two-term breakdown + four λ-value boxes.",
    ex: "λ is called α in sklearn — the naming dualism recurs in code questions.",
    mt: "Confusing which term is which; forgetting λ→large pushes coefficients toward zero." });

  Q({ id: "L5-43-Q1", lec: L, pg: [43], tp: "Ridge", sb: "L2 penalty", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is Ridge regression's penalty and behavior (slide 43)?",
    op: [
      "λΣ|βj| — sets coefficients to zero",
      "λΣβj² (sum of squared coefficients) — coefficients are shrunk, but typically remain nonzero; handles multicollinearity well by shrinking correlated coefficients; useful when many features each contribute a little. Implementation: Ridge(alpha=1.0).fit(X_train, y_train)",
      "It removes features entirely",
      "It only works with one feature"
    ], an: 1,
    at: "L2 penalty as above; intuition: adding friction to the coefficients — OLS can swing wildly; Ridge dampens those swings; every feature stays in the model with reduced influence.",
    sl: "Slide 43 penalty description + three arrows + implementation + intuition.",
    ex: "Contrast with Lasso's exact zeros (next slide).",
    mt: "Claiming Ridge performs feature selection — it keeps all features." });

  Q({ id: "L5-44-Q1", lec: L, pg: [44], tp: "Lasso", sb: "L1 penalty", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is Lasso regression's penalty and distinctive behavior (slide 44)?",
    op: [
      "λΣβj² — shrinks but keeps all features",
      "λΣ|βj| (sum of absolute coefficients) — some coefficients set to exactly zero = automatic feature selection; useful when many features are irrelevant (sparse model). Implementation: Lasso(alpha=1.0).fit(X_train, y_train)",
      "It creates new composite features like PCA",
      "It requires no scaling"
    ], an: 1,
    at: "L1 penalty as above. L2 connection: both Lasso and PCA reduce dimensionality — but differently: PCA creates new composite features; Lasso selects existing features by zeroing out the rest.",
    sl: "Slide 44 penalty + three arrows + implementation + PCA comparison note.",
    ex: "The PCA-vs-Lasso distinction (create vs select) is an MCQ favorite.",
    mt: "Confusing Lasso (selection) with PCA (construction)." });

  Q({ id: "L5-45-Q1", lec: L, pg: [45], tp: "Regularization", sb: "Scaling requirement", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why is feature scaling required before regularization, and what is the critical leakage warning (slide 45)?",
    op: [
      "Scaling is optional; fit the scaler on all data for best accuracy",
      "The penalty treats all coefficients equally, but unscaled features have different-scale coefficients — unfairly penalizing some features (e.g., MedInc 0.5–15 vs AveRooms 1–8). Solution: StandardScaler. CRITICAL: fit the scaler on training data only — fitting on all data leaks test information. scaler.fit(X_train), then transform both separately",
      "Scaling changes the meaning of λ",
      "Only Lasso needs scaling"
    ], an: 1,
    at: "Penalty fairness rationale + the fit-on-training-only rule as stated.",
    sl: "Slide 45 L1/L4 callback + MedInc/AveRooms example + code + critical warning box + rule statement.",
    ex: "The same no-leakage principle as L4's pipeline (slide 59).",
    mt: "Fitting the scaler on the full dataset — the exact leakage the slide warns about." });

  Q({ id: "L5-47-Q1", lec: L, pg: [47], tp: "Lasso", sb: "Coefficient paths", df: "hard", ty: "mcq", so: "lecture",
    pr: "What does the Lasso coefficient-path experiment show (slide 47)?",
    op: [
      "All coefficients hit zero simultaneously at α=0",
      "Less important features hit zero first; at large α only the strongest predictors survive — automatic feature selection: the model tells you what matters. Key question: why does Lasso hit exactly zero but Ridge doesn't? The answer lies in geometry",
      "Coefficients grow as α increases",
      "Lasso paths are identical to Ridge paths"
    ], an: 1,
    at: "The path behavior and the geometric question as stated.",
    sl: "Slide 47 coefficient-path chart + observation + key question.",
    ex: "Answer on the next slides: diamond (L1) corners vs circle (L2) smooth boundary.",
    mt: "Thinking coefficient order of elimination is arbitrary — importance correlates with who survives." });

  Q({ id: "L5-48-Q1", lec: L, pg: [48], tp: "Geometry", sb: "Diamond vs circle", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why does Lasso produce exact zeros while Ridge does not (slide 48)?",
    op: [
      "Because Lasso uses larger λ values",
      "The constraint region shapes differ: Lasso constrains coefficients to a diamond (L1 ball) with corners on the axes; Ridge to a circle (L2 ball) with no corners. OLS loss contours are ellipses; where the first ellipse touches the boundary decides: diamond → touches a corner → one β = 0; circle → touches a smooth point → typically β ≠ 0",
      "Because Ridge cannot reach zero mathematically",
      "Because Lasso ignores the data term"
    ], an: 1,
    at: "The corner/smooth-point geometry as stated — the difference comes from the shape of the constraint region.",
    sl: "Slide 48 setup + diamond vs circle comparison rows.",
    ex: "'Corners produce zeros' is the one-line takeaway (slide 49).",
    mt: "Saying Lasso always sets many coefficients to zero — it happens when contours hit corners; the mechanism, not a guarantee for every coefficient." });

  Q({ id: "L5-49-Q1", lec: L, pg: [49], tp: "Geometry", sb: "Geometric visualization", df: "hard", ty: "short", so: "lecture",
    pr: "Describe the geometric constraint visualization (slide 49) and its key insight.",
    at: "Left panel: Lasso diamond (L1 ball) + OLS contour ellipses — the contour touches a corner (β₂ = 0). Right panel: Ridge circle (L2 ball) + OLS contour ellipses — the contour touches a smooth point (both β > 0). Key insight: 'Corners produce zeros' — the L1 diamond has corners on the axes; the L2 circle has no corners; that geometric difference is why Lasso produces sparse solutions and Ridge doesn't.",
    sl: "Slide 49 [FIGURE 17: Geometric constraint visualization] two panels + key insight.",
    ex: "If asked to draw: ellipse tangent to a diamond corner vs tangent to a circle.",
    mt: "Drawing the ellipse touching the diamond's edge midpoint — that would not zero a coefficient." });

  Q({ id: "L5-50-Q1", lec: L, pg: [50], tp: "Ridge vs Lasso", sb: "Comparison table", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which Ridge-vs-Lasso comparison rows are correct (slide 50)?",
    op: [
      "Ridge penalty λΣβj², keeps all features, circle geometry; Lasso λΣ|βj|, automatic selection, diamond geometry; Elastic Net combines λ₁Σ|βj| + λ₂Σβj² getting selection from Lasso and stability from Ridge",
      "Both penalties are identical",
      "Ridge performs selection; Lasso shrinks only",
      "Elastic Net is pure L1"
    ], an: 0,
    at: "The table as stated. Caveat: Lasso + multicollinearity — when features are highly correlated, Lasso arbitrarily picks one and zeros the others; which one it keeps can change with small data changes; Ridge or Elastic Net may be more stable.",
    sl: "Slide 50 comparison table + Elastic Net formula + Lasso multicollinearity caveat.",
    ex: "The caveat resolves the tension between 'regularize as a multicollinearity remedy' and 'Lasso picks arbitrarily'.",
    mt: "Recommending Lasso for highly correlated features — the caveat says Ridge/Elastic Net are more stable." });

  Q({ id: "L5-51-Q1", lec: L, pg: [51], tp: "Regularization", sb: "α selection", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the simplified procedure for selecting the penalty strength (slide 51)?",
    op: [
      "Try: fit for a range of α (e.g., 50 values 0.001–10); Evaluate: compute validation RMSE (or R²) for each; Pick: the α minimizing validation error. Shortcut: LassoCV/RidgeCV automate this with internal cross-validation",
      "Always use α = 1.0",
      "Choose α by training R²",
      "Choose the largest α possible"
    ], an: 0,
    at: "The try/evaluate/pick procedure and CV shortcut as stated.",
    sl: "Slide 51 three steps + shortcut note + validation RMSE chart.",
    ex: "Choosing α by training error would pick the smallest α (overfit) — validation is required.",
    mt: "Selecting α by training performance." });

  Q({ id: "L5-52-Q1", lec: L, pg: [52], tp: "Workflow", sb: "Complete regression workflow", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the complete regression workflow (slide 52)?",
    op: [
      "Prepare (L4: wrangle, encode, scale) → Build (S1: OLS, multiple regression) → Evaluate (S2: R², RMSE, residual diagnostics) → Improve (S3: regularization, penalty tuning). The workflow is iterative, not linear — poor residual plots send you back to Prepare or Improve",
      "Build → Prepare → Improve → Evaluate",
      "A strict one-way pipeline",
      "Evaluate → Build → Prepare → Improve"
    ], an: 0,
    at: "The four-stage cycle with lecture/session attributions as stated.",
    sl: "Slide 52 four-column workflow + key insight (iterative; CTA executes each stage, you direct).",
    ex: "Residual diagnostics triggering a loop back is the exam-friendly detail.",
    mt: "Treating the workflow as linear — the slide stresses iteration." });

  Q({ id: "L5-53-Q1", lec: L, pg: [53], tp: "Summary", sb: "Seven takeaways", df: "medium", ty: "short", so: "lecture",
    pr: "List the seven key takeaways of Lecture 5 (slide 53).",
    at: "1) Regression predicts continuous outcomes using linear combinations of features; 2) OLS minimizes squared residuals — coefficients need interpretation, not just computation; 3) multiple regression introduces multicollinearity — diagnose with VIF before interpreting; 4) overfitting = low training error, high test error — always use train/test split; 5) R² and RMSE quantify model quality; residual plots reveal what metrics miss (DO VISUALIZE!); 6) bias-variance tradeoff is the central tension — regularization manages it; 7) Ridge shrinks, Lasso selects — choose based on your assumption about feature relevance. Closing: the CTA computes; you evaluate, interpret, and direct improvement.",
    sl: "Slide 53 seven numbered takeaways.",
    ex: "The L5 exam skeleton.",
    mt: "Missing the Ridge-shrinks/Lasso-selects mnemonic." });

  Q({ id: "L5-54-Q1", lec: L, pg: [54], tp: "Transition", sb: "Classification preview", df: "medium", ty: "mcq", so: "lecture",
    pr: "What stays the same and what changes moving to L6 classification (slide 54)?",
    op: [
      "Everything changes; nothing transfers",
      "Same: train/test split methodology, overfitting diagnosis/prevention, regularization concepts, VERIFY framework, CTA workflow. Changes: target categorical, model logistic replaces OLS, metrics precision/recall/AUC, accuracy misleads on imbalance, dataset = Telco Churn from L4. Preview puzzle: if only 5% churn, an always-'no churn' model gets 95% accuracy — is that good? (No.)",
      "Only the dataset changes",
      "Regularization no longer applies"
    ], an: 1,
    at: "The stays/changes table + the preview puzzle as stated.",
    sl: "Slide 54 two-column comparison + same-dataset connection + warning puzzle box.",
    ex: "The 95%-accuracy puzzle is answered in L6 Session 2 (73.5% version with Telco).",
    mt: "Thinking evaluation skills are model-specific — the slide says they transfer." });

  Q({ id: "L5-55-Q1", lec: L, pg: [55], tp: "Extensions", sb: "Intriguing questions", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which four technically intriguing questions close the lecture (slide 55)?",
    op: [
      "OLS ↔ maximum likelihood under normal errors?; why does adding a random feature never decrease training R² but usually decrease test R²?; what happens with Elastic Net and when does it beat Ridge/Lasso?; is polynomial regression (y = β₀ + β₁x + β₂x²) actually 'linear'?",
      "What is a p-value? What is a t-test? What is ANOVA? What is chi-square?",
      "How do transformers work? What is attention? What are embeddings? What is RLHF?",
      "Which CPU? How much RAM? Which GPU? Which cloud?"
    ], an: 0,
    at: "The four TIQ items as stated. For TIQ4: the answer — 'linear' means linearly combining features with linear coefficients; βi are linear, x² is just a new feature.",
    sl: "Slide 55 four TIQ blocks with prompts.",
    ex: "TIQ2 is the midterm 2(f)(ii) mechanism; TIQ4 clarifies the meaning of 'linear' in linear regression.",
    mt: "Calling polynomial regression nonlinear regression — it is linear in the coefficients." });

  Q({ id: "L5-56-Q1", lec: L, pg: [56], tp: "Resources", sb: "Readings", df: "easy", ty: "short", so: "lecture",
    pr: "What are the core readings and documentation references (slide 56)?",
    at: "ISLP Chapter 3 (Sections 3.1–3.3) — linear regression fundamentals; ISLP Chapter 6.2 — shrinkage methods (Ridge and Lasso, penalty selection). sklearn docs: linear_model (LinearRegression, Ridge, Lasso, ElasticNet, LassoCV, RidgeCV); preprocessing (StandardScaler); model_selection (train_test_split); metrics (r2_score, mean_squared_error, mean_absolute_error). Pro tip: ask the CTA to explain ISLP concepts more simply.",
    sl: "Slide 56 readings + documentation links + pro tip.",
    ex: "ISLP = An Introduction to Statistical Learning (with Python).",
    mt: "Missing that penalty selection lives in ISLP 6.2." });
})();
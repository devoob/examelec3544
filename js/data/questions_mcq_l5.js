/* Extra MCQ bank — Lecture 5 (built for MCQ Sets; distinct angles from questions_l5.js). */
(function () {
  var L = 5;

  Q({ id: "L5-MCQ-01", lec: L, pg: [6], tp: "Regression", sb: "Output types", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which example output belongs to regression?",
    op: ["Which category", "Price in dollars", "Churn yes/no", "Spam/ham"],
    an: 1, at: "Price ($) — a continuous quantity. Classification predicts which category.",
    sl: "Slide 6 examples: house price, units next quarter, temperature, time until maintenance.",
    ex: "Regression = 'how much'; classification = 'which category'.",
    mt: "Classifying price prediction as classification." });

  Q({ id: "L5-MCQ-02", el: "Q2(b)", lec: L, pg: [8], tp: "Regression", sb: "Slope meaning", df: "medium", ty: "mcq", so: "lecture",
    pr: "If β₁ = 0.8, what happens to ŷ for each 1-unit increase in x?",
    op: ["ŷ increases by 0.8 units", "ŷ stays constant", "ŷ doubles", "ŷ decreases by 0.8"],
    an: 0, at: "ŷ changes by β₁ = 0.8 units per one-unit increase in x.",
    sl: "Slide 8 interpretation: 'for each 1-unit increase in x, ŷ changes by β₁ units'.",
    ex: "In the midterm gym data: 0.8 kg weight loss per extra training hour.",
    mt: "Reading β₁ as elastic rather than per-unit." });

  Q({ id: "L5-MCQ-03", lec: L, pg: [9], tp: "Regression", sb: "Residual sign", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does a POSITIVE residual mean?",
    op: ["Over-predicted (predicted > actual)", "Under-predicted (actual > predicted)", "Zero error", "The model is biased upward"],
    an: 1, at: "Positive = under-predicted (actual > predicted), since e = y − ŷ.",
    sl: "Slide 9 residual definition.",
    ex: "Sign convention matters — flipping it inverts every interpretation.",
    mt: "Flipping the sign convention." });

  Q({ id: "L5-MCQ-04", lec: L, pg: [10], tp: "OLS", sb: "Why square", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which reason for squaring errors is given?",
    op: ["It makes computation faster", "It makes all errors nonnegative and penalizes large errors disproportionately", "It removes outliers", "It guarantees R² = 1"],
    an: 1, at: "Squaring makes errors nonnegative and penalizes large errors disproportionately.",
    sl: "Slide 10: steps — predict, residual, square-and-sum, minimize.",
    ex: "The alternative (absolute errors) is explored in the OLS vs LAD demo.",
    mt: "Claiming squaring removes outliers — it amplifies them." });

  Q({ id: "L5-MCQ-05", lec: L, pg: [12], tp: "OLS", sb: "Feature vs bug", df: "hard", ty: "mcq", so: "lecture",
    pr: "Outlier sensitivity of OLS is a FEATURE when?",
    op: ["Outliers are noise", "Outliers are real signal that should influence the model", "The data is fake", "n is small"],
    an: 1, at: "Feature: when outliers are real signal; bug: when they are noise/data errors distorting the model.",
    sl: "Slide 12: squaring amplifies large errors — one large residual dominates.",
    ex: "LAD (absolute-error) fits are far less moved by one outlier.",
    mt: "Treating outlier sensitivity as always a bug." });

  Q({ id: "L5-MCQ-06", lec: L, pg: [13], tp: "Multiple regression", sb: "Geometry", df: "medium", ty: "mcq", so: "lecture",
    pr: "With p predictors, what geometry does regression represent?",
    op: ["A point", "A line", "A hyperplane", "A circle"],
    an: 2, at: "A hyperplane — geometry shifts from line (1 feature) to hyperplane (p features), same math.",
    sl: "Slide 13: ŷ = β₀ + β₁x₁ + … + βp xp; β₀ still the intercept.",
    ex: "Each βj is a partial effect holding others fixed.",
    mt: "Calling multiple regression a curve by default." });

  Q({ id: "L5-MCQ-07", lec: L, pg: [14], tp: "Coefficients", sb: "Units example", df: "hard", ty: "mcq", so: "lecture",
    pr: "If β(MedInc) = 0.45 (target in $100,000s), what does a $10K income increase associate with?",
    op: ["$4,500 higher value", "$45,000 higher value", "$450 higher value", "$45 higher value"],
    an: 1, at: "$45K higher median house value, holding other predictors constant (0.45 × $100K per 1 unit = $10K of MedInc).",
    sl: "Slide 14 worked example; MedInc is measured in $10K units in the dataset.",
    ex: "Caution: association, not causation — 'holding constant' is statistical.",
    mt: "Dropping the $100,000s target scaling." });

  
  
  
  Q({ id: "L5-MCQ-11", lec: L, pg: [18], tp: "Multicollinearity", sb: "Simple regression credit", df: "medium", ty: "mcq", so: "lecture",
    pr: "In simple regression, why does rooms get 'credit' for income's effect?",
    op: ["Because rooms causes income", "Because the predictors are correlated and share explanatory power", "Because income is irrelevant", "Because of random chance only"],
    an: 1, at: "Correlated predictors share explanatory power — the single predictor absorbs the correlated one's contribution.",
    sl: "Slide 18 shared-variance explanation.",
    ex: "Multiple regression separates partial effects.",
    mt: "Attributing the credit shift to chance." });

  Q({ id: "L5-MCQ-12", lec: L, pg: [19], tp: "Inference", sb: "Signal-to-noise", df: "medium", ty: "mcq", so: "lecture",
    pr: "How is the t-statistic for a coefficient formed?",
    op: ["t = β̂ × SE", "t = β̂ / SE", "t = SE / β̂", "t = β̂ + SE"],
    an: 1, at: "t = β̂/SE — how far the estimate is from zero relative to its uncertainty.",
    sl: "Slide 19 chain: estimate → SE → t → p-value + 95% CI.",
    ex: "Multicollinearity inflates SE, shrinking t toward non-significance.",
    mt: "Inverting the ratio." });

  
  Q({ id: "L5-MCQ-14", lec: L, pg: [22], tp: "Multicollinearity", sb: "Instability", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which consequence of multicollinearity is 'small changes in data cause large swings in individual β values'?",
    op: ["Coefficient instability", "Inflated standard errors", "Unreliable individual interpretation", "Prediction failure"],
    an: 0, at: "Coefficient instability — individual coefficients swing with small data changes.",
    sl: "Slide 22 three consequences; predictions can still be accurate.",
    ex: "The problem is with interpreting individual coefficients, not overall predictions.",
    mt: "Claiming predictions become invalid." });

  Q({ id: "L5-MCQ-15", lec: L, pg: [23], tp: "Multicollinearity", sb: "VIF action", df: "medium", ty: "mcq", so: "lecture",
    pr: "At which VIF level does standard guidance say to take action (not merely investigate)?",
    op: ["> 1", "> 5", "> 10", "> 100"],
    an: 2, at: "VIF > 10 = serious — take action (VIF > 5 = concerning/investigate).",
    sl: "Slide 23 VIF table: =1 none; 1–5 moderate; >5 investigate; >10 act.",
    ex: "Also look for |r| > 0.7–0.8 between predictor pairs.",
    mt: "Acting at VIF > 5 instead of investigating." });

  Q({ id: "L5-MCQ-16", lec: L, pg: [24], tp: "Multicollinearity", sb: "Prediction goal", df: "medium", ty: "mcq", so: "lecture",
    pr: "For which goal is multicollinearity LESS of an issue?",
    op: ["Attributing importance to individual features", "Predicting outcomes", "Testing which feature matters more", "Reporting coefficient tables"],
    an: 1, at: "Prediction — the model uses combined information effectively; only interpretation suffers.",
    sl: "Slide 24: interpretation questions ('is income or rooms more important?') suffer; prediction questions mostly don't.",
    ex: "Always check; whether it's a problem depends on your goal.",
    mt: "Assuming multicollinearity breaks predictions." });

  Q({ id: "L5-MCQ-17", lec: L, pg: [26], tp: "Evaluation", sb: "Split ratio", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the typical train/test split range?",
    op: ["50/50", "70–80% train, 20–30% test", "95/5", "10/90"],
    an: 1, at: "70–80% training, 20–30% test — split before fitting; test set unseen.",
    sl: "Slide 26 + train_test_split(test_size=0.2, random_state=42).",
    ex: "Keep it random, balanced, and not leaked.",
    mt: "Splitting after fitting." });

  Q({ id: "L5-MCQ-18", lec: L, pg: [27], tp: "Metrics", sb: "R² = 1", df: "medium", ty: "mcq", so: "lecture",
    pr: "How should R² = 1 on training data be interpreted?",
    op: ["Ideal and safe", "Perfect prediction (suspicious — likely overfit!)", "Impossible", "The minimum acceptable"],
    an: 1, at: "Perfect prediction — suspicious, likely overfit!",
    sl: "Slide 27 interpretation guide: 0 = mean-level, 0.5 = half variance, 1 = perfect/suspicious.",
    ex: "What counts as 'good' depends on the domain (stock 0.05 may be valuable).",
    mt: "Treating R² = 1 as the goal." });

  Q({ id: "L5-MCQ-19", lec: L, pg: [28], tp: "Metrics", sb: "Feature monotonicity", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why can't training R² decrease when OLS gains features?",
    op: ["Features are always useful", "More features = more flexibility = at least as good a fit to this dataset", "OLS removes bad features", "R² is bounded"],
    an: 1, at: "More features = more flexibility = better fit to this specific dataset — even meaningless features.",
    sl: "Slide 28 limitation 1; the model exploits chance correlations in finite samples.",
    ex: "Test R² typically goes down (slide 38's puzzle).",
    mt: "Expecting a penalty for useless features on training R²." });

  Q({ id: "L5-MCQ-20", lec: L, pg: [29], tp: "Diagnostics", sb: "Plot axes", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the axes of a residual plot?",
    op: ["Residuals (y) vs predicted values (x)", "Actual (y) vs residual (x)", "Predicted (y) vs actual (x)", "Time (x) vs residual (y) only"],
    an: 0, at: "Residuals on the y-axis vs predicted values ŷ on the x-axis — good models show random scatter around zero.",
    sl: "Slide 29 [FIGURE 8: good residual plot].",
    ex: "Metrics give a number; residual plots give a diagnosis.",
    mt: "Plotting residuals against actuals instead of predicted values." });

  Q({ id: "L5-MCQ-21", lec: L, pg: [33], tp: "Bias-variance", sb: "Definitions", df: "hard", ty: "mcq", so: "lecture",
    pr: "High variance means?",
    op: ["Systematically wrong predictions", "Predictions change a lot with different training data (unstable = overfitting)", "Predictions are always accurate", "Bias is zero"],
    an: 1, at: "High variance = unstable predictions across training samples = overfitting.",
    sl: "Slide 33: bias = distance of average prediction from truth (underfit); variance = sensitivity to training data (overfit).",
    ex: "Expected error = bias² + variance + irreducible noise.",
    mt: "Swapping bias and variance meanings." });

  Q({ id: "L5-MCQ-22", lec: L, pg: [34], tp: "Overfitting", sb: "Degree comparison", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which degree has the lowest training error but highest test error in the polynomial figure?",
    op: ["Degree 1", "Degree 4", "Degree 15", "All equal"],
    an: 2, at: "Degree 15 — memorizes training data, fails on new data.",
    sl: "Slide 34: degree 1 underfit; degree 4 good; degree 15 overfit.",
    ex: "More complexity doesn't mean better generalization.",
    mt: "Choosing the model with the lowest training error." });

  Q({ id: "L5-MCQ-23", lec: L, pg: [35], tp: "Bias-variance", sb: "Generalization gap", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the gap between the training and test error curves called?",
    op: ["The bias", "The generalization gap", "The residual", "The variance ratio"],
    an: 1, at: "The generalization gap — your job is to find the sweet spot minimizing test error.",
    sl: "Slide 35: training error can't increase with OLS features; test error is U-shaped.",
    ex: "Always evaluate on test data; training performance alone misleads.",
    mt: "Calling it the noise floor." });

  Q({ id: "L5-MCQ-24", lec: L, pg: [36], tp: "Overfitting", sb: "Coefficient count", df: "medium", ty: "mcq", so: "lecture",
    pr: "For polynomial degree 15, how many fitted coefficients (including intercept) are there?",
    op: ["15", "16", "14", "17"],
    an: 1, at: "16 — coefficients = degree + 1 including the intercept.",
    sl: "Slide 36: degree 1 → 2 coefficients; degree 2 → 3; degree 15 → 16.",
    ex: "274 training cars; 118 held out.",
    mt: "Forgetting the intercept." });

  
  Q({ id: "L5-MCQ-26", lec: L, pg: [38], tp: "Metrics", sb: "Random feature", df: "hard", ty: "mcq", so: "lecture",
    pr: "What happens to test R² when a completely random feature is added?",
    op: ["It increases", "It typically goes down", "It stays exactly the same", "It becomes undefined"],
    an: 1, at: "Test R² typically goes down — the spurious correlation doesn't repeat on new data; variance increases.",
    sl: "Slide 38: irrelevant features add no signal but increase variance by fitting noise.",
    ex: "Training R² cannot decrease under OLS.",
    mt: "Expecting test R² to improve with noise features." });

  
  Q({ id: "L5-MCQ-28", lec: L, pg: [42], tp: "Regularization", sb: "λ = 0", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does λ = 0 give in the regularized objective?",
    op: ["All coefficients zero", "Pure OLS (high variance)", "Maximum bias", "No intercept"],
    an: 1, at: "λ = 0 → pure OLS — no penalty, high variance.",
    sl: "Slide 42 λ spectrum: 0 = OLS; small = light; optimal = best balance; large = near-zero coefficients (high bias).",
    ex: "λ is called α in sklearn.",
    mt: "Thinking λ = 0 maximizes bias." });

  Q({ id: "L5-MCQ-29", lec: L, pg: [43], tp: "Ridge", sb: "Intuition", df: "medium", ty: "mcq", so: "lecture",
    pr: "What intuition is given for Ridge?",
    op: ["Adding friction to the coefficients — OLS swings wildly, Ridge dampens swings", "Removing features", "Creating new features", "Maximizing training R²"],
    an: 0, at: "Adding friction — every feature stays but with reduced influence.",
    sl: "Slide 43: useful when many features each contribute a little; handles multicollinearity well.",
    ex: "Implementation: Ridge(alpha=1.0).",
    mt: "Claiming Ridge removes features." });

  Q({ id: "L5-MCQ-30", lec: L, pg: [44], tp: "Lasso", sb: "Sparsity", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does a sparse model mean in the Lasso context?",
    op: ["Few observations", "Many coefficients exactly zero — automatic feature selection", "Few outliers", "Small λ"],
    an: 1, at: "Sparse = many coefficients zeroed — Lasso tells you which features matter most.",
    sl: "Slide 44: penalty = sum of absolute coefficients; some set exactly to zero.",
    ex: "PCA creates features; Lasso selects existing ones.",
    mt: "Confusing data sparsity with coefficient sparsity." });

  Q({ id: "L5-MCQ-31", lec: L, pg: [45], tp: "Regularization", sb: "Scaling example", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why would the penalty treat MedInc and AveRooms unequally without standardization?",
    op: ["Features have different scales (MedInc 0.5–15 vs AveRooms 1–8), so coefficients are on different scales", "MedInc is categorical", "AveRooms has outliers", "The penalty is random"],
    an: 0, at: "Different feature ranges → different coefficient scales → unfair equal treatment by λΣβ²/λΣ|β|.",
    sl: "Slide 45: fit the scaler on training data only — fitting on all data leaks test information.",
    ex: "StandardScaler before Ridge/Lasso always.",
    mt: "Fitting the scaler on the full dataset." });

  
  
  
  Q({ id: "L5-MCQ-35", lec: L, pg: [51], tp: "Regularization", sb: "Alpha selection", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which sklearn classes automate α selection?",
    op: ["LassoCV and RidgeCV", "GridSearchSVM", "PCA and KMeans", "LinearRegression and LogisticRegression"],
    an: 0, at: "LassoCV / RidgeCV automate α selection with internal cross-validation.",
    sl: "Slide 51: try a range → evaluate validation RMSE → pick the minimum.",
    ex: "Full cross-validation is covered in L6.",
    mt: "Selecting α by training error." });

  })();
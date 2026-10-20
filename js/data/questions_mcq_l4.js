/* Extra MCQ bank — Lecture 4 (built for MCQ Sets; distinct angles from questions_l4.js). */
(function () {
  var L = 4;

  
  
  
  
  
  
  
  Q({ id: "L4-MCQ-08", lec: L, pg: [14], tp: "Applications", sb: "Climate distinction", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which challenge distinguishes weather prediction from climate projection?",
    op: ["Different timescales require different methods", "They are identical problems", "Climate is easier", "Weather uses no data"],
    an: 0, at: "Different timescales, different methods — do not conflate them.",
    sl: "Slide 14 challenges: temporal dependencies; spatial correlations; massive scale; weather vs climate.",
    ex: "Billions of data points across decades.",
    mt: "Treating the two as interchangeable." });

  
  
  Q({ id: "L4-MCQ-11", lec: L, pg: [17], tp: "Applications", sb: "Common thread", df: "medium", ty: "mcq", so: "lecture",
    pr: "Across healthcare, finance, climate, and smart cities, which part of the workflow is universal and which part is domain-specific?",
    op: ["The pipeline", "The judgment", "The workflow order", "The data format"],
    an: 1, at: "The pipeline is universal; the judgment is domain-specific.",
    sl: "Slide 17: Question → Collect → Clean → Analyze → Model → Communicate across all four domains.",
    ex: "Same steps, different context knowledge.",
    mt: "Saying the pipeline itself differs per domain." });

  
  
  
  
  
  Q({ id: "L4-MCQ-17", lec: L, pg: [27], tp: "Wrangling", sb: "Workflow order", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the correct wrangling workflow order?",
    op: ["Assess → Clean → Explore → Prepare", "Clean → Assess → Prepare → Explore", "Explore → Clean → Assess → Prepare", "Prepare → Clean → Explore → Assess"],
    an: 0, at: "Assess quality → Clean based on mechanisms → Explore patterns → Prepare (encode, scale, pipeline).",
    sl: "Slide 27 workflow; ~80% (or more) of data scientists' time is data preparation.",
    ex: "Running example: Telco Customer Churn.",
    mt: "Cleaning before assessing." });

  Q({ id: "L4-MCQ-18", lec: L, pg: [28], tp: "Wrangling", sb: "Feature groups", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which feature belongs to 'Account Information' in the Telco dataset?",
    op: ["gender", "TechSupport", "MonthlyCharges", "StreamingTV"],
    an: 2, at: "MonthlyCharges — account information (with tenure, Contract, PaymentMethod, TotalCharges).",
    sl: "Slide 28 groups: Demographics (gender, SeniorCitizen, Partner, Dependents); Account (tenure, Contract, PaymentMethod, MonthlyCharges, TotalCharges); Services (PhoneService, InternetService, OnlineSecurity, …, StreamingTV, StreamingMovies).",
    ex: "Business question: predict which customers will churn (leave within the last month).",
    mt: "Placing TechSupport under account info (it is a service)." });

  
  Q({ id: "L4-MCQ-20", lec: L, pg: [30], tp: "Quality assessment", sb: "Most important diagnostic", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pandas call is called the 'most important diagnostic'?",
    op: ["df.shape", "df.dtypes", "df.info()", "df.memory_usage(deep=True)"],
    an: 1, at: "df.dtypes — type mismatches are common and informative.",
    sl: "Slide 30: shape, dtypes (most important), info, memory_usage.",
    ex: "A numerical column stored as object means hidden quality issues (Telco TotalCharges).",
    mt: "Choosing df.info() as the most important." });

  Q({ id: "L4-MCQ-21", lec: L, pg: [31], tp: "Quality assessment", sb: "Missing proportion", df: "medium", ty: "mcq", so: "lecture",
    pr: "According to the missingness rules of thumb, at what proportion should you consider dropping the column?",
    op: ["> 5%", "> 10%", "> 30%", "> 50%"],
    an: 2, at: "> 30% — consider dropping the column (5–30% needs careful strategy; < 5% manageable).",
    sl: "Slide 31 rules + watch-out: 'missing' isn't always NaN (blank strings, 'N/A', −999 sentinels).",
    ex: "Critical question: WHY is data missing?",
    mt: "Dropping columns at 5% missingness." });

  Q({ id: "L4-MCQ-22", lec: L, pg: [32], tp: "Quality assessment", sb: "Cross-field", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which example illustrates a cross-field inconsistency?",
    op: ["'Female' vs 'female'", "Tenure = 0 but TotalCharges = $5,000", "df.duplicated().sum()", "Charges above $10,000"],
    an: 1, at: "Tenure = 0 with TotalCharges = $5,000 — relationships between columns reveal errors.",
    sl: "Slide 32 validity quadrants: out-of-range; duplicates (investigate before dropping); inconsistent categories; cross-field.",
    ex: "CTA finds these; interpreting whether they are errors needs domain knowledge.",
    mt: "Classifying 'Female' vs 'female' as cross-field (it is inconsistent categories)." });

  Q({ id: "L4-MCQ-23", lec: L, pg: [33], tp: "Quality assessment", sb: "Count plots", df: "medium", ty: "mcq", so: "lecture",
    pr: "What do count plots assess?",
    op: ["Outliers and quartile spread", "Categorical balance — are classes roughly even?", "Numerical shape", "Subtle density patterns"],
    an: 1, at: "Count plots: categorical balance — are classes roughly even?",
    sl: "Slide 33 tools: histograms (shape); box plots (outliers/quartiles); count plots (balance); KDE (subtle patterns).",
    ex: "Beyond df.describe() — visualization reveals what statistics hide.",
    mt: "Assigning balance checks to histograms." });

  
  
  
  Q({ id: "L4-MCQ-27", lec: L, pg: [38], tp: "Quality assessment", sb: "Report order", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the THIRD section of the Data Quality Report?",
    op: ["Data Overview", "Findings by Check Type", "Prioritized Issues", "Recommended Actions"],
    an: 2, at: "3) Prioritized Issues — ranked by impact on analysis (must-fix vs can-wait).",
    sl: "Slide 38: 1 overview; 2 findings by check; 3 prioritized issues; 4 recommended actions.",
    ex: "Prioritization requires judgment about analysis impact.",
    mt: "Putting recommended actions before prioritization." });

  Q({ id: "L4-MCQ-28", lec: L, pg: [39], tp: "Missingness", sb: "MNAR example", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which example illustrates MNAR?",
    op: ["Lab tech drops test tubes", "Older patients skip a fitness test (age observed)", "High earners don't report income", "Server outage loses random records"],
    an: 2, at: "High earners don't report income — missingness depends on income itself (unobserved).",
    sl: "Slide 39: MCAR lab-tube drop; MAR older patients/age observed; MNAR high earners/income unobserved.",
    ex: "Determining the mechanism requires reasoning about the data-generating process — not data alone.",
    mt: "Classifying the age-related skip as MNAR (age is observed, so MAR)." });

  Q({ id: "L4-MCQ-29", lec: L, pg: [41], tp: "Missingness", sb: "Strategy mapping", df: "hard", ty: "mcq", so: "lecture",
    pr: "Under MCAR, which approach 'can be unbiased'?",
    op: ["Deletion", "Conditional imputation", "Modeling the missingness process", "No approach works"],
    an: 0, at: "MCAR → deletion can be unbiased (though listwise deletion loses data).",
    sl: "Slide 41: MCAR deletion; MAR conditional imputation; MNAR no simple fix.",
    ex: "'The mechanism is the judgment call. The implementation is just code.'",
    mt: "Claiming deletion is unbiased under MNAR." });

  Q({ id: "L4-MCQ-30", lec: L, pg: [42], tp: "Cleaning", sb: "Model-based", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which strategy includes KNN and iterative imputers?",
    op: ["Deletion", "Constant fill", "Statistical imputation", "Model-based imputation"],
    an: 3, at: "Model-based: KNN, iterative imputer, or regression-based — handles complex MAR patterns.",
    sl: "Slide 42 toolkit order: deletion → constant → statistical → conditional → model-based.",
    ex: "Statistical imputation is simpler but distorts variance.",
    mt: "Filing KNN under statistical imputation." });

  Q({ id: "L4-MCQ-31", lec: L, pg: [44], tp: "Cleaning", sb: "Strategy outcomes", df: "hard", ty: "mcq", so: "lecture",
    pr: "What is the objection to MEDIAN imputation for zero-tenure TotalCharges?",
    op: ["It is too slow", "It is the same problem at a different value — the median is still unrealistic for brand-new customers", "It removes rows", "It requires KNN"],
    an: 1, at: "Same issue, different location: the median is still unrealistic for zero-tenure customers.",
    sl: "Slide 44: mean imputation spike ~$2,280; median spike at a different value; conditional imputation preserves the natural relationship.",
    ex: "Both simple strategies distort the distribution.",
    mt: "Believing the median avoids the artificial-spike problem." });

  Q({ id: "L4-MCQ-32", lec: L, pg: [46], tp: "Cleaning", sb: "Category standardization", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which code standardizes inconsistent labels like 'Female' vs 'female' vs 'F'?",
    op: ["df['col'].str.strip().str.lower().replace({'f': 'female'})", "df.dropna()", "df.mean()", "df.duplicated()"],
    an: 0, at: "strip + lower + replace — 'F' mapped to 'female'.",
    sl: "Slide 46: inconsistent labels cause silent errors in analysis.",
    ex: "Also: pd.to_numeric(errors='coerce') for type fixing.",
    mt: "Thinking pandas treats 'F' and 'female' as equal by default." });

  Q({ id: "L4-MCQ-33", lec: L, pg: [47], tp: "Cleaning", sb: "Mindset order", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is step 1 of consequence-driven cleaning?",
    op: ["Implement with the CTA", "Understand WHY the issue exists", "Verify distributions", "Choose a strategy"],
    an: 1, at: "Understand why → choose strategy → implement (CTA excels) → verify consequences.",
    sl: "Slide 47: 'Don't fix what you don't understand. Don't trust what you haven't verified.'",
    ex: "Steps 1, 2, 4 are human; step 3 is CTA-accelerated.",
    mt: "Jumping to implementation first." });

  Q({ id: "L4-MCQ-34", lec: L, pg: [49], tp: "EDA", sb: "Cycle", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the third step of the EDA discovery cycle?",
    op: ["Visualize", "Notice", "Hypothesize", "Investigate"],
    an: 2, at: "Visualize → Notice → Hypothesize → Investigate → Act.",
    sl: "Slide 49 cycle + contrast box (assessment is systematic; EDA is creative/question-driven).",
    ex: "Each visualization provokes a question; each question motivates the next visualization.",
    mt: "Omitting hypothesize between notice and investigate." });

  
  Q({ id: "L4-MCQ-36", lec: L, pg: [54], tp: "Encoding", sb: "Ordinal case", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which example is used for ordinal encoding?",
    op: ["Contract: month-to-month/one year/two year", "Education: HS < BS < MS < PhD", "gender: male/female", "PaymentMethod"],
    an: 1, at: "Education level HS < BS < MS < PhD — naturally ordered.",
    sl: "Slide 54: one-hot for nominal; ordinal for ordered features; label encoding generally avoided except trees.",
    ex: "Contract is nominal (no natural order) → one-hot.",
    mt: "Ordinal-encoding contract because it has 3 levels." });

  Q({ id: "L4-MCQ-37", lec: L, pg: [55], tp: "Encoding", sb: "handle_unknown", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which OneHotEncoder argument handles unseen categories gracefully?",
    op: ["sparse_output=False", "handle_unknown='ignore'", "drop='first'", "dtype=float"],
    an: 1, at: "handle_unknown='ignore' — unseen categories at inference are encoded safely.",
    sl: "Slide 55 code: OneHotEncoder(sparse_output=False, handle_unknown='ignore').",
    ex: "Dimensionality grows: 21 columns → ~30+ after one-hot.",
    mt: "Confusing sparse_output (formatting) with unknown-category handling." });

  Q({ id: "L4-MCQ-38", lec: L, pg: [56], tp: "Scaling", sb: "Tree invariance", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why don't decision trees need feature scaling?",
    op: ["They use distances", "Splits are scale-invariant", "They only see one feature", "They normalize internally"],
    an: 1, at: "Tree splits are scale-invariant (decision trees, random forests, gradient boosting).",
    sl: "Slide 56: distance-based (KNN/SVM/PCA) and gradient-based (logistic/NN) need scaling; trees and Gaussian NB do not.",
    ex: "Rule of thumb: different ranges + distance/gradient methods ⇒ scale.",
    mt: "Scaling unnecessarily for tree models." });

  Q({ id: "L4-MCQ-39", lec: L, pg: [57], tp: "Feature engineering", sb: "Tenure bins", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the tenure-bin cutoffs in the engineered feature?",
    op: ["New (0–12) / Mid (13–36) / Long (37–72)", "New (0–6) / Mid (7–24) / Long (25+)", "Low/Medium/High by charges", "Quartiles Q1–Q4"],
    an: 0, at: "New (0–12) / Mid (13–36) / Long (37–72) — based on the bimodal tenure histogram.",
    sl: "Slide 57: captures natural customer lifecycle phases; average monthly charge = TotalCharges/tenure for tenure > 0.",
    ex: "Best features come from domain knowledge + EDA discoveries.",
    mt: "Building bins without the EDA-discovered bimodality." });

  Q({ id: "L4-MCQ-40", lec: L, pg: [59], tp: "Pipelines", sb: "Leakage", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which reproducibility reason mentions data leakage?",
    op: ["Consistent train/test preprocessing", "No data leakage — fitting only on training data, transforming both", "Easy to modify", "Faster execution"],
    an: 1, at: "No data leakage: fit only on training, transform both splits.",
    sl: "Slide 59: ColumnTransformer with numeric (median imputer + scaler) and categorical (most_frequent + one-hot) branches.",
    ex: "Same principle as L5's fit-the-scaler-on-train-only.",
    mt: "Fitting imputers on the combined dataset." });

  })();
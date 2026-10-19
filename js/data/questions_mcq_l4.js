/* Extra MCQ bank — Lecture 4 (built for MCQ Sets; distinct angles from questions_l4.js). */
(function () {
  var L = 4;

  Q({ id: "L4-MCQ-01", lec: L, pg: [4], tp: "Course map", sb: "Modules", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which lecture pair forms Module 2 'core methods' with L5 regression (slide 4)?",
    op: ["L6 classification → L7 unsupervised", "L8 deep learning → L9 NLP", "L1 stats → L2 algebra", "L10 attention → L11 deployment"],
    an: 0, at: "L6 Classification → L7 Unsupervised complete Module 2 (L5–L7).",
    sl: "Slide 4: Module 1 L1–L4 foundations; Module 2 L5–L7 core methods; Module 3 L8–L10 modern integration.",
    ex: "L4 bridges foundations to methods.",
    mt: "Placing L8 (deep learning) inside Module 2." });

  Q({ id: "L4-MCQ-02", lec: L, pg: [6], tp: "Structure", sb: "Parts", df: "easy", ty: "mcq", so: "lecture",
    pr: "What are the two parts of Lecture 4 (slide 6)?",
    op: ["Part 1 why and what (applications + ideation); Part 2 how (wrangling)", "Part 1 regression; Part 2 classification", "Part 1 SQL; Part 2 NoSQL", "Part 1 theory; Part 2 proofs"],
    an: 0, at: "Part 1A application showcase + 1B project ideation; Part 2A quality assessment + 2B missingness/cleaning + 2C EDA/pipelines.",
    sl: "Slide 6 two-part structure and CTA role transition.",
    ex: "CTA turns from brainstorming partner to implementation assistant.",
    mt: "Swapping the parts." });

  Q({ id: "L4-MCQ-03", lec: L, pg: [8], tp: "Applications", sb: "Domain match", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which domain pair matches 'risk & pattern detection' and 'urban intelligence' (slide 8)?",
    op: ["Climate and healthcare", "Finance and smart cities", "Healthcare and finance", "Smart cities and climate"],
    an: 1, at: "Finance = risk & pattern detection; Smart Cities = urban intelligence.",
    sl: "Slide 8: Healthcare (prediction & discovery); Finance (risk & pattern detection); Climate (monitoring & prediction); Smart Cities (urban intelligence).",
    ex: "Track questions: what data, what techniques, what could go wrong?",
    mt: "Swapping finance and healthcare labels." });

  Q({ id: "L4-MCQ-04", lec: L, pg: [9], tp: "Applications", sb: "Healthcare", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which labels appear in the sample healthcare table (slide 9)?",
    op: ["Age | BMI | Glucose | BloodPressure | DiabetesRisk", "Tenure | Charges | Churn", "Timestamp | Merchant | IsFraud", "Sensor | Location | AQI"],
    an: 0, at: "Age, BMI, Glucose, BloodPressure, DiabetesRisk — each row a patient, each column a measurement.",
    sl: "Slide 9 [FIG 2: sample patient records table].",
    ex: "Disease prediction is a classification problem (L6).",
    mt: "Mixing in the Telco churn columns." });

  Q({ id: "L4-MCQ-05", lec: L, pg: [10], tp: "Applications", sb: "Healthcare impact", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the stated healthcare impact (slide 10)?",
    op: ["Early detection programs reducing disease progression", "Faster hospital billing", "Reduced insurance costs only", "Automated surgery"],
    an: 0, at: "Early detection programs reducing disease progression — data-driven screening saves lives.",
    sl: "Slide 10 impact statement.",
    ex: "High stakes: false negative in cancer screening.",
    mt: "Choosing a purely financial impact." });

  Q({ id: "L4-MCQ-06", lec: L, pg: [11], tp: "Applications", sb: "Finance fraud rate", df: "medium", ty: "mcq", so: "lecture",
    pr: "What fraud rate illustrates extreme class imbalance in finance (slide 11)?",
    op: ["~0.1%", "~5%", "~27%", "~50%"],
    an: 0, at: "~0.1% of transactions are fraudulent — extreme imbalance.",
    sl: "Slide 11: fraud detection; credit scoring uses regression and classification with fairness concerns.",
    ex: "'Ever gotten a text from your bank asking was this you?' — real-time decisions.",
    mt: "Using the Telco 26.5% churn rate as the fraud rate." });

  Q({ id: "L4-MCQ-07", lec: L, pg: [13], tp: "Applications", sb: "Climate tasks", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does the energy-optimization climate application predict (slide 13)?",
    op: ["Solar/wind output for grid management", "Insurance payouts", "Crop prices", "Population growth"],
    an: 0, at: "Solar/wind output for grid management — regression (L5) for continuous forecasting.",
    sl: "Slide 13: HK context: typhoon prediction, air quality.",
    ex: "Data: time series from sensor networks.",
    mt: "Treating climate forecasting as classification." });

  Q({ id: "L4-MCQ-08", lec: L, pg: [14], tp: "Applications", sb: "Climate distinction", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which challenge distinguishes weather prediction from climate projection (slide 14)?",
    op: ["Different timescales require different methods", "They are identical problems", "Climate is easier", "Weather uses no data"],
    an: 0, at: "Different timescales, different methods — do not conflate them.",
    sl: "Slide 14 challenges: temporal dependencies; spatial correlations; massive scale; weather vs climate.",
    ex: "Billions of data points across decades.",
    mt: "Treating the two as interchangeable." });

  Q({ id: "L4-MCQ-09", lec: L, pg: [15], tp: "Applications", sb: "HK examples", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which HK-flavored examples appear under smart cities (slide 15)?",
    op: ["Octopus card patterns, MTR crowding prediction", "Typhoon prediction, air quality", "HIPAA compliance", "Fraud detection"],
    an: 0, at: "Octopus card patterns and MTR crowding prediction (transportation optimization).",
    sl: "Slide 15: ride-sharing demand, traffic flow; IoT sensing with embeddings for location.",
    ex: "Typhoon/air quality belong to the climate domain.",
    mt: "Assigning typhoon prediction to smart cities." });

  Q({ id: "L4-MCQ-10", lec: L, pg: [16], tp: "Applications", sb: "Smart city scale", df: "medium", ty: "mcq", so: "lecture",
    pr: "How much sensor data do cities generate daily per slide 16?",
    op: ["Terabytes", "A few megabytes", "Kilobytes", "Exabytes per hour"],
    an: 0, at: "Terabytes of sensor data daily — real-time processing needed for traffic optimization.",
    sl: "Slide 16 challenges: heterogeneous sources; privacy; real-time; scale.",
    ex: "Impact: transit optimization improving quality of life for millions.",
    mt: "Underestimating the scale figure." });

  Q({ id: "L4-MCQ-11", lec: L, pg: [17], tp: "Applications", sb: "Common thread", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is 'domain-specific' according to the common-thread slide (slide 17)?",
    op: ["The pipeline", "The judgment", "The workflow order", "The data format"],
    an: 1, at: "The pipeline is universal; the judgment is domain-specific.",
    sl: "Slide 17: Question → Collect → Clean → Analyze → Model → Communicate across all four domains.",
    ex: "Same steps, different context knowledge.",
    mt: "Saying the pipeline itself differs per domain." });

  Q({ id: "L4-MCQ-12", lec: L, pg: [18], tp: "Applications", sb: "Technique mapping", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which techniques map to Finance's key challenges (slide 18)?",
    op: ["Clustering + embeddings", "Regression + classification", "Classification + metrics", "Regression + visualization"],
    an: 1, at: "Finance: regression + classification (extreme imbalance, fairness; L5–L6).",
    sl: "Slide 18 table: Healthcare (classification+metrics); Finance (regression+classification); Climate (regression+visualization); Smart Cities (clustering+embeddings).",
    ex: "The methods in L5–L7 serve all domains.",
    mt: "Assigning clustering+embeddings to finance." });

  Q({ id: "L4-MCQ-13", lec: L, pg: [20], tp: "Project", sb: "Data threshold", df: "medium", ty: "mcq", so: "lecture",
    pr: "What data-size guidance is given for a good project (slide 20)?",
    op: ["At least 10 rows", "More than 1,000 rows; labelled/paired data", "Exactly 100 rows", "No minimum"],
    an: 1, at: "Real, accessible data >1,000 rows; labelled/paired data.",
    sl: "Slide 20 five criteria: clear question; real accessible data; appropriate scope (6 weeks); personal interest; full pipeline.",
    ex: "Data must be public or collectible within the timeline.",
    mt: "Assuming class datasets can be reused (they cannot — 'not from class')." });

  Q({ id: "L4-MCQ-14", lec: L, pg: [21], tp: "Project", sb: "Sources", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which source is described as 'community-curated list organized by domain' (slide 21)?",
    op: ["Kaggle", "Google Dataset Search", "GitHub awesome-public-datasets", "World Bank"],
    an: 2, at: "GitHub awesome-public-datasets — community-curated list by domain.",
    sl: "Slide 21: Kaggle; UCI; Google Dataset Search; awesome-public-datasets; HK Open Data (data.gov.hk); World Bank/WHO/NOAA.",
    ex: "Verify datasets exist and have the needed features before committing.",
    mt: "Attributing the curated list to Kaggle." });

  Q({ id: "L4-MCQ-15", lec: L, pg: [22], tp: "Project", sb: "Ideation principle", df: "medium", ty: "mcq", so: "lecture",
    pr: "What matters most when starting the ideation process (slide 22)?",
    op: ["The dataset", "YOUR curiosity/interest", "The algorithm", "The compute budget"],
    an: 1, at: "Start with YOUR interest — not data; curiosity matters the most.",
    sl: "Slide 22: interest → questions → feasibility → refine → sketch.",
    ex: "The CTA generates options; YOU make every decision.",
    mt: "Starting from a dataset looking for a question." });

  Q({ id: "L4-MCQ-16", lec: L, pg: [24], tp: "Project", sb: "Key moment 2", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does 'evaluating, not accepting' mean in the ideation demo (slide 24)?",
    op: ["Assessing each CTA suggestion against the five criteria — 'this is interesting but where would I get the data?'", "Accepting the first idea", "Rejecting all AI suggestions", "Evaluating only the code"],
    an: 0, at: "Assess each suggestion against the five criteria rather than accepting blindly.",
    sl: "Slide 24 key moments: structured prompt; evaluating; VERIFY Validate; making it yours.",
    ex: "Every decision was the instructor's, not the CTA's.",
    mt: "Treating CTA suggestions as final." });

  Q({ id: "L4-MCQ-17", lec: L, pg: [27], tp: "Wrangling", sb: "Workflow order", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the correct wrangling workflow order (slide 27)?",
    op: ["Assess → Clean → Explore → Prepare", "Clean → Assess → Prepare → Explore", "Explore → Clean → Assess → Prepare", "Prepare → Clean → Explore → Assess"],
    an: 0, at: "Assess quality → Clean based on mechanisms → Explore patterns → Prepare (encode, scale, pipeline).",
    sl: "Slide 27 workflow; ~80% (or more) of data scientists' time is data preparation.",
    ex: "Running example: Telco Customer Churn.",
    mt: "Cleaning before assessing." });

  Q({ id: "L4-MCQ-18", lec: L, pg: [28], tp: "Wrangling", sb: "Feature groups", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which feature belongs to 'Account Information' in the Telco dataset (slide 28)?",
    op: ["gender", "TechSupport", "MonthlyCharges", "StreamingTV"],
    an: 2, at: "MonthlyCharges — account information (with tenure, Contract, PaymentMethod, TotalCharges).",
    sl: "Slide 28 groups: Demographics (gender, SeniorCitizen, Partner, Dependents); Account (tenure, Contract, PaymentMethod, MonthlyCharges, TotalCharges); Services (PhoneService, InternetService, OnlineSecurity, …, StreamingTV, StreamingMovies).",
    ex: "Business question: predict which customers will churn (leave within the last month).",
    mt: "Placing TechSupport under account info (it is a service)." });

  Q({ id: "L4-MCQ-19", lec: L, pg: [29], tp: "Quality assessment", sb: "Checks", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which item does the VALIDITY check cover (slide 29)?",
    op: ["Dimensions and dtypes", "Missing values", "Ranges, type mismatches, duplicates", "Distribution shapes"],
    an: 2, at: "Validity: ranges, type mismatches, duplicates.",
    sl: "Slide 29: Structural (dimensions/dtypes/memory); Completeness (missing); Validity (ranges/mismatches/duplicates); Distributional (stats/shapes).",
    ex: "Output: a Data Quality Report — your first professional deliverable.",
    mt: "Assigning duplicates to the completeness check." });

  Q({ id: "L4-MCQ-20", lec: L, pg: [30], tp: "Quality assessment", sb: "Most important diagnostic", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pandas call is called the 'most important diagnostic' (slide 30)?",
    op: ["df.shape", "df.dtypes", "df.info()", "df.memory_usage(deep=True)"],
    an: 1, at: "df.dtypes — type mismatches are common and informative.",
    sl: "Slide 30: shape, dtypes (most important), info, memory_usage.",
    ex: "A numerical column stored as object means hidden quality issues (Telco TotalCharges).",
    mt: "Choosing df.info() as the most important." });

  Q({ id: "L4-MCQ-21", lec: L, pg: [31], tp: "Quality assessment", sb: "Missing proportion", df: "medium", ty: "mcq", so: "lecture",
    pr: "According to the missingness rules of thumb, at what proportion should you consider dropping the column (slide 31)?",
    op: ["> 5%", "> 10%", "> 30%", "> 50%"],
    an: 2, at: "> 30% — consider dropping the column (5–30% needs careful strategy; < 5% manageable).",
    sl: "Slide 31 rules + watch-out: 'missing' isn't always NaN (blank strings, 'N/A', −999 sentinels).",
    ex: "Critical question: WHY is data missing?",
    mt: "Dropping columns at 5% missingness." });

  Q({ id: "L4-MCQ-22", lec: L, pg: [32], tp: "Quality assessment", sb: "Cross-field", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which example illustrates a cross-field inconsistency (slide 32)?",
    op: ["'Female' vs 'female'", "Tenure = 0 but TotalCharges = $5,000", "df.duplicated().sum()", "Charges above $10,000"],
    an: 1, at: "Tenure = 0 with TotalCharges = $5,000 — relationships between columns reveal errors.",
    sl: "Slide 32 validity quadrants: out-of-range; duplicates (investigate before dropping); inconsistent categories; cross-field.",
    ex: "CTA finds these; interpreting whether they are errors needs domain knowledge.",
    mt: "Classifying 'Female' vs 'female' as cross-field (it is inconsistent categories)." });

  Q({ id: "L4-MCQ-23", lec: L, pg: [33], tp: "Quality assessment", sb: "Count plots", df: "medium", ty: "mcq", so: "lecture",
    pr: "What do count plots assess (slide 33)?",
    op: ["Outliers and quartile spread", "Categorical balance — are classes roughly even?", "Numerical shape", "Subtle density patterns"],
    an: 1, at: "Count plots: categorical balance — are classes roughly even?",
    sl: "Slide 33 tools: histograms (shape); box plots (outliers/quartiles); count plots (balance); KDE (subtle patterns).",
    ex: "Beyond df.describe() — visualization reveals what statistics hide.",
    mt: "Assigning balance checks to histograms." });

  Q({ id: "L4-MCQ-24", lec: L, pg: [35], tp: "Quality assessment", sb: "Prompt parts", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which three components make the structured profiling prompt strong (slide 35)?",
    op: ["Length, tone, emoji", "Context, structure (four sections), format (report with prioritized issues)", "Code only", "Dataset name only"],
    an: 1, at: "Context + four-section structure + structured-report format with prioritized issues.",
    sl: "Slide 35 contrasts with 'Is my data clean?' (vague input → vague output).",
    ex: "The four sections map to the four-check protocol.",
    mt: "Requesting 'check my data' and expecting comprehensive output." });

  Q({ id: "L4-MCQ-25", lec: L, pg: [36], tp: "Quality assessment", sb: "Human insight", df: "hard", ty: "mcq", so: "lecture",
    pr: "What did the human recognize about SeniorCitizen (slide 36)?",
    op: ["It should be dropped", "It is a binary categorical variable — 0/1 already a valid indicator encoding", "It is normally distributed", "It has missing values"],
    an: 1, at: "SeniorCitizen is binary categorical, not continuous — its 0/1 values already provide valid indicator encoding.",
    sl: "Slide 36 findings: CTA reported int64 values [0,1] mean 0.16; human adds the categorical interpretation. TotalCharges blanks explained by zero-tenure.",
    ex: "The CTA computes accurately; the human interprets meaningfully.",
    mt: "Treating the int64 dtype as proof of a continuous variable." });

  Q({ id: "L4-MCQ-26", lec: L, pg: [37], tp: "Quality assessment", sb: "VERIFY pair", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which VERIFY pair is highlighted for quality assessment (slide 37)?",
    op: ["Execute and Fix", "Validate and Inspect", "Reason and Yours", "Fix and Execute"],
    an: 1, at: "Validate (are type classifications correct?) and Inspect (what edge cases might the automated profile miss?).",
    sl: "Slide 37 full VERIFY table applied to assessment.",
    ex: "Inspect = sentinel values, type mismatches.",
    mt: "Choosing Execute — running code is necessary but not the highlighted judgment step." });

  Q({ id: "L4-MCQ-27", lec: L, pg: [38], tp: "Quality assessment", sb: "Report order", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the THIRD section of the Data Quality Report (slide 38)?",
    op: ["Data Overview", "Findings by Check Type", "Prioritized Issues", "Recommended Actions"],
    an: 2, at: "3) Prioritized Issues — ranked by impact on analysis (must-fix vs can-wait).",
    sl: "Slide 38: 1 overview; 2 findings by check; 3 prioritized issues; 4 recommended actions.",
    ex: "Prioritization requires judgment about analysis impact.",
    mt: "Putting recommended actions before prioritization." });

  Q({ id: "L4-MCQ-28", lec: L, pg: [39], tp: "Missingness", sb: "MNAR example", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which example illustrates MNAR (slide 39)?",
    op: ["Lab tech drops test tubes", "Older patients skip a fitness test (age observed)", "High earners don't report income", "Server outage loses random records"],
    an: 2, at: "High earners don't report income — missingness depends on income itself (unobserved).",
    sl: "Slide 39: MCAR lab-tube drop; MAR older patients/age observed; MNAR high earners/income unobserved.",
    ex: "Determining the mechanism requires reasoning about the data-generating process — not data alone.",
    mt: "Classifying the age-related skip as MNAR (age is observed, so MAR)." });

  Q({ id: "L4-MCQ-29", lec: L, pg: [41], tp: "Missingness", sb: "Strategy mapping", df: "hard", ty: "mcq", so: "lecture",
    pr: "Under MCAR, which approach 'can be unbiased' (slide 41)?",
    op: ["Deletion", "Conditional imputation", "Modeling the missingness process", "No approach works"],
    an: 0, at: "MCAR → deletion can be unbiased (though listwise deletion loses data).",
    sl: "Slide 41: MCAR deletion; MAR conditional imputation; MNAR no simple fix.",
    ex: "'The mechanism is the judgment call. The implementation is just code.'",
    mt: "Claiming deletion is unbiased under MNAR." });

  Q({ id: "L4-MCQ-30", lec: L, pg: [42], tp: "Cleaning", sb: "Model-based", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which strategy includes KNN and iterative imputers (slide 42)?",
    op: ["Deletion", "Constant fill", "Statistical imputation", "Model-based imputation"],
    an: 3, at: "Model-based: KNN, iterative imputer, or regression-based — handles complex MAR patterns.",
    sl: "Slide 42 toolkit order: deletion → constant → statistical → conditional → model-based.",
    ex: "Statistical imputation is simpler but distorts variance.",
    mt: "Filing KNN under statistical imputation." });

  Q({ id: "L4-MCQ-31", lec: L, pg: [44], tp: "Cleaning", sb: "Strategy outcomes", df: "hard", ty: "mcq", so: "lecture",
    pr: "What is the objection to MEDIAN imputation for zero-tenure TotalCharges (slide 44)?",
    op: ["It is too slow", "It is the same problem at a different value — the median is still unrealistic for brand-new customers", "It removes rows", "It requires KNN"],
    an: 1, at: "Same issue, different location: the median is still unrealistic for zero-tenure customers.",
    sl: "Slide 44: mean imputation spike ~$2,280; median spike at a different value; conditional imputation preserves the natural relationship.",
    ex: "Both simple strategies distort the distribution.",
    mt: "Believing the median avoids the artificial-spike problem." });

  Q({ id: "L4-MCQ-32", lec: L, pg: [46], tp: "Cleaning", sb: "Category standardization", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which code standardizes inconsistent labels like 'Female' vs 'female' vs 'F' (slide 46)?",
    op: ["df['col'].str.strip().str.lower().replace({'f': 'female'})", "df.dropna()", "df.mean()", "df.duplicated()"],
    an: 0, at: "strip + lower + replace — 'F' mapped to 'female'.",
    sl: "Slide 46: inconsistent labels cause silent errors in analysis.",
    ex: "Also: pd.to_numeric(errors='coerce') for type fixing.",
    mt: "Thinking pandas treats 'F' and 'female' as equal by default." });

  Q({ id: "L4-MCQ-33", lec: L, pg: [47], tp: "Cleaning", sb: "Mindset order", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is step 1 of consequence-driven cleaning (slide 47)?",
    op: ["Implement with the CTA", "Understand WHY the issue exists", "Verify distributions", "Choose a strategy"],
    an: 1, at: "Understand why → choose strategy → implement (CTA excels) → verify consequences.",
    sl: "Slide 47: 'Don't fix what you don't understand. Don't trust what you haven't verified.'",
    ex: "Steps 1, 2, 4 are human; step 3 is CTA-accelerated.",
    mt: "Jumping to implementation first." });

  Q({ id: "L4-MCQ-34", lec: L, pg: [49], tp: "EDA", sb: "Cycle", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the third step of the EDA discovery cycle (slide 49)?",
    op: ["Visualize", "Notice", "Hypothesize", "Investigate"],
    an: 2, at: "Visualize → Notice → Hypothesize → Investigate → Act.",
    sl: "Slide 49 cycle + contrast box (assessment is systematic; EDA is creative/question-driven).",
    ex: "Each visualization provokes a question; each question motivates the next visualization.",
    mt: "Omitting hypothesize between notice and investigate." });

  Q({ id: "L4-MCQ-35", lec: L, pg: [53], tp: "EDA", sb: "Churn rates", df: "hard", ty: "mcq", so: "lecture",
    pr: "What are the churn rates by contract type in the discovery demo (slide 53)?",
    op: ["Month-to-month ~43%, one year ~11%, two year ~3%", "Month-to-month ~3%, two year ~43%", "All contracts ~27%", "Month-to-month ~27%, others ~0%"],
    an: 0, at: "Month-to-month ~43%; one year ~11%; two year ~3% — a 14× difference.",
    sl: "Slide 53: high-charge, low-tenure customers cluster as churned; contract type is a powerful predictor.",
    ex: "Interactions may be even more informative for modeling in L6.",
    mt: "Reversing the contract churn rates." });

  Q({ id: "L4-MCQ-36", lec: L, pg: [54], tp: "Encoding", sb: "Ordinal case", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which example is used for ordinal encoding (slide 54)?",
    op: ["Contract: month-to-month/one year/two year", "Education: HS < BS < MS < PhD", "gender: male/female", "PaymentMethod"],
    an: 1, at: "Education level HS < BS < MS < PhD — naturally ordered.",
    sl: "Slide 54: one-hot for nominal; ordinal for ordered features; label encoding generally avoided except trees.",
    ex: "Contract is nominal (no natural order) → one-hot.",
    mt: "Ordinal-encoding contract because it has 3 levels." });

  Q({ id: "L4-MCQ-37", lec: L, pg: [55], tp: "Encoding", sb: "handle_unknown", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which OneHotEncoder argument handles unseen categories gracefully (slide 55)?",
    op: ["sparse_output=False", "handle_unknown='ignore'", "drop='first'", "dtype=float"],
    an: 1, at: "handle_unknown='ignore' — unseen categories at inference are encoded safely.",
    sl: "Slide 55 code: OneHotEncoder(sparse_output=False, handle_unknown='ignore').",
    ex: "Dimensionality grows: 21 columns → ~30+ after one-hot.",
    mt: "Confusing sparse_output (formatting) with unknown-category handling." });

  Q({ id: "L4-MCQ-38", lec: L, pg: [56], tp: "Scaling", sb: "Tree invariance", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why don't decision trees need feature scaling (slide 56)?",
    op: ["They use distances", "Splits are scale-invariant", "They only see one feature", "They normalize internally"],
    an: 1, at: "Tree splits are scale-invariant (decision trees, random forests, gradient boosting).",
    sl: "Slide 56: distance-based (KNN/SVM/PCA) and gradient-based (logistic/NN) need scaling; trees and Gaussian NB do not.",
    ex: "Rule of thumb: different ranges + distance/gradient methods ⇒ scale.",
    mt: "Scaling unnecessarily for tree models." });

  Q({ id: "L4-MCQ-39", lec: L, pg: [57], tp: "Feature engineering", sb: "Tenure bins", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the tenure-bin cutoffs in the engineered feature (slide 57)?",
    op: ["New (0–12) / Mid (13–36) / Long (37–72)", "New (0–6) / Mid (7–24) / Long (25+)", "Low/Medium/High by charges", "Quartiles Q1–Q4"],
    an: 0, at: "New (0–12) / Mid (13–36) / Long (37–72) — based on the bimodal tenure histogram.",
    sl: "Slide 57: captures natural customer lifecycle phases; average monthly charge = TotalCharges/tenure for tenure > 0.",
    ex: "Best features come from domain knowledge + EDA discoveries.",
    mt: "Building bins without the EDA-discovered bimodality." });

  Q({ id: "L4-MCQ-40", lec: L, pg: [59], tp: "Pipelines", sb: "Leakage", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which reproducibility reason mentions data leakage (slide 59)?",
    op: ["Consistent train/test preprocessing", "No data leakage — fitting only on training data, transforming both", "Easy to modify", "Faster execution"],
    an: 1, at: "No data leakage: fit only on training, transform both splits.",
    sl: "Slide 59: ColumnTransformer with numeric (median imputer + scaler) and categorical (most_frequent + one-hot) branches.",
    ex: "Same principle as L5's fit-the-scaler-on-train-only.",
    mt: "Fitting imputers on the combined dataset." });

  Q({ id: "L4-MCQ-41", lec: L, pg: [60], tp: "Wrangling", sb: "Final count", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does the Telco dataset look like at the end of Part 2 (slide 60)?",
    op: ["21 raw columns unchanged", "~30+ model-ready features via a reproducible pipeline", "2,000 rows", "Only the target remains"],
    an: 1, at: "~30+ features, reproducible pipeline — ready for L6 classification.",
    sl: "Slide 60 journey: raw (7,043×21) → assess → clean → explore → prepare → model-ready.",
    ex: "Every step involved human judgment; the CTA made each step faster.",
    mt: "Expecting the column count to stay at 21." });
})();
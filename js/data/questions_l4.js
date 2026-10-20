/* Question bank — Lecture 4 (pages 1–66).
   Applications, project ideation, four-check quality protocol, MCAR/MAR/MNAR, cleaning, EDA, encoding, pipelines. */
(function () {
  var L = 4;

  
  
  
  
  Q({ id: "L4-8-Q1", lec: L, pg: [8], tp: "Applications", sb: "Four domains", df: "easy", ty: "short", so: "lecture",
    pr: "Name the four application domains and their focus areas.",
    at: "Healthcare (prediction & discovery); Finance (risk & pattern detection); Climate (monitoring & prediction); Smart Cities (urban intelligence). Track-three-questions: what data? what techniques? what could go wrong?",
    sl: "Slide 8 four domain cards + tracking questions.",
    ex: "The same four domains are mapped to techniques in slide 18's table.",
    mt: "Mixing up domains — Smart Cities = urban intelligence (not climate)." });

  
  Q({ id: "L4-10-Q1", lec: L, pg: [10], tp: "Applications", sb: "Healthcare challenges", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which set of healthcare challenges is listed?",
    op: [
      "Missing data, class imbalance, privacy regulations (HIPAA), high stakes (false negatives)",
      "Extreme imbalance ~0.1%, adversarial behavior, real-time decisions",
      "Temporal dependencies, spatial correlation, massive scale",
      "Heterogeneous sources, location privacy, sub-minute granularity"
    ], an: 0,
    at: "Healthcare: missing data (patients skip tests — connects to Part 2 missingness); class imbalance (most patients healthy — previews L6); privacy (HIPAA, consent); high stakes (false negative in cancer screening). Data: EHRs, lab results, medical imaging. Impact: early detection programs.",
    sl: "Slide 10 pipeline/challenges/impact layout.",
    ex: "Missing data foreshadows MCAR/MAR/MNAR; class imbalance foreshadows precision/recall.",
    mt: "Attributing ~0.1% fraud imbalance to healthcare — that is finance." });

  Q({ id: "L4-11-Q1", lec: L, pg: [11], tp: "Applications", sb: "Finance", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the extreme class imbalance figure for fraud detection, and what fairness concern appears?",
    op: [
      "~0.1% fraud; fairness concerns in credit scoring (who gets denied?)",
      "~27% fraud; privacy concerns",
      "~50% fraud; no fairness issues",
      "~5% fraud; HIPAA compliance"
    ], an: 0,
    at: "~0.1% fraud (extreme imbalance); credit scoring has fairness concerns: who gets denied? Regression and classification (L5–L6). Data: transaction logs — millions of rows, real-time streaming.",
    sl: "Slide 11 fraud detection + credit scoring + [FIG 4] Timestamp | Amount | Merchant | Location | IsFraud.",
    ex: "The ~0.1% figure motivates imbalance-aware metrics in L6.",
    mt: "Using accuracy for 0.1%-fraud problems — recall/precision reign instead." });

  Q({ id: "L4-12-Q1", lec: L, pg: [12], tp: "Applications", sb: "Finance challenges", df: "medium", ty: "short", so: "lecture",
    pr: "List the four key challenges and the impact statement for finance.",
    at: "Challenges: extreme imbalance (~0.1% fraud); adversarial behavior (fraudsters adapt to detection systems); real-time requirements (decisions in milliseconds); fairness concerns (who gets denied credit, and why?). Impact: fraud detection at scale saves billions annually through automated pattern detection.",
    sl: "Slide 12 pipeline/challenges/impact + [FIG 5: anomaly scatter + cost-benefit comparison].",
    ex: "'Adversarial behavior' is unique to the finance domain among the four.",
    mt: "Forgetting that adversarial adaptation changes the data distribution over time." });

  
  Q({ id: "L4-14-Q1", lec: L, pg: [14], tp: "Applications", sb: "Climate challenges", df: "medium", ty: "short", so: "lecture",
    pr: "List the four climate challenges and the weather vs climate distinction.",
    at: "Temporal dependencies (today's weather depends on yesterday's); spatial correlations (nearby stations correlated); massive scale (billions of data points across decades); weather prediction vs climate projection — different timescales, different methods. Impact: energy grid optimization — matching renewable supply to demand reduces waste and carbon emissions.",
    sl: "Slide 14 challenges + impact.",
    ex: "The weather/climate distinction is an easy MCQ trap.",
    mt: "Treating weather prediction and climate projection as interchangeable." });

  
  Q({ id: "L4-16-Q1", lec: L, pg: [16], tp: "Applications", sb: "Smart cities challenges", df: "medium", ty: "short", so: "lecture",
    pr: "List the four smart-city challenges and the impact statement.",
    at: "Heterogeneous sources (GPS, sensors, surveys, social data); privacy (location data reveals personal patterns); real-time processing (traffic optimization needs instant decisions); scale (terabytes of sensor data daily). Impact: transit optimization reducing commute time and crowding — data-driven scheduling improves quality of life for millions.",
    sl: "Slide 16 challenges + impact.",
    ex: "Heterogeneous data foreshadows encoding/joining complexity in Part 2.",
    mt: "Underestimating the scale figure (terabytes daily)." });

  Q({ id: "L4-17-Q1", lec: L, pg: [17], tp: "Applications", sb: "Common thread", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the common thread across all four domains?",
    op: [
      "All domains use deep learning",
      "All follow the same pipeline: Question → Collect → Clean → Analyze → Model → Communicate. What changes is the domain knowledge — the pipeline is universal; the judgment is domain-specific",
      "All domains have the same data size",
      "All domains are regulated by HIPAA"
    ], an: 1,
    at: "Question → Collect → Clean → Analyze → Model → Communicate. The pipeline is universal; the judgment is domain-specific.",
    sl: "Slide 17 key insight + [FIG 10] pipeline with four-domain mapping.",
    ex: "This is the same workflow introduced in L1 slide 16.",
    mt: "Claiming techniques transfer without domain knowledge — the slide's point is judgment is domain-specific." });

  
  
  
  
  
  
  
  Q({ id: "L4-27-Q1", lec: L, pg: [27], tp: "Wrangling", sb: "Workflow + 80/20", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the professional wrangling workflow, and the 80/20 reality?",
    op: [
      "Model → clean → collect → present; 20% time on prep",
      "Assess (quality checks & profiling) → Clean (fix based on mechanisms) → Explore (discover patterns) → Prepare (encode, scale, pipeline); ~80% (or more) of time on data preparation",
      "Only cleaning matters; assessment is optional",
      "Wrangling is fully automated by AI"
    ], an: 1,
    at: "Assess → Clean → Explore → Prepare. 80/20 reality: data scientists spend approximately 80% (or even more) of their time on data preparation. Running example: Telco Customer Churn (~7,043 customers, 21 columns, binary target).",
    sl: "Slide 27 workflow + 80/20 box + running-example box.",
    ex: "Same dataset as L6 classification — continuity across lectures.",
    mt: "Thinking 80% is spent on modeling; it's the reverse." });

  Q({ id: "L4-28-Q1", lec: L, pg: [28], tp: "Wrangling", sb: "Telco dataset", df: "easy", ty: "short", so: "lecture",
    pr: "Describe the Telco dataset (size, columns, target, business question, source).",
    at: "~7,043 customers, 21 columns, binary target Churn. Feature groups: demographics (gender, SeniorCitizen, Partner, Dependents); account info (tenure, Contract, PaymentMethod, MonthlyCharges, TotalCharges); services (PhoneService, InternetService, OnlineSecurity, OnlineBackup, DeviceProtection, TechSupport, StreamingTV, StreamingMovies). Business question: predict which customers will churn (leave within the last month). Source: Kaggle blastchar/telco-customer-churn.",
    sl: "Slide 28 three feature-group cards + business question + Kaggle link.",
    ex: "L6 reuses this dataset after wrangling — 73.5% no-churn / 26.5% churn.",
    mt: "Confusing 7,043 rows with 21 columns; Target = Churn." });

  Q({ id: "L4-29-Q1", lec: L, pg: [29], tp: "Quality assessment", sb: "Four-check protocol", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the four checks of the systematic quality assessment, and what is the output?",
    op: [
      "Structural (dimensions, dtypes, memory), Completeness (missing values — where/how many/patterns), Validity (ranges, type mismatches, duplicates), Distributional (summary stats, distribution shapes); output: a Data Quality Report",
      "Sample, split, train, test",
      "Mean, median, mode, range",
      "Collect, clean, model, deploy"
    ], an: 0,
    at: "Structural, Completeness, Validity, Distributional → output: a Data Quality Report (your first professional deliverable). Key insight: systematic assessment before cleaning — don't fix what you haven't diagnosed.",
    sl: "Slide 29 four numbered checks + output box + key insight.",
    ex: "The four checks match the four sections of the structured CTA prompt (slide 35).",
    mt: "Cleaning before diagnosing — explicitly warned against." });

  Q({ id: "L4-30-Q1", lec: L, pg: [30], tp: "Quality assessment", sb: "Structural", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pandas calls are used for structural assessment, and what does a numeric column stored as object signal?",
    op: [
      "df.describe(); a normal numeric column",
      "df.shape, df.dtypes (most important), df.info(), df.memory_usage(deep=True); a numeric column stored as object means hidden quality issues",
      "df.head(), df.tail(); nothing unusual",
      "df.plot(); perfect data"
    ], an: 1,
    at: "df.shape, df.dtypes (most important diagnostic), df.info(), df.memory_usage(deep=True). A numerical column stored as object means hidden quality issues. Telco example: TotalCharges shows as 'object' — not float64 — signaling a hidden issue to investigate.",
    sl: "Slide 30 code + what-to-look-for + Telco example.",
    ex: "This TotalCharges dtype finding returns for cleaning (blank strings for zero-tenure customers).",
    mt: "Ignoring dtype warnings — the slide calls dtypes the most important diagnostic." });

  Q({ id: "L4-31-Q1", lec: L, pg: [31], tp: "Quality assessment", sb: "Completeness", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the missingness rules of thumb, and what is the watch-out about sentinel values?",
    op: [
      "< 5% manageable; 5–30% needs careful strategy; > 30% consider dropping the column. Watch out: 'missing' isn't always NaN — could be blank strings, 'N/A', −999, or other sentinel values",
      "< 50% manageable; > 50% drop",
      "Missingness never exceeds 30% in practice",
      "Only NaN counts as missing"
    ], an: 0,
    at: "df.isnull().sum() (count), df.isnull().mean() (proportion). Rules: <5% manageable; 5–30% careful strategy choice; >30% consider dropping. Watch out: missing data isn't always NaN — blank strings, 'N/A', −999, sentinel values — always check beyond .isnull(). Critical question: WHY is data missing?",
    sl: "Slide 31 code + rules + watch-out.",
    ex: "The 'why' question seeds MCAR/MAR/MNAR (slide 39).",
    mt: "Trusting .isnull() alone — sentinels hide as values." });

  Q({ id: "L4-32-Q1", lec: L, pg: [32], tp: "Quality assessment", sb: "Validity", df: "medium", ty: "short", so: "lecture",
    pr: "List the four validity checks with their examples.",
    at: "Out-of-range values (negative ages? charges above $10,000? — domain knowledge defines valid ranges); duplicate rows (df.duplicated().sum() — investigate before dropping: true duplicates or repeat measurements?); inconsistent categories ('Female' vs 'female' vs 'F' — use .value_counts()); cross-field inconsistencies (tenure = 0 but TotalCharges = $5,000? — relationships between columns reveal errors).",
    sl: "Slide 32 four quadrants + note: CTA can identify these efficiently, but interpreting whether suspicious values are errors requires domain knowledge.",
    ex: "The tenure=0/TotalCharges example returns in the cleaning demos.",
    mt: "Dropping duplicates automatically — they may be legitimate repeat measurements." });

  Q({ id: "L4-33-Q1", lec: L, pg: [33], tp: "Quality assessment", sb: "Distributional", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which tools are used for distributional assessment and what do we look for?",
    op: [
      "Histograms (shape — skewed? bimodal? uniform?), box plots (outliers/quartile spread), count plots (categorical balance — are classes roughly even?), KDE (smooth density — subtle patterns). Look for unexpected shapes, extreme skewness, suspicious uniformity, multimodal distributions",
      "Only df.describe()",
      "Only scatter plots",
      "Only correlation matrices"
    ], an: 0,
    at: "Histograms, box plots, count plots, KDE. Look for: unexpected shapes • extreme skewness • suspicious uniformity • multimodal distributions. Callback to L3: Anscombe's quartet — statistics alone aren't enough; always visualize.",
    sl: "Slide 33 four tool cards + look-for list + L3 callback.",
    ex: "Count plots assess class balance — the Telco churn imbalance (~26.5%/73.5%) is visible this way.",
    mt: "Stopping at df.describe() — the slide title says 'beyond df.describe()'." });

  
  
  
  
  Q({ id: "L4-39-Q1", lec: L, pg: [39], tp: "Missingness", sb: "MCAR/MAR/MNAR", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which definitions of MCAR/MAR/MNAR are correct?",
    op: [
      "MCAR: unrelated to any variable; MAR: given observed variables, missingness unrelated to the missing values; MNAR: missingness depends on the missing values even given observed variables",
      "MCAR: missingness depends on missing values; MNAR: totally random",
      "MAR: missing values are random; MNAR: missing values unrelated to anything",
      "All three are equivalent"
    ], an: 0,
    at: "MCAR (Missing Completely at Random): missingness unrelated to any variable — observed or unobserved (lab tech drops test tubes). MAR (Missing at Random): given observed variables, missingness unrelated to the missing values (older patients skip a fitness test — depends on age, which is observed). MNAR (Missing Not at Random): missingness depends on the missing values, even given observed variables (high earners don't report income).",
    sl: "Slide 39 three definitions + examples + note: determining the mechanism requires reasoning about the data-generating process — it cannot be determined from data alone.",
    ex: "This 'cannot be determined from data alone' line is a favorite exam statement.",
    mt: "Treating MAR as 'random' — it is conditional on observed variables; MNAR is the self-referential case." });

  
  Q({ id: "L4-41-Q1", lec: L, pg: [41], tp: "Missingness", sb: "Mechanism → strategy", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which mechanism-to-strategy mapping is correct?",
    op: [
      "MCAR → must model missingness process; MAR → no simple fix; MNAR → deletion",
      "MCAR → deletion can be unbiased (listwise deletion loses data; mean/median can distort variability); MAR → conditional imputation appropriate (use related observed variables); MNAR → no simple fix (model the missingness process or acknowledge limitations)",
      "All mechanisms permit mean imputation",
      "Mechanism does not affect strategy"
    ], an: 1,
    at: "MCAR → deletion can be unbiased; MAR → conditional imputation appropriate; MNAR → no simple fix. Key insight: the CTA implements whatever strategy you request; YOUR job is determining which is valid. 'The mechanism is the judgment call. The implementation is just code.'",
    sl: "Slide 41 three rows + key insight.",
    ex: "This table is the direct bridge from theory to the three-strategy demo (slides 44–45).",
    mt: "Claiming mean imputation is valid under MNAR — the slide says no simple fix exists." });

  Q({ id: "L4-42-Q1", lec: L, pg: [42], tp: "Cleaning", sb: "Strategy toolkit", df: "medium", ty: "mcq", so: "lecture",
    pr: "Match the cleaning strategy to its description: which pairing is correct?",
    op: [
      "Deletion — fill with a fixed value; Constant — KNN imputer",
      "Statistical — mean/median/mode imputation (simple but distorts variance); Conditional — impute using related observed variables (appropriate under MAR); Model-based — KNN/iterative/regression (complex MAR patterns)",
      "Model-based — listwise deletion",
      "Constant — regression imputation"
    ], an: 1,
    at: "Deletion (listwise/pairwise; safest under MCAR if the dataset can absorb the loss); Constant (fixed value, e.g., 0/'Unknown' — when missing has natural meaning); Statistical (mean/median/mode — simple but distorts variance/distribution shape); Conditional (impute using related observed variables — appropriate under MAR with a suitable model); Model-based (KNN, iterative, regression — sophisticated, complex MAR patterns).",
    sl: "Slide 42 five-row table with when-to-use notes (simple → sophisticated arrow).",
    ex: "'Statistical' strategies distort variance — exactly what Demo 3 shows for TotalCharges.",
    mt: "Calling mean imputation 'unbiased' — it distorts variance/distribution shape." });

  Q({ id: "L4-44-Q1", lec: L, pg: [44], tp: "Cleaning", sb: "Three strategies compared", df: "hard", ty: "mcq", so: "lecture",
    pr: "TotalCharges is missing exactly for customers with tenure = 0. Why do mean and median imputation distort this column, and what does conditional (by-group) imputation do instead?",
    op: ["They are all equivalent", "Mean imputation inserts one artificial value for every new customer (a spike far above what zero-tenure customers could have spent); median relocates the same distortion; conditional imputation borrows values from similar low-tenure customers and preserves the natural relationship", "Median imputation is unbiased here", "Conditional imputation creates the artificial spike"], an: 1,
    at: "Mean/median imputation create an artificial spike of impossible values for brand-new customers, contradicting the data-generating process; conditional imputation (by tenure group) preserves the natural charge–tenure relationship.",
    sl: "Compare distributions before/after each strategy: simple imputation distorts the histogram; group-based imputation keeps new customers near low charges.",
    ex: "The ~$2,280 figure assumes 11 zero-tenure customers among the missing — know the story.",
    mt: "Believing median imputation avoids the distortion — it relocates the spike." });

  Q({ id: "L4-45-Q1", lec: L, pg: [45], tp: "Cleaning", sb: "Mechanism connection", df: "hard", ty: "mcq", so: "lecture",
    pr: "TotalCharges is missing exactly when tenure = 0, and conditional (by-tenure) imputation is chosen. Which missingness mechanism justifies this strategy, and what does its validity depend on?",
    op: ["MCAR — any strategy works", "MAR — missingness depends on the observed tenure rather than the hidden charge; validity also depends on the imputation model and its assumptions for zero-tenure customers", "MNAR — no strategy helps", "Independence — no assumptions needed"], an: 1,
    at: "Working assumption MAR: the missingness is explained by the observed tenure, not by the unobserved TotalCharges value — making conditional imputation appropriate. Its validity also depends on the imputation model and its assumptions for zero-tenure customers.",
    sl: "Mechanism → strategy: MCAR deletion; MAR conditional imputation; MNAR no simple fix.",
    ex: "Note the honesty: conditional imputation's validity depends on its own model assumptions.",
    mt: "Declaring MAR proven — the slide calls it a working assumption." });

  Q({ id: "L4-46-Q1", lec: L, pg: [46], tp: "Cleaning", sb: "Other tasks", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which cleaning tasks and code are shown?",
    op: [
      "Type mismatch fixing with pd.to_numeric(errors='coerce'); duplicates investigation; category standardization (.str.strip().str.lower().replace); outlier handling (errors → fix/remove; genuine extremes → keep; different population → investigate separately)",
      "Only missing-value imputation",
      "Deleting all inconsistent rows",
      "Converting all columns to strings"
    ], an: 0,
    at: "Type mismatches: pd.to_numeric(df['TotalCharges'], errors='coerce') — 'coerce' turns unparseable values to NaN for later handling. Duplicates: df.duplicated().sum(); investigate before dropping (true duplicates or repeat measurements?). Standardizing categories: strip/lower/replace ('F' → 'female'). Outliers: domain-dependent — errors → fix/remove; genuine extremes → keep; different population → investigate separately.",
    sl: "Slide 46 four task cards with code + closing note: interpreting suspicious values requires domain knowledge.",
    ex: "'coerce' is the key argument — silently turning failures into NaN enables the later decision.",
    mt: "Forgetting errors='coerce' and crashing on 'N/A' strings." });

  Q({ id: "L4-47-Q1", lec: L, pg: [47], tp: "Cleaning", sb: "Mindset", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the consequence-driven cleaning mindset?",
    op: [
      "Fix → understand → verify → implement",
      "Understand why the issue exists → choose strategy based on understanding → implement (CTA excels) → verify by comparing before/after distributions. Steps 1, 2, 4 require human judgment; step 3 is where the CTA accelerates",
      "Let the CTA choose strategies",
      "Skip verification if the code runs"
    ], an: 1,
    at: "Understand → Choose → Implement → Verify. Human: understand why → choose strategy → verify consequences; CTA: implement efficiently. Quotes: 'Don't fix what you don't understand. Don't trust what you haven't verified.'",
    sl: "Slide 47 four-step cycle + key insight + closing quotes.",
    ex: "The verify step compares before/after distributions — a practice from Demo 3.",
    mt: "Letting the CTA pick the strategy — the slide assigns that to the human." });

  Q({ id: "L4-49-Q1", lec: L, pg: [49], tp: "EDA", sb: "Discovery cycle", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the EDA discovery cycle, and how does EDA differ from quality assessment?",
    op: [
      "Visualize → Notice → Hypothesize → Investigate → Act (each visualization provokes a question; each question motivates the next). Quality assessment: systematic, checks every column, goal = find problems. EDA: creative and question-driven, follows interesting threads, goal = find patterns and insights",
      "EDA is a checklist; assessment is creative",
      "Both are identical",
      "EDA only uses statistics, not plots"
    ], an: 0,
    at: "The five-step cycle and the assessment/EDA contrast.",
    sl: "Slide 49 cycle + contrast box.",
    ex: "Teammate: 'EDA isn't a checklist — it's an iterative cycle of creative discovery.'",
    mt: "Treating EDA as running every standard plot in a fixed order." });

  Q({ id: "L4-50-Q1", lec: L, pg: [50], tp: "EDA", sb: "Toolkit by purpose", df: "medium", ty: "mcq", so: "lecture",
    pr: "Match visualization to question: which pairing is correct?",
    op: [
      "What does one variable look like? → correlation heatmap",
      "How do two variables relate? → histogram",
      "How does the target differ across groups? → grouped bar chart of target rate; Patterns across many features? → correlation heatmap and pair plots",
      "Trends over time → box plot only"
    ], an: 2,
    at: "One variable: histogram, count plot, KDE. Two variables: scatter, grouped bar, box plot. Target across groups: grouped bar chart of target rate. Many features: correlation heatmap, pair plots.",
    sl: "Slide 50 four question cards + tool lists + Anscombe callback.",
    ex: "Chart selection follows the question — same rule as L1 slide 46.",
    mt: "Using a correlation heatmap for single-variable distribution questions." });

  Q({ id: "L4-51-Q1", lec: L, pg: [51], tp: "EDA", sb: "Telco first look", df: "medium", ty: "short", so: "lecture",
    pr: "Summarize the three first EDA observations for the Telco dataset.",
    at: "Tenure distribution: bimodal — many new customers and many long-term customers (loyalty), fewer in the middle; question: why two clusters? does this relate to churn? Monthly charges: roughly uniform with concentration at the low end, wide range ($18–$118); question: do high-charge customers churn more? Churn rate: ~27% churned — moderate class imbalance (not extreme); question: which customer segments drive this?",
    sl: "Slide 51 three observation cards with follow-up questions.",
    ex: "The bimodal tenure motivates the tenure-bins feature later (slide 57).",
    mt: "Calling 27% churn 'extreme imbalance' — the slide explicitly says moderate, not extreme." });

  
  Q({ id: "L4-54-Q1", lec: L, pg: [54], tp: "Encoding", sb: "One-hot/ordinal/label", df: "medium", ty: "mcq", so: "lecture",
    pr: "When should each encoding be used?",
    op: [
      "One-hot for ordered features; ordinal for nominal",
      "One-hot for nominal (no natural order, few levels) — most common; ordinal for naturally ordered features (education: HS < BS < MS < PhD); label encoding generally avoided except for tree-based models that handle splits naturally",
      "Label encoding is always best",
      "Never use one-hot — it increases dimensions"
    ], an: 1,
    at: "One-hot: nominal features, few levels — contract: month-to-month [1,0,0], one year [0,1,0], two year [0,0,1]. Ordinal: ordered categories (satisfaction low→1, medium→2, high→3). Label: arbitrary integers — generally avoid except for tree-based models. Key rule: encoding must respect the structure of your data; one-hot is safest for nominal categories.",
    sl: "Slide 54 three encoding cards + key rule.",
    ex: "One-hot creates k new binary columns per k-level feature (dimensionality trade-off, slide 55).",
    mt: "Label-encoding a nominal variable fed to a linear model — imposes fake ordering." });

  Q({ id: "L4-55-Q1", lec: L, pg: [55], tp: "Encoding", sb: "Telco decisions", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which encoding decisions are shown for the Telco data, and what is the SeniorCitizen watch-out?",
    op: [
      "Contract, PaymentMethod, InternetService, gender → one-hot (no natural order); SeniorCitizen → one-hot (0/1 also valid). Watch out: SeniorCitizen is binary categorical — its 0/1 values already form a valid indicator encoding",
      "All features label-encoded",
      "Contract ordinal-encoded",
      "gender numerical"
    ], an: 0,
    at: "All five listed categorical columns one-hot (no natural order; SeniorCitizen 0/1 also valid). sklearn OneHotEncoder(sparse_output=False, handle_unknown='ignore'). Dimensionality increase: original 21 columns become ~30+, each k-level feature creating k binary columns — usually worthwhile for interpretability.",
    sl: "Slide 55 encoding decisions table + sklearn code + dimensionality note + watch-out.",
    ex: "handle_unknown='ignore' is revisited in the pipeline completeness questions (slide 58).",
    mt: "Assuming 21 columns stay 21 after one-hot — roughly 30+." });

  Q({ id: "L4-56-Q1", lec: L, pg: [56], tp: "Scaling", sb: "When scaling matters", df: "medium", ty: "mcq", so: "lecture",
    pr: "For which methods does scaling matter, and for which does it not?",
    op: [
      "Scaling matters for tree-based methods only",
      "Distance-based methods (KNN, SVM, PCA) and gradient-based methods (logistic regression, neural networks) need scaling; tree-based methods (decision trees, random forests, gradient boosting — scale-invariant splits) and Gaussian Naïve Bayes (positive affine scaling preserves likelihood ratios) don't",
      "Scaling never matters",
      "Only min-max works with PCA"
    ], an: 1,
    at: "Distance-based: KNN, SVM, PCA — larger ranges dominate distances. Gradient-based: logistic regression, neural networks — unscaled features cause slow/unstable convergence. Tree-based: scale-invariant. Gaussian NB: affine-scaling invariant. Formulas: z-score (x−µ)/σ; min-max (x−xmin)/(xmax−xmin). Rule of thumb: different ranges + distance/gradient methods ⇒ scale.",
    sl: "Slide 56 two columns + formulas + rule of thumb.",
    ex: "L5 requires standardization before Ridge/Lasso — same principle, penalty fairness reason.",
    mt: "Scaling before tree methods unnecessarily; skipping scaling for KNN/SVM/PCA." });

  Q({ id: "L4-57-Q1", lec: L, pg: [57], tp: "Feature engineering", sb: "Telco features", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which engineered features are proposed and why?",
    op: [
      "Average Monthly Charge = TotalCharges/tenure (rate of spend more informative; use only when tenure > 0, handle tenure = 0 separately); Number of Services (aggregate engagement — individual service flags are noisy); Tenure Bins (New 0–12 / Mid 13–36 / Long 37–72, based on the bimodal histogram)",
      "Random polynomial features",
      "One-hot encoding of numerical features",
      "Deleting tenure and charges"
    ], an: 0,
    at: "The three engineered features with domain/EDA justifications as listed. Key insight: best features come from domain knowledge + EDA discoveries; the CTA implements any transformation — you decide WHICH are meaningful.",
    sl: "Slide 57 three feature cards (domain knowledge: total spend grows with time; EDA insight: service flags noisy; EDA discovery: bimodal tenure).",
    ex: "Tenure bins encode customer-lifecycle phases discovered visually.",
    mt: "Dividing by tenure = 0 in the average-charge feature — handle separately." });

  Q({ id: "L4-58-Q1", lec: L, pg: [58], tp: "Pipelines", sb: "Completeness questions", df: "hard", ty: "mcq", so: "lecture",
    pr: "What four challenging-for-completeness questions are asked about the pipeline?",
    op: [
      "What colors to use? Which laptop? Which library version? How long to train?",
      "1) What if test data has a category level not seen in training? 2) Was SeniorCitizen put in the categorical or numerical pipeline? 3) Should feature engineering steps be in the pipeline? 4) Is the order of operations correct — impute before or after encoding?",
      "How many rows? How many columns? What is the target? What is the metric?",
      "None — pipelines need no questioning"
    ], an: 1,
    at: "The four questions as listed. Each question reveals a gap; the CTA addresses them, producing a more robust pipeline through iteration.",
    sl: "Slide 58 pipeline consolidation statement + four questions + closing note.",
    ex: "Unseen-category handling (handle_unknown) and impute-vs-encode order are classic pipeline bugs.",
    mt: "Ignoring unseen-category failures at inference time." });

  Q({ id: "L4-59-Q1", lec: L, pg: [59], tp: "Pipelines", sb: "Reproducible structure", df: "hard", ty: "mcq", so: "lecture",
    pr: "Describe the ColumnTransformer + Pipeline structure and why reproducibility matters.",
    op: [
      "One single pipeline for all columns without distinction",
      "Numerical features (tenure, MonthlyCharges, TotalCharges): SimpleImputer(median) → StandardScaler(); Categorical features (Contract, PaymentMethod, ...): SimpleImputer(most_frequent) → OneHotEncoder(handle_unknown); combined → model-ready features. Reproducibility: consistent train/test preprocessing; no data leakage (fit only on training, transform both); easy to modify (swap components)",
      "Only the model matters, not preprocessing",
      "Pipelines prevent overfitting automatically"
    ], an: 1,
    at: "The numerical/categorical ColumnTransformer branches and three reproducibility reasons.",
    sl: "Slide 59 pipeline diagram + three bullet reasons.",
    ex: "No-leakage is the same principle as L5's 'fit the scaler on training data only'.",
    mt: "Fitting imputers/scalers on the full dataset — leakage." });

  
  
  
  })();
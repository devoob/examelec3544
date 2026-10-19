/* Question bank — Lecture 4 (pages 1–66).
   Applications, project ideation, four-check quality protocol, MCAR/MAR/MNAR, cleaning, EDA, encoding, pipelines. */
(function () {
  var L = 4;

  Q({ id: "L4-3-Q1", lec: L, pg: [3], tp: "Objectives", sb: "Part 1/Part 2", df: "easy", ty: "short", so: "lecture",
    pr: "What are the six learning objectives of Lecture 4, split by part?",
    at: "Part 1: (1) describe applications across domains, identifying the common workflow; (2) formulate a project idea via structured CTA-assisted ideation, evaluating feasibility. Part 2: (3) conduct systematic data quality assessment producing a structured report; (4) choose and justify cleaning strategies based on missingness mechanisms and domain context; (5) conduct discovery-driven EDA and prepare data through encoding and reproducible pipelines; (6) direct CTA-assisted wrangling with strategic decision-making and verification.",
    sl: "Slide 3 objective list with Part 1 'why and what' and Part 2 'how'.",
    ex: "The four-check protocol and MCAR/MAR/MNAR are the two most examinable Part-2 items.",
    mt: "Missing the 'justify'/'verify' verbs — objectives emphasize judgment, not tool use." });

  Q({ id: "L4-4-Q1", lec: L, pg: [4], tp: "Course map", sb: "Module journey", df: "easy", ty: "mcq", so: "lecture",
    pr: "How does Lecture 4 position itself in the course (slide 4)?",
    op: [
      "As the final lecture of the course",
      "As the bridge from Module 1 foundations (L1–L3) to Module 2 core methods (L5 regression, L6 classification, L7 unsupervised)",
      "As an elective unrelated to other lectures",
      "As the deep-learning lecture"
    ], an: 1,
    at: "L4 bridges foundations (Module 1) to core methods (Module 2): Regression (L5) → Classification (L6) → Unsupervised Learning (L7).",
    sl: "Slide 4 module timeline graphic.",
    ex: "'The Practice: Applications & Wrangling' — prepared data feeds L5 modeling.",
    mt: "Forgetting that L4 Part 2's output (model-ready features) directly feeds L5/L6." });

  Q({ id: "L4-5-Q1", lec: L, pg: [5], tp: "Course map", sb: "Toolkit recap", df: "easy", ty: "short", so: "lecture",
    pr: "Which prior-lecture concepts does slide 5 collect as today's toolkit?",
    at: "From L2: data as matrices/vectors, variance/covariance, PCA intuition, dimensionality as feature count. From L3: summary statistics and distributions, 'always visualize', conditional probability, Bayes' rule. From L1: VERIFY framework, human judgment + AI capability, data science pipeline overview.",
    sl: "Slide 5 three-column recap + key insight: matrices become real datasets, distributions reveal quality issues, VERIFY guides every CTA interaction.",
    ex: "The slide explicitly frames today as 'tools in action'.",
    mt: "Omitting the VERIFY framework from the toolkit." });

  Q({ id: "L4-6-Q1", lec: L, pg: [6], tp: "Structure", sb: "Two parts", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the CTA role transition announced on slide 6?",
    op: [
      "From implementation assistant to brainstorming partner",
      "From brainstorming partner (generating and evaluating ideas) to implementation assistant (writing code, generating reports)",
      "From grader to student",
      "No role change from previous lectures"
    ], an: 1,
    at: "Brainstorming Partner → Implementation Assistant. Part 1A showcase, 1B ideation; Part 2A quality assessment, 2B missingness/cleaning, 2C EDA/pipelines.",
    sl: "Slide 6 two-part structure + role transition box + four numbered steps.",
    ex: "The role-transition summary appears again on slide 62 (L2–L3 learning partner → L4 brainstorming → L4 implementation).",
    mt: "Reversing the transition direction." });

  Q({ id: "L4-8-Q1", lec: L, pg: [8], tp: "Applications", sb: "Four domains", df: "easy", ty: "short", so: "lecture",
    pr: "Name the four application domains on slide 8 and their focus areas.",
    at: "Healthcare (prediction & discovery); Finance (risk & pattern detection); Climate (monitoring & prediction); Smart Cities (urban intelligence). Track-three-questions: what data? what techniques? what could go wrong?",
    sl: "Slide 8 four domain cards + tracking questions.",
    ex: "The same four domains are mapped to techniques in slide 18's table.",
    mt: "Mixing up domains — Smart Cities = urban intelligence (not climate)." });

  Q({ id: "L4-9-Q1", lec: L, pg: [9], tp: "Applications", sb: "Healthcare", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which healthcare applications are shown (slide 9)?",
    op: [
      "Disease prediction from patient features (classification, connects to L6) and medical imaging (deep learning detecting pneumonia from X-rays, connects to L9)",
      "Fraud detection and credit scoring",
      "Typhoon prediction and air quality",
      "Ride-sharing demand and traffic flow"
    ], an: 0,
    at: "Disease prediction (patient features: age, lab results, history → diabetes risk; classification; high stakes) and medical imaging (deep learning pneumonia detection; enabled by large annotated datasets; connects to L9).",
    sl: "Slide 9 two application blocks + [FIG 2: sample patient records table] Age | BMI | Glucose | BloodPressure | DiabetesRisk.",
    ex: "Each row a patient, each column a measurement — the matrix view from L2.",
    mt: "Confusing healthcare (classification) with finance (regression + classification)." });

  Q({ id: "L4-10-Q1", lec: L, pg: [10], tp: "Applications", sb: "Healthcare challenges", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which set of healthcare challenges is listed on slide 10?",
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
    pr: "What is the extreme class imbalance figure for fraud detection, and what fairness concern appears (slide 11)?",
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
    pr: "List the four key challenges and the impact statement for finance (slide 12).",
    at: "Challenges: extreme imbalance (~0.1% fraud); adversarial behavior (fraudsters adapt to detection systems); real-time requirements (decisions in milliseconds); fairness concerns (who gets denied credit, and why?). Impact: fraud detection at scale saves billions annually through automated pattern detection.",
    sl: "Slide 12 pipeline/challenges/impact + [FIG 5: anomaly scatter + cost-benefit comparison].",
    ex: "'Adversarial behavior' is unique to the finance domain among the four.",
    mt: "Forgetting that adversarial adaptation changes the data distribution over time." });

  Q({ id: "L4-13-Q1", lec: L, pg: [13], tp: "Applications", sb: "Climate", df: "easy", ty: "mcq", so: "lecture",
    pr: "What two climate applications are shown, and which course connection is made (slide 13)?",
    op: [
      "Climate monitoring/prediction and energy optimization (solar/wind output for grid management); regression connects to L5; HK context: typhoon prediction, air quality",
      "Fraud detection and credit scoring (L6)",
      "Ride-sharing and MTR crowding (L7)",
      "Pneumonia detection and diabetes risk (L9)"
    ], an: 0,
    at: "Climate monitoring & prediction (temperature records, extreme weather forecasting) + energy optimization (solar/wind output, grid management). Regression problem — connects to L5. HK context: typhoon prediction, air quality. Data: time series from sensor networks.",
    sl: "Slide 13 two blocks + data note.",
    ex: "Time-series structure motivates temporal-dependency challenges (slide 14).",
    mt: "Calling climate a classification problem — it is regression (continuous forecasting)." });

  Q({ id: "L4-14-Q1", lec: L, pg: [14], tp: "Applications", sb: "Climate challenges", df: "medium", ty: "short", so: "lecture",
    pr: "List the four climate challenges and the weather vs climate distinction (slide 14).",
    at: "Temporal dependencies (today's weather depends on yesterday's); spatial correlations (nearby stations correlated); massive scale (billions of data points across decades); weather prediction vs climate projection — different timescales, different methods. Impact: energy grid optimization — matching renewable supply to demand reduces waste and carbon emissions.",
    sl: "Slide 14 challenges + impact.",
    ex: "The weather/climate distinction is an easy MCQ trap.",
    mt: "Treating weather prediction and climate projection as interchangeable." });

  Q({ id: "L4-15-Q1", lec: L, pg: [15], tp: "Applications", sb: "Smart cities", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which smart-city examples are given (slide 15)?",
    op: [
      "Ride-sharing demand prediction, traffic flow, HK Octopus card patterns, MTR crowding prediction; clustering + regression methods; IoT air quality/energy monitoring with embeddings for location",
      "Disease prediction and imaging",
      "Fraud detection and credit scoring",
      "Typhoon prediction and solar output"
    ], an: 0,
    at: "Transportation optimization (ride-sharing demand, traffic flow; HK: Octopus patterns, MTR crowding; clustering + regression) and urban sensing (air quality, energy consumption; IoT sensor networks; embeddings for location representation).",
    sl: "Slide 15 two blocks + [FIG 8: ridership heatmap + transit data table].",
    ex: "Embeddings for location connect to L7.",
    mt: "Attributing Octopus/MTR examples to finance." });

  Q({ id: "L4-16-Q1", lec: L, pg: [16], tp: "Applications", sb: "Smart cities challenges", df: "medium", ty: "short", so: "lecture",
    pr: "List the four smart-city challenges and the impact statement (slide 16).",
    at: "Heterogeneous sources (GPS, sensors, surveys, social data); privacy (location data reveals personal patterns); real-time processing (traffic optimization needs instant decisions); scale (terabytes of sensor data daily). Impact: transit optimization reducing commute time and crowding — data-driven scheduling improves quality of life for millions.",
    sl: "Slide 16 challenges + impact.",
    ex: "Heterogeneous data foreshadows encoding/joining complexity in Part 2.",
    mt: "Underestimating the scale figure (terabytes daily)." });

  Q({ id: "L4-17-Q1", lec: L, pg: [17], tp: "Applications", sb: "Common thread", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the common thread across all four domains (slide 17)?",
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

  Q({ id: "L4-18-Q1", lec: L, pg: [18], tp: "Applications", sb: "Technique mapping", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which domain-to-technique mapping is correct (slide 18)?",
    op: [
      "Healthcare — clustering + embeddings (L7)",
      "Finance — regression + visualization (L5)",
      "Smart Cities — classification + metrics (L4, L6)",
      "Climate — regression + visualization (temporal dependencies, scale) — L4, L5"
    ], an: 3,
    at: "Healthcare: classification + metrics (missing data, class imbalance) — L4, L6. Finance: regression + classification (extreme imbalance, fairness) — L5, L6. Climate: regression + visualization (temporal dependencies, scale) — L4, L5. Smart Cities: clustering + embeddings (heterogeneous data, privacy) — L7.",
    sl: "Slide 18 four-row domain table.",
    ex: "'The methods in L5–L7 are the tools practitioners use across all these domains.'",
    mt: "Swapping Smart Cities (clustering/embeddings) with Healthcare (classification/metrics)." });

  Q({ id: "L4-19-Q1", lec: L, pg: [19], tp: "Project", sb: "Timeline", df: "easy", ty: "mcq", so: "lecture",
    pr: "What are the project requirements and timeline milestones (slide 19)?",
    op: [
      "Team of 3; real dataset (not from class); full pipeline. Timeline: Form teams by Sep 23 → Proposals by Oct 11 → Progress check → Presentations by late Nov; 30% of final grade",
      "Team of 5; class dataset; midterm project",
      "Individual project due in one week",
      "No project in this course"
    ], an: 0,
    at: "Team of 3 students; real dataset (not from class) — you find it, you own it; full pipeline: question → data → wrangling → modeling → communication. Milestones: teams by Sep 23; proposals by Oct 11; presentations by late Nov. Assessment: 30% of final grade.",
    sl: "Slide 19 bullets + timeline.",
    ex: "Today's Part 1B teaches the ideation process to find YOUR project idea.",
    mt: "Using a class-provided dataset — explicitly disallowed." });

  Q({ id: "L4-20-Q1", lec: L, pg: [20], tp: "Project", sb: "Good project criteria", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which of the five criteria for a good project appears on slide 20?",
    op: [
      "Question must be broad and exploratory ('understand social media')",
      "Clear, answerable question (e.g., 'predict post engagement from timing and content features'); real accessible data (>1,000 rows; labelled/paired); appropriate scope (~6 weeks); personal interest; full pipeline opportunity",
      "Data must come from APIs only",
      "No modeling required — wrangling is enough"
    ], an: 1,
    at: "The five criteria: clear answerable question; real accessible data >1,000 rows, labelled/paired; appropriate scope (6 weeks, team of 2–3); personal interest; full pipeline opportunity. Too broad: 'Understanding social media'.",
    sl: "Slide 20 five numbered criteria + good/bad examples.",
    ex: "Note the slide says teams of 2–3 for scope (course logistics elsewhere say 3 — either accepted).",
    mt: "Choosing a question that cannot be answered with the available data." });

  Q({ id: "L4-21-Q1", lec: L, pg: [21], tp: "Project", sb: "Where to find data", df: "easy", ty: "short", so: "lecture",
    pr: "List the dataset sources on slide 21 and the 'verify first' warning.",
    at: "Kaggle datasets (curated + community notebooks); UCI ML Repository (classic benchmarks); Google Dataset Search; GitHub awesome-public-datasets (community-curated by domain); HK Open Data (data.gov.hk); World Bank / WHO / NOAA (authoritative global data on economics, health, climate). Warning: always verify the dataset actually exists and has the features you need before committing. Tip: start browsing this week; bring 2–3 candidates to the team discussion.",
    sl: "Slide 21 six sources + warning + tip.",
    ex: "The verification step is formalized in slide 25's VERIFY-in-action table.",
    mt: "Committing to a project before verifying data access." });

  Q({ id: "L4-22-Q1", lec: L, pg: [22], tp: "Project", sb: "Five-step ideation", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the correct order of the five-step CTA ideation process (slide 22)?",
    op: [
      "Start with data → generate questions → refine → evaluate → sketch",
      "Start with your interest → generate questions → evaluate feasibility → refine & narrow → produce project sketch",
      "Generate questions → write proposal → collect data → evaluate → present",
      "Start with your interest → collect data → model → evaluate → sketch"
    ], an: 1,
    at: "1) Start with your interest (not data — YOUR curiosity matters most); 2) generate questions (CTA brainstorms options); 3) evaluate feasibility (data, scope, techniques); 4) refine & narrow; 5) produce project sketch (one-paragraph proposal).",
    sl: "Slide 22 five steps + key insight: the CTA generates options; YOU make every decision.",
    ex: "The interest-first principle avoids 'data looking for a question'.",
    mt: "Starting from a dataset instead of a question." });

  Q({ id: "L4-24-Q1", lec: L, pg: [24], tp: "Project", sb: "CTA demo key moments", df: "medium", ty: "short", so: "lecture",
    pr: "What are the four key moments of CTA Demo 1 (slide 24)?",
    at: "1) Structured prompt with constraints (specify level, data requirements, techniques, timeline, team size — not 'give me ideas'); 2) evaluating, not accepting ('this one is interesting but where would I get the data?'); 3) VERIFY: Validate (does the suggested dataset actually exist with the claimed features?); 4) making it yours ('can I explain this project without the CTA?').",
    sl: "Slide 24 four quadrants + closing: the CTA generated ideas, suggested datasets, and wrote a polished proposal — but every decision was the instructor's.",
    ex: "This is the exam-relevant 'AI generates, you decide' pattern.",
    mt: "Accepting CTA-suggested datasets without verifying existence/features." });

  Q({ id: "L4-25-Q1", lec: L, pg: [25], tp: "Project", sb: "VERIFY in ideation", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which VERIFY steps are highlighted as most critical for project ideation (slide 25)?",
    op: [
      "Execute and Fix",
      "Validate (V) and Yours (Y)",
      "Reason and Inspect",
      "All steps equally",
      "None — VERIFY applies only to code"
    ], an: 1,
    at: "Highlighted: V (Validate — does the dataset actually exist with claimed features?) and Y (Yours — can you explain this project without the CTA? Is this YOUR idea?).",
    sl: "Slide 25 full VERIFY table applied to ideation: Validate (dataset exists?), Execute (download and load it), Reason (approach addresses the question?), Inspect (what could go wrong — too small, irrelevant features, scope), Fix (iterate scope), Yours.",
    ex: "Execute = try loading the data before committing.",
    mt: "Skipping Execute (actually trying the download)." });

  Q({ id: "L4-27-Q1", lec: L, pg: [27], tp: "Wrangling", sb: "Workflow + 80/20", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the professional wrangling workflow, and the 80/20 reality (slide 27)?",
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
    pr: "What are the four checks of the systematic quality assessment, and what is the output (slide 29)?",
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
    pr: "Which pandas calls are used for structural assessment, and what does a numeric column stored as object signal (slide 30)?",
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
    pr: "What are the missingness rules of thumb, and what is the watch-out about sentinel values (slide 31)?",
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
    pr: "List the four validity checks on slide 32 with their examples.",
    at: "Out-of-range values (negative ages? charges above $10,000? — domain knowledge defines valid ranges); duplicate rows (df.duplicated().sum() — investigate before dropping: true duplicates or repeat measurements?); inconsistent categories ('Female' vs 'female' vs 'F' — use .value_counts()); cross-field inconsistencies (tenure = 0 but TotalCharges = $5,000? — relationships between columns reveal errors).",
    sl: "Slide 32 four quadrants + note: CTA can identify these efficiently, but interpreting whether suspicious values are errors requires domain knowledge.",
    ex: "The tenure=0/TotalCharges example returns in the cleaning demos.",
    mt: "Dropping duplicates automatically — they may be legitimate repeat measurements." });

  Q({ id: "L4-33-Q1", lec: L, pg: [33], tp: "Quality assessment", sb: "Distributional", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which tools are used for distributional assessment and what do we look for (slide 33)?",
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

  Q({ id: "L4-35-Q1", lec: L, pg: [35], tp: "Quality assessment", sb: "Structured request", df: "medium", ty: "mcq", so: "lecture",
    pr: "What three components make the structured quality-report prompt good (slide 35)?",
    op: [
      "Short length, casual tone, no format",
      "Context (dataset description), structure (four sections matching the four-check protocol), format (structured report with prioritized issues list)",
      "Only asking 'is my data clean?'",
      "Asking for code without explanation"
    ], an: 1,
    at: "Context (dataset description: ~7,000 rows, 21 columns, telecom churn); structure (four explicit sections mapped to the four-check protocol); format (structured report with a prioritized issues list at the end). Lesson: quality of AI output depends on quality of your request. Vague input → vague output.",
    sl: "Slide 35 prompt vs 'Is my data clean?' comparison.",
    ex: "The four sections are structural, completeness, validity, distributional.",
    mt: "Asking 'is my data clean?' — the exact vague input the slide contrasts against." });

  Q({ id: "L4-36-Q1", lec: L, pg: [36], tp: "Quality assessment", sb: "Human vs CTA", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does the human catch that the CTA misses in the two findings on slide 36?",
    op: [
      "Nothing — the CTA is sufficient",
      "SeniorCitizen: CTA reports int64 values [0,1] mean 0.16, but the human recognizes it is binary categorical (0/1 already valid indicator encoding); TotalCharges: CTA flags dtype object, but the human investigates the blank strings (not NaN) for zero-tenure customers — new customers not yet billed",
      "The CTA cannot compute means",
      "Both findings are errors in the data"
    ], an: 1,
    at: "SeniorCitizen is categorical with business meaning; TotalCharges blanks have a business explanation (zero-tenure customers). Key insight: the CTA computes accurately; the human interprets meaningfully. Two takeaways: structured requests produce comprehensive output; human interpretation catches what the CTA misses.",
    sl: "Slide 36 two finding pairs + key insight + takeaways.",
    ex: "The TotalCharges explanation drives the imputation choice (conditional on tenure).",
    mt: "Treating SeniorCitizen as continuous because it is int64." });

  Q({ id: "L4-37-Q1", lec: L, pg: [37], tp: "Quality assessment", sb: "VERIFY applied", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which two VERIFY steps are highlighted for data quality assessment (slide 37)?",
    op: ["Execute and Fix", "Validate and Inspect", "Reason and Fix", "Yours and Execute"], an: 1,
    at: "Validate (are type classifications correct? Is SeniorCitizen really numerical?) and Inspect (what edge cases might the automated profile miss — sentinel values, type mismatches?).",
    sl: "Slide 37 full VERIFY table: Execute (profiling runs), Reason (findings make sense given business), Fix (follow-ups), Yours (explain each finding in your own words).",
    ex: "The highlighted pair maps to the two demo findings (type classification and hidden blanks).",
    mt: "Choosing Execute — running the code is necessary but not the highlighted judgment step." });

  Q({ id: "L4-38-Q1", lec: L, pg: [38], tp: "Quality assessment", sb: "Report structure", df: "medium", ty: "short", so: "lecture",
    pr: "List the four sections of the Data Quality Report as a professional deliverable (slide 38).",
    at: "1) Data Overview (source, dimensions, feature descriptions, collection context); 2) Findings by Check Type (structural, completeness, validity, distributional — organized and specific); 3) Prioritized Issues (ranked by impact on analysis — what must be fixed vs what can wait); 4) Recommended Actions (specific, justified cleaning strategies for each issue).",
    sl: "Slide 38 four numbered sections + transition: 'Now that we know what's wrong, how do we fix it? That depends on why the data is problematic.'",
    ex: "The prioritized-issues section requires judgment about analysis impact.",
    mt: "Omitting the prioritization/justification elements." });

  Q({ id: "L4-39-Q1", lec: L, pg: [39], tp: "Missingness", sb: "MCAR/MAR/MNAR", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which definitions of MCAR/MAR/MNAR are correct (slide 39)?",
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

  Q({ id: "L4-40-Q1", lec: L, pg: [40], tp: "Missingness", sb: "Mechanisms (visual)", df: "medium", ty: "short", so: "lecture",
    pr: "What does the image-only slide 40 'Why is Data Missing? Three Mechanisms' present?",
    at: "A visual version of the same three-mechanism taxonomy: MCAR, MAR, MNAR (the text extraction contains only the title and page number — the slide is image-based). The examinable definitions are on slide 39.",
    sl: "Slide 40 is image-only in extraction — a diagram reinforcing MCAR/MAR/MNAR; inspect the slide image if needed.",
    ex: "Flagged as 'needs manual check' in the coverage report for content beyond the title.",
    mt: "Assuming the slide adds new definitions not on slide 39." });

  Q({ id: "L4-41-Q1", lec: L, pg: [41], tp: "Missingness", sb: "Mechanism → strategy", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which mechanism-to-strategy mapping is correct (slide 41)?",
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
    pr: "Match the cleaning strategy to its description: which pairing is correct (slide 42)?",
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
    pr: "What happens under the three imputation strategies for TotalCharges (slide 44)?",
    op: [
      "All three produce similar results",
      "Mean imputation: artificial spike at ~$2,280 telling the model 11 new customers all spent exactly $2,280 (distorts distribution); Median: same problem at the median; Conditional (by tenure group): values near $0 for new customers — no artificial spike, preserves the natural relationship",
      "Median imputation is the only valid option",
      "Conditional imputation creates the artificial spike"
    ], an: 1,
    at: "Mean: artificial spike ~$2,280 — completely unrealistic for zero-tenure (❌ distorts distribution). Median: same problem at a different value (❌). Conditional: imputes by tenure group — zero-tenure customers get values based on similar 1–3 month customers; no artificial spike (✓ preserves natural relationship).",
    sl: "Slide 44 three strategy cards with outcomes + note that overlaid histograms make consequences visible.",
    ex: "The ~$2,280 figure assumes 11 zero-tenure customers among the missing — know the story.",
    mt: "Believing median imputation avoids the distortion — it relocates the spike." });

  Q({ id: "L4-45-Q1", lec: L, pg: [45], tp: "Cleaning", sb: "Mechanism connection", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why is conditional imputation the justified choice for TotalCharges (slide 45)?",
    op: [
      "Because it is the fastest",
      "Observation: TotalCharges missing for tenure = 0; working assumption: MAR (missingness depends on tenure alone, not on the unobserved TotalCharges value) → conditional imputation accounts for tenure (validity depends on the imputation model and assumptions for zero-tenure customers)",
      "Because mean imputation is never allowed",
      "Because the data is MNAR"
    ], an: 1,
    at: "The MAR working assumption makes conditional imputation appropriate. Key insight: mean/median imputation introduces values that contradict the data-generating process — new customers didn't spend $2,280. The MCAR/MAR/MNAR framework guided the strategy and the assumptions to check. VERIFY connection: Inspect (distributional consequences) + Reason (strategy ↔ mechanism).",
    sl: "Slide 45 observation + assumption + conclusion + key insight + VERIFY + closing quote: 'The CTA implemented all three equally well — it doesn't know which is right. That judgment came from you.'",
    ex: "Note the honesty: conditional imputation's validity depends on its own model assumptions.",
    mt: "Declaring MAR proven — the slide calls it a working assumption." });

  Q({ id: "L4-46-Q1", lec: L, pg: [46], tp: "Cleaning", sb: "Other tasks", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which cleaning tasks and code are shown on slide 46?",
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
    pr: "What is the consequence-driven cleaning mindset (slide 47)?",
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
    pr: "What is the EDA discovery cycle, and how does EDA differ from quality assessment (slide 49)?",
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
    pr: "Match visualization to question: which pairing is correct (slide 50)?",
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
    pr: "Summarize the three first EDA observations for the Telco dataset (slide 51).",
    at: "Tenure distribution: bimodal — many new customers and many long-term customers (loyalty), fewer in the middle; question: why two clusters? does this relate to churn? Monthly charges: roughly uniform with concentration at the low end, wide range ($18–$118); question: do high-charge customers churn more? Churn rate: ~27% churned — moderate class imbalance (not extreme); question: which customer segments drive this?",
    sl: "Slide 51 three observation cards with follow-up questions.",
    ex: "The bimodal tenure motivates the tenure-bins feature later (slide 57).",
    mt: "Calling 27% churn 'extreme imbalance' — the slide explicitly says moderate, not extreme." });

  Q({ id: "L4-53-Q1", lec: L, pg: [53], tp: "EDA", sb: "Discovery thread", df: "medium", ty: "short", so: "lecture",
    pr: "Describe the three-step discovery thread of CTA Demo 4 and the churn-by-contract numbers (slide 53).",
    at: "Step 1: scatter of MonthlyCharges vs tenure colored by Churn — high-charge, low-tenure customers cluster as churned; new customers on expensive plans are at highest risk. Step 2: churn rate by contract type — month-to-month ~43%, one year ~11%, two year ~3% (a 14× difference — powerful predictor). Step 3: synthesis — contract type, tenure, and charges are strong individual predictors; their interactions may be even more informative for modeling in L6.",
    sl: "Slide 53 three steps + discovery thread note.",
    ex: "These numbers are concrete exam-ready facts from the demo.",
    mt: "Forgetting the 14× multiple; swapping contract-type churn rates." });

  Q({ id: "L4-54-Q1", lec: L, pg: [54], tp: "Encoding", sb: "One-hot/ordinal/label", df: "medium", ty: "mcq", so: "lecture",
    pr: "When should each encoding be used (slide 54)?",
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
    pr: "Which encoding decisions are shown for the Telco data, and what is the SeniorCitizen watch-out (slide 55)?",
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
    pr: "For which methods does scaling matter, and for which does it not (slide 56)?",
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
    pr: "Which engineered features are proposed on slide 57 and why?",
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
    pr: "What four challenging-for-completeness questions are asked about the pipeline (slide 58)?",
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
    pr: "Describe the ColumnTransformer + Pipeline structure and why reproducibility matters (slide 59).",
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

  Q({ id: "L4-60-Q1", lec: L, pg: [60], tp: "Wrangling", sb: "Journey map", df: "medium", ty: "short", so: "lecture",
    pr: "Summarize the complete Part 2 journey from raw data to model-ready features (slide 60).",
    at: "Raw Data (7,043 rows, 21 columns) → Assess (four checks, quality report) → Clean (mechanism-driven) → Explore (discovery cycle) → Prepare (encode, scale, pipeline) → Model-Ready (~30+ features, reproducible). Key insight: every step involved human judgment; the CTA made each step faster; your judgment made each step correct. The Telco dataset is now ready for L6 classification.",
    sl: "Slide 60 pipeline graphic + key insight + L6 teaser.",
    ex: "The ~30+ features come from one-hot expansion (slide 55).",
    mt: "Skipping Assess or Explore in the mental model of the journey." });

  Q({ id: "L4-61-Q1", lec: L, pg: [61], tp: "Summary", sb: "Takeaways", df: "medium", ty: "short", so: "lecture",
    pr: "List the five key takeaways of Lecture 4 (slide 61).",
    at: "1) Same pipeline, different domain knowledge (all domains: Question → Collect → Clean → Analyze → Model → Communicate); 2) CTA as brainstorming partner — but the idea must be yours (five-step ideation; CTA generates, you decide); 3) Four-check protocol as professional skill (structural, completeness, validity, distributional); 4) Cleaning choices have consequences — understand why (MCAR/MAR/MNAR guides strategy; simple imputation can distort relationships; conditional methods need suitable models/assumptions); 5) EDA is discovery, not a checklist (let findings guide questions; consolidate into reproducible, leak-free pipelines).",
    sl: "Slide 61 five numbered takeaways.",
    ex: "This is the L4 exam skeleton.",
    mt: "Missing takeaway 4's nuance (imputation consequences)." });

  Q({ id: "L4-62-Q1", lec: L, pg: [62], tp: "CTA patterns", sb: "Role transition table", df: "medium", ty: "mcq", so: "lecture",
    pr: "How does the CTA's role evolve across L2–L3, L4 Part 1, and L4 Part 2 (slide 62)?",
    op: [
      "Learning partner → brainstorming partner → implementation assistant",
      "Implementation assistant → learning partner → brainstorming partner",
      "Brainstorming partner → implementation assistant → grader",
      "The role never changes"
    ], an: 0,
    at: "L2–L3 Learning Partner (explain concepts, verify understanding, build intuition — ask 'why'/'how', check reasoning). L4 Part 1 Brainstorming Partner (generate/evaluate project ideas — structured prompts with constraints; evaluate, don't accept blindly). L4 Part 2 Implementation Assistant (write code, generate reports, build pipelines — structured requests; challenge for completeness; verify consequences).",
    sl: "Slide 62 three-column role-transition table.",
    ex: "L5 continues as implementation assistant with new responsibilities (specify, verify, interpret).",
    mt: "Swapping brainstorming and implementation phases." });

  Q({ id: "L4-63-Q1", lec: L, pg: [63], tp: "Extensions", sb: "Intriguing questions", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which three 'technically intriguing questions' close the lecture (slide 63)?",
    op: [
      "When to drop rather than impute? Can PCA (L2) diagnose data quality (outliers in PCA space)? How to assess quality of unstructured data (text/images) where the four-check protocol doesn't directly apply?",
      "What is a p-value? What is Bayes' rule? What is cosine similarity?",
      "How many layers does a transformer have? What is attention? What is a token?",
      "Which laptop to buy? Which cloud provider? Which IDE?"
    ], an: 0,
    at: "The three questions with their think/try/extend prompts: drop vs impute trade-offs (small vs large datasets, high missingness, robust analyses); PCA as diagnostic (outliers in PCA space — connects L2 to L4); unstructured data quality (text encoding/languages/boilerplate; image resolution/labeling errors — forward pointers to L7 and L9–L10).",
    sl: "Slide 63 three 🤔 questions with prompts.",
    ex: "The PCA-as-diagnostic idea is a nice synthesis question linking L2 and L4.",
    mt: "Applying the four-check protocol to text/images without adaptation." });
})();
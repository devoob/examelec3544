/* Question bank — Lecture 1 (pages 1–73).
   One or more questions for every page with testable content; extras on definition/example-heavy slides. */
(function () {
  var L = 1;

  
  
  
  
  
  
  
  Q({ id: "L1-13-Q1", lec: L, pg: [13], tp: "Definitions", sb: "Data science", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which is the standard definition of data science?",
    op: [
      "Using AI to generate reports from spreadsheets",
      "The practice of extracting meaningful insights from data using a combination of domain expertise, programming skills, and statistical knowledge",
      "Building predictive models with neural networks",
      "Storing and querying large databases efficiently"
    ], an: 1,
    at: "Extracting meaningful insights from data using domain expertise + programming skills + statistical knowledge.",
    sl: "Slide 13 verbatim: 'Data science is the practice of extracting meaningful insights from data using a combination of domain expertise, programming skills, and statistical knowledge.'",
    ex: "The three pillars map to the three panels: understand the problem context; collect/clean/process at scale; analyze/model/draw valid conclusions.",
    mt: "Giving only 'analyzing data with statistics' — the definition requires all three components.",
    mr: null });

  Q({ id: "L1-14-Q1", lec: L, pg: [14], tp: "Definitions", sb: "Venn diagram", df: "easy", ty: "short", so: "lecture",
    pr: "Name the three circles of the data science Venn diagram and what each contributes.",
    at: "Mathematics and Statistics (probability, inference, modeling); Computer Science (programming, algorithms, data structures); Domain Expertise (industry knowledge, business context). Data science lives at the intersection — you need all three.",
    sl: "Slide 14: DATA SCIENCE at the intersection of the three circles.",
    ex: "The Venn framing motivates the whole course: methods + computation + context.",
    mt: "Listing only two circles or placing data science as a subset of ML." });

  Q({ id: "L1-15-Q1", lec: L, pg: [15], tp: "Definitions", sb: "Related fields", df: "medium", ty: "mcq", so: "lecture",
    pr: "Match the field to its key distinction. Which mapping is correct?",
    op: [
      "Data Science — infrastructure focus",
      "Machine Learning — subset focused on algorithms",
      "Statistics — business strategy focus",
      "Data Engineering — end-to-end problem solving"
    ], an: 1,
    at: "Machine Learning — subset focused on algorithms (build predictive models from data).",
    sl: "Slide 15 table: Data Science (extract insights → end-to-end problem solving); Machine Learning (build predictive models → subset focused on algorithms); Statistics (analyze/interpret rigorously → mathematical foundations); Data Engineering (infrastructure and pipelines); Business Analytics (business strategy focus).",
    ex: "These fields overlap significantly; data scientists often use techniques from all of them.",
    mt: "Assigning 'end-to-end problem solving' to ML — that distinction belongs to Data Science itself." });

  Q({ id: "L1-16-Q1", lec: L, pg: [16], tp: "Workflow", sb: "Pipeline", df: "easy", ty: "short", so: "lecture",
    pr: "List the six stages of the data science workflow and its 'reality check' caveat.",
    at: "Question → Collect → Clean → Analyze → Model → Communicate. Reality check: the process is rarely linear — you often loop back as you discover new questions or data issues.",
    sl: "Slide 16 pipeline with icons: ❓ Question, 📥 Collect, 🧹 Clean, 📊 Analyze, 🔮 Model, 📢 Communicate.",
    ex: "The same pipeline reappears in L4 as 'Question → Collect → Clean → Analyze → Model → Communicate' across all domains.",
    mt: "Treating the workflow as strictly sequential — the slide explicitly says it is iterative." });

  Q({ id: "L1-17-Q1", lec: L, pg: [17], tp: "Data types", sb: "Categorical vs numerical", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which data-type mapping is correct?",
    op: [
      "Year in school, ratings (1–5) → categorical",
      "Major, device type, country → ordinal",
      "Sleep hours, age, GPA → numerical; year in school, ratings → ordinal",
      "Comments, goals → numerical"
    ], an: 2,
    at: "Numerical: sleep hours, age, GPA. Ordinal: year in school, ratings (1–5). Categorical: major, device type, country. Text: comments, goals, open responses.",
    sl: "Slide 17 four panels: CATEGORICAL (distinct groups, no order), ORDINAL (ordered categories), NUMERICAL (measurable quantities), TEXT (unstructured).",
    ex: "Key insight: real datasets contain all these types; each requires different approaches.",
    mt: "Classifying ratings 1–5 as numerical ratio data — they are ordinal here." });

  
  
  Q({ id: "L1-22-Q1", lec: L, pg: [22], tp: "Survey design", sb: "Question quality", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which practice does good survey design warn against (or require) in survey design?",
    op: [
      "Piloting with a few people before deployment — discouraged because it biases results",
      "Double-barreled questions — asking two things at once should be avoided",
      "Keeping surveys to 5–10 minutes — too short to be useful",
      "Grouping related questions — increases dropout"
    ], an: 1,
    at: "Avoid double-barreled questions (one concept per question); the slide advises piloting before deployment, 5–10 minute length, logical flow, and clear language.",
    sl: "Slide 22 five principles: clear language (avoid jargon), one concept per question, logical flow (easy → sensitive), appropriate length (5–10 min ideal), test first (pilot).",
    ex: "Warning on the slide: poorly designed surveys = unreliable data that can't be fixed later.",
    mt: "Thinking pilot testing is optional — the slide says 'always pilot'." });

  Q({ id: "L1-23-Q1", lec: L, pg: [23], tp: "Survey design", sb: "Question types", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which question type produces ORDINAL data, and which produces TEXT for NLP?",
    op: [
      "Number input → ordinal; paragraph → text",
      "Multiple choice → ordinal; linear scale → categorical",
      "Linear scale (satisfaction 1–5) → ordinal; paragraph (goals, feedback) → text",
      "Multiple choice → text; linear scale → numerical"
    ], an: 2,
    at: "Linear scale → ordinal; paragraph → text (free-form language for NLP). Multiple choice → categorical; number input → numerical.",
    sl: "Slide 23: MULTIPLE CHOICE → Categorical; LINEAR SCALE → Ordinal; NUMBER INPUT → Numerical; PARAGRAPH → Text.",
    ex: "Key insight: choose question types top-down from how you plan to analyze the data.",
    mt: "Treating a 1–5 satisfaction scale as numerical for analysis without justification." });

  Q({ id: "L1-27-Q1", lec: L, pg: [27], tp: "Data collection", sb: "Sources", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which of the following is SECONDARY data?",
    op: [
      "Survey responses you collect yourself",
      "Twitter data pulled via an API",
      "Kaggle / UCI ML Repository datasets",
      "Observations and interviews you conduct"
    ], an: 2,
    at: "Kaggle/UCI datasets are secondary (existing datasets); surveys, experiments, observations, interviews are primary; APIs and web scraping are collection methods for external data.",
    sl: "Slide 27: PRIMARY = data you collect yourself (surveys, experiments, observations, interviews — 'Like our class survey!'); SECONDARY = existing datasets (government data, research datasets, public repositories: Kaggle, UCI ML Repository); APIs = programmatic access (Twitter, weather, financial); WEB SCRAPING = extracting from websites, requires ethical care.",
    ex: "The best data scientists know multiple collection methods and choose based on the question at hand.",
    mt: "Assuming anything downloaded is 'primary' — primary refers to data you generated/collected for this question." });

  
  Q({ id: "L1-30-Q1", lec: L, pg: [30], tp: "Data types", sb: "Survey data", df: "easy", ty: "short", so: "lecture",
    pr: "For the collected survey data, give one example variable for each of the four types.",
    at: "Categorical: major, device type, social media platform. Ordinal: year in school, confidence levels. Numerical: sleep hours, commute time, courses. Text: learning goals, concerns, mood.",
    sl: "Slide 30 repeats the four-type taxonomy applied to the class survey.",
    ex: "Key insight: real datasets often contain all these types; each requires different cleaning and analysis approaches.",
    mt: "Assigning 'confidence levels' to numerical — it is ordered but not measured on a numeric scale." });

  Q({ id: "L1-31-Q1", lec: L, pg: [31], tp: "Data formats", sb: "CSV/JSON/Excel/Parquet", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which format is described as a compressed columnar format for big data with fast queries?",
    op: ["CSV", "JSON", "Excel (.xlsx)", "Parquet"], an: 3,
    at: "Parquet — columnar, compressed, fast queries; loaded with pd.read_parquet().",
    sl: "Slide 31: CSV (simple tabular, universal), JSON (nested/hierarchical, API standard, human-readable), Excel (multiple sheets, formatting, formulas, business standard, pd.read_excel()), Parquet (columnar, compressed, fast queries).",
    ex: "In this course you'll primarily work with CSV and JSON; pandas loads any format with read_csv(), read_json(), etc.",
    mt: "Mixing up JSON (nested/human-readable) with Parquet (columnar/binary)." });

  Q({ id: "L1-32-Q1", lec: L, pg: [32], tp: "Data cleaning", sb: "Garbage in garbage out", df: "easy", ty: "short", so: "lecture",
    pr: "State the 'Garbage In, Garbage Out' principle and give two consequences of NOT cleaning data versus two benefits of proper cleaning.",
    at: "Principle: even the most sophisticated analysis or model produces misleading results if input data is flawed. Without cleaning: incorrect conclusions from outliers, models that fail on edge cases, misleading visualizations, biased predictions. With cleaning: reliable statistics, robust generalizable models, clear honest visualizations, trustworthy insights.",
    sl: "Slide 32 dual columns of ✗ and ✓ items plus 'Real talk: data cleaning is where good data science is won or lost.'",
    ex: "This motivates L4's claim that ~80% of a data scientist's time is data preparation.",
    mt: "Believing modern models tolerate dirty data — the slide's point is exactly the opposite." });

  Q({ id: "L1-33-Q1", lec: L, pg: [33], tp: "Data cleaning", sb: "Quality issues", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which of these is NOT one of the six common data quality issues enumerated?",
    op: ["Missing values", "Wrong data types", "Duplicates", "Feature multicollinearity"],
    an: 3,
    at: "Multicollinearity is not a data quality issue listed on slide 33 (it appears in L5). The six: missing values, wrong data types, duplicates, inconsistent formats, outliers, invalid values.",
    sl: "Slide 33 grid: Missing Values; Wrong Data Types ('eight' instead of 8, '20 mins' instead of 20); Duplicates; Inconsistent Formats ('Year 1' vs 'yr 1'); Outliers (999 min commute, −2 hrs sleep); Invalid Values (age = 500, email without @).",
    ex: "Key insight: each issue type requires a different cleaning strategy — no one-size-fits-all solution.",
    mt: "Forgetting that 'inconsistent formats' and 'invalid values' are separate categories.",
    mr: "MT-2b" });

  Q({ id: "L1-34-Q1", lec: L, pg: [34], tp: "Data cleaning", sb: "Spotting issues", df: "medium", ty: "short", so: "lecture",
    pr: "In the sample survey rows (major, year, sleep_hours, commute_min, python_conf): CE, Year 2, 7, 30, 4 / engineering, yr 3, eight, 20 mins, 3 / Math, Year 2, −2, 999, 5 — identify four distinct issues visible in the data.",
    at: "Inconsistent category spelling ('CE' vs 'engineering' vs 'Math' — actually these differ, but 'engineering' vs pattern shows casing/format variance); text in a number field ('eight'); impossible values (−2 hours sleep, 999 min commute); unit text in number field ('20 mins'). The slide's 'Issues We Can Spot' also adds missing responses; 'What We'll Fix': standardize categories, convert types, handle outliers, deal with missing values.",
    sl: "Slide 34 shows survey_responses.csv sample rows and lists issues: inconsistent formats, text in number fields, impossible values, missing responses.",
    ex: "Real-world message: even with careful survey design, humans enter data inconsistently.",
    mt: "Treating 999 as 'just a large value' — it is a sentinel/impossible value requiring investigation." });

  Q({ id: "L1-35-Q1", lec: L, pg: [35], tp: "Data cleaning", sb: "Missing values", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which ordering matches four missing-value strategies (simple → sophisticated)?",
    op: [
      "Predictive imputation → mean imputation → constant fill → deletion",
      "Delete rows → fill constant → impute with statistics → predictive models",
      "Delete columns → fill mean → drop duplicates → model imputation",
      "Fill constant → delete rows → predictive models → statistics"
    ], an: 1,
    at: "1) Delete rows (simple, loses information, only if small %); 2) Fill constant (quick, may bias); 3) Impute with statistics (mean/median/mode — preserves shape, most common for numerical); 4) Predictive models (most sophisticated).",
    sl: "Slide 35 numbered list 1–4 with trade-offs.",
    ex: "Critical question on the slide: WHY is the data missing? Random vs systematic missingness affects your strategy — the seed for L4's MCAR/MAR/MNAR.",
    mt: "Assuming mean imputation is 'always safe' — it preserves shape imperfectly and can bias relationships (L4 shows distortions).",
    mr: null });

  Q({ id: "L1-36-Q1", lec: L, pg: [36], tp: "Data cleaning", sb: "Outliers", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statistical rules for outlier detection are given, and what is the key principle?",
    op: [
      "Z-score > 3 and IQR method (1.5×IQR); never blindly remove outliers — investigate first",
      "Z-score > 2 and range method; always remove outliers",
      "Tukey fence 2×IQR; cap all outliers at the mean",
      "Standard error > 1; delete as errors"
    ], an: 0,
    at: "Detection: visual inspection (box plots, scatter, histograms); statistical (Z-score > 3, IQR 1.5×IQR); domain knowledge. Principle: never blindly remove outliers — sometimes outliers are the most interesting data points!",
    sl: "Slide 36 HOW TO DETECT (visual, statistical, domain) vs WHAT TO DO (if error → fix/remove; if genuine → keep or cap; consider robust methods: median instead of mean, robust regression).",
    ex: "The 999-minute commute and −2 hours sleep examples return from slide 33; domain knowledge decides which is an error.",
    mt: "Deleting outliers mechanically — the slide explicitly warns against it." });

  
  Q({ id: "L1-38-Q1", lec: L, pg: [38], tp: "Preprocessing", sb: "Normalization/standardization", df: "medium", ty: "calc", so: "lecture",
    pr: "Write the formulas for min-max normalization and z-score standardization, and give one use case for each. If x = 30 with min = 10, max = 50: compute the normalized value; if mean = 20, std = 5: compute the z-score.",
    at: "Min-max: x_norm = (x − min)/(max − min) = (30−10)/(50−10) = 20/40 = 0.5. Z-score: z = (x − mean)/std = (30−20)/5 = 2.",
    sl: "Slide 38 formulas: x_norm = (x − min)/(max − min); z = (x − mean)/std. Use min-max when a bounded range is needed and there are no extreme outliers; use z-score when comparing across features or when algorithms require it.",
    ex: "Why normalize: many ML algorithms (neural networks, KNN, SVM) are sensitive to feature scales — without normalization, features with larger ranges dominate unfairly. 'This concept appears frequently in ML courses and interviews.'",
    mt: "Confusing the two formulas (subtracting min vs mean); forgetting min-max bounds to [0,1] on the training range only.",
    mr: null });

  Q({ id: "L1-38-Q2", lec: L, pg: [38], tp: "Preprocessing", sb: "When to scale", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about normalization is correct?",
    op: [
      "Min-max normalization is preferred when extreme outliers are present",
      "Z-score standardization centers data at mean 0 with std 1 and suits comparing across features",
      "Scaling matters for tree-based models because splits use distances",
      "Normalization removes the need for data cleaning"
    ], an: 1,
    at: "Z-score: centers data with mean=0 and std=1; used when comparing across features / algorithms need it.",
    sl: "Slide 38: min-max scales to a fixed range (typically 0–1), used when a bounded range is needed and no extreme outliers; z-score used when comparing across features or algorithms need it.",
    ex: "Tree-based scale-insensitivity is L4 material ('When Scaling Doesn't Matter') — a useful contrast.",
    mt: "Recommending min-max with extreme outliers — outliers compress the rest of the data." });

  Q({ id: "L1-40-Q1", lec: L, pg: [40], tp: "EDA", sb: "Definition", df: "easy", ty: "short", so: "lecture",
    pr: "Define EDA as given and name its three activities.",
    at: "EDA is the process of examining data to understand its structure, patterns, anomalies, and relationships before formal modeling — 'detective work for data'. Three activities: Summarize (mean, median, mode, std, quartiles), Visualize (histograms, box plots, scatter plots), Question (what patterns exist? what's surprising? what needs more investigation?).",
    sl: "Slide 40 definition box + three panels.",
    ex: "EDA philosophy: let the data speak first; resist the urge to jump to conclusions before thoroughly exploring.",
    mt: "Describing EDA as 'making charts' — it is question-driven exploration including summary statistics." });

  Q({ id: "L1-41-Q1", lec: L, pg: [41], tp: "Descriptive stats", sb: "Center and spread", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pairing is correct?",
    op: [
      "Mean — robust to outliers; Median — sensitive to outliers",
      "Mode — works only for numerical data",
      "Median — robust to outliers; IQR = Q3 − Q1 is robust",
      "Range — robust to outliers"
    ], an: 2,
    at: "Median is robust to outliers; IQR = Q3 − Q1 (middle 50%) is robust. Mean is sensitive to outliers; range is affected by outliers; mode works for categorical data.",
    sl: "Slide 41: Center: Mean (sum/count, sensitive), Median (middle, robust), Mode (most frequent, works for categorical). Spread: Range (max−min, affected by outliers), Standard deviation (average distance from mean), IQR (Q3−Q1, robust).",
    ex: "Pro tip: always report both center and spread — a mean without SD tells half the story.",
    mt: "Saying the range is robust — it uses the two most extreme values." });

  
  Q({ id: "L1-43-Q1", lec: L, pg: [43], tp: "Distributions", sb: "Skewness", df: "medium", ty: "mcq", so: "lecture",
    pr: "For a right-skewed distribution, which statement is correct?",
    op: [
      "Long tail to the left; mean < median",
      "Long tail to the right; mean > median; examples: income, home prices",
      "Symmetric around mean; mean ≈ median",
      "Bimodal; mean = median"
    ], an: 1,
    at: "Right-skewed: long tail to the right, mean > median (income, home prices). Left-skewed: long tail to the left, mean < median (age at retirement). Normal: symmetric, mean ≈ median.",
    sl: "Slide 43 three panels: Normal (heights, test scores), Right-Skewed (income, home prices), Left-Skewed (age at retirement).",
    ex: "Why it matters: the shape determines which statistics are appropriate — skewed data often needs median over mean.",
    mt: "Reversing the inequality: for right skew, the long tail of high values pulls the mean up (mean > median)." });

  Q({ id: "L1-44-Q1", lec: L, pg: [44], tp: "Correlation", sb: "Interpretation", df: "easy", ty: "short", so: "lecture",
    pr: "State the range and interpretation of correlation and the CRITICAL warning.",
    at: "r ranges from −1 (perfect negative) to +1 (perfect positive); 0 indicates no linear correlation. Warning: correlation ≠ causation — ice cream sales and drowning deaths are correlated, but ice cream doesn't cause drowning.",
    sl: "Slide 44 definition + three panels (+1: study hours → grades; 0: shoe size → GPA; −1: partying → grades) + the ice-cream/drowning warning.",
    ex: "r measures the strength and DIRECTION of the LINEAR relationship.",
    mt: "Saying r = 0 proves independence — it only rules out linear association.",
    mr: null });

  Q({ id: "L1-45-Q1", lec: L, pg: [45], tp: "Visualization", sb: "Value of charts", df: "easy", ty: "short", so: "lecture",
    pr: "Why is visualization essential in EDA? Name its three main purposes and what each reveals.",
    at: "'The greatest value of a picture is when it forces us to notice what we never expected to see.' — John Tukey. Values: Reveal patterns (trends, clusters, relationships), Spot problems (outliers, errors, data quality issues), Communicate (convey insights instantly).",
    sl: "Tukey: 'The greatest value of a picture is when it forces us to notice what we never expected to see.' Purposes: reveal patterns, spot problems, communicate insights.",
    ex: "Sets up Anscombe's quartet in L3 — statistics summarize, visualizations reveal.",
    mt: "Treating visualization as decoration rather than a discovery tool." });

  Q({ id: "L1-46-Q1", lec: L, pg: [46], tp: "Visualization", sb: "Chart selection", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which chart-to-purpose mapping is correct?",
    op: [
      "Histogram — relationship between two variables",
      "Scatter plot — distribution of one variable",
      "Box plot — distribution + outliers + comparison; bar chart — comparing categories",
      "Pie chart — trends over time"
    ], an: 2,
    at: "Histogram: distribution of one numerical variable. Box plot: distribution + outliers + comparison. Pie chart: parts of a whole (use sparingly!). Bar chart: comparing categories. Scatter: relationship between two variables. Line: trends over time.",
    sl: "Slide 46 six chart types with examples (sleep distribution; sleep by year level; device usage; students per major; commute vs study hours; responses over time).",
    ex: "Rule of thumb: choose based on the question you're answering, not what looks prettiest.",
    mt: "Using a pie chart for distributions with many categories — the slide says 'use sparingly'." });

  
  
  Q({ id: "L1-50-Q1", lec: L, pg: [50], tp: "Foundation models", sb: "Definition", df: "easy", ty: "short", so: "lecture",
    pr: "Define foundation model as and list the three properties shown.",
    at: "A foundation model is an AI system trained on massive amounts of data that can be adapted to many different tasks (examples: ChatGPT, Claude, DeepSeek). Properties: Pre-trained (learned from billions of text examples before you use it), General purpose (answer questions, write code, analyze data), Conversational (natural language prompts in dialogue format).",
    sl: "Slide 50 definition box + three panels + course note: DeepSeek as CTA.",
    ex: "The definition's key element is 'adapted to many different tasks' — generality from pre-training.",
    mt: "Calling any ML model a foundation model — the scale and adaptability are the criteria." });

  Q({ id: "L1-51-Q1", lec: L, pg: [51], tp: "Foundation models", sb: "Token generation", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the key insight about how LLMs generate responses?",
    op: [
      "They retrieve pre-written answers from a database",
      "They predict the next word/token based on everything that came before",
      "They solve equations symbolically before answering",
      "They copy the most similar training document"
    ], an: 1,
    at: "LLMs predict the next word based on everything that came before (token-by-token generation; role of probability; context shapes output; responses vary).",
    sl: "Slide 51 WHAT WE'LL OBSERVE: token-by-token generation, how context shapes output, the role of probability, why responses vary.",
    ex: "This explains both fluency and failure modes (hallucinations, math errors) covered on slide 54.",
    mt: "Believing LLMs compute arithmetic internally — they predict tokens (slide 54: 'LLMs predict words, not compute math')." });

  Q({ id: "L1-53-Q1", lec: L, pg: [53], tp: "Foundation models", sb: "Capabilities", df: "easy", ty: "short", so: "lecture",
    pr: "List the six capabilities of foundation models and the important caveat.",
    at: "Explain concepts; write code (generate, debug, explain Python/SQL); analyze data (interpret results, suggest visualizations, identify patterns); derive math (walk through formulas step by step); debug errors; brainstorm. Caveat: verify outputs and understand the underlying concepts.",
    sl: "Slide 53 six capability cards + 'Important' note.",
    ex: "Maps directly to the CTA usage patterns throughout the course (explain, code, verify).",
    mt: "Forgetting the caveat — capabilities come with the verification requirement." });

  Q({ id: "L1-54-Q1", lec: L, pg: [54], tp: "AI limitations", sb: "Failure modes", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which AI limitation is described as 'confident-sounding but completely false information, including fake citations and invented facts'?",
    op: ["Outdated knowledge", "Hallucinations", "Bias & stereotypes", "Math errors"], an: 1,
    at: "Hallucinations. Math errors: LLMs predict words, not compute math. Outdated knowledge: training data has a cutoff date. Bias & stereotypes: AI can reflect biases from training data.",
    sl: "Slide 54 four limitation cards + 'The rule: Always verify AI outputs. Trust but verify — especially for facts, calculations, and code.'",
    ex: "Hallucinated citations are a classic academic hazard — verify every reference.",
    mt: "Confusing 'outdated knowledge' (cutoff dates) with hallucination (fabrication)." });

  
  
  
  
  
  
  
  
  
  
  
  })();
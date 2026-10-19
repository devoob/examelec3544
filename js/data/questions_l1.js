/* Question bank — Lecture 1 (pages 1–73).
   One or more questions for every page with testable content; extras on definition/example-heavy slides. */
(function () {
  var L = 1;

  Q({ id: "L1-4-Q1", lec: L, pg: [4], tp: "Course vision", sb: "Why now", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which statement best captures the three reasons the course gives for learning data science 'now'?",
    op: [
      "AI tools are now accessible to everyone; students are the first AI-native generation; traditional workflows are being rewritten",
      "GPUs are cheaper; datasets are bigger; cloud computing is faster",
      "Python replaced R; SQL is obsolete; Excel is deprecated",
      "AI has solved data science; only prompt writing remains"
    ], an: 0,
    at: "A convergence moment (accessible AI), first AI-native data scientists, and rewritten rules of the workflow.",
    sl: "Slide 4 lists three numbered points: (1) A Convergence Moment — powerful AI tools are accessible to everyone; (2) First Generation of AI-Native Data Scientists; (3) The Rules Are Being Rewritten — traditional workflows are transforming.",
    ex: "The course frames its purpose as preparing you to think critically about when and how to leverage AI tools effectively — not replacing fundamentals.",
    mt: "Confusing 'AI is accessible' with 'AI is always correct' — the course stresses critical judgment, not blind reliance." });

  Q({ id: "L1-5-Q1", lec: L, pg: [5], tp: "Job market", sb: "Skills and salaries", df: "easy", ty: "short", so: "lecture",
    pr: "According to the 2025 job-posting data on slide 5, name the top three skills with their percentages and state by how much NLP skill demand grew.",
    at: "Python 85%, Machine Learning 77%, SQL 59%; NLP skills grew from 5% → 19% (nearly quadrupled).",
    sl: "Slide 5 top skills (2025): Python 85%, Machine Learning 77%, SQL 59%, NLP 5% → 19%.",
    ex: "The slide's message: data science is evolving rapidly; those who combine strong fundamentals with AI fluency will thrive.",
    mt: "Swapping the percentages (77% is ML, 59% is SQL).",
    mr: null });

  Q({ id: "L1-5-Q2", lec: L, pg: [5], tp: "Job market", sb: "Emerging roles", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which pairing of a new role and its description is correct according to slide 5?",
    op: [
      "LLM Engineer — $123K–$224K",
      "MLOps Engineer — bridging tech and business",
      "AI Product Manager — model deployment lifecycle",
      "AI Engineer — building apps on foundation models (entry-level salary $152K, up $40K from 2024)"
    ], an: 3,
    at: "AI Engineer — building apps on foundation models; entry-level salary $152K, up $40K from 2024.",
    sl: "Slide 5: LLM Engineer $123K–$224K; AI Engineer — building apps on foundation models, $152K entry-level; MLOps Engineer — model deployment lifecycle; AI Product Manager — bridging tech and business.",
    ex: "Also noted: experience requirements are increasing — employers want fewer, more capable practitioners.",
    mt: "Mixing up the roles' descriptions; note AI Engineer is the one described as 'building apps on foundation models'." });

  Q({ id: "L1-6-Q1", lec: L, pg: [6], tp: "Course vision", sb: "Doer vs director", df: "medium", ty: "short", so: "lecture",
    pr: "Describe the shift from 'THE OLD MODEL' to 'THE NEW MODEL' on slide 6, including the old and new sources of value.",
    at: "Old: Value = ability to produce (write code from scratch, memorize syntax/formulas, execute procedures manually, speed of production). New: Value = ability to direct and evaluate (know when AI is wrong, understand why methods work, ask the right questions, quality of judgment).",
    sl: "Slide 6 contrasts four old activities with four new ones: from writing code to knowing when AI is wrong; from memorizing to understanding why; from executing manually to asking the right questions; from speed to judgment.",
    ex: "Course formula: Strong fundamentals + AI fluency + critical judgment = irreplaceable professional value.",
    mt: "Reducing the shift to 'AI writes the code' — the point is the value shifts to directing, evaluating, and ensuring correctness." });

  Q({ id: "L1-7-Q1", lec: L, pg: [7], tp: "Course logistics", sb: "CTA", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the 'CTA' in this course, and what is its role?",
    op: [
      "Certified Teaching Assistant — a human grader",
      "Chief Teaching Assistant — ChatGPT/DeepSeek, available 24/7 for learning support, debugging, and exploration",
      "Course Technical Administrator — managing Moodle",
      "Critical Thinking Assessment — the midterm format"
    ], an: 1,
    at: "Chief Teaching Assistant — ChatGPT/DeepSeek, available 24/7 for learning support, debugging, and exploration.",
    sl: "Slide 7: Instructor (Yang Liu), Human TAs (grading, project guidance, office hours), and the Chief Teaching Assistant = ChatGPT/DeepSeek.",
    ex: "The CTA is described as your always-available learning partner — use it to explain concepts, debug code, explore ideas.",
    mt: "Forgetting that CTA refers to an AI tool, not a human TA role." });

  Q({ id: "L1-9-Q1", lec: L, pg: [9], tp: "Course logistics", sb: "Grading", df: "easy", ty: "short", so: "lecture",
    pr: "List the grading breakdown percentages and the midterm format from slide 9.",
    at: "Attendance and participation 10%; Homework assignments (3–4) 35%; Midterm exam (in-class 1.5–2h, around reading week, closed-book) 25%; Group project (3 members) 30%. Late submissions penalized 10% per day; extensions with advance notice.",
    sl: "Slide 9 items with percentages: 10/35/25/30. Midterm: in-class 1.5–2h, around reading week, closed-book, tests foundational understanding.",
    ex: "Closed-book midterm ⇒ this revision site targets recall of definitions, formulas, and methods.",
    mt: "Swapping 35% (homework) and 30% (project)." });

  Q({ id: "L1-10-Q1", lec: L, pg: [10], tp: "Course vision", sb: "Success criteria", df: "easy", ty: "short", so: "lecture",
    pr: "What three YES-questions define success by the end of the course (slide 10)?",
    at: "1) Can I take a real-world problem and design a data science approach to solve it? 2) Can I use AI tools to accelerate my work while maintaining quality and accuracy? 3) Can I critically evaluate AI outputs and know when to trust or question them?",
    sl: "Slide 10 lists exactly these three questions.",
    ex: "They combine problem design, AI acceleration, and critical evaluation — the course's three pillars.",
    mt: "Mentioning only 'use AI tools' and omitting critical evaluation." });

  Q({ id: "L1-13-Q1", lec: L, pg: [13], tp: "Definitions", sb: "Data science", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which is the slide's definition of data science?",
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
    pr: "Match the field to its key distinction. Which mapping is correct per slide 15?",
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
    pr: "List the six stages of the data science workflow (slide 16) and its 'reality check' caveat.",
    at: "Question → Collect → Clean → Analyze → Model → Communicate. Reality check: the process is rarely linear — you often loop back as you discover new questions or data issues.",
    sl: "Slide 16 pipeline with icons: ❓ Question, 📥 Collect, 🧹 Clean, 📊 Analyze, 🔮 Model, 📢 Communicate.",
    ex: "The same pipeline reappears in L4 as 'Question → Collect → Clean → Analyze → Model → Communicate' across all domains.",
    mt: "Treating the workflow as strictly sequential — the slide explicitly says it is iterative." });

  Q({ id: "L1-17-Q1", lec: L, pg: [17], tp: "Data types", sb: "Categorical vs numerical", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which data-type mapping is correct according to slide 17?",
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

  Q({ id: "L1-20-Q1", lec: L, pg: [20], tp: "Survey design", sb: "Primary data", df: "easy", ty: "short", so: "lecture",
    pr: "Give the four advantages of creating your own survey (slide 20).",
    at: "Control (you decide questions and phrasing); Freshness (current data); Relevance (tailored to your research question); Ownership (full rights to use, share, publish).",
    sl: "Slide 20 four labeled boxes: CONTROL, FRESHNESS, RELEVANCE, OWNERSHIP.",
    ex: "Key insight: primary data collection is often the only way to answer novel research questions.",
    mt: "Confusing 'ownership' with 'copyright' of the tool rather than the data." });

  Q({ id: "L1-21-Q1", lec: L, pg: [21], tp: "Survey design", sb: "Tools", df: "easy", ty: "short", so: "lecture",
    pr: "Which survey tool does the lecture choose to use in class, and why? Also name the other three tools mentioned.",
    at: "Google Forms — free and powerful enough for most projects. Others: Microsoft Forms (free with Office 365), Qualtrics (advanced logic/branching, academic standard, HKU has access), Typeform (conversational UI, higher engagement).",
    sl: "Slide 21 four tools with descriptions; key insight: 'We'll use Google Forms today.'",
    ex: "Qualtrics is noted as the academic standard with HKU access — relevant if your project needs advanced branching.",
    mt: "Claiming Typeform is the academic standard — that is Qualtrics." });

  Q({ id: "L1-22-Q1", lec: L, pg: [22], tp: "Survey design", sb: "Question quality", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which practice does slide 22 WARN against (or require) in survey design?",
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
    pr: "Which of the following is SECONDARY data according to slide 27?",
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

  Q({ id: "L1-28-Q1", lec: L, pg: [28], tp: "Data collection", sb: "Dataset sources", df: "easy", ty: "short", so: "lecture",
    pr: "Name the six dataset sources on slide 28 and the pro tip about them.",
    at: "Kaggle (competitions/datasets/notebooks), UCI ML Repository (classic ML datasets), Google Dataset Search, Government Open Data (data.gov, census, health), Academic Repositories (Harvard Dataverse, Zenodo, figshare), Hugging Face (NLP/CV datasets). Pro tip: always check data licenses and documentation — understanding how data was collected is crucial for valid analysis.",
    sl: "Slide 28 lists the six sources in two rows of three plus the pro tip.",
    ex: "Reused in L4 'Where to Find Data' (adds HK Open Data, World Bank/WHO/NOAA, awesome-public-datasets).",
    mt: "Skipping the license/documentation warning — it is explicitly the 'pro tip'." });

  Q({ id: "L1-30-Q1", lec: L, pg: [30], tp: "Data types", sb: "Survey data", df: "easy", ty: "short", so: "lecture",
    pr: "For the collected survey data, give one example variable for each of the four types (slide 30).",
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
    pr: "State the 'Garbage In, Garbage Out' principle and give two consequences of NOT cleaning data versus two benefits of proper cleaning (slide 32).",
    at: "Principle: even the most sophisticated analysis or model produces misleading results if input data is flawed. Without cleaning: incorrect conclusions from outliers, models that fail on edge cases, misleading visualizations, biased predictions. With cleaning: reliable statistics, robust generalizable models, clear honest visualizations, trustworthy insights.",
    sl: "Slide 32 dual columns of ✗ and ✓ items plus 'Real talk: data cleaning is where good data science is won or lost.'",
    ex: "This motivates L4's claim that ~80% of a data scientist's time is data preparation.",
    mt: "Believing modern models tolerate dirty data — the slide's point is exactly the opposite." });

  Q({ id: "L1-33-Q1", lec: L, pg: [33], tp: "Data cleaning", sb: "Quality issues", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which of these is NOT one of the six common data quality issues enumerated on slide 33?",
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
    pr: "Which ordering matches slide 35's four missing-value strategies (simple → sophisticated)?",
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
    pr: "Which statistical rules for outlier detection are given on slide 36, and what is the key principle?",
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

  Q({ id: "L1-37-Q1", lec: L, pg: [37], tp: "AI collaboration", sb: "AI-assisted cleaning", df: "easy", ty: "mcq", so: "lecture",
    pr: "According to slide 37, which task still needs YOU when AI assists data cleaning?",
    op: [
      "Generating boilerplate cleaning code",
      "Deciding what counts as 'valid' data and domain-specific validation rules",
      "Suggesting multiple approaches",
      "Explaining what each step does"
    ], an: 1,
    at: "What still needs you: deciding what counts as 'valid' data, domain-specific validation rules, verifying whether the code works, ethical decisions about data handling.",
    sl: "Slide 37 two columns: WHAT AI DOES WELL (boilerplate code, suggests approaches, explains steps, handles common patterns) vs WHAT STILL NEEDS YOU (validity decisions, domain rules, verification, ethics).",
    ex: "Key takeaway: AI accelerates the mechanical work; you provide judgment and context.",
    mt: "Assuming AI explanations remove the need for verification." });

  Q({ id: "L1-38-Q1", lec: L, pg: [38], tp: "Preprocessing", sb: "Normalization/standardization", df: "medium", ty: "calc", so: "lecture",
    pr: "Write the formulas for min-max normalization and z-score standardization, and give one use case for each. If x = 30 with min = 10, max = 50: compute the normalized value; if mean = 20, std = 5: compute the z-score.",
    at: "Min-max: x_norm = (x − min)/(max − min) = (30−10)/(50−10) = 20/40 = 0.5. Z-score: z = (x − mean)/std = (30−20)/5 = 2.",
    sl: "Slide 38 formulas: x_norm = (x − min)/(max − min); z = (x − mean)/std. Use min-max when a bounded range is needed and there are no extreme outliers; use z-score when comparing across features or when algorithms require it.",
    ex: "Why normalize: many ML algorithms (neural networks, KNN, SVM) are sensitive to feature scales — without normalization, features with larger ranges dominate unfairly. 'This concept appears frequently in ML courses and interviews.'",
    mt: "Confusing the two formulas (subtracting min vs mean); forgetting min-max bounds to [0,1] on the training range only.",
    mr: null });

  Q({ id: "L1-38-Q2", lec: L, pg: [38], tp: "Preprocessing", sb: "When to scale", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about normalization is correct per slide 38?",
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
    pr: "Define EDA as given on slide 40 and name its three activities.",
    at: "EDA is the process of examining data to understand its structure, patterns, anomalies, and relationships before formal modeling — 'detective work for data'. Three activities: Summarize (mean, median, mode, std, quartiles), Visualize (histograms, box plots, scatter plots), Question (what patterns exist? what's surprising? what needs more investigation?).",
    sl: "Slide 40 definition box + three panels.",
    ex: "EDA philosophy: let the data speak first; resist the urge to jump to conclusions before thoroughly exploring.",
    mt: "Describing EDA as 'making charts' — it is question-driven exploration including summary statistics." });

  Q({ id: "L1-41-Q1", lec: L, pg: [41], tp: "Descriptive stats", sb: "Center and spread", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pairing is correct on slide 41?",
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

  Q({ id: "L1-42-Q1", lec: L, pg: [42], tp: "Pandas", sb: "Describe", df: "easy", ty: "short", so: "lecture",
    pr: "Which pandas calls does slide 42 use for summary stats, average sleep, and major distribution?",
    at: "df.describe() for summary statistics; df['sleep_hours'].mean() for average sleep; df['major'].value_counts() for the major distribution.",
    sl: "Slide 42 code block exactly: df.describe(), df['sleep_hours'].mean(), df['major'].value_counts().",
    ex: "'WATCH FOR: how do YOUR stats compare to what you expected? Any surprises in the class data?'",
    mt: "Using df.mean() on the whole frame instead of the specific column." });

  Q({ id: "L1-43-Q1", lec: L, pg: [43], tp: "Distributions", sb: "Skewness", df: "medium", ty: "mcq", so: "lecture",
    pr: "For a right-skewed distribution, which statement is correct per slide 43?",
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
    pr: "State the range and interpretation of correlation and the CRITICAL warning on slide 44.",
    at: "r ranges from −1 (perfect negative) to +1 (perfect positive); 0 indicates no linear correlation. Warning: correlation ≠ causation — ice cream sales and drowning deaths are correlated, but ice cream doesn't cause drowning.",
    sl: "Slide 44 definition + three panels (+1: study hours → grades; 0: shoe size → GPA; −1: partying → grades) + the ice-cream/drowning warning.",
    ex: "r measures the strength and DIRECTION of the LINEAR relationship.",
    mt: "Saying r = 0 proves independence — it only rules out linear association.",
    mr: null });

  Q({ id: "L1-45-Q1", lec: L, pg: [45], tp: "Visualization", sb: "Value of charts", df: "easy", ty: "short", so: "lecture",
    pr: "Quote John Tukey's statement on slide 45 and list the three values of visualization given.",
    at: "'The greatest value of a picture is when it forces us to notice what we never expected to see.' — John Tukey. Values: Reveal patterns (trends, clusters, relationships), Spot problems (outliers, errors, data quality issues), Communicate (convey insights instantly).",
    sl: "Slide 45 quote + three panels.",
    ex: "Sets up Anscombe's quartet in L3 — statistics summarize, visualizations reveal.",
    mt: "Treating visualization as decoration rather than a discovery tool." });

  Q({ id: "L1-46-Q1", lec: L, pg: [46], tp: "Visualization", sb: "Chart selection", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which chart-to-purpose mapping is correct per slide 46?",
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

  Q({ id: "L1-47-Q1", lec: L, pg: [47], tp: "Visualization", sb: "Survey charts", df: "easy", ty: "short", so: "lecture",
    pr: "List the four charts created from the survey data on slide 47.",
    at: "Histogram of sleep hours distribution; bar chart of majors represented; box plot comparing sleep by year level; scatter plot exploring relationships. (Demo in Colab with matplotlib/seaborn.)",
    sl: "Slide 47 CHARTS WE'LL CREATE list + discussion questions (patterns? surprises? additional charts?).",
    ex: "Uses the actual class data — the L1 hands-on workflow.",
    mt: "Forgetting the scatter plot or box plot in the list." });

  Q({ id: "L1-48-Q1", lec: L, pg: [48], tp: "AI collaboration", sb: "Text analysis", df: "medium", ty: "mcq", so: "lecture",
    pr: "Contrast the traditional and AI-assisted approaches to analyzing 100+ free-text responses (slide 48).",
    op: [
      "Traditional: manual coding, word frequency, keyword matching (slow, subjective, misses nuance). AI: automatic theme extraction, sentiment analysis, semantic understanding (fast, consistent, but requires validation)",
      "Traditional: sentiment analysis. AI: manual coding",
      "Both are equally fast but AI is always more accurate",
      "AI's categorization requires no validation if the model is large"
    ], an: 0,
    at: "Traditional: manual coding of themes, word frequency counts, keyword matching — time-consuming, subjective, misses nuance. AI: automatic theme extraction, sentiment analysis, semantic understanding — fast, consistent, but requires validation.",
    sl: "Slide 48 dual columns with trade-offs; critical thinking prompt: how do we know the AI's categorization is accurate? Always validate AI outputs.",
    ex: "Next step on the slide: analyze YOUR free-text responses with AI and critically evaluate results.",
    mt: "Trusting AI categorization without validation — explicitly warned." });

  Q({ id: "L1-50-Q1", lec: L, pg: [50], tp: "Foundation models", sb: "Definition", df: "easy", ty: "short", so: "lecture",
    pr: "Define foundation model as on slide 50 and list the three properties shown.",
    at: "A foundation model is an AI system trained on massive amounts of data that can be adapted to many different tasks (examples: ChatGPT, Claude, DeepSeek). Properties: Pre-trained (learned from billions of text examples before you use it), General purpose (answer questions, write code, analyze data), Conversational (natural language prompts in dialogue format).",
    sl: "Slide 50 definition box + three panels + course note: DeepSeek as CTA.",
    ex: "The definition's key element is 'adapted to many different tasks' — generality from pre-training.",
    mt: "Calling any ML model a foundation model — the scale and adaptability are the criteria." });

  Q({ id: "L1-51-Q1", lec: L, pg: [51], tp: "Foundation models", sb: "Token generation", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the key insight about how LLMs generate responses (slide 51)?",
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
    pr: "List the six capabilities of foundation models on slide 53 and the important caveat.",
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

  Q({ id: "L1-55-Q1", lec: L, pg: [55], tp: "Prompt engineering", sb: "Four principles", df: "medium", ty: "short", so: "lecture",
    pr: "State the four prompt engineering principles on slide 55.",
    at: "1) Be specific and clear (state format, length, scope); 2) Provide context (background, constraints, goals); 3) Iterate and refine (prompting is a conversation); 4) Verify and validate (check outputs, test code, you own the result).",
    sl: "Slide 55 four numbered principles + 'the quality of your output is directly proportional to the quality of your input.'",
    ex: "These four principles are reused in L4's structured-request demos.",
    mt: "Assuming a 'perfect' single prompt exists — principle 3 is iteration." });

  Q({ id: "L1-56-Q1", lec: L, pg: [56], tp: "Prompt engineering", sb: "Techniques", df: "medium", ty: "mcq", so: "lecture",
    pr: "Match the technique to its example. Which is correct?",
    op: [
      "Chain of thought — 'Act as a senior data scientist reviewing this code'",
      "Role prompting — 'Think through this step by step'",
      "Structured output — 'Respond in JSON format with fields for…'",
      "Role prompting — request specific formats for APIs"
    ], an: 2,
    at: "Structured output requests a specific format (e.g., JSON) — used for data processing, APIs, automation.",
    sl: "Slide 56: Chain of thought ('Think through this step by step before answering…' — math, logic, complex analysis); Role prompting ('Act as a senior data scientist…' — code review, explanations, feedback); Structured output ('Respond in JSON format…' — data processing, APIs, automation).",
    ex: "Pro tip: combine the techniques as needed for complex tasks.",
    mt: "Swapping chain-of-thought and role-prompting examples." });

  Q({ id: "L1-57-Q1", lec: L, pg: [57], tp: "Prompt engineering", sb: "DS-specific prompts", df: "medium", ty: "short", so: "lecture",
    pr: "Give the four data-science-specific prompt templates on slide 57 and what each must specify.",
    at: "For code: specify language, libraries, input/output formats, error handling. For analysis: describe data structure, analysis goal, insights sought. For debugging: include error message, what you've tried, expected vs actual behavior. For explanation: state your current understanding level and what confuses you.",
    sl: "Slide 57 four quadrants with example prompts ('Write Python code using pandas…'; 'I have a dataset with [columns]…'; 'I get this error: [error]. I expected [X] but got [Y]…'; 'I understand [A] but I'm confused about [B]…').",
    ex: "These patterns are described as your daily tools — save and adapt them.",
    mt: "Writing 'fix my code' without the error message or expected vs actual behavior." });

  Q({ id: "L1-59-Q1", lec: L, pg: [59], tp: "Prompt engineering", sb: "Iteration", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which sequence matches the iterative prompt refinement process on slide 59?",
    op: [
      "Add context → Basic prompt → Handle edge cases → Request format",
      "Basic prompt → Add context → Request format → Handle edge cases",
      "Request format → Basic prompt → Add context → Handle edge cases",
      "Basic prompt → Request format → Publish → Stop"
    ], an: 1,
    at: "STEP 1 Basic prompt → STEP 2 Add context → STEP 3 Request format → STEP 4 Handle edge cases.",
    sl: "Slide 59 four-step refinement arrow + key insight: prompting is a conversation, not a single query.",
    ex: "Each iteration improves the result — the pattern reappears in L2-L6 CTA demos.",
    mt: "Stopping after the first prompt; edge case handling is the final refinement step." });

  Q({ id: "L1-60-Q1", lec: L, pg: [60], tp: "AI ethics", sb: "Responsible use", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which is an explicit DON'T in AI ethics as presented on slide 60?",
    op: [
      "Use AI to understand concepts",
      "Submit AI output as your own work",
      "Consider who might be harmed",
      "Acknowledge AI assistance"
    ], an: 1,
    at: "Don'ts: submit AI output as your own work; accept AI outputs uncritically; hide your use of AI tools. Do's: use AI to understand concepts, consider harms, be transparent.",
    sl: "Slide 60 three columns: Academic Integrity, Bias Awareness, Transparency — each with ✓ and ✗ items. Simple rule: can you explain and defend every part of your work?",
    ex: "The transparency column requires acknowledging AI assistance — relevant to the course project grading.",
    mt: "Treating bias awareness as optional — it is one of the three ethical pillars." });

  Q({ id: "L1-61-Q1", lec: L, pg: [61], tp: "AI ethics", sb: "Best practices", df: "easy", ty: "short", so: "lecture",
    pr: "Give two DO's and two DON'Ts from slide 61.",
    at: "DO: use AI to understand concepts you're learning; ask for explanations of code or formulas; verify outputs against trusted sources; use AI to debug and learn from mistakes. DON'T: submit AI-generated work as your own; trust outputs without verification; use AI as a shortcut to avoid learning; hide or misrepresent AI usage.",
    sl: "Slide 61 DO ✓ / DON'T ✗ list.",
    ex: "'AI is a learning tool, not a replacement for learning. You are responsible for your own understanding.'",
    mt: "Skipping verification because the output 'looks right'." });

  Q({ id: "L1-62-Q1", lec: L, pg: [62], tp: "AI ethics", sb: "VERIFY framework", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does the VERIFY framework stand for (slide 62)?",
    op: [
      "Validate, Execute, Reason, Inspect, Fix, Yours",
      "Verify, Evaluate, Review, Inspect, Finalize, Yield",
      "Validate, Examine, Refine, Investigate, Find sources, Yield",
      "View, Edit, Run, Inspect, Fix, Yield"
    ], an: 0,
    at: "V Validate (check facts against reliable sources); E Execute (run code, test the solution); R Reason (does the logic make sense?); I Inspect (edge cases, potential errors); F Fix (iterate and improve); Y Yours (understand it well enough to explain and defend it).",
    sl: "Slide 62 six lettered rows with explanations.",
    ex: "Note: L2 presents an alternative VERIFY expansion (Validate, Examine, Refine, Investigate, Find Sources, Yield) — both appear in the slides; know both.",
    mt: "Mixing the L1 and L2 expansions — the exam may reference either; L1's is Validate/Execute/Reason/Inspect/Fix/Yours.",
    mr: null });

  Q({ id: "L1-63-Q1", lec: L, pg: [63], tp: "Summary", sb: "Foundation models", df: "medium", ty: "short", so: "lecture",
    pr: "Summarize the four 'Summary: Foundation Models' points on slide 63.",
    at: "1) Foundation models are powerful learning partners (pre-trained on massive data; explain, code, analyze, debug — but verify). 2) Prompt engineering is a learnable skill (be specific, provide context, iterate, verify; chain-of-thought, role prompting, structured output). 3) AI has real limitations (hallucinations, outdated knowledge, math errors, bias — trust but verify with VERIFY). 4) Responsible use is non-negotiable (use AI to learn, be transparent, own your work).",
    sl: "Slide 63 four summary blocks.",
    ex: "These four points consolidate the entire foundations half of Lecture 1.",
    mt: "Omitting the verification requirement in point 1." });

  Q({ id: "L1-65-Q1", lec: L, pg: [65], tp: "Summary", sb: "Takeaways", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which is one of the five key takeaways from slide 65?",
    op: [
      "Data cleaning is 20% of the work",
      "Data cleaning is 80% of the work — garbage in, garbage out",
      "Domain knowledge is unnecessary when using AI",
      "Verification is only needed for code"
    ], an: 1,
    at: "Data cleaning is 80% of the work — garbage in, garbage out; quality data enables quality insights.",
    sl: "Slide 65 five takeaways: 1) data science is a workflow (question → ... → insight); 2) domain knowledge is important (efficient survey design); 3) data cleaning is 80% of the work; 4) AI is your learning partner; 5) always VERIFY.",
    ex: "The 80% figure is reused in L4 Part 2 (professional data wrangling: '80% or even more').",
    mt: "Reversing the 80/20 figure." });

  Q({ id: "L1-66-Q1", lec: L, pg: [66], tp: "Course logistics", sb: "Assessments", df: "easy", ty: "short", so: "lecture",
    pr: "What are the weights of homework, project, and exams according to slide 66?",
    at: "Homework assignments 35% (weekly practice applying concepts, skills build progressively); Course project 30% (team project, end-to-end from question to presentation); Exams 25% (midterm tests foundations, no access to AI). Plus 10% attendance (active participation).",
    sl: "Slide 66 three cards + attendance note.",
    ex: "Midterm explicitly: foundational, no AI access — matches this revision site's purpose.",
    mt: "Ignoring the 'no access to AI' midterm condition when preparing (practice without CTA assistance)." });

  Q({ id: "L1-67-Q1", lec: L, pg: [67], tp: "Course logistics", sb: "CTA usage", df: "easy", ty: "short", so: "lecture",
    pr: "How should you use your CTA according to slide 67? Give four activities and the escalation path.",
    at: "Use the CTA to: explain concepts step-by-step; debug code with guidance; generate practice problems; review before submitting work. Escalation: start with your CTA for immediate help; escalate to human support (discussion forum, office hours) for deeper discussion.",
    sl: "Slide 67 HOW TO USE YOUR CTA list + resources panel (course materials, discussion forum, office hours).",
    ex: "'Always VERIFY — Validate, Execute, Reason, Inspect, Fix, make it Yours.'",
    mt: "Bypassing the CTA and always going straight to human support (or vice versa)." });

  Q({ id: "L1-68-Q1", lec: L, pg: [68], tp: "Course logistics", sb: "Assignment 0", df: "easy", ty: "short", so: "lecture",
    pr: "List the three tasks of Assignment 0 (slide 68).",
    at: "1) Set up your environment (Python and Jupyter, or Google Colab; run the test notebook). 2) Have a CTA conversation (ask the AI to explain a data science concept; practice prompting techniques). 3) Submit reflection (about setup experience and your AI conversation).",
    sl: "Slide 68 three numbered tasks; purpose: ensures everyone starts Lecture 2 with working tools and initial AI experience.",
    ex: "Due before the next class — logistic readiness check.",
    mt: "Treating the reflection as optional — it is task 3." });
})();
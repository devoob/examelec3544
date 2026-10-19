/* Extra MCQ bank — Lecture 1 (built for MCQ Sets; distinct angles from questions_l1.js). */
(function () {
  var L = 1;

  Q({ id: "L1-MCQ-01", lec: L, pg: [4], tp: "Course vision", sb: "Convergence", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which of the three reasons on slide 4 says traditional workflows are transforming?",
    op: ["A Convergence Moment", "First Generation of AI-Native Data Scientists", "The Rules Are Being Rewritten", "The Evidence Is Clear"],
    an: 2, at: "'The Rules Are Being Rewritten' — traditional workflows are transforming; those who adapt thoughtfully will thrive.",
    sl: "Slide 4 numbered reasons: (1) A Convergence Moment; (2) First Generation of AI-Native Data Scientists; (3) The Rules Are Being Rewritten.",
    ex: "The closing line: the course prepares you to think critically about when and how to leverage AI tools effectively.",
    mt: "Matching 'Rules Are Being Rewritten' to the convergence-moment item." });

  Q({ id: "L1-MCQ-02", lec: L, pg: [5], tp: "Job market", sb: "Roles", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which role is described as 'bridging tech and business' (slide 5)?",
    op: ["LLM Engineer", "AI Engineer", "MLOps Engineer", "AI Product Manager"],
    an: 3, at: "AI Product Manager — bridging tech and business.",
    sl: "Slide 5 roles: LLM Engineer (salary band), AI Engineer (building apps on foundation models), MLOps Engineer (model deployment lifecycle), AI Product Manager (bridging tech and business).",
    ex: "Also on the slide: employers want fewer, more capable practitioners; experience requirements are increasing.",
    mt: "Assigning 'deployment lifecycle' to the product manager — that's MLOps." });

  Q({ id: "L1-MCQ-03", lec: L, pg: [6], tp: "Course vision", sb: "Old vs new model", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the NEW model, value equals which of the following (slide 6)?",
    op: ["Ability to produce", "Ability to direct and evaluate", "Speed of production", "Memorizing syntax and formulas"],
    an: 1, at: "Value = ability to direct and evaluate (know when AI is wrong; understand why methods work; ask the right questions; quality of judgment).",
    sl: "Slide 6: OLD model = ability to produce (write code, memorize, execute manually, speed). NEW model = direct and evaluate.",
    ex: "Course formula: strong fundamentals + AI fluency + critical judgment = irreplaceable professional value.",
    mt: "Choosing 'speed of production' — that belongs to the old model." });

  Q({ id: "L1-MCQ-04", lec: L, pg: [9], tp: "Course logistics", sb: "Grading", df: "easy", ty: "mcq", so: "lecture",
    pr: "What percentage is the group project worth, and what is the group size (slide 9)?",
    op: ["25%, 3 members", "30%, 3 members per group", "35%, 3 members", "10%, 4 members"],
    an: 1, at: "30% — group project with 3 members per group.",
    sl: "Slide 9: attendance 10%; homework 35%; midterm 25%; project 30% (3 members per group).",
    ex: "Late submissions are penalized 10% per day; extensions need advance notice.",
    mt: "Confusing 35% (homework) with 30% (project)." });

  Q({ id: "L1-MCQ-05", lec: L, pg: [13], tp: "Definitions", sb: "Pillars", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which combination completes the data science definition 'domain expertise + ___ + ___'?",
    op: ["programming skills; statistical knowledge", "AI tools; big data", "SQL; machine learning", "visualization; reporting"],
    an: 0, at: "Domain expertise + programming skills + statistical knowledge.",
    sl: "Slide 13: 'extracting meaningful insights from data using a combination of domain expertise, programming skills, and statistical knowledge.'",
    ex: "The three pillars mirror the three panels: context, tools at scale, valid conclusions.",
    mt: "Inserting AI into the definition — the slide's definition has no AI term." });

  Q({ id: "L1-MCQ-06", lec: L, pg: [14], tp: "Definitions", sb: "Venn", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which circle of the Venn diagram is described by 'industry knowledge, business context' (slide 14)?",
    op: ["Mathematics and Statistics", "Computer Science", "Domain Expertise", "Data Engineering"],
    an: 2, at: "Domain Expertise — industry knowledge, business context.",
    sl: "Slide 14 circles: Math/Stats (probability, inference, modeling); CS (programming, algorithms, data structures); Domain Expertise (industry knowledge, business context).",
    ex: "Data science lives at the intersection — you need all three.",
    mt: "Assigning business context to computer science." });

  Q({ id: "L1-MCQ-07", lec: L, pg: [15], tp: "Definitions", sb: "Related fields", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which field's key distinction is 'mathematical foundations' (slide 15)?",
    op: ["Data Science", "Machine Learning", "Statistics", "Business Analytics"],
    an: 2, at: "Statistics — analyze and interpret data rigorously; mathematical foundations.",
    sl: "Slide 15: Data Science (end-to-end problem solving); ML (algorithms subset); Statistics (mathematical foundations); Data Engineering (infrastructure); Business Analytics (business strategy).",
    ex: "The fields overlap significantly — data scientists draw on all of them.",
    mt: "Giving 'mathematical foundations' to data science itself." });

  Q({ id: "L1-MCQ-08", lec: L, pg: [16], tp: "Workflow", sb: "Order", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which pipeline order matches slide 16?",
    op: ["Question → Collect → Clean → Analyze → Model → Communicate", "Collect → Question → Model → Clean → Analyze → Communicate", "Question → Clean → Collect → Model → Analyze → Communicate", "Collect → Clean → Analyze → Question → Model → Communicate"],
    an: 0, at: "Question → Collect → Clean → Analyze → Model → Communicate.",
    sl: "Slide 16 six-stage workflow; the process is rarely linear — you loop back as you discover new questions or data issues.",
    ex: "The same order is reused across domains in L4.",
    mt: "Putting Analyze after Model." });

  Q({ id: "L1-MCQ-09", lec: L, pg: [17], tp: "Data types", sb: "Types", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which variable is ORDINAL on slide 17?",
    op: ["Device type", "Ratings (1–5)", "GPA", "Comments"],
    an: 1, at: "Ratings (1–5) — ordered categories.",
    sl: "Slide 17: Categorical (major, device type, country); Ordinal (year in school, ratings 1–5); Numerical (sleep hours, age, GPA); Text (comments, goals).",
    ex: "Key insight: real datasets contain all types; each requires different approaches.",
    mt: "Classifying ratings as numerical — they are ordered categories." });

  Q({ id: "L1-MCQ-10", lec: L, pg: [21], tp: "Survey design", sb: "Tools", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which survey tool is described as having 'advanced logic and branching' and being the academic standard with HKU access (slide 21)?",
    op: ["Google Forms", "Microsoft Forms", "Qualtrics", "Typeform"],
    an: 2, at: "Qualtrics — advanced logic and branching; academic standard; HKU has access.",
    sl: "Slide 21: Google Forms (free, Sheets integration); Microsoft Forms (Office 365); Qualtrics (advanced logic/branching, academic standard); Typeform (conversational UI).",
    ex: "The lecture uses Google Forms in class (free and powerful enough for most projects).",
    mt: "Matching Qualtrics' description to Typeform." });

  Q({ id: "L1-MCQ-11", lec: L, pg: [22], tp: "Survey design", sb: "Warnings", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the explicit WARNING on slide 22?",
    op: ["Poorly designed surveys = unreliable data that can't be fixed later", "Surveys should take at least 30 minutes", "Never pilot a survey", "Jargon makes surveys more professional"],
    an: 0, at: "Poorly designed surveys = unreliable data that can't be fixed later.",
    sl: "Slide 22 warning box; principles include clear language, one concept per question, logical flow, 5–10 minutes, pilot first.",
    ex: "Relates to L1's garbage-in-garbage-out theme.",
    mt: "Minimizing survey design — errors there are irreversible." });

  Q({ id: "L1-MCQ-12", lec: L, pg: [23], tp: "Survey design", sb: "Question types", df: "medium", ty: "mcq", so: "lecture",
    pr: "A multiple-choice question about 'device type' produces which data type (slide 23)?",
    op: ["Numerical", "Ordinal", "Categorical", "Text"],
    an: 2, at: "Categorical — distinct groups, no order.",
    sl: "Slide 23: MULTIPLE CHOICE → Categorical; LINEAR SCALE → Ordinal; NUMBER INPUT → Numerical; PARAGRAPH → Text.",
    ex: "Think top-down: choose question types from how you plan to analyze the data.",
    mt: "Treating yes/no or device-type responses as ordinal." });

  Q({ id: "L1-MCQ-13", lec: L, pg: [27], tp: "Data collection", sb: "APIs", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which collection method is described as 'programmatic access — Twitter, weather services, financial data providers' (slide 27)?",
    op: ["Primary collection", "Secondary datasets", "APIs", "Web scraping"],
    an: 2, at: "APIs — real-time, structured programmatic access.",
    sl: "Slide 27: API examples (Twitter, weather, financial data). Web scraping = extracting from websites, requires ethical care.",
    ex: "Secondary = existing datasets (government, research, Kaggle/UCI).",
    mt: "Confusing APIs with web scraping." });

  Q({ id: "L1-MCQ-14", lec: L, pg: [28], tp: "Data collection", sb: "Sources", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which source is described as 'classic datasets for machine learning research' (slide 28)?",
    op: ["Kaggle", "UCI ML Repository", "Hugging Face", "Harvard Dataverse"],
    an: 1, at: "UCI ML Repository — classic datasets for ML research.",
    sl: "Slide 28: Kaggle (competitions/datasets/notebooks); UCI (classic ML datasets); Google Dataset Search; Government Open Data; Academic repositories (Harvard Dataverse, Zenodo, figshare); Hugging Face (NLP/CV datasets).",
    ex: "Pro tip: always check licenses and documentation.",
    mt: "Attributing 'classic datasets' to Kaggle." });

  Q({ id: "L1-MCQ-15", lec: L, pg: [31], tp: "Data formats", sb: "JSON", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which format is the 'API standard' and good for nested, hierarchical data (slide 31)?",
    op: ["CSV", "JSON", "Excel", "Parquet"],
    an: 1, at: "JSON — JavaScript Object Notation; nested/hierarchical; API standard; human-readable.",
    sl: "Slide 31: CSV (simple tabular, universal); JSON (nested, API standard); Excel (sheets, formulas, business); Parquet (columnar, compressed, fast queries).",
    ex: "Pandas loads any of them: read_csv(), read_json(), read_excel(), read_parquet().",
    mt: "Choosing Parquet for nested structures — it is columnar/tabular." });

  Q({ id: "L1-MCQ-16", lec: L, pg: [32], tp: "Data cleaning", sb: "GIGO", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which is listed under 'WITH PROPER CLEANING' (slide 32)?",
    op: ["Incorrect conclusions from outliers", "Models that fail on edge cases", "Robust, generalizable models", "Visualizations that mislead"],
    an: 2, at: "Robust, generalizable models (with cleaning); also reliable statistical summaries, clear visualizations, trustworthy insights.",
    sl: "Slide 32 dual columns: without cleaning = bad outcomes; with cleaning = the good counterparts.",
    ex: "Garbage in, garbage out: even sophisticated models mislead on flawed input.",
    mt: "Mixing up which items belong to the without-cleaning column." });

  Q({ id: "L1-MCQ-17", lec: L, pg: [33], tp: "Data cleaning", sb: "Quality issues", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which example is given for OUTLIERS on slide 33?",
    op: ["'eight' instead of 8", "'Year 1' vs 'yr 1'", "999 minute commute, −2 hours sleep", "Age = 500, email without @"],
    an: 2, at: "999 minute commute, −2 hours sleep — errors or genuine extremes?",
    sl: "Slide 33: wrong types ('eight'); inconsistent formats ('Year 1' vs 'yr 1'); outliers (999 min, −2 hrs); invalid values (age 500, email without @).",
    ex: "Each issue type needs a different strategy — no one-size-fits-all.",
    mt: "Assigning age = 500 to outliers — that is an invalid value; outliers are plausible-but-extreme numbers." });

  Q({ id: "L1-MCQ-18", lec: L, pg: [35], tp: "Data cleaning", sb: "Missing strategies", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which missing-value strategy is described as 'preserves distribution shape; most common approach for numerical data' (slide 35)?",
    op: ["Delete rows", "Fill with a constant", "Impute with statistics (mean, median, mode)", "Predictive models"],
    an: 2, at: "Impute with statistics — preserves distribution shape; most common for numerical data.",
    sl: "Slide 35 strategies: delete (loses information), constant (quick but may bias), statistical (most common), predictive (most sophisticated).",
    ex: "Critical question: why is the data missing? Random vs systematic changes the strategy.",
    mt: "Calling constant fills 'bias-free' — the slide warns they may introduce bias." });

  Q({ id: "L1-MCQ-19", lec: L, pg: [36], tp: "Data cleaning", sb: "Outlier detection", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which two statistical rules for outlier detection are given on slide 36?",
    op: ["Z-score > 3 and IQR method (1.5×IQR)", "Z-score > 2 and range method", "Tukey fence 2×IQR", "Standard error > 1"],
    an: 0, at: "Z-score > 3; IQR (1.5×IQR).",
    sl: "Slide 36 HOW TO DETECT: visual (box/scatter/histogram), statistical (Z-score > 3, 1.5×IQR), domain knowledge.",
    ex: "What to do: error → fix/remove; genuine → keep or cap; consider robust methods.",
    mt: "Using Z-score > 2 as the slide's threshold." });

  Q({ id: "L1-MCQ-20", lec: L, pg: [37], tp: "AI collaboration", sb: "Division of labor", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which item is listed under 'WHAT STILL NEEDS YOU' for data cleaning (slide 37)?",
    op: ["Generating boilerplate cleaning code", "Suggesting multiple approaches", "Domain-specific validation rules", "Explaining what each step does"],
    an: 2, at: "Domain-specific validation rules — plus deciding what counts as valid, verifying the code works, and ethical decisions.",
    sl: "Slide 37: AI does boilerplate/suggestions/explanations/common patterns; humans own validity, domain rules, verification, ethics.",
    ex: "Key takeaway: AI accelerates the mechanical work; you provide judgment and context.",
    mt: "Crediting 'explaining what each step does' to humans — the slide puts it in AI's column." });

  Q({ id: "L1-MCQ-21", lec: L, pg: [38], tp: "Preprocessing", sb: "Normalization", df: "medium", ty: "mcq", so: "lecture",
    pr: "When is min-max normalization preferred over z-score standardization (slide 38)?",
    op: ["When extreme outliers are present", "When a bounded range is needed and there are no extreme outliers", "When comparing across features with different units", "When the algorithm requires mean 0 and std 1"],
    an: 1, at: "Min-max: when a bounded range is needed and there are no extreme outliers (outliers compress the rest).",
    sl: "Slide 38: min-max scales to [0,1]-style ranges; z-score centers at 0, scales by std — used for cross-feature comparison/algorithms that need it.",
    ex: "Many ML algorithms (NN, KNN, SVM) are scale-sensitive; unscaled features dominate unfairly.",
    mt: "Choosing min-max with extreme outliers." });

  Q({ id: "L1-MCQ-22", lec: L, pg: [40], tp: "EDA", sb: "Definition", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which phrase describes EDA on slide 40?",
    op: ["Formal modeling before exploration", "'Detective work for data' — understanding structure, patterns, anomalies, relationships before modeling", "A one-time report", "Hypothesis testing"],
    an: 1, at: "EDA is detective work for data: examine structure, patterns, anomalies, relationships before formal modeling.",
    sl: "Slide 40: summarize, visualize, question; let the data speak first.",
    ex: "Resist jumping to conclusions before thoroughly exploring.",
    mt: "Conflating EDA with modeling." });

  Q({ id: "L1-MCQ-23", lec: L, pg: [41], tp: "Descriptive stats", sb: "Center/spread", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statistic is described as 'works for categorical data' (slide 41)?",
    op: ["Mean", "Median", "Mode", "Standard deviation"],
    an: 2, at: "Mode — most frequent value; works for categorical data.",
    sl: "Slide 41: Mean (sensitive to outliers); Median (robust); Mode (categorical); Range (affected by outliers); SD (average distance from mean); IQR (robust).",
    ex: "Always report both center and spread.",
    mt: "Assuming the median works for categorical data — it requires order." });

  Q({ id: "L1-MCQ-24", lec: L, pg: [43], tp: "Distributions", sb: "Skewness", df: "medium", ty: "mcq", so: "lecture",
    pr: "For a LEFT-skewed distribution, which is true (slide 43)?",
    op: ["Long tail to the right; mean > median", "Long tail to the left; mean < median", "Symmetric; mean ≈ median", "Long tail to the left; mean > median"],
    an: 1, at: "Left-skewed: long tail to the left; mean < median (example: age at retirement).",
    sl: "Slide 43: Normal (symmetric, mean ≈ median); Right-skewed (tail right, mean > median — income); Left-skewed (tail left, mean < median).",
    ex: "Skewed data often needs median over mean.",
    mt: "Reversing the mean/median inequality for left skew." });

  Q({ id: "L1-MCQ-25", lec: L, pg: [44], tp: "Correlation", sb: "Numeric claim", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which r-value indicates a perfect negative linear relationship (slide 44)?",
    op: ["r = 0", "r = −1", "r = +1", "r = −0.5"],
    an: 1, at: "r = −1: perfect negative correlation (as X increases, Y decreases).",
    sl: "Slide 44 range: −1 perfect negative; 0 no linear correlation; +1 perfect positive.",
    ex: "Warning: correlation ≠ causation.",
    mt: "Choosing r = 0 for a negative relationship." });

  Q({ id: "L1-MCQ-26", lec: L, pg: [46], tp: "Visualization", sb: "Chart choice", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which chart is recommended for 'distribution + outliers + comparison' (slide 46)?",
    op: ["Histogram", "Box plot", "Pie chart", "Line chart"],
    an: 1, at: "Box plot — distribution + outliers + comparison (e.g., sleep by year level).",
    sl: "Slide 46: histogram (one-variable distribution); box plot (distribution+outliers+comparison); pie (parts of whole — sparingly); bar (categories); scatter (relationship); line (trends over time).",
    ex: "Choose based on the question, not what looks prettiest.",
    mt: "Using a histogram to compare groups." });

  Q({ id: "L1-MCQ-27", lec: L, pg: [48], tp: "AI collaboration", sb: "Text analysis", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which disadvantage is attributed to the TRADITIONAL approach to analyzing free-text responses (slide 48)?",
    op: ["Fast but inconsistent", "Time-consuming, subjective, misses nuance", "Requires no validation", "Cannot count words"],
    an: 1, at: "Traditional (manual coding, word counts, keyword matching): time-consuming, subjective, misses nuance.",
    sl: "Slide 48: AI-assisted = automatic theme extraction, sentiment, semantic understanding — fast, consistent, but requires validation.",
    ex: "Critical thinking: how do we know the AI's categorization is accurate? Always validate.",
    mt: "Flipping the trade-offs between traditional and AI approaches." });

  Q({ id: "L1-MCQ-28", lec: L, pg: [50], tp: "Foundation models", sb: "Definition", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which property of foundation models is 'learned from billions of text examples before you use it' (slide 50)?",
    op: ["Pre-trained", "General purpose", "Conversational", "Deterministic"],
    an: 0, at: "Pre-trained — learned from massive data before you use it.",
    sl: "Slide 50: pre-trained; general purpose (answer questions, write code, analyze data); conversational (dialogue from natural-language prompts).",
    ex: "Examples: ChatGPT, Claude, DeepSeek.",
    mt: "Assigning 'pre-trained' to generality." });

  Q({ id: "L1-MCQ-29", lec: L, pg: [51], tp: "Foundation models", sb: "Token generation", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which of these is NOT among the observations of the 'watch an LLM think' demo (slide 51)?",
    op: ["Token-by-token generation", "How context shapes output", "The role of probability", "Why the model's weights change during chat"],
    an: 3, at: "Weights do not change during a chat. Observed: token-by-token generation, context shaping, probability's role, why responses vary.",
    sl: "Slide 51 four observation bullets.",
    ex: "Key insight: LLMs predict the next word based on everything that came before.",
    mt: "Believing the model learns/updates during a conversation." });

  Q({ id: "L1-MCQ-30", lec: L, pg: [53], tp: "Foundation models", sb: "Capabilities", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which capability is described as 'walk through statistical formulas and mathematical proofs step by step' (slide 53)?",
    op: ["Explain concepts", "Write code", "Derive math", "Debug errors"],
    an: 2, at: "Derive math — step-by-step walks through formulas and proofs.",
    sl: "Slide 53: explain concepts; write code; analyze data; derive math; debug errors; brainstorm. Important: verify outputs and understand underlying concepts.",
    ex: "Math derivation by LLMs is probabilistic text — verify carefully (slide 54: math errors).",
    mt: "Choosing 'debug errors' for the derivation capability." });

  Q({ id: "L1-MCQ-31", lec: L, pg: [54], tp: "AI limitations", sb: "Outdated knowledge", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which limitation is explained as 'training data has a cutoff date — AI may not know recent events, updated APIs, or new research' (slide 54)?",
    op: ["Hallucinations", "Math errors", "Outdated knowledge", "Bias & stereotypes"],
    an: 2, at: "Outdated knowledge — training-data cutoff date.",
    sl: "Slide 54 four limitations: hallucinations (fabrication, fake citations); math errors (predict words, not compute); outdated knowledge (cutoff); bias & stereotypes.",
    ex: "The rule: always verify AI outputs — especially facts, calculations, code.",
    mt: "Confusing outdated knowledge with hallucination." });

  Q({ id: "L1-MCQ-32", lec: L, pg: [55], tp: "Prompt engineering", sb: "Principles", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which principle says 'first responses are starting points; follow up, ask for clarification, request changes' (slide 55)?",
    op: ["Be specific and clear", "Provide context", "Iterate and refine", "Verify and validate"],
    an: 2, at: "Iterate and refine — prompting is a conversation.",
    sl: "Slide 55 four principles: specific/clear; context; iterate/refine; verify/validate.",
    ex: "Quality of output ∝ quality of input.",
    mt: "Mapping follow-up questioning to 'provide context'." });

  Q({ id: "L1-MCQ-33", lec: L, pg: [56], tp: "Prompt engineering", sb: "Techniques", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which technique is recommended 'when: math, logic, complex analysis' (slide 56)?",
    op: ["Chain of thought", "Role prompting", "Structured output", "Few-shot examples"],
    an: 0, at: "Chain of thought — 'think through this step by step before answering'; for math, logic, complex analysis.",
    sl: "Slide 56: chain of thought (math/logic/analysis); role prompting (code review/explanations/feedback); structured output (data processing/APIs/automation).",
    ex: "Combine techniques as needed for complex tasks.",
    mt: "Assigning chain-of-thought to code review." });

  Q({ id: "L1-MCQ-34", lec: L, pg: [57], tp: "Prompt engineering", sb: "Debug template", df: "medium", ty: "mcq", so: "lecture",
    pr: "Per slide 57, what must a debugging prompt include?",
    op: ["Only the error message", "Error message, what you've tried, and expected vs. actual behavior", "The full repository", "Only the expected output"],
    an: 1, at: "Error message + what you've tried + expected vs actual behavior.",
    sl: "Slide 57 debugging template: 'I get this error: [error]. I expected [X] but got [Y]. I've already tried [Z]…'",
    ex: "These patterns are your daily tools — save and adapt them.",
    mt: "Sending only the error message without context." });

  Q({ id: "L1-MCQ-35", lec: L, pg: [59], tp: "Prompt engineering", sb: "Iteration order", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is STEP 3 of the iterative refinement process (slide 59)?",
    op: ["Basic prompt", "Add context", "Request format", "Handle edge cases"],
    an: 2, at: "Request format — after basic prompt and adding context, request a specific format, then handle edge cases.",
    sl: "Slide 59: STEP1 basic → STEP2 add context → STEP3 request format → STEP4 handle edge cases.",
    ex: "Prompting is a conversation, not a single query.",
    mt: "Putting 'handle edge cases' before 'request format'." });

  Q({ id: "L1-MCQ-36", lec: L, pg: [60], tp: "AI ethics", sb: "Transparency", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which transparency DO is listed on slide 60?",
    op: ["Acknowledge AI assistance", "Submit AI output as your own", "Hide your use of AI tools", "Accept outputs uncritically"],
    an: 0, at: "Acknowledge AI assistance — be honest about how AI contributed to your work.",
    sl: "Slide 60 transparency column: ✓ acknowledge AI assistance; ✗ hide your use of AI tools.",
    ex: "Simple rule: can you explain and defend every part of your work?",
    mt: "Choosing a ✗ item as a DO." });

  Q({ id: "L1-MCQ-37", lec: L, pg: [61], tp: "AI ethics", sb: "Best practices", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which is listed as a DON'T on slide 61?",
    op: ["Use AI to debug and learn from your mistakes", "Ask for explanations of code or formulas", "Use AI as a shortcut to avoid learning", "Verify outputs against trusted sources"],
    an: 2, at: "Using AI as a shortcut to avoid learning is a DON'T.",
    sl: "Slide 61: DOs include understanding, explanations, verification, debugging; DON'Ts include submitting AI work, trusting without verification, shortcutting learning, hiding AI use.",
    ex: "AI is a learning tool, not a replacement for learning.",
    mt: "Picking a DO item as a DON'T." });

  Q({ id: "L1-MCQ-38", lec: L, pg: [62], tp: "AI ethics", sb: "VERIFY letters", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the L1 VERIFY framework, what does the R stand for?",
    op: ["Review", "Reason", "Reproduce", "Refine"],
    an: 1, at: "Reason — does the logic make sense? Can you follow and explain the reasoning?",
    sl: "L1 VERIFY: Validate, Execute, Reason, Inspect, Fix, Yours.",
    ex: "L2 has a different expansion (Examine/Refine/Investigate/Find Sources/Yield) — keep them distinct.",
    mt: "Using the L2 'Refine' when the L1 one is asked." });

  Q({ id: "L1-MCQ-39", lec: L, pg: [63], tp: "Summary", sb: "Foundation models", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which summary point says AI 'can reflect biases from training data, including gender, racial, and cultural stereotypes'?",
    op: ["Foundation models are powerful learning partners", "Prompt engineering is a learnable skill", "AI has real limitations you must understand", "Responsible use is non-negotiable"],
    an: 2, at: "AI has real limitations — hallucinations, outdated knowledge, math errors, and bias.",
    sl: "Slide 63 four summary blocks; the limitations block lists all four failure modes.",
    ex: "Trust but always verify using VERIFY.",
    mt: "Attributing bias to the 'responsible use' block." });

  Q({ id: "L1-MCQ-40", lec: L, pg: [65], tp: "Summary", sb: "Takeaways", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which takeaway on slide 65 mentions survey design specifically?",
    op: ["Data science is a workflow", "Domain knowledge is important — expertise helps with more efficient survey design", "Data cleaning is 80% of the work", "Always VERIFY"],
    an: 1, at: "Domain knowledge is important — expertise can help with more efficient survey design.",
    sl: "Slide 65 five takeaways; takeaway 2 is the domain-knowledge/survey one.",
    ex: "Takeaway 3: data cleaning is 80% of the work.",
    mt: "Assigning survey design to the workflow takeaway." });

  Q({ id: "L1-MCQ-41", lec: L, pg: [66], tp: "Course logistics", sb: "Assessments", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which assessment is described as 'midterm tests foundations. No access to AI' (slide 66)?",
    op: ["Homework assignments (35%)", "Course project (30%)", "Exams (25%)", "Attendance (10%)"],
    an: 2, at: "Exams (25%) — midterm tests foundations, no access to AI.",
    sl: "Slide 66: homework 35%, project 30%, exams 25%, +10% attendance.",
    ex: "This site exists because the midterm is closed-book/no-AI.",
    mt: "Choosing homework — it is 35% but not the no-AI exam descriptor." });

  Q({ id: "L1-MCQ-42", lec: L, pg: [67], tp: "Course logistics", sb: "CTA usage", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which of these is listed under 'HOW TO USE YOUR CTA' (slide 67)?",
    op: ["Submit AI output directly", "Generate practice problems", "Avoid office hours", "Memorize formulas without understanding"],
    an: 1, at: "Generate practice problems — also explain step-by-step, debug code with guidance, review before submitting.",
    sl: "Slide 67 CTA usage list + escalation path (CTA first, then human support).",
    ex: "Always VERIFY.",
    mt: "Missing that CTA is for guided learning, not output submission." });

  Q({ id: "L1-MCQ-43", lec: L, pg: [68], tp: "Course logistics", sb: "Assignment 0", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the SECOND task of Assignment 0 (slide 68)?",
    op: ["Set up your environment", "Have a CTA conversation", "Submit reflection", "Form a project group"],
    an: 1, at: "Have a CTA conversation — ask the AI to explain a data science concept; practice prompting techniques.",
    sl: "Slide 68: 1) set up environment (Python/Jupyter or Colab); 2) CTA conversation; 3) submit reflection.",
    ex: "Purpose: everyone starts Lecture 2 with working tools and initial AI experience.",
    mt: "Swapping tasks 1 and 2." });
})();
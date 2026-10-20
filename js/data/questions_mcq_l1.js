/* Extra MCQ bank — Lecture 1 (built for MCQ Sets; distinct angles from questions_l1.js). */
(function () {
  var L = 1;

  
  
  
  
  Q({ id: "L1-MCQ-05", lec: L, pg: [13], tp: "Definitions", sb: "Pillars", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which combination completes the data science definition 'domain expertise + ___ + ___'?",
    op: ["programming skills; statistical knowledge", "AI tools; big data", "SQL; machine learning", "visualization; reporting"],
    an: 0, at: "Domain expertise + programming skills + statistical knowledge.",
    sl: "Slide 13: 'extracting meaningful insights from data using a combination of domain expertise, programming skills, and statistical knowledge.'",
    ex: "The three pillars mirror the three panels: context, tools at scale, valid conclusions.",
    mt: "Inserting AI into the definition — the slide's definition has no AI term." });

  Q({ id: "L1-MCQ-06", lec: L, pg: [14], tp: "Definitions", sb: "Venn", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which circle of the Venn diagram is described by 'industry knowledge, business context'?",
    op: ["Mathematics and Statistics", "Computer Science", "Domain Expertise", "Data Engineering"],
    an: 2, at: "Domain Expertise — industry knowledge, business context.",
    sl: "Slide 14 circles: Math/Stats (probability, inference, modeling); CS (programming, algorithms, data structures); Domain Expertise (industry knowledge, business context).",
    ex: "Data science lives at the intersection — you need all three.",
    mt: "Assigning business context to computer science." });

  Q({ id: "L1-MCQ-07", lec: L, pg: [15], tp: "Definitions", sb: "Related fields", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which field's key distinction is 'mathematical foundations'?",
    op: ["Data Science", "Machine Learning", "Statistics", "Business Analytics"],
    an: 2, at: "Statistics — analyze and interpret data rigorously; mathematical foundations.",
    sl: "Slide 15: Data Science (end-to-end problem solving); ML (algorithms subset); Statistics (mathematical foundations); Data Engineering (infrastructure); Business Analytics (business strategy).",
    ex: "The fields overlap significantly — data scientists draw on all of them.",
    mt: "Giving 'mathematical foundations' to data science itself." });

  Q({ id: "L1-MCQ-08", lec: L, pg: [16], tp: "Workflow", sb: "Order", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which pipeline order matches?",
    op: ["Question → Collect → Clean → Analyze → Model → Communicate", "Collect → Question → Model → Clean → Analyze → Communicate", "Question → Clean → Collect → Model → Analyze → Communicate", "Collect → Clean → Analyze → Question → Model → Communicate"],
    an: 0, at: "Question → Collect → Clean → Analyze → Model → Communicate.",
    sl: "Slide 16 six-stage workflow; the process is rarely linear — you loop back as you discover new questions or data issues.",
    ex: "The same order is reused across domains in L4.",
    mt: "Putting Analyze after Model." });

  Q({ id: "L1-MCQ-09", lec: L, pg: [17], tp: "Data types", sb: "Types", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which variable is ORDINAL?",
    op: ["Device type", "Ratings (1–5)", "GPA", "Comments"],
    an: 1, at: "Ratings (1–5) — ordered categories.",
    sl: "Slide 17: Categorical (major, device type, country); Ordinal (year in school, ratings 1–5); Numerical (sleep hours, age, GPA); Text (comments, goals).",
    ex: "Key insight: real datasets contain all types; each requires different approaches.",
    mt: "Classifying ratings as numerical — they are ordered categories." });

  
  Q({ id: "L1-MCQ-11", lec: L, pg: [22], tp: "Survey design", sb: "Warnings", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the explicit WARNING?",
    op: ["Poorly designed surveys = unreliable data that can't be fixed later", "Surveys should take at least 30 minutes", "Never pilot a survey", "Jargon makes surveys more professional"],
    an: 0, at: "Poorly designed surveys = unreliable data that can't be fixed later.",
    sl: "Slide 22 warning box; principles include clear language, one concept per question, logical flow, 5–10 minutes, pilot first.",
    ex: "Relates to L1's garbage-in-garbage-out theme.",
    mt: "Minimizing survey design — errors there are irreversible." });

  Q({ id: "L1-MCQ-12", lec: L, pg: [23], tp: "Survey design", sb: "Question types", df: "medium", ty: "mcq", so: "lecture",
    pr: "A multiple-choice question about 'device type' produces which data type?",
    op: ["Numerical", "Ordinal", "Categorical", "Text"],
    an: 2, at: "Categorical — distinct groups, no order.",
    sl: "Slide 23: MULTIPLE CHOICE → Categorical; LINEAR SCALE → Ordinal; NUMBER INPUT → Numerical; PARAGRAPH → Text.",
    ex: "Think top-down: choose question types from how you plan to analyze the data.",
    mt: "Treating yes/no or device-type responses as ordinal." });

  Q({ id: "L1-MCQ-13", lec: L, pg: [27], tp: "Data collection", sb: "APIs", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which collection method is described as 'programmatic access — Twitter, weather services, financial data providers'?",
    op: ["Primary collection", "Secondary datasets", "APIs", "Web scraping"],
    an: 2, at: "APIs — real-time, structured programmatic access.",
    sl: "Slide 27: API examples (Twitter, weather, financial data). Web scraping = extracting from websites, requires ethical care.",
    ex: "Secondary = existing datasets (government, research, Kaggle/UCI).",
    mt: "Confusing APIs with web scraping." });

  
  Q({ id: "L1-MCQ-15", lec: L, pg: [31], tp: "Data formats", sb: "JSON", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which format is the 'API standard' and good for nested, hierarchical data?",
    op: ["CSV", "JSON", "Excel", "Parquet"],
    an: 1, at: "JSON — JavaScript Object Notation; nested/hierarchical; API standard; human-readable.",
    sl: "Slide 31: CSV (simple tabular, universal); JSON (nested, API standard); Excel (sheets, formulas, business); Parquet (columnar, compressed, fast queries).",
    ex: "Pandas loads any of them: read_csv(), read_json(), read_excel(), read_parquet().",
    mt: "Choosing Parquet for nested structures — it is columnar/tabular." });

  Q({ id: "L1-MCQ-16", lec: L, pg: [32], tp: "Data cleaning", sb: "GIGO", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which is listed under 'WITH PROPER CLEANING'?",
    op: ["Incorrect conclusions from outliers", "Models that fail on edge cases", "Robust, generalizable models", "Visualizations that mislead"],
    an: 2, at: "Robust, generalizable models (with cleaning); also reliable statistical summaries, clear visualizations, trustworthy insights.",
    sl: "Slide 32 dual columns: without cleaning = bad outcomes; with cleaning = the good counterparts.",
    ex: "Garbage in, garbage out: even sophisticated models mislead on flawed input.",
    mt: "Mixing up which items belong to the without-cleaning column." });

  Q({ id: "L1-MCQ-17", lec: L, pg: [33], tp: "Data cleaning", sb: "Quality issues", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which example is given for OUTLIERS?",
    op: ["'eight' instead of 8", "'Year 1' vs 'yr 1'", "999 minute commute, −2 hours sleep", "Age = 500, email without @"],
    an: 2, at: "999 minute commute, −2 hours sleep — errors or genuine extremes?",
    sl: "Slide 33: wrong types ('eight'); inconsistent formats ('Year 1' vs 'yr 1'); outliers (999 min, −2 hrs); invalid values (age 500, email without @).",
    ex: "Each issue type needs a different strategy — no one-size-fits-all.",
    mt: "Assigning age = 500 to outliers — that is an invalid value; outliers are plausible-but-extreme numbers." });

  Q({ id: "L1-MCQ-18", lec: L, pg: [35], tp: "Data cleaning", sb: "Missing strategies", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which missing-value strategy is described as 'preserves distribution shape; most common approach for numerical data'?",
    op: ["Delete rows", "Fill with a constant", "Impute with statistics (mean, median, mode)", "Predictive models"],
    an: 2, at: "Impute with statistics — preserves distribution shape; most common for numerical data.",
    sl: "Slide 35 strategies: delete (loses information), constant (quick but may bias), statistical (most common), predictive (most sophisticated).",
    ex: "Critical question: why is the data missing? Random vs systematic changes the strategy.",
    mt: "Calling constant fills 'bias-free' — the slide warns they may introduce bias." });

  Q({ id: "L1-MCQ-19", lec: L, pg: [36], tp: "Data cleaning", sb: "Outlier detection", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which two statistical rules for outlier detection are given?",
    op: ["Z-score > 3 and IQR method (1.5×IQR)", "Z-score > 2 and range method", "Tukey fence 2×IQR", "Standard error > 1"],
    an: 0, at: "Z-score > 3; IQR (1.5×IQR).",
    sl: "Slide 36 HOW TO DETECT: visual (box/scatter/histogram), statistical (Z-score > 3, 1.5×IQR), domain knowledge.",
    ex: "What to do: error → fix/remove; genuine → keep or cap; consider robust methods.",
    mt: "Using Z-score > 2 as the slide's threshold." });

  
  Q({ id: "L1-MCQ-21", lec: L, pg: [38], tp: "Preprocessing", sb: "Normalization", df: "medium", ty: "mcq", so: "lecture",
    pr: "When is min-max normalization preferred over z-score standardization?",
    op: ["When extreme outliers are present", "When a bounded range is needed and there are no extreme outliers", "When comparing across features with different units", "When the algorithm requires mean 0 and std 1"],
    an: 1, at: "Min-max: when a bounded range is needed and there are no extreme outliers (outliers compress the rest).",
    sl: "Slide 38: min-max scales to [0,1]-style ranges; z-score centers at 0, scales by std — used for cross-feature comparison/algorithms that need it.",
    ex: "Many ML algorithms (NN, KNN, SVM) are scale-sensitive; unscaled features dominate unfairly.",
    mt: "Choosing min-max with extreme outliers." });

  Q({ id: "L1-MCQ-22", lec: L, pg: [40], tp: "EDA", sb: "Definition", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which phrase describes EDA?",
    op: ["Formal modeling before exploration", "'Detective work for data' — understanding structure, patterns, anomalies, relationships before modeling", "A one-time report", "Hypothesis testing"],
    an: 1, at: "EDA is detective work for data: examine structure, patterns, anomalies, relationships before formal modeling.",
    sl: "Slide 40: summarize, visualize, question; let the data speak first.",
    ex: "Resist jumping to conclusions before thoroughly exploring.",
    mt: "Conflating EDA with modeling." });

  Q({ id: "L1-MCQ-23", lec: L, pg: [41], tp: "Descriptive stats", sb: "Center/spread", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statistic is described as 'works for categorical data'?",
    op: ["Mean", "Median", "Mode", "Standard deviation"],
    an: 2, at: "Mode — most frequent value; works for categorical data.",
    sl: "Slide 41: Mean (sensitive to outliers); Median (robust); Mode (categorical); Range (affected by outliers); SD (average distance from mean); IQR (robust).",
    ex: "Always report both center and spread.",
    mt: "Assuming the median works for categorical data — it requires order." });

  Q({ id: "L1-MCQ-24", lec: L, pg: [43], tp: "Distributions", sb: "Skewness", df: "medium", ty: "mcq", so: "lecture",
    pr: "For a LEFT-skewed distribution, which is true?",
    op: ["Long tail to the right; mean > median", "Long tail to the left; mean < median", "Symmetric; mean ≈ median", "Long tail to the left; mean > median"],
    an: 1, at: "Left-skewed: long tail to the left; mean < median (example: age at retirement).",
    sl: "Slide 43: Normal (symmetric, mean ≈ median); Right-skewed (tail right, mean > median — income); Left-skewed (tail left, mean < median).",
    ex: "Skewed data often needs median over mean.",
    mt: "Reversing the mean/median inequality for left skew." });

  Q({ id: "L1-MCQ-25", lec: L, pg: [44], tp: "Correlation", sb: "Numeric claim", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which r-value indicates a perfect negative linear relationship?",
    op: ["r = 0", "r = −1", "r = +1", "r = −0.5"],
    an: 1, at: "r = −1: perfect negative correlation (as X increases, Y decreases).",
    sl: "Slide 44 range: −1 perfect negative; 0 no linear correlation; +1 perfect positive.",
    ex: "Warning: correlation ≠ causation.",
    mt: "Choosing r = 0 for a negative relationship." });

  Q({ id: "L1-MCQ-26", lec: L, pg: [46], tp: "Visualization", sb: "Chart choice", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which chart is recommended for 'distribution + outliers + comparison'?",
    op: ["Histogram", "Box plot", "Pie chart", "Line chart"],
    an: 1, at: "Box plot — distribution + outliers + comparison (e.g., sleep by year level).",
    sl: "Slide 46: histogram (one-variable distribution); box plot (distribution+outliers+comparison); pie (parts of whole — sparingly); bar (categories); scatter (relationship); line (trends over time).",
    ex: "Choose based on the question, not what looks prettiest.",
    mt: "Using a histogram to compare groups." });

  
  Q({ id: "L1-MCQ-28", lec: L, pg: [50], tp: "Foundation models", sb: "Definition", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which property of foundation models is 'learned from billions of text examples before you use it'?",
    op: ["Pre-trained", "General purpose", "Conversational", "Deterministic"],
    an: 0, at: "Pre-trained — learned from massive data before you use it.",
    sl: "Slide 50: pre-trained; general purpose (answer questions, write code, analyze data); conversational (dialogue from natural-language prompts).",
    ex: "Examples: ChatGPT, Claude, DeepSeek.",
    mt: "Assigning 'pre-trained' to generality." });

  
  Q({ id: "L1-MCQ-30", lec: L, pg: [53], tp: "Foundation models", sb: "Capabilities", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which capability is described as 'walk through statistical formulas and mathematical proofs step by step'?",
    op: ["Explain concepts", "Write code", "Derive math", "Debug errors"],
    an: 2, at: "Derive math — step-by-step walks through formulas and proofs.",
    sl: "Slide 53: explain concepts; write code; analyze data; derive math; debug errors; brainstorm. Important: verify outputs and understand underlying concepts.",
    ex: "Math derivation by LLMs is probabilistic text — verify carefully (slide 54: math errors).",
    mt: "Choosing 'debug errors' for the derivation capability." });

  Q({ id: "L1-MCQ-31", lec: L, pg: [54], tp: "AI limitations", sb: "Outdated knowledge", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which limitation is explained as 'training data has a cutoff date — AI may not know recent events, updated APIs, or new research'?",
    op: ["Hallucinations", "Math errors", "Outdated knowledge", "Bias & stereotypes"],
    an: 2, at: "Outdated knowledge — training-data cutoff date.",
    sl: "Slide 54 four limitations: hallucinations (fabrication, fake citations); math errors (predict words, not compute); outdated knowledge (cutoff); bias & stereotypes.",
    ex: "The rule: always verify AI outputs — especially facts, calculations, code.",
    mt: "Confusing outdated knowledge with hallucination." });

  
  
  
  
  
  
  
  
  
  
  
  })();
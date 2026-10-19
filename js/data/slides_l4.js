window.DSFM_SLIDES = window.DSFM_SLIDES || {};
DSFM_SLIDES["4"] = {
 "id": "4",
 "title": "Lecture 4 — Applications & Data Wrangling (Quality, MCAR/MAR/MNAR, EDA, Pipelines)",
 "pages": [
  {
   "n": 1,
   "title": "Data Science with Foundation Models",
   "raw": "ELEC3544 · Fall 2026\n\n\n\n\nData Science with Foundation Models\n\n\nYang Liu\n\nThe University of Hong Kong",
   "status": "partial",
   "img": "img/l4_01.jpg"
  },
  {
   "n": 2,
   "title": "Lecture 4",
   "raw": "Lecture 4\n\n\nData Science Applications and Data Wrangling\n\n\n      From real-world impact to professional data preparation\n\n\n\n\n                                                                2",
   "status": "partial",
   "img": "img/l4_02.jpg"
  },
  {
   "n": 3,
   "title": "Today's Learning Objectives",
   "raw": "Today's Learning Objectives\n\nPart 1: Why and What — Applications & Ideation\n\n1. Describe data science applications across multiple domains, identifying the common workflow pattern.\n2. Formulate a project idea using structured CTA-assisted ideation, evaluating feasibility.\n\n\nPart 2: How — Professional Data Wrangling\n\n3. Conduct systematic data quality assessment, producing a structured quality report.\n4. Choose and justify cleaning strategies based on missingness mechanisms and domain context.\n5. Conduct discovery-driven EDA and prepare data through encoding and reproducible pipelines.\n6. Direct CTA-assisted wrangling with strategic decision-making and verification.\n\n\n\n\n                                                                                                          3",
   "status": "full",
   "img": "img/l4_03.jpg"
  },
  {
   "n": 4,
   "title": "Where We Are: Module 1 Journey",
   "raw": "Where We Are: Module 1 Journey\n\n      L1                          L2                       L3                         L4\n                                                                                  The Practice:\n    What is          →       The Language:    →       The Reasoning:      →\n                                                                                 Applications &\n  Data Science?              Linear Algebra         Probability & Stats\n                                                                                   Wrangling\n\n\n\n\n                  L4 bridges foundations (Module 1) to core methods (Module 2)\n\n\n\n       Module 2 ahead: Regression (L5) → Classification (L6) → Unsupervised Learning (L7)\n\n\n\n\n                                                                                                  4",
   "status": "full",
   "img": "img/l4_04.jpg"
  },
  {
   "n": 5,
   "title": "What You've Built So Far",
   "raw": "What You've Built So Far\nYour toolkit for today — concepts we'll use throughout this lecture:\n\n   From L2: Linear Algebra              From L3: Probability & Stats           From L1: Course Framework\n\n   Data as matrices and vectors         Summary statistics and                 VERIFY framework for AI outputs\n   Variance, covariance,                distributions,                         Human judgment + AI capability\n   PCA intuition                        \"Always visualize\" principle,          Data science pipeline overview\n   Dimensionality as feature count      Conditional probability,\n                                        Bayes' rule\n\n\n\n Key Insight: Today you'll see these tools in action: matrices become real datasets, distributions reveal data\n quality issues, and the VERIFY framework guides every CTA interaction.\n\n\n\n                                                                                                                 5",
   "status": "full",
   "img": "img/l4_05.jpg"
  },
  {
   "n": 6,
   "title": "Today's Structure: Two Parts",
   "raw": "Today's Structure: Two Parts\nPart 1: \"Why and What\"                                              Part 2: \"How\"\n                                                                    2A: Data Quality Assessment\n1A: Application Showcase\n                                                                    Four-check protocol + CTA profiling\nFour domains showing data science impact\n                                                                    2B: Missingness & Cleaning\n1B: Project Ideation                                                MCAR/MAR/MNAR framework\n\nFive-step CTA brainstorming process\n                                                                    2C: EDA & Pipelines\n                                                                    Discovery cycle → reproducible pipeline\n\n\n🤖 CTA Role Transition Today\nBrainstorming Partner (generating and evaluating ideas) → Implementation Assistant (writing code, generating reports)\n\n1. Interest → Project Idea 2. Automated Profiling 3. Cleaning Consequences 4. Discovery & Pipeline\n\n\n\n                                                                                                                        6",
   "status": "full",
   "img": "img/l4_06.jpg"
  },
  {
   "n": 7,
   "title": "PART 1A",
   "raw": "PART 1A\n\nData Science Applications\n  Seeing the impact across domains\n\n\n\n\n                                     7",
   "status": "partial",
   "img": "img/l4_07.jpg"
  },
  {
   "n": 8,
   "title": "Data Science is Everywhere",
   "raw": "Data Science is Everywhere\nWhat do disease prediction, fraud detection, climate forecasting, and smart traffic management have\nin common?\n\n       Healthcare                                            Finance\n 🏥 Prediction & Discovery                              💰 Risk & Pattern Detection\n\n\n 🌍 Climate\n   Monitoring & Prediction\n                                                       🏙 Smart    Cities\n                                                         Urban Intelligence\n\n\n\n\n 🤔 Track these questions: What data? What techniques? What could go wrong?\n\n\n                                                                                                      8",
   "status": "full",
   "img": "img/l4_08.jpg"
  },
  {
   "n": 9,
   "title": "Healthcare: Prediction and Discovery",
   "raw": "Healthcare: Prediction and Discovery\n Disease Prediction                                               Medical Imaging\n\n Patient features (age, lab results, history) → predict           Deep learning detecting pneumonia from X-rays\n diabetes risk\n                                                                  Connects to L9 (Deep Learning)\n Classification problem — connects to L6                          Enabled by large annotated datasets\n High stakes: wrong predictions have real consequences\n\n\n\n                                         [FIG 2: Sample patient records table]\nThe data:                         Age | BMI | Glucose | BloodPressure | DiabetesRisk\n                                Synthetic data showing what healthcare data looks like\nstructured patient records —\neach row is a patient; each\ncolumn is a measurement.\n\n\n\n                                                                                                                  9",
   "status": "full",
   "img": "img/l4_09.jpg"
  },
  {
   "n": 10,
   "title": "Healthcare: The Data Science Perspective",
   "raw": "Healthcare: The Data Science Perspective\nThe Pipeline\n Data: Electronic health records, lab results, medical imaging\nKey Challenges\n • Missing data — patients skip tests(connects to Part 2: missingness)\n • Class imbalance — most patients are healthy (previews L6)\n • Privacy regulations — HIPAA, patient consent\n • High stakes — false negative in cancer screening\nImpact\n Early detection programs reducing disease progression — data-driven screening saves lives.\n\n\n\n\n                                                                                              10",
   "status": "full",
   "img": "img/l4_10.jpg"
  },
  {
   "n": 11,
   "title": "Finance: Risk and Pattern Detection",
   "raw": "Finance: Risk and Pattern Detection\n Fraud Detection                                                 Credit Scoring\n\n Identifying fraudulent transactions among millions              Predicting loan defaults from applicant profiles\n\n\n Extreme class imbalance (~0.1% fraud)                           Regression and classification (L5–L6)\n \"Ever gotten a text from your bank asking 'was this you?'\"      Fairness concerns: who gets denied?\n\n\n\n\n                                      [FIG 4: Sample transaction log table]\n                               Timestamp | Amount | Merchant | Location | IsFraud\n                                Showing what financial transaction data looks like\n\n\n\n\nThe data: transaction logs — millions of rows, real-time streaming, each row is one purchase.                       11",
   "status": "full",
   "img": "img/l4_11.jpg"
  },
  {
   "n": 12,
   "title": "Finance: The Data Science Perspective",
   "raw": "Finance: The Data Science Perspective\n    The Pipeline\n    Data: Transaction logs (millions of rows, real-time), market data, customer profiles\n    Key Challenges                                                    Impact\n•     Extreme imbalance — ~0.1% of transactions are fraudulent     Cost savings from fraud detection at scale —\n•     Adversarial behavior — fraudsters adapt to detection systems financial institutions save billions annually\n•     Real-time requirements — decisions in milliseconds           through automated pattern detection.\n•     Fairness concerns — who gets denied credit, and why?\n\n\n\n                                             [FIG 5: Anomaly scatter +\n                                             cost-benefit comparison]\n\n\n\n\n                                                                                                                   12",
   "status": "full",
   "img": "img/l4_12.jpg"
  },
  {
   "n": 13,
   "title": "Climate: Monitoring and Prediction",
   "raw": "Climate: Monitoring and Prediction\n Climate Monitoring & Prediction                           Energy Optimization\n Analyzing temperature records, forecasting\n                                                           Predicting solar/wind output for grid management\n extreme weather\n\n                                                           Regression (L5) for continuous forecasting\n Regression problem — connects to L5\n                                                           HK context: typhoon prediction, air quality\n Decades of spatial and temporal data\n\n\n\n\nThe data: time series from sensor networks — each row is a timestamp; columns are measurements across locations.\n                                                                                                                   13",
   "status": "full",
   "img": "img/l4_13.jpg"
  },
  {
   "n": 14,
   "title": "Climate: The Data Science Perspective",
   "raw": "Climate: The Data Science Perspective\n    The Pipeline\n    Data: Satellite imagery, sensor networks, weather stations (decades of time series)\n\n\n    Key Challenges\n•      Temporal dependencies — today's weather depends\n       on yesterday's\n•      Spatial correlations — nearby stations are correlated\n•      Massive scale — billions of data points across decades\n•      Weather prediction vs. climate projection — different\n       timescales, different methods\n\n\n    Impact\nData-driven energy grid optimization — matching renewable supply to demand reduces waste and\ncarbon emissions.\n\n                                                                                               14",
   "status": "full",
   "img": "img/l4_14.jpg"
  },
  {
   "n": 15,
   "title": "Smart Cities: Urban Intelligence",
   "raw": "Smart Cities: Urban Intelligence\n Transportation Optimization                                  Urban Sensing\n                                                              Air quality monitoring, energy consumption patterns\n Ride-sharing demand prediction, traffic flow analysis\n                                                              IoT sensor networks generating real-time data\n HK: Octopus card patterns, MTR crowding prediction\n                                                              Embeddings for location representation\n Clustering + regression methods\n\n\n\n\n                                   [FIG 8: Ridership heatmap + transit data table]\n\n\n\n\n                                                                                                                    15\nThe data: IoT sensors, transit records, mobile traces — each row is a reading, often at sub-minute granularity.",
   "status": "full",
   "img": "img/l4_15.jpg"
  },
  {
   "n": 16,
   "title": "Smart Cities: The Data Science Perspective",
   "raw": "Smart Cities: The Data Science Perspective\nThe Pipeline\nData: IoT sensors, transit records, mobile traces, open government data\nKey Challenges\n •    Heterogeneous sources — combining GPS, sensors, surveys, and social data\n •    Privacy — location data reveals personal patterns\n •    Real-time processing — traffic optimization requires instant decisions\n •    Scale — entire cities generate terabytes of sensor data daily\nImpact\nTransit optimization reducing\ncommute time and crowding —\ndata-driven scheduling\nimproves quality of life for\nmillions.\n\n\n                                                                                 16",
   "status": "full",
   "img": "img/l4_16.jpg"
  },
  {
   "n": 17,
   "title": "The Common Thread",
   "raw": "The Common Thread\nKey Insight\nAll four domains follow the same pipeline: Question → Collect → Clean → Analyze → Model → Communicate.\nWhat changes is the domain knowledge. The pipeline is universal; the judgment is domain-specific.\n\n\n\n\n                         [FIG 10: Common pipeline with four-domain mapping\n\n                  Question → Collect → Clean → Analyze → Model → Communicate\n                                                   |\n                             Healthcare / Finance / Climate / Smart Cities\n               each domain feeds into the same pipeline with different domain knowledge]\n\n\n\n\n                                                                                                   17",
   "status": "full",
   "img": "img/l4_17.jpg"
  },
  {
   "n": 18,
   "title": "Connecting Domains to Course Techniques",
   "raw": "Connecting Domains to Course Techniques\n\n\n      Domain             Primary Techniques              Key Challenges            Lecture(s)\n\n🏥 Healthcare         Classification + Metrics      Missing data, class imbalance     L4, L6\n\n💰 Finance            Regression + Classification   Extreme imbalance, fairness       L5, L6\n\n🌍 Climate            Regression + Visualization    Temporal dependencies, scale      L4, L5\n\n🏙 Smart Cities       Clustering + Embeddings       Heterogeneous data, privacy        L7\n\n\n\n\n     The methods in L5–L7 are the tools practitioners use across all these domains.\n                                                                                                18",
   "status": "full",
   "img": "img/l4_18.jpg"
  },
  {
   "n": 19,
   "title": "Your Turn: The Course Project",
   "raw": "Your Turn: The Course Project\n This is where you apply everything from the course.\n   •   Team of 3 students\n   •   Real dataset (not from class) — you find it, you own it\n   •   Full data science pipeline: question → data → wrangling → modeling → communication\n\nProject Timeline\n\n\n       Form Teams        →           Proposals         →         Progress Check     →   Presentations\n        By Sep. 23                   By Oct. 11                                          By Late Nov.\n\n\n\n Assessment: 30% of final grade • Demonstrates end-to-end data science capability\n\n\n                 Today's Part 1B: learn the ideation process to find YOUR project idea.\n\n\n                                                                                                        20",
   "status": "full",
   "img": "img/l4_19.jpg"
  },
  {
   "n": 20,
   "title": "What Makes a Good Project?",
   "raw": "What Makes a Good Project?\n     Clear, answerable question\n1\n     Not \"understand social media\" but \"predict post engagement from timing and content features\"\n\n     Real, accessible data (>1,000 rows; labelled / paired data)\n2\n     Publicly available or collectible within the project timeline\n\n     Appropriate scope (6 weeks)\n3\n     Manageable for a team of 2–3 — not a PhD thesis, not a homework problem\n\n     Personal interest\n4\n     You'll spend weeks on this — pick something you genuinely want to explore\n\n     Full pipeline opportunity\n5\n     Involves data wrangling, EDA, modeling, and interpretation — not just one step\n\n\n✓ Good: \"Predicting customer churn for a streaming service\" ✗ Too broad: \"Understanding social media\"\n                                                                                                        21",
   "status": "full",
   "img": "img/l4_20.jpg"
  },
  {
   "n": 21,
   "title": "Where to Find Data",
   "raw": "Where to Find Data\n📊 Kaggle Datasets                      🎓 UCI ML Repository                      🔍 Google Dataset Search\n\nThousands of curated datasets          Classic benchmark datasets used          Search engine specifically for\nwith community notebooks               in academic research                     datasets\n\n                                                                                📂 GitHub awesome-public-\n🇭🇰 HK Open Data                        🌐 World Bank / WHO / NOAA\n                                                                                datasets\ndata.gov.hk — local datasets for       Authoritative global data on             Community-curated list\nHong Kong projects                     economics, health, climate               organized by domain\n\n\n⚠ Always Verify First\nAlways verify the dataset actually exists and has the features you need before committing to a project idea.\n\n               Tip: Start browsing datasets this week. Bring 2–3 candidates to your team discussion.\n\n\n\n                                                                                                                 22",
   "status": "full",
   "img": "img/l4_21.jpg"
  },
  {
   "n": 22,
   "title": "The Five-Step CTA Ideation Process",
   "raw": "The Five-Step CTA Ideation Process\nFrom first principle\n\n\n         1                       2                    3                   4                    5\n\n   Start with                Generate             Evaluate            Refine &              Produce\n                       →                     →                  →                    →\n  Your Interest              Questions           Feasibility          Narrow             Project Sketch\n\n Not data — YOUR           CTA brainstorms       Data, scope,       Iterate toward       One-paragraph\n curiosity matters             options           techniques             clarity            proposal\n     the most\n\n\n💡 Key Insight\nThe CTA generates options. YOU make every decision — which question, which dataset, which scope.\n\n\n\n\n                                                                                                          23",
   "status": "full",
   "img": "img/l4_22.jpg"
  },
  {
   "n": 23,
   "title": "🤖 CTA Demo: From Interest to Project Idea",
   "raw": "🤖 CTA Demo: From Interest to Project Idea\n What We'll Explore\n Watch how we take a vague interest and turn it into a concrete, feasible project idea using the five-step process.\n Let’s ask for a topic from the audience — it doesn't need to relate to the four domains we discussed.\n\n\nKey Questions:\n\n •    How do you write a structured prompt with constraints — not just \"give me ideas\"?\n •    How do you evaluate CTA suggestions against your five criteria?\n •    How do you verify that a CTA-suggested dataset actually exists?\n •    How do you make the final idea yours — not just the CTA's output?\n\n\n CTA Role: Brainstorming Partner     Dataset: Audience-chosen topic\n\n\n\n                                                                             Pattern: Iterative Refinement (Creative)\n                                                                                                                   24",
   "status": "full",
   "img": "img/l4_23.jpg"
  },
  {
   "n": 24,
   "title": "CTA Demo 1: Key Moments",
   "raw": "CTA Demo 1: Key Moments\n1. Structured Prompt with Constraints                       2. Evaluating, Not Accepting\n\nNot \"give me ideas\" — specifying level, data                Assessing each CTA suggestion against the five\nrequirements, techniques, timeline, and team size           criteria. \"This one is interesting but where would I\nin the prompt.                                              get the data?\"\n\n\n\n3. VERIFY: Validate                                         4. Making It Yours\n\nChecking if the CTA-suggested dataset actually\n                                                            Articulating WHY you chose this question. \"Can I\nexists. \"Does this dataset have the claimed\n                                                            explain this project without the CTA?\"\nfeatures?\"\n\n\n\nThe CTA generated ideas, suggested datasets, and wrote a polished proposal — but every decision was the\ninstructor's.\n                                                                                                                   25",
   "status": "full",
   "img": "img/l4_24.jpg"
  },
  {
   "n": 25,
   "title": "VERIFY in Action: Project Ideation",
   "raw": "VERIFY in Action: Project Ideation\n✓ VERIFY: Applying the Framework to Project Ideation\n\n V     Validate           Does the dataset actually exist with the claimed features?\n\n E     Execute            Can you download and load it? Try it before committing.\n\n R     Reason             Does the approach logically address the research question?\n\n I     Inspect            What could go wrong — data too small, features irrelevant, scope too large?\n\n F     Fix                Iterate on scope and approach. Narrow or pivot as needed.\n\n Y     Yours              Can you explain this project without the CTA? Is this YOUR idea?\n\n\nHighlighted: V (Validate) and Y (Yours) — the two steps most critical for project ideation.\n\n                                                                                                        26",
   "status": "full",
   "img": "img/l4_25.jpg"
  },
  {
   "n": 26,
   "title": "PART 2",
   "raw": "PART 2\n\nProfessional Data Wrangling\n  From raw data to model-ready features\n\n\n\n\n                                          28",
   "status": "partial",
   "img": "img/l4_26.jpg"
  },
  {
   "n": 27,
   "title": "The Professional Data Wrangling Workflow",
   "raw": "The Professional Data Wrangling Workflow\n The 80/20 Reality: Data scientists spend approximately 80% (or even more!) of their time on data\n preparation — cleaning, transforming, and exploring data before any modeling begins.\n\n\n      Assess                      Clean                      Explore                     Prepare\n    Quality checks     →       Fix issues based   →      Discover patterns    →         Encode, scale,\n     & profiling               on mechanisms              & relationships                 pipeline\n\n\n\n Running Example: Telco Customer Churn dataset (~7,043 customers, 21 columns, binary target). We'll\n use this dataset throughout Part 2.\n\n\n            Today: we walk through each step with real data and real CTA collaboration.\n\n                                                                                                         29",
   "status": "full",
   "img": "img/l4_27.jpg"
  },
  {
   "n": 28,
   "title": "Meet the Telco Dataset",
   "raw": "Meet the Telco Dataset\n    ~7,043 customers                        21 columns                               Binary target: Churn\n\n\n       Demographics                      Account Information                                   Services\n\ngender, SeniorCitizen,               tenure, Contract,                         PhoneService, InternetService,\nPartner, Dependents                  PaymentMethod,                            OnlineSecurity, OnlineBackup,\n                                     MonthlyCharges,                           DeviceProtection, TechSupport,\n                                     TotalCharges                              StreamingTV, StreamingMovies\n\n\n\n\n Business Question: Predict which customers will churn (leave within the last month).\n\n\n                                                               https://www.kaggle.com/datasets/blastchar/telco-customer-churn\n\n                                                                                                                          30",
   "status": "full",
   "img": "img/l4_28.jpg"
  },
  {
   "n": 29,
   "title": "Step 1: Systematic Data Quality Assessment",
   "raw": "Step 1: Systematic Data Quality Assessment\n         1                          2                              3                       4\n\n    Structural              Completeness                       Validity             Distributional\nDimensions, data types,    Missing values — where,       Ranges, type mismatches,     Summary stats,\n   memory usage             how many, patterns?                 duplicates          distribution shapes\n\n\n                                                     ▼\n                                Output: A Data Quality Report — your first\n                                         professional deliverable\n\n\n 💡 Key Insight: Systematic assessment before cleaning. Don't fix what you haven't diagnosed — the four-\n check protocol ensures you understand your data before changing it.\n\n\n\n                                                                                                          31",
   "status": "full",
   "img": "img/l4_29.jpg"
  },
  {
   "n": 30,
   "title": "Structural Assessment",
   "raw": "Structural Assessment\nPython / pandas\n                                                                    What to Look For\n # Dimensions\n df.shape                                                           Most important diagnostic:\n # Column types (most important!)                                   .dtypes\n df.dtypes\n # Full overview                                                    Type mismatches are\n df.info()                                                          common and informative.\n # Memory usage\n df.memory_usage(deep=True)                                         A numerical column stored as\n                                                                    object means hidden quality issues.\n\n\n Example: Telco Dataset\n If df.dtypes reveals TotalCharges as 'object' — not 'float64' as expected. This signals a hidden data\n quality issue we need to investigate.\n\n\n\n                                                                                                         32",
   "status": "full",
   "img": "img/l4_30.jpg"
  },
  {
   "n": 31,
   "title": "Completeness Assessment",
   "raw": "Completeness Assessment\n                                                       Missingness Rules of Thumb\n# Count missing per column\ndf.isnull().sum()                                      < 5% Manageable — most strategies work\n# Proportion missing                                   5–30% Needs careful strategy choice\ndf.isnull().mean()                                     > 30% Consider dropping the column\n\n\nCritical Question: WHY is data missing? The\nanswer determines your cleaning strategy.\n\n\n⚠ Watch Out: \"Missing\" data isn't always NaN —\ncan be blank strings, \"N/A\", -999, or other sentinel\nvalues. Always check beyond .isnull().\n\n\n\n\n                                                                                                33",
   "status": "full",
   "img": "img/l4_31.jpg"
  },
  {
   "n": 32,
   "title": "Validity Assessment",
   "raw": "Validity Assessment\n Out-of-Range Values                                   Duplicate Rows\n                                                       df.duplicated().sum()\n Negative ages? Charges above $10,000?\n                                                       Investigate before dropping — are they\n Domain knowledge defines valid ranges.\n                                                       true duplicates or repeat measurements?\n\n\n\n Inconsistent Categories                               Cross-Field Inconsistencies\n\n \"Female\" vs. \"female\" vs. \"F\"                         Tenure = 0 but TotalCharges = $5,000?\n Use .value_counts() to find variants.                 Relationships between columns reveal errors.\n\n\n CTA can identify these efficiently — but interpreting whether suspicious values are errors requires\n                                        domain knowledge.\n                                                                                                       34",
   "status": "full",
   "img": "img/l4_32.jpg"
  },
  {
   "n": 33,
   "title": "Distributional Assessment",
   "raw": "Distributional Assessment\nBeyond df.describe() — visualization reveals what statistics hide. This is how you OWN the data.\n\n     Histograms                   Box Plots                 Count Plots                     KDE\n                                                         Categorical balance\n  Numerical shape —             Outliers and                                           Smooth density\n                                                                  —\n  skewed? bimodal?             quartile spread                                        estimate — reveals\n                                                         are classes roughly\n      uniform?                   at a glance                                            subtle patterns\n                                                                even?\n\nLook for: unexpected shapes • extreme skewness • suspicious uniformity • multimodal distributions\n\n  💡 Callback to L3: Remember Anscombe's quartet — statistics alone aren't enough. Always visualize. Four\n  datasets with identical means, variances, and correlations looked completely different when plotted.\n\n\n\n\n                                                                                                           35",
   "status": "full",
   "img": "img/l4_33.jpg"
  },
  {
   "n": 34,
   "title": "🤖 CTA Demo: Automated Profiling",
   "raw": "🤖 CTA Demo: Automated Profiling\nwith Human Interpretation\n What We'll Explore\n Let's have the CTA generate a complete data quality report for the Telco dataset. Think of how to write a\n structured request — and then check what the CTA gets right, and what only a human can catch.\n\nKey Questions:\n •   How do you write a structured prompt with four explicit sections?\n •   How does the quality of your request aﬀect the quality of the output?\n •   What does the CTA get right — and what only a human can catch?\n\n                   CTA Role: Implementation Assistant Dataset: Telco Customer Churn\n\n                                               Pattern: Structured Requests + Verification Through Computation\n\n                                                                                                             36",
   "status": "full",
   "img": "img/l4_34.jpg"
  },
  {
   "n": 35,
   "title": "CTA Demo 2: The Structured Request",
   "raw": "CTA Demo 2: The Structured Request\n  The Structured Prompt                                                            Compare to:\n  \"I have a dataset about teleco                                                          \"Is my data clean?\"\n  customer churn with ~7,000 rows\n  and 21 columns. Please produce\n                                                                                       Vague input → vague output\n  a data quality assessment covering … :\n\n  (1) Structural overview                                                           💡 Lesson\n  (2) Completeness                                                                  Quality of AI output depends on\n  (3) Validity                                                                      quality of your request.\n  (4) Distributional summary\n                                                                                    Four explicit sections matched to the\n  Format as a structured report with                                                four-check protocol, with specified\n  a prioritized issues list at the end.\"                                            output format.\n\n\nNotice: the prompt includes context (dataset description), structure (four sections), and format (report with prioritized\n                                                        issues).\n\n\n                                                                                                                            37",
   "status": "full",
   "img": "img/l4_35.jpg"
  },
  {
   "n": 36,
   "title": "CTA Demo 2: What the Human Catches",
   "raw": "CTA Demo 2: What the Human Catches\n Finding: SeniorCitizen                                      Finding: TotalCharges\n CTA reports:                                                CTA flags:\n int64, values [0, 1], mean 0.16                             dtype is object (string), not float\n\n Human recognizes:                                           Human investigates:\n This is a binary categorical variable,                      Blank strings (not NaN) for zero-tenure\n not continuous. Its 0/1 values already                      customers — new customers who haven't\n provide valid indicator encoding.                           been billed yet. Business explanation!\n\n\n 💡 Key Insight: The CTA computes accurately. The human interprets meaningfully. The CTA can't\n know SeniorCitizen is categorical without business context, and can't explain why TotalCharges has blanks\n without domain understanding.\n\nTwo takeaways: (1) structured requests produce comprehensive output, and (2) human interpretation catches what\n                                                the CTA misses.\n\n\n\n                                                                                                                 38",
   "status": "full",
   "img": "img/l4_36.jpg"
  },
  {
   "n": 37,
   "title": "VERIFY in Action: Data Quality Assessment",
   "raw": "VERIFY in Action: Data Quality Assessment\n ✓ VERIFY: Applied to Data Quality Assessment\n V    Validate         Are type classifications correct? Is SeniorCitizen really numerical?\n\n  E   Execute          Does the profiling code run on your dataset without errors?\n\n R    Reason           Do the CTA's findings make sense given what we know about the business?\n\n  I   Inspect          What edge cases might the automated profile miss? (Sentinel values, type mismatches)\n\n  F   Fix              Iterate: ask follow-up questions when something looks suspicious.\n\n Y    Yours            Can you explain each finding in your own words?\n\n\n        Highlighted: Validate and Inspect — the two steps most critical for data quality assessment.\n\n\n\n                                                                                                         39",
   "status": "full",
   "img": "img/l4_37.jpg"
  },
  {
   "n": 38,
   "title": "The Data Quality Report as Professional Deliverable",
   "raw": "The Data Quality Report as Professional Deliverable\nA skill you'll use in your project and your career.\n\n 1    Data Overview                   Source, dimensions, feature descriptions, collection context\n\n\n 2    Findings by Check Type Structural, completeness, validity, distributional — organized and specific\n\n\n 3    Prioritized Issues              Ranked by impact on analysis — what must be fixed vs. what can wait\n\n\n 4    Recommended Actions             Specific, justified cleaning strategies for each issue identified\n\n\n         Now that we know what's wrong, how do we fix it? That depends on why the data is\n                                         problematic.\n\n                                                                                                            40",
   "status": "full",
   "img": "img/l4_38.jpg"
  },
  {
   "n": 39,
   "title": "Why is Data Missing? Three Mechanisms",
   "raw": "Why is Data Missing? Three Mechanisms\nThe mechanism determines the valid cleaning strategy — this cannot be determined from data\nalone.\n\n             MCAR                                      MAR                                   MNAR\n     Missing Completely at Random                  Missing at Random                     Missing Not at Random\n\n  Missingness unrelated to any variable   Given observed variables, missingness   Missingness depends on missing\n  — observed or unobserved.               is unrelated to missing values.         values, even given observed variables.\n\n  Example: Lab tech drops test tubes      Example: Older patients skip fitness    Example: High earners don't report\n  — loss is purely random.                test — depends on age (observed).       income — depends on income\n                                                                                  (unobserved).\n\n\nDetermining the mechanism requires reasoning about the data-generating process — it cannot be determined from data\nalone.\n\n\n\n\n                                                                                                                           41",
   "status": "full",
   "img": "img/l4_39.jpg"
  },
  {
   "n": 40,
   "title": "Why is Data Missing? Three Mechanisms",
   "raw": "Why is Data Missing? Three Mechanisms\n\n\n\n\n                                        42",
   "status": "partial",
   "img": "img/l4_40.jpg"
  },
  {
   "n": 41,
   "title": "Why Mechanisms Matter for Cleaning",
   "raw": "Why Mechanisms Matter for Cleaning\nThe mechanism determines which imputation strategy is valid.\n\n                                                                         Listwise deletion loses data. Mean/median\n MCAR → Deletion can be unbiased\n                                                                         imputation can distort variability.\n\n                                                                         Use related observed variables and a suitable\n   MAR         → Conditional imputation appropriate                      imputation model.\n\n                                                                         Must model the missingness process itself, or\n MNAR → No simple fix\n                                                                         acknowledge the limitation of the data.\n\n 💡 Key Insight\n The CTA will implement whatever strategy you request. YOUR job is determining which strategy is valid — and\n that requires understanding the mechanism.\n\n\"The mechanism is the judgment call. The implementation is just code.\"\n                                                                                                                         43",
   "status": "full",
   "img": "img/l4_41.jpg"
  },
  {
   "n": 42,
   "title": "Cleaning Strategy Toolkit",
   "raw": "Cleaning Strategy Toolkit\nFrom simple to sophisticated — choose based on the missingness mechanism.\n\nStrategy        Description                                    When to Use / Notes\n\n                Listwise or pairwise removal of                Generally safest under MCAR; dataset large\n Deletion\n                incomplete rows                                enough to absorb loss\n\n                                                               When 'missing' has natural meaning (e.g., no\n Constant       Fill with a fixed value (e.g., 0, 'Unknown')\n                                                               internet service)\n\n                                                               Simple but distorts variance and distribution\n Statistical    Mean, median, or mode imputation\n                                                               shape\n\n                                                               Appropriate under MAR with a suitable\n Conditional    Impute using related observed variables\n                                                               imputation model\n\n                KNN, iterative imputer, or regression-         More sophisticated; handles complex MAR\n Model-based\n                based                                          patterns\n\n                                           Simple → Sophisticated                                              44",
   "status": "full",
   "img": "img/l4_42.jpg"
  },
  {
   "n": 43,
   "title": "🤖 CTA Demo: Consequences of Cleaning Choices",
   "raw": "🤖 CTA Demo: Consequences of Cleaning Choices\n\nWhat We'll Explore\nTotalCharges has missing values for zero-tenure customers. The CTA will happily fill these in\nhowever we ask. But which strategy should we use? Let's try three approaches and see what\nhappens to the data.\n\n\nKey Questions:\n 1 How do different imputation strategies affect the distribution of TotalCharges?\n\n 2 Which approach produces artificial patterns that don't match reality?\n\n 3 How does the missingness mechanism tell us which strategy is valid?\n\n\n\n\n                                                                                                45",
   "status": "full",
   "img": "img/l4_43.jpg"
  },
  {
   "n": 44,
   "title": "CTA Demo 3: Three Strategies Compared",
   "raw": "CTA Demo 3: Three Strategies Compared\n 🤖 Three imputation strategies, three very different results.\n\n\n\n\n Mean Imputation                               Median Imputation                           Conditional Imputation\n Artificial spike at ~$2,280                   Spike at median value                       Values near $0 for new customers\n Tells the model 11 new customers all spent    Same problem at a different location —      Imputes by tenure group — zero-tenure\n exactly $2,280 — completely unrealistic for   median is still unrealistic for brand-new   customers get values based on similar (1–3\n zero-tenure.                                  customers.                                  month) customers. No artificial spike.\n ❌ Distorts distribution                       ❌ Same issue, different value               ✓ Preserves natural relationship\n\n\n\n\nVisual: overlaid or side-by-side histograms make the consequences immediately visible.\n\n\n                                                                                                                                        46",
   "status": "full",
   "img": "img/l4_44.jpg"
  },
  {
   "n": 45,
   "title": "CTA Demo 3: Connecting to Mechanisms",
   "raw": "CTA Demo 3: Connecting to Mechanisms\n Observation                                                       Working assumption: MAR\n TotalCharges is missing for customers with tenure = 0.\n We assume missingness depends on tenure alone,\n                                                           → Conditional   imputation accounts for tenure.\n                                                             Its validity also depends on the imputation model\n not on the unobserved TotalCharges value.                         and assumptions for zero-tenure customers.\n\n\n 💡 Key Insight\n Mean/median imputation introduces values that contradict the data-generating process — new customers didn‘t\n spend $2,280. Conditional imputation can use the relationship between tenure and charges. The\n MCAR/MAR/MNAR framework isn’t abstract theory — it guided our strategy and the assumptions to check.\n\n ✓ VERIFY Connection\n Inspect — examining distributional consequences of each strategy. Reason — connecting the chosen strategy to\n the missingness mechanism.\n\n\"Three strategies, three different results. The CTA implemented all three equally well — it doesn't know which is 'right.'\nThat judgment came from you.\"\n                                                                                                                         47",
   "status": "full",
   "img": "img/l4_45.jpg"
  },
  {
   "n": 46,
   "title": "Beyond Missing Data: Other Cleaning Tasks",
   "raw": "Beyond Missing Data: Other Cleaning Tasks\n Fixing Type Mismatches                                      Handling Duplicates\n  df['TotalCharges'] = pd.to_numeric(                         df.duplicated().sum()\n      df['TotalCharges'], errors='coerce')                    # Investigate before dropping!\n\n Converts string columns to numeric; 'coerce'                Are they true duplicates or repeat measurements?\n turns unparseable values to NaN for later handling.         Domain context determines the action.\n\n Standardizing Categories                                    Handling Outliers\n  df['col'] = (df['col'].str.strip()\n                                                              # Domain-dependent decision\n    .str.lower().replace({'f': 'female'}))\n\n \"Female\" vs. \"female\" vs. \"F\" — inconsistent labels         Errors → fix or remove. Genuine extremes → keep.\n cause silent errors in analysis.                            Different population → investigate separately.\n\n\nCTA can identify these efficiently — but interpreting whether suspicious values are errors requires domain knowledge.\n\n                                                                                                                    48",
   "status": "full",
   "img": "img/l4_46.jpg"
  },
  {
   "n": 47,
   "title": "Consequence-Driven Cleaning: A Mindset",
   "raw": "Consequence-Driven Cleaning: A Mindset\nThe professional approach to data cleaning.\n\n\n              🔍                             🧭                            🤖                        ✓\n         Understand           →          Choose            →       Implement          →        Verify\n       WHY does this issue            Strategy based on             CTA excels here       Compare before/after\n            exist?                      understanding                                        distributions\n\n\n\n 💡 Key Insight\n The CTA implements; you decide and verify. Steps 1, 2, and 4 require human judgment. Step 3 is where the CTA\n accelerates your workflow.\n\n Human: Understand why → Choose strategy → Verify consequences CTA: Implement efficiently\n\n\"Don't fix what you don't understand. Don't trust what you haven't verified.\"\n\n                                                                                                                 49",
   "status": "full",
   "img": "img/l4_47.jpg"
  },
  {
   "n": 48,
   "title": "Our data is now clean.",
   "raw": "Our data is now clean.\nOr more precisely — we've made deliberate, justified cleaning choices.\n\n Assessed quality ✓ → Understood mechanisms ✓ → Chose strategies ✓ → Verified\n                                consequences ✓\n\n\n                  Next: What can we discover?\n                       EDA is where data science gets creative.\n                       Each visualization provokes a question.\n                    Each question motivates the next visualization.\n\n\n           Part 2C: Discovery-Driven EDA and Pipelines →\n                                                                                50",
   "status": "full",
   "img": "img/l4_48.jpg"
  },
  {
   "n": 49,
   "title": "Exploratory Data Analysis: The Discovery Cycle",
   "raw": "Exploratory Data Analysis: The Discovery Cycle\nEDA isn't a checklist — it's an iterative cycle of creative discovery.\n\n\n          📊                     👀                     💭                      🔍                     ⚡\n                     →                     →                      →                     →\n       Visualize              Notice             Hypothesize             Investigate                Act\n\n\n             ↻ Each visualization provokes a question; each question motivates the next visualization.\n\n\n Quality Assessment vs. EDA\n Quality Assessment\n Systematic — checks every column methodically. Goal: find problems.\n Exploratory Data Analysis\n Creative and question-driven — follows interesting threads. Goal: find patterns and insights.\n\n                                                                                                          51",
   "status": "full",
   "img": "img/l4_49.jpg"
  },
  {
   "n": 50,
   "title": "EDA Toolkit: Visualizations by Purpose",
   "raw": "EDA Toolkit: Visualizations by Purpose\nChoose your visualization based on the question you're asking.\n\n          📊                          📈                         🎯                          🔥\n    What does one                How do two             How does the target          Patterns across\n   variable look like?         variables relate?        diﬀer across groups?         many features?\n\n\n       Histogram                 Scatter plot            Grouped bar chart        Correlation heatmap\n       Count plot                Grouped bar               of target rate              Pair plots\n          KDE                     Box plot\n\n\n\n\n  💡 Callback to L3: Remember Anscombe's quartet — four datasets with identical statistics but completely\n  different shapes. Chart selection matters. Always match the visualization to your question.\n\n\n\n                                                                                                           52",
   "status": "full",
   "img": "img/l4_50.jpg"
  },
  {
   "n": 51,
   "title": "EDA in Practice: Telco Dataset",
   "raw": "EDA in Practice: Telco Dataset\nFirst EDA look — three key observations that set up deeper investigation.\n\n Tenure Distribution               Monthly Charges                   Churn Rate\n Bimodal — many new customers      Roughly uniform with              ~27% of customers churned —\n and many long-term customers      concentration at the low end.     moderate class imbalance (not\n (loyalty), fewer in the middle.   Wide range ($18–$118).            extreme).\n  🤔 Why two clusters? Does this     🤔 Do high-charge customers        🤔 Which customer segments\n  relate to churn?                  churn more?                       drive this?\n\n\n\n\n                                                                                                     53",
   "status": "full",
   "img": "img/l4_51.jpg"
  },
  {
   "n": 52,
   "title": "🤖 CTA Demo: Discovery Workflow",
   "raw": "🤖 CTA Demo: Discovery Workflow\n What We'll Explore\n Let's do live EDA on the Telco dataset. We can start with one visualization, notice something interesting, and\n follow that thread. Watch how each finding leads to the next question — this is the discovery cycle in action.\n\n\nKey Questions:\n 1   How does a targeted visualization request differ from \"show me the data\"?\n\n 2   How do you follow a discovery thread — letting one finding guide the next question?\n\n 3   What features emerge as strong predictors of churn?\n\n\n CTA Role: Implementation Assistant Dataset: Telco Customer Churn\n Pattern: Iterative Refinement + Challenging for Completeness\n\n                                                                                                                  54",
   "status": "full",
   "img": "img/l4_52.jpg"
  },
  {
   "n": 53,
   "title": "CTA Demo 4: The Discovery Thread",
   "raw": "CTA Demo 4: The Discovery Thread\n     Each finding leads to the next question — the discovery cycle in practice.\n🤖\n         Scatter: Charges vs.                           Follow-Up: Churn by\n     1                                             2                                                 3 Feature Insight\n         Tenure                                         Contract\n     \"Create a scatter of MonthlyCharges vs.\n                                                   \"Break down churn rate by contract type.\"         Discovery synthesis\n     tenure, colored by Churn.\"\n\n    High-charge, low-tenure customers         → Month-to-month: ~43% churn. One                → Contract type, tenure, and charges\n    cluster as churned. New customers on          year: ~11%. Two year: ~3%. A 14×                  are strong individual predictors. Their\n    expensive plans are at highest risk.          difference — contract type is a                   interactions may be even more\n                                                  powerful predictor.                               informative for modeling in L6.\n\n\n\n\n                                                                                                                                              55\nThe discovery thread: scatter → contract breakdown → feature insight. Each finding raised the next question.",
   "status": "full",
   "img": "img/l4_53.jpg"
  },
  {
   "n": 54,
   "title": "Categorical Encoding",
   "raw": "Categorical Encoding\nML models need numerical inputs. Categorical features must be encoded — but how?\n\n One-Hot Encoding                          Ordinal Encoding                         Label Encoding\n Create binary columns for each            Assign ordered integers to               Assign arbitrary integers to\n category.                                 categories.                              categories.\n  When to use: Nominal features             When to use: Naturally ordered           When to use: Generally avoid —\n  (no natural order), few levels.           features (e.g., education level: HS <    except for tree-based models that\n                                            BS < MS < PhD).                          handle splits naturally.\n  Contract:                                 Satisfaction:                            Contract:\n    Month-to-month → [1, 0, 0]                Low → 1                                  Month-to-month → 0\n    One year → [0, 1, 0]                      Medium → 2                               One year → 1\n    Two year → [0, 0, 1]                      High → 3                                 Two year → 2\n\n\n\n\n         ✓ Most common                            ✓ Preserves order                       ⚠ Use with caution\n\n\nKey rule: encoding must respect the structure of your data. One-hot is safest for nominal categories.\n\n                                                                                                                         56",
   "status": "full",
   "img": "img/l4_54.jpg"
  },
  {
   "n": 55,
   "title": "Encoding the Telco Data",
   "raw": "Encoding the Telco Data\nApplying encoding decisions to our running example.\nEncoding Decisions                                                Python / sklearn\n                                                                  from sklearn.preprocessing import \\\n Feature              Encoding         Reason                         OneHotEncoder\n Contract             One-hot          No natural order\n                                                                  # Identify categorical columns\n PaymentMethod        One-hot          No natural order           cat_cols = ['Contract',\n                                                                    'PaymentMethod', 'InternetService',\n InternetService      One-hot          No natural order             'gender', 'SeniorCitizen']\n gender               One-hot          Binary nominal\n                                                                  encoder = OneHotEncoder(\n SeniorCitizen        One-hot          0/1 also valid                 sparse_output=False,\n                                                                      handle_unknown='ignore')\n                                                                  encoded = encoder.fit_transform(\n                                                                      df[cat_cols])\n\n  🤔 Dimensionality Increase: One-hot encoding increases the number of columns. The original 21 columns become ~30+\n  columns after encoding. Each categorical feature with k levels creates k new binary columns. This trade-oﬀ (more columns, but\n  each is numerically meaningful) is usually worthwhile for model interpretability.\n\n\n  ⚠ Watch Out: SeniorCitizen is binary categorical; its 0/1 values already form a valid indicator encoding.\n\n                                                                                                                                 57",
   "status": "full",
   "img": "img/l4_55.jpg"
  },
  {
   "n": 56,
   "title": "Scaling Review: When and Why",
   "raw": "Scaling Review: When and Why\nCallback to L1: min-max and z-score standardization — when do they matter for modeling?\n\n ✓ When Scaling Matters                                      → When Scaling Doesn't Matter\n Distance-based methods                                      Tree-based methods\n KNN, SVM, PCA — features with larger ranges dominate        Decision trees, random forests, gradient boosting — splits\n distance calculations                                       are scale-invariant\n\n Gradient-based methods                                      Gaussian Naïve Bayes\n Logistic regression, neural networks — unscaled features    Positive aﬀine scaling preserves Gaussian likelihood ratios\n cause slow or unstable convergence\n\n\n Z-score: z = (x − µ) / σ                                    Min-max: x′ = (x − xmin) / (xmax − xmin)\n Centers at 0, scales by standard deviation                  Training range: [0, 1]; new values may exceed it\n\nRule of thumb: if features have very different ranges and you're using distance/gradient methods, scale.\n\n\n                                                                                                                           58",
   "status": "full",
   "img": "img/l4_56.jpg"
  },
  {
   "n": 57,
   "title": "Feature Engineering: First Taste",
   "raw": "Feature Engineering: First Taste\nEDA-driven feature creation — the best features come from domain knowledge + EDA discoveries.\n\n Average Monthly Charge                    Number of Services                    Tenure Bins\n   TotalCharges / tenure                     Count of subscribed services        New (0–12) / Mid (13–36) / Long\n                                                                                             (37–72)\n Adjusts for tenure; pricing differences   Aggregate engagement metric —\n may remain. Use only when tenure >                                              Based on the bimodal distribution\n                                           customers using more services\n 0; handle tenure = 0 separately.                                                discovered in EDA. Captures the\n                                           may be more sticky or more\n                                                                                 natural customer lifecycle phases.\n                                           frustrated.\n Domain knowledge: total spend             EDA insight: individual service       EDA discovery: tenure histogram\n grows with time; rate of spend is         flags are noisy; the total captures   showed distinct clusters at short\n more informative.                         engagement level.                     and long tenures.\n\n 💡 Key Insight\n Best features come from domain knowledge + EDA discoveries. The CTA can implement any transformation —\n you decide WHICH transformations are meaningful.\n\n                                                                                                                      59",
   "status": "full",
   "img": "img/l4_57.jpg"
  },
  {
   "n": 58,
   "title": "Pipeline Building",
   "raw": "Pipeline Building\n\n Consolidate all wrangling steps — type fixing, imputation, encoding, scaling — into a single sklearn Pipeline.\n Then challenge for completeness: does it handle new data, unseen categories, and edge cases?\n\n\nChallenging for Completeness — Key Questions:\n\n 1   What happens if the test data has a category level that wasn't in the training data?\n\n 2   Did you include SeniorCitizen in the categorical pipeline or the numerical one?\n\n 3   Should we add feature engineering steps (average monthly charge, number of services) into the pipeline?\n\n 4   Is the order of operations correct — should we impute before or after encoding?\n\nEach question reveals a gap. The CTA addresses them, producing a more robust pipeline through iteration.\n\n\n                                                                                                               60",
   "status": "full",
   "img": "img/l4_58.jpg"
  },
  {
   "n": 59,
   "title": "The Reproducible Pipeline",
   "raw": "The Reproducible Pipeline\nsklearn ColumnTransformer + Pipeline Structure\n Pipeline\n  ColumnTransformer\n    Numerical Features                       Categorical Features\n    tenure, MonthlyCharges, TotalCharges     Contract, PaymentMethod, ...\n                                                                                    → Model-Ready\n       SimpleImputer(median)                   SimpleImputer(most_frequent)\n                                                                                      Features\n                    →                                        →\n          StandardScaler()                    OneHotEncoder(handle_unknown)\n\n\n\nWhy Reproducibility Matters\n • Consistent train/test preprocessing — same transformations applied identically\n • No data leakage — fitting only on training data, transforming both\n • Easy to modify — swap components without rewriting the entire workflow\n\n\n                                                                                                    61",
   "status": "full",
   "img": "img/l4_59.jpg"
  },
  {
   "n": 60,
   "title": "From Raw Data to Model-Ready Features",
   "raw": "From Raw Data to Model-Ready Features\nThe complete Part 2 journey — from raw Telco data to features ready for L6 classification.\n\n\n       Raw                                                                                                            Model-\n       Data        →        Assess       →         Clean        →        Explore       →       Prepare       →        Ready\n\n    7,043 rows          Four checks             Mechanism-              Discovery           Encode, scale          ~30+ features\n    21 columns          Quality report             driven                  cycle               pipeline             Reproducible\n\n\n\n 💡 Key Insight\n Every step involved human judgment. The CTA made each step faster. Your judgment made each step correct.\n\n\n Telco dataset is now ready for Lecture 6: Classification\n The cleaned, encoded features will serve as input for predicting customer churn — our first real classification problem.\n\n\n\n                                                                                                                                   62",
   "status": "full",
   "img": "img/l4_60.jpg"
  },
  {
   "n": 61,
   "title": "Today's Key Takeaways",
   "raw": "Today's Key Takeaways\n1   Same pipeline, different domain knowledge\n    Healthcare, finance, climate, smart cities — all follow Question → Collect → Clean → Analyze → Model →\n    Communicate.\n\n2   CTA as brainstorming partner — but the idea must be yours\n    Five-step ideation: interest → questions → feasibility → refine → sketch. The CTA generates; you decide.\n\n3   Four-check protocol as professional skill\n    Structural, completeness, validity, distributional — a systematic approach you'll use in projects and careers.\n\n4   Cleaning choices have consequences — understand why\n    MCAR/MAR/MNAR guides strategy. Simple imputation can distort relationships; conditional methods need\n    suitable models and assumptions.\n\n5   EDA is discovery, not a checklist\n    Let findings guide questions. Consolidate into reproducible pipelines for consistent, leak-free preprocessing.\n\n\n                                                                                                                     63",
   "status": "full",
   "img": "img/l4_61.jpg"
  },
  {
   "n": 62,
   "title": "The CTA Role Transition",
   "raw": "The CTA Role Transition\nHow your interaction strategy with the CTA evolved through the course so far.\n\n L2–L3                                L4 Part 1                           L4 Part 2\n Learning Partner                     Brainstorming Partner               Implementation Assistant\n Explaining concepts, verifying     Generating and evaluating             Writing code, generating\n understanding, building            project ideas, exploring              reports, building pipelines. CTA\n intuition through worked           application domains, creative         produces; you direct and verify.\n examples.                        → ideation.                         →\n\n Interaction strategy:                Interaction strategy:               Interaction strategy:\n Ask \"why\" and \"how\" questions.       Structured prompts with             Structured requests. Challenge\n Use CTA to check your                constraints. Evaluate — don't       for completeness. Verify\n reasoning.                           accept blindly.                     consequences.\n\n\n\n                                                                                                             64",
   "status": "full",
   "img": "img/l4_62.jpg"
  },
  {
   "n": 63,
   "title": "Technically Intriguing Questions",
   "raw": "Technically Intriguing Questions\nQuestions that reward curiosity — explore these with the CTA on your own.\n\n 🤔 Question 1\n When would you deliberately choose NOT to impute missing data and instead drop rows? What are the tradeoﬀs?\n\n Think about: small vs. large datasets, high missingness proportions, analysis types that are robust to missing data.\n\n 🤔 Question 2\n Can you use PCA (from L2) as a data quality diagnostic? How would outliers appear in PCA space?\n\n Try it: run PCA on a dataset with outliers. Connects L2 to L4 — PCA as diagnostic, not just dimensionality reduction.\n\n 🤔 Question 3\n How would you assess data quality for unstructured data like text or images, where the four-check protocol doesn't\n directly apply?\n Extends to: text quality (encoding, languages, boilerplate), image quality (resolution, labeling errors). Forward\n pointer to L7 and L9–L10.\n                                                                                                                     65",
   "status": "full",
   "img": "img/l4_63.jpg"
  },
  {
   "n": 64,
   "title": "Homework 1",
   "raw": "Homework 1\nDeadline: October 3 at 11:59 pm\n   Now you have your group\n    Course Project Proposal\nDeadline: October 11 at 11:59 pm\n\n                                   66",
   "status": "partial",
   "img": "img/l4_64.jpg"
  },
  {
   "n": 65,
   "title": "Questions?",
   "raw": "Questions?\nCONTACT INFORMATION\n\n\n\n\n                  Instructor: Prof. Yang Liu   Office Hours: 5:00 - 5:50 PM, Thursdays\n                  Email: yliu12@hku.hk         Location: CB-714, Chow Yei Ching Building\n\n\nyangliu.mit.edu                                Let me know if you want remote!\n\n\n\n\n🤖 CTA is your 24/7 interactive and responsive learning partner!\n\n                                                                                           67",
   "status": "full",
   "img": "img/l4_65.jpg"
  },
  {
   "n": 66,
   "title": "TA contacts",
   "raw": "TA contacts\n                     Homework #1\n\n                      Yushi Du:                                                  Zhengyang Hu:\nTuesday 4-5PM         u3012725@connect.hku.hk                                    u3010250@connect.hku.hk\n                      https://us04web.zoom.us/j/78561597481\n\n\n\n               Jun Dai:                                                          Lulu Cai:\nThursday 3-4PM jundai332@connect.hku.hk                                          u303011209@connect.hku.hk\n               https://rochester.zoom.us/j/97202452759\n\n\n\n     TA oﬀice hours on Zoom! Two slots (1 hour each) on Tuesdays and Thursdays\n\n\n                                                                                                             68",
   "status": "full",
   "img": "img/l4_66.jpg"
  }
 ]
};

window.DSFM_SLIDES = window.DSFM_SLIDES || {};
DSFM_SLIDES["3"] = {
 "id": "3",
 "title": "Lecture 3 — Probability & Statistics for Data Science",
 "pages": [
  {
   "n": 1,
   "title": "Data Science with Foundation Models",
   "raw": "ELEC3544 · Fall 2026\n\n\n\n\nData Science with Foundation Models\n\n\nYang Liu\n\nThe University of Hong Kong",
   "status": "partial",
   "img": "img/l3_01.jpg"
  },
  {
   "n": 2,
   "title": "Lecture 3",
   "raw": "Lecture 3\nProbability and Statistics for Data Science\n\n\n\n\n                                              2",
   "status": "partial",
   "img": "img/l3_02.jpg"
  },
  {
   "n": 3,
   "title": "What Do You Need to Know?",
   "raw": "What Do You Need to Know?\nYou can ask an AI to compute any statistics, run any simulation, generate any\nvisualization. It will do these things very eﬀiciently. So what do YOU need to know?\nThree things AI can't do for you:\n Know your context — AI doesn't understand your domain, your stakeholders, or your\n constraints.\n\n Ask the right questions — AI answers what you ask. If you ask the wrong question, you get\n the right answer to the wrong question.\n\n Judge what matters — AI can tell you an eﬀect is statistically significant. It can't tell you\n whether that eﬀect is worth caring about.\n\n Today's lecture builds the judgment you need to supervise AI statistical analysis — to catch\n when it's misleading, to ask probing follow-ups, and to translate statistical results into decisions.\n                                                                                                         3",
   "status": "full",
   "img": "img/l3_03.jpg"
  },
  {
   "n": 4,
   "title": "Today's Journey",
   "raw": "Today's Journey\n\n\n\n                           [FIGURE F1: Visual Roadmap]\n                                Five skills connected by arrows:\n         Recognize misleading stats → Match processes to shapes → Think about base\n                    rates → Interpret uncertainty → Supervise AI analysis\n\n\n\n\n  Each skill annotated: \"Always ask for visuals\" → \"Sanity-check AI assumptions\"\n    → \"Ask about prevalence\" → \"Know what CIs mean\" → \"Probe and judge\"\n                                                                                     4",
   "status": "full",
   "img": "img/l3_04.jpg"
  },
  {
   "n": 5,
   "title": "What is Probability?",
   "raw": "What is Probability?\nProbability measures the likelihood of an event occurring, on a scale from 0 to 1.\n\n          0                                                                                1\n      Impossible                                                                         Certain\n\n\nTwo key interpretations:\n Frequentist Interpretation                         Subjective Interpretation\n If we repeated the experiment many times,          Our degree of belief or confidence in an outcome.\n what fraction of trials would show this outcome?   (Connects to Bayesian thinking later.)\n\n\n\n Example: Flip a fair coin 1000 times. About 500 will be heads. So P(heads) ≈ 0.5.\n The probability reflects the long-run frequency of the outcome.\n\n                                                                                                        5",
   "status": "full",
   "img": "img/l3_05.jpg"
  },
  {
   "n": 6,
   "title": "Random Variables — The Bridge from Events to Numbers",
   "raw": "Random Variables — The Bridge from Events to Numbers\nA random variable assigns a numerical value to each possible outcome of a random process.\nThis is how we move from talking about \"events\" to doing mathematics with \"distributions.\"\n\nTwo types:\n Discrete                                              Continuous\n Countable outcomes: dice rolls, counts, categories.   Measurements on a continuum: height, time, temperature.\n Examples: Number of defects, coin flip results        Examples: Reaction time, stock price\n\n\n\n Example: Let X = number of heads in 3 coin flips.\n X can take values: 0, 1, 2, or 3. Each value has a probability:\n P(X=0) = 1/8, P(X=1) = 3/8, P(X=2) = 3/8, P(X=3) = 1/8\n\n\n\nThis framework lets us describe uncertainty mathematically — the foundation of statistical inference.\n                                                                                                         6",
   "status": "full",
   "img": "img/l3_06.jpg"
  },
  {
   "n": 7,
   "title": "Population vs. Sample — The Fundamental Distinction",
   "raw": "Population vs. Sample — The Fundamental Distinction\n Population                                              Sample\n The complete set of all individuals or                  A subset of the population that we actually\n observations we care about.                             observe. What we must work with in practice.\n Often very large or even infinite.\n Has true parameters: µ (mean), σ (std dev)              Gives us statistics: x̄ (sample mean), s (sample std dev)\n\n\n Key Insight: We almost never see the whole population.\n We use samples to make inferences about populations. This is the core challenge of statistics.\n\n\nParameters vs. Statistics — The Naming Convention\n      Quantity                       Population (Greek)                           Sample (Roman)\n        Mean\n Standard Deviation\n                                                                                                                     7",
   "status": "full",
   "img": "img/l3_07.jpg"
  },
  {
   "n": 8,
   "title": "Notation We'll Use Today",
   "raw": "Notation We'll Use Today\nSymbol     What It Represents                              Example\n\n   n       Sample size (number of observations)            n = 100 students\n\n   xᵢ      The i-th observation in our sample              x₃ = 85 (third score)\n\n   x̄      Sample mean (our estimate of µ)                 x̄ = 78.5\n           Sample standard deviation (estimate of\n   s                                                       s = 12.3\n           σ)\n P(A)      Probability of event A                          P(rain) = 0.3\n\nP(A | B)   Probability of A given B has occurred           P(rain | cloudy) = 0.6\n\n📌 Bookmark this slide — we'll use this notation throughout the course.\n                                                                                    8",
   "status": "full",
   "img": "img/l3_08.jpg"
  },
  {
   "n": 9,
   "title": "From Random Variables to Events",
   "raw": "From Random Variables to Events\nHow do random variables and events connect?\n  Key Insight: An event is a statement about what values a random variable takes.\n  Events (A, B) are defined by conditions on random variables (X).\nTranslating between notations:\nRandom Variable Condition           Event Notation                 In Words\nX=2                                 A = {X = 2}                    \"X equals 2\"\nX>3                                 B = {X > 3}                    \"X is greater than 3\"\nX≤1                                 C = {X ≤ 1}                    \"X is at most 1\"\n\n  Example: Let X = number of heads in 3 coin flips.\n  Define event A = {X ≥ 2} = \"at least 2 heads\"\n  Then: P(A) = P(X ≥ 2) = P(X=2) + P(X=3) = 3/8 + 1/8 = 1/2\n\nWhen we write P(A) or P(A|B), the events A and B are typically defined by conditions on random variables.\n                                                                                                    9",
   "status": "full",
   "img": "img/l3_09.jpg"
  },
  {
   "n": 10,
   "title": "Three Fundamental Probability Rules",
   "raw": "Three Fundamental Probability Rules\n Complement Rule              P(not A) = 1 − P(A)\n Intuition: The probability of something happening plus the probability of it not happening\n equals 1 (certainty).\n Example: If P(rain) = 0.3, then P(no rain) = 0.7\n Addition Rule                P(A or B) = P(A) + P(B) − P(A and B)\n For mutually exclusive events (can't both happen): P(A or B) = P(A) + P(B)\n Intuition: Add individual probabilities, subtract overlap to avoid double-counting.\n Example: P(roll 1 or 2) = 1/6 + 1/6 = 2/6 (no overlap)\n\n Multiplication Rule P(A and B) = P(A) × P(B | A)\n For independent events (A doesn't affect B): P(A and B) = P(A) × P(B)\n Intuition: If A doesn't affect B, just multiply. If it does, use the conditional probability.\n Example: P(two heads in a row) = 0.5 × 0.5 = 0.25\n\nThese rules form the foundation for all probability calculations — including Bayes' rule.\n                                                                                                 10",
   "status": "full",
   "img": "img/l3_10.jpg"
  },
  {
   "n": 11,
   "title": "The Counting Perspective",
   "raw": "The Counting Perspective\nMany probability problems are counting problems in disguise.\n\n\n\n\nThis works when all outcomes are equally likely.\n\n  Example: Drawing a red card from a standard deck.\n  26 red cards (hearts + diamonds), 52 total cards.\n  P(red) = 26/52 = 0.5\n\n\n  Why this matters for Bayes: When we ask \"of all positive tests, how many are true positives?\"\n  — that's a counting question.\n  The counting perspective will make Bayes' rule intuitive rather than mysterious.\n                                                                                              11",
   "status": "full",
   "img": "img/l3_11.jpg"
  },
  {
   "n": 12,
   "title": "Summary Statistics — Measuring Location",
   "raw": "Summary Statistics — Measuring Location\nWhere is the center of the data?\n\n Mean (x̄) — The Arithmetic Average\n                                             Intuition: The \"balance point\" of the data — sum all values and\n                                             divide by count.\n ⚠ Limitation: Sensitive to outliers — one extreme value can pull the mean dramatically.\n\n\n Median — The Middle Value\n When data is sorted, the median is the middle value. 50% of values fall below, 50% above.\n Advantage: Resistant to outliers — extreme values don't affect it.\n\n  When to use which: Use median for skewed distributions or when outliers are present (e.g.,\n  income, housing prices).\n  Use mean when the distribution is roughly symmetric and outliers are not a concern.\n                                                                                                               12",
   "status": "full",
   "img": "img/l3_12.jpg"
  },
  {
   "n": 13,
   "title": "Summary Statistics — Measuring Spread",
   "raw": "Summary Statistics — Measuring Spread\nHow much variation is there in the data?\n\n Standard Deviation (s) — Typical Distance from the Mean\n Variance is the average of squared deviations from the mean.\n Standard deviation is the square root of variance — bringing us back to the original units.\n                                                             Intuition: \"How far, on average, are values from the\n                                                             center?\"\n Note: We divide by n−1 (not n). This is Bessel's correction — it is based on the degrees of freedom\n and accounts for the fact that a sample tends to underestimate population variability.\n\n Interquartile Range (IQR) — Range of the Middle 50%\n IQR = Q3 − Q1 (75th percentile minus 25th percentile). Advantage: Resistant to outliers, like the median.\n\n\n Pattern: Mean + Std Dev go together (both sensitive to outliers).\n Median + IQR go together (both resistant). Choose the pair that fits your data.\n                                                                                                                    13",
   "status": "full",
   "img": "img/l3_13.jpg"
  },
  {
   "n": 14,
   "title": "Summary Statistics — Measuring Relationships",
   "raw": "Summary Statistics — Measuring Relationships\nHow do two variables move together?\nCovariance — How Variables Vary Together\n                                                          • Positive covariance: when X is above its mean, Y tends to\n                                                          be above its mean\n                                                          • Negative covariance: when X is above its mean, Y tends to\n                                                          be below its mean\n      ⚠ sample (co-)variance 1/(n-1) instead of 1/n\n                                                          • Problem: magnitude depends on units — hard to interpret\nPearson Correlation Coefficient, or Correlation (r) — Standardized Covariance\n                                             Dividing by the standard deviations removes unit dependence, giving a\n    r = Cov(X,Y) / (sx · sy)\n                                             dimensionless measure.\n\nSymbol Definitions:\n  Symbol           Meaning\n  Cov(X,Y)         Covariance between X and Y\n    sx , sy        Sample standard deviations of X and Y\n      r            Pearson correlation coefficient (dimensionless)                                                   14",
   "status": "full",
   "img": "img/l3_14.jpg"
  },
  {
   "n": 15,
   "title": "Correlation — Properties and Limitations",
   "raw": "Correlation — Properties and Limitations\nRange and Interpretation\n r ∈ [−1, +1]          r = +1: Perfect positive linear relationship\n                       r = 0: No linear relationship\n                       r = −1: Perfect negative linear relationship\nFull Formula:\n\n\n\n\n ⚠ Critical Limitations\n 1. Correlation only measures LINEAR association. A perfect curved relationship can have r ≈ 0.\n 2. Correlation does not imply causation. Two variables can be correlated due to a third factor.\n 3. Identical correlations can hide completely different data structures — as we're about to see.\n\n\n\n                                                                                                    15",
   "status": "full",
   "img": "img/l3_15.jpg"
  },
  {
   "n": 16,
   "title": "The Tools — Visualizations",
   "raw": "The Tools — Visualizations\nThree essential plot types:\nHistogram                               Box Plot                              Scatter Plot\nDistribution of a single variable.      Five-number summary: min, Q1,         Relationship between two variables.\nReveals: symmetry, skewness, modality   median, Q3, max.                      Reveals: linear vs. nonlinear,\n(unimodal, bimodal), outliers.          Outliers shown as individual points   clusters, outliers, strength.\nUse when: \"What does this variable      (beyond 1.5×IQR).                     Use when: examining association\nlook like?\"                             Use when: comparing distributions     between X and Y.\n                                        across groups.\n\n\n\n\n Statistics summarize. Visualizations reveal structure. You need both.                                              16",
   "status": "full",
   "img": "img/l3_16.jpg"
  },
  {
   "n": 17,
   "title": "A Test of Our Tools",
   "raw": "A Test of Our Tools\nI have four datasets. Let's analyze them with our tools and see what we learn.\n           Dataset I            Dataset II           Dataset III       Dataset IV\n               x    y                x    y               x    y            x    y\n           10      8.04          10      9.14         10      7.46      8       6.58\n           8       6.95          8       8.14         8       6.77      8       5.76\n           13      7.58          13      8.74         13      12.74     8       7.71\n           9       8.81          9       8.77         9       7.11      8       8.84\n           11      8.33          11      9.26         11      7.81      8       8.47\n           14      9.96          14      8.10         14      8.84      8       7.04\n           6       7.24          6       6.13         6       6.08      8       5.25\n           4       4.26          4       3.10         4       5.39     19       12.50\n           12      10.84         12      9.13         12      8.15      8       5.56\n           7       4.82          7       7.26         7       6.42      8       7.91\n           5       5.68          5       4.74         5       5.73      8       6.89\n\nThese look like diﬀerent numbers. Let's see what the statistics say.                    17",
   "status": "full",
   "img": "img/l3_17.jpg"
  },
  {
   "n": 18,
   "title": "CTA Demo A: When Summary Statistics Lie",
   "raw": "CTA Demo A: When Summary Statistics Lie\n 🤖 CTA Demo: When Summary Statistics Lie\n What We'll Explore: Can identical summary statistics hide completely different data\n structures?\n Pattern: Verification Through Computation\n\nDemo Staging:\n Turn 1: \"Compute mean of x, mean of y, standard deviation of x, standard deviation of y, and correlation for\n each dataset. Show just the numbers, no plots yet.\"\n\n ⏸ PAUSE for prediction: \"Based on these statistics — which are nearly identical — what do you think\n these datasets look like?\"\n\n Turn 2: \"Now create a 2×2 grid of scatter plots, one for each dataset.\"\n\n\n                                                                                                                18",
   "status": "full",
   "img": "img/l3_18.jpg"
  },
  {
   "n": 19,
   "title": "The Reveal",
   "raw": "The Reveal\n\n\n\n                          [FIGURE F3: Anscombe's Quartet — 2×2\n                                    scatter plot grid]\n\n\n\n\nAll four datasets have nearly identical statistics:\n\n              x̄ ≈ 9.0     ȳ ≈ 7.5     sₓ ≈ 3.3       sᵧ ≈ 2.0   r ≈ 0.816\n                                                                             19",
   "status": "full",
   "img": "img/l3_19.jpg"
  },
  {
   "n": 20,
   "title": "Why This Matters Now",
   "raw": "Why This Matters Now\n  Key Insight: Ask for the right thing! The AI agent computed these statistics correctly.\n  Every number is right. But if you had only asked for summary statistics — which is what\n  most people do — you would have concluded these datasets are essentially the same.\n\nWhat each dataset reveals:\n Dataset I: Clean linear relationship — statistics are   Dataset II: Curved (quadratic) — correlation\n appropriate                                             misses nonlinear structure\n\n\n Dataset III: One outlier drives correlation away        Dataset IV: No relationship — one extreme point\n from r = 1                                              creates illusion\n\n\nAnscombe created these in 1973 to show statisticians they need to look at their data.\n\nThe lesson is MORE relevant in 2026: AI computes what you ask for, not what you need to see.\n                                                                                                           20",
   "status": "full",
   "img": "img/l3_20.jpg"
  },
  {
   "n": 21,
   "title": "Your First Prompting Habit",
   "raw": "Your First Prompting Habit\nAlways request both summary statistics AND appropriate visualizations.\nExample prompt template:\n  \"Please analyze this dataset. Provide:\n\n  (1) Summary statistics including mean, median, standard deviation, and correlation where applicable.\n\n  (2) Appropriate visualizations — histogram for distributions, scatter plots for relationships.\n\n  (3) Any patterns or anomalies you notice.\"\nThis prompt explicitly requests visualizations. Don't rely on the AI to know what you need to see.\n\n  ✓ VERIFY: Validate\n  Cross-check quantitative outputs against visual evidence. If the numbers and pictures tell diﬀerent stories,\n  investigate why.\n\n                                                                                                                 21",
   "status": "full",
   "img": "img/l3_21.jpg"
  },
  {
   "n": 22,
   "title": "Why Distributions Matter",
   "raw": "Why Distributions Matter\nA distribution describes the possible values a random variable can take and how likely each value is.\n\n Formal Definitions:\n Discrete random variable: Probability Mass Function (PMF) gives P(X = x) for each possible value x.\n Continuous random variable: Probability Density Function (PDF) describes relative likelihood;\n\n\n\n  Key Principle: If you know the data-generating process, you can predict the distribution shape. This helps\n  your sanity check of AI outputs — if the shape doesn't match the story, something's wrong.\n\n\n  Example: AI fits a normal distribution to your data. But your data is 'time between customer arrivals.’\n  That should be exponential (right-skewed), not normal (symmetric). The AI assumed that doesn't match reality.\n\n\nThe next four slides introduce distribution families by their generative stories.\nYou don't need to memorize formulas — AI provides those. You need to match the story to the shape.\n                                                                                                               22",
   "status": "full",
   "img": "img/l3_22.jpg"
  },
  {
   "n": 23,
   "title": "Normal Distribution — The Bell Curve",
   "raw": "Normal Distribution — The Bell Curve\n  The Story: Arises when many small, independent eﬀects add\n  together. The Central Limit Theorem explains why.\n\n                                                                                    [Bell curve shape]\nX ~ N(µ, σ²)\nSymbol           Meaning          Role\nµ (mu)           Mean             Center of the distribution\nσ² (sigma²)      Variance         Spread (σ is standard deviation)\n\nProbability Density Function:\n\n\n\n\nKey Properties:\n  • Symmetric around µ\n  • 68-95-99.7 rule: 68% within 1σ, 95% within 2σ, 99.7% within 3σ\n  • Fully determined by just two parameters (µ and σ)\nExamples: Heights, measurement errors, test scores, stock returns (approximately)\n                                                                                                         23",
   "status": "full",
   "img": "img/l3_23.jpg"
  },
  {
   "n": 24,
   "title": "Binomial Distribution — Counting Successes",
   "raw": "Binomial Distribution — Counting Successes\nThe Story: Arises when counting \"successes\" in a fixed number of\nindependent trials, each with the same probability of success.\n                                                                                           [Binomial shape:\nX ~ Binomial(n, p) where X = number of successes                                          symmetric if p=0.5]\n\n\nSymbol        Meaning                                  Constraints\nn             Number of trials                         Positive integer\np             Probability of success on each trial     0≤p≤1\n\nProbability Mass Function:\n\n                                                       , where\n\nKey Properties:\n  • Mean: E[X] = np\n  • Variance: Var(X) = np(1−p)\n  • Shape: symmetric when p = 0.5, skewed otherwise\nExamples: Heads in 50 coin flips, defective items in a batch of 100, patients responding to treatment\n                                                                                                                24",
   "status": "full",
   "img": "img/l3_24.jpg"
  },
  {
   "n": 25,
   "title": "Poisson Distribution — Counting Rare Events",
   "raw": "Poisson Distribution — Counting Rare Events\nThe Story: Arises when counting events in a fixed\ninterval (time, space) when events occur\nindependently at a constant average rate.\n                                                                               [Right-skewed for\nX ~ Poisson(λ), X = number of events                                                small λ]\n\n\nSymbol       Meaning                  Constraints\n\nλ (lambda)   Average rate of events   λ>0\n\nProbability Mass Function:\n\n\n\nKey Properties:\n  • Mean: E[X] = λ\n  • Variance: Var(X) = λ (mean equals variance — a distinctive feature!)\n  • Shape: Right-skewed for small λ, approaches normal for large λ\nExamples: Typos per page, customers per hour, accidents per month, emails per day, mutations per genome region\n                                                                                                                 25",
   "status": "full",
   "img": "img/l3_25.jpg"
  },
  {
   "n": 26,
   "title": "Exponential Distribution — Waiting Times",
   "raw": "Exponential Distribution — Waiting Times\n The Story: Arises when measuring time between\n consecutive events in a Poisson process. If events\n occur at rate λ, waiting time is exponential.\n                                                                                [Decaying curve:\nX ~ Exponential(λ), X = waiting time until next event                         always right-skewed]\n\nSymbol         Meaning                      Constraints\n\nλ (lambda)     Rate parameter               λ>0\n\nProbability Density Function:\n\n\n\nKey Properties:\n  • Mean: E[X] = 1/λ (average waiting time)\n  • Variance: Var(X) = 1/λ²\n  • Memoryless property: P(X > s+t | X > s) = P(X > t) — \"doesn't remember\"\n  how long you've waited\n  • Shape: Always right-skewed, starts high at x=0 and decays\n Connection: Poisson counts events; Exponential measures time between them.\n Examples: Time between customers, time until failure                                                26",
   "status": "full",
   "img": "img/l3_26.jpg"
  },
  {
   "n": 27,
   "title": "Reasoning Under Uncertainty",
   "raw": "Reasoning Under Uncertainty\n                How do we update our beliefs when we get new information?\n\n  Think conditionally               Remember base rates                 Interpret intervals\n                                   The prior probability matters      What confidence intervals\nDistinguish P(A|B) from P(B|A)\n                                           enormously                      actually mean\n\n               These skills matter because AI can compute probabilities correctly\n                but can't judge whether the right probability is being computed.\n\n\n\n\n                                                                                                  27",
   "status": "full",
   "img": "img/l3_27.jpg"
  },
  {
   "n": 28,
   "title": "Conditional Probability — The Foundation",
   "raw": "Conditional Probability — The Foundation\nDefinition: P(A|B) = \"the probability of A given that B has occurred\"\n\n\n\n\n  Intuition: We restrict our universe to only the cases where B happened, then ask how often A\n  also happens within that restricted universe.\nSymbol Definitions:\nSymbol       Meaning\nP(A|B)       Probability of A given B (read: \"A given B\")\n             Probability of both A and B occurring (the\nP(A ∩ B)\n             intersection)\nP(B)         Probability of B (the conditioning event)\n\n  Example: In a deck of 52 cards, P(King | Face card) = 4/12 = 1/3. We restrict to face cards (12 total: 4 kings,\n  4 queens, 4 jacks), then count kings (4).                                                                         28",
   "status": "full",
   "img": "img/l3_28.jpg"
  },
  {
   "n": 29,
   "title": "The Conditional Probability Trap",
   "raw": "The Conditional Probability Trap\n  ⚠ P(A|B) ≠ P(B|A) — These are fundamentally diﬀerent questions!\n\nExample that illustrates the trap:\n P(wet ground | rain) is HIGH                             P(rain | wet ground) is LOWER\n If it rained, the ground is almost certainly wet.        Wet ground could be from sprinklers, dew, spills...\n\n\nWhy this matters for AI supervision:\n • AI might compute the right conditional probability perfectly.\n • But if you asked the wrong question, you get a correct answer to the wrong problem.\n • Medical tests are the classic case:\n\n                    P(disease | positive test) ≠ P(positive test | disease)\n\nThis asymmetry is the source of enormous confusion in real-world decision making.\n                                                                                                                29",
   "status": "full",
   "img": "img/l3_29.jpg"
  },
  {
   "n": 30,
   "title": "The Law of Total Probability",
   "raw": "The Law of Total Probability\nSetup: If events B₁, B₂, ..., Bₙ partition the sample space (mutually exclusive and exhaustive):\n\n\n\n\n  Intuition: To find the total probability of A, sum up the probability of A in each \"bucket\"\n  weighted by how likely each bucket is.\n\nSimple case (two buckets):\n        P(A) = P(A|B) · P(B) + P(A|B') · P(B')\n\n  Example: Email classification\n  • 60% of emails are spam, 40% are legitimate\n  • P(contains \"free\" | spam) = 0.8,\n  P(contains \"free\" | legitimate) = 0.1\n  • P(contains \"free\") = 0.8 × 0.6 + 0.1 × 0.4 = 0.48 + 0.04\n  = 0.52\nThis becomes essential for Bayes' rule — the denominator P(E) is computed this way.                30",
   "status": "full",
   "img": "img/l3_30.jpg"
  },
  {
   "n": 31,
   "title": "Bayes' Rule — Updating Beliefs with Evidence",
   "raw": "Bayes' Rule — Updating Beliefs with Evidence\nThe question Bayes answers: Given that we observed evidence E, how should we update our belief\nabout hypothesis H?\n\n                        P(H|E) = P(E|H) · P(H) / P(E)\nEach component named:\nTerm        Name          Meaning\nP(H|E)      Posterior     Updated belief after seeing evidence\nP(E|H)      Likelihood    How likely is this evidence if H is true?\nP(H)        Prior         Initial belief before seeing evidence\nP(E)        Evidence      Total probability of seeing this evidence\n\n  Key Insight: The prior P(H) — the base rate — has enormous influence on the posterior.\n  A rare hypothesis stays unlikely even with seemingly strong evidence.\n                                                                                             31",
   "status": "full",
   "img": "img/l3_31.jpg"
  },
  {
   "n": 32,
   "title": "Bayes' Rule — The Counting Perspective",
   "raw": "Bayes' Rule — The Counting Perspective\nRemember our counting approach to probability? Bayes becomes intuitive when you count.\n Setup: Imagine 1000 people.\n Some have a disease (D), some don't (D'). A test gives positive (T+) or negative (T−) results.\n The question: Of all positive tests, how many are true positives?\n\nThe counting approach:\n Step 1: Start with base rate — How many of 1000 have the disease?\n Step 2: Apply sensitivity — Of those with disease, how many test positive?\n Step 3: Apply false positive rate — Of those without disease, how many test positive?\n Step 4: Count — True positives / All positives = P(D|T+)\n\n This natural frequency approach makes Bayes intuitive — no formula memorization needed.\n Just count people in each category.\n\n                                                                                                  32",
   "status": "full",
   "img": "img/l3_32.jpg"
  },
  {
   "n": 33,
   "title": "CTA Demo B: The Medical Test Problem",
   "raw": "CTA Demo B: The Medical Test Problem\n\n 🤖 CTA Demo: The Medical Test Problem\n What We'll Explore: How base rates dramatically affect the meaning of a positive test\n Pattern: Verification Through Computation\n\nThe Setup:\n • Disease prevalence: 1% (1 in 100 people have it)\n • Test sensitivity: 99% (if you have it, 99% chance of testing positive)\n • False positive rate: 5% (if you don't have it, 5% chance of testing positive)\n • Question: If you test positive, what's the probability you have the disease?\n\n\n Then: \"Ask CTA to solve using the counting approach with 10,000 people.\"\n                                                                                         33",
   "status": "full",
   "img": "img/l3_33.jpg"
  },
  {
   "n": 34,
   "title": "The Medical Test: Bayes' Rule",
   "raw": "The Medical Test: Bayes' Rule\nE = positive test; H = disease present; H′ = disease absent\nDisease prevalence: 1% (1 in 100 people have it)\n\nTest sensitivity: 99% (if you have it,\n99% chance of testing positive)\nFalse positive rate: 5% (if you don’t have it,\n5% chance of testing positive)\nQuestion: If you test positive, what’s the probability\nyou have the disease?\n\n\n\n                                                              Among people who test\n                                                              positive, about 1 in 6\n                                                              has the disease.\n\n                                                                                       34",
   "status": "full",
   "img": "img/l3_34.jpg"
  },
  {
   "n": 35,
   "title": "The Base Rate Reveal",
   "raw": "The Base Rate Reveal\nThe calculation (counting with 10,000 people):\n\n\n • 100 have disease (1% of 10,000)\n • 9,900 don't have disease\n • Of 100 with disease:         P(disease | positive)\n 99 test positive                    = 99 / 594\n • Of 9,900 without:\n 495 test positive\n • Total positive tests:\n 99 + 495 = 594\n                               ≈ 16.7%\n Key Insight: A 99% accurate test gives only ~17% confidence!\n The low base rate (1%) means most positive tests are false positives.\n There are simply so many more healthy people to generate false alarms.\n                                                                          35",
   "status": "full",
   "img": "img/l3_35.jpg"
  },
  {
   "n": 36,
   "title": "Why Base Rates Are Counter-intuitive",
   "raw": "Why Base Rates Are Counter-intuitive\nThe psychological trap:\nWe focus on the test's accuracy (99%) and ignore how rare the condition is.\nThe math:\nWhen the base rate is low, even a small false positive rate generates many false positives because\nyou're applying it to a huge population of healthy people.\nReal-world implications:\n   Medical screening             Airport security             Fraud detection               Spam filters\n\n\n  ⚠ When AI reports \"high confidence\" in a rare event, always ask: what's the base rate?\n  AI computes P(evidence | hypothesis) correctly — but you need P(hypothesis | evidence).\n  These are not the same thing, and the base rate is what connects them.\n\n\n\n                                                                                                           36",
   "status": "full",
   "img": "img/l3_36.jpg"
  },
  {
   "n": 37,
   "title": "From Point Estimates to Intervals",
   "raw": "From Point Estimates to Intervals\nQuantifying Uncertainty\n\n  The problem with point estimates:\n  A sample mean gives us a single \"best guess\" — but different samples give different\n  estimates. How confident should we be that our estimate is close to the truth?\n\n\n              Point Estimate                                          Confidence Interval\n               x̄ = 170 cm                         →                [167 cm, 173 cm]\n         \"The average height is 170 cm\"                              \"We estimate the true mean is\n            But how precise is this?                                   between 167 and 173 cm\"\n\n\n  Key Insight: Intervals capture uncertainty. A narrow interval means we're fairly precise; a wide interval\n  means there's a lot of uncertainty.\n  When AI gives you a point estimate, always ask: \"What's the uncertainty around this?\"\n                                                                                                              37",
   "status": "full",
   "img": "img/l3_37.jpg"
  },
  {
   "n": 38,
   "title": "Constructing a Confidence Interval",
   "raw": "Constructing a Confidence Interval\nThe formula and its components\n\n\n\n\nEach component explained:\n Symbol        Name                     Meaning\n x̄            Sample mean              Center of the interval — our best estimate\n\n z*            Critical value           1.96 for 95% CI, 2.58 for 99% CI — sets confidence level\n\n s             Sample std dev           Measures data variability — more spread → wider CI\n\n n             Sample size              Number of observations — larger n → narrower CI\n\n s/√n          Standard error           How much x̄ varies across samples — the key quantity\n\nLarger n → narrower CI (more data = more precision) | Higher confidence → wider CI (casting a wider net)38",
   "status": "full",
   "img": "img/l3_38.jpg"
  },
  {
   "n": 39,
   "title": "What \"95% Confidence\" Really Means",
   "raw": "What \"95% Confidence\" Really Means\nThe crucial distinction most people miss\n\n    The true parameter µ is FIXED. The interval VARIES.\n\n          µ (true population mean)                                             The interval [x̄ ± z*·s/√n]\n    [Frequentist view] A specific number that\n                                                                       Depends on which sample you happened to\n   exists in reality. It doesn't move around. We\n                                                                       draw. Different sample → different interval.\n             just don't know what it is.\n\n\n\nThe correct interpretation:\n   If we repeated the sampling procedure many times and constructed an interval each time,\n                about 95% of those intervals would contain the true parameter µ.\n  Analogy: A machine makes nets calibrated to catch a fish 95% of the time. Once you have a specific net, it either catches\n  the fish or it doesn't — the fish doesn't have a \"95% probability\" of being caught.                                         39",
   "status": "full",
   "img": "img/l3_39.jpg"
  },
  {
   "n": 40,
   "title": "The Common Misconception",
   "raw": "The Common Misconception\nAnd why it matters\n     WRONG: \"There's a 95% probability that the true mean is in this interval.\"\n\n\nWhy it's wrong:\n Probability describes uncertainty about random things. Once you've computed a specific\n interval from your data, there's nothing random left. The true mean µ is either inside your\n interval or it isn't. You just don't know which.\n\nWhy it matters:\n The misconception leads to overconfidence. If your sample happened to be unusual, your\n interval might be one of the 5% that misses entirely — and you'd have no way of knowing.\n The correct interpretation keeps you appropriately humble.\n                                                                                              40",
   "status": "full",
   "img": "img/l3_40.jpg"
  },
  {
   "n": 41,
   "title": "The Common Misconception",
   "raw": "The Common Misconception\n\n\n\n\n                           41",
   "status": "partial",
   "img": "img/l3_41.jpg"
  },
  {
   "n": 42,
   "title": "CTA Demo C:",
   "raw": "CTA Demo C:\nWhat Confidence Intervals Really Mean\n 🤖 CTA Demo: What Confidence Intervals Really Mean\n What We'll Explore: The correct interpretation of confidence intervals (it's not what most people think)\n Pattern: Iterative Refinement\n\nCommon misconception to test:\n\n \"There's a 95% probability that the true mean is in this interval.\" ← WRONG\n\nDemo Prompt:\n Turn 1: \"Explain what a 95% confidence interval means.\"\n\n\n Turn 2: \"Is it correct to say there's a 95% probability the true value is in the interval?\"\n\n\n Turn 3: \"Demonstrate with a simulation showing many intervals from repeated sampling.\"\n                                                                                                            42",
   "status": "full",
   "img": "img/l3_42.jpg"
  },
  {
   "n": 43,
   "title": "Interpreting AI-Generated Intervals",
   "raw": "Interpreting AI-Generated Intervals\nWhen AI gives you a confidence interval, ask:\n 1. What assumptions were made? (Normality? Independence? Sufficient sample size?)\n 2. Is the interval for a mean, proportion, or something else? (Different formulas apply)\n 3. What's the practical significance of the width? (A narrow interval isn't useful if the range still spans\n \"good\" to \"bad\")\n\nExample prompt for clarity:\n \"Please provide a 95% confidence interval for the mean. Explain what assumptions you're making and whether\n they're reasonable for this data.\"\n\n\n ✓ VERIFY: Inspect\n Examine intermediate results and assumptions. Don't just accept the interval; check that the underlying\n assumptions are met.\n\n A narrow interval from a biased sample is worse than a wide interval from a\n representative sample.\n                                                                                                               43",
   "status": "full",
   "img": "img/l3_43.jpg"
  },
  {
   "n": 44,
   "title": "Making Decisions with Data",
   "raw": "Making Decisions with Data\n              How do we use data to make decisions about claims?\n\n Understand hypothesis testing                          Interpret p-values correctly\nThe logic of \"innocent until proven guilty\"             What they mean and don't mean\n\n\n  These skills matter because hypothesis testing is one of the most misused statistical tools,\nand AI will compute p-values without questioning whether they answer your actual question.\n\n\n\n                                                                                                 44",
   "status": "full",
   "img": "img/l3_44.jpg"
  },
  {
   "n": 45,
   "title": "The Logic of Hypothesis Testing",
   "raw": "The Logic of Hypothesis Testing\n  Analogy: \"Innocent until proven guilty\" — We assume the boring explanation is true, then ask:\n  how surprising is our data?\nKey Terms:\nTerm                     Symbol          Meaning\nNull hypothesis          H₀              The default assumption (no effect, no difference)\nAlternative hypothesis   H₁ or Hₐ        What we're trying to find evidence for\nTest statistic           T               A number from the data measuring departure from H₀\nP-value                  p               P(data this extreme or more | H₀ is true)\nSignificance level       α               Threshold for \"surprising enough\" (typically 0.05)\n\n\n   The Logic: If data is very surprising under H₀ (small p-value), we have evidence against H₀. If p < α, we\n   reject H₀. Otherwise, we fail to reject (not the same as accepting H₀!).\n\n\n                                                                                                               45",
   "status": "full",
   "img": "img/l3_45.jpg"
  },
  {
   "n": 46,
   "title": "The Hypothesis Testing Procedure",
   "raw": "The Hypothesis Testing Procedure\n Step 1: State hypotheses — Define H₀ (null) and H₁ (alternative)\n Step 2: Choose significance level α — Typically 0.05 (willing to be wrong 5% of time)\n Step 3: Collect data and compute test statistic — Measure departure from H₀\n Step 4: Calculate p-value — Probability of data this extreme or more extreme if H₀ is true\n Step 5: Decision — If p < α, reject H₀; otherwise, fail to reject H₀\n\n\n\n Example: Testing whether a coin is fair\n • H₀: p = 0.5 (coin is fair)\n • H₁: p ≠ 0.5 (coin is biased)\n • Data: Flip 100 times, observe 65 heads\n • Question: Is 65/100 surprising enough under \"fair coin\" to reject H₀?\n\n                                                                                              46",
   "status": "full",
   "img": "img/l3_46.jpg"
  },
  {
   "n": 47,
   "title": "What the p-Value Actually Means",
   "raw": "What the p-Value Actually Means\n     p-value = P(observing data this extreme or more extreme | H₀ is true)\n\n The p-value is a probability about the DATA, not about the hypothesis.\n\nWhat it IS:                                     What it is NOT:\n • A measure of how surprising our data           • NOT P(H₀ is true)\n would be if H₀ were true                         • NOT P(H₁ is false)\n • Smaller p = more surprising = stronger         • NOT P(you made an error)\n evidence against H₀\n\n\n ⚠ A p-value of 0.03 does NOT mean \"3% chance the null is true.\" It means \"if the null were\n true, there's a 3% chance of seeing data this extreme.\"\n                                                                                              47",
   "status": "full",
   "img": "img/l3_47.jpg"
  },
  {
   "n": 48,
   "title": "CTA Demo D: P-Value Misconceptions",
   "raw": "CTA Demo D: P-Value Misconceptions\n  🤖 CTA Demo: P-Value Misconceptions\n  What We'll Explore: Testing common misconceptions about what p-values mean\n  Pattern: Challenging for Completeness\n\nDemo Prompt:\n\n  Turn 1: \"If I get a p-value of 0.03, what does that mean?\"\n\n\n  Turn 2: \"Does p = 0.03 mean there's a 3% chance the null hypothesis is true?\"\n\n\n  Turn 3: \"If I replicate the study, what's the probability I'll get a significant result again?\"\n\n\nNote: CTA should correctly identify these as misconceptions.\nWatch for subtle errors in phrasing — this is where AI can still mislead.\n                                                                                                    48",
   "status": "full",
   "img": "img/l3_48.jpg"
  },
  {
   "n": 49,
   "title": "The P-Value Misconception Reveal",
   "raw": "The P-Value Misconception Reveal\nMisconception 1: \"p = 0.03 means 3% chance H₀ is true\"\nReality: P-value tells you nothing about P(H₀ is true). It's P(data | H₀), not P(H₀ | data).\nThis confusion swaps the conditional!\n\nMisconception 2: \"p < 0.05 means the effect is important\"\nReality: Statistical significance ≠ practical significance.\nA tiny, meaningless effect can be statistically significant with large enough n.\n\nMisconception 3: \"p = 0.03 means 97% chance of replication\"\nReality: Replication probability depends on effect size, sample size, and power — not the original p-value.\nMany \"significant\" findings fail to replicate.\n\n\n AI will compute p-values correctly.\n The danger is in misinterpreting what they mean — and AI explanations can still contain subtle errors.\n\n\n                                                                                                              49",
   "status": "full",
   "img": "img/l3_49.jpg"
  },
  {
   "n": 50,
   "title": "Statistical vs. Practical Significance",
   "raw": "Statistical vs. Practical Significance\nKey distinction:\n             Statistical significance                               Practical significance\n             p < α (unlikely under H₀)                       Is the eﬀect large enough to matter?\n\n\n  Example: Blood pressure drug study\n  • Study finds new drug lowers blood pressure by 0.5 mmHg\n  • With n = 100,000 patients, this is statistically significant (p < 0.001)\n  • But 0.5 mmHg is clinically meaningless — normal variation is ±10 mmHg!\n\nEffect Size — Measuring Magnitude:\n        Cohen's d = (x̄₁ − x̄₂) / spooled      Small: d ≈ 0.2 Medium: d ≈ 0.5 Large: d ≈ 0.8\n\n\n  Key Insight: Always ask for effect sizes alongside p-values. A significant result with a tiny\n  effect size may not be worth acting on.\n\n  🤖 CTA Learning exercise.                                                                         50",
   "status": "full",
   "img": "img/l3_50.jpg"
  },
  {
   "n": 51,
   "title": "Today's Key Takeaways",
   "raw": "Today's Key Takeaways\nFive skills you built today:\n 1. Always visualize — Statistics can hide structure (Anscombe's Quartet)\n\n\n 2. Know your distributions — Match the generative story to the shape\n\n\n 3. Remember base rates — P(H|E) ≠ P(E|H), and priors matter enormously\n\n\n 4. Interpret intervals correctly — 95% is about the procedure, not the parameter\n\n\n 5. Distinguish significance types — Statistical ≠ practical; always ask for effect sizes\n\n\n Unifying theme: AI computes correctly; your job is to ask the right questions and interpret\n wisely.\n\n                                                                                               51",
   "status": "full",
   "img": "img/l3_51.jpg"
  },
  {
   "n": 52,
   "title": "Prompting Habits Summary",
   "raw": "Prompting Habits Summary\nHabits we developed today:\n 1. \"Provide summary statistics AND appropriate visualizations.\"\n\n 2. \"Explain what assumptions you're making and whether they're reasonable.\"\n\n 3. \"Show me the calculation step by step using natural frequencies / counting.\"\n\n 4. \"What is the effect size, not just the p-value?\"\n\n 5. \"Is this result practically significant in the context of [your domain]?\"\n\n\n Meta-habit: \"Always ask CTA to explain its reasoning, not just give answers.\"\n\n\n Trust but VERIFY. AI is a powerful tool, not an oracle.\n                                                                                   52",
   "status": "full",
   "img": "img/l3_52.jpg"
  },
  {
   "n": 53,
   "title": "Form your course project group",
   "raw": "Form your course project group\n         3 people/group\n     Deadline Sep 23 at 4 pm\n   If your grouping info is not\n        received by then,\nthe TAs will assign you to a group.\n                                      53",
   "status": "partial",
   "img": "img/l3_53.jpg"
  },
  {
   "n": 54,
   "title": "Homework #1 will be released later through emails.",
   "raw": "Homework #1 will be released later through emails.\n\n\n\n\n                                                     54",
   "status": "partial",
   "img": "img/l3_54.jpg"
  },
  {
   "n": 55,
   "title": "TA contacts",
   "raw": "TA contacts\n                    Homework #1\n\n                      Yushi Du:                                                Zhengyang Hu:\nTuesday 4-5PM         u3012725@connect.hku.hk                                  u3010250@connect.hku.hk\n                      https://us04web.zoom.us/j/78561597481\n\n\n\n               Jun Dai:                                                        Lulu Cai:\nThursday 3-4PM jundai332@gmail.com                                             u303011209@connect.hku.hk\n               https://rochester.zoom.us/j/97202452759\n\n\n\n     TA oﬀice hours on Zoom! Two slots (1 hour each) on Tuesday and Thursday\n\n\n                                                                                                           55",
   "status": "full",
   "img": "img/l3_55.jpg"
  },
  {
   "n": 56,
   "title": "Questions?",
   "raw": "Questions?\nCONTACT INFORMATION\n\n\n\n\n                  Instructor: Prof. Yang Liu   Office Hours: 5:00 - 5:50 PM, Thursdays\n                  Email: yliu12@hku.hk         Location: CB-714, Chow Yei Ching Building\n\n\nyangliu.mit.edu                                Let me know if you want remote!\n\n\n\n\n🤖 CTA is your 24/7 interactive and responsive learning partner!\n\n                                                                                           57",
   "status": "full",
   "img": "img/l3_56.jpg"
  }
 ]
};

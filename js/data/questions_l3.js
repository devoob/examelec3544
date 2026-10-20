/* Question bank — Lecture 3 (pages 1–56).
   Probability rules, distributions, Bayes/base rates, CIs, hypothesis testing, significance. */
(function () {
  var L = 3;

  
  
  Q({ id: "L3-5-Q1", lec: L, pg: [5], tp: "Probability", sb: "Interpretations", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which pairing of probability interpretations is correct?",
    op: [
      "Frequentist: degree of belief; Subjective: long-run frequency",
      "Frequentist: long-run frequency over repeated trials; Subjective: degree of belief/confidence (Bayesian thinking)",
      "Both interpretations are identical",
      "Subjective probability cannot be between 0 and 1"
    ], an: 1,
    at: "Frequentist: fraction of trials showing the outcome if the experiment repeated many times. Subjective: our degree of belief/confidence (connects to Bayesian thinking).",
    sl: "Slide 5 scale 0–1 (impossible → certain) + two interpretations + coin example: flip 1000 times, ~500 heads, P(heads) ≈ 0.5.",
    ex: "Probability reflects long-run frequency under the frequentist view.",
    mt: "Swapping the two interpretations." });

  Q({ id: "L3-6-Q1", lec: L, pg: [6], tp: "Random variables", sb: "Discrete/continuous", df: "medium", ty: "calc", so: "lecture",
    pr: "Let X = number of heads in 3 fair coin flips. (a) Is X discrete or continuous? (b) Give the full probability distribution. (c) Compute P(X = 2 or more).",
    at: "(a) Discrete (countable outcomes 0–3). (b) P(X=0)=1/8, P(X=1)=3/8, P(X=2)=3/8, P(X=3)=1/8. (c) P(X≥2) = 3/8 + 1/8 = 1/2.",
    sl: "Binomial with n=3, p=0.5: C(3,k)/8. Distribution sums to 1: 1/8+3/8+3/8+1/8 = 1.",
    ex: "A random variable assigns a numerical value to each outcome — the bridge from events to distributions.",
    mt: "Forgetting X can be 0; treating heads/tails as continuous." });

  Q({ id: "L3-7-Q1", lec: L, pg: [7], tp: "Population/sample", sb: "Parameters vs statistics", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which naming convention is correct?",
    op: [
      "Population: Roman letters (x̄, s); Sample: Greek letters (µ, σ)",
      "Population: Greek letters (µ, σ) — true parameters; Sample: Roman letters (x̄, s) — statistics",
      "Both use Greek letters",
      "µ and σ are statistics; x̄ and s are parameters"
    ], an: 1,
    at: "Population parameters: Greek (µ mean, σ std dev). Sample statistics: Roman (x̄ sample mean, s sample std dev).",
    sl: "Slide 7: population = complete set (often large/infinite) with true parameters; sample = subset actually observed, giving statistics. Key insight: we almost never see the whole population — we infer.",
    ex: "Naming convention table on the slide has blank cells in extraction (Mean, Standard Deviation rows) — the mapping is the table's meaning.",
    mt: "Reversing Greek/Roman assignment." });

  Q({ id: "L3-8-Q1", lec: L, pg: [8], tp: "Notation", sb: "Symbol table", df: "easy", ty: "mcq", so: "lecture",
    pr: "Which notation pairing is correct?",
    op: [
      "n = sample size; x̄ = sample mean; s = sample std dev; P(A|B) = probability of A given B",
      "n = population size; s = sample mean",
      "x̄ = population mean; s = variance",
      "P(A|B) = probability of B given A"
    ], an: 0,
    at: "n sample size; xᵢ the i-th observation; x̄ sample mean; s sample standard deviation; P(A) probability of event A; P(A|B) probability of A given B has occurred.",
    sl: "Slide 8 table with examples: n=100 students; x₃=85; x̄=78.5; s=12.3; P(rain)=0.3; P(rain|cloudy)=0.6.",
    ex: "Bookmarked on the slide: used throughout the course.",
    mt: "Reversing the conditional: P(A|B) conditions on B." });

  Q({ id: "L3-9-Q1", lec: L, pg: [9], tp: "Events", sb: "RV conditions", df: "medium", ty: "calc", so: "lecture",
    pr: "For X = heads in 3 flips, let A = {X ≥ 2}. Compute P(A) and express A in event notation.",
    at: "A = {X = 2} ∪ {X = 3}; P(A) = P(X=2) + P(X=3) = 3/8 + 1/8 = 1/2.",
    sl: "Slide 9 translation table: X=2 ↔ A={X=2}; X>3 ↔ B={X>3}; X≤1 ↔ C={X≤1}. Example computes P(X≥2)=1/2.",
    ex: "An event is a statement about what values a random variable takes — this lets P(A|B) be defined via RV conditions.",
    mt: "Double-counting P(X=2) and P(X=3) overlap — they are disjoint." });

  Q({ id: "L3-10-Q1", lec: L, pg: [10], tp: "Probability rules", sb: "Three rules", df: "medium", ty: "calc", so: "lecture",
    pr: "State the complement, addition, and multiplication rules. Then: (a) if P(rain)=0.3, P(no rain)? (b) P(roll 1 or 2 on a die)? (c) P(two heads in a row with a fair coin)?",
    at: "Complement: P(not A)=1−P(A). Addition: P(A or B)=P(A)+P(B)−P(A and B); mutually exclusive ⇒ P(A)+P(B). Multiplication: P(A and B)=P(A)P(B|A); independent ⇒ P(A)P(B). (a) 0.7; (b) 2/6; (c) 0.25.",
    sl: "Slide 10 three rules with intuition and examples exactly as computed.",
    ex: "Foundations for Bayes' rule (the multiplication rule rearranges into the conditional definition).",
    mt: "Forgetting to subtract the overlap in the addition rule; multiplying without checking independence." });

  Q({ id: "L3-11-Q1", lec: L, pg: [11], tp: "Counting", sb: "Equally likely outcomes", df: "easy", ty: "calc", so: "lecture",
    pr: "Using the counting perspective, compute P(drawing a red card) from a standard deck, and explain how counting sets up Bayes.",
    at: "P(red) = 26/52 = 0.5 (26 red = hearts + diamonds, 52 total). Counting perspective: 'of all positive tests, how many are true positives?' is a counting question — it makes Bayes intuitive rather than mysterious.",
    sl: "Slide 11: counting works when all outcomes are equally likely; example 26/52.",
    ex: "The natural-frequency approach returns for the medical test (slides 32–35).",
    mt: "Using 26/52 for 'red face card' style questions without adjusting the denominator." });

  Q({ id: "L3-12-Q1", lec: L, pg: [12], tp: "Descriptives", sb: "Mean vs median", df: "medium", ty: "mcq", so: "lecture",
    pr: "When should you prefer the median over the mean?",
    op: [
      "When the distribution is symmetric",
      "For skewed distributions or when outliers are present (e.g., income, housing prices); use the mean for roughly symmetric data without outlier concerns",
      "Always — the median is strictly better",
      "Only for categorical data"
    ], an: 1,
    at: "Median for skewed distributions/outliers (income, housing). Mean when roughly symmetric and outliers not a concern. Limitation of mean: one extreme value can pull it dramatically.",
    sl: "Slide 12 mean (balance point) and median (middle; 50% below/above) with the 'when to use which' note.",
    ex: "Pairs with spread measures (slide 13): mean+SD vs median+IQR.",
    mt: "Using the mean for income-like skewed data — the classic domain example." });

  Q({ id: "L3-13-Q1", lec: L, pg: [13], tp: "Descriptives", sb: "Spread measures", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which spread pairing is correct?",
    op: [
      "Mean + std dev go together (both sensitive to outliers); median + IQR go together (both resistant)",
      "Mean + IQR; median + std dev",
      "IQR = Q1 − Q3",
      "Standard deviation divides by n"
    ], an: 0,
    at: "Mean + SD (both sensitive); Median + IQR (both resistant, IQR = Q3 − Q1). Std dev divides by n−1 (Bessel's correction: degrees of freedom).",
    sl: "Slide 13: std dev = typical distance from mean (square root of variance, same units); note on n−1; IQR = middle 50%, robust. Pattern note at the bottom.",
    ex: "The 'choose the pair that fits your data' pattern is an exam-friendly one-liner.",
    mt: "Writing IQR = Q1 − Q3 (must be Q3 − Q1, non-negative)." });

  Q({ id: "L3-14-Q1", lec: L, pg: [14], tp: "Covariance/correlation", sb: "Units problem", df: "medium", ty: "mcq", so: "lecture",
    pr: "Why do we standardize covariance into correlation?",
    op: [
      "Because covariance is always negative",
      "Because covariance magnitude depends on units — dividing by the standard deviations removes unit dependence, giving dimensionless r",
      "To make r range from 0 to 1",
      "Because covariance cannot be computed from samples"
    ], an: 1,
    at: "Covariance magnitude depends on units (hard to interpret); r = Cov(X,Y)/(sₓ·sᵧ) is dimensionless. Warning on slide: sample (co-)variance uses 1/(n−1).",
    sl: "Slide 14 Cov(X,Y) sign interpretations + the units problem + Pearson r formula + symbol table (Cov(X,Y), sₓ,sᵧ, r).",
    ex: "This r is the same correlation used in L5's multicollinearity diagnostics.",
    mt: "Claiming r ∈ [0,1] — it is [−1,1]." });

  Q({ id: "L3-15-Q1", lec: L, pg: [15], tp: "Correlation", sb: "Limitations", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which of the three critical limitations of correlation is stated?",
    op: [
      "Correlation measures nonlinear association perfectly",
      "Correlation only measures LINEAR association — a perfect curved relationship can have r ≈ 0; correlation does not imply causation; identical correlations can hide completely different data structures",
      "Correlation requires equal variances",
      "r can exceed 1 for large samples"
    ], an: 1,
    at: "Three limitations: linear-only; no causation; identical r can hide different structures.",
    sl: "Slide 15: range/interpretation (+1 perfect positive, 0 none, −1 perfect negative); full formula; three limitations.",
    ex: "The third limitation sets up Anscombe's quartet (slide 17).",
    mt: "Believing r = 0 rules out any relationship — only linear ones." });

  Q({ id: "L3-16-Q1", lec: L, pg: [16], tp: "Visualization", sb: "Three tools", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which chart reveals 'linear vs nonlinear, clusters, outliers, strength'?",
    op: ["Histogram", "Box plot", "Scatter plot", "Bar chart"], an: 2,
    at: "Scatter plot — relationship between two variables; reveals linear vs nonlinear, clusters, outliers, strength.",
    sl: "Slide 16: Histogram (distribution of one variable; symmetry, skewness, modality, outliers); Box plot (five-number summary; outliers beyond 1.5×IQR); Scatter plot (association between X and Y).",
    ex: "'Statistics summarize. Visualizations reveal structure. You need both.'",
    mt: "Using a histogram for bivariate association." });

  Q({ id: "L3-17-Q1", lec: L, pg: [17], tp: "Anscombe", sb: "Dataset", df: "medium", ty: "short", so: "lecture",
    pr: "Anscombe's quartet: four datasets share almost identical means, standard deviations, and correlations (r ≈ 0.82) but look completely different when plotted. Describe the structure of each dataset (I, II, III, IV).",
    at: "Dataset I: linear. II: curved (quadratic). III: linear with one outlier. IV: vertical set plus one extreme point. Identical statistics: x̄ ≈ 9.0, ȳ ≈ 7.5, sₓ ≈ 3.3, sᵧ ≈ 2.0, r ≈ 0.816.",
    sl: "Four 11-point datasets sharing x̄ ≈ 9.0, ȳ ≈ 7.5, sₓ ≈ 3.3, sᵧ ≈ 2.0, r ≈ 0.816 — identical statistics, different structures.",
    ex: "Anscombe's purpose: show statisticians they need to look at their data — 'The lesson is MORE relevant in 2026: AI computes what you ask for, not what you need to see.'",
    mt: "Mixing up which dataset has which shape: I linear; II quadratic; III linear+outlier; IV vertical+extreme point.",
    mr: "MT-2f-ii" });

  Q({ id: "L3-19-Q1", lec: L, pg: [19], tp: "Anscombe", sb: "The reveal", df: "medium", ty: "calc", so: "lecture",
    pr: "State the shared statistics of Anscombe's quartet and describe each dataset's shape.",
    at: "x̄ ≈ 9.0, ȳ ≈ 7.5, sₓ ≈ 3.3, sᵧ ≈ 2.0, r ≈ 0.816. Dataset I: clean linear relationship. II: curved (quadratic) — correlation misses nonlinear structure. III: one outlier drives correlation away from r = 1. IV: no relationship — one extreme point creates the illusion.",
    sl: "Slide 19 [FIGURE F3] 2×2 scatter grid + shared-statistics box.",
    ex: "Every number computed correctly — but summary-only analysis concludes 'same data'. Visualization is mandatory.",
    mt: "Claiming one of the four has a different r — all ≈ 0.816." });

  Q({ id: "L3-20-Q1", lec: L, pg: [20], tp: "Anscombe", sb: "Why it matters now", df: "medium", ty: "mcq", so: "lecture",
    pr: "Four different datasets share nearly identical means, standard deviations, and correlation (r ≈ 0.82) but look completely different when plotted. What is the correct lesson?",
    op: ["Summary statistics are sufficient for comparing datasets", "Identical summary statistics can hide completely different structures — always visualize before concluding", "The correlation must be wrong", "The datasets must contain data-entry errors"], an: 1,
    at: "Descriptive statistics summarize but do not reveal structure: the same means, standard deviations, and correlation accompanied four completely different datasets (Anscombe, 1973). Always pair statistics with visualization.",
    sl: "Summary-only analysis concludes the datasets are the same; plots reveal linear / quadratic / outlier-driven / vertical structures.",
    ex: "This is the canonical 'ask for the right thing' lesson for AI supervision.",
    mt: "Blaming AI arithmetic — the failure is in the request, not computation." });

  
  Q({ id: "L3-22-Q1", lec: L, pg: [22], tp: "Distributions", sb: "PMF vs PDF", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which definitions of PMF and PDF are correct?",
    op: [
      "PMF for continuous variables; PDF for discrete",
      "PMF gives P(X = x) for each possible value of a discrete RV; PDF describes relative likelihood for a continuous RV",
      "PMF and PDF are the same function",
      "PDF gives exact point probabilities"
    ], an: 1,
    at: "Discrete: PMF gives P(X = x). Continuous: PDF describes relative likelihood (probabilities come from areas under the curve).",
    sl: "Slide 22 formal definitions + key principle: if you know the data-generating process, you can predict the distribution shape — a sanity check for AI outputs. Example: time between customer arrivals should be exponential (right-skewed), not normal.",
    ex: "The next four slides (23–26) are organized by generative story: normal, binomial, Poisson, exponential — 'match the story to the shape', no formula memorization required.",
    mt: "Saying a PDF value IS a probability — for continuous variables point probabilities are zero." });

  Q({ id: "L3-23-Q1", lec: L, pg: [23], tp: "Distributions", sb: "Normal", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which properties of the normal distribution are listed?",
    op: [
      "Symmetric around µ; 68-95-99.7 rule (68% within 1σ, 95% within 2σ, 99.7% within 3σ); fully determined by µ and σ",
      "Right-skewed for small µ",
      "Mean equals variance",
      "Only defined for positive values"
    ], an: 0,
    at: "Symmetric around µ; 68-95-99.7 rule; determined by two parameters (µ, σ). Story: many small independent effects add together (Central Limit Theorem).",
    sl: "Slide 23: X ~ N(µ, σ²); table (µ center; σ² spread); PDF (shown as image on slide); properties; examples: heights, measurement errors, test scores, stock returns (approximately).",
    ex: "The 68-95-99.7 rule is a likely numeric exam item.",
    mt: "Confusing σ (std) and σ² (variance) roles; thinking normal is bounded." });

  Q({ id: "L3-24-Q1", lec: L, pg: [24], tp: "Distributions", sb: "Binomial", df: "medium", ty: "calc", so: "lecture",
    pr: "X ~ Binomial(n, p). State the story, the mean and variance formulas, and compute E[X] and Var(X) for n = 50 flips, p = 0.5.",
    at: "Story: counting successes in a fixed number of independent trials with constant success probability p. E[X] = np; Var(X) = np(1−p). For n=50, p=0.5: E[X] = 25; Var(X) = 50×0.5×0.5 = 12.5.",
    sl: "Slide 24: X ~ Binomial(n, p); constraints n positive integer, 0 ≤ p ≤ 1; PMF shown as image; properties: mean np, variance np(1−p); shape symmetric when p = 0.5, skewed otherwise. Examples: heads in 50 flips, defectives in 100, patients responding.",
    ex: "The 3-coin-flip example (slide 6) is Binomial(3, 0.5).",
    mt: "Using np for variance; forgetting trials must be independent with constant p." });

  Q({ id: "L3-25-Q1", lec: L, pg: [25], tp: "Distributions", sb: "Poisson", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the distinctive feature of the Poisson distribution?",
    op: [
      "Mean equals variance (Var(X) = E[X] = λ)",
      "It has two parameters",
      "It is always symmetric",
      "It models waiting times"
    ], an: 0,
    at: "Mean E[X] = λ and variance Var(X) = λ — mean equals variance, a distinctive feature. Story: counting events in a fixed interval at a constant average rate, independently. Shape: right-skewed for small λ, approaches normal for large λ.",
    sl: "Slide 25: X ~ Poisson(λ), λ > 0; examples: typos per page, customers per hour, accidents per month, emails per day, mutations per genome region.",
    ex: "Connection: Poisson counts events; Exponential measures time between them (slide 26).",
    mt: "Giving Poisson a variance of λ² — that is the exponential's variance." });

  Q({ id: "L3-26-Q1", lec: L, pg: [26], tp: "Distributions", sb: "Exponential", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which properties belong to the exponential distribution?",
    op: [
      "Mean 1/λ; variance 1/λ²; memoryless: P(X > s+t | X > s) = P(X > t); always right-skewed",
      "Mean λ; variance λ; symmetric",
      "Mean 1/λ; variance λ; memoryless",
      "Mean np; variance np(1−p)"
    ], an: 0,
    at: "Mean E[X] = 1/λ (average waiting time); Var(X) = 1/λ²; memoryless property P(X > s+t | X > s) = P(X > t); always right-skewed starting high at x=0 and decaying.",
    sl: "Slide 26: story = time between consecutive events in a Poisson process at rate λ; examples: time between customers, time until failure.",
    ex: "Slide 22's example: time between customer arrivals should be exponential (right-skewed), not normal.",
    mt: "Assigning mean λ instead of 1/λ; forgetting memorylessness." });

  Q({ id: "L3-28-Q1", lec: L, pg: [28], tp: "Conditional probability", sb: "Definition", df: "medium", ty: "calc", so: "lecture",
    pr: "State the definition of conditional probability. Then compute P(King | Face card) in a standard deck.",
    at: "P(A|B) = P(A ∩ B)/P(B). P(King | Face) = 4/12 = 1/3 (restrict to 12 face cards: 4 kings, 4 queens, 4 jacks; count 4 kings).",
    sl: "Slide 28: definition + intuition (restrict the universe to cases where B happened) + symbol table (P(A|B), P(A∩B), P(B)) + card example.",
    ex: "The conditional definition rearranges into the multiplication rule P(A∩B) = P(A|B)P(B).",
    mt: "Dividing by the full sample space (52) instead of the condition (12)." });

  Q({ id: "L3-29-Q1", lec: L, pg: [29], tp: "Conditional probability", sb: "The trap", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which example illustrates the P(A|B) ≠ P(B|A) trap?",
    op: [
      "P(wet ground | rain) is high; P(rain | wet ground) is lower (sprinklers, dew, spills)",
      "P(rain | cloudy) = P(cloudy | rain)",
      "P(King | Face) = P(Face | King)",
      "Both directions are always equal"
    ], an: 0,
    at: "P(wet ground | rain) HIGH vs P(rain | wet ground) LOWER — wet ground can come from sprinklers, dew, spills. Medical version: P(disease | positive test) ≠ P(positive test | disease).",
    sl: "Slide 29 warning + why it matters for AI supervision: AI might compute the right conditional perfectly, but if you asked the wrong question you get a correct answer to the wrong problem.",
    ex: "This asymmetry is 'the source of enormous confusion in real-world decision making'.",
    mt: "Assuming conditionals are symmetric; this trap is exactly what Bayes' rule resolves." });

  Q({ id: "L3-30-Q1", lec: L, pg: [30], tp: "Law of total probability", sb: "Email example", df: "medium", ty: "calc", so: "lecture",
    pr: "60% of emails are spam; P('free' | spam) = 0.8; P('free' | legitimate) = 0.1. Compute P(contains 'free') using the law of total probability.",
    at: "P(free) = 0.8×0.6 + 0.1×0.4 = 0.48 + 0.04 = 0.52.",
    sl: "Slide 30: general partition formula (shown as image) + two-bucket case P(A) = P(A|B)P(B) + P(A|B')P(B') + the email computation.",
    ex: "This denominator P(E) is what makes Bayes' rule computable.",
    mt: "Multiplying 0.8 by 0.4 (wrong complement); forgetting to weight by class priors." });

  Q({ id: "L3-31-Q1", lec: L, pg: [31], tp: "Bayes", sb: "Terms", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which naming of Bayes' rule terms is correct?",
    op: [
      "P(H|E) prior; P(E|H) posterior",
      "P(H|E) posterior (updated belief); P(E|H) likelihood; P(H) prior; P(E) evidence",
      "P(H) likelihood; P(E) prior",
      "P(H|E) = P(H)P(E)/P(E|H)"
    ], an: 1,
    at: "P(H|E) = P(E|H)P(H)/P(E): posterior = likelihood × prior / evidence. P(H) prior (initial belief); P(E|H) likelihood; P(E) total probability of evidence.",
    sl: "Slide 31 formula + term table + key insight: the prior (base rate) has enormous influence on the posterior — a rare hypothesis stays unlikely even with seemingly strong evidence.",
    ex: "The medical test (next slides) demonstrates the rare-hypothesis point numerically.",
    mt: "Writing the rule upside-down (P(H|E) as prior)." });

  Q({ id: "L3-32-Q1", lec: L, pg: [32], tp: "Bayes", sb: "Counting approach", df: "medium", ty: "short", so: "lecture",
    pr: "Describe the four counting steps used to make Bayes intuitive.",
    at: "Imagine 1000 people; Step 1: start with base rate — how many have the disease? Step 2: apply sensitivity — of those, how many test positive? Step 3: apply false positive rate — of those without disease, how many test positive? Step 4: count — true positives / all positives = P(D | T+).",
    sl: "Slide 32 setup + four steps; 'the natural frequency approach makes Bayes intuitive — no formula memorization needed. Just count people in each category.'",
    ex: "Used in the next slide's 10,000-person medical test computation.",
    mt: "Skipping step 3 — false positives among the healthy dominate when prevalence is low." });

  Q({ id: "L3-33-Q1", lec: L, pg: [33], tp: "Bayes", sb: "Medical test setup", df: "medium", ty: "calc", so: "lecture",
    pr: "Disease prevalence 1%, sensitivity 99%, false positive rate 5%. With the counting approach on 10,000 people, compute P(disease | positive test).",
    at: "100 have disease; 9,900 don't. Of the 100: 99 test positive. Of the 9,900: 495 test positive. Total positives = 594. P(D|+) = 99/594 ≈ 16.7%.",
    sl: "Slide 33 setup + slide 35 computation: 99/594 ≈ 16.7% — about 1 in 6 positives has the disease.",
    ex: "Key insight: a 99% accurate test gives only ~17% confidence at 1% prevalence — the low base rate means most positives are false positives.",
    mt: "Answering 99% (sensitivity) — that is P(+|D), not P(D|+).",
    mr: null });

  
  
  Q({ id: "L3-37-Q1", lec: L, pg: [37], tp: "Confidence intervals", sb: "Point vs interval", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the problem with point estimates, and what do intervals add?",
    op: [
      "Point estimates are always biased; intervals remove bias",
      "A sample mean gives a single best guess, but different samples give different estimates — intervals capture uncertainty; narrow = precise, wide = uncertain",
      "Intervals are always exact",
      "Point estimates cannot be computed from samples"
    ], an: 1,
    at: "Different samples give different estimates; intervals capture uncertainty. x̄ = 170 cm vs [167, 173] cm. When AI gives a point estimate, always ask: what's the uncertainty around this?",
    sl: "Slide 37 problem statement + point vs interval boxes + key insight.",
    ex: "Intervals quantify precision — the bridge to the CI formula (slide 38).",
    mt: "Treating a point estimate as the truth about the population." });

  Q({ id: "L3-38-Q1", lec: L, pg: [38], tp: "Confidence intervals", sb: "Formula", df: "medium", ty: "calc", so: "lecture",
    pr: "Give the CI formula and its components. For x̄ = 170, s = 10, n = 100, compute the 95% CI (z* = 1.96).",
    at: "CI = x̄ ± z*·s/√n. SE = s/√n = 10/10 = 1. 95% CI = 170 ± 1.96×1 = [168.04, 171.96] cm.",
    sl: "Slide 38 components: x̄ center; z* critical value (1.96 for 95%, 2.58 for 99%); s variability; n sample size; s/√n standard error. Larger n → narrower CI; higher confidence → wider CI.",
    ex: "The standard error s/√n is called 'the key quantity' on the slide.",
    mt: "Using s instead of s/√n (dividing by the standard error); using z*=2.58 for 95%." });

  Q({ id: "L3-39-Q1", lec: L, pg: [39], tp: "Confidence intervals", sb: "Correct interpretation", df: "hard", ty: "mcq", so: "lecture",
    pr: "What is the correct frequentist interpretation of a 95% CI?",
    op: [
      "There is a 95% probability the true mean is in this specific interval",
      "The true parameter µ is fixed; the interval varies by sample. If we repeated sampling many times, about 95% of constructed intervals would contain µ",
      "95% of the data lies in the interval",
      "The interval contains 95% of sample means"
    ], an: 1,
    at: "µ is FIXED; the interval VARIES. About 95% of intervals from repeated sampling would contain the true parameter µ.",
    sl: "Slide 39: frequentist view (µ is a specific number that doesn't move; we just don't know it) + correct interpretation + the fishing-net analogy (a machine makes nets calibrated to catch a fish 95% of the time; once you have a specific net, it either catches the fish or it doesn't).",
    ex: "The analogy is an exam-friendly explanation of the frequency interpretation.",
    mt: "Saying the parameter has 95% probability of being inside — probability is about the procedure, not the fixed parameter." });

  Q({ id: "L3-40-Q1", lec: L, pg: [40], tp: "Confidence intervals", sb: "Misconception", df: "medium", ty: "short", so: "lecture",
    pr: "Why is the statement 'There's a 95% probability that the true mean is in this interval' wrong, and why does it matter?",
    at: "Once you've computed a specific interval from your data, there's nothing random left — the true mean is either inside or not; you just don't know which. It matters because the misconception leads to overconfidence: your interval might be one of the 5% that misses entirely, and you'd have no way of knowing. The correct interpretation keeps you appropriately humble.",
    sl: "Slide 40 WRONG statement + two explanation blocks.",
    ex: "Pairs with the simulation demo (slide 42: many intervals from repeated sampling).",
    mt: "Thinking the misconception is harmless semantics — it drives overconfidence." });

  
  
  Q({ id: "L3-45-Q1", lec: L, pg: [45], tp: "Hypothesis testing", sb: "Key terms", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which term definitions are correct?",
    op: [
      "H₀: what we're trying to prove; p-value: P(H₀ true)",
      "H₀: default assumption (no effect); H₁: what we seek evidence for; T: test statistic; p: P(data this extreme or more | H₀ true); α: threshold (typically 0.05)",
      "α is the p-value",
      "Failing to reject H₀ means accepting H₀"
    ], an: 1,
    at: "H₀ null = default (no effect/no difference); H₁ alternative = what we seek evidence for; T test statistic; p-value = P(data this extreme or more | H₀ is true); α significance level (typically 0.05).",
    sl: "Slide 45 analogy ('innocent until proven guilty') + term table + logic: p < α ⇒ reject H₀; otherwise fail to reject (NOT the same as accepting H₀!).",
    ex: "The 'fail to reject ≠ accept' distinction is a classic exam trap.",
    mt: "Equating failing to reject with proving H₀ true." });

  Q({ id: "L3-46-Q1", lec: L, pg: [46], tp: "Hypothesis testing", sb: "Procedure", df: "medium", ty: "short", so: "lecture",
    pr: "List the five steps of hypothesis testing and apply the setup to the fair-coin example.",
    at: "1) State H₀ and H₁; 2) choose α (typically 0.05); 3) collect data and compute the test statistic; 4) calculate the p-value; 5) decision: p < α ⇒ reject H₀ else fail to reject. Coin example: H₀: p = 0.5 (fair); H₁: p ≠ 0.5 (biased); data: 100 flips, 65 heads; question: is 65/100 surprising enough under a fair coin?",
    sl: "Slide 46 five steps + coin example bullets.",
    ex: "α = 0.05 means willing to be wrong 5% of the time.",
    mt: "Writing H₁ as 'the coin is fair' — H₁ is the alternative being evidenced." });

  Q({ id: "L3-47-Q1", lec: L, pg: [47], tp: "P-values", sb: "Definition", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does a p-value actually mean?",
    op: [
      "P(H₀ is true)",
      "P(observing data this extreme or more extreme | H₀ is true) — a probability about the DATA, not about the hypothesis",
      "P(H₁ is false)",
      "P(you made an error)"
    ], an: 1,
    at: "p-value = P(data this extreme or more | H₀ is true). It is NOT P(H₀ true), NOT P(H₁ false), NOT P(you made an error). Smaller p = more surprising = stronger evidence against H₀.",
    sl: "Slide 47 formula + IS/IS NOT columns + warning: 'A p-value of 0.03 does NOT mean 3% chance the null is true. It means: if the null were true, there's a 3% chance of seeing data this extreme.'",
    ex: "Conditional direction is the crux: P(data|H₀), not P(H₀|data).",
    mt: "Flipping the conditional — the single most common p-value error." });

  Q({ id: "L3-49-Q1", lec: L, pg: [49], tp: "P-values", sb: "Three misconceptions", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which of the three p-value misconceptions and corrections is stated correctly?",
    op: [
      "p = 0.03 means 97% chance of replication — TRUE",
      "p < 0.05 means the effect is important — TRUE",
      "p < 0.05 does not mean the effect is important: statistical significance ≠ practical significance; a tiny effect can be significant with large n",
      "p = 0.03 means 3% chance H₀ is true — TRUE"
    ], an: 2,
    at: "Misconception 2 correction: statistical significance ≠ practical significance (tiny, meaningless effects can be significant with large enough n). Misconception 1: p is P(data|H₀), not P(H₀|data). Misconception 3: replication probability depends on effect size, sample size, power — not the original p-value.",
    sl: "Slide 49 three misconception/reality pairs + note: AI computes p-values correctly; the danger is in misinterpreting them.",
    ex: "Each misconception swaps a conditional or conflates significance types.",
    mt: "Believing p = 0.03 implies 97% replication — false; many 'significant' findings fail to replicate." });

  Q({ id: "L3-50-Q1", lec: L, pg: [50], tp: "Significance", sb: "Statistical vs practical", df: "medium", ty: "calc", so: "lecture",
    pr: "A blood-pressure drug lowers BP by 0.5 mmHg with n = 100,000 (p < 0.001). Explain the statistical vs practical significance distinction and compute Cohen's d-style interpretation. What are the small/medium/large benchmarks?",
    at: "Statistically significant (p < α — unlikely under H₀) but practically meaningless: normal variation is ±10 mmHg; a 0.5 mmHg effect is clinically negligible. Cohen's d = (x̄₁ − x̄₂)/s_pooled: small ≈ 0.2, medium ≈ 0.5, large ≈ 0.8.",
    sl: "Slide 50 table (statistical significance = p < α; practical significance = is the effect large enough to matter?) + drug example + Cohen's d benchmarks + key insight: always ask for effect sizes alongside p-values.",
    ex: "Large n makes tiny effects significant — significance alone doesn't imply importance.",
    mt: "Concluding the drug works because p < 0.001; effect size is what matters clinically." });

  
  })();
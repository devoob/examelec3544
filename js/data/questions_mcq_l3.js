/* Extra MCQ bank — Lecture 3 (built for MCQ Sets; distinct angles from questions_l3.js). */
(function () {
  var L = 3;

  
  Q({ id: "L3-MCQ-02", lec: L, pg: [6], tp: "Random variables", sb: "Type", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which example is given for a CONTINUOUS random variable?",
    op: ["Number of defects", "Coin flip results", "Reaction time", "Dice roll outcomes"],
    an: 2, at: "Reaction time — measurements on a continuum (also stock price).",
    sl: "Slide 6: discrete = countable (defects, coin flips); continuous = continuum (reaction time, stock price).",
    ex: "This distinction determines PMF vs PDF language.",
    mt: "Classifying a count as continuous." });

  Q({ id: "L3-MCQ-03", lec: L, pg: [7], tp: "Population/sample", sb: "Greek/Roman", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which pair correctly lists population parameters?",
    op: ["x̄ and s", "µ and σ", "n and xi", "P(A) and T"],
    an: 1, at: "µ (mean) and σ (std dev) — Greek letters for population parameters; x̄ and s are sample statistics.",
    sl: "Slide 7 naming convention.",
    ex: "We use samples to infer about populations — statistics estimate parameters.",
    mt: "Swapping the conventions." });

  Q({ id: "L3-MCQ-04", lec: L, pg: [8], tp: "Notation", sb: "Conditional symbol", df: "easy", ty: "mcq", so: "lecture",
    pr: "In the notation table, what does P(rain | cloudy) = 0.6 mean?",
    op: ["Probability of cloudy given rain", "Probability of rain given that it is cloudy", "Joint probability", "Complement probability"],
    an: 1, at: "Probability of rain given that it is cloudy — conditioning on cloudy.",
    sl: "Slide 8 table: P(A|B) = probability of A given B has occurred.",
    ex: "Contrast with P(cloudy | rain), which would be near 1.",
    mt: "Reversing the conditional direction." });

  Q({ id: "L3-MCQ-05", lec: L, pg: [9], tp: "Events", sb: "Translation", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which event notation corresponds to 'X is at most 1'?",
    op: ["{X > 3}", "{X ≤ 1}", "{X = 2}", "{X ≥ 2}"],
    an: 1, at: "C = {X ≤ 1} — 'X is at most 1'.",
    sl: "Slide 9 translation table; 'at least 2' = {X ≥ 2}.",
    ex: "'At most' means ≤; 'at least' means ≥.",
    mt: "Swapping at-most and at-least." });

  Q({ id: "L3-MCQ-06", lec: L, pg: [10], tp: "Probability rules", sb: "Addition", df: "medium", ty: "mcq", so: "lecture",
    pr: "For mutually exclusive events, what does the addition rule simplify to?",
    op: ["P(A) × P(B)", "P(A) + P(B)", "P(A) + P(B) − 1", "1 − P(A)P(B)"],
    an: 1, at: "P(A or B) = P(A) + P(B) — no overlap to subtract.",
    sl: "Slide 10: addition rule general form P(A)+P(B)−P(A and B); mutually exclusive ⇒ no overlap.",
    ex: "Dice example: P(roll 1 or 2) = 1/6 + 1/6 = 2/6.",
    mt: "Keeping the overlap subtraction when events are exclusive." });

  Q({ id: "L3-MCQ-07", lec: L, pg: [10], tp: "Probability rules", sb: "Independent events", df: "medium", ty: "mcq", so: "lecture",
    pr: "For independent events, P(A and B) equals?",
    op: ["P(A) + P(B)", "P(A) × P(B)", "P(A) × P(B|A) − P(B)", "P(A|B)"],
    an: 1, at: "P(A) × P(B) — independence makes the conditional collapse.",
    sl: "Slide 10 multiplication rule; example P(two heads in a row) = 0.5 × 0.5 = 0.25.",
    ex: "If A affects B, use P(A) × P(B|A) instead.",
    mt: "Using the conditional form when events are independent." });

  
  Q({ id: "L3-MCQ-09", lec: L, pg: [12], tp: "Descriptives", sb: "Balance point", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which phrase describes the mean?",
    op: ["The middle value when sorted", "The 'balance point' of the data", "The most frequent value", "The spread measure"],
    an: 1, at: "The mean is the data's balance point — sum of values divided by count.",
    sl: "Slide 12: mean (balance point, sensitive to outliers) vs median (middle value, resistant).",
    ex: "Skewed distributions often favor the median.",
    mt: "Calling the median the balance point." });

  Q({ id: "L3-MCQ-10", lec: L, pg: [13], tp: "Descriptives", sb: "IQR definition", df: "medium", ty: "mcq", so: "lecture",
    pr: "IQR = Q3 − Q1 represents what?",
    op: ["The full data range", "The range of the middle 50%", "The mean deviation", "The outlier threshold"],
    an: 1, at: "The middle 50% of the data — resistant to outliers like the median.",
    sl: "Slide 13: IQR (75th − 25th percentile); pattern: median + IQR go together.",
    ex: "Mean + std dev are the outlier-sensitive pair.",
    mt: "Calling IQR the full range (that's max − min)." });

  
  Q({ id: "L3-MCQ-12", lec: L, pg: [15], tp: "Correlation", sb: "Curved relationship", df: "hard", ty: "mcq", so: "lecture",
    pr: "A perfect curved (nonlinear) relationship can have r ≈ 0 because?",
    op: ["Correlation measures only linear association", "Curved data has no variance", "r requires equal sample sizes", "Correlation cannot be computed for curves"],
    an: 0, at: "Correlation measures only LINEAR association — symmetry can cancel positive and negative linear components.",
    sl: "Slide 15 limitation 1.",
    ex: "Same reason 'zero covariance does not imply independence' (L2).",
    mt: "Concluding no relationship from r ≈ 0." });

  Q({ id: "L3-MCQ-13", lec: L, pg: [16], tp: "Visualization", sb: "Box plot", df: "medium", ty: "mcq", so: "lecture",
    pr: "Beyond 1.5×IQR from the quartiles, box plots show what?",
    op: ["The mean", "Outliers as individual points", "The mode", "Error bars"],
    an: 1, at: "Outliers are shown as individual points beyond 1.5×IQR.",
    sl: "Slide 16: box plot = five-number summary (min, Q1, median, Q3, max) + outliers.",
    ex: "Histogram reveals distribution shape; scatter reveals association.",
    mt: "Assuming box plots show the mean by default." });

  Q({ id: "L3-MCQ-14", lec: L, pg: [19], tp: "Anscombe", sb: "Shapes", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which Anscombe dataset shows 'one outlier drives correlation away from r = 1' (/20)?",
    op: ["Dataset I", "Dataset II", "Dataset III", "Dataset IV"],
    an: 2, at: "Dataset III — one outlier pulls the otherwise perfect line away from r = 1.",
    sl: "Slide 20 per-dataset reveals: I clean linear; II quadratic; III outlier-driven; IV no relationship + extreme point illusion.",
    ex: "All four share r ≈ 0.816.",
    mt: "Attributing the outlier case to dataset IV (which is the illusion-of-relationship case)." });

  
  
  Q({ id: "L3-MCQ-17", lec: L, pg: [22], tp: "Distributions", sb: "PMF", df: "medium", ty: "mcq", so: "lecture",
    pr: "For a discrete random variable, the PMF gives?",
    op: ["Relative likelihood via areas", "P(X = x) for each possible value x", "Only the mean", "The cumulative density"],
    an: 1, at: "PMF gives P(X = x) for each possible value — point probabilities for discrete outcomes.",
    sl: "Slide 22 formal definitions; PDF describes continuous relative likelihood.",
    ex: "Sanity check: if the shape doesn't match the generative story, something's wrong (exponential vs normal example).",
    mt: "Assigning PMF to continuous variables." });

  Q({ id: "L3-MCQ-18", lec: L, pg: [23], tp: "Distributions", sb: "CLT story", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which generative story belongs to the normal distribution?",
    op: ["Counting successes in fixed trials", "Events in a fixed interval at a constant rate", "Many small independent effects adding together (CLT)", "Waiting time between events"],
    an: 2, at: "Many small independent effects add together — the Central Limit Theorem explains why.",
    sl: "Slide 23: X ~ N(µ, σ²); symmetric; 68-95-99.7 rule.",
    ex: "Examples: heights, measurement errors, test scores, stock returns (approximately).",
    mt: "Attributing the 'many small effects' story to the binomial." });

  Q({ id: "L3-MCQ-19", lec: L, pg: [23], tp: "Distributions", sb: "Empirical rule", df: "medium", ty: "mcq", so: "lecture",
    pr: "Using the 68-95-99.7 rule, what fraction of a normal distribution lies within 2σ?",
    op: ["68%", "95%", "99.7%", "50%"],
    an: 1, at: "95% within 2σ (68% within 1σ, 99.7% within 3σ).",
    sl: "Slide 23 key properties.",
    ex: "Fully determined by just µ and σ.",
    mt: "Swapping 95% and 99.7% rows." });

  Q({ id: "L3-MCQ-20", lec: L, pg: [24], tp: "Distributions", sb: "Binomial shape", df: "medium", ty: "mcq", so: "lecture",
    pr: "When is the binomial distribution symmetric?",
    op: ["When n is large", "When p = 0.5", "When p < 0.5", "Always"],
    an: 1, at: "Symmetric when p = 0.5; skewed otherwise.",
    sl: "Slide 24: E[X] = np; Var(X) = np(1−p); shape symmetric at p = 0.5.",
    ex: "Examples: heads in 50 flips, defectives in a batch, patients responding to treatment.",
    mt: "Claiming binomial is always symmetric." });

  Q({ id: "L3-MCQ-21", lec: L, pg: [25], tp: "Distributions", sb: "Poisson examples", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which example fits the Poisson distribution?",
    op: ["Customer heights", "Typos per page", "Die roll outcomes", "Time until next customer (as a duration)"],
    an: 1, at: "Typos per page — counting events per interval (also customers per hour, accidents per month, emails per day).",
    sl: "Slide 25: counting events in a fixed interval at a constant average rate; E[X] = Var(X) = λ.",
    ex: "Time between customers is the EXPONENTIAL distribution instead.",
    mt: "Choosing a duration example for Poisson (durations are exponential)." });

  Q({ id: "L3-MCQ-22", lec: L, pg: [26], tp: "Distributions", sb: "Memoryless", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which property states P(X > s+t | X > s) = P(X > t)?",
    op: ["Memorylessness of the exponential", "Symmetry of the normal", "Mean-variance equality of the Poisson", "Independence of trials in the binomial"],
    an: 0, at: "Memorylessness — the exponential distribution 'doesn't remember' how long you've waited.",
    sl: "Slide 26 key properties: E[X] = 1/λ; Var = 1/λ²; memoryless; always right-skewed.",
    ex: "Connects to Poisson: counts events vs times between them.",
    mt: "Attributing memorylessness to the Poisson." });

  Q({ id: "L3-MCQ-23", lec: L, pg: [28], tp: "Conditional probability", sb: "Restricted universe", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the intuition behind P(A|B)?",
    op: ["Multiply all probabilities", "Restrict the universe to cases where B happened, then ask how often A also happens", "Add P(A) and P(B)", "Take the complement of A"],
    an: 1, at: "Restrict the sample space to B, then measure A within it.",
    sl: "Slide 28 definition + card example P(King|Face) = 4/12 = 1/3.",
    ex: "The restricted-universe view prevents denominator errors.",
    mt: "Dividing by the full sample space." });

  Q({ id: "L3-MCQ-24", lec: L, pg: [29], tp: "Conditional probability", sb: "Medical trap", df: "hard", ty: "mcq", so: "lecture",
    pr: "Which pair of conditional quantities must never be confused (the classic medical-test trap)?",
    op: ["P(disease | positive test) and P(positive test | disease)", "P(A) and P(not A)", "Mean and median", "PMF and PDF"],
    an: 0, at: "The two conditionals are fundamentally different questions — the classic medical-test confusion.",
    sl: "Slide 29: wet-ground/rain example + medical version; AI might compute the right number for the wrong question.",
    ex: "Bayes' rule is what connects them.",
    mt: "Treating the two directions as interchangeable." });

  Q({ id: "L3-MCQ-25", lec: L, pg: [30], tp: "Law of total probability", sb: "Two buckets", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the two buckets in the email example?",
    op: ["Read and unread emails", "Spam (60%) and legitimate (40%)", "Short and long emails", "Morning and evening emails"],
    an: 1, at: "60% spam, 40% legitimate — used to weight P('free'|spam)=0.8 and P('free'|legitimate)=0.1.",
    sl: "Slide 30: P(contains 'free') = 0.8×0.6 + 0.1×0.4 = 0.52.",
    ex: "This denominator computation is what Bayes' rule needs.",
    mt: "Using read/unread as the partition." });

  Q({ id: "L3-MCQ-26", lec: L, pg: [31], tp: "Bayes", sb: "Likelihood", df: "medium", ty: "mcq", so: "lecture",
    pr: "In Bayes' rule, which term is P(E|H)?",
    op: ["Posterior", "Likelihood", "Prior", "Evidence"],
    an: 1, at: "Likelihood — how likely is this evidence if H is true?",
    sl: "Slide 31: P(H|E) posterior; P(E|H) likelihood; P(H) prior; P(E) evidence.",
    ex: "The prior (base rate) has enormous influence on the posterior.",
    mt: "Calling P(E|H) the posterior." });

  Q({ id: "L3-MCQ-27", lec: L, pg: [32], tp: "Bayes", sb: "Counting steps order", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is Step 3 of the counting approach to Bayes?",
    op: ["Start with base rate — how many of 1000 have the disease?", "Apply sensitivity — of those, how many test positive?", "Apply false positive rate — of those without disease, how many test positive?", "Count true positives / all positives"],
    an: 2, at: "Step 3 = apply the false positive rate to the healthy group.",
    sl: "Slide 32 four steps: base rate → sensitivity → false positives → count.",
    ex: "Skip step 3 and you'd answer with sensitivity alone.",
    mt: "Finishing at step 2 (true positives only)." });

  Q({ id: "L3-MCQ-28", lec: L, pg: [35], tp: "Bayes", sb: "Total positives", df: "hard", ty: "mcq", so: "lecture",
    pr: "In the 10,000-person medical test, how many total positive tests occur?",
    op: ["99", "495", "594", "9,900"],
    an: 2, at: "594 = 99 true positives + 495 false positives.",
    sl: "100 diseased → 99 positives; 9,900 healthy × 5% = 495 positives; total 594; P(D|+) = 99/594 ≈ 16.7%.",
    ex: "The healthy population dominates the positive pool.",
    mt: "Reporting 99 (true positives only)." });

  Q({ id: "L3-MCQ-29", lec: L, pg: [36], tp: "Bayes", sb: "AI supervision", df: "medium", ty: "mcq", so: "lecture",
    pr: "When AI reports high confidence in a rare event, what should you always ask?",
    op: ["What's the base rate?", "What's the model size?", "What's the temperature?", "What's the R²?"],
    an: 0, at: "Ask for the base rate — AI computes P(evidence|hypothesis) but you need P(hypothesis|evidence).",
    sl: "Slide 36 warning + real-world domains: medical screening, airport security, fraud detection, spam filters.",
    ex: "The psychological trap: fixating on accuracy while ignoring prevalence.",
    mt: "Accepting confidence statements without prevalence." });

  Q({ id: "L3-MCQ-30", lec: L, pg: [38], tp: "Confidence intervals", sb: "z* values", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which critical values correspond to 95% and 99% confidence?",
    op: ["1.96 and 2.58", "1.28 and 1.65", "2.00 and 3.00", "0.95 and 0.99"],
    an: 0, at: "z* = 1.96 (95%) and 2.58 (99%).",
    sl: "Slide 38 component table.",
    ex: "Higher confidence widens the interval.",
    mt: "Using 0.95/0.99 as critical values." });

  Q({ id: "L3-MCQ-31", lec: L, pg: [38], tp: "Confidence intervals", sb: "Sample size effect", df: "medium", ty: "mcq", so: "lecture",
    pr: "What happens to the CI width as n increases?",
    op: ["It narrows (more precision)", "It widens", "Unchanged", "It becomes biased"],
    an: 0, at: "Larger n → narrower CI — s/√n shrinks with more data.",
    sl: "Slide 38: larger n → narrower; higher confidence → wider.",
    ex: "The standard error s/√n is called the key quantity.",
    mt: "Confusing the n effect with the confidence-level effect." });

  Q({ id: "L3-MCQ-32", lec: L, pg: [39], tp: "Confidence intervals", sb: "Net analogy", df: "medium", ty: "mcq", so: "lecture",
    pr: "What does the fishing-net analogy explain?",
    op: ["A machine makes nets calibrated to catch a fish 95% of the time; once you have a specific net, it either catches the fish or it doesn't", "Fish swim in normal distributions", "Nets always catch everything", "95% of fish are caught"],
    an: 0, at: "The analogy for coverage: the procedure (machine) has 95% success; a realized interval (one net) is hit-or-miss.",
    sl: "Slide 39 analogy + correct interpretation (µ fixed; interval varies).",
    ex: "What's random is the interval, not the parameter.",
    mt: "Assigning 95% probability to the fish being in your particular net." });

  
  Q({ id: "L3-MCQ-34", lec: L, pg: [43], tp: "Confidence intervals", sb: "AI intervals", df: "medium", ty: "mcq", so: "lecture",
    pr: "Which statement about confidence-interval width and sampling bias is correct?",
    op: ["A narrow interval from a biased sample is worse than a wide interval from a representative sample", "Narrow intervals are always better", "Bias improves precision", "Intervals remove bias"],
    an: 0, at: "Narrow-from-biased is worse than wide-from-representative — precision without validity is hollow.",
    sl: "Slide 43 + VERIFY: Inspect (check assumptions and intermediate results).",
    ex: "Ask what assumptions were made and what the width means practically.",
    mt: "Equating precision with trustworthiness." });

  Q({ id: "L3-MCQ-35", lec: L, pg: [45], tp: "Hypothesis testing", sb: "α role", df: "medium", ty: "mcq", so: "lecture",
    pr: "What is the significance level α?",
    op: ["The probability that H₀ is true", "The threshold for 'surprising enough' — typically 0.05", "The effect size", "The sample size"],
    an: 1, at: "α = threshold for surprising evidence, typically 0.05 — the willingness to be wrong 5% of the time.",
    sl: "Slide 45 term table; p < α ⇒ reject H₀; otherwise fail to reject.",
    ex: "Failing to reject is NOT accepting H₀.",
    mt: "Treating α as P(H₀ true)." });

  Q({ id: "L3-MCQ-36", lec: L, pg: [46], tp: "Hypothesis testing", sb: "Coin example", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the fair-coin test, what data is observed?",
    op: ["50 heads in 100 flips", "65 heads in 100 flips", "95 heads in 100 flips", "50 heads in 65 flips"],
    an: 1, at: "65 heads in 100 flips — is that surprising enough under H₀: p = 0.5?",
    sl: "Slide 46: H₀: p = 0.5; H₁: p ≠ 0.5; data: 65/100 heads.",
    ex: "The question is whether the departure is surprising under the null.",
    mt: "Using the expected 50 rather than the observed 65." });

  Q({ id: "L3-MCQ-37", lec: L, pg: [49], tp: "P-values", sb: "Replication", df: "hard", ty: "mcq", so: "lecture",
    pr: "Why is 'p = 0.03 means 97% chance of replication' wrong?",
    op: ["Replication probability depends on effect size, sample size, and power — not the original p-value", "Replication is impossible", "p-values are always wrong", "97% is too high"],
    an: 0, at: "Replication probability depends on effect size, sample size, and power — many 'significant' findings fail to replicate.",
    sl: "Slide 49 misconception 3.",
    ex: "AI computes p-values correctly; the danger is misinterpretation.",
    mt: "Deriving replication odds from one p-value." });

  Q({ id: "L3-MCQ-38", lec: L, pg: [50], tp: "Significance", sb: "Drug example numbers", df: "medium", ty: "mcq", so: "lecture",
    pr: "In the blood-pressure example, why is the 0.5 mmHg effect practically meaningless?",
    op: ["It is not statistically significant", "Normal variation is ±10 mmHg", "The sample was too small", "The drug is a placebo"],
    an: 1, at: "Normal variation is ±10 mmHg — 0.5 mmHg is clinically negligible despite p < 0.001.",
    sl: "Slide 50: n = 100,000 makes the tiny effect statistically significant; effect size (Cohen's d) measures magnitude.",
    ex: "Always ask for effect sizes alongside p-values.",
    mt: "Concluding the drug works because p < 0.001." });

  
  })();
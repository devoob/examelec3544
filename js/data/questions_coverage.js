/* Coverage questions — demo slides, dividers with testable framing, and image-only slides
   whose content was verified from the rendered slide images (L2 p.27, L3 p.41, L6 p.49). */
(function () {
  var L = 0;

  Q({ id: "L1-25-Q1", lec: 1, pg: [25], tp: "Survey design", sb: "CTA demo checklist", df: "easy", ty: "mcq", so: "lecture",
    pr: "What does the live survey-construction demo cover, and what is the takeaway about CTA?",
    op: [
      "Create a new Google Form; add different question types; set required vs optional; preview and share link — all can be done by talking with foundation models",
      "Only manual form creation, no AI",
      "Building a website without forms",
      "Writing SQL queries"
    ], an: 0,
    at: "The four checklist items (create form, question types, required/optional, preview+share link), with the note that all of this can be done by talking with foundation models.",
    sl: "Slide 25 LIVE DEMO checklist + 'All these can be done by talking with Foundation Models'.",
    ex: "The demo shows CTA as a tool-builder, not just a chatbot.",
    mt: "Thinking CTA can only explain concepts, not perform tool workflows." });

  Q({ id: "L2-23-Q1", lec: 2, pg: [23], tp: "CTA patterns", sb: "Demo pattern", df: "easy", ty: "short", so: "lecture",
    pr: "What pattern does CTA Demo 1 (distance metrics) demonstrate, and what is the key note about prompt quality?",
    at: "Pattern: Iterative Refinement — start broad → get specific → request examples → verify with code. Note: we don't need the perfect prompt; we have a conversation.",
    sl: "Slide 23 demo steps + note.",
    ex: "Prompts can be refined through dialogue rather than perfected upfront.",
    mt: "Waiting for a 'perfect prompt' before starting." });

  Q({ id: "L2-27-Q1", lec: 2, pg: [27], tp: "Covariance", sb: "Why n−1 (image slide)", df: "hard", ty: "calc", so: "lecture",
    pr: "[Image-only slide, content verified from the slide image.] State Bias(estimate) = E[estimate] − true value, and prove that E[R/(n−1)] = σ² while E[R/n] = ((n−1)/n)σ², using the repeated-sampling table for X = ±1, n = 2.",
    at: "Bias(estimate) = E[estimate] − true value (expectation averages over repeated samples). With R = Σ(Xᵢ − X̄)²: E[R] = nσ² − n(σ²/n) = (n−1)σ², so E[R/n] = ((n−1)/n)σ² (biased low) while E[R/(n−1)] = σ² (unbiased). Exact table for n = 2 (X = ±1, µ = 0, σ² = 1; samples each 1/4): (−1,−1): R = 0; (−1,+1): R = 2; (+1,−1): R = 2; (+1,+1): R = 0. Average over all four samples: E[R/n] = (0+1+1+0)/4 = 0.5 (too low vs σ² = 1); E[R/(n−1)] = (0+2+2+0)/4 = 1 = σ² ✓. The deviations sum to zero — one constraint — leaving n−1 degrees of freedom.",
    sl: "Slide 27 (image-only; verified from rendering): R = Σ(Xᵢ−µ)² − n(X̄−µ)²; E[R] = nσ² − n(σ²/n) = (n−1)σ². 'Divide by n: E[R/n] = (n−1)/n·σ²; divide by n−1: E[R/(n−1)] = σ².' Bottom line: 'Unbiased means correct on average across repeated samples. A single estimate can still be too high or too low.'",
    ex: "This is the formal proof behind Bessel's correction — a possible long-answer or derivation question.",
    mt: "Believing each individual sample estimate is exact — unbiasedness is an average property over repeated samples.",
    ref: "Lecture 2, p. 27 (image-only slide; text extraction empty — content reconstructed from the slide image)" });

  Q({ id: "L2-35-Q1", lec: 2, pg: [35], tp: "CTA patterns", sb: "Demo pattern", df: "easy", ty: "short", so: "lecture",
    pr: "What verification pattern does CTA Demo 2 (covariance) demonstrate (slide 35)?",
    at: "Verification Through Computation: ask for step-by-step work → verify independently → investigate discrepancy → learn. (The discrepancy was the n vs n−1 assumption.)",
    sl: "Slide 35 LIVE DEMO steps + pattern label.",
    ex: "Discrepancies aren't failures — they're learning opportunities (slide 36).",
    mt: "Accepting computed outputs without independent verification." });

  Q({ id: "L2-64-Q1", lec: 2, pg: [64], tp: "CTA patterns", sb: "Demo pattern", df: "easy", ty: "short", so: "lecture",
    pr: "What debugging-understanding pattern does Demo 3 demonstrate, with example prompt wording?",
    at: "State confusion explicitly → ask for clarification → request analogies → test understanding. Example: 'I'm confused about whether PCA picks existing features or creates new ones. Can you clarify?'",
    sl: "Slide 64 LIVE DEMO steps + example.",
    ex: "The answer (PCA creates new features) is consolidated on slide 65.",
    mt: "Not stating the confusion — vague questions produce vague clarifications." });

  Q({ id: "L2-66-Q1", lec: 2, pg: [66], tp: "PCA selection", sb: "Trade-off framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the component-count trade-off stated on slide 66?",
    op: [
      "Fewer components = simpler model, but more information lost; more components = more information retained, but less compression",
      "Fewer components = always better",
      "More components = always better",
      "Component count does not affect the model"
    ], an: 0,
    at: "The trade-off as stated.",
    sl: "Slide 66 divider with trade-off caption.",
    ex: "EVR curves quantify this trade-off (slides 67–70).",
    mt: "Treating 'keep everything' as costless — it forfeits the purpose of PCA." });

  Q({ id: "L2-74-Q1", lec: 2, pg: [74], tp: "CTA patterns", sb: "Demo pattern", df: "easy", ty: "short", so: "lecture",
    pr: "What challenging-for-completeness pattern does Demo 4 demonstrate, with example prompt wording?",
    at: "Accept standard answer → push for exceptions → ask for alternatives → synthesize limitations. Example: 'I know PCA maximizes variance, but when would that be exactly the wrong thing to do? Give me concrete examples.'",
    sl: "Slide 74 LIVE DEMO steps + example.",
    ex: "Takeaways: linear subspace limits, variance≠relevance, unsupervised, scaling-sensitive (slide 75).",
    mt: "Stopping at the first (standard) answer." });

  Q({ id: "L3-18-Q1", lec: 3, pg: [18], tp: "Anscombe", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "Describe the two turns (and the pause) of CTA Demo A (slide 18).",
    at: "Turn 1: 'Compute mean of x, mean of y, standard deviation of x, standard deviation of y, and correlation for each dataset. Show just the numbers, no plots yet.' ⏸ PAUSE for prediction: 'Based on these near-identical statistics — what do you think these datasets look like?' Turn 2: 'Now create a 2×2 grid of scatter plots, one for each dataset.' Pattern: verification through computation.",
    sl: "Slide 18 demo staging.",
    ex: "The prediction pause is the pedagogical trick: commit to a guess, then see the plots.",
    mt: "Skipping the prediction step — the surprise is the lesson." });

  Q({ id: "L3-27-Q1", lec: 3, pg: [27], tp: "Reasoning", sb: "Three skills", df: "medium", ty: "mcq", so: "lecture",
    pr: "What are the three skills of reasoning under uncertainty (slide 27)?",
    op: [
      "Think conditionally (distinguish P(A|B) from P(B|A)); remember base rates (the prior matters enormously); interpret intervals (what confidence intervals actually mean)",
      "Compute means, medians, modes",
      "Plot, summarize, conclude",
      "Sample, test, deploy"
    ], an: 0,
    at: "The three skills as stated. These matter because AI can compute probabilities correctly but can't judge whether the right probability is being computed.",
    sl: "Slide 27 divider with three skills.",
    ex: "These map onto slides 28–43 (conditional, base rate, intervals).",
    mt: "Believing computation correctness implies interpretation correctness." });

  Q({ id: "L3-34-Q1", lec: 3, pg: [34], tp: "Bayes", sb: "Medical test visual", df: "medium", ty: "calc", so: "lecture",
    pr: "Restate the medical-test result as the slide presents it: among people who test positive, about what fraction has the disease, and what does the visual show?",
    at: "About 1 in 6 (≈16.7%) of positives have the disease. The slide's visual (E = positive test; H = disease; H' = no disease; prevalence 1%, sensitivity 99%, false-positive rate 5%) shows the counting split: 99 true positives among 100 diseased and 495 false positives among 9,900 healthy — total 594 positives.",
    sl: "Slide 34 Bayes setup + 'Among people who test positive, about 1 in 6 has the disease.'",
    ex: "The 1-in-6 framing is the memorable anchor for the base-rate lesson.",
    mt: "Reading the visual as '99% confident' — it is ~17%.",
    mr: null });

  Q({ id: "L3-41-Q1", lec: 3, pg: [41], tp: "Confidence intervals", sb: "Simulation (image slide)", df: "medium", ty: "calc", so: "lecture",
    pr: "[Image-only slide, content verified from the slide image.] A figure shows '20 Confidence Intervals from Repeated Sampling — 18 of 20 (90%) contain the true µ'. (a) What is the true µ? (b) How many intervals miss? (c) What is the figure's annotation about a single interval?",
    at: "(a) µ = 170 (green vertical line; sample means hover around it). (b) 2 intervals (shown in red) miss µ. (c) 'Each horizontal line is a 95% CI from one sample. The procedure captures µ about 95% of the time. But any single interval either contains µ or doesn't.'",
    sl: "Slide 41 (image-only): 20 horizontal CI bars (blue = contains µ, red = misses), legend and annotation as quoted. 18/20 = 90% coverage in this particular simulation of 95% intervals.",
    ex: "A finite simulation shows ~95% coverage empirically — 18/20 here. This is the visual proof that coverage is a property of the PROCEDURE, not of one interval.",
    mt: "Expecting exactly 95% in every simulation — finite samples fluctuate around the nominal level.",
    ref: "Lecture 3, p. 41 (image-only slide; content reconstructed from the slide image)" });

  Q({ id: "L3-44-Q1", lec: 3, pg: [44], tp: "Hypothesis testing", sb: "Framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What two skills anchor the hypothesis-testing section (slide 44)?",
    op: [
      "Understand hypothesis testing (the logic of 'innocent until proven guilty') and interpret p-values correctly (what they mean and don't mean)",
      "Compute t-statistics and F-statistics",
      "Design experiments and randomize",
      "Report confidence intervals only"
    ], an: 0,
    at: "The two skills as stated; hypothesis testing is one of the most misused tools, and AI will compute p-values without questioning whether they answer your question.",
    sl: "Slide 44 divider.",
    ex: "The 'innocent until proven guilty' logic returns on slide 45.",
    mt: "Assuming a computed p-value is automatically the right quantity." });

  Q({ id: "L3-48-Q1", lec: 3, pg: [48], tp: "P-values", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "List the three turns of CTA Demo D (p-value misconceptions) and the watch-for note (slide 48).",
    at: "Turn 1: 'If I get a p-value of 0.03, what does that mean?' Turn 2: 'Does p = 0.03 mean there's a 3% chance the null hypothesis is true?' Turn 3: 'If I replicate the study, what's the probability I'll get a significant result again?' Note: the CTA should correctly identify these as misconceptions — watch for subtle errors in phrasing, where AI can still mislead.",
    sl: "Slide 48 demo turns + note.",
    ex: "The reveal (slide 49) gives the corrections for all three.",
    mt: "Assuming the CTA's phrasing is always precise — subtle conditional swaps can slip through." });

  Q({ id: "L4-7-Q1", lec: 4, pg: [7], tp: "Applications", sb: "Part 1A framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What does Part 1A cover (slide 7)?",
    op: ["Seeing the impact of data science across domains", "Writing SQL", "Deep learning architectures", "Survey design"], an: 0,
    at: "Data Science Applications — seeing the impact across domains (healthcare, finance, climate, smart cities).",
    sl: "Slide 7 divider.",
    ex: "Track questions: what data? what techniques? what could go wrong?",
    mt: "Skipping the 'what could go wrong' question for each domain." });

  Q({ id: "L4-23-Q1", lec: 4, pg: [23], tp: "Project", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "What four key questions does the ideation demo promise to answer (slide 23)?",
    at: "1) How do you write a structured prompt with constraints — not just 'give me ideas'? 2) How do you evaluate CTA suggestions against your five criteria? 3) How do you verify that a CTA-suggested dataset actually exists? 4) How do you make the final idea yours — not just the CTA's output? CTA role: brainstorming partner; pattern: iterative refinement (creative).",
    sl: "Slide 23 demo staging + key questions.",
    ex: "Answers appear as the four key moments (slide 24).",
    mt: "Asking for ideas without constraints." });

  Q({ id: "L4-26-Q1", lec: 4, pg: [26], tp: "Wrangling", sb: "Part 2 framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What does Part 2 cover (slide 26)?",
    op: ["Professional data wrangling — from raw data to model-ready features", "Regression modeling", "Classical physics", "Network security"], an: 0,
    at: "Professional data wrangling: from raw data to model-ready features (Assess → Clean → Explore → Prepare).",
    sl: "Slide 26 divider.",
    ex: "The 80/20 reality note follows on slide 27.",
    mt: "Forgetting wrangling ends with model-ready features, not just clean rows." });

  Q({ id: "L4-34-Q1", lec: 4, pg: [34], tp: "Quality assessment", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "What does the automated-profiling demo ask, and what are the three demo questions (slide 34)?",
    at: "Ask the CTA to generate a complete data quality report for the Telco dataset. Key questions: 1) How do you write a structured prompt with four explicit sections? 2) How does the quality of your request affect the quality of the output? 3) What does the CTA get right — and what only a human can catch? CTA role: implementation assistant; pattern: structured requests + verification through computation.",
    sl: "Slide 34 demo staging.",
    ex: "The four sections map to the four-check protocol (slide 29).",
    mt: "Requesting 'check my data' instead of four explicit sections." });

  Q({ id: "L4-43-Q1", lec: 4, pg: [43], tp: "Cleaning", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "What three questions frame the cleaning-consequences demo (slide 43)?",
    at: "1) How do different imputation strategies affect the distribution of TotalCharges? 2) Which approach produces artificial patterns that don't match reality? 3) How does the missingness mechanism tell us which strategy is valid? Setup: TotalCharges is missing for zero-tenure customers; the CTA will fill them in however asked — but which strategy should we use?",
    sl: "Slide 43 demo staging.",
    ex: "The answer is the three-strategy comparison (slide 44) and the MAR connection (slide 45).",
    mt: "Choosing a strategy by convenience rather than mechanism validity." });

  Q({ id: "L4-48-Q1", lec: 4, pg: [48], tp: "Wrangling", sb: "Transition checkpoint", df: "medium", ty: "mcq", so: "lecture",
    pr: "What four checkmarks certify the cleaning stage before EDA (slide 48)?",
    op: [
      "Assessed quality ✓ → Understood mechanisms ✓ → Chose strategies ✓ → Verified consequences ✓",
      "Collected ✓ → Stored ✓ → Deleted ✓ → Plotted ✓",
      "Encoded ✓ → Scaled ✓ → Split ✓ → Modeled ✓",
      "Mean ✓ → Median ✓ → Mode ✓ → Range ✓"
    ], an: 0,
    at: "The four checkmarks as stated — 'we've made deliberate, justified cleaning choices'. Next: EDA where each visualization provokes a question and each question motivates the next visualization.",
    sl: "Slide 48 transition slide.",
    ex: "This checkpoint ordering mirrors the consequence-driven cleaning mindset (slide 47).",
    mt: "Claiming data is 'clean' without the verified-consequences step." });

  Q({ id: "L4-52-Q1", lec: 4, pg: [52], tp: "EDA", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "What three questions frame the EDA discovery demo (slide 52)?",
    at: "1) How does a targeted visualization request differ from 'show me the data'? 2) How do you follow a discovery thread — letting one finding guide the next question? 3) What features emerge as strong predictors of churn? CTA role: implementation assistant; pattern: iterative refinement + challenging for completeness.",
    sl: "Slide 52 demo staging.",
    ex: "The discovery thread (slide 53) answers question 3: charges, tenure, contract type.",
    mt: "Requesting 'show me the data' instead of targeted visualizations." });

  Q({ id: "L5-7-Q1", lec: 5, pg: [7], tp: "Regression", sb: "Best-fitting line", df: "easy", ty: "mcq", so: "lecture",
    pr: "What two questions does the best-fitting-line slide motivate (slide 7)?",
    op: [
      "The line captures the trend — but 'closest' how, and what makes this line the best one? (Answered by OLS minimizing squared residuals)",
      "Which color is best? How thick should the line be?",
      "Can we use deep learning instead?",
      "How many points do we need to draw a line?"
    ], an: 0,
    at: "How do we measure 'closest' and what makes a line optimal — answered next by residuals (slide 9) and the OLS objective (slide 10).",
    sl: "Slide 7 motivating question.",
    ex: "Links to the squared-vs-absolute error choice (slides 11–12).",
    mt: "Assuming any line through the cloud is equally acceptable." });

  Q({ id: "L5-11-Q1", lec: 5, pg: [11], tp: "OLS", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "What does the error-measure demo ask, and what are its three questions (slide 11)?",
    at: "Ask the CTA to generate data with an outlier, fit two lines — one minimizing squared errors (OLS), one minimizing absolute errors (LAD) — compare outlier response; then remove the outlier and see what changes. Questions: 1) Which line is pulled more toward the outlier, and why? 2) How much does each line change when the outlier is removed? 3) When is outlier sensitivity a feature versus a bug?",
    sl: "Slide 11 demo staging + VERIFY connection (Execute/Reason).",
    ex: "The answer is slide 12: squaring amplifies large errors; feature vs bug framing.",
    mt: "Believing both loss functions react equally to outliers." });

  Q({ id: "L5-21-Q1", lec: 5, pg: [21], tp: "Model evaluation", sb: "Session 2 framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What question opens Session 2 (slide 21)?",
    op: [
      "We've built a model — but can we trust it? How do we know it will work on new data?",
      "What is the bias-variance tradeoff?",
      "How do we fit Ridge regression?",
      "How many features should we add?"
    ], an: 0,
    at: "The trust/generalization question — answered by multicollinearity diagnostics, train/test splits, R²/RMSE, residual plots, and the bias-variance analysis.",
    sl: "Slide 21 divider.",
    ex: "The session's tools each address a specific trust failure mode.",
    mt: "Confusing training fit with generalization — the central distinction." });

  Q({ id: "L5-31-Q1", lec: 5, pg: [31], tp: "Diagnostics", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "List the six deliverables of the structured evaluation request (slide 31).",
    at: "1) Split into 80/20 train/test; 2) fit linear regression with all features; 3) report R² on both train and test; 4) generate residual plot (residuals vs predicted); 5) generate histogram of residuals; 6) provide 3-sentence interpretation. Watch: the CTA's residual interpretation will be incomplete — visual diagnostic judgment is a human skill.",
    sl: "Slide 31 demo staging + VERIFY (Execute, Inspect, Fix).",
    ex: "The demo reveal (slide 32): CTA said 'randomly distributed' but a non-linear curve is visible.",
    mt: "Accepting the CTA's verbal interpretation without inspecting the plot." });

  Q({ id: "L5-40-Q1", lec: 5, pg: [40], tp: "Regularization", sb: "Session 3 framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the theme of Session 3 (slide 40)?",
    op: ["Constraining models to improve them — regularization", "Cleaning data", "Drawing scatter plots", "Writing surveys"], an: 0,
    at: "Constraining models to improve them: regularization (Ridge/Lasso) as the way out of the bias-variance dilemma.",
    sl: "Slide 40 divider.",
    ex: "Follows Session 2's conclusion that the tradeoff 'seems like a dilemma — regularization offers a way out'.",
    mt: "Thinking regularization is only about avoiding overfitting — it trades bias for variance deliberately." });

  Q({ id: "L5-46-Q1", lec: 5, pg: [46], tp: "Lasso", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "Summarize the four turns of the coefficient-path demo (slide 46).",
    at: "Turn 1: fit Lasso for 50 α values from 0.001 to 10, plot coefficient paths. Turn 2: observe which coefficients hit zero first; ask 'Ridge typically keeps coefficients nonzero. Why is Lasso different?' Turn 3: CTA explains diamond vs circle constraint regions — challenge for a geometric visualization. Turn 4: evaluate the CTA's visualization. VERIFY: Reason (does the geometry account for the empirical observation?) and Yours (can you explain the diamond-vs-circle argument?).",
    sl: "Slide 46 demo staging.",
    ex: "The geometry is formalized on slides 48–49.",
    mt: "Accepting the geometric explanation without checking it against the empirical path order." });

  Q({ id: "L6-7-Q1", lec: 6, pg: [7], tp: "Logistic regression", sb: "Session 1 framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What session question and concepts open Session 1 (slide 7)?",
    op: [
      "Can we predict a binary outcome with linear regression — and if not, what model do we need? Concepts: linear regression failure, sigmoid function, logistic regression, log-odds",
      "How do we evaluate ranking? Concepts: ROC, AUC",
      "How do we set thresholds? Concepts: precision, recall",
      "How do trees work? Concepts: splits, leaves"
    ], an: 0,
    at: "The Session 1 question and concept list as stated.",
    sl: "Slide 7 divider.",
    ex: "The demo (slide 9) shows the failure empirically before building the fix.",
    mt: "Jumping to logistic regression without understanding why linear fails (range + calibration)." });

  Q({ id: "L6-9-Q1", lec: 6, pg: [9], tp: "Logistic regression", sb: "Demo turns", df: "medium", ty: "short", so: "lecture",
    pr: "Describe the two turns of CTA Demo 1 (linear vs logistic on churn) and the takeaway (slide 9).",
    at: "Turn 1: fit LinearRegression to churn using tenure alone; plot the fit over 0–90 months; mark the observed 0–72 month range; report where extrapolated predictions leave [0,1]. Turn 2: ask what a prediction of 1.3 or −0.2 means as a probability; then fit LogisticRegression to the same data, plot the sigmoid curve, and confirm all predictions stay within (0,1). Takeaway: linear predictions are unbounded and can leave the valid probability range; the sigmoid enforces (0,1); calibration still needs checking.",
    sl: "Slide 9 demo turns + takeaway.",
    ex: "The 0–72 month observed range vs 0–90 extrapolation range is the setup for out-of-range predictions.",
    mt: "Forgetting the calibration caveat even after fixing the range." });

  Q({ id: "L6-20-Q1", lec: 6, pg: [20], tp: "Exam logistics", sb: "Midterm info", df: "easy", ty: "mcq", so: "lecture",
    pr: "What midterm information is announced on slide 20?",
    op: [
      "Midterm exam Nov. 21 — in-class 1.5~2h; see Moodle for the confirmed schedule, including venue, coverage, duration, permitted materials",
      "Midterm is take-home and open-book",
      "The midterm is cancelled",
      "The midterm is on Dec 21"
    ], an: 0,
    at: "Nov. 21, in-class 1.5–2h; check Moodle announcements for venue, coverage, duration, and permitted materials.",
    sl: "Slide 20 announcement.",
    ex: "Pairs with L1's grading breakdown (midterm 25%, closed-book).",
    mt: "Relying on slide details instead of the confirmed Moodle announcement." });

  Q({ id: "L6-21-Q1", lec: 6, pg: [21], tp: "Metrics", sb: "Session 2 framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What session question and concepts open Session 2 (slide 21)?",
    op: [
      "How do we decide who gets flagged, and measure whether the decisions are good? Concepts: confusion matrix, precision, recall, threshold, precision-recall curve, F1 score",
      "How do we fit the model? Concepts: likelihood, solver",
      "How do we build trees? Concepts: splits, pruning",
      "How do we cluster? Concepts: silhouette, inertia"
    ], an: 0,
    at: "The Session 2 question and concept list as stated.",
    sl: "Slide 21 divider.",
    ex: "The '73.5% accuracy but useless' promise is fulfilled by the dummy classifier (slide 32).",
    mt: "Treating evaluation as an afterthought — it is half the session's content." });

  Q({ id: "L6-36-Q1", lec: 6, pg: [36], tp: "ROC/AUC", sb: "Session 3 framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What session question and concepts open Session 3 (slide 36)?",
    op: [
      "Is there a way to evaluate a classifier without committing to a threshold — and when should we use a different model? Concepts: TPR, FPR, ROC curve, AUC, probabilistic AUC interpretation, decision tree, model selection",
      "How do we tune the learning rate? Concepts: SGD, Adam",
      "How do we handle missing data? Concepts: MCAR, MAR, MNAR",
      "How do we compute R²? Concepts: SSres, SStot"
    ], an: 0,
    at: "The Session 3 question and concept list as stated.",
    sl: "Slide 36 divider.",
    ex: "Two motivations: threshold-free ranking evaluation + model-family comparison.",
    mt: "Thinking ROC/AUC removes the need for a threshold in deployment — you still choose one to act." });

  Q({ id: "L6-41-Q1", lec: 6, pg: [41], tp: "AUC", sb: "Demo staging", df: "medium", ty: "short", so: "lecture",
    pr: "What is the verification challenge and expectation of the AUC demo (slide 41)?",
    at: "Challenge: sample one positive and one negative independently with replacement; give 1 for a higher positive score, ½ for a tie, 0 otherwise; average the credits. Expectation: sklearn roc_auc_score() ≈ 0.84 and the empirical pair-sampling estimate (10,000 random pairs) ≈ 0.84 — close within Monte Carlo sampling error. This applies VERIFY's Execute and Reason steps to the meaning of a metric.",
    sl: "Slide 41 demo setup.",
    ex: "The demo demonstrates that metric definitions are testable claims, not just library outputs.",
    mt: "Expecting the sampled estimate to match exactly — it agrees within sampling error." });
})();
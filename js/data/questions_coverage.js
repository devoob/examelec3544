/* Coverage questions — demo slides, dividers with testable framing, and image-only slides
   whose content was verified from the rendered slide images (L2 p.27, L3 p.41, L6 p.49). */
(function () {
  var L = 0;

  
  
  Q({ id: "L2-27-Q1", lec: 2, pg: [27], tp: "Covariance", sb: "Why n−1 (image slide)", df: "hard", ty: "calc", so: "lecture",
    pr: "State Bias(estimate) = E[estimate] − true value. Using R = Σ(Xᵢ − X̄)², show that E[R/(n−1)] = σ² while E[R/n] = ((n−1)/n)·σ², and verify with the two-point sample X = ±1 (σ² = 1, n = 2).",
    at: "Bias(estimate) = E[estimate] − true value (expectation averages over repeated samples). With R = Σ(Xᵢ − X̄)²: E[R] = nσ² − n(σ²/n) = (n−1)σ², so E[R/n] = ((n−1)/n)σ² (biased low) while E[R/(n−1)] = σ² (unbiased). Exact table for n = 2 (X = ±1, µ = 0, σ² = 1; samples each 1/4): (−1,−1): R = 0; (−1,+1): R = 2; (+1,−1): R = 2; (+1,+1): R = 0. Average over all four samples: E[R/n] = (0+1+1+0)/4 = 0.5 (too low vs σ² = 1); E[R/(n−1)] = (0+2+2+0)/4 = 1 = σ² ✓. The deviations sum to zero — one constraint — leaving n−1 degrees of freedom.",
    sl: "Slide 27 (image-only; verified from rendering): R = Σ(Xᵢ−µ)² − n(X̄−µ)²; E[R] = nσ² − n(σ²/n) = (n−1)σ². 'Divide by n: E[R/n] = (n−1)/n·σ²; divide by n−1: E[R/(n−1)] = σ².' Bottom line: 'Unbiased means correct on average across repeated samples. A single estimate can still be too high or too low.'",
    ex: "This is the formal proof behind Bessel's correction — a possible long-answer or derivation question.",
    mt: "Believing each individual sample estimate is exact — unbiasedness is an average property over repeated samples.",
    ref: "Lecture 2, p. 27 (image-only slide; text extraction empty — content reconstructed from the slide image)" });

  
  
  Q({ id: "L2-66-Q1", lec: 2, pg: [66], tp: "PCA selection", sb: "Trade-off framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What is the component-count trade-off stated?",
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

  
  
  
  
  Q({ id: "L3-41-Q1", lec: 3, pg: [41], tp: "Confidence intervals", sb: "Simulation (image slide)", df: "medium", ty: "calc", so: "lecture",
    pr: "A simulation builds 20 confidence intervals from repeated samples; 18 of them contain the true µ = 170. (a) How many intervals miss the parameter? (b) What does this demonstrate about the coverage procedure and about any single interval?",
    at: "(a) µ = 170 (green vertical line; sample means hover around it). (b) 2 intervals (shown in red) miss µ. (c) 'Each horizontal line is a 95% CI from one sample. The procedure captures µ about 95% of the time. But any single interval either contains µ or doesn't.'",
    sl: "Simulation of 20 nominal-95% intervals from repeated sampling; 18 cover µ (90% here — finite-sample fluctuation around 95%). Coverage is a property of the procedure.",
    ex: "A finite simulation shows ~95% coverage empirically — 18/20 here. This is the visual proof that coverage is a property of the PROCEDURE, not of one interval.",
    mt: "Expecting exactly 95% in every simulation — finite samples fluctuate around the nominal level.",
    ref: "Lecture 3, p. 41 (image-only slide; content reconstructed from the slide image)" });

  Q({ id: "L3-44-Q1", lec: 3, pg: [44], tp: "Hypothesis testing", sb: "Framing", df: "easy", ty: "mcq", so: "lecture",
    pr: "What two skills anchor the hypothesis-testing section?",
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

  
  
  
  
  
  
  
  
  Q({ id: "L5-7-Q1", lec: 5, pg: [7], tp: "Regression", sb: "Best-fitting line", df: "easy", ty: "mcq", so: "lecture",
    pr: "When fitting a line to data, what two questions must be answered: how is 'closeness' to the points measured, and what makes a fitted line optimal?",
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

  
  
  
  
  
  
  
  
  
  
  })();
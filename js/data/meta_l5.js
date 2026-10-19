/* Per-page metadata overlays — Lecture 5 (pages 1–58). */
window.DSFM_META = window.DSFM_META || {};
DSFM_META['5'] = {
  pages: {
    1: { t: "Course title slide", m: "Administrative.", p: [] },
    2: { t: "Lecture 5 title: Regression — Predicting Continuous Outcomes", m: "Divider slide.", p: [] },
    3: { m: "Module map + L4→L5 connection (prepared data → predictive models).", p: [] },
    4: { m: "Seven objectives — exam checklist for L5.", p: [] },
    5: { m: "CTA implementation-assistant era: specify clearly, verify outputs, interpret results.", p: ["Outsourcing interpretation — listed as your responsibility."] },
    6: { m: "Regression vs classification (how much vs which).", p: ["Classifying continuous targets."] },
    7: { t: "Best-fitting line illustration", m: "Motivating figure: what makes this line the best one? (answered by OLS on slide 10).", p: [] },
    8: {
      m: "ŷ = β₀ + β₁x vocabulary; β₁ = per-unit change — midterm 2(b) interpretation.",
      p: ["Swapping intercept/slope."],
      b: [{ k: "formula", name: "Simple linear regression", latex: "\\hat{y} = \\beta_0 + \\beta_1 x", note: "β₀ intercept (x=0); β₁ slope — 'for each 1-unit increase in x, ŷ changes by β₁ units'." }]
    },
    9: {
      m: "Residual definition e = y − ŷ with sign meanings; midterm 2(c) applies it.",
      p: ["Flipping the sign convention."],
      b: [{ k: "formula", name: "Residual", latex: "e_i = y_i - \\hat{y}_i", note: "Positive = under-predicted; negative = over-predicted." }]
    },
    10: {
      m: "OLS objective Σeᵢ² — definitional; midterm 2(b) uses the closed-form minimiser.",
      p: ["Saying OLS minimizes absolute errors (that is LAD)."],
      b: [{ k: "formula", name: "OLS objective", latex: "\\hat{\\beta} = \\arg\\min_{\\beta}\\ \\lVert y - X\\beta \\rVert_2^2 = \\arg\\min \\sum_i (y_i - \\hat{y}_i)^2", note: "Squaring makes errors nonnegative and penalizes large errors disproportionately." },
          { k: "formula", name: "OLS closed form", latex: "\\hat{\\beta} = (X^{\\top} X)^{-1} X^{\\top} y", note: "Valid when XᵀX is invertible (full column rank) — the midterm's given formula." }]
    },
    11: { t: "CTA Demo — Does the choice of error measure matter?", m: "Demo setup (OLS vs LAD with an outlier); insight on slide 12.", p: [] },
    12: { m: "Squared-error outlier sensitivity; feature vs bug framing.", p: ["Assuming squared error is always preferable."] },
    13: { m: "Multiple regression equation and partial-effect meaning.", p: ["Reading βj as a total effect."] },
    14: { m: "Partial-effect interpretation with unit arithmetic (MedInc 0.45 → $45K; AveRooms 0.12 → $12K) + association-not-causation caution.", p: ["Ignoring the $100,000s target units."] },
    15: { m: "California Housing facts: 20,640 × 8; target in $100,000s; feature list.", p: ["Forgetting units when interpreting."] },
    16: { m: "The 0.35 → 0.12 rooms-coefficient puzzle.", p: ["Concluding one model is wrong."] },
    17: { m: "Verification turns + r(AveRooms, MedInc) ≈ 0.33, r(Price, MedInc) ≈ 0.69.", p: ["Calling 0.33 'high correlation' — it is moderate shared variance."] },
    18: { m: "Shared-variance explanation for coefficient shifts.", p: [] },
    19: { m: "Four-statistic chain: estimate → SE → t = β̂/SE → p-value + 95% CI.", p: ["Skipping the SE step."] },
    20: { m: "Session 1 summary — five points.", p: [] },
    21: { t: "From Building Models to Judging Them (divider)", m: "Divider slide for Session 2.", p: [] },
    22: { m: "Multicollinearity definition + three consequences + 'predictions can still be accurate' — high-priority true/false material.", p: ["Claiming predictions become invalid."] },
    23: {
      m: "VIF thresholds and remedies — precise numeric facts.",
      p: ["Mixing >5 (investigate) and >10 (act)."],
      b: [{ k: "table", caption: "VIF interpretation (slide 23)",
        headers: ["VIF", "Interpretation"],
        rows: [["=1", "No overlap with other predictors"], ["1–5", "Moderate — usually acceptable"], [">5", "Concerning — investigate further"], [">10", "Serious — take action"]] }]
    },
    24: { m: "Multicollinearity: interpretation hurt, prediction fine — goal-dependent.", p: ["Assuming high R² neutralizes the issue."] },
    25: { m: "Overfitting definition + memorizer analogy.", p: ["Confusing with underfitting."] },
    26: { m: "Train/test split protocol (70–80/20–30, random, no leakage) + train_test_split code.", p: ["Preprocessing before splitting (leakage)."] },
    27: {
      m: "R² = 1 − SSres/SStot with interpretation scale; midterm 2(d) computes it (0.9846).",
      p: ["Treating R² = 1 as the goal — the slide calls it 'suspicious — likely overfit!'"],
      b: [{ k: "formula", name: "Coefficient of determination", latex: "R^2 = 1 - \\frac{SS_{res}}{SS_{tot}} = 1 - \\frac{\\sum_i (y_i-\\hat{y}_i)^2}{\\sum_i (y_i-\\bar{y})^2}", note: "Fraction of variance in y explained by the model." }]
    },
    28: { m: "Three R² limitations — the basis of midterm 2(e)(iv).", p: ["Believing random features lower training R²."] },
    29: { m: "Residual plot reading (random scatter = good) and number-vs-diagnosis distinction.", p: ["Judging fit by R² alone."] },
    30: { m: "Four residual patterns: random (good), funnel (heteroscedasticity), curved (non-linearity), clusters (missing categorical) — figure-only slide, verified from image.", p: ["Misattributing funnel/curved/cluster patterns."] },
    31: { t: "CTA Demo — Complete model evaluation workflow", m: "Demo setup: six deliverables (split, fit, R² train/test, residual plot, residual histogram, interpretation); insight on slide 32.", p: [] },
    32: { m: "CTA executed all 6 but misread the residual plot (non-linear curve) — 'the CTA is your computational engine; you are the diagnostic eye'.", p: ["Trusting verbal verdicts over the plot."] },
    33: { m: "Bias/variance definitions + four dartboard quadrants + bias²+variance+noise decomposition.", p: ["Swapping bias and variance meanings."] },
    34: { m: "Underfit (deg 1) / good (deg 4) / overfit (deg 15): lowest training error but highest test error — midterm 2(f) core.", p: ["Choosing the highest-degree model."] },
    35: { m: "'Most important figure': training error monotone, test error U-shaped, generalization gap — midterm 2(f)(i) mark-the-minimum.", p: ["Marking the curves' crossing point instead of the validation minimum."] },
    36: { m: "Auto MPG: 274 train/118 test; degree 1/2/15 RMSEs; coefficients = degree + 1; 6% train vs 54% test change (3→16).", p: ["Forgetting the intercept in coefficient counts."] },
    37: { m: "RMSE definition (√MSE, target units) + training/test divergence chart.", p: ["Mixing up which curve rises/falls."] },
    38: { m: "Random-feature puzzle mechanism: training R² cannot decrease; test R² typically drops — midterm 2(f)(ii) mechanism.", p: ["Expecting training R² to fall with useless features."] },
    39: { m: "Session 2 summary — six points.", p: [] },
    40: { t: "Constraining Models to Improve Them (divider)", m: "Divider slide for Session 3 (regularization).", p: [] },
    41: { m: "p-large-vs-n motivation: 8/20,640 works; 100+/20,640 overfits; n/p ≈ 2,580 vs ≈ 200.", p: ["Believing more features always help."] },
    42: {
      m: "Regularized objective: data fidelity + λ·penalty; λ spectrum (0 → pure OLS; large → near-zero coefficients).",
      p: ["Confusing the two objective terms."],
      b: [{ k: "formula", name: "Regularized objective", latex: "\\hat{\\beta} = \\arg\\min_{\\beta}\\ \\sum_i (y_i-\\hat{y}_i)^2 + \\lambda\\,\\mathrm{Penalty}(\\beta)", note: "λ (α in sklearn) controls the fit/simplicity balance." }]
    },
    43: {
      m: "Ridge L2: λΣβj², shrinkage without exact zeros, good for multicollinearity; Ridge(alpha=1.0).",
      p: ["Claiming Ridge does feature selection."],
      b: [{ k: "formula", name: "Ridge penalty (L2)", latex: "\\lambda\\sum_j \\beta_j^2", note: "Shrinks coefficients; typically keeps them nonzero." }]
    },
    44: {
      m: "Lasso L1: λΣ|βj|, exact zeros = automatic feature selection; PCA creates vs Lasso selects.",
      p: ["Confusing Lasso with PCA's role."],
      b: [{ k: "formula", name: "Lasso penalty (L1)", latex: "\\lambda\\sum_j |\\beta_j|", note: "Some coefficients become exactly zero — sparse solutions." }]
    },
    45: {
      m: "Scaling before regularization + fit-scaler-on-training-only leakage warning — high-priority.",
      p: ["Fitting the scaler on all data."],
      b: [
        { k: "formula", name: "Standardization (z-score)", latex: "z=\\frac{x-\\mu}{\\sigma}", note: "Fit µ and σ on TRAINING data only, then transform both splits — fitting on all data leaks test information." },
        { k: "formula", name: "Why scale before penalized regression", latex: "\\lambda\\sum_j \\beta_j^2 \\;\\;\\text{treats all } \\beta_j \\text{ equally} \\;\\Rightarrow\\; \\text{features must share a scale}", note: "MedInc ranges ≈ 0.5–15 vs AveRooms ≈ 1–8; without scaling the penalty is unfair across features." }
      ]
    },
    46: { t: "CTA Demo — Coefficient paths as penalty increases", m: "Demo setup (50 α values 0.001–10; diamond vs circle question).", p: [] },
    47: { m: "Lasso path observation: less important features zero first; at large α only the strongest survive.", p: ["Assuming elimination order is random."] },
    48: { m: "Diamond (L1) corners vs circle (L2) smoothness — why Lasso zeros and Ridge doesn't; 'corners produce zeros'.", p: ["Drawing the ellipse touching a diamond edge instead of a corner."] },
    49: { m: "Geometric visualization panels (figure) — ellipse hits diamond corner (β=0) vs circle smooth point (β≠0).", p: [] },
    50: {
      m: "Ridge vs Lasso comparison table + Elastic Net λ₁Σ|βj| + λ₂Σβj² + Lasso-multicollinearity caveat.",
      p: ["Recommending Lasso for highly correlated features."],
      b: [{ k: "table", caption: "Ridge vs Lasso (slide 50)",
        headers: ["", "Ridge (L2)", "Lasso (L1)"],
        rows: [["Penalty", "λΣβj² (squared)", "λΣ|βj| (absolute)"], ["Coefficients", "Shrink; typically remain nonzero", "Shrink; some reach exactly zero"], ["Feature selection", "No — keeps all features", "Yes — automatic"], ["Best when", "Many features all contribute; correlated features", "Many features, few relevant; sparse model wanted"], ["Geometry", "Circle — no corners → no zeros", "Diamond — corners → zeros"]] }]
    },
    51: { m: "α selection: try range → evaluate validation RMSE → pick min; LassoCV/RidgeCV shortcut.", p: ["Selecting α by training error."] },
    52: { m: "Complete workflow: Prepare (L4) → Build (S1) → Evaluate (S2) → Improve (S3); iterative, not linear.", p: ["Treating the workflow as one-way."] },
    53: { m: "Seven takeaways — L5 exam skeleton; Ridge shrinks, Lasso selects.", p: [] },
    54: { m: "L6 preview: what stays (split, overfitting, regularization, VERIFY) vs changes (target, model, metrics, imbalance); 95%-accuracy puzzle.", p: ["Thinking evaluation skills don't transfer."] },
    55: { m: "Four TIQs (OLS↔MLE; random-feature R²; Elastic Net; is polynomial regression linear?).", p: ["Calling polynomial regression 'nonlinear' — it is linear in coefficients."] },
    56: { m: "Readings/resources (ISLP 3.1–3.3, 6.2; sklearn modules) — support material.", p: [] },
    57: { m: "Closing contact slide — administrative.", p: [] },
    58: { m: "TA contacts — administrative.", p: [] }
  }
};
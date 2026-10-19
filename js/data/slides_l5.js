window.DSFM_SLIDES = window.DSFM_SLIDES || {};
DSFM_SLIDES["5"] = {
 "id": "5",
 "title": "Lecture 5 — Regression: Predicting Continuous Outcomes (OLS, R², RMSE, Ridge/Lasso)",
 "pages": [
  {
   "n": 1,
   "title": "Data Science with Foundation Models",
   "raw": "ELEC3544 · Fall 2026\n\n\n\n\nData Science with Foundation Models\n\n\nYang Liu\n\nThe University of Hong Kong",
   "status": "partial",
   "img": "img/l5_01.jpg"
  },
  {
   "n": 2,
   "title": "Regression:",
   "raw": "Regression:\nPredicting Continuous Outcomes\n\n\n You've prepared the data. Now let's make predictions.\n\n\n\n\n                                                         2",
   "status": "partial",
   "img": "img/l5_02.jpg"
  },
  {
   "n": 3,
   "title": "From Prepared Data to Predictive Models",
   "raw": "From Prepared Data to Predictive Models\n\n\n\n Module 1: Foundations            Module 2: Core Methods              Module 3: Modern Integration\n L1–L4: Math, Stats, Data Prep   L5–L7: Regression, Classification,   L8–L10: FM Collaboration, DL, How\n                                          Unsupervised                           FMs Work\n\n\n\n      L4 → L5 Connection: In L4, you learned to clean, explore, and prepare data. Now\n      we use that prepared data to build predictive models — starting with regression.\n\n\n\n\n                                                                                                    3",
   "status": "full",
   "img": "img/l5_03.jpg"
  },
  {
   "n": 4,
   "title": "Today's Learning Objectives",
   "raw": "Today's Learning Objectives\n\n1. Explain what linear regression computes and why squared errors are the standard loss function\n\n2. Interpret regression coefficients in simple and multiple regression; diagnose multicollinearity\n\n3. Evaluate models using train/test splits, R², residual plots, and RMSE\n\n4. Apply Ridge and Lasso regularization with geometric intuition for constraint behavior\n\n5. Direct CTA-assisted model building: structured requests, verification, and iteration\n\n6. Connect L4's data preparation pipeline to model performance\n\n7. Describe the bias-variance tradeoff using the dartboard analogy\n\n\n                                                                                                     4",
   "status": "full",
   "img": "img/l5_04.jpg"
  },
  {
   "n": 5,
   "title": "The CTA's New Role: You Direct, It Implements, You Evaluate",
   "raw": "The CTA's New Role: You Direct, It Implements, You Evaluate\n\nBefore (L2–L4): Learning Partner                   Now (L5+): Implementation Assistant\n\n \"Explain what a covariance matrix is\"             \"Fit a regression with these 3 features and report R²\"\n \"Why does PCA use eigenvalues?\"              → \"Generate a residual plot and interpret it\"\n \"Help me understand Bayes' theorem\"               \"Apply Lasso for 50 α values and plot the path\"\n\n\nYour Three New Responsibilities\n1. Specify clearly                 2. Verify outputs               3. Interpret results\nTell the CTA exactly what to       Check that computations         Decide what the results\nproduce                            and plots are correct           mean for your problem\n\n\n                                                                                                     5",
   "status": "full",
   "img": "img/l5_05.jpg"
  },
  {
   "n": 6,
   "title": "Regression Answers the Question of \"How Much\"",
   "raw": "Regression Answers the Question of \"How Much\"\nRegression predicts continuous outcomes — numbers on a scale, like price or temperature.\n\n   How much will this house sell for?                        → Price ($)\n\n   How many units will we sell next quarter?                 → Quantity\n\n   What will the temperature be tomorrow?                    → Degrees °C\n\n   How long until this machine needs maintenance?            → Hours\n\n\n   Regression vs. Classification (L6 preview): Regression predicts \"how much\" (continuous).\n   Classification predicts \"which category\" (discrete).\n\n\n\n                                                                                              6",
   "status": "full",
   "img": "img/l5_06.jpg"
  },
  {
   "n": 7,
   "title": "Simple Linear Regression Draws the Best-Fitting Line",
   "raw": "Simple Linear Regression Draws the Best-Fitting Line\n\n\n\n\n   The line captures the trend. But \"closest\" how? What makes this line the best one?\n                                                                                        7",
   "status": "full",
   "img": "img/l5_07.jpg"
  },
  {
   "n": 8,
   "title": "The Prediction Equation",
   "raw": "The Prediction Equation\nSymbol Meaning\n                                                                              [FIGURE 2: Annotated scatter with\n  y    Target variable — what we want to predict                                     β₀ and β₁ labeled]\n       (e.g., house price)\n  x    Predictor — the input feature (e.g., median\n       income)\n  ŷ    Predicted value — our model's estimate of y\n       for a given x\n  β₀   Intercept — predicted value when x = 0\n  β₁   Slope — change in ŷ per one-unit increase in x\n\nSimple Linear Regression\n\n\nInterpretation: β₁ = \"for each 1-unit increase in x, ŷ changes by β₁ units\"\n                                                                                                                  8",
   "status": "full",
   "img": "img/l5_08.jpg"
  },
  {
   "n": 9,
   "title": "Residuals Measure How Far Each Prediction Misses",
   "raw": "Residuals Measure How Far Each Prediction Misses\n\n yᵢ = observed value (what actually happened)\n ŷᵢ = predicted value (what our model said)\n eᵢ = residual = the prediction error for\n observation i\n\n\n                 Residual Definition\n\n\n\nPositive = under-predicted (actual > predicted)\nNegative = over-predicted\n\n\nWe need a single number summarizing all residuals → the objective function.\n                                                                              9",
   "status": "full",
   "img": "img/l5_09.jpg"
  },
  {
   "n": 10,
   "title": "OLS Finds the Line That Minimizes Total Squared Error",
   "raw": "OLS Finds the Line That Minimizes Total Squared Error\nOrdinary Least Squares (OLS) is the standard approach: square each residual, add them up, and\nfind the β₀ and β₁ that make this sum as small as possible.\n       The OLS Objective\n\n\n       Squaring makes all errors nonnegative and penalizes large errors disproportionately\n\n       Step 1: Compute the prediction for each data point: ŷi = β0 + β1xi\n\n       Step 2: Compute each residual: ei = yi − ŷi\n\n       Step 3: Square and sum: ∑ei2 → find β0, β1 that minimize this\n\nWe can do derivation of the closed-form solution — but the CTA handles computation and coding. Our job:\nunderstand the choice.\n\n But why squared? Would absolute errors work just as well? Let's find out...\n                                                                                                          10",
   "status": "full",
   "img": "img/l5_10.jpg"
  },
  {
   "n": 11,
   "title": "🤖 CTA Demo: Does the Choice of Error Measure Matter?",
   "raw": "🤖 CTA Demo: Does the Choice of Error Measure Matter?\n\n What We'll Explore\n We'll ask the CTA to generate a dataset with an outlier, fit two different lines — one minimizing squared errors\n (OLS), one minimizing absolute errors (LAD) — and compare how they respond to the outlier. Then we'll remove\n the outlier and see what changes.\n\nKey Questions:\n •    Which line is pulled more toward the outlier, and why?\n •    How much does each line change when the outlier is removed?\n •    When is outlier sensitivity a feature versus a bug?\n\n\n ✓ VERIFY Connection: Execute — does the code produce the expected comparison? Reason —\n does the visual evidence support the claim about outlier sensitivity?\n\n                                                                                  Pattern: Iterative Refinement\n                                                                                                                    11",
   "status": "full",
   "img": "img/l5_11.jpg"
  },
  {
   "n": 12,
   "title": "Squared Errors Penalize Large Mistakes More Heavily",
   "raw": "Squared Errors Penalize Large Mistakes More Heavily\n\n\n\n                     [FIGURE 4: OLS vs. LAD comparison — 2-panel (with/without outlier)]\n                              [Source: Demo 1 output or pre-rendered backup]\n\n\n\n\n Key Insight: Squaring amplifies large errors. OLS is pulled toward outliers because a single\n large residual contributes disproportionately to the total squared error.\n ✓ Feature: When outliers are real signal                  ✗ Bug: When outliers are noise or data\n that should influence the model                           errors that distort the model\n🤔 What's the connection between OLS and maximum likelihood under normal errors? (Explore with CTA)   12",
   "status": "full",
   "img": "img/l5_12.jpg"
  },
  {
   "n": 13,
   "title": "Multiple Regression Uses Several Features Simultaneously",
   "raw": "Multiple Regression Uses Several Features Simultaneously\nHouse prices don't depend on income alone — rooms, location, age, and more all matter.\nMultiple regression lets us use all of these simultaneously.\n    Simple (1 feature):                                 Multiple (p features):\n    ŷ = β₀ + β₁x                                     → ŷ = β₀ + β₁x₁ + β₂x₂ + ... + β x\n                                                                                    p p\n\n\n Multiple Linear Regression\n\n\n Each βj measures the effect of feature xⱼ, controlling for all other features\n\n  • p predictors, each with its own coefficient βj\n  • β₀ is still the intercept (predicted value when all xⱼ = 0)\n  • Geometry shifts from a line to a hyperplane — but the math is the same idea\n\nThe key insight is that each coefficient has a specific, interpretable meaning.\n                                                                                          13",
   "status": "full",
   "img": "img/l5_13.jpg"
  },
  {
   "n": 14,
   "title": "Each Coefficient Measures Effect While Holding Others Constant",
   "raw": "Each Coefficient Measures Effect While Holding Others Constant\n The Most Important Practical Concept: β₁ = the change in ŷ when x₁ increases by 1, holding\n all other predictors constant. This is the partial effect of x₁.\n\n Example: California Housing                                            Note: House value is measured in $100,000s.\n If β(MedInc) = 0.45        → Each $10K increase in median income is associated with a $45K increase\n                            in house value, holding rooms, age, location constant\n If β(AveRooms) = 0.12      → A 1-room rise in block-group average rooms per household is associated\n                            with $12K higher median house value, holding other predictors constant.\n\n ⚠ Caution: Association, not causation. \"Holding constant\" is a statistical concept, not a\n physical experiment. The coefficient describes pattern in the data, not a causal mechanism.\n\nTwo questions every coefficient answer should address:\n\n 1. Direction: Is the association positive or                2. Magnitude: How large is the effect in\n negative?                                                   meaningful units?\n                                                                                                                  14",
   "status": "full",
   "img": "img/l5_14.jpg"
  },
  {
   "n": 15,
   "title": "California Housing: A Real Dataset Ready for Regression",
   "raw": "California Housing: A Real Dataset Ready for Regression\n             20,640                                         8                            House Value\n            Observations                                 Features                                 Target\n        California block groups                median income, rooms, age, ...               median, in $100,000s\n\nRecall from L2: each row is one observation (n = 20,640), each column is one feature (p = 8).\n\n\n\n                    [FIGURE 18: California Housing data preview — 5 rows, 8 features + target]\n                    [Source: pandas .head() output — sklearn.datasets.fetch_california_housing]\n\n\n\n\n L4 Connection: This data has already been cleaned. In practice, you'd apply L4's data wrangling pipeline\n before reaching this point.\nFeatures: MedInc, HouseAge, AveRooms, AveBedrms, Population, AveOccup, Latitude, Longitude\n\n\n                                                                                                                   15",
   "status": "full",
   "img": "img/l5_15.jpg"
  },
  {
   "n": 16,
   "title": "Coefficients Change When You Add Predictors",
   "raw": "Coefficients Change When You Add Predictors\nThe motivating puzzle: what happens to a coefficient when we add another feature?\n\n                Simple Regression                                                    Multiple Regression\n               Price ~ AveRooms only                                              Price ~ AveRooms + MedInc\n                                                            →\n              β(AveRooms) = +0.35                                                   β(AveRooms) = +0.12\n\n\n\n       🤔 The coefficient for rooms dropped by roughly two-thirds. Why?\n       Is the simple regression wrong? Is the multiple regression wrong? Or are they answering different questions?\n\n\nLet's ask the CTA to explain — and then verify its explanation with data.\n\n\n\n                                                                                                                      16",
   "status": "full",
   "img": "img/l5_16.jpg"
  },
  {
   "n": 17,
   "title": "🤖 CTA Demo: Why Did the Rooms Coefficient Shrink?",
   "raw": "🤖 CTA Demo: Why Did the Rooms Coefficient Shrink?\n What We'll Explore\n The CTA should be able to explain why a coefficient changes when we add a predictor. But can we verify its\n explanation? We'll ask for an explanation, then test it by computing the correlation between the two predictors.\n\n\nKey Turns:\n   Turn 1: Ask: \"Why does the rooms coefficient change when we add income?\"\n\n   Turn 2: CTA explains shared variance / confounding between predictors\n\n   Turn 3: Test: \"Compute the correlation between AveRooms and MedInc; Price and MedInc\"\n   Turn 4: CTA computes r(AveRooms, MedInc) ≈ 0.33; r(Price, MedInc) ≈ 0.69 — substantial correlation\n   confirms the explanation\n\n ✓ VERIFY Connection: Validate — is the explanation consistent with data? Execute — does the correlation\n computation confirm the claim?\n                                                                   Pattern: Verification Through Computation\n                                                                                                                17",
   "status": "full",
   "img": "img/l5_17.jpg"
  },
  {
   "n": 18,
   "title": "Shared Variance Explains Why Coefficients Shift",
   "raw": "Shared Variance Explains Why Coefficients Shift\nRecall from L3: correlation measures linear association between two variables, from −1 to +1.\n\n\nWhen two predictors are correlated, they share\nexplanatory power. In simple regression, rooms\ngets credit for everything — including the part\nthat's really due to income.\n\n\n Key Insight: The verification loop — CTA\n explains → human designs a test → CTA\n runs the test → human evaluates. This is the\n Implementation Assistant workflow in action.\n\n\n\nDemo result: r(AveRooms, MedInc) ≈ 0.33; r(Price, MedInc) ≈ 0.69 — substantial correlation. The CTA's\nexplanation checks out.\n                                                                                                        18",
   "status": "full",
   "img": "img/l5_18.jpg"
  },
  {
   "n": 19,
   "title": "Four Statistics Tell You Whether a Coefficient Is Trustworthy",
   "raw": "Four Statistics Tell You Whether a Coefficient Is Trustworthy\nFrom L3: p-values test hypotheses; confidence intervals give plausible ranges. Now you’ll see them applied to\nregression coefficients.\n\n1    Estimate               Our best guess for the effect of this feature                           (Taught on Slides 7, 13)\n     ! (coefficient)\n     𝜷\n↓\n\n2    How uncertain?         If we collected new data and refit, how much           🤖 Ask the CTA: \"Why is the SE for MedInc smaller\n     Std Error (SE)         would 𝛽# vary?                                         than for AveRooms?\"\n\n↓\n\n3    Signal vs. noise?      Is the coefficient far enough from zero, relative      🤖 Ask the CTA: \"What t-value would we need to be\n       ! / SE\n     t=𝜷                    to its uncertainty, to be convincing?                  confident this feature matters?\"\n\n↓\n\n4    Verdict                How likely is this if the feature had no effect?       🤖 Ask the CTA: \"Show me how the CI changes if I\n     p-value + 95% CI       What range of true values is plausible?                double the sample size\"\n                              The chain: estimate → uncertainty → signal-to-noise → verdict\n\n 💡 Key Insight: The CTA helps generate all four statistics. Your job: understand the chain so you can spot\n when the numbers don’t tell a trustworthy story. In Session 2, you’ll see multicollinearity break this chain by\n inflating standard errors.\n                                                                                                                                      19",
   "status": "full",
   "img": "img/l5_19.jpg"
  },
  {
   "n": 20,
   "title": "Session 1 Summary: Regression Finds Relationships, Coefficients Tell",
   "raw": "Session 1 Summary: Regression Finds Relationships, Coefficients Tell\nthe Story\n 1. Simple linear regression finds the best-fitting line by minimizing squared errors (OLS)\n\n 2. Squaring amplifies large errors — a deliberate choice, not the only option\n\n 3. Multiple regression uses p features simultaneously, each with a partial-effect coefficient\n\n 4. Coefficients change when you add predictors because correlated features share explanatory\n power\n\n 5. A regression summary table connects to L3's statistics: coefficients, standard errors, p-values,\n CIs\n\n\n         Coming Next — Session 2: We've built a model. But can we trust it? How do we know it will\n         work on new data?\n\n                                                                                                       20",
   "status": "full",
   "img": "img/l5_20.jpg"
  },
  {
   "n": 21,
   "title": "From Building Models to Judging Them",
   "raw": "From Building Models to Judging Them\n\n\n\n\n                                       21",
   "status": "partial",
   "img": "img/l5_21.jpg"
  },
  {
   "n": 22,
   "title": "Multicollinearity Means Predictors Share Information",
   "raw": "Multicollinearity Means Predictors Share Information\nRecall from L3: correlation measures linear association between two variables, from −1 to +1.\n\n Definition: Multicollinearity or Collinearity occurs when two or more predictor variables are highly\n correlated with each other — they carry overlapping information about the target.\n\nConsequences:\n\n    ⚠ Coefficient instability — small changes in data cause large swings in individual β values\n\n    ⚠ Inflated standard errors — harder to determine if individual features are significant\n\n    ⚠ Unreliable individual interpretation — can't cleanly separate each feature's contribution\n\n Key Insight: Predictions can still be accurate even with multicollinearity. The problem is with interpreting\n individual coefficients, not with the model's overall predictions.\n\nThis formalizes what we saw in Demo 2: rooms and income share variance (r ≈ 0.33), making each coefficient\nunstable across models.\n\n\n                                                                                                                22",
   "status": "full",
   "img": "img/l5_22.jpg"
  },
  {
   "n": 23,
   "title": "Diagnose Multicollinearity with Correlation Matrices and VIF",
   "raw": "Diagnose Multicollinearity with Correlation Matrices and VIF\nTool 1: Correlation Matrix Heatmap                              Tool 2: Variance Inflation Factor (VIF)\n\n                                                                 VIF         Interpretation\n                                                                 =1          No overlap with other predictors\n                                                                 1–5         Moderate — usually acceptable\n                                                                 >5          Concerning — investigate further\n                                                                 > 10        Serious — take action\n                                                                VIF measures how much a coefficient estimate's\n                                                                variance is inflated by correlation with other\n                                                                predictors. Higher VIF = more shared information.\n\nLook for |r| > 0.7–0.8 between predictor pairs.\n\nWhat to do if you find it:\n\n Remove                                  Combine                                      Regularize\n Drop one of the correlated features     Create a composite feature (e.g., average)   Use Ridge or Lasso (latter slides)\n                                                                                                                           23",
   "status": "full",
   "img": "img/l5_23.jpg"
  },
  {
   "n": 24,
   "title": "When Multicollinearity is a Problem and When It isn't",
   "raw": "When Multicollinearity is a Problem and When It isn't\n Matters for Interpretation                               Less of an Issue for Prediction\n • \"Which features drive house prices?\"                   • \"What will this house sell for?\"\n • \"Is income or rooms more important?\"                   • \"Predict next quarter's revenue\"\n • \"Should we invest in feature X?\"                       • \"Estimate tomorrow's temperature\"\n → Individual coefficients unreliable                     → Overall predictions still accurate\n → Standard errors inflated → lower precision             → Model uses combined information effectively\n\n\n       Practical Takeaway: Always check for multicollinearity. Whether it's a problem depends on your\n       goal: interpretation requires action, prediction usually doesn't.\n\nMulticollinearity threatens interpretation. But there's a more fundamental problem: a model can look\ngreat on training data and fail on new data. This is overfitting.\n\n\n                                                                                                          24",
   "status": "full",
   "img": "img/l5_24.jpg"
  },
  {
   "n": 25,
   "title": "A Model That Memorizes Noise Has Overfit",
   "raw": "A Model That Memorizes Noise Has Overfit\n Student Analogy: Memorizing answers to past exams vs. understanding the material. The memorizer scores 100% on practice\n tests but fails on new questions. Overfitting is the same problem: the model learns the noise in the training data instead of the\n underlying pattern.\n\n\n\n\n Overfitting: A model performs well on the data it was trained on but poorly on new, unseen data. It has\n captured noise rather than signal.\nHow do we detect this? We need to test the model on data it has never seen.                                                          25",
   "status": "full",
   "img": "img/l5_25.jpg"
  },
  {
   "n": 26,
   "title": "Train/Test Split Separates Learning from Evaluation",
   "raw": "Train/Test Split Separates Learning from Evaluation\n\n                [FIGURE 7: Train/test split diagram — horizontal bar split 80/20 with arrows]\n                    [Training set (80%) → fit model | Test set (20%) → evaluate model]\n\n\n\n\n  1. Split your data before fitting: typically, 70–80% training, 20–30% test. [keep it random and balanced]\n\n  2. The model learns patterns from the training set only. [keep test set unseen and not leaked]\n\n  3. Evaluate performance on the test set — data the model has never seen\n\nImplementation: X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2,\nrandom_state=42)                                                                                              26",
   "status": "full",
   "img": "img/l5_26.jpg"
  },
  {
   "n": 27,
   "title": "R² Measures the Fraction of Variance Your Model Explains",
   "raw": "R² Measures the Fraction of Variance Your Model Explains\nFrom L2: variance measures how spread out values are — the average squared deviation from the mean (ȳ).\n\n                                           → unexplained variance (residual sum of squares)\n                                → total variance (how much y varies overall)\n\n        Coefficient of Determination\n\n\n        R² = 0.7 means the model explains 70% of the variance in y\n\nInterpretation Guide:\n               R² = 0                                  R² = 0.5                                R² = 1\n Model is no better than predicting the                                         Perfect prediction (suspicious — likely\n                                             Model explains half the variance\n                 mean                                                                           overfit!)\n\nWhat counts as a \"good\" R² depends entirely on the domain. Predicting stock prices? R² = 0.05 may be valuable.\nPredicting physics experiments? R² = 0.95 may be expected.\n\n                                                                                                                          27",
   "status": "full",
   "img": "img/l5_27.jpg"
  },
  {
   "n": 28,
   "title": "R² has Limitations: High R² Does Not Guarantee a Good Model",
   "raw": "R² has Limitations: High R² Does Not Guarantee a Good Model\n\n Limitation 1: R² can NOT decrease as OLS gains features (on training data)\n Adding even random noise as a feature cannot decrease training R². More features = more flexibility = better\n fit to this specific dataset — even if the new features are meaningless.\n\n\n Limitation 2: R² does NOT detect wrong patterns\n A model that fits a straight line to curved data can still have a moderate R². The number alone doesn't tell you\n whether the model captures the right relationship.\n\n\n Limitation 3: R² can NOT compare across different datasets\n R² = 0.8 on a noisy dataset may reflect a better model than R² = 0.95 on a clean one. The baseline variance\n differs.\n\n\nThis is why we need additional tools: RMSE for absolute error and residual plots for pattern detection.\n\n\n                                                                                                                    28",
   "status": "full",
   "img": "img/l5_28.jpg"
  },
  {
   "n": 29,
   "title": "Residual Plots Reveal What Metrics Cannot",
   "raw": "Residual Plots Reveal What Metrics Cannot\nPlot residuals (y-axis) vs. predicted values ŷ (x-axis). A good model produces random scatter around\nzero. Any visible pattern reveals a problem.\n\n\n\n\n                         [FIGURE 8: Good residual plot — random scatter around y = 0]\n                     [x-axis: predicted values (ŷ) | y-axis: residuals (e ) | horizontal line at 0]\n\n\n\n\n Key Insight: Metrics give a number. Residual plots give a diagnosis. A model with R² = 0.8 and patterned\n residuals needs fixing; a model with R² = 0.6 and random residuals may be fine.                            29",
   "status": "full",
   "img": "img/l5_29.jpg"
  },
  {
   "n": 30,
   "title": "Four Residual Patterns and What They Diagnose",
   "raw": "Four Residual Patterns and What They Diagnose\n\n\n\n\nReference Slide: When you\ngenerate a residual plot, compare it\nagainst these four patterns.\nRandom scatter = good. Anything\nelse = diagnosis needed.\n\n\n\n\n                                                30",
   "status": "full",
   "img": "img/l5_30.jpg"
  },
  {
   "n": 31,
   "title": "🤖 CTA Demo: A Complete Model Evaluation Workflow",
   "raw": "🤖 CTA Demo: A Complete Model Evaluation Workflow\n What We'll Explore\n We'll give the CTA a single structured request specifying six deliverables. It will help execute a complete evaluation\n pipeline in seconds. But its interpretation of the residual plot will be incomplete — revealing that visual diagnostic\n judgment is a human skill.\n\nThe Structured Request (6 deliverables):\n   1. Split into 80/20 train/test\n   2. Fit linear regression with all features\n   3. Report R² on both train and test\n   4. Generate residual plot (residuals vs. predicted)\n   5. Generate histogram of residuals\n   6. Provide 3-sentence interpretation\n\n ✓ VERIFY: Execute — do all 6 outputs appear? Inspect — does the residual plot show patterns the CTA\n missed? Fix — iterate based on diagnostics.\n\n                                                                                Pattern: Structured Requests + Verification\n                                                                                                                          31",
   "status": "full",
   "img": "img/l5_31.jpg"
  },
  {
   "n": 32,
   "title": "The CTA Computes Quickly - But Interpreting Residuals Requires You",
   "raw": "The CTA Computes Quickly - But Interpreting Residuals Requires You\n\nWhat happened:\n ✓ The CTA executed all 6 deliverables\n correctly and quickly\n → The CTA said residuals \"look randomly\n distributed\"\n ✗ But the residual plot shows a non-linear\n curve in the lower range\n → We asked the CTA what could cause this\n — it suggested feature transformations\n\n\n\n\n Key Insight: The CTA is your computational engine. You are the diagnostic eye. The cycle: diagnose from\n residuals → iterate with CTA → re-evaluate.\n\n\n                                                                                                           32",
   "status": "full",
   "img": "img/l5_32.jpg"
  },
  {
   "n": 33,
   "title": "The Bias-Variance Tradeoff: The Dartboard Analogy",
   "raw": "The Bias-Variance Tradeoff: The Dartboard Analogy\n\nBias\nHow far off the average prediction is from the true value.\nHigh bias = systematically wrong = underfitting.                  [Dartboard Analogy — 4-quadrant visual]\n                                                               [Top-left: High bias, low variance (clustered off-\n                                                                             center = underfitting)\nVariance                                                       Top-right: Low bias, low variance (clustered on-\nHow much predictions change with different training data.                       center = ideal)\nHigh variance = unstable = overfitting.                        Bottom-left: High bias, high variance (scattered\n                                                                              off-center = worst)\n                                                               Bottom-right: Low bias, high variance (scattered\nKey Insight: More flexible models often trade lower bias for               on-center = overfitting)]\nhigher variance. Aim to minimize expected squared error:\nsquared bias + variance + irreducible noise.\n\n\n\n\n                                                                                                                    33",
   "status": "full",
   "img": "img/l5_33.jpg"
  },
  {
   "n": 34,
   "title": "Underfitting, Good Fit, and Overfitting Visualized",
   "raw": "Underfitting, Good Fit, and Overfitting Visualized\n\n\n\n           [FIGURE 10: Polynomial under/good/overfit — 3-panel comparison on synthetic sinusoidal data]\n        [Left: Degree 1 (underfit, straight line) | Center: Degree 4 (good fit) | Right: Degree 15 (overfit, wiggly)\n                                     Train and test errors shown below each panel]\n\n\n\n\n         Degree 1: Underfit                              Degree 4: Good Fit                              Degree 15: Overfit\n     Too simple — misses the pattern                  Captures the pattern without                Memorizes training data, fails on new\n                entirely                                   memorizing noise                                      data\n\n\nNotice: Degree 15 has the lowest training error but the highest test error. More complexity doesn't mean better generalization.           34",
   "status": "full",
   "img": "img/l5_34.jpg"
  },
  {
   "n": 35,
   "title": "More Complex Models Are Not Always Better",
   "raw": "More Complex Models Are Not Always Better\n\n\n\n\n  This is the most important figure in the course. Training error cannot increase as OLS gains features — the model gets better\n  at memorizing. Test error first decreases (less bias), then increases (more variance). The gap between the two curves is the\n  generalization gap. Your job is to find the sweet spot.\nPractical implication: always evaluate on test data. Training performance alone tells you nothing about generalization.\n                                                                                                                                  35",
   "status": "full",
   "img": "img/l5_35.jpg"
  },
  {
   "n": 36,
   "title": "Real Cars: More Coefficients, More Flexible Fits",
   "raw": "Real Cars: More Coefficients, More Flexible Fits\nPredict city-cycle fuel economy (mpg) from horsepower.\nUCI Auto MPG (1970–82): 274 training cars (blue), 118 held out. Fixed split (seed 42).\n\n                       2 fitted coefficients                                            3 fitted coefficients                                           16 fitted coefficients\n                                Polynomial degree 1                                              Polynomial degree 2                                              Polynomial degree 15\n                      75                                                               75                                                               75\n\n\n\n\n Fuel economy (mpg)                                               Fuel economy (mpg)                                               Fuel economy (mpg)\n                      50                                                               50                                                               50\n\n\n                      25                                                               25                                                               25\n\n\n                      0                                                                0                                                                0\n                           40       90      140       190   240                             40       90      140       190   240                             40       90      140       190   240\n                                         Horsepower                                                       Horsepower                                                       Horsepower\n\n                           Train 4.89        Test 4.96                                      Train 4.31        Test 4.52                                      Train 4.03        Test 6.95\nCoefficients = degree + 1 (including the intercept). Train/test errors are RMSE in mpg.\n\n     Same data and fitting rule. Only the number of fitted coefficients changes.\n                                                                                                                                                                                                36",
   "status": "full",
   "img": "img/l5_36.jpg"
  },
  {
   "n": 37,
   "title": "Training Error Falls, but Test Error Can Rise",
   "raw": "Training Error Falls, but Test Error Can Rise\nLeast squares minimizes MSE. RMSE is its square root, in mpg (lower is better).\n\n                           Training RMSE           Test RMSE\n               8\n                                                                                  3 versus 16 coefficients\n\n               6                                                                   Training error\n                                                                                   4.31 to 4.03 mpg\n\n  RMSE (mpg)\n               4                                                                   6% lower\n\n               2\n                                                                                   Test error\n                                                                                   4.52 to 6.95 mpg\n               0\n                   2   4   6          8           10           12   14   16        54% higher\n                               Number of fitted coefficients\n\n\nTraining: the 274 cars used to fit. Test: 118 cars the fit never saw.\n\n  Extra flexibility improves fitting, but can make predictions less reliable.\n                                                                                                             37",
   "status": "full",
   "img": "img/l5_37.jpg"
  },
  {
   "n": 38,
   "title": "Pause and Think: Why Does Training R² Never Decrease with More",
   "raw": "Pause and Think: Why Does Training R² Never Decrease with More\nFeatures?\n       🤔 Take 30 seconds to think about this.\n\n       If you add a completely random column of numbers as a feature to your regression,\n       training R² cannot decrease under OLS. Why? And what happens to test R²?\n\nThe Answer:\n Adding a feature gives the model more flexibility. Even a random column will correlate slightly with the\n target by chance in any finite sample. The model exploits this spurious correlation to reduce training error.\n\n Bias-variance connection: An irrelevant random feature adds no predictive signal, but can increase variance\n by fitting noise. Training R² cannot decrease under OLS, but test R² typically goes down.\n\n       🤔 Want to see this in action? Ask the CTA to add 1, 5, then 10 random columns to California\n       Housing and plot train vs. test R².\n\n\n                                                                                                                 38",
   "status": "full",
   "img": "img/l5_38.jpg"
  },
  {
   "n": 39,
   "title": "Session 2 Summary: Good Models Generalize, Not Just Memorize",
   "raw": "Session 2 Summary: Good Models Generalize, Not Just Memorize\n\n 1. Multicollinearity makes individual coefficients unreliable — diagnose with correlation matrices and VIF\n\n 2. Overfitting means a model memorizes noise; train/test split detects it\n\n 3. R² measures variance explained; RMSE measures error in target units — use both\n\n 4. Residual plots reveal problems that metrics miss — the CTA computes, you interpret\n\n 5. The bias-variance tradeoff: more complexity reduces bias but increases variance\n\n 6. Always evaluate on test data — training performance alone is misleading\n\n\n       Coming Next: The bias-variance tradeoff seems like a dilemma — but regularization offers a\n       way out. We can constrain complex models to improve generalization.\n                                                                                                              39",
   "status": "full",
   "img": "img/l5_39.jpg"
  },
  {
   "n": 40,
   "title": "Constraining Models to Improve Them",
   "raw": "Constraining Models to Improve Them\n\n\n\n\n                                      40",
   "status": "partial",
   "img": "img/l5_40.jpg"
  },
  {
   "n": 41,
   "title": "The Problem: Too Many Features, Not Enough Signal",
   "raw": "The Problem: Too Many Features, Not Enough Signal\nImagine you start with the California Housing dataset (8 features). As you'll see in projects and\npractice, feature engineering can expand your feature set dramatically. Starting from 8 raw\nfeatures, you might end up with 100+.\n\n p small relative to n                                  p large relative to n\n 8 features, 20,640 observations                        100+ features, same 20,640 observations\n n/p ≈ 2,580                                            n/p ≈ 200 (or worse with subsets)\n OLS works well — enough data per feature               OLS overfits — too many knobs to turn\n\n\n Bias-Variance Connection: More features means more model complexity, which means lower bias but\n higher variance. When p is large relative to n, the variance penalty dominates — OLS overfits.\n\nThe solution: keep all the features, but constrain how much influence each one can have. This is\nregularization.\n\n\n                                                                                                    41",
   "status": "full",
   "img": "img/l5_41.jpg"
  },
  {
   "n": 42,
   "title": "Regularization Adds a Penalty for Model Complexity",
   "raw": "Regularization Adds a Penalty for Model Complexity\n Regularized Objective\n\n\n First term = fit the data | Second term = keep the model simple | λ controls the balance\n\n Σ(yi − ŷi)²                                                           λ · Penalty(β)\n Data fidelity — how well the model fits the training data\n                                                                       Complexity penalty — discourages large coefficient values\n (same as OLS)\n\n\nThe penalty strength λ (also called α in sklearn):\n\n            λ=0                              Small λ                          Optimal λ                           Large λ\n No penalty → pure OLS (high       Light constraint → slightly less   Best balance → minimizes total       Heavy constraint → all\n           variance)                 variance, slightly more bias                test error            coefficients near zero (high bias)\n\n\n\n Key Insight: Regularization trades a small, controlled increase in bias for a substantial reduction in variance.\n The net effect is usually better generalization.\n\n                                                                                                                                        42",
   "status": "full",
   "img": "img/l5_42.jpg"
  },
  {
   "n": 43,
   "title": "Ridge Regression Shrinks Coefficients Toward Zero",
   "raw": "Ridge Regression Shrinks Coefficients Toward Zero\nRidge Regression (L2 Penalty)\n\nPenalty = sum of squared coefficients → coefficients are shrunk, but typically remain nonzero\n\n  → Coefficients are penalized more strongly as λ increases — and typically remain nonzero\n\n  → Useful when you believe many features each contribute a small amount to the prediction\n\n  → Handles multicollinearity well — shrinking correlated coefficients stabilizes them\n\nImplementation: from sklearn.linear_model import Ridge; model = Ridge(alpha=1.0).fit(X_train,\ny_train)\n\n\nIntuition: Think of it as adding friction to the coefficients. OLS can swing wildly; Ridge dampens those\nswings. Every feature stays in the model, but with reduced influence.\n\n\n                                                                                                           43",
   "status": "full",
   "img": "img/l5_43.jpg"
  },
  {
   "n": 44,
   "title": "Lasso Regression Can Eliminate Features Entirely",
   "raw": "Lasso Regression Can Eliminate Features Entirely\nLasso Regression (L1 Penalty)\n\n\nPenalty = sum of absolute coefficients → some coefficients set to exactly zero = automatic feature selection\n\n  → Some coefficients shrink to exactly zero — the model drops those features entirely\n\n  → Automatic feature selection: Lasso tells you which features matter most\n\n  → Useful when you believe many features are irrelevant — the model becomes sparse\n\nImplementation: from sklearn.linear_model import Lasso; model = Lasso(alpha=1.0).fit(X_train,\ny_train)\n\n\nL2 Connection: Both Lasso and PCA (from L2) reduce dimensionality — but differently. PCA creates new\ncomposite features. Lasso selects existing features by zeroing out the rest.\n\n\n                                                                                                               44",
   "status": "full",
   "img": "img/l5_44.jpg"
  },
  {
   "n": 45,
   "title": "Feature Scaling is Required Before Regularization",
   "raw": "Feature Scaling is Required Before Regularization\nFrom L1/L4: standardization (subtract mean, divide by std dev) puts all features on the same scale.\nThe penalty λΣβj² (or λΣ|βj|) treats all coefficients equally.\nBut if features are on different scales, their coefficients will be on different scales too — the penalty\nwould unfairly penalize some features more than others.\n\n Example:\n MedInc ranges roughly from 0.5 to 15 in units of $10,000, while AveRooms ranges roughly from 1 to 8. The\n scales are different enough that the penalty would treat their coefficients unequally without standardization.\n\n\nSolution:from sklearn.preprocessing import StandardScaler; scaler = StandardScaler().fit(X_train)\n\n ⚠ Critical: Fit the scaler on training data only!\n If you fit the scaler on all data (including test), you leak test information into training. Use scaler.fit(X_train), then\n scaler.transform(X_train) and scaler.transform(X_test) separately.\n\n Rule: Always standardize features before Ridge or Lasso. Fit on training data only. Essential when penalties treat all coefficients\n equally.\n                                                                                                                                       45",
   "status": "full",
   "img": "img/l5_45.jpg"
  },
  {
   "n": 46,
   "title": "🤖 CTA Demo: How Coefficients Change as Penalty Increases",
   "raw": "🤖 CTA Demo: How Coefficients Change as Penalty Increases\n\n What We'll Explore\n We'll ask the CTA to fit Lasso for 50 different penalty strengths and plot how each coefficient changes. Some coefficients hit zero\n — why? We'll challenge the CTA to explain the geometric intuition: diamond vs. circle constraint regions.\n\n\nKey Turns:\n   Turn 1: “Fit Lasso on California Housing for 50 α values (regularization factor λ) from 0.001 to 10. Plot coefficient paths.\"\n\n   Turn 2: Observe which coefficients hit zero first. Pose: \"Ridge typically keeps coefficients nonzero. Why is Lasso different?\"\n\n   Turn 3: CTA explains diamond vs. circle constraint regions — challenge for geometric visualization.\n\n   Turn 4: Evaluate CTA's visualization.\n\n ✓ VERIFY: Reason — does the geometric explanation logically account for the empirical observation?\n Yours — can you explain the diamond-vs-circle argument yourself?\n\n                                                                Pattern: Iterative Refinement + Challenging for Completeness\n\n                                                                                                                                       46",
   "status": "full",
   "img": "img/l5_46.jpg"
  },
  {
   "n": 47,
   "title": "Lasso Coefficients Hit Zero at Different Penalty Strengths",
   "raw": "Lasso Coefficients Hit Zero at Different Penalty Strengths\n\n\n\n\nObservation: Less important features hit zero first. At large α, only the strongest predictors survive. This is\nautomatic feature selection — the model tells you what matters.\n🤔 Key question: Ridge typically keeps nonzero coefficients. Lasso coefficients hit exactly zero. Why the difference? The answer\nlies in geometry.\n                                                                                                                                  47",
   "status": "full",
   "img": "img/l5_47.jpg"
  },
  {
   "n": 48,
   "title": "Why Does Lasso Produce Exact Zeros but Ridge Doesn't?",
   "raw": "Why Does Lasso Produce Exact Zeros but Ridge Doesn't?\n    We've seen the empirical evidence: Lasso zeros out coefficients, Ridge merely shrinks\n    them. Both add a penalty. Both constrain the coefficients. So what's different?\n\n\n           The difference comes from the shape of the constraint region.\n           Lasso constrains coefficients to a diamond (L1 ball).\n           Ridge constrains coefficients to a circle (L2 ball).\n           The OLS solution's loss contours are ellipses.\n\n\n          The question becomes: where does the first ellipse touch the constraint boundary?\n\n Diamond (Lasso): Has corners on axes → ellipse             Circle (Ridge): Has no corners → ellipse touches\n hits a corner → one β = 0                                  a smooth point → typically β ≠ 0\n\n\n\n                                                                                                               48",
   "status": "full",
   "img": "img/l5_48.jpg"
  },
  {
   "n": 49,
   "title": "The Geometric Intuition: Diamond Meets Ellipse",
   "raw": "The Geometric Intuition: Diamond Meets Ellipse\n\n\n                [FIGURE 17: Geometric constraint visualization — CRITICAL prepared figure]\n            [Left panel: Lasso diamond + OLS contour ellipses → contour touches corner (β₂ = 0)\n        Right panel: Ridge circle + OLS contour ellipses → contour touches smooth point (both β > 0)\n                                          \"Corners produce zeros.\"]\n\n\n\n\nKey Insight: Corners produce zeros. The L1 diamond has corners on the axes. The L2 circle has no corners.\nThat geometric difference is why Lasso produces sparse solutions and Ridge doesn't.\n                                                                                                            49",
   "status": "full",
   "img": "img/l5_49.jpg"
  },
  {
   "n": 50,
   "title": "Ridge vs. Lasso: Choosing the Right Regularization",
   "raw": "Ridge vs. Lasso: Choosing the Right Regularization\n                    Ridge (L2)                                             Lasso (L1)\nPenalty             λΣβj² (squared)                                        λΣ|βj| (absolute)\nCoefficients        Shrink; typically remain nonzero                       Shrink, some reach exactly zero\nFeature selection   No — keeps all features                                Yes — automatic\nBest when           Many features, all contribute; correlated              Many features, few relevant; want sparse\n                    features                                               model\nGeometry            Circle — no corners → no zeros                         Diamond — corners → zeros\n\nElastic Net: Combines L1 and L2 penalties: λ₁Σ|βj| + λ₂Σβj². Gets feature selection from Lasso and stability\nfrom Ridge. Explore with CTA.\n\n⚠ Lasso + Multicollinearity Caveat: When features are highly correlated, Lasso arbitrarily picks one and zeros the others.\nWhich one it keeps can change with small data changes. Ridge or Elastic Net may be more stable.\n\n\n\n\n                                                                                                                             50",
   "status": "full",
   "img": "img/l5_50.jpg"
  },
  {
   "n": 51,
   "title": "Selecting the Penalty Strength: Try, Evaluate, Pick the Best",
   "raw": "Selecting the Penalty Strength: Try, Evaluate, Pick the Best\nThe simplified approach (full cross-validation treatment in L6):\n\n    1. Try: Fit the model for a range of α values (regularization factor λ): e.g., 50 values from 0.001 to 10\n\n    2. Evaluate: Compute validation RMSE (or validation R²) for each α\n\n    3. Pick: Select the α that minimizes validation error\n\n\n\n\n    Shortcut: sklearn provides LassoCV and RidgeCV, which\n\n\n                                                                    Validation RMSE\n    automate α selection using cross-validation internally. We'll\n    cover cross-validation formally in L6 — for now, understand\n    the principle: try a range, evaluate, pick the best.\n\n\n\n\n                                                                                                                51",
   "status": "full",
   "img": "img/l5_51.jpg"
  },
  {
   "n": 52,
   "title": "The Complete Regression Workflow",
   "raw": "The Complete Regression Workflow\n\n\n                                  Prepare → Build → Evaluate → Improve\n\n\n         Prepare                            Build                       Evaluate                         Improve\n          Lecture 4                        Session 1                      Session 2                        Session 3\nWrangle, encode, scale features      OLS, multiple regression   R², RMSE, residual diagnostics   Regularization, penalty tuning\n\n\n\n\n Key Insight: This workflow is iterative, not linear. Poor residual plots send you back to Prepare (better\n features) or Improve (different regularization). The CTA executes each stage; you direct the iteration.\n\n\n\n\n                                                                                                                              52",
   "status": "full",
   "img": "img/l5_52.jpg"
  },
  {
   "n": 53,
   "title": "Summary: Seven Key Takeaways",
   "raw": "Summary: Seven Key Takeaways\n\n1. Regression predicts continuous outcomes using linear combinations of features\n2. OLS minimizes squared residuals — but coefficients need interpretation, not just computation\n3. Multiple regression introduces multicollinearity — diagnose with VIF before interpreting\n4. Overfitting means low training error, high test error — always use train/test split\n5. R² and RMSE quantify model quality; residual plots reveal problems metrics miss (DO Visualize!)\n6. The bias-variance tradeoff is the central tension — regularization manages it\n7. Ridge shrinks, Lasso selects — choose based on your assumption about feature relevance\n\n\n      The CTA computes; you evaluate, interpret, and direct improvement.\n\n                                                                                                  53",
   "status": "full",
   "img": "img/l5_53.jpg"
  },
  {
   "n": 54,
   "title": "Preview: Classification Reuses This Evaluation Framework",
   "raw": "Preview: Classification Reuses This Evaluation Framework\nLecture 6 moves from predicting how much (continuous) to predicting which (categorical).\n What Stays the Same                                         What Changes\n → Train/test split methodology                              → Target: categorical (churn yes/no)\n → Overfitting diagnosis and prevention                      → Model: logistic regression replaces OLS\n → Regularization (Ridge/Lasso concepts)                     → Metrics: accuracy, precision, recall, AUC\n → The VERIFY framework                                      → Challenge: accuracy misleads (imbalanced)\n → CTA workflow: compute → evaluate → iterate                → Dataset: Telco Churn from L4\n\n Same Dataset, New Question: In L4 you wrangled the Telco Churn dataset. In L5 you learned how to\n evaluate models rigorously. In L6, you'll apply that evaluation framework to a classification problem on the\n same data — proving that evaluation skills transfer across model types.\n\n\n             ⚠ Preview puzzle: If only 5% of customers churn, a model that predicts \"no churn\" for\n             everyone achieves 95% accuracy. Is that a good model? (Hint: no. L6 will explain why and\n             what to do about it.)\n                                                                                                                54",
   "status": "full",
   "img": "img/l5_54.jpg"
  },
  {
   "n": 55,
   "title": "Technically Intriguing Questions for CTA Exploration",
   "raw": "Technically Intriguing Questions for CTA Exploration\nExplore these with your CTA outside class to deepen your understanding.\n\n TIQ 1: What is the connection between OLS and maximum likelihood estimation under normal errors?\n Ask the CTA to derive the connection. Verify that maximizing the Gaussian likelihood gives the same β as OLS.\n\n\n TIQ 2: Why does adding a random feature never decrease training R² but usually decrease test R²?\n Ask the CTA to add 1, 5, then 10 random columns to California Housing data and plot train vs. test R².\n\n\n TIQ 3: What happens with Elastic Net? When might it beat Ridge or Lasso alone?\n Ask the CTA to fit ElasticNet on California Housing data; compare coefficient paths to Ridge and Lasso.\n\n\n TIQ 4: Is polynomial regression (y = β₀ + β₁x + β₂x²) actually a \"linear\" model?\n The answer reveals what “linear” means linearly combining features. The coefficients βi are linear; x² is a new feature.\n\n\n                         They build the conceptual depth that distinguishes strong data scientists.\n\n\n                                                                                                                            55",
   "status": "full",
   "img": "img/l5_55.jpg"
  },
  {
   "n": 56,
   "title": "Recommended Readings and Resources",
   "raw": "Recommended Readings and Resources\nCore Readings\n   ISLP Chapter 3 (Sections 3.1–3.3)\n   Linear regression fundamentals — simple regression, multiple regression, interpretation\n\n   ISLP Chapter 6.2\n   Shrinkage methods — Ridge and Lasso regression, penalty selection\n\n   An Introduction to Statistical Learning https://hastie.su.domains/ISLP/ISLP_website.pdf.download.html\n\nDocumentation\n   → sklearn.linear_model — LinearRegression, Ridge, Lasso, ElasticNet, LassoCV, RidgeCV\n\n   → sklearn.preprocessing — StandardScaler; sklearn.model_selection — train_test_split\n\n   → sklearn.metrics — r2_score, mean_squared_error, mean_absolute_error\n\n       💡 Pro Tip: Ask the CTA to explain any concept from ISLP in simpler terms, or to generate code examples that\n       implement the textbook equations. Reading + CTA exploration = deeper understanding.\n\n\n                                                                                                                     56",
   "status": "full",
   "img": "img/l5_56.jpg"
  },
  {
   "n": 57,
   "title": "Questions?",
   "raw": "Questions?\nCONTACT INFORMATION\n\n\n\n\n                  Instructor: Prof. Yang Liu   Office Hours: 5:00 - 5:50 PM, Thursdays\n                  Email: yliu12@hku.hk         Location: CB-714, Chow Yei Ching Building\n\n\nyangliu.mit.edu                                Let me know if you want remote!\n\n\n\n\n🤖 CTA is your 24/7 interactive and responsive learning partner!\n\n                                                                                           57",
   "status": "full",
   "img": "img/l5_57.jpg"
  },
  {
   "n": 58,
   "title": "TA contacts",
   "raw": "TA contacts\n\n                        Yushi Du:                                              Zhengyang Hu:\nTuesday 4-5PM           u3012725@connect.hku.hk                                u3010250@connect.hku.hk\n                        https://us04web.zoom.us/j/78561597481                  https://hku.zoom.us/j/9021481973\n\n\n\n\n                        Jun Dai:                                               Lulu Cai:\nThursday 3-4PM          jundai332@connect.hku.hk                               u303011209@connect.hku.hk\n                        https://rochester.zoom.us/j/97202452759                https://hku.zoom.us/j/5010926726\n\n\n\n\n  TA office hours on Zoom! Two slots (1 hour each) on Tuesdays and Thursdays\n\n\n                                                                                                                  58",
   "status": "full",
   "img": "img/l5_58.jpg"
  }
 ]
};

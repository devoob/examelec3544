window.DSFM_SLIDES = window.DSFM_SLIDES || {};
DSFM_SLIDES["6"] = {
 "id": "6",
 "title": "Lecture 6 — Classification: Predicting Categories (Logistic Regression, Metrics, ROC/AUC)",
 "pages": [
  {
   "n": 1,
   "title": "Data Science with Foundation Models",
   "raw": "ELEC3544 · Fall 2026\n\n\n\n\nData Science with Foundation Models\n\n\nYang Liu\n\nThe University of Hong Kong",
   "status": "partial",
   "img": "img/l6_01.jpg"
  },
  {
   "n": 2,
   "title": "Classification - Predicting Categories",
   "raw": "Classification - Predicting Categories\n\n\n\n\n                                         2",
   "status": "partial",
   "img": "img/l6_02.jpg"
  },
  {
   "n": 3,
   "title": "Where We Are",
   "raw": "Where We Are\nModule 2 builds the core machine learning toolkit. Each lecture tackles one problem type,\napplies the same evaluation discipline.\n Lecture 5                                 Lecture 6 · Today                        Lecture 7 · Next\n Regression                                Classification                           Unsupervised\n Predicting Quantities                     Predicting Categories                    Finding Structure Without Labels\n Method: Linear regression                 Method: Logistic regression              Method: Clustering, embeddings\n Evaluation: R2, RMSE, residual analysis   Evaluation: Confusion matrix, ROC, AUC   Evaluation: Silhouette, inertia\n CTA pattern: Verification through         CTA pattern: Verification + Iterative    CTA pattern: Exploratory\n computation                               refinement\n\n\n\n\n                                                                                                                       3",
   "status": "full",
   "img": "img/l6_03.jpg"
  },
  {
   "n": 4,
   "title": "Today's Journey: Three Questions That Drive the Complete",
   "raw": "Today's Journey: Three Questions That Drive the Complete\nClassification Workflow\n\nSession 1\nCan we predict a binary outcome with linear regression — and if not, what model do we\nneed?\nWe fit linear regression to a binary target live with the CTA, discover where it breaks, and build logistic regression as the principled fix.\n\n\nSession 2\nHow do we turn predicted probabilities into decisions — and how do we measure whether\nthose decisions are good?\nWe construct the confusion matrix, derive precision and recall, and expose a classifier with 73.5% accuracy while being completely useless.\n\n\nSession 3\nIs there a way to evaluate a classifier without committing to a threshold — and when\nshould we use a different model?\nWe build the ROC curve and AUC, verify the probabilistic meaning of AUC empirically, then compare logistic regression to a decision tree.\n\n\n\n                                                                                                                                                4",
   "status": "full",
   "img": "img/l6_04.jpg"
  },
  {
   "n": 5,
   "title": "Example: Telco Churn — Ready for Classification",
   "raw": "Example: Telco Churn — Ready for Classification\n\nDataset Overview\n\nObservations          7,043 rows\n\nFeatures              19 raw predictors\n\nTarget                Churn (yes / no)\n\nProblem type          Binary classification\n\nData source           Cleaned in Lecture 4\n\n\n Callback to L4:\n Missing values handled, categorical\n variables encoded. Ready to use.\n\n\n\n\n                                                  5",
   "status": "full",
   "img": "img/l6_05.jpg"
  },
  {
   "n": 6,
   "title": "The Churn Dataset Has a Built-In Challenge: About 73.5% Do Not",
   "raw": "The Churn Dataset Has a Built-In Challenge: About 73.5% Do Not\nChurn\n\n\n       73.5%\n    No Churn (y = 0, negative class)\n\n\n\n\n       26.5%\n      Churn (y = 1, positive class)\n\n\n\n\n                                       Its significance becomes clear in Session 2, when we ask: can a classifier that never\n                                       predicts churn still achieve strong accuracy on the standard metric?\n                                                                                                                               6",
   "status": "full",
   "img": "img/l6_06.jpg"
  },
  {
   "n": 7,
   "title": "Why Classification Needs Its Own Model",
   "raw": "Why Classification Needs Its Own Model\n\n\n Session question:\n Can we predict a binary outcome with linear regression — and if not, what model do we need?\nConcepts covered:\nLinear regression failure · Sigmoid function · Logistic regression · Log-odds\n\n\n\n\n                                                                                         7",
   "status": "full",
   "img": "img/l6_07.jpg"
  },
  {
   "n": 8,
   "title": "[Opening Question] Can We Just Use Linear Regression to Predict",
   "raw": "[Opening Question] Can We Just Use Linear Regression to Predict\nWho Will Churn?\n\n\n                 Why not just use what we already know?\n\n\n\"We have linear regression. The churn column is just zeros and ones. Why not simply apply what we already\nknow?\" — Consider this before we try it live with the CTA.\n\n\n\n\n                                                                                                            8",
   "status": "full",
   "img": "img/l6_08.jpg"
  },
  {
   "n": 9,
   "title": "CTA Demo 1: Fitting Linear Regression to a Binary Target — Let's See",
   "raw": "CTA Demo 1: Fitting Linear Regression to a Binary Target — Let's See\nWhat Breaks\n\n🤖 CTA Demo 1: Fitting Linear Regression to a Binary Target\n\n\nTurn 1: Ask the CTA to fit LinearRegression to the churn target using tenure alone, plot the fit over 0–90\nmonths, mark the observed 0–72 month range, and report where extrapolated predictions leave [0, 1].\n\n\nTurn 2: Ask: \"What does a prediction of 1.3 or −0.2 mean as a probability?\" Then ask the CTA to fit\nLogisticRegression to the same data, plot the sigmoid curve, and confirm all predictions stay within (0, 1).\n\n\nTakeaway: Linear predictions are unbounded and can leave the valid probability range. The sigmoid enforces (0, 1);\ncalibration still needs checking.\n\n\n\n\n                                                                                                                     9",
   "status": "full",
   "img": "img/l6_09.jpg"
  },
  {
   "n": 10,
   "title": "Linear Regression Can Predict Outside [0,1] — Invalid as Probabilities",
   "raw": "Linear Regression Can Predict Outside [0,1] — Invalid as Probabilities\n\n\n1. Output range\nLinear regression can predict values outside [0, 1]. A\nprediction of −0.2 or 1.3 cannot be a probability —\nprobabilities must lie in [0, 1] by definition.\n\n\n\n2. Calibration\nBeing inside [0, 1] does not guarantee calibration.\nCheck whether predicted probabilities match\nobserved frequencies on held-out data.\n\n\nSolution:\nLogistic regression wraps the linear predictor in a\nfunction that maps any real input to a value in (0, 1).\n\n\n\n\n                                                                     10",
   "status": "full",
   "img": "img/l6_10.jpg"
  },
  {
   "n": 11,
   "title": "The Sigmoid Function Maps Any Finite Input Between 0 and 1",
   "raw": "The Sigmoid Function Maps Any Finite Input Between 0 and 1\n\n\n\nThree key properties:\n\n Range:\n Output is always in (0, 1). This gives a valid\n probability range, not a guarantee of calibration.\n\n Symmetry:\n σ(0) = 0.5. Positive z gives probability > 0.5;\n negative z gives probability < 0.5.\n\n Asymptotic:\n As z → +∞, σ(z) → 1. As z → −∞, σ(z) → 0.\n Never exactly reaches 0 or 1.\n\n\n\n                                                             11",
   "status": "full",
   "img": "img/l6_11.jpg"
  },
  {
   "n": 12,
   "title": "Logistic Regression Wraps a Linear Model Inside a Sigmoid — That Is",
   "raw": "Logistic Regression Wraps a Linear Model Inside a Sigmoid — That Is\nthe Complete Idea\n\n\n\nKey idea: the model outputs a probability — a number in (0, 1) — not a class label. What to do with that\nprobability is a separate decision made later.\n\n\n\n\nNote: β coefficients minimize negative log-likelihood, usually with a regularization penalty               12",
   "status": "full",
   "img": "img/l6_12.jpg"
  },
  {
   "n": 13,
   "title": "The Logistic Regression Equation: Two Equivalent Forms, Two Ways to",
   "raw": "The Logistic Regression Equation: Two Equivalent Forms, Two Ways to\nThink About It\nProbability form                                                     Log-odds form (logit)\nOperationally useful                                                 Interpretively useful\n\n\n\n\nDirectly produces a value in (0, 1). Use this form when predicting   The left side is the log-odds. The right side is a linear model.\nand scoring observations.                                            Coefficients are interpretable in log-odds space — this is what\n                                                                     makes them useful for domain reasoning.\n\n\nOdds = P / (1 − P). If P = 0.75, odds = 0.75 / 0.25 = 3-to-1 in favour of churn. Log-odds = log(3) ≈ 1.10.\n\n\n The two forms are mathematically equivalent. The log-odds form is what makes coefficients interpretable in plain\n language. In the next section, we fit the model, run the code in Colab, and the output will include a coefficient table —\n one number per feature. The question we then face is what those numbers actually mean for a business decision.\n\n\n\n\n                                                                                                                                        13",
   "status": "full",
   "img": "img/l6_13.jpg"
  },
  {
   "n": 14,
   "title": "A Coefficient of −0.89 for Contract Type — What Does That Mean?",
   "raw": "A Coefficient of −0.89 for Contract Type — What Does That Mean?\n\n\n                                           β = −0.89\n                                    long-term contract (1) vs. month-to-month (0)\n\n\n\n Consider an illustrative coefficient of −0.89 for long-term contract (1) versus month-to-month (0). What does it\n mean? Does it justify offering long-term contracts to everyone at risk of churning?\n\n\nWe can ask the CTA to translate this number — and then probe whether acting on its answer is safe.\n\n\n\n\n                                                                                                                14",
   "status": "full",
   "img": "img/l6_14.jpg"
  },
  {
   "n": 15,
   "title": "CTA Demo 2: Interpreting the Fitted Churn Model in Plain Business",
   "raw": "CTA Demo 2: Interpreting the Fitted Churn Model in Plain Business\nLanguage\n🤖 CTA Demo 2: Interpreting the Fitted Churn Model in Plain Business Language\nSetup: Use the illustrative coefficients shown here, or coefficients from your own fitted model. State each feature’s\nunit and reference category before interpreting it.\n\n\nTurn 1: Ask the CTA to convert the top four logistic regression coefficients to odds ratios using np.exp(coef_) and\nwrite a plain-language interpretation of each for a business audience.\n\n\nTurn 2: Ask whether the negative coefficient for contract type means the company should immediately offer long-term\ncontracts to all at-risk customers. The CTA should flag the causal inference limitation — correlation in historical data\ndoes not guarantee that an intervention on the variable would produce the same effect.\n\n\nTakeaway: Check both the mathematical translation and the causal caveat: an association does not establish that\nchanging a feature will change churn. This is the first explicit human-judgment moment of the lecture.\n\n\n\n\n                                                                                                                        15",
   "status": "full",
   "img": "img/l6_15.jpg"
  },
  {
   "n": 16,
   "title": "The Translation We Need: Log-Odds → Odds Ratio → Plain Language",
   "raw": "The Translation We Need: Log-Odds → Odds Ratio → Plain Language\n\n\n\nStep 1 — Start with the log-odds coefficient\nIllustrative β = −0.89 for long-term contract (1) versus\nmonth-to-month (0). The coefficient is a change in\nlog-odds.\n\nStep 2 — Exponentiate to get the odds ratio\ne−0.89 ≈ 0.41. The odds ratio tells us by what factor the\nodds of churning are multiplied for each unit increase\nin the feature.\n\nStep 3 — Translate to plain language\nLong-term contract customers have odds of churning\nthat are approximately 59% lower than month-to-\nmonth customers, holding all other features constant.\n\nOdds ratio < 1: lower modelled odds per unit increase. > 1: higher modelled odds. = 1: no modelled change.\nThese are associations, not causal effects.\n                                                                                                             16",
   "status": "full",
   "img": "img/l6_16.jpg"
  },
  {
   "n": 17,
   "title": "Illustrative Coefficients: How Does Each Feature Multiply the Odds?",
   "raw": "Illustrative Coefficients: How Does Each Feature Multiply the Odds?\n\nFeature                          β (log-odds)        eβ (odds ratio)    Plain-language interpretation\n\nLong-term contract (1)\n                                        −0.89               0.41        ~59% lower odds vs. month-to-month\nvs. month-to-month (0)\n\nTenure (years)                          −0.46               0.63        Per extra year: odds × 0.63\n\n\nMonthly charges ($10 units)             +0.38               1.46        Per extra $10: odds × 1.46\n\n\nNo tech support                         +0.31               1.36        No support (1) vs. support (0): odds × 1.36\n\n\nPaperless billing                       +0.22               1.25        Paperless (1) vs. not (0): odds × 1.25\n\n\n Sign convention (holding other features fixed):\n β < 0 → odds ratio < 1; β > 0 → odds ratio > 1; β = 0 → odds ratio = 1. These describe modelled associations.\n                                                                                                                      17",
   "status": "full",
   "img": "img/l6_17.jpg"
  },
  {
   "n": 18,
   "title": "Predicting and Explaining Are Different Goals — Coefficients Are Not",
   "raw": "Predicting and Explaining Are Different Goals — Coefficients Are Not\nCausal Claims\nKey Insight                                                            The model CAN:\nA logistic regression coefficient tells us: in the                     Score customers by predicted churn probability\nhistorical data, customers with feature X had higher\n(or lower) odds of churning than customers without it,                 Describe feature associations with stated units\nafter controlling for the other features in the model.\n                                                                       Guide where to investigate further\nIt does not tell us: if we change feature X for a\ncustomer, their churn probability will change by that\namount. The coefficient captures association, not\n                                                                       The model CANNOT:\ncausation.\n                                                                       Prove that offering a long-term contract will reduce a\nConcretely: \"customers on long-term contracts churn                    customer's churn risk\nless\" does not mean \"moving customers to long-term\ncontracts will reduce churn.\" The historical pattern                   Replace a controlled experiment for causal questions\nmay reflect self-selection — loyal customers choose\nlong contracts — rather than a treatment effect.                       Specify which interventions are cost-effective\n\n\nBridge: \"Let us now consolidate Session 1 before we turn to the harder question: what do we actually do with these probabilities?\"\n                                                                                                                                     18",
   "status": "full",
   "img": "img/l6_18.jpg"
  },
  {
   "n": 19,
   "title": "Session 1 Summary: Logistic Regression Gives Us Probability Estimates",
   "raw": "Session 1 Summary: Logistic Regression Gives Us Probability Estimates\n\n1. Linear regression can leave the valid probability range\nIts predictions are unbounded and may fall outside [0, 1]. Logistic regression enforces a valid range.\n\n\n2. The sigmoid ensures a valid probability range\nσ(z) = 1/(1+e−z) maps any real input into (0, 1). Calibration still needs checking on held-out data.\n\n\n3. Coefficients live in log-odds space\nTo interpret them, exponentiate: eβ gives the odds ratio. The translation chain — log-odds → odds ratio →\nplain language — makes them business-readable.\n\n4. Coefficients are associations, not causal claims\nThe model can score and rank customers. It cannot prescribe interventions. Acting on predictions as if they\nwere causal requires domain judgment the model cannot supply.\n\nBridge: \"We now have a model that outputs probabilities between 0 and 1 for every customer. But a probability is not a decision.\nThe next question is: how do we turn these numbers into actions — and how do we know whether those actions are good?\"\n                                                                                                                         19",
   "status": "full",
   "img": "img/l6_19.jpg"
  },
  {
   "n": 20,
   "title": "Mid-term Exam (Nov. 21 – in-class 1.5~2h)",
   "raw": "Mid-term Exam (Nov. 21 – in-class 1.5~2h)\n\nSee Moodle for the confirmed schedule.\n\nCheck the current announcement for the\nvenue, coverage, duration, and permitted\nmaterials.\n\n\n                                            20",
   "status": "full",
   "img": "img/l6_20.jpg"
  },
  {
   "n": 21,
   "title": "From Probabilities to Decisions: Building the Evaluation",
   "raw": "From Probabilities to Decisions: Building the Evaluation\nToolkit\n\n\n Session question:\n We have a predicted probability for every customer — how do we decide who gets flagged,\n and how do we measure whether those decisions are good?\nConcepts covered:\nConfusion matrix · Precision · Recall · Threshold · Precision-recall curve · F1 score\n\n\n\n\n                                                                                           21",
   "status": "full",
   "img": "img/l6_21.jpg"
  },
  {
   "n": 22,
   "title": "[Opening Question] We Have a Predicted Probability for Every",
   "raw": "[Opening Question] We Have a Predicted Probability for Every\nCustomer — How Do We Decide Who Gets Flagged?\nThe model outputs a number between 0 and 1 for every customer. That is not yet a decision. To act, we need a rule.\n\n\n\n                        Flag as churner if P(churn) ≥ ?\n\n                 0.3                                         0.5                                         0.7\n  Flag aggressively Catch more churners      Default choice Seems fair — but is it the   Flag conservatively Higher confidence per\n       but also flag loyal customers                    right cut-off here?                  flag but miss many real churners\n\n\n\n\n The threshold is a choice, not a given. The right value depends on the cost of each type of error.\n                                                                                                                              22",
   "status": "full",
   "img": "img/l6_22.jpg"
  },
  {
   "n": 23,
   "title": "The Confusion Matrix: Four Outcomes, Four Consequences, One",
   "raw": "The Confusion Matrix: Four Outcomes, Four Consequences, One\nComplete Picture of Model Performance\nA threshold converts predicted probabilities into class labels. Those labels fall into exactly four outcome types.\n\n\n\n\n                                                                                            Threshold (θ):\n                                                                                            Predict churn (1) if P(churn | x) ≥ θ\n                                                                                            Predict no churn (0) otherwise\n\n                                                                                            Default θ = 0.5, but this is a choice\n                                                                                            — not a statistical requirement.\n\n\n\n\n Positive class = churn = 1. True/False refers to whether the prediction was correct.\n                                                                                                                                23",
   "status": "full",
   "img": "img/l6_23.jpg"
  },
  {
   "n": 24,
   "title": "Precision: When We Flag a Churner, How Often Are We Right?",
   "raw": "Precision: When We Flag a Churner, How Often Are We Right?\n\n                                   Precision = TP / ( TP + FP )\n                                                                    All predicted positives\n                    Of all the customers we flag as likely churners, what fraction actually churn?\n\n High precision                                                  Low precision\n Most customers we flag are real churners.                       Many flagged customers are loyal. The retention\n Retention budget is spent efficiently — few                     campaign sends unnecessary discounts, wasting\n discounts wasted on loyal customers.                            budget on customers who were not leaving.\n\n\n\n\nTP = true positives (correctly flagged churners). FP = false positives (loyal customers incorrectly flagged). Both come\nfrom the confusion matrix.\n\n\n\n                                                                                                                          24",
   "status": "full",
   "img": "img/l6_24.jpg"
  },
  {
   "n": 25,
   "title": "Recall: Of All Customers Who Will Churn, How Many Did We Catch?",
   "raw": "Recall: Of All Customers Who Will Churn, How Many Did We Catch?\n\n                                    Recall = TP / ( TP + FN )\n                                                                All actual positives\n                   Of all the customers who actually churn, what fraction did our model catch?\n\n High recall                                                  Low recall\n Most customers who would have churned are                    Many real churners are missed. Those customers\n flagged. Few churners slip through — lost revenue            leave without intervention — each represents lost\n is minimized.                                                subscription revenue.\n\n\n\n\nTP = true positives (churners we caught). FN = false negatives (churners we missed). Note: Recall = TPR — the same\nquantity used in the ROC curve (Session 3).\n\n\n\n                                                                                                                     25",
   "status": "full",
   "img": "img/l6_25.jpg"
  },
  {
   "n": 26,
   "title": "An Illustrative Worked Example: Computing Precision and Recall",
   "raw": "An Illustrative Worked Example: Computing Precision and Recall\n\n  Illustrative cohort: 2,000 customers, including 400 churners. At threshold = 0.5, these four counts show how the metrics\n  work:\n\n                                                                       Precision:\n             Predicted: Churn          Predicted: No Churn\n                                                                       TP / (TP + FP) = 180 / (180 + 120) = 180 / 300 = 0.60\n\n  Actual:\n  Churn\n                TP = 180                   FN = 220                    60% of customers we flag as churners actually churn.\n\n\n                                                                       Recall:\n  Actual:\nNo Churn\n                FP = 120                 TN = 1,480                    TP / (TP + FN) = 180 / (180 + 220) = 180 / 400 = 0.45\n\n                                                                       We catch 45% of all customers who actually churn.\n\n\n\n\n   At threshold = 0.5 we catch fewer than half of all churners. Whether that is acceptable depends on the cost of missing them.\n                                                                                                                                  26",
   "status": "full",
   "img": "img/l6_26.jpg"
  },
  {
   "n": 27,
   "title": "CTA Demo 3: Thresholds and Hypothetical Business Utility",
   "raw": "CTA Demo 3: Thresholds and Hypothetical Business Utility\n\n                                         Illustrative worked example — 2,000 customers:\nIllustrative payoffs:\n                                                  θ              Precision             Recall           Utility ($)\nHypothetical payoff for TP: +$450; FP:\n−$50.                                            0.3                0.48                0.71             +$54,400\n\nHypothetical payoff for FN: −$500; TN:           0.5                0.60                0.45              −$35,000\n$0.\n                                                 0.7                0.74                0.23             −$114,200\nTotal utility = $450 × TP − $50 × FP −\n$500 × FN                                Among these three thresholds, 0.3 gives the highest utility. A full threshold\n                                         sweep may find a better choice; 0.3 is not the global optimum.\n\n🤖 CTA Demo 3: Thresholds and Hypothetical Business Utility\nTurn 1: Provide these hypothetical payoffs. Ask the CTA to compute precision, recall and utility at\nthresholds 0.3, 0.5 and 0.7. Check the arithmetic against the illustrative table.\nTurn 2: Ask the CTA to sweep all thresholds and mark the highest-utility point. For a real model, tune the\nthreshold on validation data; evaluate once on the test set.\nThese hypothetical payoffs are business inputs, not quantities inferred from the churn data.\n                                                                                                                      27",
   "status": "full",
   "img": "img/l6_27.jpg"
  },
  {
   "n": 28,
   "title": "The Precision–Recall Curve Shows the Available Threshold Tradeoffs",
   "raw": "The Precision–Recall Curve Shows the Available Threshold Tradeoffs\n\nEach point represents a threshold. Lowering the threshold cannot decrease recall; precision may rise or fall.\n\n\n\n\n Top-right corner = perfect classifier                          Horizontal baseline = random classifier\n Precision = 1 and Recall = 1 simultaneously — catches every    Expected precision equals prevalence: 20% in this illustrative\n churner with zero false alarms.                                cohort. The standard Telco dataset has about 26.5% churn.\n\n                                                                                                                                 28",
   "status": "full",
   "img": "img/l6_28.jpg"
  },
  {
   "n": 29,
   "title": "Threshold Selection Is a Business Decision — the Model Cannot Choose",
   "raw": "Threshold Selection Is a Business Decision — the Model Cannot Choose\nfor You\nKey Insight                                                                  What the CTA can do:\nThe PR curve shows every possible precision-recall tradeoff. But it cannot   Compute precision and recall at any threshold\ntell you which point to choose.\n                                                                             Generate the full PR curve\nChoosing a threshold means deciding: how costly is a false positive\nrelative to a false negative? That is a question about business context —    Find the threshold that minimises a cost\nthe cost of a wasted discount versus the value of a retained customer —      function you specify\nnot a question the model can answer.                                         What only a human can do:\nThe CTA can optimise against an explicit cost function once you provide      Specify what a false positive costs in this\none. It cannot derive the cost function from the data. Specifying what       business context\nerrors cost is irreducibly a human responsibility.\n                                                                             Specify what a false negative costs\n\n                                                                             Decide whether those tradeoffs are acceptable\n\n\n\n\n                                                                                                                           29",
   "status": "full",
   "img": "img/l6_29.jpg"
  },
  {
   "n": 30,
   "title": "F1 Score Penalises Models That Sacrifice One Side of the Precision-",
   "raw": "F1 Score Penalises Models That Sacrifice One Side of the Precision-\nRecall Tradeoff\n\n         F1 = 2 × ( Precision × Recall ) / ( Precision + Recall )\nF1 is the harmonic mean of precision and recall. Unlike the arithmetic mean, it is dominated by whichever value is smaller.\n\n Arithmetic mean — misleading                                  Harmonic mean — reveals the problem\n Precision = 0.90, Recall = 0.10                               Precision = 0.90, Recall = 0.10\n\n Arithmetic mean = (0.90 + 0.10) / 2 = 0.50                    F1 = 2 × (0.90 × 0.10) / (0.90 + 0.10) = 0.18\n\n Suggests a mediocre but acceptable classifier.                Reveals that the model almost never catches churners.\n\n When to use F1:\n F1 is appropriate when both precision and recall matter and you want a single number. It is especially useful for model\n comparison. When precision and recall have different costs, use the PR curve and cost-weighted optimization instead.\n\n\n\n                                                                                                                       30",
   "status": "full",
   "img": "img/l6_30.jpg"
  },
  {
   "n": 31,
   "title": "[Opening Question] We Have Precision, Recall, and F1 — Would",
   "raw": "[Opening Question] We Have Precision, Recall, and F1 — Would\nAccuracy Alone Have Been Enough?\nThe standard Telco dataset has about 73.5% non-churners and 26.5% churners. What accuracy would an\nalways-no-churn classifier achieve?\n\n\n    Accuracy = Fraction of all predictions correct\n\n                           Hint: class distribution\n                           Always predicting 'no churn' is correct for about\n                           73.5% of the standard Telco dataset, but catches\n                           none of the churners.\n\n\n\n\n                                                                                                     31",
   "status": "full",
   "img": "img/l6_31.jpg"
  },
  {
   "n": 32,
   "title": "CTA Demo 4: About 73.5% Accuracy Without Predicting Any Churn",
   "raw": "CTA Demo 4: About 73.5% Accuracy Without Predicting Any Churn\n\n\n🤖 CTA Demo 4: The Naïve Majority-Class Classifier\nSetup: Ask the CTA to write code that fits sklearn's\nDummyClassifier(strategy='most_frequent') on the Telco training set and evaluates it on the test\nset.\n\nTurn 1 — Colab output: The dummy classifier achieves accuracy ≈ 0.735 (depending on the test split). Ask\nthe CTA to also compute precision, recall, and F1 for both the dummy classifier and our fitted logistic\nregression. We run the comparison code in Colab.\n\nTurn 2: Ask the CTA to explain why a model with about 73.5% accuracy can have recall = 0 and F1 = 0. The\nanswer should make the class-imbalance mechanism explicit.\n\nTakeaway: An always-majority classifier matches the majority-class proportion. Accuracy alone can\nconceal zero positive-class recall.\n\n\n                                                                                                     32",
   "status": "full",
   "img": "img/l6_32.jpg"
  },
  {
   "n": 33,
   "title": "Accuracy Is a Warning Sign on Imbalanced Data — Not a Performance",
   "raw": "Accuracy Is a Warning Sign on Imbalanced Data — Not a Performance\nGuarantee\n                                                              Illustrative comparison — same 2,000 customers as the worked matrix:\nKey Insight\n                                                                       Metric                     Naïve                  Score model\nIn our illustrative cohort with 80% non-churners, a\nclassifier that always predicts 'no churn' achieves                   Accuracy                    0.80 ⚠                      0.83\n80% accuracy. It never identifies a single churner.\nAccuracy measures the fraction of correct                             Precision                      —                        0.60\npredictions across all observations — but it weights\n                                                                        Recall                    0.00 ✗                      0.45\nthe majority class proportionally to its size. When\nclasses are heavily imbalanced, the majority class\n                                                                          F1                      0.00 ✗                      0.51\ndominates the score.\nPrecision and recall break this down: they measure\nperformance separately on positive predictions\nand the positive class. A model with recall = 0\ncannot hide behind an inflated accuracy figure.\n\n\n\nWhen a dataset is imbalanced, always report precision and recall alongside accuracy. If only accuracy is reported, ask about the class\ndistribution first.\n                                                                                                                                         33",
   "status": "full",
   "img": "img/l6_33.jpg"
  },
  {
   "n": 34,
   "title": "Metric Decision Guide: Which Evaluation Tool to Use and When",
   "raw": "Metric Decision Guide: Which Evaluation Tool to Use and When\nEach metric answers a different question. The right choice depends on the business context and class balance.\n\nMetric                 Question answered                        Best for                       Covered\n\n                                                                When overall error rate matches\nAccuracy               Fraction of all predictions correct                                      S2 ✓\n                                                                the goal\n\nPrecision              Of flagged positives, how many are real? When FP is costly              S2 ✓\n\n\nRecall                 Of real positives, how many did we catch? When FN is costly             S2 ✓\n\n                                                                Single summary when both\nF1 Score               Harmonic mean of precision and recall                                   S2 ✓\n                                                                matter\n                       Full precision-recall tradeoff across\nPR Curve                                                        Imbalanced datasets            S2 ✓\n                       thresholds\n\nROC / AUC              Threshold-independent ranking quality    Comparing ranking quality      S3 ▶\n\n\n\n\n                                                                                                                34",
   "status": "full",
   "img": "img/l6_34.jpg"
  },
  {
   "n": 35,
   "title": "Session 2 Summary: Decisions Need a Threshold; Curves Sweep All",
   "raw": "Session 2 Summary: Decisions Need a Threshold; Curves Sweep All\nThresholds\n1. A probability is not a decision — the threshold is a choice\nConverting predicted probabilities to class labels requires setting θ. That choice determines which customers are\nflagged and how many errors of each type occur.\n\n2. Precision and recall separate the two types of error\nPrecision measures wasted effort (false positives). Recall measures missed opportunities (false negatives). Both are\nneeded because accuracy hides which error type is dominating.\n\n3. The PR curve shows every possible precision-recall tradeoff\nSome thresholds can improve both precision and recall. The optimal threshold requires a cost function — and that\nfunction is a business judgment, not a statistic.\n\n4. Accuracy alone can mislead\nThe illustrative all-negative baseline has 80% accuracy and zero recall. Read accuracy with class prevalence, precision,\nrecall, and the cost of errors.\n\n\n\n\n                                                                                                                       35",
   "status": "full",
   "img": "img/l6_35.jpg"
  },
  {
   "n": 36,
   "title": "Threshold-Free Evaluation and Model Selection",
   "raw": "Threshold-Free Evaluation and Model Selection\n\n\n\n Session question:\n Is there a way to evaluate a classifier without committing to a threshold — and when should\n we use a different model entirely?\nConcepts covered:\nTPR · FPR · ROC curve · AUC · Probabilistic AUC interpretation · Decision tree · Model selection\n\n\n\n\n                                                                                                   36",
   "status": "full",
   "img": "img/l6_36.jpg"
  },
  {
   "n": 37,
   "title": "[Opening Question] Can We Summarise Ranking Without Choosing a",
   "raw": "[Opening Question] Can We Summarise Ranking Without Choosing a\nThreshold?\nPrecision, recall, and F1 are all computed at a specific threshold. Changing the threshold can change these\nvalues. Is there an evaluation method that captures model quality independently of that choice?\n\n\n            What if we swept every threshold at once?\n\n The key idea:\n Instead of fixing θ and computing one precision-recall pair, we compute the true positive rate and false\n positive rate at every possible threshold and trace the resulting curve. That curve — the ROC curve —\n summarises classifier quality across all thresholds simultaneously.\n\n\n\n\n                                                                                                              37",
   "status": "full",
   "img": "img/l6_37.jpg"
  },
  {
   "n": 38,
   "title": "Two Rates Drive the ROC Curve: True Positive Rate and False Positive",
   "raw": "Two Rates Drive the ROC Curve: True Positive Rate and False Positive\nRate\n\n           TPR = TP / ( TP + FN ) = Recall                                                  FPR = FP / ( FP + TN )\n\n\nTrue Positive Rate (TPR)                                                  False Positive Rate (FPR)\nOf all customers who actually churn, what fraction did                    Of all customers who will NOT churn, what fraction did\nour model flag?                                                           our model incorrectly flag?\n\nTPR is identical to recall — the same computation under a                 FPR has no equivalent in the precision-recall framework.\ndifferent name. High TPR means we catch most churners.                    Low FPR means we rarely disturb loyal customers\n                                                                          unnecessarily.\n\n\nIllustrative model at θ = 0.5 (from our confusion matrix):\nTPR = 180 / (180 + 220) = 0.45 · FPR = 120 / (120 + 1480) = 0.075 · This is one point on the ROC curve.\n\n\n\nTPR = Recall = Sensitivity. FPR = 1 − Specificity. These terms appear in medical and security literature.\n                                                                                                                                38",
   "status": "full",
   "img": "img/l6_38.jpg"
  },
  {
   "n": 39,
   "title": "The ROC Curve Sweeps Every Threshold and Plots TPR Against FPR",
   "raw": "The ROC Curve Sweeps Every Threshold and Plots TPR Against FPR\n\nEach threshold gives one (FPR, TPR) pair. Sweeping thresholds traces the ROC curve; this figure uses the illustrative score set.\n\n                                                                 Top-left corner (0, 1) = Perfect classifier\n                                                                 TPR = 1 and FPR = 0 simultaneously — catches every\n                                                                 churner with zero false alarms. A perfectly separated test\n                                                                 set reaches this point.\n\n                                                                 Diagonal = random-ranking baseline\n                                                                 For random ranking, expected TPR equals FPR. Better\n                                                                 ranking generally bends the curve toward the top-left.\n\n\n                                                                 Top-right corner (1, 1) = Everyone flagged\n                                                                 All positives are caught, but every negative is also\n                                                                 flagged: TPR = FPR = 1 at this threshold.\n\n\n\n\n                                                                                                                        39",
   "status": "full",
   "img": "img/l6_39.jpg"
  },
  {
   "n": 40,
   "title": "AUC: The Area Under the ROC Curve Summarises Classifier Ranking",
   "raw": "AUC: The Area Under the ROC Curve Summarises Classifier Ranking\nQuality\nAUC converts the entire ROC curve into a single number — but the number has a concrete probabilistic meaning.\n\n                                     AUC = P(s+ > s−) + ½ P(s+ = s−)\n         Compare a random churner and non-churner: a correct ranking earns 1, a tie ½, and an incorrect ranking 0.\n\n\n\n What AUC = 0.84 means\n In this illustrative score set, the mean ranking credit is\n about 0.84 across all churner/non-churner pairs, counting\n a tie as half a correct ranking.\n\n\n AUC benchmarks\n AUC = 1.0 → perfect ranking · AUC = 0.5 → chance-\n level average ranking credit · AUC = 0.0 → perfectly          This probabilistic interpretation is a specific claim — we\n wrong (systematically ranks negatives above positives)        can verify it computationally. We can ask the CTA to write\n Judge usefulness against relevant baselines, the operating    code that estimates AUC by random pair sampling and\n region, error costs, and uncertainty.                         check agreement with sklearn within sampling error.\n                                                                                                                     40",
   "status": "full",
   "img": "img/l6_40.jpg"
  },
  {
   "n": 41,
   "title": "CTA Demo 5 Setup: Can We Verify the Probabilistic Meaning of AUC",
   "raw": "CTA Demo 5 Setup: Can We Verify the Probabilistic Meaning of AUC\nComputationally?\nAUC = P(s+ > s−) + ½ P(s+ = s−). We can verify this by comparing positive/negative score pairs.\n\n The verification challenge:                                                         What we expect to see:\n                                                                                     sklearn AUC: 0.84\n For the illustrative scores, sklearn's roc_auc_score() gives about\n 0.84.                                                                               Empirical pair-sampling AUC\n Sample one positive and one negative independently with replacement.                (10,000 random pairs): ≈ 0.84\n Give 1 for a higher positive score, ½ for a tie, and 0 otherwise; average           The estimate should be close, within Monte\n the credits. This estimate should be close to AUC, within sampling                  Carlo sampling error.\n error.\n This applies VERIFY's Execute and Reason steps to the meaning of a\n metric.\n\n\n\n\n VERIFY framework — Reason step: understanding what a metric measures before relying on it.\n                                                                                                                            41",
   "status": "full",
   "img": "img/l6_41.jpg"
  },
  {
   "n": 42,
   "title": "CTA Demo 5: Empirical Verification of AUC via Random Pair Sampling",
   "raw": "CTA Demo 5: Empirical Verification of AUC via Random Pair Sampling\n\n🤖 CTA Demo 5: Verification Through Computation\nSetup: Ask the CTA to write two code blocks: (1) compute AUC using sklearn's roc_auc_score(), and (2) estimate\nAUC empirically by randomly sampling 10,000 churner/non-churner pairs and averaging 1 for a higher churner score, ½\nfor a tie, and 0 otherwise. We run both in Colab and compare the outputs.\n\n\nTurn 1 — Illustrative scores: sklearn AUC ≈ 0.84; the pair-sampling estimate should be close, within sampling error.\nAsk the CTA to explain why they agree approximately and why more pairs reduces sampling variability.\n\n\nTurn 2: Ask the CTA what AUC = 0.84 means in the context of the churn retention campaign. It should explain average\nranking credit, including ties, and why this alone does not establish campaign value.\n\n\nTakeaway: The CTA performs the verification fluently. The key point is that metrics have meanings — and those\nmeanings can be tested, not just trusted. This is the VERIFY framework applied to the output of a library function.\n\n\n\n\n                                                                                                                      42",
   "status": "full",
   "img": "img/l6_42.jpg"
  },
  {
   "n": 43,
   "title": "ROC vs. PR Curve: Two Evaluation Perspectives, Different Strengths",
   "raw": "ROC vs. PR Curve: Two Evaluation Perspectives, Different Strengths\n\nBoth curves sweep every threshold. The choice between them depends on the dataset and the business question.\n\n\n\n\n ROC Curve + AUC                                                  PR Curve\n Axes: FPR (x) vs. TPR (y)                                        Axes: Recall (x) vs. Precision (y)\n Summarises ranking across thresholds. The diagonal is the        Shows the precision-recall tradeoff. The random-ranking\n random-ranking baseline.                                         baseline is the positive-class prevalence.\n Best when:                                                       Best when:\n Comparing ranking quality. For deployment, also consider class   Positives are rare or costly to miss, and false alarms also matter.\n balance and error costs.                                         For the Telco dataset:\n Caution:                                                         About 26.5% of customers churn. PR complements ROC by\n A small FPR can still mean many false positives and low          showing the reliability of churn flags.\n precision when negatives are numerous.\n\n                                                                                                                                  43",
   "status": "full",
   "img": "img/l6_43.jpg"
  },
  {
   "n": 44,
   "title": "Complete Evaluation Report: The Illustrative 2,000-Customer Example",
   "raw": "Complete Evaluation Report: The Illustrative 2,000-Customer Example\n\n\n\n\nThe judgment call:\nNo metric tells us whether this model is good enough to deploy. That requires comparing the cost of missed churners\nagainst the cost of the retention campaign, estimating the model's expected revenue impact, and deciding whether the\nbusiness case is positive. Each of these steps requires domain knowledge the model cannot supply.\n                                                                                                                  44",
   "status": "full",
   "img": "img/l6_44.jpg"
  },
  {
   "n": 45,
   "title": "[Opening Question] We Have a Complete Evaluation — Why Would",
   "raw": "[Opening Question] We Have a Complete Evaluation — Why Would\nWe Ever Use a Different Model?\nOnce a real logistic regression is fitted and evaluated, what could motivate replacing it with another model?\n\n\n                         What if the pattern isn't linear?\n\n The decision boundary                  Interpretability vs. performance    When does the model fail?\n With the original features, logistic   A more complex model might score    Even AUC = 0.84 leaves room to\n regression has a linear decision       churners much better. Is the        improve ranking. Inspect which\n boundary. What if the data requires    coefficient table worth the         positive–negative pairs receive\n a curved or irregular boundary?        performance cost?                   incorrect or tied scores.\n\n\n\n\n                                                                                                              45",
   "status": "full",
   "img": "img/l6_45.jpg"
  },
  {
   "n": 46,
   "title": "Linear Boundaries Have Limits — Trees Build Flexible, Piecewise",
   "raw": "Linear Boundaries Have Limits — Trees Build Flexible, Piecewise\nBoundaries\n                                            Logistic regression boundary\n                                            With these two original features, the model has\n                                            a straight boundary. Nonlinear feature\n                                            engineering can produce a curved boundary in\n                                            the original input space.\n\n\n                                            Decision tree boundary\n                                            Axis-aligned splits, such as tenure < 24 months\n                                            and monthly charges > $70, form rectangular\n                                            regions. More splits allow finer piecewise\n                                            approximations.\n\n\n                                            The core tradeoff\n                                            A decision tree can fit non-linear patterns\n                                            logistic regression misses. But it can also overfit\n                                            — memorising the training data rather than\n                                            generalising. More flexibility means more risk of\n                                            overfitting.\n\n                                                                                            46",
   "status": "full",
   "img": "img/l6_46.jpg"
  },
  {
   "n": 47,
   "title": "CTA Demo 6: Fitting a Decision Tree and Comparing It to Logistic",
   "raw": "CTA Demo 6: Fitting a Decision Tree and Comparing It to Logistic\nRegression\n🤖 CTA Demo 6: Decision Tree — Fit, Visualise, Compare\n\nTurn 1: Ask the CTA to fit sklearn's DecisionTreeClassifier(max_depth=4) on the Telco training\nset and compare it on validation data. Also ask it to generate a visualisation of the first three levels of the\ntree using sklearn's plot_tree(). We run both code blocks in Colab.\n\nTurn 2 — Colab output: Display the metric comparison table from the Colab output: logistic regression\nvs. decision tree across accuracy, precision, recall, F1, AUC. Ask the CTA to summarise which model wins\non each metric and on what grounds.\n\nTurn 3: Ask the CTA whether the decision tree's coefficient equivalents — the split conditions — can be\ninterpreted as easily as logistic regression's odds ratios. It should note the interpretability tradeoff explicitly.\n\nTakeaway: The decision tree may outperform logistic regression on some metrics and underperform on\nothers. Neither model family is universally best — compare validated performance and practical\nrequirements in the specific business context.\n                                                                                                                 47",
   "status": "full",
   "img": "img/l6_47.jpg"
  },
  {
   "n": 48,
   "title": "Decision Tree vs. Logistic Regression: Compare Metrics and Practical",
   "raw": "Decision Tree vs. Logistic Regression: Compare Metrics and Practical\nTradeoffs\nIllustrative two-feature comparison at θ = 0.30 (same example as the next slide)\nMetric                         Log. Reg.             Dec. Tree           Verdict\n\nThreshold                               0.30                 0.30        Same cut-off\n\nPrecision                              0.38                  0.29        LR has higher precision\n\nRecall                                  0.19                 0.19        Both catch 19% of positives\n\nF1 Score                               0.26                  0.23        LR slightly higher\n\nAUC                                    0.69                  0.65        LR ranks better overall\n\n Logistic regression advantage:                                       Decision tree advantage:\n Coefficients express changes in modelled log-odds;                   Split conditions produce human-readable rules. A depth-4 binary\n exponentiating gives odds ratios for specified units and reference   tree can have up to 16 leaf rules. Larger trees become harder to\n categories.                                                          communicate and can be sensitive to small data changes.\n\n\n\n                                                                                                                                  48",
   "status": "full",
   "img": "img/l6_48.jpg"
  },
  {
   "n": 49,
   "title": "Page 49 (no extractable text — see slide image)",
   "raw": "49",
   "status": "image-only",
   "img": "img/l6_49.jpg"
  },
  {
   "n": 50,
   "title": "Model Selection Is a Judgment Call — the Metrics Inform It, They",
   "raw": "Model Selection Is a Judgment Call — the Metrics Inform It, They\nCannot Make It\nKey Insight                                                                 Explainability\nEvaluation metrics quantify model behaviour on historical data. They do     Can stakeholders understand and audit the\nnot quantify the value of deploying the model in a specific business        model's decisions?\ncontext.\nChoosing between logistic regression and a decision tree for the churn\ncampaign requires answering questions the metrics cannot answer: How        Maintenance\nimportant is it that a marketing manager can explain why a customer         How much retraining and monitoring does\nwas flagged? How frequently will the model be retrained? What is the        deployment require?\nregulatory environment around algorithmic decisions?\nEach of these questions requires domain expertise, stakeholder knowledge,\nand institutional context — not a higher AUC.                               Regulation\n                                                                            Are there legal constraints on which models\n                                                                            can be used for these decisions?\n\n\n\n\n                                                                                                                      50",
   "status": "full",
   "img": "img/l6_50.jpg"
  },
  {
   "n": 51,
   "title": "Learning Objectives Revisited: What You Should Now Be Able to Do",
   "raw": "Learning Objectives Revisited: What You Should Now Be Able to Do\nLO1 ✓\nExplain the range limitation of linear regression on binary targets and what the sigmoid solves\n\nLO2 ✓\nFit logistic regression and interpret coefficients as odds ratios using the log-odds translation chain\n\nLO3 ✓\nEvaluate classifiers using precision, recall, and F1 — and explain why accuracy misleads for imbalanced classes\n\nLO4 ✓\nCreate and interpret ROC and precision-recall curves, including the probabilistic meaning of AUC\n\nLO5 ✓\nSelect a classification threshold by specifying an explicit cost function for false positives and false negatives\nLO6 ✓\nCollaborate with the CTA to fit, evaluate, and compare classifiers — while identifying what each output requires human\njudgment to interpret\nLO7 ✓\nArticulate the boundary between what evaluation metrics can determine and what requires domain expertise\n\n                                                                                                                    51",
   "status": "full",
   "img": "img/l6_51.jpg"
  },
  {
   "n": 52,
   "title": "Technically Intriguing Questions: What This Lecture Does Not Cover",
   "raw": "Technically Intriguing Questions: What This Lecture Does Not Cover\n\nEach of these is a natural extension — explored further in later lectures or independent study.\n\n Maximum likelihood and model fitting → try asking the CTA after class\n How does sklearn fit logistic regression? It numerically minimises penalised negative log-likelihood; the\n default solver is L-BFGS.\n\n Regularisation (L1 and L2) → try asking the CTA after class\n sklearn's LogisticRegression applies L2 regularisation by default (C=1.0). What does this do to the\n coefficients, and how should C be chosen?\n\n Multiclass classification → try asking the CTA after class\n Logistic regression generalises to K classes via the softmax function. Precision, recall, and F1 extend via\n micro/macro averaging — which choice matters and why.\n\n\n\n\n                                                                                                               52",
   "status": "full",
   "img": "img/l6_52.jpg"
  },
  {
   "n": 53,
   "title": "Project Proposal, Homework 2, and Mid-term",
   "raw": "Project Proposal, Homework 2, and Mid-term\n\nSee Moodle for the confirmed schedule.\n\nCheck the current course announcements for submission\ndeadlines, release dates, and exam details.\n\n\n\n\n                                                        53",
   "status": "full",
   "img": "img/l6_53.jpg"
  },
  {
   "n": 54,
   "title": "Questions?",
   "raw": "Questions?\nCONTACT INFORMATION\n\n\n\n\n                  Instructor: Prof. Yang Liu   Office Hours: 5:00 - 5:50 PM, Thursdays\n                  Email: yliu12@hku.hk         Location: CB-714, Chow Yei Ching Building\n\n\nyangliu.mit.edu                                Let me know if you want remote!\n\n\n\n\n🤖 CTA is your 24/7 interactive and responsive learning partner!\n\n                                                                                           54",
   "status": "full",
   "img": "img/l6_54.jpg"
  },
  {
   "n": 55,
   "title": "TA contacts",
   "raw": "TA contacts\n\n                       Yushi Du:                                               Zhengyang Hu:\nTuesday 4-5PM          u3012725@connect.hku.hk                                 u3010250@connect.hku.hk\n                       https://us04web.zoom.us/j/78561597481                   https://hku.zoom.us/j/9021481973\n\n\n\n\n                       Jun Dai:                                                Lulu Cai:\nThursday 3-4PM         jundai332@connect.hku.hk                                u303011209@connect.hku.hk\n                       https://rochester.zoom.us/j/97202452759                 https://hku.zoom.us/j/5010926726\n\n\n\n\n  TA office hours on Zoom! Two slots (1 hour each) on Tuesdays and Thursdays\n\n\n                                                                                                                  55",
   "status": "full",
   "img": "img/l6_55.jpg"
  }
 ]
};

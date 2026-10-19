/* Concept map — groups every lecture page into teachable concepts so revision (and review-marking)
   can be done concept-by-concept instead of slide-by-slide. Ranges are [from, to] inclusive. */
window.DSFM_CONCEPTS = {
  "1": [
    { id: "L1-C1", title: "Course intro: why now, how the course works", from: 1, to: 10 },
    { id: "L1-C2", title: "What is data science? (definition, Venn, workflow, data types)", from: 11, to: 17 },
    { id: "L1-C3", title: "Hands-on data collection & survey design", from: 18, to: 28 },
    { id: "L1-C4", title: "Data cleaning, quality issues & normalization", from: 29, to: 38 },
    { id: "L1-C5", title: "EDA, descriptive statistics & visualization", from: 39, to: 48 },
    { id: "L1-C6", title: "Foundation models & prompt engineering", from: 49, to: 59 },
    { id: "L1-C7", title: "AI ethics, VERIFY & course wrap-up", from: 60, to: 73 }
  ],
  "2": [
    { id: "L2-C1", title: "Data as geometry: matrices, distances & similarity", from: 1, to: 24 },
    { id: "L2-C2", title: "Variance, covariance & the covariance matrix", from: 25, to: 38 },
    { id: "L2-C3", title: "Eigenvectors, eigenvalues & the theory of PCA", from: 39, to: 65 },
    { id: "L2-C4", title: "Selecting components: EVR, scree plot & the 90% rule", from: 66, to: 75 },
    { id: "L2-C5", title: "Key takeaways & CTA collaboration patterns", from: 76, to: 80 }
  ],
  "3": [
    { id: "L3-C1", title: "Probability foundations: rules & counting", from: 1, to: 11 },
    { id: "L3-C2", title: "Summary statistics & Anscombe's quartet", from: 12, to: 21 },
    { id: "L3-C3", title: "Distribution families: normal, binomial, Poisson, exponential", from: 22, to: 26 },
    { id: "L3-C4", title: "Conditional probability, Bayes & base rates", from: 27, to: 36 },
    { id: "L3-C5", title: "Confidence intervals & uncertainty", from: 37, to: 43 },
    { id: "L3-C6", title: "Hypothesis testing, p-values & significance", from: 44, to: 50 },
    { id: "L3-C7", title: "Takeaways & prompting habits", from: 51, to: 56 }
  ],
  "4": [
    { id: "L4-C1", title: "Applications across domains & the common pipeline", from: 1, to: 18 },
    { id: "L4-C2", title: "Project ideation with the CTA", from: 19, to: 25 },
    { id: "L4-C3", title: "Data quality assessment (four-check protocol)", from: 26, to: 38 },
    { id: "L4-C4", title: "Missingness mechanisms (MCAR/MAR/MNAR) & cleaning", from: 39, to: 48 },
    { id: "L4-C5", title: "Discovery-driven EDA", from: 49, to: 53 },
    { id: "L4-C6", title: "Encoding, scaling, feature engineering & pipelines", from: 54, to: 66 }
  ],
  "5": [
    { id: "L5-C1", title: "Regression & OLS foundations", from: 1, to: 14 },
    { id: "L5-C2", title: "Coefficient interpretation & inference (SE, t, p, CI)", from: 15, to: 20 },
    { id: "L5-C3", title: "Multicollinearity & VIF", from: 21, to: 24 },
    { id: "L5-C4", title: "Overfitting, train/test splits, R² & RMSE", from: 25, to: 30 },
    { id: "L5-C5", title: "Residual diagnostics & the bias-variance tradeoff", from: 31, to: 39 },
    { id: "L5-C6", title: "Regularization: Ridge, Lasso & penalty selection", from: 40, to: 53 },
    { id: "L5-C7", title: "Workflow recap & classification preview", from: 54, to: 58 }
  ],
  "6": [
    { id: "L6-C1", title: "From linear failure to logistic regression & the sigmoid", from: 1, to: 13 },
    { id: "L6-C2", title: "Odds ratios & interpreting coefficients", from: 14, to: 19 },
    { id: "L6-C3", title: "Thresholds & the confusion matrix", from: 20, to: 26 },
    { id: "L6-C4", title: "Precision, recall, F1 & cost-weighted utility", from: 27, to: 35 },
    { id: "L6-C5", title: "ROC/AUC & threshold-free evaluation", from: 36, to: 44 },
    { id: "L6-C6", title: "Model comparison & selection judgment", from: 45, to: 55 }
  ]
};

/* Helper: concept containing a given lecture page. */
window.dsfmConceptOf = function (lec, n) {
  var list = window.DSFM_CONCEPTS[String(lec)] || [];
  for (var i = 0; i < list.length; i++) {
    if (n >= list[i].from && n <= list[i].to) return list[i];
  }
  return null;
};
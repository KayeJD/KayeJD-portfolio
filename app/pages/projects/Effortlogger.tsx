import React from "react";
import { ProjectLayout } from "@/app/layouts/ProjectLayout";
import {
  creditCardMain,
  creditCardBalancing,
  creditCardDataAnalysis,
  creditCardEnsemble,
  creditCardLogisticRegression,
  creditCardProcessing,
  creditCardModelComparison,
} from "@/app/images/credit-card-ml";

export default function CreditCardML() {
  return (
    <ProjectLayout
      title="Credit Card Fraud ML"
      subtitle="Detecting fraudulent credit card transactions using various ML models on an imbalanced dataset."
      overview="In this project, we explore a dataset from Kaggle consisting of 284,807 credit card transactions conducted over a two-day period in September 2013. The dataset is characterized by a significant class imbalance, with only 492 transactions identified as fraudulent (≈0.172% of total transactions)."
      collaborator={{
        name: "Tochi Obinma",
        link: "https://www.linkedin.com/in/tochi-obinma-396703216/",
      }}
      highlights={{
        languages: "Python",
        tools: "pandas, scikit-learn, TensorFlow",
        dataset: "Kaggle Credit Card Transactions (2013)",
      }}
      steps={[
        {
          description:
            "Data Preprocessing: Cleaned and normalized features using RobustScaler, handled outliers, and split the dataset.",
          image: creditCardProcessing,
        },
        {
          description:
            "Exploratory Data Analysis: Analyzed class distribution and transaction patterns using pandas and matplotlib.",
          image: creditCardDataAnalysis,
        },
        {
          description:
            "Model Building: Implemented Logistic Regression, RandomForest, GradientBoosting, and shallow neural networks.",
          image: creditCardLogisticRegression,
        },
        {
          description:
            "Class Balancing: Addressed severe class imbalance using undersampling and oversampling techniques such as SMOTE.",
          image: creditCardBalancing,
        },
        {
          description:
            "Model Comparison: Evaluated accuracy, recall, precision, and ROC-AUC across models for balanced fraud detection.",
          image: creditCardModelComparison,
        },
        {
          description:
            "Final Ensemble: Combined models to improve recall and reduce false negatives in fraud detection.",
          image: creditCardEnsemble,
        },
      ]}
      summary="Various machine learning models were tested for fraud detection. Ensemble models and neural networks achieved strong accuracy and recall, with balanced handling of the imbalanced dataset."
      repoLink="https://github.com/KayeJD/Credit-Card-Fraud-Detector"
      mainImage={creditCardMain}
    />
  );
}

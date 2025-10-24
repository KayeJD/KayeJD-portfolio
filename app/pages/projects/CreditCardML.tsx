import React from "react";
import { ProjectLayout } from "@/app/layouts/ProjectLayout";
import {
  creditCardMain,
  creditCardBalancing,
  creditCardDataAnalysis,
  creditCardEnsemble,
  creditCardLogisticRegression,
  creditCardProcessing,
  creditCardNeuralNetwork
} from "@/app/images/credit-card-ml";

export default function CreditCardML() {
  return (
    <ProjectLayout
      title="Credit Card Fraud ML"
      subtitle="Detecting fraudulent credit card transactions using machine learning on an imbalanced dataset"
      overview="This project investigates fraudulent credit card transactions using a dataset of over 284,000 transactions collected over two days in September 2013. Only 0.172% of these transactions are fraudulent, posing a major challenge for traditional models due to the extreme class imbalance."
      collaborator={{
        name: "Tochi Obinma",
        link: "https://www.linkedin.com/in/tochi-obinma-396703216/",
      }}
      highlights={{
        languages: "Python",
        tools: "pandas, scikit-learn, TensorFlow, matplotlib",
        dataset: "Kaggle Credit Card Transactions (2013)",
      }}
      sections={[
        {
          heading: "Project Background",
          content: (
            <>
              <p>
                Credit card fraud detection requires models that can accurately
                identify rare fraudulent transactions without overwhelming false
                positives. This project focuses on designing a robust detection
                pipeline capable of handling heavy class imbalance and optimizing
                recall — the ability to catch actual fraud cases.
              </p>
              <img
                src={creditCardProcessing}
                alt="Data preprocessing visualization"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
        {
          heading: "Data Exploration & Preprocessing",
          content: (
            <>
              <p>
                The dataset consists of anonymized numerical features obtained
                through PCA transformation. Preprocessing involved scaling the
                features with <code>RobustScaler</code>, handling outliers, and
                splitting the dataset into train/test partitions. We also
                examined transaction patterns by hour and amount to understand
                potential biases.
              </p>
              <img
                src={creditCardDataAnalysis}
                alt="Data analysis plot"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
        {
          heading: "Model Development",
          content: (
            <>
              <p>
                Multiple models were trained and tested, including Logistic
                Regression, Random Forest, Gradient Boosting, and a shallow
                neural network. Each model was optimized for recall and ROC-AUC
                metrics rather than overall accuracy.
              </p>
              <img
                src={creditCardLogisticRegression}
                alt="Model training"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
        {
          heading: "Balancing the Dataset",
          content: (
            <>
              <p>
                Because fraudulent transactions represented less than 0.2% of the
                data, class imbalance severely biased the models toward predicting
                legitimate transactions. To correct this, we applied both
                undersampling and oversampling methods, including SMOTE and
                Tomek links, to achieve more balanced training sets.
              </p>
              <img
                src={creditCardNeuralNetwork}
                alt="Class balancing chart"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
        {
          heading: "Model Evaluation & Ensemble",
          content: (
            <>
              <p>
                After balancing, we evaluated models based on recall, precision,
                F1 score, and ROC-AUC. Ensemble models—combining Logistic
                Regression, Random Forest, and Gradient Boosting—achieved
                significant improvements in recall and reduced false negatives,
                which are critical in fraud detection systems.
              </p>
              <img
                src={creditCardEnsemble}
                alt="Ensemble model visualization"
                className="rounded-lg shadow-lg my-6"
              />
            </>
          ),
        },
      ]}
      summary="By leveraging a combination of classical and ensemble machine learning techniques, this project achieved high recall while maintaining balanced precision. The pipeline demonstrates the importance of proper data preprocessing and resampling strategies in fraud detection tasks."
      repoLink="https://github.com/KayeJD/Credit-Card-Fraud-Detector"
      mainImage={creditCardBalancing}
    />
  );
}

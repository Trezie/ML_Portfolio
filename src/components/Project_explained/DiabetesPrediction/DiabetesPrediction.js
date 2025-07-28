import React from "react";
import './DiabetesPrediction.css'
import Screenshot1 from '../../../assets/img/Screenshot1.png'

const DiabetesPrediction = () => {
  return (
    <div className="container">
      <h1 className="title">🚀 Predicting Diabetes Risk Using AutoGluon</h1>
      
      <section className="section">
        <h2>📌 Overview</h2>
        <div className="images">
          <img src='/img/ScreenShot2.png' className="profile-image"/>
          <img src={Screenshot1} alt='Screenshot1' className="profile-image"/>
        </div>
        
        <p>
          This project leverages AutoGluon, an automated machine learning framework, 
          to predict diabetes risk based on patient health data. The goal is to develop 
          an accurate model and analyze the key factors influencing diabetes predictions.
        </p>
      </section>                                                                                                                                                                                                                                                                                                                                                                              
      
      <section className="section">
        <h2>📊 Dataset & Problem Statement</h2>
        <p>
          <strong>Dataset:</strong> The Diabetes dataset is a widely used dataset for machine learning and statistical analysis, containing medical data on patients, often including features such as age, sex, body mass index (BMI), blood pressure, and various blood measurements, to predict the presence or progression of diabetes. https://www.kaggle.com/datasets/mathchi/diabetes-data-set<br/>
          <strong>Objective:</strong> Predict whether a patient has diabetes based on medical attributes such as:
        </p>
        <ul>
          <li> Glucose Levels</li>
          <li> Age</li>
          <li> BMI</li>
          <li> Blood Pressure</li>
          <li> Insulin Levels</li>
          <li> Pregnancies, etc.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2> Tools & Technologies Used</h2>
        <ul>
          <li> AutoGluon (Automated ML for tabular data)</li>
          <li> Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
          <li> Feature Importance Analysis</li>
          <li> Model Evaluation (Accuracy, F1-score, etc.)</li>
        </ul>
      </section>
      
      <section className="section">
        <h2> Project Workflow</h2>
        <ol>
          <li>
            <strong>Model Training & Evaluation:</strong> Used AutoGluon’s TabularPredictor to train multiple models, 
            automatically selected the best-performing model, and evaluated model performance on test data.
          </li>
          <li>
            <strong>Feature Importance Analysis:</strong> Used permutation shuffling to determine which features influenced predictions the most.
            <ul>
              <li> Glucose was the most predictive feature.</li>
              <li> Insulin & Blood Pressure had little to no effect.</li>
              <li> Pregnancies showed negative importance, indicating potential noise.</li>
            </ul>
          </li>
          <li>
            <strong>Results & Insights:</strong>
            <ul>
              <li>✔ Model Accuracy: Judged using Accuracy Score, F1-score,AUC-ROC (Area Under the Curve - Receiver Operating Characteristic), Confusion Matrix </li>
              <li>✔ Top Features for Prediction:</li>
              <ul>
                <li>Glucose (Highest impact)</li>
                <li>Skin Thickness & BMI (Moderate impact)</li>
                <li>Insulin & Blood Pressure (Least impact)</li>
              </ul>
            </ul>
          </li>
        </ol>
      </section>
      
      <section className="section">
        <h2>📈 Key Takeaways</h2>
        <ul>
          <li>✅ Glucose levels are the strongest indicator of diabetes risk.</li>
          <li>✅ Feature selection is crucial—removing low-importance features can enhance model efficiency.</li>
          <li>✅ AutoML tools like AutoGluon simplify the process of model selection and tuning.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2> Future Improvements</h2>
        <ul>
          <li>🔹 Try feature engineering (e.g., grouping age ranges).</li>
          <li>🔹 Experiment with deep learning models for better accuracy.</li>
          <li>🔹 Deploy the model as an API for real-time predictions.</li>
        </ul>
      </section>
      
      <section className="section">
        <h2>📌 Project Links</h2>
        <p>
          📂 <a href="[Link to GitHub Repo]" target="_blank" rel="noopener noreferrer">GitHub Repository</a><br/>
          📝 <a href="[Link to Blog/Medium Article]" target="_blank" rel="noopener noreferrer">Blog Post (if available)</a>
        </p>
      </section>
    </div>
  );
};

export default DiabetesPrediction;

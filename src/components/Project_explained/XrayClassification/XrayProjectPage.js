import React from "react";
import "./XrayProjectPage.css";

const XrayProjectPage = () => {
  return (
    <div className="xrayproject-container">
      <h1 className="xrayproject-title">Image-Based Disease Detection Using CNN</h1>

      <img
        src="/img/CNNModelScreenshot.png"
        alt="CNN Model Screenshot"
        className="xrayproject-image"
      />

      <section className="xrayproject-section">
        <h2>Project Overview</h2>
        <p>
          This project involved building a Convolutional Neural Network (CNN) using
          TensorFlow to classify medical images for disease detection. The goal
          was to provide a reliable image-based diagnosis system that can support
          healthcare providers, especially in resource-limited settings.
        </p>
      </section>

      <section className="xrayproject-section">
        <h2>Technologies Used</h2>
        <ul>
          <li>Python</li>
          <li>TensorFlow & Keras</li>
          <li>NumPy & Matplotlib</li>
          <li>Google Colab / Jupyter Notebook</li>
          <li>React.js (for this project page)</li>
        </ul>
      </section>

      <section className="xrayproject-section">
        <h2>Process</h2>
        <p>
            The Process — What I Did and Why
As someone passionate about both health and AI, I wanted to apply deep learning to something meaningful — detecting pneumonia in chest X-rays. The idea was simple: can we teach a computer to "see" what a radiologist sees?

I used as X_ray dataset, labelled into normal and pneumonia data.

I then designed a custom Convolutional Neural Network (CNN) — a model architecture tailored for image recognition. I added layers like Conv2D, MaxPooling, and BatchNormalization to help the model extract important patterns, like the cloudy areas often seen in pneumonia cases. I also added dropout to prevent overfitting.

During training, I used early stopping to make sure the model didn’t just memorize the data, but learned to generalize. I also tracked metrics like precision, recall, and AUC (area under the curve) — especially important in medical diagnosis where false positives or negatives can cost lives.



        </p>
      </section>

      <section className="xrayproject-section">
        <h2>T📊 The Result — What Happened and What I Learned</h2>
        <p>
          
The first result was… disappointing. My model’s AUC was just 0.49, which is basically guessing. It was a humbling moment — but also a valuable one.

Instead of giving up, I stepped back and asked:

Were the labels loaded correctly?

Were the images too small or distorted?

Was my model too shallow, or was the data unbalanced?

I ran multiple tests — including overfitting on a small batch (to check if the model can learn), checking label distribution, and even trying out transfer learning using a pre-trained model (like MobileNetV2).

Each step taught me something new: how fragile deep learning pipelines can be, and how easy it is for silent bugs (like mislabels or mismatched image shapes) to derail performance.
        </p>
      </section>

      <section className="xrayproject-section">
        <h2> Impact — Why This Project Mattered</h2>
        <p>
          This project was more than code — it was a way to explore how AI can support healthcare, especially in under-resourced settings. Pneumonia is a leading cause of death in many parts of the world, and even a semi-accurate tool can help screen or triage patients faster.

While my model didn’t achieve clinical accuracy (yet), it laid the foundation. It helped me build the confidence and workflow to tackle real-world problems with AI — starting with health.
        </p>
      </section>
    </div>
  );
};

export default XrayProjectPage;

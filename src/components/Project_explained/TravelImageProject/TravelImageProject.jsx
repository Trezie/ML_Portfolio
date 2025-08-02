// travelImageProject.js

import React from 'react';
import './TravelImageProject.css';

const TravelImageProject = () => {
  return (
    <div className="travel-project">
      <section className="header-section">
        <h1 className="title">Personalized Travel Image Generator</h1>
        <p className="subtitle">Transforming customer data and  trip itineraries into stunning, AI-generated visuals</p>
      </section>

      <section className="tech-used">
        <h2>Technologies Used</h2>
        <ul>
          <li>Google Gemini (for personalized prompt generation)</li>
          <li>Stable Diffusion / Realistic Vision on Hugging Face</li>
          <li>Python (os, PIL, torch, API calls)</li>
          <li>React.js for the frontend display</li>
        </ul>
      </section>

      <section className="description">
        <h2>Project Overview</h2>
        <p>
          This project takes customer travel itineraries and brings them to life using AI. Gemini is used to analyze
          customer details and itinerary data to create vivid, photography-style prompts. These prompts are then fed
          into a diffusion model to generate high-resolution images. The outputs are organized into folders by customer,
          allowing businesses to quickly create personalized visuals for marketing or client experience.
        </p>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li> Auto-generates prompts per customer/day</li>
          <li> Outputs organized image folders per customer</li>
          <li> Uses photography terms to improve realism</li>
          <li> Integrates AI prompt engineering techniques</li>
        </ul>
      </section>

      <section className="impact">
        <h2>Impact</h2>
        <p>
          This tool empowers travel businesses to showcase customized visuals for trips, impress clients with
          photorealistic previews, and save on stock image or designer costs. It's a step forward in
          travel personalization, automation, and immersive customer experience.
        </p>
      </section>

      <section className="gallery">
        <h2>Sample Images</h2>
        <div className="image-grid">
          <img src="/img/AI-travel-image1.png" alt="Travel Day 1" />
          <img src="/img/AI-travel-image2.png" alt="Travel Day 2" />
          <img src="/img/AI-travel-image3.png" alt="Travel Day 3" />
          <img src="/img/AI-travel-image4.png" alt="Travel Day 4" />
        </div>
      </section>

      <section className="github-link">
        <a href="https://github.com/Trezie/Travel_Images.git" target="_blank" rel="noopener noreferrer" className="github-btn">
          🔗 View Code on GitHub
        </a>
      </section>
    </div>
  );
};

export default TravelImageProject;

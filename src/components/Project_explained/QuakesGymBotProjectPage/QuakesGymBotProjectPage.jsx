import React from "react";
import { Link } from "react-router-dom";
import "./QuakesGymBotProjectPage.css";
// Optional styling

const QuakesGymBotProjectPage = () => {
  return (
    <div className="project-detail-container">
      <div className="project-header">
        <h1>Quake's Gym AI Support Bot</h1>
        <p className="project-subheading">AI Customer Service for Fitness Members – Built with Hugging Face</p>
      </div>

      <div className="project-content">
        <img
          src="/img/QuakesBot.gif"
          alt="Quake's Gym Bot preview"
          className="project-image"
        />

        <section className="project-description">
          <h2>Overview</h2>
          <p>
            This project showcases an AI-powered chatbot designed for <strong>Quake’s Gym</strong> to provide 24/7 customer support to fitness members.
            Built using <strong>Hugging Face Transformers</strong> and deployed on <strong>Hugging Face Spaces</strong> via Gradio, the bot responds naturally to queries about gym hours, membership plans, personal training, and facility access.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Understands natural language fitness-related questions</li>
            <li>Instantly answers FAQs about gym services, pricing, and schedules</li>
            <li>Personalized responses based on customer intent</li>
            <li>Deployable via Hugging Face Spaces (Gradio UI)</li>
            <li>Customizable knowledge base and language style</li>
          </ul>

          <h2>Tools & Technologies</h2>
          <ul>
            <li><strong>Hugging Face Transformers:</strong> NLP model for language understanding</li>
            <li><strong>Gradio:</strong> Web-based interface for chatbot interaction</li>
            <li><strong>Hugging Face Spaces:</strong> Hosting and deployment</li>
            <li><strong>Python:</strong> Core logic and preprocessing</li>
          </ul>

          <h2>Use Case</h2>
          <p>
            This solution reduces the need for live agents, improves customer experience,
            and supports gym operations during off-hours. It can be scaled to handle inquiries from
            thousands of members simultaneously.
          </p>

          <h2>See It in Action</h2>
          <p>
            Click the button below to try the chatbot or view a short demo of how it works.
          </p>

          <a
            href="https://huggingface.co/spaces/Ifyyy/client-pdf-chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo"
          >
            💬 Try the Live Chatbot
          </a>

          <br />

          <a
            href="https://drive.google.com/file/d/14GxrAjLiRNbEfgJzOSBcjK6p6T5GNSTb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo"
            style={{ marginTop: "10px" }}
          >
            🎥 Watch Demo Video
          </a>
        </section>

        <div className="back-to-projects">
          <Link to="/projects" className="btn-back">← Back to Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default QuakesGymBotProjectPage;

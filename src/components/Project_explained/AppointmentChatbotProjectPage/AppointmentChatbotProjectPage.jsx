import React from "react";
import { Link } from "react-router-dom";
import "./AppointmentChatbotProjectPage.css"; // Optional: create or reuse styling

const AppointmentChatbotProjectPage = () => {
  return (
    <div className="project-detail-container">
      <div className="project-header">
        <h1>AI-Powered Appointment Setter Bot</h1>
        <p className="project-subheading">Automating scheduling with OpenAI, n8n, and Zoom</p>
      </div>

      <div className="project-content">
        <img
          src="/img/AppointmentSetter.gif"
          alt="Chatbot preview"
          className="project-image"
        />

        <section className="project-description">
          <h2>Overview</h2>
          <p>
            This project features an intelligent appointment-setting chatbot built using 
            <strong> n8n (a no-code automation platform)</strong> and 
            <strong> OpenAI’s GPT API</strong>. The bot streamlines the booking process by engaging 
            users in a natural conversation and handling everything from data collection to Zoom meeting creation.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Conversational booking powered by OpenAI</li>
            <li>Collects name, email, and preferred date/time</li>
            <li>Checks availability and confirms appointments</li>
            <li>Creates Zoom meetings automatically</li>
            <li>Sends confirmation emails to users</li>
            <li>Fully built using n8n without custom backend code</li>
          </ul>

          <h2>Tools & Technologies</h2>
          <ul>
            <li><strong>n8n:</strong> Automation workflows and chat interface</li>
            <li><strong>OpenAI API:</strong> Natural language understanding</li>
            <li><strong>Cal.com API:</strong> Calendar integration (optional)</li>
            <li><strong>Zoom API:</strong> Creates meeting links</li>
            <li><strong>SendGrid (or SMTP):</strong> Sends email notifications</li>
          </ul>

          <h2>Why This Matters</h2>
          <p>
            This bot is ideal for service-based businesses, coaches, or teams that rely heavily 
            on client meetings. It eliminates the back-and-forth of scheduling and enhances user experience.
          </p>

          <h2>See It in Action</h2>
        </section>

        <a 
            href="https://drive.google.com/file/d/1Ry8AD_CScvIRgV75k06f99a9uUcxCG0-/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-demo"
            >
            🎥 Watch Video Demo
        </a>

        <div className="back-to-projects">
          <Link to="/projects" className="btn-back">← Back to Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default AppointmentChatbotProjectPage;

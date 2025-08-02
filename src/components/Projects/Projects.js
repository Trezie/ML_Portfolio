import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";


const projects = [
  {
    title: "Predicting Diabetes Risk Using AutoGluon",
    description: "Built a machine learning model using AutoGluon to predict diabetes risk based on patient data. The goal was to identify key factors influencing diabetes predictions and improve model performance.",
    image: "/img/Screenshot2.png",
    link: "/DiabetesPrediction",
  },
  {
  title: "Image-Based Disease Detection Using CNN",
  description: "Developed a Convolutional Neural Network (CNN) to classify medical images for disease detection. The model was trained on image datasets using TensorFlow, achieving high precision and recall. Included performance visualization (loss, AUC, ROC, confusion matrix) and saved the model in .keras format.",
  image: "/img/xray_picture.jpeg",
  link: "/XrayProjectPage",
  },
  {
  title: "AI-Powered Appointment Setter Chatbot with n8n and OpenAI",
  description: "Built an intelligent chatbot using n8n and OpenAI's API to automate appointment scheduling. The chatbot interacts with users, asks if they'd like to book a meeting, collects their name, email, and preferred date, offers available time slots, confirms details, books the appointment on Zoom, and sends a confirmation email. This no-code solution streamlines scheduling and enhances user experience.",
  image: "/img/AppointmentSetter.gif",
  link: "/AppointmentChatbotProjectPage",
  },
  {
    title: "Quake's Gym AI Support Bot",
    description: "An NLP-powered customer support assistant for gym members. Built with Hugging Face Transformers and deployed using Gradio.",
    image: "/img/QuakesBot.gif", // Add your bot preview image
    link: "/QuakesGymBotProjectPage",
  },

    {
    title: "Travel Image Generator",
    description: "Transforms a combination of customer data and trip itineraries into stunning, photorealistic images using Google Gemini and Stable Diffusion. Perfect for travel agencies.",
    image: "/img/AI-travel-image4.png", // Replace with your actual preview image path
    link: "/TravelImageProject",
  }




];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">
        <span className="portfolio-text">PORTFOLIO</span>
        <br />Personal Projects
      </h2>
      <p className="projects-subtext">
        Here you can see some of the projects I've done on my own time.
      </p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link}>View Project</Link>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;

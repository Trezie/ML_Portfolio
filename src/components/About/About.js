import React from "react";
import "./About.css"; // Import the CSS styling
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="profile-image">
          <img src="/img/me.jpg" alt="Profile" />
        </div>
        <div className="about-text">
          <h1>Ifeoma Okafor</h1>
          <h3>Data Analyst, Machine Learning/AI Scientist</h3>
          <p>
          Hi, I'm Ifeoma Okafor, a highly motivated and passionate 
          Machine Learning/AI Scientist with a strong background in Data Analyst.  
          I have dedicated myself to mastering the art of leveraging data, AI, and cutting-edge 
          technology to drive meaningful solutions. 
          </p>
          <p>
          My expertise lies in analyzing complex problems, 
          deriving actionable insights, and building innovative systems that enhance decision-making and efficiency.
          </p>

          <h3>Mission</h3>
          <ul>
            <li>To bridge the gap between technology and real-world applications, creating smarter, more efficient systems that drive progress</li>
            
          </ul>

        </div>
      </div>

      <div className="learn-more">
        <h2>Learn more about my:</h2>
        <div className="buttons">
          <button><Link to ='skills' smooth={true} duration={500}> Skills </Link></button>
          <button><Link to ='projects' smooth={true} duration={500}> Projects </Link></button>
          <button><Link to ='certificates' smooth={true} duration={500}> Certificates </Link></button>

        </div>
        <div className="buttons">
          <button className="dark-button">Resume</button>

        </div>
      </div>
    </section>
  );
};

export default About;

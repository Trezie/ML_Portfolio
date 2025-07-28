import React from "react";
import { FaJava, FaShareAlt } from "react-icons/fa";
import { PiTargetLight } from "react-icons/pi"; // Icon similar to OpenCV
import "./Skills.css";
import SkillsList from "../SkillsBar/SkillsBar";

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        <p>
          Below are some of my skills, and I'm always looking to learn more.
        </p>
       
      </div>

      <div className="skills-container">

        <div className="skill-card">
          <div className="icon">
            <FaShareAlt />
          </div>
          <h3>Machine Learning, Artificial Intelligence</h3>
          <p>
            I’ve worked on many ML projects and was a research assistant at the{" "}
            <a href="#">MIT Media Lab</a>. My research includes{" "}
            <a href="#">Self-Driving Microscopy</a> and <a href="#">Utility Programs</a>.
            Personal projects include a <a href="#">neural model library</a>, 
            <a href="#"> NN trainer library</a>, and <a href="#">NN experiments</a>.
          </p>
        </div> 
        <div className="skill-card">
          <div className="icon">
            <PiTargetLight />
          </div>
          <h3>Computer Vision, OpenCV/OpenGL</h3>
          <p>
            I have significant research experience in computer vision, including{" "}
            <a href="#">Computer Vision Tools for Locating Nitrogen-Vacancy Centers</a>. 
            I’ve created programs using OpenCV and OpenGL—such as an{" "}
            <a href="#">object tracker</a>, <a href="#">collage generator</a>, 
            <a href="#"> game engine</a>, and <a href="#">ray casting simulation</a>.
          </p>
        </div>
        <div className="skill-card">
          <div className="icon">
            <FaJava />
          </div>
          <h3>Java</h3>
          <p>
            I have over <strong>6 years</strong> of experience in Java, developing games, plugins, and 
            applications like a <a href="#">client request library</a>, 
            <a href="#"> audio analyzer</a>, and an early version of my 
            <a href="#"> OpenGL game engine</a>.
          </p>
        </div>

        <div className="skill-card">
          <div className="icon">
            <FaJava />
          </div>
          <h3>Java</h3>
          <p>
            I have over <strong>6 years</strong> of experience in Java, developing games, plugins, and 
            applications like a <a href="#">client request library</a>, 
            <a href="#"> audio analyzer</a>, and an early version of my 
            <a href="#"> OpenGL game engine</a>.
          </p>
        </div>
        <div className="skill-card">
          <div className="icon">
            <FaJava />
          </div>
          <h3>Java</h3>
          <p>
            I have over <strong>6 years</strong> of experience in Java, developing games, plugins, and 
            applications like a <a href="#">client request library</a>, 
            <a href="#"> audio analyzer</a>, and an early version of my 
            <a href="#"> OpenGL game engine</a>.
          </p>
        </div>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;

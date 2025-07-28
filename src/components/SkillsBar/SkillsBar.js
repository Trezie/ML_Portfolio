import React from "react";
import "./SkillsBar.css"; // Import the CSS file

const SkillBar = ({ skill, level, percentage }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-level">{level}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const SkillsList = () => {
  const skills = [
    { skill: "Python", level: "Expert", percentage: 90 },
    { skill: "JavaScript", level: "Intermediate", percentage: 75 },
    { skill: "SQL", level: "Advanced", percentage: 80 },
    { skill: "Machine Learning", level: "Advanceed", percentage: 82 },
    { skill: "Data Visualization", level: "Advanced", percentage: 80 },
    { skill: "React.js", level: "Intermediate", percentage: 70 },
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      {skills.map((item, index) => (
        <SkillBar key={index} {...item} />
      ))}
    </div>
  );
};

export default SkillsList;

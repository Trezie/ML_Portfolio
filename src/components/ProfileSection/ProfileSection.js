import React from "react";
import "./ProfileSection.css"; // Import external CSS

const ProfileSection = () => {
  return (
    <div className="profile-container" style={{
      backgroundImage: "url('/img/website_bacground.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div className="overlay"></div>
      <div className="content">
      <div className="profile-image-container">
          <img src="/img/me.jpg" alt="Profile" className="profile-image" />
        </div>
        <h1 className="name">Ifeoma Okafor</h1>
        <p className="subtitle">
          Machine Leraning AI Scientist
        </p>
        <button className="portfolio-button">Download CV</button>
        <p className="outdated-text">Turning Data into <span>Smart and Scalable</span> Solutions!</p>
      </div>
    </div>
  );
};

export default ProfileSection;

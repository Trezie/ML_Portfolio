import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">Copyright © Ifeoma Okafor 2025</p>

      <div className="social-icons">
        <a href="#" className="social-link">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/in/ifeoma-okafor-645188172/" className="social-link">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-github"></i>
        </a>
      </div>

      <div className="footer-links">
        <a href="#" className="footer-link">About</a>
        <a href="#" className="footer-link">Contact</a>
        <a href="#" className="footer-link">
          <i className="fas fa-file-alt"></i> Resume
        </a>
        <a href="#" className="footer-link old-site">Old Site</a>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "./Header.css"; // Import external CSS
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="nav-bar">
        <h1 className="logo">Ifeoma Okafor</h1>
        <button className="menu-button" onClick={toggleMenu}>
          Menu &#9776;
        </button>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to ="profile" smooth={true} duration={500}>PROFILE</Link></li>
          <li><Link to ="about" smooth={true} duration={500}>ABOUT</Link></li>
          <li><Link to ="skills" smooth={true} duration={500}>SKILLS</Link></li>
          <li><Link to ="projects" smooth={true} duration={500}>PROJECTS</Link ></li>
          <li><Link to ="papers" smooth={true} duration={500}>CERTIFICATES</Link></li>
          <li><Link to ="contact" smooth={true} duration={500}>CONTACT</Link></li>
          <li><Link to ="resume" className="bold-link" >RESUME</Link></li>
        </ul>
      </div>
    </header>
  );
};


export default Header;

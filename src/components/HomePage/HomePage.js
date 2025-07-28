import React from "react";
import Header from "../Header/Header";
import ProfileSection from "../ProfileSection/ProfileSection";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Certificates from '../Certificates/Certificates'
import Contact from "../Contact/Contact";
import Footer from '../Footer/Footer'
import { Element } from "react-scroll";

const HomePage = () => {
  return (
    <div>
      <Element name="profile">
        <ProfileSection />
      </Element>
    
      <Element name="about">
        <About />
      </Element>
      
      <Element name="skills">
        <Skills />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>

      <Element name="certificates">
        <Certificates />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Element name="footer">
        <Footer />
      </Element>


    </div>
  );
};

export default HomePage;

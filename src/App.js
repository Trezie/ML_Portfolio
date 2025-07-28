import React from "react";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Header from './components/Header/Header'
import "@fortawesome/fontawesome-free/css/all.min.css";
import XrayProjectPage from './components/Project_explained/XrayClassification/XrayProjectPage';
import DiabetesPrediction from "./components/Project_explained/DiabetesPrediction/DiabetesPrediction";
import HuggingFaceChatbot from './components/HuggingFaceChatbot/HuggingFaceChatbot'
import AppointmentChatbotProjectPage from "./components/Project_explained/AppointmentChatbotProjectPage/AppointmentChatbotProjectPage";
import Projects from "./components/Projects/Projects"
import QuakesGymBotProjectPage from './components/Project_explained/QuakesGymBotProjectPage/QuakesGymBotProjectPage'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/HuggingFaceChatbot" element={<HuggingFaceChatbot />} />
         <Route path='/DiabetesPrediction' element={<DiabetesPrediction/>} />
         <Route path='/XrayProjectPage' element={<XrayProjectPage/>} />
         <Route path="/AppointmentChatbotProjectPage" element={<AppointmentChatbotProjectPage />} />
         <Route path="/QuakesGymBotProjectPage" element={<QuakesGymBotProjectPage />} />

          
         <Route path="/projects" element={<Projects />} />
      </Routes>

    </Router>

  );
}

export default App;

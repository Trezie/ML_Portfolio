import React from "react";
import "./AppointmentBotPage.css"; // Import the CSS file

const AppointmentBotPage = () => {
  return (
    <div className="appointment-wrapper">
      <div className="appointment-container">
        {/* Header */}
        <div className="appointment-header">
          <h1 className="appointment-title">Book Your Appointment</h1>
          <p className="appointment-subtext">
            Chat with our assistant below to find a suitable time for your appointment.
          </p>
        </div>

        {/* Chatbot Container */}
        <div className="chatbot-box">

        </div>
      </div>
    </div>
  );
};

export default AppointmentBotPage;

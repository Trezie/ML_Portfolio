import React, { useState } from 'react';
import './HuggingFaceChatbot.css'; // we'll create this next

const HuggingFaceChatbot = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button
        id="hf-chat-button"
        onClick={() => setVisible(!visible)}
      >
        <img
          src="https://www.svgrepo.com/show/339963/chat-bot.svg"
          alt="Chat"
          width="40"
        />
      </button>

      {visible && (
        <iframe
          id="hf-chat-frame"
          src="https://ifyyy-client-pdf-chatbot.hf.space"
          title="Quakes Gym Chatbot"
        ></iframe>
      )}
    </>
  );
};

export default HuggingFaceChatbot;

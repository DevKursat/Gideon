import React from 'react';
import './walkthrough.css';

interface WalkthroughProps {
  onClose: () => void;
}

const Walkthrough: React.FC<WalkthroughProps> = ({ onClose }) => {
  return (
    <div className="walkthrough-overlay">
      <div className="walkthrough-container">
        <button className="walkthrough-close" onClick={onClose}>×</button>
        <h2>Welcome to Gideon!</h2>
        <p>Here’s a quick tip to get you started:</p>
        <div className="walkthrough-tip">
          <p>You can access your chat history by clicking on the <strong>logo and your name</strong> in the top-left corner.</p>
          <div className="walkthrough-highlight"></div>
        </div>
        <button className="walkthrough-got-it" onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
};

export default Walkthrough;

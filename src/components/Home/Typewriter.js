import React, { useState, useEffect } from 'react';
import './Typewriter.css'; // Assuming you have a CSS file for styling

function Typewriter() {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Frontend Engineer';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (text.length < fullText.length) {
        setText(prevText => prevText + fullText[prevText.length]);
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the interval for typing speed

    return () => clearInterval(typingInterval);
  }, [text, fullText]);

  return (
    <h3 className="title">
      <span className="typewriter">{text}</span>
    </h3>
  );
}

export default Typewriter;
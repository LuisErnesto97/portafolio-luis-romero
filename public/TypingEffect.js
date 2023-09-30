import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

const TypingEffect = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Cuando se completa la escritura, reinicia la animación
        setDisplayText("");
        setCurrentIndex(0);
      }
    }, speed); // Ajusta la velocidad de escritura según tus preferencias

    return () => clearInterval(interval);
  }, [currentIndex, text, speed]);

  return (
    <>
      <Fade direction="left">
        <div className="typing">{displayText}</div>
      </Fade>
    </>
  );
};

export default TypingEffect;

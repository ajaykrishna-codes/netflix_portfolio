import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../src/images/logo-2.png"; // Update with the path to your logo
import "./NetflixTitle.css";
import clickHelperImage from "./images/click-helper.jpg"; // Add your image path
import netflixSound from "./netflix-sound.mp3";

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch((error) => console.error("Audio play error:", error));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate("/browse");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <img 
        src={logoImage} 
        alt="Custom Logo" 
        className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
      />

      {!isClicked && (
        <img
          src={clickHelperImage}
          alt="Click Helper"
          className="click-helper"
        />
      )}
    </div>
  );
};

export default NetflixTitle;

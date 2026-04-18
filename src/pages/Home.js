import React from 'react';
import { useNavigate } from 'react-router-dom';

import BlurText from "../components/BlurText";
import FallingText from '../components/FallingText';
import Squares from '../components/Squares';
import TrueFocus from "../components/TrueFocus";

import myPhoto from '../images/Official-PROFILE.jpg';

import '../styles/Home.css';
import '../styles/TrueFocus.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      <section className="hero-wrapper">
        <Squares
          speed={0.2}
          squareSize={50}
          direction="diagonal"
          borderColor="#ffffff67"   
          hoverFillColor="#27303d"  
          className="hero-squares"
        />
        
        <div className="hero-content">
          <BlurText
            text="WELCOME TO MY PORTFOLIO"
            tag="h1"
            delay={150}
            animateBy="letters"
            direction="top"
          />
        </div>

        <div className="focus-buttons">
          <TrueFocus 
            sentence="Gino Christian Arellano"
            manualMode={false}
            blurAmount={5}
            borderColor="#9fc6f3" 
            glowColor="rgba(159, 198, 243, 0.4)"
            animationDuration={0.8}
            pauseBetweenAnimations={1}
          />
        </div>
      </section>

      <section className="home-main-section">
        <div className="main-left">
          <h1 className="bio-name">Gino Christian E. Arellano</h1>
          <h2 className="bio-title">Developer & Content Creator</h2>
          <p className="bio-description">
            I’m continuously learning new skills and gaining experiences that help me grow. 
            I enjoy exploring technology, taking on new challenges, and finding opportunities 
            where I can contribute and make a positive impact.
          </p>

        <div className="btn-group">
          <button 
            className="btn dive-btn" 
            onClick={() => navigate('/about')}
          >
            Dive In
          </button>

          <a 
            href="/GinoChristian_Arellano_CV.pdf" 
            download 
            className="btn cv-btn"
          >
            Download CV
          </a>
        </div>
        </div>

        <div className="main-right">
          <img src={myPhoto} alt="Gino Christian Arellano" className="profile-img" />
        </div>
      </section>
      
      <section className="blur-main">
        <BlurText text="TECH STACK AND EXPERTISE" tag="h1" delay={150} animateBy="words" trigger="scroll" />
      </section>

      <section className="falling-section-wrapper">
        <FallingText
          text="HTML CSS JavaScript ASP.NET C# C++ SQL Arduino ESP32 SSMS Oracle MySQL Figma UIUX ReactBits Blynk Cybersecurity Networking Troubleshooting GitHub React"
          highlightWords={["React", "GitHub", "Frontend", "UIUX", "IoT"]}
          fontSize="1.5rem"
          gravity={0.6}
          trigger="scroll"   
        />
      </section>

    </div>
  );
}

export default Home;
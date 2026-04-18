import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import SplitText from '../components/SplitText';
import { motion, AnimatePresence } from 'framer-motion';

// Certificate Imports
import certIBM from '../images/CERT_IBMBUILD.jpg';
import certData from '../images/CERT_DATASCIENCES.jpg';
import certCyber from '../images/CERT_CYBERSECURITY.jpg';
import certNetwork from '../images/CERT_NETWORK.jpg';
import certShe from '../images/CERT_SHE.jpg';
import certCisco from '../images/CERT_CISCO.jpg';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certs = [
    { img: certIBM, title: "AI Fundamentals" },
    { img: certData, title: "Data Science" },
    { img: certCyber, title: "Cybersecurity" },
    { img: certNetwork, title: "Network Defense" },
    { img: certShe, title: "SHE++ Alibaba Cloud" },
    { img: certCisco, title: "Packet Tracer" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  // AUTO SLIDER: Changes every 2 seconds
  useEffect(() => {
    if (isModalOpen) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % certs.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isModalOpen, certs.length]);

  const nextCert = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certs.length);
  };

  const prevCert = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certs.length) % certs.length);
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
  };

  return (
    <main className="about-ethereal-container">
      <div className="ethereal-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <section className="about-hero">
        <div className="about-left">
          <SplitText text="WHO IS GINO?" tag="h1" className="about-title" delay={0.08} />
          
          <p className="about-description">
            I am a <strong>motivated 4th-year IT student</strong> at Quezon City University specializing in 
            Front-End Development and UI/UX Design. I have a proven track record of creating 
            responsive web applications and integrating hardware with software solutions. 
            Beyond tech, I am a content creator with a community of <strong>116K+ followers</strong>.
          </p>

          <div className="highlights-list">
            <div className="highlight-entry">
              <h3>Professional Credentials</h3>
              <div className="cert-button-group">
                <a href="https://www.credly.com/earner/earned/share/00132c76-4834-44b9-8665-f08949dbc29f" target="_blank" rel="noopener noreferrer" className="mini-cert-btn">Data Science Verified</a>
                <a href="https://www.credly.com/earner/earned/share/e568039a-140d-44b9-be82-e11f888586bb" target="_blank" rel="noopener noreferrer" className="mini-cert-btn">Cybersecurity Verified</a>
                <a href="https://www.credly.com/badges/8a3bc63b-ab87-48cf-8581-ae1fc0eeec77" target="_blank" rel="noopener noreferrer" className="mini-cert-btn">AI Fundamentals Verified</a>
                <a href="https://www.credly.com/earner/earned/share/9da24c35-5a3f-439a-a1ab-f5950b657511" target="_blank" rel="noopener noreferrer" className="mini-cert-btn">Network Defense Verified</a>
              </div>
            </div>

            <div className="highlight-entry">
              <h3>Academic Excellence</h3>
              <p>• <strong>Quezon City University:</strong> 3x Dean's Lister (2022-2024)</p>
              <p>• <strong>Lagro High School:</strong> STEM Graduate with High Honors</p>
              <p>• <strong>Camarin High School:</strong> JHS Graduate with Honors</p>
            </div>

            <div className="highlight-entry">
              <h3>Experience</h3>
              <p>• <strong>IT Intern:</strong> Mitzy Travel and Tours Inc. (2026)</p>
              <p>• <strong>Creative Team & Model:</strong> Medieval MNL (2025)</p>
              <p>• <strong>Social Media Manager:</strong> Himawari PH (2023-2024)</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="persona-card-glass">
            <div className="card-header">
              <span className="mac-dot themed-red"></span>
              <span className="mac-dot themed-yellow"></span>
              <span className="mac-dot themed-blue"></span>
            </div>
            <div className="card-content">
              <h3>Gino Christian E. Arellano</h3>
              <p className="role-ethereal">Optimizing code & aesthetic.exe</p>
              <hr className="glass-hr" />
              <div className="stat-glass"><span>System:</span> <span>Student / Developer</span></div>
              <div className="stat-glass"><span>Uptime:</span> <span>4th Year IT Student</span></div>
              <div className="stat-glass"><span>Status:</span> <span>Seeking Opportunities</span></div>
              <div className="stat-glass"><span>Specialty:</span> <span>Front-End & UI/UX</span></div>
              {/* Badges removed from here */}
            </div>

            <div className="cert-slider-glass">
              <button className="slider-arrow-plain" onClick={prevCert}>&#10216;</button>
              <div className="cert-display-glass" onClick={() => setIsModalOpen(true)}>
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    <img src={certs[currentIndex].img} alt="Cert" className="cert-img-ethereal" />
                    <p className="cert-label-ethereal">{certs[currentIndex].title}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button className="slider-arrow-plain" onClick={nextCert}>&#10217;</button>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div className="cert-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)}>
            <div className="cert-modal-content-glass" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal-glass" onClick={() => setIsModalOpen(false)}>&times;</button>
              <div className="modal-nav-container">
                <button className="plain-nav-btn" onClick={prevCert}>&#10216;</button>
                <div className="modal-image-wrapper">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={certs[currentIndex].img}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                      className="large-cert-view-glass"
                    />
                  </AnimatePresence>
                </div>
                <button className="plain-nav-btn" onClick={nextCert}>&#10217;</button>
              </div>
              <h3 className="modal-cert-title">{certs[currentIndex].title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default About;
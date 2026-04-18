import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import { motion, AnimatePresence } from 'framer-motion';

// Image Imports
import t1 from '../images/PROJ_TRASHURE1.jpg';
import t2 from '../images/PROJ_TRASHURE2.jpg';
import t3 from '../images/PROJ_TRASHURE3.jpg';
import t4 from '../images/PROJ_TRASHURE4.jpg';
import d1 from '../images/PROJ_DOOR1.jpg';
import d2 from '../images/PROJ_DOOR2.jpg';
import d3 from '../images/PROJ_DOOR3.jpg';
import dg from '../images/PROJ_DOOR.jpg'; // Group photo
import u1 from '../images/PROJ_UYA1.jpg';
import u2 from '../images/PROJ_UYA2.jpg';
import u3 from '../images/PROJ_UYA3.jpg';
import b1 from '../images/PROJ_BRGY.png';
import b2 from '../images/PROJ_BRGY1.png';
import b3 from '../images/PROJ_BRGY2.png';

const ProjectCard = ({ project, onOpen, index }) => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % project.images.length);
    }, 3500 + (index * 200)); 
    return () => clearInterval(timer);
  }, [project.images.length, index]);

  return (
    <motion.div 
      className="sidebar-glass-card" 
      onClick={() => onOpen(project)}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
      whileHover={{ background: "rgba(255, 255, 255, 0.08)", x: 8 }}
    >
      <div className="card-preview-box">
        <AnimatePresence mode="wait">
          <motion.img 
            key={imgIndex}
            src={project.images[imgIndex]} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="sidebar-img-rect" 
          />
        </AnimatePresence>
      </div>
      
      <div className="card-info-side">
        <h3>{project.title}</h3>
        <p className="card-short-desc">{project.shortDesc}</p>
        <div className="tag-row-ethereal">
          {project.tech.map((t, i) => (
            <span key={i} className="mini-bordered-tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  const sidebarProjects = [
    {
      title: "TRASHURE: System",
      shortDesc: "The core architecture of the automated waste kiosk.",
      fullDesc: "A deeper look into the TRASHURE system. Features a Raspberry Pi 5 brain, an ESP32 helper, and a 4K vision system for material identification.",
      tech: ["Raspberry Pi 5", "AI Vision", "IoT"],
      images: [t2, t3, t4]
    },
    {
      title: "Smart Security System",
      shortDesc: "IoT motion-activated security featuring real-time alerts.",
      fullDesc: "A hardware-software solution featuring real-time LED, buzzer, and notifications for psychiatric clinics. Designed for enhanced safety via ultrasonic detection.",
      tech: ["Arduino", "C++", "IoT"],
      images: [dg, d1, d2, d3]
    },
    {
      title: "UYA Blooms",
      shortDesc: "Full-stack e-commerce platform with a focus on floral UX.",
      fullDesc: "An automated floral arrangement shop built using ASP.NET C# and SQL Server. Features a cart system, transaction management, and responsive interface.",
      tech: ["ASP.NET", "C#", "SQL Server"],
      images: [u1, u2, u3]
    },
    {
      title: "Barangay Management",
      shortDesc: "Digitalizing resident records for governance efficiency.",
      fullDesc: "Modernizing record-keeping and permit issuance for local government. Focuses on data integrity and user-friendly administrative workflows.",
      tech: ["Figma", "HTML", "CSS"],
      images: [b1, b2, b3]
    }
  ];

  const nextModalImg = (e) => {
    e.stopPropagation();
    setModalImgIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevModalImg = (e) => {
    e.stopPropagation();
    setModalImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <main className="projects-theater-container">
      <div className="ethereal-bg">
        <div className="orb p-orb-1"></div>
        <div className="orb p-orb-2"></div>
      </div>

      <div className="theater-grid">
        <section className="theater-left">
          <motion.h1 
            className="highlight-work-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            HIGHLIGHT WORK, TRASHURE!
          </motion.h1>

          <motion.div 
            className="video-cinema-frame"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe 
              src="https://www.youtube.com/embed/Yrohdmuoux4" 
              title="TRASHURE Project"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </motion.div>
          
          <motion.div 
            className="theater-meta-glass"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>TRASHURE: Automated Waste Verification</h2>
            <p className="meta-sub">Capstone Project • Raspberry Pi 5 & AI Vision</p>
            <div className="trashure-details-body">
              <p>
                Utilizes <strong>AI computer vision</strong> to categorize Plastic, Glass, Paper, and Cans. 
                Features a reward system and SMS/Email verification for Barangay Sta. Lucia.
              </p>
              <div className="trashure-preview-row">
                <img src={t2} alt="Dashboard" />
                <img src={t3} alt="Hardware" />
                <img src={t4} alt="Team" />
              </div>
            </div>
          </motion.div>
        </section>

        <aside className="theater-right">
          <motion.h2 
            className="sidebar-header-ethereal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            OTHER WORKS
          </motion.h2>
          <div className="sidebar-scroll-list">
            {sidebarProjects.map((proj, idx) => (
              <ProjectCard 
                key={idx} 
                index={idx}
                project={proj} 
                onOpen={(p) => { setSelectedProject(p); setModalImgIndex(0); }} 
              />
            ))}
          </div>
        </aside>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="proj-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="proj-modal-fullscreen"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>&times;</button>
              
              <div className="modal-content-split">
                <div className="modal-gallery-side">
                  <button className="gallery-nav-btn left" onClick={prevModalImg}>&#10216;</button>
                  <img src={selectedProject.images[modalImgIndex]} alt="Gallery" className="modal-main-img" />
                  <button className="gallery-nav-btn right" onClick={nextModalImg}>&#10217;</button>
                </div>

                <div className="modal-text-side">
                  <h2>{selectedProject.title}</h2>
                  <div className="modal-scroll-desc">
                    <p>{selectedProject.fullDesc}</p>
                  </div>
                  <div className="modal-tech-footer">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="mini-bordered-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Projects;
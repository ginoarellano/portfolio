import React, { useEffect } from 'react'; // Added useEffect
import '../styles/Skills.css';
import { motion } from 'framer-motion';

function Skills() {
  
  // Forces the page to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Mastery",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5 / CSS3", "Tailwind CSS", "Figma / UIUX"],
      icon: "✨"
    },
    {
      title: "Backend & Systems",
      skills: ["ASP.NET C#", "SQL Server / SSMS", "Oracle Database", "MySQL", "Database Management"],
      icon: "⚙️"
    },
    {
      title: "IoT & Hardware",
      skills: ["Arduino Programming", "C++", "ESP32 / ESP8266", "Hardware Integration", "Blynk IoT"],
      icon: "🤖"
    },
    {
      title: "Core Expertise",
      skills: ["Cybersecurity Principles", "System Administration", "Network Troubleshooting", "Responsive Design", "Git / GitHub"],
      icon: "🛡️"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <main className="skills-ethereal-container">
      <div className="ethereal-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <header className="skills-header">
        <motion.h1 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TECHNICAL SPECTRUM
        </motion.h1>
        <p>A fusion of hardware precision and software aesthetics.</p>
      </header>

      <motion.section 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skillCategories.map((cat, index) => (
          <motion.div 
            key={index} 
            className="skill-glass-card-rect"
            variants={itemVariants}
            whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(159, 198, 243, 0.15)" }}
          >
            <div className="card-content-wrapper">
              <div className="card-left-icon">
                <span className="category-icon">{cat.icon}</span>
              </div>
              <div className="card-right-info">
                <h2>{cat.title}</h2>
                <ul className="skill-list-compact">
                  {cat.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <footer className="skills-footer-note">
        <p>Still learning, to be continue...</p>
      </footer>
    </main>
  );
}

export default Skills;
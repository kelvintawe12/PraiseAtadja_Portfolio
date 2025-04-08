import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Popup from '../components/Popup';
import './Home.css';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-slide-up">
            Praise Orly Aku Atadja
          </h1>
          <p className="hero-subtitle animate-slide-up delay-100">
            Bridging AI & Healthcare in Africa
          </p>
          <button 
            className="cta-button animate-slide-up delay-200"
            onClick={() => openPopup('Passionate innovator developing AI solutions to revolutionize healthcare access and diagnostics across Africa.')}
          >
            Explore My Journey →
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Mission Driven</h3>
            <p>Developing accessible AI tools for early disease detection...</p>
            <button 
              className="text-button"
              onClick={() => openPopup('Full bio and education details')}
            >
              Read More
            </button>
          </div>
          <div className="stats-card">
            <div className="stat-item">
              <span className="stat-number">96%</span>
              <span className="stat-label">Model Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Students Trained</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section dark-bg">
        <h2 className="section-title light">Professional Journey</h2>
        <div className="timeline">
          <div 
            className="timeline-card" 
            onClick={() => openPopup('She Innovate Initiative details...')}
          >
            <div className="timeline-badge"></div>
            <h3>Tech Education Lead</h3>
            <p className="timeline-date">2024 - Present</p>
            <p className="timeline-company">She Innovate Initiative</p>
          </div>
          <div 
            className="timeline-card" 
            onClick={() => openPopup('Cardiac TEK achievements...')}
          >
            <div className="timeline-badge"></div>
            <h3>AI Research Assistant</h3>
            <p className="timeline-date">2024 - 2025</p>
            <p className="timeline-company">Cardiac TEK</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Key Innovations</h2>
        <div className="project-grid">
          <div 
            className="project-card"
            onClick={() => openPopup('Heart Disease Prediction System details...')}
          >
            <div className="project-header">
              <h3>AI Diagnostic Tool</h3>
              <span className="project-pill">Healthcare</span>
            </div>
            <p>98% accurate cardiovascular prediction model</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section dark-bg">
        <div className="contact-wrapper">
          <h2 className="section-title light">Let's Connect</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:praiseorly.a@gmail.com" className="contact-link">
                praiseorly.a@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href="tel:+250790004033" className="contact-link">
                +250 790 004 033
              </a>
            </div>
          </div>
          <div className="social-links">
            <a 
              href="https://linkedin.com" 
              className="social-icon"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://github.com" 
              className="social-icon"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      {/* Popup */}
      {isPopupOpen && (
        <Popup onClose={closePopup}>
          <div className="popup-content">
            <h3>Detailed View</h3>
            <p>{popupContent}</p>
            <button className="close-popup" onClick={closePopup}>
              Close
            </button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default Home;
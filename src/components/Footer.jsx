// components/Footer.jsx
import React from 'react';
// components/Footer.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Mission Statement */}
        <div className="footer-section">
          <h4>My Mission</h4>
          <p>Democratizing healthcare access in Africa through AI innovation</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2024 Praise Atadja. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
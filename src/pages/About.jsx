import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>Background</h3>
              <p>
                AI and healthcare innovator with a passion for developing 
                accessible solutions for African healthcare challenges.
              </p>
            </div>
            <div className="about-card">
              <h3>Education</h3>
              <p>
                BSc in Computer Science with specialization in 
                Artificial Intelligence and Machine Learning.
              </p>
            </div>
            <div className="about-card">
              <h3>Mission</h3>
              <p>
                To bridge the gap between cutting-edge AI technology 
                and healthcare accessibility in Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

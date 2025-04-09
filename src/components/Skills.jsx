import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "AI/ML",
      items: [
        { name: "Python", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Computer Vision", level: 75 }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Healthcare Tech",
      items: [
        { name: "Medical Imaging", level: 80 },
        { name: "HL7/FHIR", level: 70 },
        { name: "Clinical Data", level: 75 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <div className="skills-list">
              {skillCategory.items.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

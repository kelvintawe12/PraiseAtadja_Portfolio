import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 100 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Python', level: 75 }
  ];

  return (
    <div className="skills">
      <h1>My Skills</h1>
      <div className="skillsContainer">
        {skills.map((skill, index) => (
          <div key={index} className="skillItem">
            <div className="skillInfo">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skillBar">
              <div 
                className="skillProgress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

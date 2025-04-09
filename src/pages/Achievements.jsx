import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "AIESEC Leadership Development Experience",
      type: "Certificate",
      year: "2024",
      description: "Completed intensive leadership training program focusing on team management and cross-cultural collaboration."
    },
    {
      title: "Futurize Fuel Africa Innovation Program",
      type: "Certificate",
      year: "2023", 
      description: "Recognized for developing innovative healthcare solutions using AI and machine learning technologies."
    },
    {
      title: "African Leadership University Lagos Hub Ambassador",
      type: "Certificate",
      year: "2023",
      description: "Awarded for outstanding representation and leadership as student ambassador in Nigeria."
    },
    {
      title: "African Leadership AI Symposium Program", 
      type: "Certificate",
      year: "2023",
      description: "Selected participant in prestigious AI research and development symposium."
    },
    {
      title: "African Impact Challenge",
      type: "Certificate",
      year: "2022",
      description: "Recognized for developing impactful technological solutions for African communities."
    }
  ];

  return (
    <div className="achievements">
      <h1>Achievements & Certifications</h1>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-header">
              <h2>{achievement.title}</h2>
              <span className="badge">{achievement.type}</span>
            </div>
            <div className="achievement-year">{achievement.year}</div>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

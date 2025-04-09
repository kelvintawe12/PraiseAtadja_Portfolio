import './Leadership.css';

const Leadership = () => {
  const leadershipRoles = [
    {
      organization: "Alliance4AI, ALU Chapter",
      location: "Kigali, Rwanda",
      position: "Vice President",
      duration: "Sept 2024 – Present",
      description: [
        "Led a team of 40+ members to grow Alliance4AI's footprint at ALU",
        "Designed and facilitated 8 practical workshops on machine learning and AI",
        "Curated student participation in regional hackathons and competitions",
        "Built and led the executive team, recruiting and mentoring student leaders"
      ]
    },
    {
      organization: "AIESEC",
      location: "Nairobi, Kenya",
      position: "Global Volunteer",
      duration: "Sept 2024 - Oct 2024",
      description: [
        "Taught English, Math and Science to 30+ children from low-income communities",
        "Organized educational activities increasing participation by 30%",
        "Managed a team of 4 volunteers for a STEM awareness campaign",
        "Provided resources and mentorship to underserved students"
      ]
    },
    {
      organization: "Swiss Business Case Challenge",
      location: "Lucerne, Switzerland",
      position: "Participant",
      duration: "June 2024",
      description: [
        "Conducted research on green hydrogen's potential in Africa",
        "Collaborated on African-European partnership analysis",
        "Contributed to winning strategy for final negotiations",
        "Presented case to investors and government stakeholders"
      ]
    }
  ];

  return (
    <div className="leadership">
      <h1>Leadership Experience</h1>
      <div className="leadership-grid">
        {leadershipRoles.map((role, index) => (
          <div key={index} className="leadership-card">
            <h2>{role.organization}</h2>
            <h3>{role.position}</h3>
            <p className="location-duration">
              <span className="location">{role.location}</span>
              <span className="duration">{role.duration}</span>
            </p>
            <ul>
              {role.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;

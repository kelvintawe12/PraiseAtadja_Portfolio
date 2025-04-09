import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      organization: "She Innovate Initiative",
      location: "Kigali, Rwanda",
      position: "Team Lead",
      duration: "March 2024 – Present",
      description: [
        "Led a team of five colleagues to design and execute the annual two-week Summer School of Code and Design",
        "Managed a $2,000 budget for the Summer School program, securing three corporate partnerships",
        "Organized a major tech hackathon with six teams from four high schools in Rwanda",
        "Volunteered in outreach programs for marginalized communities in Nigeria, reaching 200+ girls"
      ]
    },
    {
      organization: "Cardiac TEK",
      location: "Tanzania (Remote)",
      position: "Research Assistant",
      duration: "Feb 2024 - March 2025",
      description: [
        "Developed machine learning models for ECG analysis with 96% accuracy",
        "Created risk stratification model with 98% accuracy for cardiovascular events",
        "Designed evaluation protocols improving model precision by 15%",
        "Collaborated on diagnostic tool development, improving usability by 30%"
      ]
    },
    {
      organization: "African Leadership University",
      location: "Lagos, Nigeria",
      position: "Hub Ambassador",
      duration: "May 2023 – Sept 2023",
      description: [
        "Planned and executed educational trips and tech events",
        "Managed event budgets with 30% cost reduction",
        "Increased student involvement in entrepreneurial initiatives by 15%"
      ]
    },
    {
      organization: "New Horizon Special School",
      location: "Accra, Ghana",
      position: "Librarian",
      duration: "July 2016 - Aug 2016",
      description: [
        "Delivered personalized reading support to children with special needs",
        "Designed inclusive activities improving participation by 40%",
        "Managed library resources increasing visits by 20%"
      ]
    }
  ];

  return (
    <div className="experience">
      <h1>Work Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h2>{exp.organization} - {exp.location}</h2>
              <h3>{exp.position}</h3>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

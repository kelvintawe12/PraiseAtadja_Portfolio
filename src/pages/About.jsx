import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="contact-info">
        <h1>PRAISE ORLY AKU ATADJA</h1>
        <p>Sekimondo | Kigali, Rwanda | +250 790004033</p>
        <p>praiseorly.a@gmail.com | LinkedIn Profile | Github | Portfolio</p>
      </section>

      <section className="summary">
        <h2>SUMMARY</h2>
        <p>
          Driven by a deep commitment to improving healthcare in Africa, I aim to leverage AI and Machine Learning to address critical gaps in medical access and diagnostics in Africa. With practical experience in developing AI-driven solutions for healthcare challenges, I focus on creating accessible tools that enhance early detection, treatment, and patient outcomes, especially in underserved communities. I am dedicated to using technology to bridge the healthcare divide and improve lives, ensuring that innovation reaches those who need it most.
        </p>
      </section>

      <section className="education">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <h3>African Leadership University(ALU) – Kigali, Rwanda</h3>
          <p className="date">Jan. 2022 – June.2025</p>
          <p>Mastercard Foundation Scholar</p>
          <p>BSc (Hons) Software Engineering(First Class) - Specialization: Machine Learning, AI for Healthcare</p>
          <p>Cumulative GPA 4.56/5.0</p>
          <p>Relevant Coursework: Mathematics for Machine, Machine Learning Techniques, Ethics in Software Engineering Frontend & Backend Development and Entrepreneurial Leadership.</p>
        </div>
      </section>
    </div>
  );
};

export default About;

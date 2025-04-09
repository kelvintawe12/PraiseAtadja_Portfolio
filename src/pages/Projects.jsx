import './Projects.css';
import { FaHeartbeat, FaUserShield, FaUpload, FaChartLine, FaFilePrescription, FaBell, FaHeart } from 'react-icons/fa';
import { MdDashboard, MdEmergency, MdPeople, MdSchedule } from 'react-icons/md';
import ECGVisualization from '../components/projects/ECGVisualization';

const Projects = () => {
  return (
    <div className="projects-container">
      <header className="project-header">
        <h1>CardiacTek App Documentation</h1>
        <p className="project-subtitle">AI-powered ECG analysis and cardiovascular care platform</p>
      </header>

      <section className="project-overview">
        <h2><FaHeartbeat /> Overview</h2>
        <p>
          CardiacTek is an innovative AI-powered ECG analysis and cardiovascular care platform aimed at improving healthcare access and patient outcomes. 
          The app provides both patients and healthcare professionals with essential tools for heart health management, including ECG analysis, 
          AI-powered diagnostics, real-time prescriptions, patient tracking, and emergency alerts.
        </p>
      </section>

      <section className="app-flow">
        <h2>App Flow & Structure</h2>
        
        <div className="feature-section">
          <h3><MdDashboard /> Homepage</h3>
          <div className="feature-details">
            <h4>Overview</h4>
            <p>
              The homepage serves as the introductory page for all users, providing an easy-to-navigate interface with quick access to essential features. 
              It is designed to enhance user experience with a responsive layout and intuitive design.
            </p>
            
            <h4>Key Features</h4>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon"><FaUserShield /></div>
                <h5>Welcome Section</h5>
                <p>Personalized greeting displaying the user's role (Doctor, Patient, or Admin)</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon"><FaUpload /></div>
                <h5>Upload ECG Data</h5>
                <p>Enables easy file upload for ECG analysis in various formats</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"><FaChartLine /></div>
                <h5>Analyze ECG</h5>
                <p>AI-driven ECG analysis process with visual representation</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"><FaFilePrescription /></div>
                <h5>Prescriptions</h5>
                <p>Access generated prescriptions and AI-based treatment suggestions</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"><FaBell /></div>
                <h5>Emergency Alerts</h5>
                <p>Real-time alerts for critical cases detected in ECG analysis</p>
              </div>

              <div className="feature-card">
                <div className="feature-icon"><MdPeople /></div>
                <h5>Patient Records</h5>
                <p>Manage patient profiles and medical history</p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-section">
          <h3><MdEmergency /> Emergency System</h3>
          <div className="feature-details">
            <h4>Real-Time Alerts</h4>
            <p>
              Patients who exhibit critical health conditions trigger automatic real-time alerts to the healthcare team with detailed information 
              about the detected abnormality and suggested immediate actions.
            </p>
            
            <h4>Emergency Protocol</h4>
            <ul className="feature-list">
              <li>Instant notification to assigned cardiologist</li>
              <li>Automated emergency contact calling</li>
              <li>Priority appointment scheduling</li>
              <li>Critical case highlighting in patient records</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ui-design">
        <h2>UI Design & Structure</h2>
        
        <div className="design-section">
          <h3>Color Palette</h3>
          <div className="color-palette">
            <div className="color-card" style={{backgroundColor: '#d32f2f'}}>
              <span>Primary Red</span>
              <span>#d32f2f</span>
            </div>
            <div className="color-card" style={{backgroundColor: '#f5f5f5'}}>
              <span>Light Gray</span>
              <span>#f5f5f5</span>
            </div>
            <div className="color-card" style={{backgroundColor: '#ffffff'}}>
              <span>White</span>
              <span>#ffffff</span>
            </div>
          </div>
        </div>

        <div className="design-section">
          <h3>Dashboard Layouts</h3>
          <div className="dashboard-examples">
            <div className="dashboard-card">
              <h4>Doctor Dashboard</h4>
              <ul>
                <li>Patient management grid</li>
                <li>Diagnostic tools with annotations</li>
                <li>AI Chatbot sidebar</li>
                <li>Prescription management</li>
                <li>Appointment calendar</li>
              </ul>
            </div>
            <div className="dashboard-card">
              <h4>Patient Dashboard</h4>
              <ul>
                <li>Appointment tracking</li>
                <li>ECG upload and history</li>
                <li>Emergency alert button</li>
                <li>Health insights</li>
                <li>Personal health management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="interactive-demo">
        <h2><FaHeart /> ECG Analysis Demo</h2>
        <p>
          Experience CardiacTek's AI-powered ECG analysis with this interactive demonstration.
          Toggle between normal and abnormal rhythms to see how the system detects and diagnoses conditions.
        </p>
        <ECGVisualization />
      </section>
    </div>
  );
};

export default Projects;

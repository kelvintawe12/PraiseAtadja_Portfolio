import { FaHeartbeat, FaUserShield, FaUpload, FaChartLine, FaFilePrescription, FaBell, FaHeart } from 'react-icons/fa';
import { MdDashboard, MdEmergency, MdPeople, MdSchedule } from 'react-icons/md';
import './CardiacTekDocs.css';

const CardiacTekDocs = () => {
  return (
    <div className="cardiac-tek-docs">
      <header className="docs-header">
        <h1>CardiacTek App Documentation</h1>
        <p className="docs-subtitle">AI-powered ECG analysis platform</p>
      </header>

      <section className="docs-section">
        <h2><FaHeartbeat /> Overview</h2>
        <p>
          Comprehensive cardiovascular care platform with AI-powered diagnostics,
          real-time monitoring, and emergency alerts.
        </p>
      </section>

      <section className="docs-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><FaUpload /></div>
            <h3>ECG Upload</h3>
            <p>Upload and analyze ECG data in multiple formats</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaChartLine /></div>
            <h3>AI Analysis</h3>
            <p>Advanced algorithms detect abnormalities</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><FaBell /></div>
            <h3>Emergency Alerts</h3>
            <p>Real-time notifications for critical cases</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardiacTekDocs;

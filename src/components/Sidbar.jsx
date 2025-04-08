// components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={onClose}>
          <FiX size={24} />
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <Link to="/about" onClick={onClose}>About</Link>
        <Link to="/experience" onClick={onClose}>Experience</Link>
        <Link to="/projects" onClick={onClose}>Projects</Link>
        <Link to="/contact" onClick={onClose}>Contact</Link>
      </nav>

      <div className="sidebar-footer">
        <p>Let's build healthier communities together</p>
      </div>
    </div>
  );
};

export default Sidebar;
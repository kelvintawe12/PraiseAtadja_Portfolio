// components/Popup.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Popup.module.css';

const Popup = ({ children, onClose, className, style }) => {
  return (
    <div className={styles.overlay}>
      <div 
        className={`${styles.popup} ${className || ''}`}
        style={style}
      >
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close popup"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
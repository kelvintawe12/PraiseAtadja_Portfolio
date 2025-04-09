// components/Popup.jsx
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';
import 'swiper/css';
import styles from './Popup.module.css';

const Carousel = ({ items }) => {
  const swiperRef = React.useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => swiperRef.current.destroy();
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {items.map((item, index) => (
          <div key={index} className="swiper-slide">
            {item.type === 'image' ? (
              <img src={item.content} alt={item.alt} className={styles.carouselImage} />
            ) : (
              <div className={styles.textContent}>{item.content}</div>
            )}
          </div>
        ))}
      </div>
      <div className={`swiper-button-prev ${styles.carouselNav}`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className={`swiper-button-next ${styles.carouselNav}`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

const Popup = ({ children, onClose, className, style, type, carouselItems }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className={styles.overlay} 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
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
          {type === 'carousel' ? (
            <Carousel items={carouselItems} />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
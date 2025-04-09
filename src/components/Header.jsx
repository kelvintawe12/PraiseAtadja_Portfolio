import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
          // Scrolling up or at top
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>Praise Atadja</h1>
        <p className={styles.subtitle}>Full Stack Developer & Designer</p>
      </div>
    </header>
  );
};

export default Header;

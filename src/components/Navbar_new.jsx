import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar_new.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const navItems = [
    { path: '/', label: 'Home' },
    { 
      label: 'About Me',
      children: [
        { path: '/about', label: 'Overview' },
        { path: '/experience', label: 'Experience' },
        { path: '/leadership', label: 'Leadership' },
        { path: '/achievements', label: 'Achievements' }
      ]
    },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (label) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <NavLink to="/" className={styles.logo}>
          Praise Atadja
        </NavLink>
        
        <button 
          className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            item.path ? (
              <NavLink 
                key={item.path}
                to={item.path}
                className={({isActive}) => 
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={handleLinkClick}
              >
                {item.label}
              </NavLink>
            ) : (
              <div key={item.label} className={styles.submenuContainer}>
                <button 
                  className={styles.submenuToggle}
                  onClick={() => toggleSubmenu(item.label)}
                >
                  {item.label}
                </button>
                <div className={`${styles.submenu} ${openSubmenu === item.label ? styles.open : ''}`}>
                  {item.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({isActive}) => 
                        isActive ? `${styles.submenuLink} ${styles.active}` : styles.submenuLink
                      }
                      onClick={handleLinkClick}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

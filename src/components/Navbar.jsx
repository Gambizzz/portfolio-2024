import React, { useState, useEffect } from 'react';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showButtonText, setShowButtonText] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsNavbarVisible(false);
        setIsButtonVisible(true);
      } else if (scrollTop < lastScrollTop) {
        // Scrolling up
        if (scrollTop <= 0) {
          // Reached the top of the page
          setIsNavbarVisible(true);
          setIsButtonVisible(false);
        }
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleButtonClick = () => {
    if (isNavbarVisible) {
      // Hide navbar
      setIsNavbarVisible(false);
      setShowButtonText("");
    } else {
      // Show navbar
      setIsNavbarVisible(true);
      setShowButtonText("");
    }
  };

  return (
    <div>
      <nav className={`${styles.navbar} ${!isNavbarVisible ? styles.hidden : ''}`}>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li className={styles.logo}>
            <img src="/images/logo-name.png" alt="Name logo" className={styles.icon} />
          </li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button className={`${styles.showNavbarButton} ${isButtonVisible ? styles.visible : ''}`} onClick={handleButtonClick}>
        {showButtonText}
      </button>
    </div>
  );
};

export default Navbar;





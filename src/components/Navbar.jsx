import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false); // New state
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        setIsNavbarVisible(false);
        setIsButtonVisible(true);
      } else if (scrollTop < lastScrollTop) {
        if (scrollTop <= 0) {
          setIsNavbarVisible(true);
          setIsButtonVisible(false);
          setIsBackgroundVisible(false); // Reset background to transparent at the top
        }
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleLanguageToggle = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  const handleButtonClick = () => {
    setIsNavbarVisible(!isNavbarVisible);
    if (!isNavbarVisible) {
      setIsBackgroundVisible(true); // Show background when navbar appears
    }
  };

  return (
    <div>
      <nav
        className={`${styles.navbar} ${!isNavbarVisible ? styles.hidden : ''} ${isBackgroundVisible ? styles.background : ''}`}
      >
        <ul>
          <li><a href="#hero">{t('Home')}</a></li>
          <li><a href="#about">{t('About')}</a></li>
          <li className={styles.logo}>
            <img src="/images/initials.png" alt="Name logo" className={styles.icon} />
          </li>
          <li><a href="#projects">{t('Projects')}</a></li>
          <li>
            <button onClick={handleLanguageToggle} className={styles.languageToggle}>
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </li>
        </ul>
      </nav>

      <button
        className={`${styles.showNavbarButton} ${isButtonVisible ? styles.visible : ''}`}
        onClick={handleButtonClick}
      ></button>
    </div>
  );
};

export default Navbar;







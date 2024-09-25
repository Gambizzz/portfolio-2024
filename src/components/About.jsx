import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/About.module.scss';

const About = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    { number: '01', text: t('section_01') },
    { number: '02', text: t('section_02') },
    { number: '03', text: t('section_03') },
    { number: '04', text: t('section_04') }
  ];

  const handleScroll = () => {
    const sectionElements = document.querySelectorAll(`.${styles.section}`);
    const windowHeight = window.innerHeight;
    let indexToSet = null;

    sectionElements.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;

      if (sectionTop < windowHeight / 2 && sectionBottom > windowHeight / 2) {
        indexToSet = index;
      }
    });

    setActiveIndex(indexToSet);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutTitle}>
        <h1>{t('About_title')}</h1>
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles.section} ${index === activeIndex ? styles.active : ''}`}
        >
          <div className={styles.sectionNumber}>{section.number}</div>
          <div className={styles.sectionContent}>
            <p className={styles.sectionText}>{section.text}</p>
          </div>
          {index < sections.length - 1 && <hr className={styles.separator} />}
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <a href="/pdf/cv-FR.pdf" download>
          <button className={styles.btn}>
            <span className={styles.text}>{t('french_cv')}</span>
          </button>
        </a>
        <a href="/pdf/second.pdf" download>
          <button className={styles.btn}>
            <span className={styles.text}>{t('english_cv')}</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;









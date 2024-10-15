import React from 'react';
import styles from '../styles/components/Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <p>Welcome, I am</p>
      </div>
      <div className={styles.heroImageWrapper}>
        <img src="images/logo-name.png" alt="Hero Banner" className={styles.heroImage} />
      </div>
      <div className={styles.heroContent}>
        <p>Developer Web Fullstack and creative girl</p>
      </div>
    </section>
  );
};

export default Hero;
















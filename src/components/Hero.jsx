import React from 'react';
import styles from '../styles/components/Hero.module.scss';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <img
        src="/images/logo-name.svg"
        alt="Name logo"
        className={styles.icon}
      />
    </section>
  );
};

export default Hero;
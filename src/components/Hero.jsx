import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Hero.module.scss';

const Hero = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const heroElement = document.getElementById('hero');
    const heroHeight = heroElement.offsetHeight;
    const windowHeight = window.innerHeight;

    const heroTop = heroElement.offsetTop;
    const heroBottom = heroTop + heroHeight;

    // Déterminez la portion visible de la section hero
    const visibleTop = Math.max(0, heroTop - scrollTop);
    const visibleBottom = Math.min(windowHeight, heroBottom - scrollTop);
    const visibleHeight = visibleBottom - visibleTop;

    // Ajuster l'opacité en fonction de la visibilité
    // L'opacité commence à diminuer lorsque la section hero commence à sortir de la vue
    const fadeStart = heroHeight * 0.2; // Point où commence la transition d'opacité
    const fadeEnd = heroHeight * 0.8;   // Point où la section est complètement invisible
    const visibleHeightAdjusted = Math.max(0, Math.min(fadeEnd - visibleTop, fadeEnd - visibleHeight));

    const opacityStart = 1; // Opacité au début de la transition
    const opacityEnd = 0;   // Opacité à la fin de la transition

    // Calculer l'opacité en fonction de la portion visible
    const newOpacity = Math.max(opacityEnd, opacityStart - (visibleHeightAdjusted / (fadeEnd - fadeStart)) * (opacityStart - opacityEnd));

    setOpacity(newOpacity);

    const bubbles = document.querySelectorAll(`.${styles.bubble}`);
    bubbles.forEach(bubble => {
      const speed = parseFloat(bubble.getAttribute('data-speed')) || 1;
      bubble.style.transform = `translateY(${(-scrollTop * speed)}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appeler une fois pour définir la visibilité initiale

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.welcome} ${styles.fadeIn}`} style={{ opacity }}>
        <p>W</p>
        <p>E</p>
        <p>L</p>
        <p>C</p>
        <p>O</p>
        <p>M</p>
        <p>E</p>
      </div>
      <div className={styles.bubbles}>
        <div className={`${styles.bubble} ${styles.bubble1}`} data-speed="0.8"></div>
        <div className={`${styles.bubble} ${styles.bubble2}`} data-speed="2.0"></div>
        <div className={`${styles.bubble} ${styles.bubble3}`} data-speed="1.2"></div>
        <div className={`${styles.bubble} ${styles.bubble4}`} data-speed="0.6"></div>
        <div className={`${styles.bubble} ${styles.bubble5}`} data-speed="1.5"></div>
        <div className={`${styles.bubble} ${styles.bubble6}`} data-speed="0.9"></div>
        <div className={`${styles.bubble} ${styles.bubble7}`} data-speed="1.8"></div>
        <div className={`${styles.bubble} ${styles.bubble8}`} data-speed="1.0"></div>
        <div className={`${styles.bubble} ${styles.bubble9}`} data-speed="1.3"></div>
        <div className={`${styles.bubble} ${styles.bubble10}`} data-speed="0.7"></div>
        <div className={`${styles.bubble} ${styles.bubble11}`} data-speed="1.6"></div>
        <div className={`${styles.bubble} ${styles.bubble12}`} data-speed="1.4"></div>
        <div className={`${styles.bubble} ${styles.bubble13}`} data-speed="0.5"></div>
        <div className={`${styles.bubble} ${styles.bubble14}`} data-speed="1.7"></div>
        <div className={`${styles.bubble} ${styles.bubble15}`} data-speed="0.8"></div>
        <div className={`${styles.bubble} ${styles.bubble16}`} data-speed="2.2"></div>
        <div className={`${styles.bubble} ${styles.bubble17}`} data-speed="1.1"></div>
        <div className={`${styles.bubble} ${styles.bubble18}`} data-speed="1.9"></div>
      </div>
    </section>
  );
};

export default Hero;















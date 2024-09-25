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
    const fadeStart = heroHeight * 0.2; // Point où commence la transition d'opacité
    const fadeEnd = heroHeight * 0.8;   // Point où la section est complètement invisible
    const visibleHeightAdjusted = Math.max(0, Math.min(fadeEnd - visibleTop, fadeEnd - visibleHeight));

    const opacityStart = 1; // Opacité au début de la transition
    const opacityEnd = 0;   // Opacité à la fin de la transition

    // Calculer l'opacité en fonction de la portion visible
    const newOpacity = Math.max(opacityEnd, opacityStart - (visibleHeightAdjusted / (fadeEnd - fadeStart)) * (opacityStart - opacityEnd));

    setOpacity(newOpacity);
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
    </section>
  );
};

export default Hero;
















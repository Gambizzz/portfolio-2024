import React, { useEffect } from 'react';
import styles from '../styles/components/Bubbles.module.scss';

const Bubbles = () => {

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    const bubbles = document.querySelectorAll(`.${styles.bubble}`);
    bubbles.forEach(bubble => {
      const speed = parseFloat(bubble.getAttribute('data-speed')) || 1;
      const bubbleHeight = parseFloat(bubble.getAttribute('data-top')) || 0;

      bubble.style.transform = `translateY(${(-scrollTop * speed)}px)`;

      const bubblePosition = (bubbleHeight / 100) * (docHeight - windowHeight);
      bubble.style.top = `${bubblePosition}px`;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.bubbles}>
      <div className={`${styles.bubble} ${styles.bubble1}`} data-speed="0.8" data-top="10"></div>
      <div className={`${styles.bubble} ${styles.bubble2}`} data-speed="2.0" data-top="20"></div>
      <div className={`${styles.bubble} ${styles.bubble3}`} data-speed="1.2" data-top="30"></div>
      <div className={`${styles.bubble} ${styles.bubble4}`} data-speed="0.6" data-top="40"></div>
      <div className={`${styles.bubble} ${styles.bubble5}`} data-speed="1.5" data-top="50"></div>
      <div className={`${styles.bubble} ${styles.bubble6}`} data-speed="0.9" data-top="60"></div>
      <div className={`${styles.bubble} ${styles.bubble7}`} data-speed="1.8" data-top="70"></div>
      <div className={`${styles.bubble} ${styles.bubble8}`} data-speed="1.0" data-top="80"></div>
      <div className={`${styles.bubble} ${styles.bubble9}`} data-speed="1.3" data-top="90"></div>
      <div className={`${styles.bubble} ${styles.bubble10}`} data-speed="0.7" data-top="100"></div>
      <div className={`${styles.bubble} ${styles.bubble11}`} data-speed="1.4" data-top="15"></div>
      <div className={`${styles.bubble} ${styles.bubble12}`} data-speed="1.9" data-top="35"></div>
      <div className={`${styles.bubble} ${styles.bubble13}`} data-speed="1.1" data-top="45"></div>
      <div className={`${styles.bubble} ${styles.bubble14}`} data-speed="0.5" data-top="25"></div>
      <div className={`${styles.bubble} ${styles.bubble15}`} data-speed="1.6" data-top="55"></div>
      <div className={`${styles.bubble} ${styles.bubble16}`} data-speed="2.2" data-top="65"></div>
      <div className={`${styles.bubble} ${styles.bubble17}`} data-speed="1.7" data-top="75"></div>
      <div className={`${styles.bubble} ${styles.bubble18}`} data-speed="0.9" data-top="85"></div>
      <div className={`${styles.bubble} ${styles.bubble19}`} data-speed="1.0" data-top="95"></div>
      <div className={`${styles.bubble} ${styles.bubble20}`} data-speed="1.3" data-top="5"></div>
      <div className={`${styles.bubble} ${styles.bubble21}`} data-speed="0.8" data-top="12"></div>
      <div className={`${styles.bubble} ${styles.bubble22}`} data-speed="2.0" data-top="22"></div>
      <div className={`${styles.bubble} ${styles.bubble23}`} data-speed="1.3" data-top="32"></div>
      <div className={`${styles.bubble} ${styles.bubble24}`} data-speed="0.7" data-top="42"></div>
      <div className={`${styles.bubble} ${styles.bubble25}`} data-speed="1.4" data-top="52"></div>
      <div className={`${styles.bubble} ${styles.bubble26}`} data-speed="2.1" data-top="62"></div>
      <div className={`${styles.bubble} ${styles.bubble27}`} data-speed="1.5" data-top="72"></div>
      <div className={`${styles.bubble} ${styles.bubble28}`} data-speed="0.9" data-top="82"></div>
      <div className={`${styles.bubble} ${styles.bubble29}`} data-speed="1.2" data-top="92"></div>
      <div className={`${styles.bubble} ${styles.bubble30}`} data-speed="0.6" data-top="2"></div>
    </div>
  );
};

export default Bubbles;





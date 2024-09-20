import React from 'react';
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Anelise Gambini. Tous droits réservés.</p>
        <ul className={styles.socialLinks}>
          <li><a href="https://github.com/Gambizzz" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/anelise-gambini-72b10855" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="mailto:anelisegambini@yahoo.fr">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
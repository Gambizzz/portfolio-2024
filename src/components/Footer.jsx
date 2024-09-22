import React, { useState } from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import styles from '../styles/components/Footer.module.scss';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className='copyright'>&copy; {new Date().getFullYear()} Anelise Gambini. All rights reserved.</p>
        <ul className={styles.socialLinks}>
          <li
            onMouseEnter={() => setHoveredLink('github')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <a href="https://github.com/Gambizzz" target="_blank" rel="noopener noreferrer">
              {hoveredLink === 'github' ? <FaGithub /> : 'GitHub'}
            </a>
          </li>
          <li
            onMouseEnter={() => setHoveredLink('linkedin')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <a href="https://linkedin.com/in/anelise-gambini-72b10855" target="_blank" rel="noopener noreferrer">
              {hoveredLink === 'linkedin' ? <FaLinkedin /> : 'LinkedIn'}
            </a>
          </li>
          <li
            onMouseEnter={() => setHoveredLink('mail')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <a href="mailto:anelisegambini@yahoo.fr">
              {hoveredLink === 'mail' ? <IoIosMail /> : 'Email me'}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
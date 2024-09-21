import React, { useState, useEffect } from 'react';
import styles from '../styles/components/CurstomCursor.module.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      style={{ top: position.y, left: position.x }}
    />
  );
};

export default CustomCursor;

import React, { useState, useEffect } from 'react';
import styles from '../styles/components/CurstomCursor.module.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A') {
        setIsHoveringLink(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A') {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} ${isHoveringLink ? styles.hoverLink : ''}`}
      style={{ top: position.y, left: position.x }}
    />
  );
};

export default CustomCursor;


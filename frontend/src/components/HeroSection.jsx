import React from 'react';
// import { Link } from 'react-router-dom'; 
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Organize Your Events</h1>
        <p className={styles.heroSubtitle}>
          Streamline the process of planning and managing events with our all-in-one platform.
        </p>
        <h2>Get Started</h2>
      </div>
    </div>
  );
}

export default HeroSection;




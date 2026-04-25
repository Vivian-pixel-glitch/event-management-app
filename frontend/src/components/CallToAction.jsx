import React from 'react';
import styles from './CallToAction.module.css';
import { Link } from 'react-router-dom';

function CallToActionSection() {
  return (
    <div className={styles.ctaContainer}>
      <h4>Shall We?</h4>
      <p>
        Join our platform today and experience the easiest way to organize and
        manage your events.
      </p>
      <button className={styles.ctaButton}>
        <Link to="/signup">Sign up now</Link>
      </button>
    </div>
  );
}

export default CallToActionSection;


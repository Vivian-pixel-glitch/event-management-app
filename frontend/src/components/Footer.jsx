import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  

  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <div className={styles.footerSection}>
          <h3>About Us</h3>
          <p>
            We are dedicated to providing the best event management platform.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" className={`${styles.icon} ${styles.facebook}`}  target="_blank" rel="noopener noreferrer">
              F
            </a>
          
            <a href="https://instagram.com" className={`${styles.icon} ${styles.instagram}`} target="_blank" rel="noopener noreferrer">
              I
            </a>
            <a href="https://linkedin.com" className={`${styles.icon} ${styles.linkedin}`} target="_blank" rel="noopener noreferrer">
              L
            </a>
            <a href="https://x.com" className={`${styles.icon} ${styles.x}`} target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <p>&copy; {new Date().getFullYear()} Event Platform. All rights reserved.</p>
        <div className={styles.privacySection}>
          {/* <h3>Privacy Policy</h3> */}
          
        </div>
        <p>
          <a href="/terms">Terms of Service</a> |{' '}
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;






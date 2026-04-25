import React from 'react';
import styles from './ContactPage.module.css';

function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <p className={styles.subtitle}>We’d love to hear from you! Fill out the form below or reach us through the details.</p>

      <div className={styles.contactContainer}>
        {/* Contact Form */}
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" required rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Our Info</h2>
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Event Street, Cityville, Country</p>
          <p><strong>Hours:</strong> Mon–Fri, 9AM–5PM</p>

          <div className={styles.socialIcons}>
            {/* Replace # with actual links */}
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

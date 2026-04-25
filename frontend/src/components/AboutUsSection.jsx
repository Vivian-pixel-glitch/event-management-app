import React from 'react';
import styles from './AboutUsSection.module.css';

function AboutUsSection() {
  return (
    <div className={styles.aboutUsContainer}>
      <h2>About Us</h2>
      <p>
        Welcome to our event management platform! We are dedicated to providing you with the best tools and resources to plan and organize successful events. Whether you're planning a wedding, a corporate conference, or a small get-together, we've got you covered.
      </p>
      <p>
        Our mission is to simplify the event planning process, making it stress-free and enjoyable. We believe that everyone should have access to the resources they need to create memorable experiences.
      </p>
      <h3>Our Team</h3>
      <p>
        We are a team of experienced event planners, software developers, and designers passionate about creating innovative solutions for the event industry.  We understand the challenges of event planning, and we're committed to providing a platform that addresses those challenges effectively.
      </p>
      <h3>What We Offer</h3>
      <p>
        Our platform offers a wide range of features to help you manage every aspect of your event, including:
      </p>
      <ul>
        <li>Event scheduling and calendar management</li>
        <li>Budgeting and expense tracking</li>
        <li>Venue selection and booking</li>
        <li>Task management and delegation</li>
        <li>Guest list management and RSVPs</li>
        <li>Communication tools for vendors and attendees</li>
        <li>And much more!</li>
      </ul>
      <p>
        We are constantly working to improve our platform and add new features.  We value your feedback and are committed to providing you with the best possible experience.
      </p>
    </div>
  );
}

export default AboutUsSection;

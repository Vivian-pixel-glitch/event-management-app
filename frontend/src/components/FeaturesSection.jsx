import React from 'react';
import styles from './FeaturesSection.module.css'; // Import the CSS Module and assign it to 'styles'

const features = [
  { icon: 'calendar-alt', title: 'Event Scheduling', description: 'Easily schedule and manage your events with our intuitive tools.' },
  { icon: 'dollar-sign', title: 'Budget Management', description: 'Keep track of your event expenses and stay within budget.' },
  { icon: 'map-marker-alt', title: 'Venue Selection', description: 'Find and book the perfect venue for your events.' },
  { icon: 'tasks', title: 'Task Management', description: 'Assign and track tasks to ensure everything gets done on time.' },
];

function FeaturesSection() {
  return (
    <div className={styles.featuresContainer}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <div className={styles.iconContainer}>
            {/* */}
            <i className={`fas fa-${feature.icon}`}></i>
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default FeaturesSection;

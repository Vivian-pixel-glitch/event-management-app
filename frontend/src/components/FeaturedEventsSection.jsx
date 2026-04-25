import React from 'react';
import styles from './FeaturedEventsSection.module.css';
import { Link } from 'react-router-dom';

const featuredEvents = [
  {
    title: 'Tech Conference 2024',
    date: 'August 10-12, 2024',
    location: 'Lagos, Nigeria',
    image: 'https://i.pinimg.com/736x/cd/8f/5c/cd8f5c1fc11141429178c3bae17177c5.jpg',
    description: 'The premier tech event in Africa.  Join us for keynotes, workshops, and networking.',
    link: '/TechConference',
  },
  {
    title: 'Music Festival',
    date: 'September 5, 2024',
    location: 'Accra, Ghana',
    image: 'https://i.pinimg.com/736x/5c/42/d0/5c42d0eca4bba794aa73506c997d95fb.jpg',
    description: 'A celebration of African music and culture.  Featuring top artists from across the continent.',
    link: '/learnmoreMusic',
  },
  {
    title: 'Food & Wine Festival',
    date: 'October 20-22, 2024',
    location: 'Cape Town, South Africa',
    image: 'https://i.pinimg.com/736x/bc/74/ed/bc74edb82e88019ced58912eafb08255.jpg',
    description: 'Experience the best of African cuisine and wines.  A culinary delight!',
    link: '/learnmoreFood',
  },
];

function FeaturedEventsSection() {
  return (
    <div className={styles.featuredEventsContainer}>
      <h2>Featured Events</h2>
      <div className={styles.eventsGrid}>
        {featuredEvents.map((event, index) => (
          <div key={index} className={styles.eventCard}>
            <img src={event.image} alt={event.title} className={styles.eventImage} />
            <h3>{event.title}</h3>
            <p className={styles.eventDate}>{event.date}</p>
            <p className={styles.eventLocation}>{event.location}</p>
            <p className={styles.eventDescription}>{event.description}</p>
            <button className={styles.eventButton}>
            <Link to="/techconference">Learn More</Link>
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedEventsSection;


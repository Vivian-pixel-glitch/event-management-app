import React from 'react';
import styles from './LocationListings.module.css';

const locations = [
  {
    name: 'Lagos, Nigeria',
    image: 'https://i.pinimg.com/736x/f6/a6/f9/f6a6f998fc0d5fd58296bb8808517575.jpg',
  },
  {
    name: 'Accra, Ghana',
    image: 'https://i.pinimg.com/736x/b0/fe/17/b0fe17d42db3f6d0c4d76f679eb1b4f3.jpg',
  },
  {
    name: 'Cape Town, South Africa',
    image: 'https://i.pinimg.com/736x/06/70/1c/06701cfb03ef132373498b42c2b354fa.jpg',
  },
  {
    name: 'Nairobi, Kenya',
    image: 'https://i.pinimg.com/736x/1f/c4/ba/1fc4baae54621ba2d350f8d381140e64.jpg',
  },
];

function LocationListings() {
  return (
    <div className={styles.locationListingsContainer}>
      <h2>Event Locations</h2>
      <div className={styles.locationsGrid}>
        {locations.map((location, index) => (
          <div key={index} className={styles.locationCard}>
            <img
              src={location.image}
              alt={location.name}
              className={styles.locationImage}
            />
            <h3>{location.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LocationListings;

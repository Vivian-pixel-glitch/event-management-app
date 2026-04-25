import React from 'react';
import EventCard from './EventsCard';
import './FeaturedEvents.module.css';

const featuredEvents = [
  { id: 1, name: 'Summer Music Festival', date: '2025-07-15', location: 'Central Park', description: 'Experience amazing live music!', imageUrl: 'https://via.placeholder.com/300/FFC107/000000?Text=Music' },
  { id: 2, name: 'Tech Conference 2025', date: '2025-08-01', location: 'Convention Center', description: 'Learn about the latest tech trends.', imageUrl: 'https://via.placeholder.com/300/4CAF50/FFFFFF?Text=Tech' },
  { id: 3, name: 'Art Exhibition', date: '2025-09-10', location: 'Art Gallery', description: 'Discover stunning works of art.', imageUrl: 'https://via.placeholder.com/300/9C27B0/FFFFFF?Text=Art' },
];

function FeaturedEvents() {
  return (
    <div className="featuredEventsContainer">
      <h2>Featured Events</h2>
      <div className="eventsGrid">
        {featuredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedEvents;
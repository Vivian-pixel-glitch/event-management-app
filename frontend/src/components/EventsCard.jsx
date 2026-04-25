import React from 'react';
import './EventsCard.module.css';

function EventCard({ event }) {
  return (
    <div className="eventCard">
      <img src={event.imageUrl} alt={event.name} className="eventImage" />
      <h3 className="eventName">{event.name}</h3>
      <p className="eventDate">{event.date}</p>
      <p className="eventLocation">{event.location}</p>
      <p className="eventDescription">{event.description.substring(0, 50)}...</p>
      <button className="viewDetailsButton">View Details</button>
    </div>
  );
}

export default EventCard;
import React from 'react';
import './TestimonialCard.module.css';

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonialCard">
      <p className="quote">"{testimonial.quote}"</p>
      <h4 className="name">- {testimonial.name}</h4>
      <p className="rating">Rating: {testimonial.rating}/5 ⭐</p>
    </div>
  );
}

export default TestimonialCard;
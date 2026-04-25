import React from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Sarah M.',
    quote: 'This platform made organizing my wedding a breeze!  The venue selection tool was incredibly helpful.',
    image: 'https://i.pinimg.com/736x/12/8b/51/128b51e7fd3a181031c8f77c43c5540b.jpg',
  },
  {
    name: 'John K.',
    quote: 'I used this for a corporate event, and it saved me hours of work.  Highly recommended!',
    image: 'https://i.pinimg.com/736x/dc/ec/02/dcec022656428546f5246604061f7945.jpg',
  },
  {
    name: 'Jessica L.',
    quote: 'The task management feature kept our team on track and ensured a successful conference.',
    image: 'https://i.pinimg.com/736x/3e/e6/0d/3ee60daf615fed89180c5675aff3fa15.jpg',
  },
  {
    name: 'David P.',
    quote: 'Great for finding local vendors.  Made my party planning so much easier.',
    image: 'https://i.pinimg.com/736x/e5/45/ca/e545ca570256c9b8969b8fedb4c43b13.jpg',
  },
  {
    name: 'Emily R.',
    quote: 'I loved being able to compare venues and prices all in one place.',
    image: 'https://i.pinimg.com/736x/ea/5f/a4/ea5fa43b5fe4cdfca3b2c81d4555cfa0.jpg',
  },
  {
    name: 'Michael S.',
    quote: 'The support team was super responsive and helpful when I had questions.',
    image: 'https://i.pinimg.com/736x/7b/9c/2e/7b9c2e5dd51886af6985da33baedb5b3.jpg',
  },
];

function TestimonialsSection() {
  return (
    <div className={styles.testimonialsContainer}>
      <h2>What Our Users Say</h2>
      <div className={styles.testimonialsWrapper}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <img src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} />
            <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
            <p className={styles.testimonialName}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;

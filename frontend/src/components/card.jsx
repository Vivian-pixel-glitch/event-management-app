import React from 'react';

function Card({ imageSrc, text, link1, link2 }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imageSrc} className="card-img-top" alt="Card visual" />
      <div className="card-body">
        <p className="card-text">{text}</p>
        <a href={link1.href} className="card-link">{link1.label}</a>
        <a href={link2.href} className="card-link">{link2.label}</a>
      </div>
    </div>
  );
}

export default Card;


import React from 'react';
import './EngageCard.css';

const EngageCard = ({ src, title, description }) => {
  return (
    <div
      className="engage-card"
      style={{ backgroundImage: `url(${src})` }} // Apply the background image URL here
    >
      <h3 className="engage-card-title">{title}</h3>
      <p className="engage-card-description">{description}</p>
    </div>
  );
};

export default EngageCard;

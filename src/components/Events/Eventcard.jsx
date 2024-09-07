import React from 'react';
import './Events.css'
const Eventcard = ({  imageSrc, description }) => {
  return (
    
      <div className="evntbx ecrd">
        <img src={imageSrc}  />
        <p>{description}</p>
      </div>
    
  );
};

export default Eventcard;

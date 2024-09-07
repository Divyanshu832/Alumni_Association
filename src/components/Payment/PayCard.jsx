import React from 'react';
import '../Donate/Donate.css'
const PayCard = ({  imageSrc, description , desc }) => {
  return (
    
      <div className="evntbx ecrd">
        <img src={imageSrc}  />
        <div className='d23 font-grotesk'>{description}</div>
        <div className='d24 font-grotesk'>{desc}</div>
      </div>
    
  );
};

export default PayCard;

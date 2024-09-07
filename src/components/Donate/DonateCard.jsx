import React from 'react';
import './Donate.css'
const DonateCard = ({  imageSrc, description }) => {
  return (
    
      <div className="evntbx bg-[#fff] ecrd">
        <img className=' h-52' src={imageSrc}  />
        <p>{description}</p>
      </div>
    
  );
};

export default DonateCard;

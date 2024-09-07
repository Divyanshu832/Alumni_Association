// import React from 'react';
// import './Tcard.css';

// const Tcard = ({ image, description, name, title, batch }) => {
//   return (
//     <div className="card-container">
      
//       <img src={image} alt={`${name} photo`} className="profile-image" />
//       <p className="description">{description}</p>
//       {/* <button className="read-more-button">Read More</button> */}
//       <div className="info-container">
//       <div className="underline"></div>
//         <p className="name">{name}</p>
//         <p className="title">{title}</p>
//         <p className="batch">{batch}</p>
//       </div>
//     </div>
//   );
// };

// export default Tcard;

import React from 'react';
import './Tcard.css';

const Tcard = ({ image, description, name, title, batch }) => {
  return (
    <div className="card-container">
      <img src={image} alt={`${name} photo`} className="profile-image" />
      <p className="ddescription">{description}</p>
      <div className="info-container">
        <div className="uunderline"></div>
        <p className="name">{name}</p>
        <p className="ttitle">{title}</p>
        <p className="batch">{batch}</p>
      </div>
    </div>
  );
};

export default Tcard;


import React from "react";
import "./StyleCard.css";

const Card = ({ children, height, width, title }) => {
  const boxStyle = {
    height: height,
    width: width,
  };
  return (
    <div style={boxStyle} className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;

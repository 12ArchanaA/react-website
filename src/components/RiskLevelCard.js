import React from "react";
import "../RiskLevelCard.css";

const RiskLevelCard = (props) => {
  return (
    <div className="riskLevelCard-container">
      <p>{props.heading}</p>
      <hr />
      <img src={props.image} alt="" />
    </div>
  );
};

export default RiskLevelCard;

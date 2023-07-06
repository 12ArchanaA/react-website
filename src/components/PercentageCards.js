import React from "react";
import "../PercentageCards.css";

const PercentageCards = (props) => {
  return (
    <div className="percentageCard-container">
      <div className="percentageCard-container-box">
        <div className="percentageCard-heading">
          <p>{props.heading}</p>
        </div>
        <div className="percentage-comparison">
          <h2>{props.percentage}</h2>
          <h6>{props.comparison}</h6>
        </div>
      </div>
    </div>
  );
};

export default PercentageCards;

import React from "react";
import "../GraphCard.css";

const GraphCard = (props) => {
  return (
    <div className="graphCard-container">
      <div className="graph-card">
        <div className="graphCard-heading">
          <p>{props.heading}</p>
          <img src={props.image} alt="" />
        </div>
        <br />
        <div className="content">
          <div className="count-comparison">
            <h1>{props.count}</h1>
            <p>{props.comparison}</p>
          </div>
          <div className="graph">
            <img src={props.graphImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;

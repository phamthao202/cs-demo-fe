import React from "react";
import "App.css";
import "./OneDrink.css";
const OneDrink = ({title, pictureUrl, price}) => {
  return (
    <div className="menuByCategory-area container">
      <div className="oneDrink-wrap">
        <div className="oneDrink-img-div">
          <img
            className="oneDrink-img"
            src={pictureUrl}
          />
        </div>
        <div className="oneDrink-detail">
  <div style={{color:"white"}}>{title}</div>
          <div style={{color:"white"}}>{price}</div>
        </div>
      </div>



    </div>
  );
};

export default OneDrink;

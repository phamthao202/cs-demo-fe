import React from "react";
import "App.css";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
// import {Badge} from "react-bootstrap"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const OneDrink = ({ title, pictureUrl, category, price }) => {
  return (
    <div className="cardItem">
      <div className="card-img-parent">
        <img className="card-img-child" src={pictureUrl} />
      </div>

      <div className="img-overlay">
        <div className="heart-online">
          <div className="online">
            <h5>
             
              <Badge variant="light">Vegetarian</Badge>
            </h5>
          </div>
          <div className="heart">
            <h4>
              <i className="far fa-heart"></i>
            </h4>
          </div>
        </div>
      </div>
      <div className="img-below">
        <p className="nameDrink">{title}</p>
        <p className="priceDrink">{price}</p>
      </div>
    </div>
  );
};

export default OneDrink;

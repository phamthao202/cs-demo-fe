import React from "react";
import "./MenuCard.css";
import { Link } from "react-router-dom";

const MenuCard = ({ img, title, description, color, url }) => {
  return (
    <div className="menuCard-wrap">
      <div className="menuCard-layout">
        <Link to={url}>
          <div className="menuCard-img-wrap">
            <div
              className="menuCard-layout-color"
              style={{ backgroundColor: `${color}` }}
            ></div>
            <img className="menuCard-img img-fluid" src={img} />
          </div>
        </Link>
        <div className="menuCard-title">{title}</div>
        <div className="menuCard-desc">{description}</div>
        <div className="menuCard-line"></div>
        <div className="menuCard-btn-wrap">
          <Link to={url}>
            {" "}
            <div className="menuCard-btn">Find out more</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

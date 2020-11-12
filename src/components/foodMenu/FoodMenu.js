import React from "react";
// import { Row, Col } from "react-bootstrap";
// import Badge from "react-bootstrap/Badge";
import { useSelector, useDispatch } from "react-redux";
import { expActions } from "redux/actions";
import "../drinkMenu/DrinkMenu.css";
const foodCategory = [
  "Vegan",
  "Starter",
  "Main dishes",
  "Grilled and Skewers",
  "Izakaya Ten Signature",
];
const FoodMenu = () => {
  const dispatch = useDispatch();
  const searchByCategoryFood = (categoryFood) => {
    dispatch({ type: "SAVE_CATEGORY", payload: categoryFood });
  };
  return (
    <div className="DrinkCategoryArea  ">
      <div class="categoryWord">Food Menu</div>
      <div className="oneDrinkCategory ">
        {foodCategory.map((item) => (
          <div>
            <div
              className="oneDrinkCate"
              onClick={() => searchByCategoryFood(item.toLowerCase())}
            >
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;

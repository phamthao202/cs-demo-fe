import React from "react";
// import { Row, Col } from "react-bootstrap";
// import Badge from "react-bootstrap/Badge";
import { useSelector, useDispatch } from "react-redux";
import { expActions } from "redux/actions";
import "./DrinkMenu.css"
const drinkCategory = [
  "Japanese Sake n Shochu",
  "Japanese Cocktail",
  "More Alcohol",
  "Soft Drink",
];
const DrinkMenu = () => {
  const dispatch = useDispatch();

  const searchByCategoryDrink = (categoryDrink) => {
    // console.log(category);
    dispatch({ type: "SAVE_DRINKCATEGORY", payload: categoryDrink });
  };
  return (
    <div className="DrinkCategoryArea ">
      <div class="categoryWord">Drink Menu</div>

      <div className="oneDrinkCategory">
        <div>
          {drinkCategory.map((item) => (
            <div>
              <div
                className="oneDrinkCate"
                onClick={() => searchByCategoryDrink(item.toLowerCase())}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinkMenu;

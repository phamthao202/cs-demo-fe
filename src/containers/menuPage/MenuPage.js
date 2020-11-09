import React, { useEffect } from "react";
import "./MenuPage.css"
import PublicNavbar from "../PuclicNavbar";
import ImgMenuPage from "../../images/menuPageMainPic.jpg";
import DrinkMenu from "../../components/drinkMenu/DrinkMenu";
import { useSelector, useDispatch } from "react-redux";
import OneDrink from "../../components/drinkMenu/OneDrink";
import { categoryDrinkAction } from "../../redux/actions/index";
const MenuPage = () => {
  let dispatch = useDispatch();
  const drinkMenu = useSelector((state) => state.cateDrink.menuByDrinkCategory);
  const category = useSelector((state) => state.cateDrink.categoryDrink);
  useEffect(() => {
    dispatch(categoryDrinkAction.getMenuListByCategoryDrink(category));
  }, [category]);
  return (
    <div className="menuPage">
      <PublicNavbar />

      <div className="menuPage-main">
        <div className="col-md-3 food-drink-side">
          <div>
            <h2>{category}</h2>
            <h2>Day la menu Food</h2>
            <h2>Day la menu Food</h2>
            <h2>Day la menu Food</h2>
            <h2>Day la menu Food</h2>
          </div>
        </div>
        <div className="col-md-6 menuPage-mainPicture">
          <img src={ImgMenuPage} className="menuPage-img-center" />
        </div>
        <div className="col-md-3 food-drink-side">
          <DrinkMenu />
        </div>
      </div>
      <div className="menuByCategory-area">
        {drinkMenu &&
          drinkMenu.length > 0 &&
          drinkMenu.map((item) => (
            <OneDrink
              title={item.title}
              price={item.price}
              pictureUrl={item.pictureUrl}
            />
          ))}
      </div>

      <h3 style={{color:"white"}}>day la menu ImgMenuPage</h3>
      <h3>day la menu ImgMenuPage</h3>
      <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>  <h3>day la menu ImgMenuPage</h3>
    </div>
  );
};

export default MenuPage;

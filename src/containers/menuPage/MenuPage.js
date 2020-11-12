import React, { useEffect } from "react";
import "./MenuPage.css";
import PublicNavbar from "../PuclicNavbar";
import ImgMenuPage from "../../images/menuPageMainPic.jpg";
import DrinkMenu from "../../components/drinkMenu/DrinkMenu";
import { useSelector, useDispatch } from "react-redux";
import OneDrink from "../../components/drinkMenu/OneDrink";
import { categoryAction } from "../../redux/actions/index";
import WhiteBrush from "../../images/menuPageBrush.png";
import HomepageFooter from "components/homepageFooter/HomePageFooter";
import FoodMenu from "components/foodMenu/FoodMenu";

const MenuPage = () => {
  let dispatch = useDispatch();
  const menu = useSelector((state) => state.cate.menuByCategory);
  const category = useSelector((state) => state.cate.category);

  useEffect(() => {
    if (category) dispatch(categoryAction.getMenuListByCategory(category));
    else {
      dispatch(categoryAction.getMenuListByCategory("izakaya ten signature"));
    }
  }, [category]);

  return (
    <div className="menuPage">
      <PublicNavbar />

      <div className="menuPage-main">
        <div className="col-md-3 food-drink-side">
          <FoodMenu />
        </div>

        <div className="col-md-6 menuPage-mainPicture">
          <img src={ImgMenuPage} className="menuPage-img-center" />
        </div>
        <div className="col-md-3 food-drink-side">
          <DrinkMenu />
        </div>
      </div>

      <div className="category-name-brush">
        <img src={WhiteBrush} className="category-name-brush-img img-fluid" />
        <div className="category-name-brush-word">
         
          {category ? category : "izakaya ten signature"}
        </div>
      </div>

      <div className="menuByCategory-area  flex-wrap container">
        {menu &&
          menu.length > 0 &&
          menu.map((item) => (
            <OneDrink
              title={item.title}
              price={new Intl.NumberFormat("vi-VN").format(item.price) + " VND"}
              pictureUrl={item.pictureUrl}
            />
          ))}
      </div>

      <HomepageFooter />
    </div>
  );
};

export default MenuPage;

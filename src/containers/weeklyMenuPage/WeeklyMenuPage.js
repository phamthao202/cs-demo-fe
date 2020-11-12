import React from "react";
import "./WeeklyMenuPage.css"
import PublicNavbar from "containers/PuclicNavbar";
import HomepageFooter from "components/homepageFooter/HomePageFooter";
import upcomingEvent from "images/upcoming1.png";
import { useSelector, useDispatch } from "react-redux";
import OneDrink from "components/drinkMenu/OneDrink";
import { categoryAction } from "redux/actions";
import { useEffect } from "react";

const WeeklyMenuPage = () => {
    
    const dispatch = useDispatch()
    const menu = useSelector((state) => state.cate.menuByCategory);
  const category = useSelector((state) => state.cate.category);
  useEffect(() => {
    if (category) dispatch(categoryAction.getMenuListByCategory(category));
    else {
      dispatch(categoryAction.getMenuListByCategory("izakaya ten signature"));
    }
  }, [category]);
  return (
    <div>
      <PublicNavbar />
      <div className="mainImg">
        <img
          className="homepage-img"
          src="https://blog.sundaysgrocery.com/wp-content/uploads/2019/03/yardbird-banner-thyroid-yakitori-kojosen.jpg"
        />
        <div className="txtbox">
          <div className="txtbox-txt">Hurry up!</div>
          <div className="txtbox-txt txtbox-text--big ">This menu is time-limited</div>
        </div>
      </div>
      <div
        className="homepage-upcomingEvent d-flex justify-content-center"
        style={{ marginTop: "40px" }}
      >
        <img
          src={upcomingEvent}
          className="homepage-upcomingevent-img img-fluid"
        />
        <div className="homepage-upcomingevent-word"> This Week Specials</div>
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

export default WeeklyMenuPage;

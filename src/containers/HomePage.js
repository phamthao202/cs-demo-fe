import React from "react";
import "App.css";
import PublicNavbar from "containers/PuclicNavbar";
import MenuCard from "components/menuCard/MenuCard";
import img1 from "../images/menuCard1.png";
import upcomingEvent from "../images/upcoming1.png";
import { Link } from "react-router-dom";
import HomepageFooter from "components/homepageFooter/HomePageFooter";
import HomepagePromotion from "components/homepagePromotion/HomepagePromotion";
const HomePage = () => {
  return (
    <div className="home">
      <PublicNavbar />
      <div className="mainImg">
        <img
          className="homepage-img"
          src="https://blog.sundaysgrocery.com/wp-content/uploads/2019/03/yardbird-banner-thyroid-yakitori-kojosen.jpg"
        />
        <div className="txtbox">
          <div className="txtbox-txt">Grill Your Night</div>
          <div className="txtbox-txt txtbox-text--big ">With Our Heat</div>
        </div>
      </div>
      {/* <div style={{ fontSize: "60px", fontWeight: "700", color: "red" }}>
        ABC DOSKOAK OODKSF K
      </div> */}

      <div className="body-part">
        <div className="introTxt1 row">
          <div className="introTxt1-left col-sm-6">
            <div className="row">
              <div className="introTxt1-welcome">Welcome to</div>
              <div className="introTxt1-izakaya">
                Izakaya <span className="introTxt1-Ten">TEN</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="introTxt1-content-1">
              With our mission of "Delivering Wow, Sharing Happiness," we have
              been striving every day to provide the best dining experience to
              all of our dear guests. A restaurant should not be a place to
              simply have a meal. We truly want every guest to leave happy with
              our food, service, and environment that delivers the "Wow" factor.
              We continue to evolve and improve every day so that we can always
              fulfill our mission of "Delivering Wow, Sharing Happiness" to
              every guest.
            </div>

            <div className="d-flex justify-content-sm-start justify-content-center">
              <div className="introTxt1-content-2"> About Izakaya Ten</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex menuCards">
        <MenuCard
          url={`/menu`}
          img={`https://rimage.gnst.jp/rest/img/mn3pemmp0000/s_0nbm.jpg`}
          title="Menu"
          description='With our mission of "Delivering Wow, Sharing Happiness," we have been striving every day to provide the best dining experience to all of our dear guests. A restaurant should not be a place to simply have a meal.'
          color="rgba(22, 105, 110, 0.434)"
        />
        <MenuCard
          url={`/weeklyMenu`}
          img={`https://livingnomads.com/wp-content/uploads/2018/03/03/Top-10-Foods-You-Must-Eat-in-Tokyo.jpg`}
          title="Weekly Menu"
          description='With our mission of "Delivering Wow, Sharing Happiness," we have been striving every day to provide the best dining experience to all of our dear guests. A restaurant should not be a place to simply have a meal.'
          color="rgba(22, 105, 110, 0.434)"
        />
        <MenuCard
          url={`/promotion`}
          img={img1}
          title=" Weekly Promotion"
          description='With our mission of "Delivering Wow, Sharing Happiness," we have been striving every day to provide the best dining experience to all of our dear guests. A restaurant should not be a place to simply have a meal.'
          color="rgba(22, 105, 110, 0.434)"
        />
      </div>
      <div
        className="homepage-upcomingEvent d-flex justify-content-center"
        style={{ marginTop: "40px" }}
      >
        <img
          src={upcomingEvent}
          className="homepage-upcomingevent-img img-fluid"
        />
        <div className="homepage-upcomingevent-word"> UP COMING EVENTS</div>
      </div>

      <HomepagePromotion
        titlePromotion="FREE 300ml SAKE"
        time="From 10.11 To 15.11"
        requirement="Book a group more than 4 people."
        content='With our mission of "Delivering Wow, Sharing Happiness," we have been striving every day to provide the best dining experience to all of our dear guests. A restaurant should not be a place to simply have a meal.1'
        slide1={`https://previews.123rf.com/images/taa22/taa221708/taa22170800119/84166043-pouring-japanese-sake.jpg`}
        slide2={`https://images-na.ssl-images-amazon.com/images/I/61NQK3Xvp5L.jpg`}
        slide3={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxhcTevl-QbLC6tkOaYifRxsKJJcPXPGLccg&usqp=CA`}
      />

      <HomepagePromotion
        titlePromotion="Get 1 bottle of Ten Homemade Umeshu"
        time="From 20.11 To 25.11"
        requirement="Book a group more than 4 people."
        content='With our mission of "Delivering Wow, Sharing Happiness," we have been striving every day to provide the best dining experience to all of our dear guests. A restaurant should not be a place to simply have a meal.1'
        slide1={`https://jemart.com.vn/wp-content/uploads/2020/01/ruou-mo-choya-nhat-ban.jpg`}
        slide2={`https://scontent.fymy1-1.fna.fbcdn.net/v/t1.0-0/p180x540/121625832_2695290307466134_7857072711853681416_o.jpg?_nc_cat=109&ccb=2&_nc_sid=110474&_nc_ohc=J7ek1h9GY7MAX93lxYv&_nc_ht=scontent.fymy1-1.fna&tp=6&oh=1cd1a5421a40febb1ae9d8ccfb72b22d&oe=5FBA0B3E`}
        slide3={`https://www.tokyoweekender.com/wp-content/uploads/2020/07/Umeshu-soda.jpg`}
      />

      <HomepagePromotion
        titlePromotion="50% discount SALMON NIGHT"
        time="From 30.11 To 5.12"
        requirement="Book a group more than 4 people."
        content='With our mission of "Delivering Wow, Sharing Happiness," we have been striving every day to provide the best dining experience to all of our dear guests. A restaurant should not be a place to simply have a meal.1'
        slide1={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDO06h2d0Sp1ZCKAkWf-3d0FLkxMWqJ8KR7Q&usqp=CAU`}
        slide2={`https://fresh.co.nz/wp-content/uploads/2018/05/Salmon-Sashimi-Soy-and-Orange-Salad.jpg`}
        slide3={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7Eso5wB6kOuQ4dpSHgWO0h6KZltL-j4UZ6w&usqp=CAU`}
      />

      <HomepageFooter />
    </div>
  );
};

export default HomePage;

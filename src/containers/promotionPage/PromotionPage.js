import React from "react";
import "./PromotionPage.css";
import PublicNavbar from "containers/PuclicNavbar";
import upcomingEvent from "images/upcoming1.png";
import HomepageFooter from "components/homepageFooter/HomePageFooter";
import HomepagePromotion from "components/homepagePromotion/HomepagePromotion";
const PromotionPage = () => {
  return (
    <div>
      <PublicNavbar />
      <div className="mainImg">
        <img
          className="homepage-img"
          src="https://blog.sundaysgrocery.com/wp-content/uploads/2019/03/yardbird-banner-thyroid-yakitori-kojosen.jpg"
        />
        <div className="txtbox">
          <div className="txtbox-txt">New Events</div>
          <div className="txtbox-txt txtbox-text--big ">Every Week</div>
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
        <div className="homepage-upcomingevent-word"> Promotions</div>
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

export default PromotionPage;

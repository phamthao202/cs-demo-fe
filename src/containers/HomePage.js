import React from "react";
import PublicNavbar from "containers/PuclicNavbar";
import MenuCard from "components/menuCard/MenuCard";
import img1 from "../images/menuCard1.png";
import { Link } from "react-router-dom";
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
        <div className="listItem"></div>
        <div className="introTxt2"></div>
        <div className="ourMenu"></div>
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
          img={`https://livingnomads.com/wp-content/uploads/2018/03/03/Top-10-Foods-You-Must-Eat-in-Tokyo.jpg`}
          title="Weekly Menu"
          description='With our mission of "Delivering Wow, Sharing Happiness," we have been striving every day to provide the best dining experience to all of our dear guests. A restaurant should not be a place to simply have a meal.'
          color="rgba(22, 105, 110, 0.434)"
        />
        <MenuCard
          img={img1}
          title="Promotion"
          description='With our mission of "Delivering Wow, Sharing Happiness," we have been striving every day to provide the best dining experience to all of our dear guests. A restaurant should not be a place to simply have a meal.'
          color="rgba(22, 105, 110, 0.434)"
        />
      </div>
    </div>
  );
};

export default HomePage;

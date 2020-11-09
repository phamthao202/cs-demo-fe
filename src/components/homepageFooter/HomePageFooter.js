import React from "react";
import logo from "../../images/logo2.png";
import "App.css";
import "./HomepageFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import map from "../../images/TenMap.png";
const HomepageFooter = () => {
  return (
    <div>
      <div className="footer-parent ">
        <div className="footer-1">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <div className="footer-1-left-logo">
                <div className="row">
                  <div className=" ">
                    <img
                      src={logo}
                      style={{ height: "60px" }}
                      className="footer-1-left-logo-image"
                    />
                    <span className="logo-rightside ">TEN</span>
                  </div>
                </div>
              </div>

              <div className="footer-1-left-restaurant-information">
                <div className="row">
                  <div className="col-sm-3 col-xs-12 footer-Location-Social-section">
                    <div className="footer-1-location-social-section">
                      <div className="footer-1-location">
                        <h3>Location</h3>
                        <div className="footer-location-detail">
                          <p
                            style={{
                              fontSize: "15px",
                              fontFamily: "monospace",
                            }}
                          >
                            <div>8A/8D1 Thai Van Lung Street</div>

                            <div>Ben Nghe Ward</div>

                            <div> District 1</div>

                            <div>Ho Chi Minh City</div>
                          </p>
                        </div>
                      </div>
                      <div className="footer-1-social">
                        <h3>Social</h3>
                        <a
                          href="https://www.facebook.com/izakayaTen.hcmc/"
                          target="_blank"
                        >
                          <i class="fab fa-facebook-square"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/izakaya_ten/?hl=vi"
                          target="_blank"
                        >
                          <i class="fab fa-instagram"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/izakaya_ten/?hl=vi"
                          target="_blank"
                        >
                          <i class="fab fa-twitter-square"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-xs-12">
                    <div className="footer-Opening-Hours-section">
                      <h3>Opening Hours</h3>
                      <div className="footer-opening-detail">
                        <p
                          style={{ fontSize: "15px", fontFamily: "monospace" }}
                        >
                          <div>MONDAY to SATURDAY</div>

                          <div>5pm to 3am</div>

                          <div>SUNDAY</div>

                          <div>5pm to 1am</div>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <div className="footer-make-a-reservation-block">
                      <div className="footer-make-a-reservation-text">
                        <h3>Make a reservation</h3>
                      </div>
                      <div className="footer-button-reservation">
                        <a href="#top">
                          <button className="button-reservation-footer">
                            Make a reservation
                          </button>
                        </a>
                      </div>
                      <div className="footer-tel-and-img">
                        <p className="tel">Tel : 0707-611-777 Mr. Sakai</p>
                        <div className="footer-reservation-img">
                          <img
                            title
                            src="https://www.quay.com.au/wp-content/uploads/2018/06/footer-icon.png"
                            alt=""
                          />
                          <img
                            title
                            src="https://www.quay.com.au/wp-content/uploads/2018/06/footer-icon.png"
                            alt=""
                          />
                          <img
                            title
                            src="https://www.quay.com.au/wp-content/uploads/2018/06/footer-icon.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xs-12 footer-1-right-other-resto">
              <div className="footer-right-otherresto-text">
                <div className="footer-1-right-text-div">
                  <div className="footer-typer-writer">
                    Find Izakaya Ten on map
                  </div>
                </div>
              </div>

              <div className="footer-right-Mangetsu">
                <p style={{ fontSize: "15px", fontFamily: "monospace" }}>
                  Please note: Izakaya Ten is right on Thai Van Lung Street
                </p>
                <div className="footer-right-Mangetsu-detail">
                  {/* <p style={{ fontSize: "15px", fontFamily: "monospace" }}>
                    <div>27 Thai Van Lung Street</div>

                    <div>Ben Nghe Ward</div>

                    <div>District 1</div>

                    <div>Ho Chi Minh City</div>
                  </p> */}
                  <img src={map} className="tenMap img-fluid" />
                </div>
              </div>

              {/* <div className="footer-right-Ichibanya">
                <p style={{ fontSize: "15px", fontFamily: "monospace" }}>
                  {" "}
                  IZAKAYA ICHIBANYA RAMEN
                </p>
                <div className="footer-right-Ichibanya-detail">
                  <p style={{ fontSize: "15px", fontFamily: "monospace" }}>
                    8A/A1 Thai Van Lung Street Ben Nghe Ward District 1 Ho Chi
                    Minh City
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="footer-3">Izakaya Ten 2020. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default HomepageFooter;

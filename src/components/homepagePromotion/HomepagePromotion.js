import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomepagePromotion.css";
const HomepagePromotion = ({
  titlePromotion,
  time,
  requirement,
  content,
  slide1,
  slide2,
  slide3,
}) => {
  return (
    <div className="body-part">
      <div className="introTxt1 row">
        <div className="col-sm-6 promotion-content-area ">
          <div className="introTxt1-Ten"> {titlePromotion}</div>
          <div className="introTxt1-izakaya">{time}</div>
          <div className=" promotion-required">{requirement}</div>
          <div className="introTxt1-content-1">{content}</div>

          <div className="d-flex justify-content-sm-start justify-content-center">
            <div className="introTxt1-content-2"> Don't miss it</div>
          </div>
        </div>
        <div className="introTxt1-left introTxt1-slide col-sm-6">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="slide"
                src={slide1}
                alt="First slide"
                width="300px"
              />
              <Carousel.Caption>
                <h5>Only in Izakaya Ten</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="slide"
                src={slide2}
                alt="Second slide"
                width="300px"
              />
              <Carousel.Caption>
                <h5>Weekly events</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide "
                src={slide3}
                alt="Third slide"
                width="300px"
              />
              <Carousel.Caption>
                <h5>Don't miss it</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomepagePromotion;

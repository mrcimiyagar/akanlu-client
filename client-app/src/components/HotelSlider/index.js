import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HotelSlider = (props) => {
  return (
    <div style={{width: 'calc(100% - 32px)', height: 300, marginLeft: 16, marginRight: 16, marginTop: 32}}>
      <Carousel>
        {props.images.map((imageId) => {
          return (
            <Carousel.Item>
              <img
                id={"slide" + imageId}
                src={"https://akanlu.com/WebFile/Gallery/" + imageId}
                className="d-block w-100"
                alt="slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HotelSlider;

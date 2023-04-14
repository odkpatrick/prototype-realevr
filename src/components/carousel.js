import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import N4HouseImg from "../images/N4-Customized-4-Bedroom-Villa1.jpg";

const HomeCarousel = () => {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img className="d-block w-100" src={N4HouseImg} alt="Bungalow House" />
        <Carousel.Caption>
          <h3>Bungalow House</h3>
          <p>
            This practical style brings a relaxing, airy and cheerful atmosphere
            indoors. A decent life you deserve.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={N4HouseImg} alt="Second slide" />

        <Carousel.Caption>
          <h3>N4 Customized 4 Bedroom Villa</h3>
          <p>Two-storey structure with four self -contained Bedrooms.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={N4HouseImg} alt="Third slide" />

        <Carousel.Caption>
          <h3>5 bedroom double storied villa</h3>
          <p>Two-storey structure with four self -contained Bedrooms.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;

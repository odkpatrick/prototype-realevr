import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Carousel from "../components/carousel";
import Layout from "../components/layout";
import logo from "../images/file.png";
import { Col, Container, Row } from "react-bootstrap";
import N4HouseImg from "../images/N4-Customized-4-Bedroom-Villa1.jpg";

const PropertyCard = () => {
  return (
    <Container className="property-container">
      <img src={N4HouseImg} alt="house" className="property-img" />
      <h4>House Image</h4>
      <p>
        This practical style brings a relaxing, airy and cheerful atmosphere
        indoors. A decent life you deserve.
      </p>
    </Container>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <h1>Realevr Tours</h1>
      <Carousel />
      <div>
        <h2>Featured Tours</h2>
        <Row>
          <Col md={6} lg={3}>
            <PropertyCard />
          </Col>
          <Col md={6} lg={3}>
            <PropertyCard />
          </Col>
          <Col md={6} lg={3}>
            <PropertyCard />
          </Col>
          <Col md={6} lg={3}>
            <PropertyCard />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Realevr Tours || Home Page</title>
    <link rel="icon" href={logo} />
  </>
);

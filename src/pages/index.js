import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
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
      <Link href="#">
        <h4>House Image</h4>
      </Link>
      <p>
        This practical style brings a relaxing, airy and cheerful atmosphere
        indoors. A decent life you deserve.
      </p>
    </Container>
  );
};

const GroupTours = ({ groupTitle }) => {
  return (
    <div className="group-tour-wrapper">
      <h2 className="group-tour-title">{groupTitle}</h2>
      <Row className="group-tour-tours-wrapper">
        <Col md={6} lg={4}>
          <PropertyCard />
        </Col>
        <Col md={6} lg={4}>
          <PropertyCard />
        </Col>
        <Col md={6} lg={4}>
          <PropertyCard />
        </Col>
        <Col md={6} lg={4}>
          <PropertyCard />
        </Col>
      </Row>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <h1>Realevr Tours</h1>
      <Carousel />
      <div>
        <GroupTours groupTitle={"Latest Tours"} />
        <GroupTours groupTitle={"Featured Tours"} />
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

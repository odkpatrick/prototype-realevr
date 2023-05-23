import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "gatsby";
import "./index.css";
import Layout from "../components/layout";
import logo from "../images/file.png";
import { Col, Container, Row } from "react-bootstrap";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import N4HouseImg from "../images/N4-Customized-4-Bedroom-Villa1.jpg";
import BangalowImg from "../images/Luxury-4-bedrooms1-314x192.jpg";
import ApartImg from "../images/N5-Customized-5-Bedroom-Villa.png";
import VillaImg from "../images/5-bedroom-double-storied-villa-314x192.jpg";

const IntroComponent = () => {
  return (
    <div className="intro-wrapper">
      <h1 className="intro-title">Realevr Tours</h1>
      <Container fluid className="intro-content-wrapper">
        <iframe
          src="//storage.net-fs.com/hosting/6778892/6/index.htm"
          name="Bungalow House"
          width="100%"
          height="100%"
          frameborder="0"
          allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          oallowfullscreen="true"
          msallowfullscreen="true"
        ></iframe>
      </Container>
    </div>
  );
};

const PropertyCard = ({ property, showTour }) => {
  return (
    <Container className="property-container">
      <img
        src={property.imgSrc}
        alt={property.title}
        className="property-img"
        onClick={() => {
          showTour(property);
        }}
      />
      <div>
        <h4>{property.title}</h4>
        <p>{property.description}</p>
      </div>
    </Container>
  );
};

const GroupTours = ({ groupTitle, showTour }) => {
  const properties = [
    {
      id: 0,
      src: "//storage.net-fs.com/hosting/6778892/11/index.htm",
      imgSrc: ApartImg,
      title: "Apartments",
      description:
        "A spacious balcony faces towards the lake Victoria and Golf Course.",
    },
    {
      id: 1,
      src: "//storage.net-fs.com/hosting/6778892/10/index.htm",
      imgSrc: N4HouseImg,
      title: "N4 Customized 4 Bedroom Villa",
      description:
        "Two-storey structure with four self -contained Bedrooms.The reasonable layout offers a comfortable life.",
    },
    {
      id: 2,
      src: "//storage.net-fs.com/hosting/6778892/6/index.htm",
      imgSrc: BangalowImg,
      title: "Bungalow House",
      description:
        "This practical style brings a relaxing, airy and cheerful atmosphere indoors. A decent life you deserve.",
    },
    {
      id: 3,
      src: "//storage.net-fs.com/hosting/6778892/7/index.htm",
      imgSrc: VillaImg,
      title: "Elite High School",
      description: "Elite High School",
    },
  ];

  return (
    <div className="group-tour-wrapper">
      <h2 className="group-tour-title">{groupTitle}</h2>
      <Row className="group-tour-tours-wrapper">
        <Col md={6} lg={4}>
          <PropertyCard property={properties[0]} showTour={showTour} />
        </Col>
        <Col md={6} lg={4}>
          <PropertyCard property={properties[1]} showTour={showTour} />
        </Col>
        <Col md={6} lg={4}>
          <PropertyCard property={properties[2]} showTour={showTour} />
        </Col>
        <Col md={6} lg={4}>
          <PropertyCard property={properties[3]} showTour={showTour} />
        </Col>
      </Row>
    </div>
  );
};

const TourPage = ({ closeTourPage, property }) => {
  return (
    <div className="tour-page-wrapper">
      <div className="iframe-wrapper">
        <button onClick={closeTourPage} className="tour-close-btn">
          <GrClose/>
        </button>
        <iframe
          src={property.src}
          name={property.title}
          width="100%"
          height="100%"
          frameborder="0"
          allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          oallowfullscreen="true"
          msallowfullscreen="true"
        ></iframe>
      </div>
      <div className="details-wrapper">
        <h2>{property.title}</h2>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

const IndexPage = () => {
  const [tourPage, setTourPage] = React.useState(0);
  const [tourPageId, setTourPageId] = React.useState();

  const properties = [
    {
      id: 0,
      src: "//storage.net-fs.com/hosting/6778892/11/index.htm",
      imgSrc: ApartImg,
      title: "Apartments",
      description:
        "A spacious balcony faces towards the lake Victoria and Golf Course.",
    },
    {
      id: 1,
      src: "//storage.net-fs.com/hosting/6778892/10/index.htm",
      imgSrc: N4HouseImg,
      title: "N4 Customized 4 Bedroom Villa",
      description:
        "Two-storey structure with four self -contained Bedrooms.The reasonable layout offers a comfortable life.",
    },
    {
      id: 2,
      src: "//storage.net-fs.com/hosting/6778892/6/index.htm",
      imgSrc: BangalowImg,
      title: "Bungalow House",
      description:
        "This practical style brings a relaxing, airy and cheerful atmosphere indoors. A decent life you deserve.",
    },
    {
      id: 3,
      src: "//storage.net-fs.com/hosting/6778892/7/index.htm",
      imgSrc: VillaImg,
      title: "Elite High School",
      description: "Elite High School",
    },
  ];

  const CloseTourPage = () => {
    setTourPage(0);
  };

  const ShowTour = (property) => {
    setTourPageId(property);
    setTourPage(1);
  };

  return (
    <>
      <Layout>
        <IntroComponent />
        <Container fluid="xl">
          <GroupTours groupTitle={"Latest Tours"} showTour={ShowTour} />
          <GroupTours groupTitle={"Featured Tours"} showTour={ShowTour} />
        </Container>
      </Layout>
      {tourPage ? (
        <TourPage closeTourPage={CloseTourPage} property={tourPageId} />
      ) : null}
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Realevr Tours || Home Page</title>
    <link rel="icon" href={logo} />
  </>
);

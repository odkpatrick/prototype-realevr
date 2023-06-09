import * as React from "react";
import { Link } from "gatsby";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import NavBar from "./navBar";
import "./layout.css";
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { FiPhone } from "@react-icons/all-files/fi/FiPhone";
import logo from "../images/file.png";

const SiteLogo = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo-img" />
        <span>Realevr</span>
      </Link>
    </div>
  );
};

const MyFooter = () => {
  return (
    <div className="main-footer-wrapper">
      <Container fluid="xl">
        <Row>
          <Col lg={6} xl={3}>
            <h5>About</h5>
            <p>
              Realevr is a registered company in Uganda dealing in prime Virtual
              Tours. We have shoot unshakable and highly Trusted 3D Virtual
              Tours. We strive to offer the best virtual tour service in regards
              to property sales and management, and other businesses.
            </p>
          </Col>
          <Col lg={6} xl={3}>
            <h5>Contact</h5>
            <p>
              <FiPhone /> +256771891323
            </p>
            <p>
              <FaWhatsapp /> +256702742333
            </p>
            <p>
              <FaRegEnvelope /> realevr@gmail.com
            </p>
          </Col>
          <Col lg={6} xl={3}>
            <h5>Featured Tours</h5>
            <p>
              <Link to="/">Furnished Apartments</Link>
            </p>
            <p>
              <Link to="/">Bank Sales</Link>
            </p>
            <p>
              <Link to="/">Individual Sales</Link>
            </p>
          </Col>
          <Col lg={6} xl={3}>
            <h5>Services</h5>
            <p>
              <Link to="/services">Create Virtual Tour</Link>
            </p>
            <p>
              <Link to="/services">Intergration</Link>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>© 2023 All rights reserved, Realevr</p>
          </Col>
          <Col>
            <Link to="#">Terms of service</Link>
            <Link to="#">Privacy Policy</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider
      breakpoints={["xl", "lg", "md", "sm", "xs"]}
      minBreakpoint="xs"
    >
      <header>
        <NavBar>
          <SiteLogo />
        </NavBar>
      </header>
      <main className="main-content-wrapper">{children}</main>
      <footer>
        <MyFooter />
      </footer>
    </ThemeProvider>
  );
};

export default Layout;

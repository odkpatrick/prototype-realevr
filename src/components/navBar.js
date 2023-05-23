import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navBar.css";

const MyNavBar = ({ children }) => {
  return (
    <Navbar key="md" bg="light" expand="md" className="mb-3 my-nav">
      <Container fluid>
        <Navbar.Brand href="/">{children}</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-md"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="Virtual Tours"
                id="offcanvasNavbarDropdown-expand-md"
              >
                <NavDropdown.Item href="/">
                  Furnished Apartments
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Bank Sales</NavDropdown.Item>
                <NavDropdown.Item href="/">Individual Sales</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Our Services"
                id="offcanvasNavbarDropdown-expand-md"
              >
                <NavDropdown.Item href="/">All Services</NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Create Virtual Tour
                </NavDropdown.Item>
                <NavDropdown.Item href="/">Intergration</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">About Us</Nav.Link>
              <Nav.Link href="/">Contact Us</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;

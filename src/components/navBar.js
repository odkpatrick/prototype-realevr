import * as React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";

const MyNavBar = ({ children }) => {
  return (
    <Navbar key="md" bg="light" expand="md" className="mb-3">
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
              <NavDropdown.Item href="/tours/properties">
                Properties
              </NavDropdown.Item>
              <NavDropdown.Item href="/tours/stores">Stores</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Our Services"
              id="offcanvasNavbarDropdown-expand-md"
            >
              <NavDropdown.Item href="/services">All Services</NavDropdown.Item>
              <NavDropdown.Item href="/account">
                Create Virtual Tour
              </NavDropdown.Item>
              <NavDropdown.Item href="/account">Intergration</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/account">
              <CgProfile />
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default MyNavBar;

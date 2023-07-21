import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navbarr() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">Micci</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#section1">About</Nav.Link>
              <Nav.Link href="#section2">Portfolio</Nav.Link>
              <Nav.Link href="#section3">Contact</Nav.Link>
              <Nav.Link href="#section4">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navbarr;

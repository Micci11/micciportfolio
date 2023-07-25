import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

function Navbarr() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Link to="/" className="navbar-brand">Micci</Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/resume" className="nav-link">Resume</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navbarr;

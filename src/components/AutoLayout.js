import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './Navbarr';
import Footer from './Footerr';

const AutoLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Container className="mt-5">
          {children} {/* Render the content of the current page */}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default AutoLayout;

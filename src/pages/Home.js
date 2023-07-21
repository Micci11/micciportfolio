import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AutoLayout from '../components/AutoLayout';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <AutoLayout>
      <Container>
        {/* Section 1 */}
        <Row id="section1">
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>About</h2>
            <Row>
              Hello, I'm Micci! I am a creative and versatile professional with experience in both UX design and full-stack web development. Prior to pursuing my current program in full-stack web development at George Washington University, I honed my UX design skills and gained valuable experience creating intuitive and engaging user interfaces.
            </Row>
          </Col>
        </Row>

        {/* Section 2 */}
        <Row id="section2">
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>Portfolio</h2>
            {/* Add your portfolio content here */}
          </Col>
        </Row>

        {/* Section 3 */}
        <Row id="section3">
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>Contact</h2>
            {/* Add your contact form or contact details here */}
          </Col>
        </Row>

        {/* Section 4 */}
        <Row id="section4">
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>Resume</h2>
            {/* Add your resume or a link to your resume here */}
          </Col>
        </Row>

        {/* Add more sections here as needed */}
      </Container>
      {/* Your additional content goes here */}
    </AutoLayout>
  );
};

export default Home;

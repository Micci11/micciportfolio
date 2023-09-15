import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AutoLayout from '../components/AutoLayout';
import '../style/style.css';

const Resume = () => {
  return (
    <AutoLayout>
      <Container>
        {/* Section 4 */}
        <Row id="section4" className="section">
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>Resume</h2>
            {/* Add your resume content or link here */}
            <p>This is a summary of my qualifications and experiences...</p>
            <a href="/public/MicciResume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume (PDF)
            </a>
          </Col>
        </Row>

        {/* Add more sections here as needed */}
      </Container>
      {/* Your additional content goes here */}
    </AutoLayout>
  );
};

export default Resume;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <Container>
      <h1>My Projects</h1>
      <Row xs={1} md={2} className="g-4">
        {/* Repeat this Col for every project */}
        <Col>
          <div>
            <h2>Project Title</h2>
            <p>Short project description...</p>
            <small className="text-muted">
              <a href="/link-to-deployed-application">Deployed Application</a> | 
              <a href="/link-to-github-repository">Github Repository</a>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;

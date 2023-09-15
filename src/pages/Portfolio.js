import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AutoLayout from '../components/AutoLayout';
import '../style/style.css';

const ApplicationBox = ({ title, description, imageUrl, liveLink, githubLink }) => {
  return (
    <Col md={4} sm={6}>
      <div className="application-box">
        <img src={imageUrl} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="button-group">
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            {/* <button className="btn btn-primary">Live Demo</button> */}
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary">GitHub</button>
          </a>
        </div>
      </div>
    </Col>
  );
};

const Portfolio = () => {
  return (
    <AutoLayout>
      <Container>
        {/* Section 2 */}
        <Row id="section2" className="section">
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>Portfolio</h2>
            <Row>
              {/* Application 1 */}
              <ApplicationBox
                title="Geo-Pairing"
                description="MERN Stack App"
                imageUrl="images/Desktop - 1.png"
                liveLink="https://www.example.com/app-1" 
                githubLink="https://github.com/iangoodwin173/geo-pairing"
              />

              {/* Application 2 */}
              <ApplicationBox
                title="Employee Tracker"
                description=". This command-line application provides a streamlined user interface to assist with tasks."
                imageUrl="images/employee.png" 
                liveLink="https://www.example.com/app-2" 
                githubLink="https://github.com/Micci11/12employeetracker"
              />

              {/* Application 3 */}
              <ApplicationBox
                title="README Generator"
                description="README Generator is a command-line application"
                imageUrl="images/readmeee.png"
                liveLink="https://www.example.com/app-3"
                githubLink="https://github.com/Micci11/readmegenerator9"
              />

              {/* Application 4 */}
              <ApplicationBox
                title="Fantastic Umbrella"
                description=" e-commerce site by configuring a working Express.js API to use Sequelize "
                imageUrl="images/screenshot1.png"
                liveLink="https://www.example.com/app-4" 
                githubLink="https://github.com/Micci11/13fantastic-umbrella"
              />

              {/* Application 5 */}
              <ApplicationBox
                title="Weather API"
                description=" weather dashboard that allows users to search for a city and view weather"
                imageUrl="images/Weather-Api.jpg"
                liveLink="https://www.example.com/app-5" 
                githubLink="https://github.com/Micci11/weatherAPI6"
              />

              {/* Application 6 */}
              <ApplicationBox
                title="Password Generator"
                description="Generator built with Javascript"
                imageUrl="images/pic.png"
                liveLink="https://www.example.com/app-6" 
                githubLink="https://github.com/Micci11/challenge3passwordgenerator"
              />
            </Row>
          </Col>
        </Row>

        {/* Add more sections here as needed */}
      </Container>
      {/* Your additional content goes here */}
    </AutoLayout>
  );
};

export default Portfolio;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AutoLayout from '../components/AutoLayout';
import '../style/style.css';

const About = () => {
  return (
    <AutoLayout>
      <Container>
        {/* Section 1 */}
        <Row id="section1" className="section">
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>About</h2>
            <Row>
              <p>
                Hello, I'm Micci! I am a creative and versatile professional with experience in both UX design and full-stack web development. Prior to pursuing my current program in full-stack web development at George Washington University, I honed my UX design skills and gained valuable experience creating intuitive and engaging user interfaces.
              </p>
              <p>
                My coursework in full-stack web development has equipped me with essential skills in HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, MongoDB, MySQL, Git, and more. In addition, my background in UX design has given me a unique perspective on user-centered design and the importance of creating products that are both aesthetically pleasing and intuitive to use.
              </p>
              <p>
                Through hands-on projects and collaboration with my peers, I am building a robust portfolio of work that demonstrates my proficiency in full-stack web development.
              </p>
              <p>
                My ultimate goal is to leverage my skills in both UX design and full-stack web development to create innovative and impactful digital products. I am a dedicated and adaptable professional who is always seeking new challenges and opportunities to grow and learn.
              </p>
            </Row>
          </Col>
        </Row>

        {/* Add more sections here as needed */}
        {/* Section 2 (Portfolio), Section 3 (Contact), and Section 4 (Resume) are not included here. Add them as needed */}
        {/* You can also create separate components for each section, similar to what we did for the Portfolio component */}
      </Container>
      {/* Your additional content goes here */}
    </AutoLayout>
  );
};

export default About;

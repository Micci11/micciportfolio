import React from 'react';
import { Container, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <h1>About Me</h1>
      <Image src="/path-to-your-image.jpg" roundedCircle />
      <p>This is a short bio about me...</p>
    </Container>
  );
};

export default About;

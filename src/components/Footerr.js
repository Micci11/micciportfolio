import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        <div>
          {/* GitHub Profile Link */}
          <a href="https://github.com/micci11" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>

          {/* LinkedIn Profile Link */}
          <a href="https://www.linkedin.com/in/miccibenner/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>

          {/* Stack Overflow Profile Link */}
          <a href="https://stackoverflow.com/users/22279012/micci-benner" target="_blank" rel="noopener noreferrer">
            <FaStackOverflow className="footer-icon" />
          </a>
        </div>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;

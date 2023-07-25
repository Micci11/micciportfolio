import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import the Form and Button components
import { useForm } from 'react-hook-form'; // Import the useForm hook
import AutoLayout from '../components/AutoLayout';
import '../style/style.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <AutoLayout>
      <Container>
        <Row id="section3" className="section"> {/* Add the id for section navigation */}
          <Col>
            <h2 style={{ fontWeight: 'bold' }}>Contact Me</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control {...register('name', { required: "Name is required." })} placeholder="Name" />
                {errors.name && <p>{errors.name.message}</p>}
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" {...register('email', { required: "Email is required." })} placeholder="Enter email" />
                {errors.email && <p>{errors.email.message}</p>}
              </Form.Group>

              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} {...register('message', { required: "Message is required." })} />
                {errors.message && <p>{errors.message.message}</p>}
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="section">
          <Col>
            <p>Email: miccibenner@gmail.com</p>
            <p>Phone: 540-656-8132</p>
          </Col>
        </Row>
      </Container>
    </AutoLayout>
  );
};

export default Contact;

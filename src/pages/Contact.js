import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Contact Me</h1>
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
    </Container>
  );
};

export default Contact;

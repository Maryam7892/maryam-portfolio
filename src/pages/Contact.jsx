import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 500px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #1f2937;
  color: #ffffff;
  border: 1px solid #374151;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #1f2937;
  color: #ffffff;
  border: 1px solid #374151;
`;

const Button = styled.button`
  background-color: #14b8a6;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d9488;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:maryamamjad7892@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (%0AFrom: ${formData.email})`;
  };

  return (
    <Wrapper>
      <SectionTitle title="Contact Me" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></TextArea>
        <Button type="submit">Send Message</Button>
      </Form>
    </Wrapper>
  );
};

export default Contact;
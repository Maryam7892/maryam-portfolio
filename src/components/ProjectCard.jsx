import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #1f2937;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 10px rgba(20, 184, 166, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 15px rgba(20, 184, 166, 0.5);
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #d1d5db;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const Tech = styled.p`
  color: #5eead4;
  font-size: 0.75rem;
`;

const ProjectCard = ({ title, description, tech }) => (
  <Card>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Tech>{tech}</Tech>
  </Card>
);

export default ProjectCard;

import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #14b8a6;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const SectionTitle = ({ title }) => <Title>{title}</Title>;

export default SectionTitle;
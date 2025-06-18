import React from "react";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #d1d5db;
  font-size: 1rem;
`;

const certs = [
  "Convolutional Neural Networks – DeepLearning.AI",
  "Generative AI with LLMs – DeepLearning.AI",
  "AI Agents Using RAG & LangChain – IBM",
  "AWS Cloud Technical Essentials – AWS",
  "Reinforcement Learning – University of Alberta",
  "Charts & Dashboards with Google Sheets – Coursera"
];

const Certifications = () => (
  <Wrapper>
    <SectionTitle title="Certifications" />
    <List>
      {certs.map((cert, index) => (
        <li key={index}>{cert}</li>
      ))}
    </List>
  </Wrapper>
);

export default Certifications;
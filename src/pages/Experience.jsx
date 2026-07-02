import React from "react";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const Entry = styled.div`
  border-left: 4px solid #14b8a6;
  padding-left: 1rem;
  margin-bottom: 2rem;
`;

const Role = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
`;

const Company = styled.span`
  color: #5eead4;
`;

const Duration = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
`;

const Detail = styled.p`
  color: #d1d5db;
  margin-top: 0.5rem;
`;

const experiences = [
  {
    role: "Junior Machine Learning Engineer",
    company: "Tensor Labs",
    duration: "Sep 2025 - Present",
    details:
      "Built real-time crypto breakout prediction pipelines (Eth Breakout), a text-to-SQL + knowledge graph query engine (DiscoverIQ) with Neo4j and Qdrant, and core modules of a multi-modal MedGemma clinical assistant. Delivered an internal workshop on Mem0 and Harness Engineering."
  },
  {
    role: "AI Intern",
    company: "AIM Lab Islamabad",
    duration: "Jun 2023 - Aug 2023",
    details: "Researched AI models, implemented ML algorithms, and integrated APIs for deployment."
  },
  {
    role: "Lab Demonstrator - Machine Learning",
    company: "FAST NUCES Islamabad",
    duration: "Sep 2024 - Dec 2024",
    details: "Assisted in feature engineering, model optimization, and hyperparameter tuning."
  }
];

const Experience = () => (
  <Wrapper>
    <SectionTitle title="Experience" />
    {experiences.map((exp, index) => (
      <Entry key={index}>
        <Role>
          {exp.role} – <Company>{exp.company}</Company>
        </Role>
        <Duration>{exp.duration}</Duration>
        <Detail>{exp.details}</Detail>
      </Entry>
    ))}
  </Wrapper>
);

export default Experience;
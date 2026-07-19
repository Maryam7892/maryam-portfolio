import React from "react";
import styled, { keyframes } from "styled-components";
import TypeOnView from "../components/TypeOnView";

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: var(--panel-2);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-family: var(--font-pixel);
  font-size: 2.4rem;
  color: var(--ink);
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: 1.25rem 0;
  position: relative;
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeTrack = styled.div`
  display: inline-flex;
  animation: ${scroll} 40s linear infinite;
`;

const Skill = styled.span`
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.4rem 0.9rem;
  background-color: var(--panel);
  color: var(--ink);
  font-weight: 700;
  font-size: 0.8rem;
  border: 1.5px solid var(--border);
  border-radius: 6px;

  &:nth-child(3n+2) {
    background-color: var(--coral-tint);
    border-color: var(--coral-dark);
    color: var(--coral-dark);
  }

  &:nth-child(3n+3) {
    background-color: var(--blue-tint);
    border-color: var(--blue-dark);
    color: var(--blue-dark);
  }
`;

const SkillGroupTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 2rem 0 0.75rem;
  color: var(--muted);
  text-transform: uppercase;

  &::before {
    content: "// ";
    color: var(--coral-dark);
  }
`;

const DoubleTrack = ({ skills }) => (
  <MarqueeWrapper>
    <MarqueeTrack>
      {skills.concat(skills).map((skill, i) => (
        <Skill key={i}>{skill}</Skill>
      ))}
    </MarqueeTrack>
  </MarqueeWrapper>
);

const AnimatedSkills = () => {
  return (
    <Section id="skills">
      <TypeOnView as={SectionTitle} text="my skills" speed={40} />

      <SkillGroupTitle>Programming</SkillGroupTitle>
      <DoubleTrack skills={["Python", "C++", "C", "SQL"]} />

      <SkillGroupTitle>ML/DL Frameworks</SkillGroupTitle>
      <DoubleTrack skills={["TensorFlow", "PyTorch", "Keras", "Scikit-learn"]} />

      <SkillGroupTitle>LLM & GenAI</SkillGroupTitle>
      <DoubleTrack skills={["LangChain", "Groq", "Hugging Face", "Transformers", "RAG", "Vector Databases", "Prompt Engineering", "RAGAS", "DeepEval", "Mem0", "Whisper"]} />

      <SkillGroupTitle>Data / NLP / CV</SkillGroupTitle>
      <DoubleTrack skills={["Pandas", "NumPy", "Matplotlib", "OpenCV", "NLTK", "SpaCy", "Tesseract"]} />

      <SkillGroupTitle>Databases</SkillGroupTitle>
      <DoubleTrack skills={["PostgreSQL", "MySQL", "Neo4j", "Qdrant", "SQLAlchemy"]} />

      <SkillGroupTitle>MLOps / DevOps</SkillGroupTitle>
      <DoubleTrack skills={["Docker", "Kubernetes", "Jenkins", "Airflow", "MLFlow", "CI/CD", "DVC", "Git"]} />

      <SkillGroupTitle>Cloud & Other</SkillGroupTitle>
      <DoubleTrack skills={["AWS", "Flask", "Streamlit", "Selenium", "Jupyter Notebook"]} />
    </Section>
  );
};

export default AnimatedSkills;

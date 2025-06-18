import React from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #fff0ee;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: #ff6b6b;
  margin-bottom: 2rem;
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin: 1.5rem 0;
  position: relative;
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
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  background-color: #ffe6e6;
  color: #d94f4f;
  font-weight: 500;
  border-radius: 30px;
  box-shadow: 0 2px 6px rgba(255, 182, 193, 0.2);
`;

const SkillGroupTitle = styled.h4`
  font-size: 1.25rem;
  margin: 2rem 0 1rem;
  color: #e35656;
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
      <SectionTitle>My Skills</SectionTitle>

      <SkillGroupTitle>Programming Languages</SkillGroupTitle>
      <DoubleTrack skills={["Python", "C", "C++", "SQL", "Javascript (basic)"]} />

      <SkillGroupTitle>Frameworks & Libraries</SkillGroupTitle>
      <DoubleTrack skills={["Numpy", "Pandas", "Scikit-Learn", "NLTK", "Matplotlib", "SpaCy", "TensorFlow", "PyTorch", "Cv2", "Keras", "Flask", "Selenium", "Hugging Face", "Transformers", "Tesseract"]} />

      <SkillGroupTitle>Data & DevOps Tools</SkillGroupTitle>
      <DoubleTrack skills={["Docker", "Apache Airflow", "Kubernetes", "MySQL", "Git", "Jenkins", "CI/CD pipelines", "Jupyter Notebook"]} />

      <SkillGroupTitle>Soft Skills</SkillGroupTitle>
      <DoubleTrack skills={["Leadership", "Event management", "Time management", "Teamwork", "Communication", "Problem Solving"]} />
    </Section>
  );
};

export default AnimatedSkills;
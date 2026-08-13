import React from "react";
import styled from "styled-components";
import TypeOnView from "../components/TypeOnView";

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: var(--panel-2);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);

  @media (max-width: 600px) {
    padding: 2.5rem 1.25rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-pixel);
  font-size: clamp(1.8rem, 6vw, 2.4rem);
  color: var(--ink);
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: var(--panel);
  border: 2px solid var(--border);
  border-radius: 10px;
  padding: 1rem 1.1rem;
  box-shadow: var(--shadow-sm);
`;

const CardTitle = styled.h3`
  font-size: 0.88rem;
  color: var(--ink);
  margin: 0 0 0.6rem;

  &::before {
    content: "> ";
    color: var(--coral);
  }
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.28rem 0.65rem;
  background: var(--coral-tint);
  border: 1.5px solid var(--coral-dark);
  border-radius: 999px;
  color: var(--blue);
  font-size: 0.7rem;
`;

const GROUPS = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "C", "SQL"],
  },
  {
    title: "ML/DL Frameworks",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
  },
  {
    title: "LLM & GenAI",
    skills: ["LangChain", "Groq", "Hugging Face", "Transformers", "RAG", "Vector Databases", "Prompt Engineering", "RAGAS", "DeepEval", "Mem0", "Whisper"],
  },
  {
    title: "Data, NLP & CV",
    skills: ["Pandas", "NumPy", "Matplotlib", "OpenCV", "NLTK", "SpaCy", "Tesseract"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Neo4j", "Qdrant", "SQLAlchemy"],
  },
  {
    title: "MLOps, Cloud & Tools",
    skills: ["Docker", "Kubernetes", "Jenkins", "Airflow", "MLFlow", "CI/CD", "DVC", "Git", "AWS", "Flask", "Streamlit", "Selenium", "Jupyter Notebook"],
  },
];

const AnimatedSkills = () => {
  return (
    <Section id="skills">
      <TypeOnView as={SectionTitle} text="skills & technologies" speed={35} />
      <Grid>
        {GROUPS.map((group) => (
          <Card key={group.title}>
            <CardTitle>{group.title}</CardTitle>
            <TagRow>
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </TagRow>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default AnimatedSkills;

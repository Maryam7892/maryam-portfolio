import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { motion } from "framer-motion";
import ResumeDownload from "./components/ResumeDownload";
import AnimatedSkills from "./pages/AnimatedSkills";
import TamagotchiPet from "./components/TamagotchiPet";
import TypeOnView from "./components/TypeOnView";
import FloatingChat from "./components/FloatingChat";
import { playClick, playSend } from "./utils/sound";
import { Typewriter } from 'react-simple-typewriter';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Section = styled(motion.section)`
  padding: 6rem 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  background: var(--bg);
  padding: 2rem;
`;

const HeroKicker = styled.div`
  font-size: 0.8rem;
  letter-spacing: 3px;
  color: var(--coral-dark);
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;

  &::before {
    content: "[ ";
  }
  &::after {
    content: " ]";
  }
`;

const HeroTitle = styled.h1`
  font-family: var(--font-pixel);
  font-size: 3.2rem;
  color: var(--ink);
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: var(--muted);
  margin-bottom: 2rem;
  max-width: 480px;
  line-height: 1.6;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const HeroButton = styled.a`
  background-color: var(--ink);
  color: var(--panel);
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: 2px solid var(--border);
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &::before {
    content: "[ ";
  }
  &::after {
    content: " ]";
  }

  &:hover {
    text-decoration: none;
    background-color: var(--accent-dark);
    transform: translate(-1px, -1px);
    box-shadow: 5px 5px 0 var(--border);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 var(--border);
  }
`;

const HeroButtonGhost = styled(HeroButton)`
  background-color: var(--coral);
  color: var(--panel);
  border-color: var(--coral-dark);

  &:hover {
    background-color: var(--coral-dark);
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-pixel);
  font-size: 2.4rem;
  margin-bottom: 2rem;
  color: var(--ink);
  text-align: center;
  letter-spacing: 1px;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

const ProjectCard = styled.div`
  background-color: var(--panel);
  border: 2px solid var(--border);
  border-top: 6px solid var(--accent-dark);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:nth-child(3n+2) {
    border-top-color: var(--coral);
  }

  &:nth-child(3n+3) {
    border-top-color: var(--blue);
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--border);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.05rem;
  color: var(--ink);
  margin-bottom: 0.6rem;

  &::before {
    content: "> ";
    color: var(--accent-dark);
  }
`;

const ProjectDesc = styled.p`
  font-size: 0.88rem;
  color: var(--muted);
  line-height: 1.6;

  strong {
    color: var(--ink);
  }
`;

const ExperienceEntry = styled.div`
  border-left: 4px solid var(--accent-dark);
  padding-left: 1.25rem;
  margin-bottom: 2rem;

  &:nth-child(2) {
    border-left-color: var(--coral);
  }

  &:nth-child(3) {
    border-left-color: var(--blue);
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ink);
`;

const ExperienceOrg = styled.span`
  color: var(--coral-dark);
`;

const ExperienceDate = styled.p`
  font-size: 0.8rem;
  color: var(--muted-2);
  font-family: var(--font-mono);
`;

const ExperienceDetail = styled.ul`
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;

  li {
    margin-bottom: 0.35rem;
  }

  strong {
    color: var(--ink);
  }
`;

const EducationEntry = styled.div`
  border-left: 4px solid var(--accent-dark);
  padding-left: 1.25rem;
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactMeta = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: var(--muted);
  margin-top: -1rem;
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid var(--border);
  border-radius: 6px;
  background: var(--panel);
  font-family: var(--font-mono);
  color: var(--ink);

  &::placeholder {
    color: var(--muted-2);
  }

  &:focus {
    outline: none;
    box-shadow: var(--shadow-sm);
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid var(--border);
  border-radius: 6px;
  background: var(--panel);
  font-family: var(--font-mono);
  color: var(--ink);
  resize: none;

  &::placeholder {
    color: var(--muted-2);
  }

  &:focus {
    outline: none;
    box-shadow: var(--shadow-sm);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--coral);
  color: var(--panel);
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 6px;
  border: 2px solid var(--coral-dark);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &::before {
    content: "[ ";
  }
  &::after {
    content: " ]";
  }

  &:hover {
    background-color: var(--coral-dark);
    transform: translate(-1px, -1px);
    box-shadow: 5px 5px 0 var(--border);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 var(--border);
  }
`;

const CertificateCard = styled.div`
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${CertificateCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--panel);
  border: 2px solid var(--border);
  border-top: 6px solid var(--coral);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 1rem;
  }

  p {
    font-size: 0.85rem;
    color: var(--muted);
  }

  ${CertificateCard}:nth-child(3n+2) & {
    border-top-color: var(--blue);
  }

  ${CertificateCard}:nth-child(3n+3) & {
    border-top-color: var(--accent-dark);
  }
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--blue-tint);
  border: 2px solid var(--border);
  color: var(--ink);
  padding: 1rem;
  border-radius: 10px;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.88rem;
  text-align: center;
`;

function App() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const updateCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    cursor.style.cssText = `
      position: fixed;
      width: 22px;
      height: 22px;
      border: 2px solid #d8cdb0;
      border-radius: 4px;
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: 9999;
      background: transparent;
    `;

    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
      cursor.remove();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero id="home">
        <HeroKicker>AI/ML Engineer</HeroKicker>
        <TypeOnView as={HeroTitle} text="Hi, I'm Maryam." speed={55} />
        <HeroSubtitle>
          Junior ML Engineer @ Tensor Labs, building production-grade LLM systems:
          real-time prediction pipelines, RAG architectures, and multi-modal
          healthcare AI. Things that beep, click, and occasionally judge my life choices.
        </HeroSubtitle>
        <TamagotchiPet />
        <HeroButtons style={{ marginTop: "2rem" }}>
          <HeroButton href="#projects" onClick={playClick}>view my work</HeroButton>
          <HeroButtonGhost href="#resume" onClick={playClick}>get resume</HeroButtonGhost>
        </HeroButtons>
      </Hero>

      <Section id="about" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="who am i really?" speed={30} />
        <motion.p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            color: "var(--muted)",
            minHeight: "9rem"
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typewriter
            words={[
              "I'm Maryam, an AI/ML Engineer specializing in production-grade, LLM-powered systems: real-time prediction pipelines, Retrieval-Augmented Generation (RAG) architectures, knowledge-graph-based query engines, and multi-modal healthcare AI. Strong foundation in Python, Deep Learning, Computer Vision, and NLP, with hands-on experience across the full ML lifecycle: data pipeline engineering, model integration, evaluation, and cloud deployment on AWS."
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={45}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </motion.p>
      </Section>


      <Section id="projects" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="key projects" speed={40} />
        <ProjectGrid>
          <ProjectCard>
            <ProjectTitle>Eth Breakout: Real-Time Crypto Prediction System</ProjectTitle>
            <ProjectDesc>
              Real-time breakout prediction system for Ethereum, Dogecoin, and Solana using rule-based and machine learning signal generation across 5-minute market candles, plus a liquidation/liquidity heatmap module visualizing leveraged position risk from open interest and funding-rate data.
              <br />
              <strong>Technologies:</strong> Python, SQLAlchemy, Pandas, Scikit-learn, PostgreSQL, WebSockets, Streamlit
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>DiscoverIQ: RAG-Based Text-to-SQL & Knowledge Graph Query Engine</ProjectTitle>
            <ProjectDesc>
              End-to-end Retrieval-Augmented Generation (RAG) system that converts natural language into executable SQL queries, combining Neo4j knowledge-graph retrieval, Qdrant vector search, and LLM-based query generation for schema-aware SQL execution.
              <br />
              <strong>Technologies:</strong> Python, Neo4j, Qdrant, PostgreSQL, LangChain, Groq LLM
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>MedGemma: Multi-Modal Clinical AI Assistant</ProjectTitle>
            <ProjectDesc>
              Full-stack, multi-modal clinical AI assistant integrating vision-language models for medical image diagnostics, OCR-based prescription reading, and LLM-driven drug-interaction checking, alongside personal health tracking.
              <br />
              <strong>Technologies:</strong> MedGemma-4b-it, Whisper-large-v3, TxGemma-9b-chat, FDA API, Python, Flask
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>LLM Evaluation Toolkit</ProjectTitle>
            <ProjectDesc>
              Open-source evaluation toolkit covering 12 LLM evaluation categories (text generation, summarization, RAG, text-to-SQL, safety & robustness, long-context reasoning, multi-modal, and more), with runnable notebooks and an interactive Streamlit dashboard; used as the basis for an internal engineering workshop.
              <br />
              <strong>Technologies:</strong> Python, Groq, RAGAS, DeepEval, HuggingFace Evaluate, PromptBench, Streamlit
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Straight Egyptian Arabian Horse Knowledge Graph</ProjectTitle>
            <ProjectDesc>
              Interactive, fully Dockerized web app for exploring horse pedigrees, show results, stables, and bloodlines through a Neo4j graph database.
              <br />
              <strong>Technologies:</strong> Python, Pandas, Neo4j, Streamlit, PyVis, Docker
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>TherapEase: Autism Therapy Assistant</ProjectTitle>
            <ProjectDesc>
              3D digital twin-based system with real-time emotion detection, automated diagnostic support, and a therapist dashboard for personalized autism therapy (final year project).
              <br />
              <strong>Technologies:</strong> React, Three.js, OpenCV, Flask, TensorFlow, DeepFace, MediaPipe
            </ProjectDesc>
          </ProjectCard>
        </ProjectGrid>
      </Section>

      <AnimatedSkills />

      <Section id="experience" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="experience" speed={40} />
        <ExperienceEntry>
          <ExperienceTitle>Junior Machine Learning Engineer <ExperienceOrg>@ Tensor Labs</ExperienceOrg></ExperienceTitle>
          <ExperienceDate>Sep 2025 – Present</ExperienceDate>
          <ExperienceDetail>
            <li><strong>Real-time ML prediction pipelines:</strong> designed and deployed pipelines to detect breakout patterns across Ethereum, Dogecoin, and Solana, processing streaming market data at 5-minute intervals.</li>
            <li><strong>RAG-based query engine (DiscoverIQ):</strong> engineered a RAG pipeline translating natural language into SQL, integrating a Neo4j knowledge graph, Qdrant vector search, and LLM-based query generation over PostgreSQL.</li>
            <li><strong>Multi-modal clinical AI assistant (MedGemma):</strong> built core modules for medical image diagnostics, prescription OCR, and drug-interaction checks using vision-language and LLM models.</li>
            <li><strong>Data pipeline reliability:</strong> diagnosed and resolved timestamp/interval synchronization and signal threshold issues to improve prediction reliability and uptime.</li>
            <li><strong>Technical workshops:</strong> delivered internal workshops on Mem0 (LLM memory systems) and Harness Engineering; authored an article on Harness Engineering and Open Knowledge Format (Medium, forthcoming).</li>
          </ExperienceDetail>
        </ExperienceEntry>
        <ExperienceEntry>
          <ExperienceTitle>Artificial Intelligence Intern <ExperienceOrg>@ AIM Lab, Islamabad</ExperienceOrg></ExperienceTitle>
          <ExperienceDate>Jun 2023 – Aug 2023</ExperienceDate>
          <ExperienceDetail>
            <li>Built a tool that auto-generates presentation slide decks from natural language prompts using NLP and computer vision techniques.</li>
            <li>Applied pre-trained vision models for content understanding and image matching tasks.</li>
          </ExperienceDetail>
        </ExperienceEntry>
        <ExperienceEntry>
          <ExperienceTitle>Lab Demonstrator – Machine Learning <ExperienceOrg>@ FAST NUCES Islamabad</ExperienceOrg></ExperienceTitle>
          <ExperienceDate>Sep 2024 – Dec 2024</ExperienceDate>
          <ExperienceDetail>
            <li>Led weekly lab sessions on feature engineering, hyperparameter tuning, and applied machine learning demonstrations for undergraduate students.</li>
          </ExperienceDetail>
        </ExperienceEntry>
      </Section>

      <Section id="education" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="education" speed={40} />
        <EducationEntry>
          <ExperienceTitle>B.S. in Artificial Intelligence <ExperienceOrg>@ FAST NUCES, Islamabad</ExperienceOrg></ExperienceTitle>
          <ExperienceDate>Jul 2021 – Jun 2025</ExperienceDate>
          <ExperienceDetail>
            <li>Relevant coursework: Deep Learning, Generative AI, Computer Vision, NLP.</li>
          </ExperienceDetail>
        </EducationEntry>
      </Section>

      <Section id="certifications" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="certifications" speed={40} />
        <CertificateGrid>
          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>AWS Certified AI Practitioner</h3>
                <p>AWS, Passed March 2026</p>
              </CardFront>
              <CardBack>
                <p>Generative AI concepts, AWS AI/ML services</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>Generative AI with LLMs</h3>
                <p>DeepLearning.AI, 2025</p>
              </CardFront>
              <CardBack>
                <p>Prompting, Transformers, Chatbots</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>AI Agents with RAG & LangChain</h3>
                <p>IBM, 2025</p>
              </CardFront>
              <CardBack>
                <p>LangChain, RAG, Retrieval QA, LLM APIs</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>Convolutional Neural Networks</h3>
                <p>DeepLearning.AI, 2024</p>
              </CardFront>
              <CardBack>
                <p>CNNs, Keras, TensorFlow, Feature Maps</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>AWS Cloud Essentials</h3>
                <p>AWS, 2025</p>
              </CardFront>
              <CardBack>
                <p>AWS EC2, S3, IAM, Lambda</p>
              </CardBack>
            </CardInner>
          </CertificateCard>
        </CertificateGrid>
      </Section>

      <ResumeDownload />

      <Section id="contact" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="contact me" speed={40} />
        <ContactMeta>
          maryamamjad7892@gmail.com &nbsp;·&nbsp; +92-323-5519235 &nbsp;·&nbsp; Islamabad, Pakistan
        </ContactMeta>
        <ContactForm onSubmit={(e) => {
          e.preventDefault();
          playSend();
          window.location.href = "mailto:maryamamjad7892@gmail.com";
        }}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea rows="5" placeholder="Your Message" required></Textarea>
          <SubmitButton type="submit">send message</SubmitButton>
        </ContactForm>
      </Section>

      <FloatingChat />
    </div>
  );
}

export default App;

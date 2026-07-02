import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { motion } from "framer-motion";
import ResumeDownload from "./components/ResumeDownload";
import AnimatedSkills from "./pages/AnimatedSkills";
import TamagotchiPet from "./components/TamagotchiPet";
import TypeOnView from "./components/TypeOnView";
import ChatTerminal from "./components/ChatTerminal";
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

const ExperienceDetail = styled.p`
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
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
      border: 2px solid #3a3630;
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
        <HeroKicker>portfolio_os v1.0</HeroKicker>
        <TypeOnView as={HeroTitle} text="Hi, I'm Maryam." speed={55} />
        <HeroSubtitle>
          Junior ML Engineer @ Tensor Labs. Building things that beep, click,
          and occasionally judge my life choices.
        </HeroSubtitle>
        <TamagotchiPet />
        <HeroButtons style={{ marginTop: "2rem" }}>
          <HeroButton href="#projects">view my work</HeroButton>
          <HeroButtonGhost href="#resume">get resume</HeroButtonGhost>
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
              "I'm Maryam — a Junior ML Engineer at Tensor Labs who blends production AI engineering with a designer's soul. I build real-time prediction pipelines, RAG/knowledge-graph systems, and multi-modal healthcare AI. Deep into LLMs, Computer Vision, and NLP. Crafting intelligent systems that feel intuitive and human. Tech should be functional and beautiful."
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
        <TypeOnView as={SectionTitle} text="projects" speed={40} />
        <ProjectGrid>
          <ProjectCard>
            <ProjectTitle>Eth Breakout</ProjectTitle>
            <ProjectDesc>
              Real-time breakout prediction system for Ethereum, Dogecoin, and Solana using rule-based and ML signal logic across 5-min candles, plus a liquidation/liquidity heatmap built from open interest and funding rate data.
              <br />
              <strong>Technologies:</strong> Python, SQLAlchemy, Pandas, Scikit-learn, PostgreSQL, WebSockets, Streamlit
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>DiscoverIQ – Text-to-SQL & Knowledge Graph Query Engine</ProjectTitle>
            <ProjectDesc>
              Unified natural-language query pipeline that converts chat messages into executable SQL, combining knowledge graph context retrieval with schema-aware SQL generation.
              <br />
              <strong>Technologies:</strong> Python, Neo4j, Qdrant, PostgreSQL, LangChain, Groq LLM
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>MedGemma Multi-Modal Clinical Assistant</ProjectTitle>
            <ProjectDesc>
              Full-stack clinical assistant combining medical image diagnostics, prescription/medicine OCR, drug interaction checking, and personal health tracking.
              <br />
              <strong>Technologies:</strong> MedGemma-4b-it, Whisper-large-v3, TxGemma-9b-chat, FDA API, Python, Flask
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>LLM Evaluation Toolkit</ProjectTitle>
            <ProjectDesc>
              Hands-on toolkit covering 12 LLM evaluation categories with runnable notebooks and an interactive Streamlit dashboard, open-sourced on GitHub and used as the basis for an internal workshop.
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
            <ProjectTitle>TherapEase – Autism Therapy Assistant</ProjectTitle>
            <ProjectDesc>
              Developed a 3D digital twin-based system with real-time emotion detection, automated diagnostic support, and therapist dashboard for personalized autism therapy (Final Year Project).
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
            Built real-time crypto breakout prediction pipelines (Eth Breakout), a text-to-SQL + knowledge graph query engine (DiscoverIQ) with Neo4j and Qdrant, and core modules of a multi-modal MedGemma clinical assistant. Delivered an internal workshop on Mem0 and Harness Engineering, and authored an article on Harness Engineering and Open Knowledge Format (Medium, forthcoming).
          </ExperienceDetail>
        </ExperienceEntry>
        <ExperienceEntry>
          <ExperienceTitle>AI Intern <ExperienceOrg>@ AIM Lab Islamabad</ExperienceOrg></ExperienceTitle>
          <ExperienceDate>Jun 2023 – Aug 2023</ExperienceDate>
          <ExperienceDetail>
            Developed a website that generates slides from prompts, including relevant images and structured content.
          </ExperienceDetail>
        </ExperienceEntry>
        <ExperienceEntry>
          <ExperienceTitle>Lab Demonstrator – ML <ExperienceOrg>@ FAST NUCES</ExperienceOrg></ExperienceTitle>
          <ExperienceDate>Sep 2024 – Dec 2024</ExperienceDate>
          <ExperienceDetail>
            Assisted in feature engineering, model optimization, hyperparameter tuning, and conducted live demos.
          </ExperienceDetail>
        </ExperienceEntry>
      </Section>

      <Section id="certifications" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="certifications" speed={40} />
        <CertificateGrid>
          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>AWS Certified AI Practitioner</h3>
                <p>AWS – Passed, March 2026</p>
              </CardFront>
              <CardBack>
                <p>Generative AI concepts, AWS AI/ML services</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>Convolutional Neural Networks</h3>
                <p>DeepLearning.AI</p>
              </CardFront>
              <CardBack>
                <p>CNNs, Keras, TensorFlow, Feature Maps</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>Generative AI with LLMs</h3>
                <p>DeepLearning.AI</p>
              </CardFront>
              <CardBack>
                <p>Prompting, Transformers, Chatbots</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>AI Agents Using RAG & LangChain</h3>
                <p>IBM</p>
              </CardFront>
              <CardBack>
                <p>LangChain, RAG, Retrieval QA, LLM APIs</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>AWS Cloud Technical Essentials</h3>
                <p>AWS</p>
              </CardFront>
              <CardBack>
                <p>AWS EC2, S3, IAM, Lambda</p>
              </CardBack>
            </CardInner>
          </CertificateCard>
        </CertificateGrid>
      </Section>

      <ResumeDownload />

      <Section id="chat" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="ask me anything (professionally)" speed={25} />
        <p style={{
          textAlign: "center",
          fontSize: "0.85rem",
          color: "var(--muted)",
          marginTop: "-1rem",
          marginBottom: "2rem",
        }}>
          a small terminal bot that only knows about my work — try asking about a project or my stack.
        </p>
        <ChatTerminal />
      </Section>

      <Section id="contact" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="contact me" speed={40} />
        <ContactForm onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "mailto:maryamamjad7892@gmail.com";
        }}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea rows="5" placeholder="Your Message" required></Textarea>
          <SubmitButton type="submit">send message</SubmitButton>
        </ContactForm>
      </Section>
    </div>
  );
}

export default App;

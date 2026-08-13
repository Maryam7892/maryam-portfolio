import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { motion } from "framer-motion";
import ResumeDownload from "./components/ResumeDownload";
import AnimatedSkills from "./pages/AnimatedSkills";
import TamagotchiPet from "./components/TamagotchiPet";
import Blossom from "./components/Blossom";
import CatMascot from "./components/CatMascot";
import PixelIcon from "./components/PixelIcon";
import StickerIcon from "./components/StickerIcon";
import ScrollToTop from "./components/ScrollToTop";
import ChatLink from "./components/ChatLink";
import TypeOnView from "./components/TypeOnView";
import { playClick, playSend, startAmbient } from "./utils/sound";
import { Typewriter } from 'react-simple-typewriter';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Section = styled(motion.section)`
  padding: 6rem 2rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 3.5rem 1.25rem;
  }
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

  @media (max-width: 600px) {
    padding: 1.5rem 1rem;
    min-height: 92vh;
  }
`;

const HeroTitle = styled.h1`
  font-family: var(--font-pixel);
  font-size: clamp(2.1rem, 8vw, 3.2rem);
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

const PetRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  flex-wrap: wrap;
`;

const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--coral-tint);
  border: 1.5px solid var(--coral-dark);
  color: var(--blue);
  font-size: 0.78rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.75rem;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--coral);
    box-shadow: 0 0 6px var(--coral);
  }
`;

const RoleSubtitle = styled.h2`
  font-family: var(--font-mono);
  font-size: clamp(1.1rem, 3.5vw, 1.4rem);
  font-weight: 500;
  color: var(--muted);
  margin: 0 0 1rem;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const HeroButton = styled.a`
  background-color: var(--coral);
  color: #fff;
  padding: 0.8rem 1.75rem;
  border-radius: 999px;
  border: 2px solid var(--coral);
  font-weight: 500;
  font-size: 0.9rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    text-decoration: none;
    background-color: var(--coral-dark);
    border-color: var(--coral-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 111, 214, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

const HeroButtonGhost = styled(HeroButton)`
  background-color: transparent;
  color: var(--ink);
  border-color: var(--coral);

  &:hover {
    background-color: var(--coral-tint);
    border-color: var(--coral);
  }
`;

const SectionTitle = styled.h2`
  font-family: var(--font-pixel);
  font-size: clamp(1.8rem, 6vw, 2.4rem);
  margin-bottom: 2rem;
  color: var(--ink);
  text-align: center;
  letter-spacing: 1px;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutImageCol = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
`;

const ProjectCard = styled.div`
  display: flex;
  background-color: var(--panel);
  border: 2px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 7px 7px 0 var(--border);
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const ImageSlot = styled.div`
  width: 150px;
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--coral-tint), var(--panel-2) 75%);
  border-right: 2px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(185, 166, 255, 0.16) 1.5px, transparent 1.5px);
    background-size: 14px 14px;
  }

  @media (max-width: 560px) {
    width: 100%;
    height: 110px;
    border-right: none;
    border-bottom: 2px solid var(--border);
  }
`;

const ProjectBody = styled.div`
  padding: 1.1rem 1.3rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectTitle = styled.h3`
  font-size: 0.98rem;
  color: var(--ink);
  margin: 0 0 0.4rem;

  &::before {
    content: "> ";
    color: var(--accent-dark);
  }
`;

const ProjectDesc = styled.p`
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  strong {
    color: var(--ink);
  }
`;

const TechLine = styled.p`
  font-size: 0.72rem;
  color: var(--muted-2);
  margin: 0.5rem 0 0;

  strong {
    color: var(--coral);
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    left: 27px;
    top: 56px;
    bottom: -2rem;
    width: 2px;
    background: var(--coral-dark);
  }
`;

const YearBadge = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--coral);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 500;
  z-index: 1;
  box-shadow: 0 0 0 4px var(--panel-2);
`;

const TimelineCard = styled.div`
  background: var(--panel);
  border: 2px solid var(--border);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  flex: 1;
  min-width: 0;
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
  width: 100%;
  box-sizing: border-box;
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
  width: 100%;
  box-sizing: border-box;
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
  color: #fff;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 999px;
  border: 2px solid var(--coral);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    background-color: var(--coral-dark);
    border-color: var(--coral-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 111, 214, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CertificateCard = styled.div`
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  transition: transform 0.7s;
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
  background: radial-gradient(circle at 50% 30%, var(--coral-tint), var(--panel) 70%);
  border: 2px solid var(--border);
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  gap: 0.5rem;

  h3 {
    font-size: 0.98rem;
    margin: 0.4rem 0 0.1rem;
  }

  p {
    font-size: 0.8rem;
    color: var(--muted);
    margin: 0;
  }
`;

const UnlockedTag = styled.div`
  font-family: var(--font-arcade);
  font-size: 0.5rem;
  color: var(--coral);
  letter-spacing: 1px;
`;

const MedalGlow = styled.div`
  filter: drop-shadow(0 0 8px var(--coral));
`;

const IssuerPill = styled.p`
  display: inline-block;
  background: var(--panel-2);
  border: 1.5px solid var(--coral-dark);
  border-radius: 20px;
  padding: 0.25rem 0.8rem !important;
  margin-top: 0.3rem !important;
  color: var(--ink) !important;
  font-size: 0.72rem !important;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: var(--blue-tint);
  border: 2px solid var(--border);
  color: var(--ink);
  padding: 1.25rem;
  border-radius: 10px;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.88rem;
  text-align: center;
  gap: 0.6rem;
`;

const BackLabel = styled.div`
  font-family: var(--font-arcade);
  font-size: 0.5rem;
  color: var(--coral);
  letter-spacing: 1px;
`;

const LockedFront = styled(CardFront)`
  background: var(--panel);
  opacity: 0.6;

  h3 {
    color: var(--muted);
  }
`;

const LockedTag = styled(UnlockedTag)`
  color: var(--muted-2);
`;

function App() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    const updateCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 11}px, ${e.clientY - 11}px)`;
    };

    cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 22px;
      height: 22px;
      border: 2px solid #e3ddf5;
      border-radius: 4px;
      pointer-events: none;
      z-index: 9999;
      background: transparent;
      will-change: transform;
    `;

    window.addEventListener("mousemove", updateCursor, { passive: true });
    return () => {
      window.removeEventListener("mousemove", updateCursor);
      cursor.remove();
    };
  }, []);

  // Browsers block audio until the user interacts with the page, so true
  // autoplay-on-load isn't possible. This is the closest honest
  // equivalent: no visible toggle, music just starts on the very first
  // click/tap/keypress anywhere on the page.
  useEffect(() => {
    let started = false;
    const beginMusic = () => {
      if (started) return;
      started = true;
      startAmbient();
      window.removeEventListener("click", beginMusic);
      window.removeEventListener("keydown", beginMusic);
      window.removeEventListener("touchstart", beginMusic);
    };
    window.addEventListener("click", beginMusic);
    window.addEventListener("keydown", beginMusic);
    window.addEventListener("touchstart", beginMusic);
    return () => {
      window.removeEventListener("click", beginMusic);
      window.removeEventListener("keydown", beginMusic);
      window.removeEventListener("touchstart", beginMusic);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero id="home">
        <AvailabilityBadge>available for new opportunities</AvailabilityBadge>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <Blossom size={22} />
          <TypeOnView as={HeroTitle} text="Hey! I'm Maryam." speed={55} />
          <Blossom size={22} />
        </div>
        <RoleSubtitle>AI/ML Engineer</RoleSubtitle>
        <HeroSubtitle>
          I build machine learning systems that actually make it to
          production: real-time trading signals, RAG search engines, and
          AI tools for healthcare.
        </HeroSubtitle>
        <HeroButtons>
          <HeroButton href="#projects" onClick={playClick}>View My Work</HeroButton>
          <HeroButtonGhost href="#contact" onClick={playClick}>Get In Touch</HeroButtonGhost>
        </HeroButtons>
        <PetRow>
          <TamagotchiPet />
        </PetRow>
      </Hero>

      <Section id="about" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
          <Blossom size={18} />
          <TypeOnView as={SectionTitle} text="who am i really?" speed={30} />
          <Blossom size={18} />
        </div>
        <AboutGrid>
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
                "I build AI systems that actually ship, not just notebooks that work on my laptop. Right now that means real-time crypto pipelines, RAG search engines, and a clinical AI assistant that reads prescriptions. I like the unglamorous parts too: fixing a broken data pipeline at 2am, tuning a model until it stops lying to me, actually getting the thing deployed. Python's home base, but I'll go wherever the problem needs me to."
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={45}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.p>
          <AboutImageCol>
            <CatMascot />
          </AboutImageCol>
        </AboutGrid>
      </Section>


      <Section id="projects" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="key projects" speed={40} />
        <ProjectGrid>
          <ProjectCard>
            <ImageSlot>
              <StickerIcon type="star" size={44} color="var(--coral)" />
            </ImageSlot>
            <ProjectBody>
            <ProjectTitle>Eth Breakout: Real-Time Crypto Prediction System</ProjectTitle>
            <ProjectDesc>
              Watches Ethereum, Dogecoin, and Solana in real time and flags breakouts before they fully happen, using a mix of rule-based logic and ML on 5-minute candles. Also built a heatmap that shows where leveraged traders are most exposed, so you can see the risk, not just the price.
            </ProjectDesc>
            <TechLine><strong>Tech:</strong> Python, SQLAlchemy, Pandas, Scikit-learn, PostgreSQL, WebSockets, Streamlit</TechLine>
            </ProjectBody>
          </ProjectCard>
          <ProjectCard>
            <ImageSlot>
              <StickerIcon type="bubble" size={44} color="var(--coral)" />
            </ImageSlot>
            <ProjectBody>
            <ProjectTitle>DiscoverIQ: RAG-Based Text-to-SQL & Knowledge Graph Query Engine</ProjectTitle>
            <ProjectDesc>
              Ask it a question in plain English, it writes and runs the SQL for you. Under the hood it pulls context from a Neo4j knowledge graph and Qdrant vector search before handing things to the LLM, so queries are grounded in your actual schema instead of guessed.
            </ProjectDesc>
            <TechLine><strong>Tech:</strong> Python, Neo4j, Qdrant, PostgreSQL, LangChain, Groq LLM</TechLine>
            </ProjectBody>
          </ProjectCard>
          <ProjectCard>
            <ImageSlot>
              <StickerIcon type="hourglass" size={44} color="var(--coral)" />
            </ImageSlot>
            <ProjectBody>
            <ProjectTitle>MedGemma: Multi-Modal Clinical AI Assistant</ProjectTitle>
            <ProjectDesc>
              A clinical assistant that can look at a medical image, read a doctor's handwriting off a prescription, and flag dangerous drug interactions, all in one place. Built to make the tedious, error-prone parts of healthcare a little safer.
            </ProjectDesc>
            <TechLine><strong>Tech:</strong> MedGemma-4b-it, Whisper-large-v3, TxGemma-9b-chat, FDA API, Python, Flask</TechLine>
            </ProjectBody>
          </ProjectCard>
          <ProjectCard>
            <ImageSlot>
              <StickerIcon type="disc" size={44} color="var(--coral)" />
            </ImageSlot>
            <ProjectBody>
            <ProjectTitle>LLM Evaluation Toolkit</ProjectTitle>
            <ProjectDesc>
              Most teams eyeball whether their LLM output "looks fine." This toolkit doesn't let you get away with that: it covers 12 evaluation categories from safety to long-context reasoning, with runnable notebooks and a dashboard. Used it to run an internal workshop so the team could stop guessing.
            </ProjectDesc>
            <TechLine><strong>Tech:</strong> Python, Groq, RAGAS, DeepEval, HuggingFace Evaluate, PromptBench, Streamlit</TechLine>
            </ProjectBody>
          </ProjectCard>
          <ProjectCard>
            <ImageSlot>
              <StickerIcon type="camera" size={44} color="var(--coral)" />
            </ImageSlot>
            <ProjectBody>
            <ProjectTitle>Straight Egyptian Arabian Horse Knowledge Graph</ProjectTitle>
            <ProjectDesc>
              A graph database of Egyptian Arabian horse bloodlines, because pedigree charts on paper don't scale. Trace a horse's lineage, show history, and stable records interactively, all packaged in Docker so it runs anywhere.
            </ProjectDesc>
            <TechLine><strong>Tech:</strong> Python, Pandas, Neo4j, Streamlit, PyVis, Docker</TechLine>
            </ProjectBody>
          </ProjectCard>
          <ProjectCard>
            <ImageSlot>
              <StickerIcon type="headphones" size={44} color="var(--coral)" />
            </ImageSlot>
            <ProjectBody>
            <ProjectTitle>TherapEase: Autism Therapy Assistant</ProjectTitle>
            <ProjectDesc>
              My final year project: a 3D digital twin that reads a child's emotions in real time during autism therapy sessions, and gives therapists a dashboard to track progress instead of relying on memory and notes.
            </ProjectDesc>
            <TechLine><strong>Tech:</strong> React, Three.js, OpenCV, Flask, TensorFlow, DeepFace, MediaPipe</TechLine>
            </ProjectBody>
          </ProjectCard>
        </ProjectGrid>
      </Section>

      <AnimatedSkills />

      <Section id="experience" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="experience" speed={40} />
        <Timeline>
          <TimelineItem>
            <YearBadge>2025</YearBadge>
            <TimelineCard>
              <ExperienceTitle>Junior Machine Learning Engineer <ExperienceOrg>@ Tensor Labs</ExperienceOrg></ExperienceTitle>
              <ExperienceDate>Sep 2025 - Present</ExperienceDate>
              <ExperienceDetail>
                <li><strong>Real-time ML prediction pipelines:</strong> designed and deployed pipelines to detect breakout patterns across Ethereum, Dogecoin, and Solana, processing streaming market data at 5-minute intervals.</li>
                <li><strong>RAG-based query engine (DiscoverIQ):</strong> engineered a RAG pipeline translating natural language into SQL, integrating a Neo4j knowledge graph, Qdrant vector search, and LLM-based query generation over PostgreSQL.</li>
                <li><strong>Multi-modal clinical AI assistant (MedGemma):</strong> built core modules for medical image diagnostics, prescription OCR, and drug-interaction checks using vision-language and LLM models.</li>
                <li><strong>Data pipeline reliability:</strong> diagnosed and resolved timestamp/interval synchronization and signal threshold issues to improve prediction reliability and uptime.</li>
                <li><strong>Technical workshops:</strong> delivered internal workshops on Mem0 (LLM memory systems) and Harness Engineering; authored an article on Harness Engineering and Open Knowledge Format (Medium, forthcoming).</li>
              </ExperienceDetail>
            </TimelineCard>
          </TimelineItem>
          <TimelineItem>
            <YearBadge>2024</YearBadge>
            <TimelineCard>
              <ExperienceTitle>Lab Demonstrator - Machine Learning <ExperienceOrg>@ FAST NUCES Islamabad</ExperienceOrg></ExperienceTitle>
              <ExperienceDate>Sep 2024 - Dec 2024</ExperienceDate>
              <ExperienceDetail>
                <li>Led weekly lab sessions on feature engineering, hyperparameter tuning, and applied machine learning demonstrations for undergraduate students.</li>
              </ExperienceDetail>
            </TimelineCard>
          </TimelineItem>
          <TimelineItem>
            <YearBadge>2023</YearBadge>
            <TimelineCard>
              <ExperienceTitle>Artificial Intelligence Intern <ExperienceOrg>@ AIM Lab, Islamabad</ExperienceOrg></ExperienceTitle>
              <ExperienceDate>Jun 2023 - Aug 2023</ExperienceDate>
              <ExperienceDetail>
                <li>Built a tool that auto-generates presentation slide decks from natural language prompts using NLP and computer vision techniques.</li>
                <li>Applied pre-trained vision models for content understanding and image matching tasks.</li>
              </ExperienceDetail>
            </TimelineCard>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section id="education" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="education" speed={40} />
        <Timeline>
          <TimelineItem>
            <YearBadge>2021</YearBadge>
            <TimelineCard>
              <ExperienceTitle>B.S. in Artificial Intelligence <ExperienceOrg>@ FAST NUCES, Islamabad</ExperienceOrg></ExperienceTitle>
              <ExperienceDate>Jul 2021 - Jun 2025</ExperienceDate>
              <ExperienceDetail>
                <li>Relevant coursework: Deep Learning, Generative AI, Computer Vision, NLP.</li>
              </ExperienceDetail>
            </TimelineCard>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section id="certifications" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="certifications" speed={40} />
        <CertificateGrid>
          <CertificateCard>
            <CardInner>
              <CardFront>
                <UnlockedTag>achievement unlocked</UnlockedTag>
                <MedalGlow><PixelIcon type="certifications" color="var(--coral)" size={36} /></MedalGlow>
                <h3>AWS Certified AI Practitioner</h3>
                <IssuerPill>AWS, Passed March 2026</IssuerPill>
              </CardFront>
              <CardBack>
                <BackLabel>[ details ]</BackLabel>
                <p>Generative AI concepts, AWS AI/ML services</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <UnlockedTag>achievement unlocked</UnlockedTag>
                <MedalGlow><PixelIcon type="certifications" color="var(--coral)" size={36} /></MedalGlow>
                <h3>Generative AI with LLMs</h3>
                <IssuerPill>DeepLearning.AI, 2025</IssuerPill>
              </CardFront>
              <CardBack>
                <BackLabel>[ details ]</BackLabel>
                <p>Prompting, Transformers, Chatbots</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <UnlockedTag>achievement unlocked</UnlockedTag>
                <MedalGlow><PixelIcon type="certifications" color="var(--coral)" size={36} /></MedalGlow>
                <h3>AI Agents with RAG & LangChain</h3>
                <IssuerPill>IBM, 2025</IssuerPill>
              </CardFront>
              <CardBack>
                <BackLabel>[ details ]</BackLabel>
                <p>LangChain, RAG, Retrieval QA, LLM APIs</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <UnlockedTag>achievement unlocked</UnlockedTag>
                <MedalGlow><PixelIcon type="certifications" color="var(--coral)" size={36} /></MedalGlow>
                <h3>Convolutional Neural Networks</h3>
                <IssuerPill>DeepLearning.AI, 2024</IssuerPill>
              </CardFront>
              <CardBack>
                <BackLabel>[ details ]</BackLabel>
                <p>CNNs, Keras, TensorFlow, Feature Maps</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <UnlockedTag>achievement unlocked</UnlockedTag>
                <MedalGlow><PixelIcon type="certifications" color="var(--coral)" size={36} /></MedalGlow>
                <h3>AWS Cloud Essentials</h3>
                <IssuerPill>AWS, 2025</IssuerPill>
              </CardFront>
              <CardBack>
                <BackLabel>[ details ]</BackLabel>
                <p>AWS EC2, S3, IAM, Lambda</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <LockedFront>
                <LockedTag>locked</LockedTag>
                <PixelIcon type="certifications" color="var(--muted-2)" size={36} />
                <h3>???</h3>
                <IssuerPill>next unlock: TBD</IssuerPill>
              </LockedFront>
              <CardBack>
                <BackLabel>[ details ]</BackLabel>
                <p>more certifications in progress, check back soon</p>
              </CardBack>
            </CardInner>
          </CertificateCard>
        </CertificateGrid>
      </Section>

      <ResumeDownload />

      <Section id="contact" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <TypeOnView as={SectionTitle} text="let's work together" speed={35} />
        <ContactForm onSubmit={(e) => {
          e.preventDefault();
          playSend();
          window.location.href = "mailto:maryamamjad7892@gmail.com";
        }}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea rows="5" placeholder="Your Message" required></Textarea>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </Section>

      <ScrollToTop />
      <ChatLink />
    </div>
  );
}

export default App;

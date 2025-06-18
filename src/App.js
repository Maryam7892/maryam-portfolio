import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { motion } from "framer-motion";
import profilePic from './assets/Maryam.jpg';
import ResumeDownload from "./components/ResumeDownload"
import AnimatedSkills from "./pages/AnimatedSkills";
import { Typewriter } from 'react-simple-typewriter'

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
  height: 100vh;
  text-align: center;
  background: linear-gradient(to bottom, #fff5f3, #ffdede);
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
`;

const HeroButton = styled.a`
  background-color: #ff6b6b;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #e35656;
  }
`;

const Cursor = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 192, 203, 0.3);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  backdrop-filter: blur(4px);
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 2rem;
  color: #ff6b6b;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4b4b4b;
`;

const BadgeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
`;

const BadgeCard = styled.div`
  background-color: #fff0ee;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  color: #d94f4f;
  box-shadow: 0 2px 5px rgba(255, 182, 193, 0.2);
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ProjectCard = styled.div`
  background-color: #fff0ee;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(255, 182, 193, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #e35656;
  margin-bottom: 0.5rem;
`;

const ProjectDesc = styled.p`
  font-size: 0.95rem;
  color: #5c5c5c;
`;

const ExperienceEntry = styled.div`
  border-left: 4px solid #ff6b6b;
  padding-left: 1rem;
  margin-bottom: 2rem;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  color: #e35656;
`;

const ExperienceOrg = styled.span`
  color: #9c3a3a;
`;

const ExperienceDate = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const ExperienceDetail = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

const CertificateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ffd4d4;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ffd4d4;
  border-radius: 8px;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e35656;
  }
`;

const CertificateCard = styled.div`
  perspective: 1000px;
// `;

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
  background-color: #fff0ee;
  padding: 1rem;
  border-radius: 20px; /* rounded corners */
  box-shadow: 0 3px 6px rgba(255, 182, 193, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; /* center align title */
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #ffe6e6;
  color: #4b4b4b;
  padding: 1rem;
  border-radius: 20px; /* rounded corners */
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  text-align: center; /* center align flipped text */
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
      width: 40px;
      height: 40px;
      background-color: rgba(255, 192, 203, 0.3);
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: 9999;
      backdrop-filter: blur(4px);
    `;

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero id="home">
        <img
          src={profilePic}
          alt="Maryam"
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "50px",
            boxShadow: "0 8px 16px rgba(255, 182, 193, 0.3)",
            marginBottom: "1.5rem"
          }}
        />
        <HeroTitle>Hi, I'm Maryam ✨</HeroTitle>
        <HeroSubtitle>
          Artificial Intelligence Student
        </HeroSubtitle>
        <HeroButton href="#projects">View My Work</HeroButton>
      </Hero>

      <Section id="about" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionTitle>Who Am I Really?</SectionTitle>
        <motion.p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#4b4b4b"
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typewriter
            words={[
              "I’m Maryam — an AI enthusiast who blends machine learning with a designer’s soul. I build experiences that feel almost human. Deep into Generative AI, Computer Vision, and NLP. Crafting intelligent systems that feel intuitive and human. Tech should be functional and beautiful."
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
        <SectionTitle>Projects</SectionTitle>
        <ProjectGrid>
          <ProjectCard>
            <ProjectTitle>TherapEase – Autism Therapy Assistant</ProjectTitle>
            <ProjectDesc>
              Developed a 3D digital twin-based system with real-time emotion detection, automated diagnostic support, and therapist dashboard for personalized autism therapy
              <br />
              <strong>Technologies:</strong> React, Three.js, OpenCV, Flask, TensorFlow, DeepFace, MediaPipe
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Image Classification with CNN</ProjectTitle>
            <ProjectDesc>
              Developed a Convolutional Neural Network (CNN) achieving 90% accuracy on CIFAR-10 dataset.
              <br />
              <strong>Technologies:</strong> TensorFlow, Keras, Python, NumPy, Matplotlib
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Meme Sentiment Classifier</ProjectTitle>
            <ProjectDesc>
              Developed a sentiment classification system using six sklearn classifiers (three for images and three for text) and deployed as a Flask web application for real-time meme sentiment analysis.
              <br />
              <strong>Technologies:</strong> Scikit-learn, Flask, Python, TensorFlow, OpenCV, NLTK, Pandas
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Image Super-Resolution with GANs</ProjectTitle>
            <ProjectDesc>
              Enhanced low-resolution images using ESRGAN (Enhanced Super Resolution Generative Adversarial Network), optimizing perceptual and adversarial loss for realistic textures and high PSNR/SSIM scores.
              <br />
              <strong>Technologies:</strong> PyTorch, ESRGAN, Python, NumPy, OpenCV
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Slide Generator Website</ProjectTitle>
            <ProjectDesc>
              Generated slides from prompts with image and content suggestions.
              <br />
              <strong>Technologies:</strong> Flask, OpenAI API, React
            </ProjectDesc>
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>MLOps Weather Forecasting</ProjectTitle>
            <ProjectDesc>
              End-to-end pipeline with MLFlow, Docker, and Kubernetes for CI/CD deployment.
              <br />
              <strong>Technologies:</strong> MLFlow, AirFlow, Kubernetes, Docker, Flask, Python, AWS, Git, Jenkins, DVC
               MLFlow, AirFlow, Kubernetes, Docker, Flask, Python, AWS, Git, Jenkins, DVC
            </ProjectDesc>
          </ProjectCard>
        </ProjectGrid>
      </Section>

      <AnimatedSkills />

      <Section id="experience" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionTitle>Experience</SectionTitle>
        <ExperienceEntry>
          <ExperienceTitle>AI Intern <ExperienceOrg>@ AIM Lab Islamabad</ExperienceOrg></ExperienceTitle>
          <ExperienceDate>Jun 2023 – Aug 2023</ExperienceDate>
          <ExperienceDetail>
            Developed a website that generates slides from prompts, including relevant images and structured content.
          </ExperienceDetail>
        </ExperienceEntry>
        <ExperienceEntry>
          <ExperienceTitle>Lab Demonstrator – OOP <ExperienceOrg>@ FAST NUCES</ExperienceOrg></ExperienceTitle>
          <ExperienceDate>Jun 2023 – Aug 2023; Sep 2023 – Dec 2023</ExperienceDate>
          <ExperienceDetail>
            Mentored students on object-oriented programming, debugging, and implementing inheritance logic.
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
        <SectionTitle>Certifications</SectionTitle>
        <CertificateGrid>
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

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>Reinforcement Learning</h3>
                <p>University of Alberta</p>
              </CardFront>
              <CardBack>
                <p>Markov Decision Process, Q-learning</p>
              </CardBack>
            </CardInner>
          </CertificateCard>

          <CertificateCard>
            <CardInner>
              <CardFront>
                <h3>Google Sheets Dashboards</h3>
                <p>Coursera</p>
              </CardFront>
              <CardBack>
                <p>Data Viz, Dynamic Sheets, Pivot Tables</p>
              </CardBack>
            </CardInner>
          </CertificateCard>
        </CertificateGrid>
      </Section>

      <ResumeDownload />

      <Section id="contact" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <SectionTitle>Contact Me</SectionTitle>
        <ContactForm onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "mailto:maryamamjad7892@gmail.com";
        }}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea rows="5" placeholder="Your Message" required></Textarea>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </Section>
    </div>
  );
}

export default App;

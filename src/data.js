// All site content lives here. Update this file when your CV changes.

import portrait from "./assets/maryam-portrait.jpg";

// Hero arch photo. Swap the file in src/assets/ (portrait, about 5:6.4) to change it,
// or set this to null to show the initials placeholder instead.
export const PHOTO = portrait;

export const PROFILE = {
  first: "Maryam",
  last: "Amjad",
  initials: "MA",
  role: "AI ENGINEER",
  pitch:
    "I design and build AI products that people actually use, turning complex data into tools that are reliable, clear and genuinely useful.",
  email: "maryamamjad7892@gmail.com",
  location: "Islamabad, Pakistan",
  github: "https://github.com/Maryam7892",
  linkedin: "https://www.linkedin.com/in/maryam-amjad-82a595243/",
  resume: `${process.env.PUBLIC_URL}/Maryam_Amjad_Resume.pdf`,
};

export const STATS = [
  { value: "8", label: ["Projects", "built"] },
  { value: "1", label: ["Year in", "production AI"] },
  { value: "5", label: ["Industry", "certifications"] },
  { value: "3", label: ["Domains: crypto,", "data & healthcare"] },
];

// Three featured cards, most important first. `tone` picks the card colour: "blush" | "plum" | "stone".
// `viz` picks the small illustration: "chart" | "graph" | "pulse".
export const FEATURED = [
  {
    title: "DiscoverIQ",
    kind: "RAG-based text-to-SQL engine",
    tone: "blush",
    viz: "graph",
    summary:
      "I built the self-correcting SQL loop: when a query fails, the agent analyses the error, asks for a fix, validates syntax and retries with duplicate-query detection, so users never see the failure.",
    stack: "OpenAI, Llama 3.3 70B on Groq, Neo4j, Qdrant, PostgreSQL",
  },
  {
    title: "MedCompanion",
    kind: "Patient-facing AI health assistant",
    tone: "plum",
    viz: "pulse",
    summary:
      "Reads scans and prescriptions, checks drug interactions, transcribes clinical audio and answers from the patient's own history. I built the OCR, interaction checker and health tracking in a team of three.",
    stack: "MedGemma 4B, TxGemma 9B, Qwen3-VL 8B, Whisper, Docker",
  },
  {
    title: "Eth Breakout",
    kind: "Real-time crypto prediction",
    tone: "stone",
    viz: "chart",
    summary:
      "A live pipeline processing 5-minute streaming data for ETH, DOGE and SOL, serving breakout alerts and a liquidation and liquidity-risk heatmap on a real-time dashboard.",
    stack: "Python, Pandas, scikit-learn, PostgreSQL, WebSockets, Streamlit",
  },
];

// Listed in order of importance.
export const MORE_PROJECTS = [
  {
    title: "LLM Evaluation Toolkit",
    summary:
      "Open-source toolkit covering 12 evaluation categories, from RAG and text-to-SQL to safety and long-context reasoning, used as the basis for an internal engineering workshop.",
    stack: "RAGAS, DeepEval, HF Evaluate, PromptBench",
  },
  {
    title: "Horse Pedigree Graph",
    summary:
      "Turned Excel records of Straight Egyptian horses, stables and competitions into a Neo4j graph, with 5-generation pedigrees and a ranked breeding-pair recommender.",
    stack: "Neo4j, Streamlit, PyVis, Docker",
  },
  {
    title: "Lead Finder & Outreach",
    summary:
      "Finds business leads by service and location, scrapes and scores contact details, and sends personalised outreach with rate limiting and a suppression list. In active use.",
    stack: "OpenStreetMap, web scraping, Streamlit",
  },
  {
    title: "TherapEase",
    summary:
      "Final-year project: a browser-based 3D digital twin with real-time facial emotion detection to support autism therapy sessions.",
    stack: "React, Three.js, MediaPipe, TensorFlow",
  },
  {
    title: "Roman Urdu Chatbot",
    summary:
      "Rasa chatbot for Roman Urdu small talk with 30+ intents, custom actions and a voice-to-voice mode, deployed on Streamlit Cloud.",
    stack: "Rasa, gTTS, SpeechRecognition",
  },
];

// `icon` must match a key in src/components/brandIcons.js
export const TOOLS = [
  { icon: "python", name: "Python" },
  { icon: "pytorch", name: "PyTorch" },
  { icon: "tensorflow", name: "TensorFlow" },
  { icon: "huggingface", name: "Hugging Face" },
  { icon: "neo4j", name: "Neo4j" },
  { icon: "qdrant", name: "Qdrant" },
  { icon: "aws", name: "AWS" },
  { icon: "docker", name: "Docker" },
];

// Shown as two scrolling rows under the logos.
export const MORE_TOOLS = [
  ["LangChain", "RAG", "Agentic workflows", "OpenAI", "Groq", "RAGAS", "DeepEval", "Whisper", "Mem0", "Keras", "scikit-learn"],
  ["FastAPI", "Flask", "Streamlit", "PostgreSQL", "MySQL", "SQLAlchemy", "Pandas", "NumPy", "OpenCV", "spaCy", "NLTK", "CI/CD", "Git"],
];

export const ABOUT = [
  "I'm an AI engineer with about a year of professional experience across crypto, data intelligence and healthcare AI. I studied artificial intelligence at FAST NUCES, then spent a year building production LLM and AI systems at Tensor Labs.",
  "My core strength is taking a system from raw data to something people actually use, not just a notebook that runs on my laptop.",
];

// The arch card beside "About me"
export const FOCUS = ["LLM agents", "RAG & knowledge graphs", "Multimodal AI", "Healthcare AI"];

// "What I build" cards. icon: "agent" | "search" | "graph" | "vision" | "evaluate" | "deploy"
export const EXPERTISE = [
  {
    icon: "agent",
    title: "LLM apps & agents",
    text: "Agentic workflows that plan, call tools and recover from their own mistakes.",
    seen: "DiscoverIQ, Lead Finder",
  },
  {
    icon: "search",
    title: "RAG & search",
    text: "Hybrid vector, keyword and graph retrieval that grounds answers in real data.",
    seen: "DiscoverIQ, MedCompanion",
  },
  {
    icon: "graph",
    title: "Knowledge graphs",
    text: "Connected data modelled in Neo4j, so patterns and recommendations surface.",
    seen: "Horse Pedigree Graph",
  },
  {
    icon: "vision",
    title: "Multimodal & vision",
    text: "Reading scans, prescriptions, audio and faces with vision and speech models.",
    seen: "MedCompanion, TherapEase",
  },
  {
    icon: "evaluate",
    title: "LLM evaluation",
    text: "Measuring quality, safety and failure cases before anything ships.",
    seen: "LLM Evaluation Toolkit",
  },
  {
    icon: "deploy",
    title: "Real-time & deployment",
    text: "Streaming pipelines, APIs and dashboards on AWS and Docker that stay up.",
    seen: "Eth Breakout",
  },
];

export const EXPERIENCE = [
  {
    when: "Sep 2025 – Sep 2026",
    title: "Junior Machine Learning Engineer",
    org: "Tensor Labs",
    points: [
      { text: "Worked on production ML and LLM systems across crypto, data intelligence and healthcare, including data pipelines, model integration and reliability." },
      { lead: "DiscoverIQ:", text: "built the self-correcting SQL feedback loop that recovers from failed generations without user intervention." },
      { lead: "MedCompanion:", text: "built prescription OCR, the drug-interaction checker, and vitals, symptom, allergy and medicine tracking." },
      { lead: "Crypto breakout prediction:", text: "designed and deployed a real-time pipeline with breakout alerts and a liquidity-risk heatmap." },
      { lead: "Horse pedigree graph:", text: "modelled lineage and competition data in Neo4j and built the breeding-pair scoring engine." },
    ],
  },
  {
    when: "Jun – Aug 2023",
    title: "Artificial Intelligence Intern",
    org: "AIM Lab, Islamabad",
    points: [
      { text: "Built a tool that generates slide decks from natural-language prompts, using pre-trained vision models for content understanding and image matching." },
    ],
  },
];

export const EDUCATION = {
  degree: "B.S. Artificial Intelligence",
  detail: "FAST NUCES, Islamabad · 2021 – 2025",
  coursework: "Deep Learning, Generative AI, Computer Vision, NLP",
};

export const CERTIFICATIONS = [
  { name: "AWS Certified AI Practitioner", by: "AWS, 2026" },
  { name: "Generative AI with LLMs", by: "DeepLearning.AI, 2025" },
  { name: "AI Agents with RAG & LangChain", by: "IBM, 2025" },
  { name: "AWS Cloud Essentials", by: "AWS, 2025" },
  { name: "Convolutional Neural Networks", by: "DeepLearning.AI, 2024" },
];

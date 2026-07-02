import React from "react";

const projects = [
  {
    title: "Eth Breakout",
    description:
      "Real-time breakout prediction system for Ethereum, Dogecoin, and Solana using rule-based and ML signal logic across 5-min candles, plus a liquidation/liquidity heatmap built from open interest and funding rate data.",
    tech: "Python, SQLAlchemy, Pandas, Scikit-learn, PostgreSQL, WebSockets, Streamlit"
  },
  {
    title: "DiscoverIQ – Text-to-SQL & Knowledge Graph Query Engine",
    description:
      "Unified natural-language query pipeline that converts chat messages into executable SQL, combining knowledge graph context retrieval with schema-aware SQL generation.",
    tech: "Python, Neo4j, Qdrant, PostgreSQL, LangChain, Groq LLM"
  },
  {
    title: "MedGemma Multi-Modal Clinical Assistant",
    description:
      "Full-stack clinical assistant combining medical image diagnostics, prescription/medicine OCR, drug interaction checking, and personal health tracking.",
    tech: "MedGemma-4b-it, Whisper-large-v3, TxGemma-9b-chat, FDA API, Python, Flask"
  },
  {
    title: "LLM Evaluation Toolkit",
    description:
      "Hands-on toolkit covering 12 LLM evaluation categories with runnable notebooks and an interactive Streamlit dashboard, open-sourced on GitHub and used as the basis for an internal workshop.",
    tech: "Python, Groq, RAGAS, DeepEval, HuggingFace Evaluate, PromptBench, Streamlit"
  },
  {
    title: "Straight Egyptian Arabian Horse Knowledge Graph",
    description:
      "Interactive, fully Dockerized web app for exploring horse pedigrees, show results, stables, and bloodlines through a Neo4j graph database.",
    tech: "Python, Pandas, Neo4j, Streamlit, PyVis, Docker"
  },
  {
    title: "TherapEase – Autism Therapy Assistant (Final Year Project)",
    description:
      "3D digital twin system with real-time emotion detection and diagnostic support for autism therapy.",
    tech: "React, Three.js, OpenCV, MediaPipe, Flask, TensorFlow, DeepFace"
  }
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-teal-400 mb-10">Projects</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-teal-500/50 transition-shadow">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{project.description}</p>
            <p className="text-teal-300 text-xs">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

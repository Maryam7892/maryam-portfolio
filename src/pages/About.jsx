import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">About Me</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        I'm a Junior Machine Learning Engineer at Tensor Labs, building production-grade AI systems — from real-time crypto prediction pipelines to RAG/knowledge-graph query engines and multi-modal healthcare AI. I hold a degree in Artificial Intelligence from FAST NUCES Islamabad and I'm passionate about Deep Learning, Computer Vision, and NLP, especially real-time systems and LLM-powered applications.
      </p>
      <p className="text-lg text-gray-300 mt-4 leading-relaxed">
        My technical toolkit includes Python, TensorFlow, PyTorch, LangChain, Neo4j, and full-stack deployment tools like Docker and Kubernetes. Beyond coding, I love mentoring peers, sharing knowledge through workshops (Mem0, Harness Engineering, LLM Evaluation), and writing about what I build.
      </p>
    </section>
  );
};

export default About;
import React from "react";

const projects = [
  {
    title: "TherapEase – Autism Therapy Assistant",
    description:
      "3D digital twin system with real-time emotion detection and diagnostic support for autism therapy.",
    tech: "React, Three.js, OpenCV, Flask, DeepFace"
  },
  {
    title: "Image Classification with CNN",
    description:
      "CNN model achieving 90% accuracy on the CIFAR-10 dataset.",
    tech: "TensorFlow, Keras, Python"
  },
  {
    title: "Meme Classification",
    description:
      "Sentiment classifier using multi-modal features deployed via Flask web app.",
    tech: "Scikit-learn, TensorFlow, Flask"
  },
  {
    title: "Image Super-Resolution with GANs",
    description:
      "Enhanced image quality using ESRGAN for perceptual and adversarial optimization.",
    tech: "PyTorch, ESRGAN"
  },
  {
    title: "MLOps Pipeline for Weather Prediction",
    description:
      "CI/CD integrated MLOps pipeline for weather prediction using MLFlow, AirFlow, and Kubernetes.",
    tech: "Docker, MLFlow, AirFlow, Jenkins"
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

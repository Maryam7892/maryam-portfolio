import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
        Hi, I'm <span className="text-teal-400">Maryam Amjad</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
        AI Developer | Generative AI Enthusiast | Computer Vision Innovator
      </p>
      <a
        href="https://github.com/Maryam7892"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full text-lg font-semibold"
      >
        View My GitHub
      </a>
    </section>
  );
};

export default Home;

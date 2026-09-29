import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <main>
        <Projects />
        <About />
        <Expertise />
        <Experience />
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default App;

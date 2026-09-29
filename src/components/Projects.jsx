import React, { useEffect, useRef, useState } from "react";
import { FEATURED, MORE_PROJECTS } from "../data";
import ProjectViz from "./ProjectViz";

// Adds "in-view" once the card scrolls into view, which starts its animation.
const FeaturedCard = ({ project, index }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`pcard ${project.tone}${inView ? " in-view" : ""}`}
      style={{ "--i": index }}
    >
      <div>
        <h3>{project.title}</h3>
        <p className="kind">{project.kind}</p>
      </div>
      <ProjectViz type={project.viz} active={inView} />
      <div>
        <p className="sum">{project.summary}</p>
        <p className="stack">{project.stack}</p>
      </div>
    </article>
  );
};

const Projects = () => (
  <section className="block" id="work">
    <div className="wrap">
      <div className="head">
        <h2>Projects</h2>
        <p>
          Production systems from my year at Tensor Labs, each owned from data pipeline to the
          interface people use.
        </p>
      </div>

      <div className="featured">
        {FEATURED.map((p, i) => (
          <FeaturedCard project={p} index={i} key={p.title} />
        ))}
      </div>

      <div className="more">
        {MORE_PROJECTS.map((p) => (
          <div className="row" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <span className="t">{p.stack}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
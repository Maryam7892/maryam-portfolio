import React from "react";
import { EXPERTISE } from "../data";
import { ExpertiseIcon } from "./Icons";

const Expertise = () => (
  <section className="block expertise" id="expertise">
    <div className="wrap">
      <div className="head">
        <h2>What I build</h2>
        <p>The kinds of AI systems I've taken from idea to production, and where you can see each one.</p>
      </div>
      <div className="xgrid">
        {EXPERTISE.map((e) => (
          <article className="xcard" key={e.title}>
            <div className="xic">
              <ExpertiseIcon type={e.icon} />
            </div>
            <h3>{e.title}</h3>
            <p>{e.text}</p>
            <span className="seen">Seen in {e.seen}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;

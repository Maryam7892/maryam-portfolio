import React from "react";
import { PROCESS } from "../data";
import { ProcessIcon } from "./Icons";

const Process = () => (
  <section className="block process" id="process">
    <div className="wrap">
      <h2>How I build ML systems</h2>
      <p className="lede">
        The same five stages carry every project, from the first data pull to the dashboard
        someone checks every morning.
      </p>
      <div className="steps">
        {PROCESS.map((s, i) => (
          <div className="step" key={s.title}>
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <div className="ic">
              <ProcessIcon type={s.icon} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;

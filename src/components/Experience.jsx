import React from "react";
import { CERTIFICATIONS, EDUCATION, EXPERIENCE } from "../data";

const Experience = () => (
  <section className="block" id="experience">
    <div className="wrap xp">
      <div>
        <h2 className="xp-title">Experience</h2>
        {EXPERIENCE.map((job) => (
          <div className="job" key={job.title}>
            <div className="when">{job.when}</div>
            <div>
              <h3>{job.title}</h3>
              <p className="org">{job.org}</p>
              <ul>
                {job.points.map((pt) => (
                  <li key={pt.text.slice(0, 24)}>
                    {pt.lead && <b>{pt.lead} </b>}
                    {pt.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <aside className="side">
        <h3 className="label">Education</h3>
        <div className="edu">
          <b>{EDUCATION.degree}</b>
          <span>{EDUCATION.detail}</span>
          <span className="course">Coursework: {EDUCATION.coursework}</span>
        </div>
        <h3 className="label">Certifications</h3>
        <ul className="certs">
          {CERTIFICATIONS.map((c) => (
            <li key={c.name}>
              {c.name} <span>{c.by}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  </section>
);

export default Experience;

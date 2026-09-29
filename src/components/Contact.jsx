import React from "react";
import { PROFILE } from "../data";
import { ArrowIcon } from "./Icons";

const Contact = () => (
  <section className="band" id="contact">
    <div className="wrap">
      <div>
        <h2>Let's build something together</h2>
        <p>Hiring for an AI role or have a project in mind? I'd love to hear about it.</p>
      </div>
      <div className="band-actions">
        <a className="btn btn-ivory" href={`mailto:${PROFILE.email}`}>
          Email me <ArrowIcon />
        </a>
        <a className="btn btn-ghost" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;

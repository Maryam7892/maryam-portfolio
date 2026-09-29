import React from "react";
import { PROFILE } from "../data";
import { GitHubIcon, LinkedInIcon, ResumeIcon } from "./Icons";

const Footer = () => (
  <footer>
    <div className="wrap top">
      <a className="mark" href="#top">
        {PROFILE.initials}
      </a>
      <p className="tag">Building AI systems that make it to production.</p>
      <div className="contact">
        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        <br />
        {PROFILE.location}
      </div>
      <div className="socials">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" aria-label="Résumé">
          <ResumeIcon />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

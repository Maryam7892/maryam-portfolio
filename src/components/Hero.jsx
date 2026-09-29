import React from "react";
import { PHOTO, PROFILE } from "../data";
import { ArrowIcon } from "./Icons";

const Hero = () => (
  <header className="hero" id="top">
    <div className="wrap">
      <div className="hero-text">
        <p className="hello">Hello, I'm</p>
        <h1 className="name">
          <span>{PROFILE.first}</span>
          <span>{PROFILE.last}</span>
        </h1>
        <p className="role">{PROFILE.role}</p>
        <p className="pitch">{PROFILE.pitch}</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href="#work">
            View my work <ArrowIcon />
          </a>
          <a className="btn btn-line" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div className="arch-col">
        <div className="arch-ring">
          <div className="arch">
            {PHOTO ? (
              <img src={PHOTO} alt={`${PROFILE.first} ${PROFILE.last}`} />
            ) : (
              <>
                <div className="mono">{PROFILE.initials}</div>
                <div className="ph">Photo coming soon</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;

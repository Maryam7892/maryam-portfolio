import React from "react";
import { ABOUT, FOCUS, MORE_TOOLS, PROFILE, TOOLS } from "../data";
import { BRAND_ICONS } from "./brandIcons";

const BrandIcon = ({ name }) => {
  const icon = BRAND_ICONS[name];
  if (!icon) return null;
  return (
    <svg viewBox={icon.viewBox} fill="currentColor" className={`brand brand-${name}`} aria-hidden="true">
      {icon.paths.map((d) => (
        <path d={d} key={d.slice(0, 16)} />
      ))}
    </svg>
  );
};

// Each row is rendered twice back to back so the scroll loops seamlessly.
const MarqueeRow = ({ items, reverse }) => (
  <div className={`marquee${reverse ? " reverse" : ""}`}>
    <div className="marquee-track">
      {[...items, ...items].map((item, i) => (
        <span className="chip" key={`${item}-${i}`} aria-hidden={i >= items.length}>
          {item}
        </span>
      ))}
    </div>
  </div>
);

const About = () => (
  <section className="block about-block" id="about">
    <div className="wrap duo">
      <div className="about">
        <div>
          <h2>About me</h2>
          {ABOUT.map((para) => (
            <p className="body" key={para.slice(0, 24)}>
              {para}
            </p>
          ))}
          <p className="sig">{PROFILE.first}</p>
        </div>
        <div className="focus-arch">
          <p className="focus-title">Focused on</p>
          <ul>
            {FOCUS.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rule" aria-hidden="true" />

      <div className="tools-col">
        <h2>Tools I work with</h2>
        <div className="tools">
          {TOOLS.map((t) => (
            <div className="tool" key={t.name}>
              <i aria-hidden="true">
                <BrandIcon name={t.icon} />
              </i>
              <span>{t.name}</span>
            </div>
          ))}
        </div>
        <p className="also-label">Also in my toolkit</p>
        {MORE_TOOLS.map((row, i) => (
          <MarqueeRow items={row} reverse={i % 2 === 1} key={row[0]} />
        ))}
      </div>

    </div>
  </section>
);

export default About;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PixelIcon from "./PixelIcon";
import { playClick } from "../utils/sound";

const SECTIONS = [
  { id: "about", label: "about", icon: "about" },
  { id: "projects", label: "projects", icon: "projects" },
  { id: "skills", label: "skills", icon: "skills" },
  { id: "experience", label: "experience", icon: "experience" },
  { id: "education", label: "education", icon: "education" },
  { id: "certifications", label: "certs", icon: "certifications" },
  { id: "contact", label: "contact", icon: "contact" },
];

const Wrap = styled.div`
  position: relative;
  padding: 2.5rem 1.5rem 0;
  background: #000;
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
  overflow: hidden;
`;

const MapTitle = styled.div`
  text-align: center;
  font-family: var(--font-arcade);
  font-size: 0.6rem;
  letter-spacing: 1px;
  color: var(--coral);
  margin-bottom: 2rem;
`;

const Trail = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
  position: relative;
  padding-bottom: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 28px;
    left: 5%;
    right: 5%;
    border-top: 3px dashed var(--border);
    z-index: 0;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileTrail = styled.div`
  display: none;
  max-width: 340px;
  margin: 0 auto;
  padding-bottom: 2.5rem;
  position: relative;

  @media (max-width: 700px) {
    display: block;
  }
`;

const MobileNodeRow = styled.a`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-decoration: none;
  margin-left: ${(p) => (p.$side === "right" ? "auto" : "0")};
  margin-bottom: 1.6rem;
  width: fit-content;
  flex-direction: ${(p) => (p.$side === "right" ? "row-reverse" : "row")};
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 44px;
    left: ${(p) => (p.$side === "right" ? "auto" : "22px")};
    right: ${(p) => (p.$side === "right" ? "22px" : "auto")};
    width: 2px;
    height: 56px;
    border-left: 3px dashed var(--border);
  }

  &:hover {
    text-decoration: none;
  }
`;

const NodeWrap = styled.a`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  flex: 1 1 100px;
  min-width: 90px;

  &:hover {
    text-decoration: none;
  }
`;

const NodeCircle = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--panel);
  border: 3px solid ${(p) => (p.$active ? "var(--coral)" : "var(--border)")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: ${(p) => (p.$active ? "0 0 14px var(--coral)" : "none")};
  flex-shrink: 0;

  ${NodeWrap}:hover &, ${MobileNodeRow}:hover & {
    transform: translateY(-3px);
  }
`;

const NodeLabel = styled.span`
  font-size: 0.7rem;
  color: ${(p) => (p.$active ? "var(--ink)" : "var(--muted)")};
  text-align: center;
`;

const Ground = styled.div`
  height: 26px;
  background: repeating-linear-gradient(
    90deg,
    var(--accent-2) 0 14px,
    var(--accent) 14px 28px
  );
  border-top: 3px solid var(--border);
  position: relative;

  &::before {
    content: "\\2726  \\2726  \\2726  \\2726  \\2726  \\2726  \\2726  \\2726  \\2726  \\2726";
    position: absolute;
    top: -22px;
    left: 0;
    right: 0;
    text-align: justify;
    font-size: 0.7rem;
    color: var(--amber);
    letter-spacing: 4px;
  }
`;

const WorldMap = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Wrap id="worldmap">
      <MapTitle>[ select a level ]</MapTitle>

      <Trail>
        {SECTIONS.map((s) => (
          <NodeWrap key={s.id} href={`#${s.id}`} onClick={playClick}>
            <NodeCircle $active={active === s.id}>
              <PixelIcon type={s.icon} color={active === s.id ? "var(--coral)" : "var(--muted-2)"} size={26} />
            </NodeCircle>
            <NodeLabel $active={active === s.id}>{s.label}</NodeLabel>
          </NodeWrap>
        ))}
      </Trail>

      <MobileTrail>
        {SECTIONS.map((s, i) => (
          <MobileNodeRow key={s.id} href={`#${s.id}`} onClick={playClick} $side={i % 2 === 0 ? "left" : "right"}>
            <NodeCircle $active={active === s.id}>
              <PixelIcon type={s.icon} color={active === s.id ? "var(--coral)" : "var(--muted-2)"} size={24} />
            </NodeCircle>
            <NodeLabel $active={active === s.id}>{s.label}</NodeLabel>
          </MobileNodeRow>
        ))}
      </MobileTrail>

      <Ground />
    </Wrap>
  );
};

export default WorldMap;

import React, { useState } from "react";
import styled from "styled-components";
import { playClick, startAmbient, stopAmbient } from "../utils/sound";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--panel);
  border-bottom: 2px solid var(--border);
  padding: 0.85rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  z-index: 1000;
  font-family: var(--font-mono);
`;

const Brand = styled.a`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  text-decoration: none;
  letter-spacing: 0.5px;

  &::before {
    content: "> ";
    color: var(--coral);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const StyledLink = styled.a`
  color: var(--ink);
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: none;
  background: var(--panel-2);
  border: 1.5px solid var(--border);
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  transition: transform 0.1s ease, background 0.15s ease;

  &:nth-child(3n+2) {
    background: var(--coral-tint);
    border-color: var(--coral-dark);
  }

  &:nth-child(3n+3) {
    background: var(--blue-tint);
    border-color: var(--blue-dark);
  }

  &:hover {
    background: var(--amber);
    border-color: var(--amber-dark);
    text-decoration: none;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SocialLink = styled(StyledLink)`
  background: var(--blue);
  color: #ffffff;
  border-color: var(--blue-dark);

  &:hover {
    background: var(--blue-dark);
    border-color: var(--blue-dark);
    color: #ffffff;
  }
`;

const MusicToggle = styled.button`
  color: var(--panel);
  font-weight: 700;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  cursor: pointer;
  background: var(--amber);
  border: 1.5px solid var(--amber-dark);
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  transition: transform 0.1s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Navbar = () => {
  const [musicOn, setMusicOn] = useState(false);

  const toggleMusic = () => {
    playClick();
    if (musicOn) {
      stopAmbient();
      setMusicOn(false);
    } else {
      startAmbient();
      setMusicOn(true);
    }
  };

  return (
    <Nav>
      <Brand href="#home" onClick={playClick}>maryam_amjad</Brand>
      <NavLinks>
        <StyledLink href="#about" onClick={playClick}>about</StyledLink>
        <StyledLink href="#projects" onClick={playClick}>projects</StyledLink>
        <StyledLink href="#skills" onClick={playClick}>skills</StyledLink>
        <StyledLink href="#experience" onClick={playClick}>experience</StyledLink>
        <StyledLink href="#education" onClick={playClick}>education</StyledLink>
        <StyledLink href="#certifications" onClick={playClick}>certifications</StyledLink>
        <StyledLink
          href="#chat"
          onClick={(e) => {
            e.preventDefault();
            playClick();
            window.dispatchEvent(new CustomEvent("open-chat"));
          }}
        >
          chat
        </StyledLink>
        <StyledLink href="#contact" onClick={playClick}>contact</StyledLink>
        <SocialLink href="https://github.com/Maryam7892" target="_blank" rel="noopener noreferrer" onClick={playClick}>github</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/maryam-amjad-82a595243/" target="_blank" rel="noopener noreferrer" onClick={playClick}>linkedin</SocialLink>
        <MusicToggle onClick={toggleMusic} aria-label="toggle background music">
          {musicOn ? "♪ music: on" : "♪ music: off"}
        </MusicToggle>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

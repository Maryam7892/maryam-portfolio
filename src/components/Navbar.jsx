import React, { useState } from "react";
import styled from "styled-components";
import { playClick } from "../utils/sound";

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
  font-size: clamp(0.95rem, 4vw, 1.1rem);
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
  letter-spacing: 0.5px;

  &::before {
    content: "> ";
    color: var(--coral);
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  background: var(--panel-2);
  border: 1.5px solid var(--border);
  color: var(--ink);
  border-radius: 6px;
  padding: 0.4rem 0.65rem;
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 780px) {
    display: inline-flex;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 780px) {
    display: ${(p) => (p.$open ? "flex" : "none")};
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const StyledLink = styled.a`
  color: var(--ink);
  font-weight: 500;
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

  @media (max-width: 780px) {
    text-align: center;
    padding: 0.65rem 0.7rem;
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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    playClick();
    setMenuOpen(false);
  };

  return (
    <Nav>
      <Brand href="#home" onClick={playClick}>maryam_amjad</Brand>
      <HamburgerBtn onClick={() => { playClick(); setMenuOpen((o) => !o); }} aria-label="toggle menu">
        {menuOpen ? "[ x ]" : "[ = ]"}
      </HamburgerBtn>
      <NavLinks $open={menuOpen}>
        <StyledLink href="#about" onClick={handleLinkClick}>about</StyledLink>
        <StyledLink href="#projects" onClick={handleLinkClick}>projects</StyledLink>
        <StyledLink href="#skills" onClick={handleLinkClick}>skills</StyledLink>
        <StyledLink href="#experience" onClick={handleLinkClick}>experience</StyledLink>
        <StyledLink href="#education" onClick={handleLinkClick}>education</StyledLink>
        <StyledLink href="#certifications" onClick={handleLinkClick}>certifications</StyledLink>
        <StyledLink href="#contact" onClick={handleLinkClick}>contact</StyledLink>
        <StyledLink
          href="https://qualzo.app/chat/cmqgfbyg0002njqar47r0sgtm"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          chat
        </StyledLink>
        <SocialLink href="https://github.com/Maryam7892" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>github</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/maryam-amjad-82a595243/" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>linkedin</SocialLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

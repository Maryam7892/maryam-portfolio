import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: #fff0ee;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(255, 182, 193, 0.2);
  z-index: 1000;
`;

const Brand = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff6b6b;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const StyledLink = styled.a`
  color: #f06565;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #c94d4d;
  }
`;

const SocialLink = styled.a`
  color: #f06565;
  font-size: 1.2rem;
  text-decoration: none;
  margin-left: 1rem;

  &:hover {
    color: #c94d4d;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0 8px 16px rgba(255, 182, 193, 0.3);
  margin-bottom: 1.5rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <Brand href="#home">Maryam Amjad</Brand>
      <NavLinks>
        <StyledLink href="#about">About</StyledLink>
        <StyledLink href="#projects">Projects</StyledLink>
        <StyledLink href="#skills">Skills</StyledLink>
        <StyledLink href="#experience">Experience</StyledLink>
        <StyledLink href="#certifications">Certifications</StyledLink>
        <StyledLink href="#contact">Contact</StyledLink>
        <SocialLink href="https://github.com/Maryam7892" target="_blank" rel="noopener noreferrer">GitHub</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/maryam-amjad-82a595243/" target="_blank" rel="noopener noreferrer">LinkedIn</SocialLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
export { ProfileImage };

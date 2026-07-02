import React from "react";
import styled from "styled-components";
import TypeOnView from "./TypeOnView";

const ResumeSection = styled.section`
  background-color: var(--panel-2);
  border-top: 2px solid var(--border);
  border-bottom: 2px solid var(--border);
  padding: 4rem 2rem;
  text-align: center;
`;

const ResumeTitle = styled.h2`
  font-family: var(--font-pixel);
  font-size: 2.4rem;
  color: var(--ink);
  margin-bottom: 0.75rem;
  letter-spacing: 1px;
`;

const ResumeText = styled.p`
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 2rem;
`;

const ResumeButton = styled.a`
  display: inline-block;
  background-color: var(--blue);
  color: var(--panel);
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  border: 2px solid var(--blue-dark);
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  box-shadow: var(--shadow-sm);
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &::before {
    content: "[ ";
  }
  &::after {
    content: " ]";
  }

  &:hover {
    text-decoration: none;
    background-color: var(--blue-dark);
    transform: translate(-1px, -1px);
    box-shadow: 5px 5px 0 var(--border);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 var(--border);
  }
`;

const ResumeDownload = () => {
  return (
    <ResumeSection id="resume">
      <TypeOnView as={ResumeTitle} text="wanna know me on paper?" speed={35} />
      <ResumeText>
        you can download my full resume below
      </ResumeText>
      <ResumeButton
        href={`${process.env.PUBLIC_URL}/Maryam_Amjad_Resume.pdf`}
        download="Maryam_Amjad_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        download resume
      </ResumeButton>
    </ResumeSection>
  );
};

export default ResumeDownload;

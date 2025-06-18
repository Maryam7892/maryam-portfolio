import React from "react";
import styled from "styled-components";

const ResumeSection = styled.section`
  background-color: #fff0ee;
  padding: 4rem 2rem;
  text-align: center;
`;

const ResumeTitle = styled.h2`
  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const ResumeText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
`;

const ResumeButton = styled.a`
  background-color: #ff6b6b;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e35656;
  }
`;

const ResumeDownload = () => {
  return (
    <ResumeSection id="resume">
      <ResumeTitle>Wanna Know Me on Paper?</ResumeTitle>
      <ResumeText>
        You can download my full resume below 
      </ResumeText>
      <ResumeButton
        href="/Maryam_Amjad_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </ResumeButton>
    </ResumeSection>
  );
};

export default ResumeDownload;

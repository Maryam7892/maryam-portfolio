import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1.5rem;
  background-color: #1f2937;
  color: #9ca3af;
  font-size: 0.875rem;
`;

const Footer = () => (
  <FooterContainer>
    &copy; {new Date().getFullYear()} Maryam Amjad. All rights reserved.
  </FooterContainer>
);

export default Footer;

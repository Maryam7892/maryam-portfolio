import React from "react";
import styled from "styled-components";

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 340px;
  height: auto;
  margin: 0 auto;
  filter: drop-shadow(0 0 26px rgba(139, 111, 214, 0.45));
`;

// The exact pixel-cat sticker the user sourced, used as-is (transparent
// background so it blends with whatever panel color sits behind it).
const CatMascot = () => (
  <Img src={`${process.env.PUBLIC_URL}/assets/pixel-cat.png`} alt="pixel art cat mascot" />
);

export default CatMascot;

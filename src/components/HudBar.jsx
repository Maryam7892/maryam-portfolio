import React from "react";
import styled from "styled-components";

const Hud = styled.div`
  background: #000;
  color: var(--blue);
  font-family: var(--font-arcade);
  font-size: 0.55rem;
  padding: 0.55rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--border);
  letter-spacing: 0.5px;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 500px) {
    font-size: 0.45rem;
    justify-content: center;
  }
`;

const HudRight = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--coral);
`;

const HudBar = () => (
  <Hud>
    <span>XP: AI/ML LEVEL 04</span>
    <HudRight>
      <span aria-hidden="true">♥ ♥ ♥</span>
      <span style={{ color: "var(--ink)" }}>PLAYER 01</span>
    </HudRight>
  </Hud>
);

export default HudBar;

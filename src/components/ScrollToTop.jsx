import React from "react";
import styled from "styled-components";
import { playClick } from "../utils/sound";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 1.5rem 3rem;
  background: var(--bg);
`;

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--panel);
  border: 2px solid var(--coral);
  color: var(--coral);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    background: var(--coral);
    color: #fff;
    transform: translateY(-2px);
  }
`;

const ScrollToTop = () => (
  <Wrap>
    <Btn
      onClick={() => {
        playClick();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      ↑ back to top
    </Btn>
  </Wrap>
);

export default ScrollToTop;

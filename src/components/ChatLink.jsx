import React from "react";
import styled from "styled-components";
import { playClick } from "../utils/sound";

const Btn = styled.a`
  position: fixed;
  bottom: 22px;
  right: 22px;
  height: 46px;
  padding: 0 1.1rem 0 0.9rem;
  border-radius: 999px;
  background: var(--coral);
  color: #fff;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 1200;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  &:hover {
    text-decoration: none;
    background: var(--coral-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 111, 214, 0.35);
  }
`;

const ChatLink = () => (
  <Btn
    href="https://qualzo.app/chat/cmqgfbyg0002njqar47r0sgtm"
    target="_blank"
    rel="noopener noreferrer"
    onClick={playClick}
    aria-label="chat with my professional companion"
  >
    <span aria-hidden="true">💬</span>
    chat with me
  </Btn>
);

export default ChatLink;

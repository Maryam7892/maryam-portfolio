import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChatTerminal from "./ChatTerminal";
import { playClick } from "../utils/sound";

const ToggleBtn = styled.button`
  position: fixed;
  bottom: 22px;
  right: 22px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: var(--coral);
  border: 3px solid var(--border);
  color: var(--panel);
  font-family: var(--font-mono);
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow);
  z-index: 1200;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--border);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0 var(--border);
  }
`;

const Panel = styled.div`
  position: fixed;
  bottom: 92px;
  right: 22px;
  width: min(360px, calc(100vw - 32px));
  z-index: 1200;
  animation: pop-in 0.15s ease-out;

  @keyframes pop-in {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const PanelLabel = styled.span`
  font-size: 0.7rem;
  color: var(--muted);
`;

const CloseBtn = styled.button`
  background: var(--panel-2);
  border: 1.5px solid var(--border);
  color: var(--ink);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 3px 8px;
  cursor: pointer;

  &:hover {
    background: var(--amber);
  }
`;

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  return (
    <>
      {open && (
        <Panel>
          <PanelHeader>
            <PanelLabel>ask about my work</PanelLabel>
            <CloseBtn
              onClick={() => {
                playClick();
                setOpen(false);
              }}
            >
              [ close ]
            </CloseBtn>
          </PanelHeader>
          <ChatTerminal />
        </Panel>
      )}
      <ToggleBtn
        onClick={() => {
          playClick();
          setOpen((o) => !o);
        }}
        aria-label="toggle chat with maryam_bot"
      >
        {open ? "×" : ">_"}
      </ToggleBtn>
    </>
  );
};

export default FloatingChat;

import React, { useState } from "react";
import styled from "styled-components";

const Shell = styled.div`
  background: var(--accent);
  border: 3px solid var(--border);
  border-radius: 16px;
  padding: 14px;
  width: 200px;
  text-align: center;
  box-shadow: var(--shadow);
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--border);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 var(--border);
  }
`;

const Screen = styled.div`
  width: 100%;
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-2);
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 10px 8px;
  font-size: 40px;
  line-height: 1;
  font-family: var(--font-mono);
  color: var(--ink);
`;

const Mood = styled.div`
  min-height: 2.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  line-height: 1.2;
  margin-top: 10px;
  color: var(--ink);
  font-weight: 700;
`;

const Bars = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 6px;
`;

const Bar = styled.div`
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--border);
  border-radius: 3px;
  background: ${(props) => props.$color || "transparent"};
`;

const Hint = styled.div`
  font-size: 0.62rem;
  color: var(--accent-dark);
  margin-top: 8px;
`;

const STATES = [
  { face: "(•ᴥ•)", mood: "mood: caffeinated", colors: ["var(--coral)", "var(--amber)", "var(--ink)"] },
  { face: "( ◕‿◕)", mood: "mood: shipping code", colors: ["var(--blue)", "var(--ink)", "var(--ink)"] },
  { face: "(¬‿¬)", mood: "mood: debugging", colors: ["var(--coral)", "transparent", "var(--ink)"] },
  { face: "( ˘ ³˘)", mood: "mood: needs coffee", colors: ["var(--amber)", "transparent", "transparent"] },
  { face: "(★‿★)", mood: "mood: deploy succeeded", colors: ["var(--coral)", "var(--amber)", "var(--blue)"] },
];

const TamagotchiPet = () => {
  const [index, setIndex] = useState(0);
  const current = STATES[index];

  const poke = () => setIndex((i) => (i + 1) % STATES.length);

  return (
    <Shell
      onClick={poke}
      role="button"
      tabIndex={0}
      aria-label="poke the pet"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          poke();
        }
      }}
    >
      <Screen>{current.face}</Screen>
      <Mood>{current.mood}</Mood>
      <Bars>
        {current.colors.map((c, i) => (
          <Bar key={i} $color={c} />
        ))}
      </Bars>
      <Hint>tap anywhere to poke</Hint>
    </Shell>
  );
};

export default TamagotchiPet;

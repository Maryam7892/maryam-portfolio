import React from "react";
import styled from "styled-components";

const GRID = 7;

// Simple 7x7 pixel-grid icons. Placeholder art direction, easy to swap for
// real pixel art once a final visual style is picked.
const PATTERNS = {
  about: [
    "...#...",
    "..###..",
    ".#####.",
    "#######",
    ".##.##.",
    ".##.##.",
    ".##.##.",
  ],
  projects: [
    "###....",
    "#######",
    "#.....#",
    "#.....#",
    "#.....#",
    "#.....#",
    "#######",
  ],
  skills: [
    "...#...",
    "..###..",
    ".#####.",
    "#######",
    ".#####.",
    "..###..",
    "...#...",
  ],
  experience: [
    ".#####.",
    ".#...#.",
    "#######",
    "#######",
    "#######",
    "#######",
    "#######",
  ],
  education: [
    "..###..",
    ".#####.",
    "#######",
    "...#...",
    "..###..",
    "...#...",
    ".......",
  ],
  certifications: [
    ".#...#.",
    "..#.#..",
    "...#...",
    "..###..",
    ".#####.",
    ".#####.",
    "..###..",
  ],
  contact: [
    "#######",
    "##...##",
    "#.#.#.#",
    "#..#..#",
    "#.....#",
    "#.....#",
    "#######",
  ],
};

const Svg = styled.svg`
  display: block;
`;

const PixelIcon = ({ type, color = "currentColor", size = 28 }) => {
  const pattern = PATTERNS[type] || PATTERNS.about;
  const cells = [];
  pattern.forEach((row, y) => {
    row.split("").forEach((c, x) => {
      if (c === "#") cells.push([x, y]);
    });
  });

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${GRID} ${GRID}`} shapeRendering="crispEdges">
      {cells.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="1" height="1" fill={color} />
      ))}
    </Svg>
  );
};

export default PixelIcon;

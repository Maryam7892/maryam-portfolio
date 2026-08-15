import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  display: block;
`;

const ICONS = {
  star: (
    <path d="M12 2 L14.5 8.5 L21.5 9 L16 13.2 L18 20 L12 16.2 L6 20 L8 13.2 L2.5 9 L9.5 8.5 Z" />
  ),
  headphones: (
    <path d="M4 13 C4 6.5 8.5 3 12 3 C15.5 3 20 6.5 20 13 M4 13 L4 17 A2 2 0 0 0 6 19 L6.5 19 A1.5 1.5 0 0 0 8 17.5 L8 14.5 A1.5 1.5 0 0 0 6.5 13 L4 13 M20 13 L20 17 A2 2 0 0 1 18 19 L17.5 19 A1.5 1.5 0 0 1 16 17.5 L16 14.5 A1.5 1.5 0 0 1 17.5 13 L20 13" />
  ),
  camera: (
    <path d="M4 8 L7 8 L8.5 5.5 L15.5 5.5 L17 8 L20 8 A1 1 0 0 1 21 9 L21 18 A1 1 0 0 1 20 19 L4 19 A1 1 0 0 1 3 18 L3 9 A1 1 0 0 1 4 8 Z M12 16.5 A4 4 0 1 0 12 8.5 A4 4 0 1 0 12 16.5 Z" />
  ),
  disc: (
    <path d="M12 21 A9 9 0 1 0 12 3 A9 9 0 1 0 12 21 Z M12 14 A2 2 0 1 0 12 10 A2 2 0 1 0 12 14 Z M4 8 L10 11" />
  ),
  hourglass: (
    <path d="M6 3 L18 3 L18 4 C18 8 14.5 9.5 12 11 C14.5 12.5 18 14 18 18 L18 19 L6 19 L6 18 C6 14 9.5 12.5 12 11 C9.5 9.5 6 8 6 4 Z" />
  ),
  bubble: (
    <path d="M4 5 L20 5 A1 1 0 0 1 21 6 L21 14 A1 1 0 0 1 20 15 L9 15 L5 19 L5 15 L4 15 A1 1 0 0 1 3 14 L3 6 A1 1 0 0 1 4 5 Z" />
  ),
  chart: (
    <path d="M3 20 L21 20 M6.5 20 L6.5 13 M11.5 20 L11.5 8 M16.5 20 L16.5 4 M13.5 8 L16.5 4 L19.5 8" />
  ),
  database: (
    <>
      <path d="M4 6 C4 4.3 7.6 3 12 3 C16.4 3 20 4.3 20 6 C20 7.7 16.4 9 12 9 C7.6 9 4 7.7 4 6 Z" />
      <path d="M4 6 L4 18 C4 19.7 7.6 21 12 21 C16.4 21 20 19.7 20 18 L20 6" />
      <path d="M4 12 C4 13.7 7.6 15 12 15 C16.4 15 20 13.7 20 12" />
    </>
  ),
  medical: (
    <>
      <path d="M12 3 A9 9 0 1 0 12.01 3 Z" />
      <path d="M12 8 L12 16 M8 12 L16 12" />
    </>
  ),
  checklist: (
    <>
      <path d="M6 3 L18 3 A1 1 0 0 1 19 4 L19 20 A1 1 0 0 1 18 21 L6 21 A1 1 0 0 1 5 20 L5 4 A1 1 0 0 1 6 3 Z" />
      <path d="M9 2.5 L15 2.5 A1 1 0 0 1 16 3.5 L16 4.5 A1 1 0 0 1 15 5.5 L9 5.5 A1 1 0 0 1 8 4.5 L8 3.5 A1 1 0 0 1 9 2.5 Z" />
      <path d="M8 10.5 L10 12.5 L14 8.5 M8 16.5 L10 18.5 L14 14.5" />
    </>
  ),
  face: (
    <>
      <path d="M3 8 L3 4 L7 4 M17 4 L21 4 L21 8 M21 16 L21 20 L17 20 M7 20 L3 20 L3 16" />
      <circle cx="9.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="11" r="1" fill="currentColor" stroke="none" />
      <path d="M9 15.5 C10 16.8 14 16.8 15 15.5" />
    </>
  ),
};

const StickerIcon = ({ type = "star", size = 24, color = "var(--coral)" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }} aria-hidden="true">
    <g stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" fill="none">
      {ICONS[type] || ICONS.star}
    </g>
  </Svg>
);

export default StickerIcon;

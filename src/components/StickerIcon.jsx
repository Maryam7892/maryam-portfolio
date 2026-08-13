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
};

const StickerIcon = ({ type = "star", size = 24, color = "var(--coral)" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <g stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" fill="none">
      {ICONS[type] || ICONS.star}
    </g>
  </Svg>
);

export default StickerIcon;

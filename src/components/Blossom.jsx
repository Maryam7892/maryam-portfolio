import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  display: inline-block;
  vertical-align: -4px;
  margin: 0 4px;
  flex-shrink: 0;
`;

// A small decorative cherry blossom flourish (five petals + a center dot),
// used sparingly next to headings as the site's Chinese/East-Asian floral
// touch. Purely visual, not text.
const Blossom = ({ size = 20, color = "var(--coral)" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <g fill={color} opacity="0.9">
      <ellipse cx="12" cy="5" rx="3.2" ry="4.2" />
      <ellipse cx="12" cy="19" rx="3.2" ry="4.2" />
      <ellipse cx="5" cy="12" rx="4.2" ry="3.2" />
      <ellipse cx="19" cy="12" rx="4.2" ry="3.2" />
      <ellipse cx="7.3" cy="7.3" rx="3.2" ry="4.2" transform="rotate(-45 7.3 7.3)" />
      <ellipse cx="16.7" cy="16.7" rx="3.2" ry="4.2" transform="rotate(-45 16.7 16.7)" />
    </g>
    <circle cx="12" cy="12" r="2.3" fill="var(--amber)" />
  </Svg>
);

export default Blossom;

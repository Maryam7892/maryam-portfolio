import React from "react";

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5 };

export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.6} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 22 11.3 22 14.7V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21h-4V9Z" />
  </svg>
);

export const ResumeIcon = () => (
  <svg viewBox="0 0 24 24" {...stroke} strokeWidth={1.6} aria-hidden="true">
    <path d="M14 3H6v18h12V7l-4-4Z" />
    <path d="M14 3v4h4M9 13h6M9 17h6" />
  </svg>
);

const EXPERTISE_ICONS = {
  agent: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 8V5M9 13h.01M15 13h.01M9.5 16.5h5M3 13v2M21 13v2" />
      <circle cx="12" cy="4" r="1" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5M8.5 11h5M11 8.5v5" />
    </>
  ),
  graph: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7.5 7.5 11 16.5M16.5 7.5 13 16.5M8 6h8" />
    </>
  ),
  vision: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  evaluate: (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </>
  ),
  deploy: (
    <>
      <path d="M12 3c3 2.5 4.5 6 4.5 10l-2 3h-5l-2-3c0-4 1.5-7.5 4.5-10Z" />
      <circle cx="12" cy="10" r="1.5" />
      <path d="M9.5 16l-2.5 4M14.5 16l2.5 4" />
    </>
  ),
};

export const ExpertiseIcon = ({ type }) => (
  <svg viewBox="0 0 24 24" {...stroke} aria-hidden="true">
    {EXPERTISE_ICONS[type]}
  </svg>
);
# Maryam's Portfolio

A dark, purple-and-black personal portfolio for **Maryam Amjad**, AI/ML Engineer. Built as a single-page React app with a playful, pixel/retro-computer personality: a tamagotchi-style pet, a pixel-art cat mascot, sound effects, an optional chiptune background loop, and a professional AI chatbot you can actually talk to.

👉 **Live site:** [maryam-amjad.vercel.app](https://maryam-amjad.vercel.app/)

---

## Features

- **Hero** with an availability badge, animated typewriter title, and a tamagotchi-style pet you can poke for a mood change
- **About** section with a two-column layout: bio (typewriter effect) alongside a custom pixel-art cat mascot, with small cherry-blossom flourishes around headings
- **Skills & Technologies** shown as a card grid grouped by category, with pill-style tags
- **Projects** as terminal/window-style cards with a top image slot, description, tech tags
- **Experience & Education** shown as a connected vertical timeline
- **Certifications** shown as "achievement unlocked" badges (flip to see details)
- **Contact** section with a working mailto-based form plus a short info panel and social links
- **Resume download** button (serves the actual PDF from `public/`)
- **Professional AI chatbot**: a floating "chat with me" button (bottom-right) links out to a [Qualzo](https://qualzo.app) Professional Companion chatbot that can answer questions about my background on my behalf
- **Scroll-to-top button** (bottom-left) appears once you've scrolled down
- **Sound design**: short synthesized click/poke/send sound effects (Web Audio API, no audio files) plus an optional chiptune-style background music loop, toggleable from the nav
- **Responsive**: collapsible hamburger nav on mobile, fluid type sizing, no fixed-width overflow traps
- Custom square cursor, subtle CRT-style scanline overlay, and hover/press micro-interactions throughout

## Tech Stack

- [React](https://react.dev/) (Create React App)
- [styled-components](https://styled-components.com/) for all styling (theme lives in CSS custom properties in `src/index.css`, so the whole palette can be re-themed from one file)
- [Framer Motion](https://www.framer.com/motion/) for scroll-in animations
- [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) for the hero/about typewriter effect
- Web Audio API for all sound effects and background music (synthesized, no audio assets)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

```bash
git clone https://github.com/Maryam7892/maryam-portfolio.git
cd maryam-portfolio
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000) with hot reload.

```bash
npm run build
```

Builds an optimized production bundle into `build/`.

## Project Structure

```
public/
  assets/            static images (e.g. the pixel-cat mascot)
  Maryam_Amjad_Resume.pdf
src/
  App.js             main page: hero, about, projects, skills, experience,
                      education, certifications, resume, contact
  index.css           theme (CSS variables), global styles
  components/         reusable pieces (Navbar, TamagotchiPet, CatMascot,
                       Blossom, StickerIcon, PixelIcon, TypeOnView,
                       ResumeDownload, ScrollToTop, ChatLink, ...)
  pages/
    AnimatedSkills.jsx  skills card grid
  utils/
    sound.js            synthesized click/poke/send effects + background
                         chiptune loop
```

Note: `src/components/WorldMap.jsx` is an earlier game-map navigation
concept that isn't currently rendered on the page, kept in the repo in
case it's revived later (e.g. as a footer easter egg), safe to delete if
not needed.

## Theming

Every color in the site is a CSS custom property defined once in
`src/index.css` (`--bg`, `--panel`, `--coral`, `--blue`, `--amber`, etc.).
Changing the palette is a matter of editing that one file rather than
hunting through components.

## Resume

The download button on the site serves the PDF directly from
`public/Maryam_Amjad_Resume.pdf`. To update it, replace that file (keep
the same filename, or update the filename referenced in
`src/components/ResumeDownload.jsx`).

## Contact

- Email: maryamamjad7892@gmail.com
- [LinkedIn](https://www.linkedin.com/in/maryam-amjad-82a595243/)
- [GitHub](https://github.com/Maryam7892)
- [Chat with my AI companion](https://qualzo.app/chat/cmqgfbyg0002njqar47r0sgtm)

import React, { useEffect, useState } from "react";
import { PROFILE } from "../data";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const classes = ["nav", scrolled && "scrolled", open && "open"].filter(Boolean).join(" ");

  return (
    <nav className={classes}>
      <div className="wrap">
        <a className="mark" href="#top" aria-label={`${PROFILE.first} ${PROFILE.last}, home`}>
          {PROFILE.initials}
        </a>
        <ul className="nav-links" id="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="nav-cta" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
          Download résumé
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

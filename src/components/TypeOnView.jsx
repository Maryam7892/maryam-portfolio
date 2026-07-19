import React, { useEffect, useRef, useState } from "react";
import { playBlip } from "../utils/sound";

const TypeOnView = ({ text, speed = 35, as: Tag = "span", ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [output, setOutput] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            playBlip();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [visible, text, speed]);

  const done = output.length >= text.length;

  return (
    <Tag ref={ref} {...rest}>
      {output}
      <span
        style={{
          borderRight: "3px solid var(--accent-dark)",
          marginLeft: "2px",
          animation: !visible || done ? "type-cursor 0.8s step-end infinite" : "none",
          opacity: visible ? 1 : 0,
        }}
      >
        &nbsp;
      </span>
    </Tag>
  );
};

export default TypeOnView;

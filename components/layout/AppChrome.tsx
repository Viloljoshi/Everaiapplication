"use client";

import { useEffect, useState } from "react";
import { Mark } from "@/components/ui/Mark";

const links = [
  ["loop", "Signal"],
  ["build", "Build"],
  ["experiment", "Experiment"],
  ["scale", "Scale"],
  ["cases", "Cases"],
  ["everai", "EverAI"],
];

export function AppChrome() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("loop");

  useEffect(() => {
    const sections = links
      .map(([id]) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      const cursor = window.innerHeight * 0.38;
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= cursor);
      if (current) setActive(current.id);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="From Signal to Scale, back to top">
          <Mark size={22} />
          <span>Signal / Scale</span>
        </a>
        <nav aria-label="Primary navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <span className="header-state" aria-hidden="true">
          {active} <i /> decision
        </span>
      </header>
      <div className="page-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </>
  );
}

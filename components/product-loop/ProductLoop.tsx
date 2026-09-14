"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { loopStages } from "@/content/product";
import { calmSpring } from "@/lib/motion";

export function ProductLoop() {
  const [[activeIndex, direction], setActive] = useState([0, 1]);
  const reduceMotion = useReducedMotion();
  const stageRail = useRef<HTMLDivElement>(null);
  const stageButtons = useRef<Array<HTMLButtonElement | null>>([]);
  const active = loopStages[activeIndex];
  const points = useMemo(
    () =>
      loopStages.map((_, index) => {
        const angle = (index / loopStages.length) * Math.PI * 2 - Math.PI / 2;
        return { x: 50 + Math.cos(angle) * 39, y: 50 + Math.sin(angle) * 39 };
      }),
    [],
  );

  useEffect(() => {
    if (!window.matchMedia("(max-width: 720px)").matches) return;
    const rail = stageRail.current;
    const stage = stageButtons.current[activeIndex];
    if (!rail || !stage) return;
    rail.scrollTo({
      left: stage.offsetLeft - (rail.clientWidth - stage.clientWidth) / 2,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeIndex, reduceMotion]);

  const selectStage = (index: number) => {
    if (index === activeIndex) return;
    setActive([index, index > activeIndex ? 1 : -1]);
  };

  const previousStage = () => {
    if (activeIndex === 0) return;
    setActive([activeIndex - 1, -1]);
  };

  const nextStage = () => {
    if (activeIndex < loopStages.length - 1) {
      setActive([activeIndex + 1, 1]);
      return;
    }

    document.getElementById("product-console")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="product-loop section-pad" id="loop" aria-labelledby="loop-title">
      <div className="shell section-heading split-heading">
        <div>
          <p className="section-index">The operating system</p>
          <h2 id="loop-title">Product is a loop,<br />not a relay race.</h2>
        </div>
        <p className="section-lede">Shipping is not the end of the product process. It is where <em>reality</em> enters it.</p>
      </div>
      <div className="loop-layout shell">
        <div ref={stageRail} className="loop-mobile-stages" role="group" aria-label="Product-building stages">
          {loopStages.map((stage, index) => (
            <button
              key={stage.id}
              ref={(node) => { stageButtons.current[index] = node; }}
              data-active={index === activeIndex}
              data-complete={index < activeIndex}
              onClick={() => selectStage(index)}
              aria-pressed={index === activeIndex}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage.label}</strong>
              {index === activeIndex && (
                <motion.i
                  className="loop-mobile-indicator"
                  layoutId="loop-mobile-indicator"
                  transition={calmSpring}
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </div>
        <div className="loop-orbit" role="group" aria-label="Interactive product-building loop">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="39" className="orbit-track" />
            <circle
              cx="50"
              cy="50"
              r="39"
              pathLength="100"
              className="orbit-progress"
              strokeDasharray={`${((activeIndex + 1) / loopStages.length) * 100} 100`}
            />
          </svg>
          {loopStages.map((stage, index) => (
            <button
              key={stage.id}
              className="loop-node"
              data-active={index === activeIndex}
              data-complete={index < activeIndex}
              style={{ left: `${points[index].x}%`, top: `${points[index].y}%` }}
              onClick={() => selectStage(index)}
              aria-pressed={index === activeIndex}
            >
              {index === activeIndex && <motion.i className="loop-active-dot" layoutId="loop-active-dot" transition={calmSpring} aria-hidden="true" />}
              <span>{String(index + 1).padStart(2, "0")}</span>
              {stage.label}
            </button>
          ))}
          <div className="loop-core" aria-hidden="true">
            <span>Signal</span>
            <i />
            <span>Decision</span>
          </div>
        </div>
        <div className="loop-readout" aria-live="polite">
          <div className="readout-count"><span>{String(activeIndex + 1).padStart(2, "0")}</span> / {loopStages.length}</div>
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: direction * 18, scale: 0.985 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={calmSpring}
          >
            <p>{active.label}</p>
            <h3>{active.question}</h3>
            <div className="readout-line" />
            <p className="readout-detail">{active.detail}</p>
            {activeIndex === loopStages.length - 1 && (
              <p className="loop-completion-note">Loop complete. Continue into a worked product exercise.</p>
            )}
          </motion.div>
          <div className="loop-controls">
            <button onClick={previousStage} disabled={activeIndex === 0}>Previous</button>
            <button className="loop-next" onClick={nextStage}>
              {activeIndex === loopStages.length - 1 ? "Continue to the console" : "Next stage"}
              <span aria-hidden="true">{activeIndex === loopStages.length - 1 ? "↓" : "→"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

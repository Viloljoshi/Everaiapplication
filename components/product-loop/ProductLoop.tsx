"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { loopStages } from "@/content/product";

export function ProductLoop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = loopStages[activeIndex];
  const points = useMemo(
    () =>
      loopStages.map((_, index) => {
        const angle = (index / loopStages.length) * Math.PI * 2 - Math.PI / 2;
        return { x: 50 + Math.cos(angle) * 39, y: 50 + Math.sin(angle) * 39 };
      }),
    [],
  );

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
        <div className="loop-orbit" role="group" aria-label="Interactive product-building loop">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="39" className="orbit-track" />
            <circle
              cx="50"
              cy="50"
              r="39"
              className="orbit-progress"
              pathLength="100"
              strokeDasharray={`${((activeIndex + 1) / loopStages.length) * 100} 100`}
            />
          </svg>
          {loopStages.map((stage, index) => (
            <button
              key={stage.id}
              className="loop-node"
              data-active={index === activeIndex}
              style={{ left: `${points[index].x}%`, top: `${points[index].y}%` }}
              onClick={() => setActiveIndex(index)}
              aria-pressed={index === activeIndex}
            >
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
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>{active.label}</p>
              <h3>{active.question}</h3>
              <div className="readout-line" />
              <p className="readout-detail">{active.detail}</p>
            </motion.div>
          </AnimatePresence>
          <div className="loop-controls">
            <button onClick={() => setActiveIndex((activeIndex - 1 + loopStages.length) % loopStages.length)}>Previous</button>
            <button onClick={() => setActiveIndex((activeIndex + 1) % loopStages.length)}>Next stage</button>
          </div>
        </div>
      </div>
    </section>
  );
}

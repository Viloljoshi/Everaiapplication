"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { calmSpring } from "@/lib/motion";

const scales = [
  { id: "reach", number: 54_000_000, display: "54M", label: "unique-user reach", context: "A campaign/product experience operating across enormous consumer exposure." },
  { id: "product", number: 6_500_000, display: "6.5M", label: "consumer product users", context: "Consumer finance and AI/ML systems where model behaviour becomes user behaviour." },
  { id: "cases", number: 575_000, display: "575K+", label: "monthly AI/document cases", context: "High-volume automation where confidence determines when humans enter the loop." },
];

const systemConcerns = ["Observability", "Progressive rollout", "Segmentation", "Latency", "Cost", "Fallbacks", "Abuse", "Drift", "Support", "Trust"];

export function ScaleVisualization() {
  const [[activeIndex, direction], setActive] = useState([0, 1]);
  const active = scales[activeIndex];
  const rareEvents = useMemo(() => Math.round(active.number * 0.0001).toLocaleString("en-US"), [active.number]);

  return (
    <section className="scale-section section-pad" id="scale" aria-labelledby="scale-title">
      <div className="shell scale-heading">
        <p className="section-index">Scale</p>
        <h2 id="scale-title">Scale changes<br />the product problem.</h2>
      </div>
      <div className="shell scale-stage">
        <div className="scale-selector" role="tablist" aria-label="Scale examples">
          {scales.map((scale, index) => (
            <button key={scale.id} role="tab" aria-selected={active.id === scale.id} onClick={() => setActive([index, index >= activeIndex ? 1 : -1])}>
              <strong>{scale.display}</strong><span>{scale.label}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div className="scale-readout" key={active.id} initial={{ opacity: 0, x: direction * 14, scale: 0.995 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: direction * -14, scale: 0.995 }} transition={calmSpring}>
            <div className="rare-math">
              <span>0.01%</span><i>×</i><span>{active.number.toLocaleString("en-US")}</span><i>=</i><strong>{rareEvents}</strong>
            </div>
            <p>people can encounter a “rare” edge case.</p>
            <blockquote>At scale, edge cases become <em>queues.</em></blockquote>
            <small>{active.context}</small>
          </motion.div>
        </AnimatePresence>
        <div className="complexity-field" aria-label="Product systems required at scale">
          {systemConcerns.map((item, index) => <span key={item} style={{ "--i": index } as React.CSSProperties}>{item}</span>)}
          <div className="complexity-core"><i />One user<br />experience</div>
        </div>
      </div>
    </section>
  );
}

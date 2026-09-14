"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const scales = [
  { id: "reach", number: 54_000_000, display: "54M", label: "unique-user reach", context: "A campaign/product experience operating across enormous consumer exposure." },
  { id: "product", number: 6_500_000, display: "6.5M", label: "consumer product users", context: "Consumer finance and AI/ML systems where model behaviour becomes user behaviour." },
  { id: "cases", number: 575_000, display: "575K+", label: "monthly AI/document cases", context: "High-volume automation where confidence determines when humans enter the loop." },
];

const systemConcerns = ["Observability", "Progressive rollout", "Segmentation", "Latency", "Cost", "Fallbacks", "Abuse", "Drift", "Support", "Trust"];

export function ScaleVisualization() {
  const [activeId, setActiveId] = useState("reach");
  const active = scales.find((scale) => scale.id === activeId) ?? scales[0];
  const rareEvents = useMemo(() => Math.round(active.number * 0.0001).toLocaleString("en-US"), [active.number]);

  return (
    <section className="scale-section section-pad" id="scale" aria-labelledby="scale-title">
      <div className="shell scale-heading">
        <p className="section-index">Scale</p>
        <h2 id="scale-title">Scale changes<br />the product problem.</h2>
      </div>
      <div className="shell scale-stage">
        <div className="scale-selector" role="tablist" aria-label="Scale examples">
          {scales.map((scale) => (
            <button key={scale.id} role="tab" aria-selected={activeId === scale.id} onClick={() => setActiveId(scale.id)}>
              <strong>{scale.display}</strong><span>{scale.label}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div className="scale-readout" key={active.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
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

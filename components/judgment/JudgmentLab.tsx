"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const tensions = [
  ["Speed", "Certainty", "Move fastest where the decision is reversible. Buy certainty where failure is expensive or hard to detect."],
  ["Personalization", "Privacy", "Earn context through transparent value and user control. More memory is not automatically a better product."],
  ["Engagement", "Well-being", "For emotionally significant AI products, quality must include agency, healthy boundaries and safety—not only session depth."],
  ["Model quality", "Latency", "The best model on a benchmark can still be the wrong experience if the pause breaks conversational flow."],
  ["Automation", "Control", "Increase autonomy only where confidence, reversibility and observability justify it."],
  ["Growth", "Trust", "Compounding growth needs compounding trust. A metric win that damages confidence is product debt."],
];

export function JudgmentLab() {
  const [active, setActive] = useState(2);
  const [network, setNetwork] = useState(false);
  const item = tensions[active];

  return (
    <section className="judgment-section section-pad" aria-labelledby="judgment-title">
      <div className="shell judgment-layout">
        <div className="judgment-intro">
          <p className="section-index">Product judgment</p>
          <h2 id="judgment-title">What I<br />optimize for.</h2>
          <p>Not values in isolation. Tensions that require a decision.</p>
        </div>
        <div className="tension-list" role="tablist" aria-label="Product judgment tensions">
          {tensions.map(([left, right], index) => (
            <button key={left} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <span>{left}</span><i /><span>{right}</span>
            </button>
          ))}
        </div>
        <div className="tension-detail" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div key={item[0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p>{item[0]} <i /> {item[1]}</p>
              <blockquote>{item[2]}</blockquote>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="shell collaboration-model">
        <div className="collaboration-copy">
          <p className="section-index">How I work with engineers</p>
          <h3>Fewer handoffs.<br />More shared context.</h3>
          <p>AI lets me arrive at engineering conversations with something inspectable, not just something imaginable.</p>
          <button onClick={() => setNetwork(!network)}>{network ? "Show the handoff chain" : "Transform the working model"}</button>
        </div>
        <div className="collaboration-visual" data-network={network} aria-label={network ? "Collaborative product network" : "Traditional linear handoff chain"}>
          {network ? (
            <>
              <span className="collab-core">Build</span>
              {['PM','Data','Design','Engineering','User'].map((label, index) => <motion.span className={`collab-node n${index}`} key={label} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}>{label}</motion.span>)}
              <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 50 50 10M50 50 14 34M50 50 86 34M50 50 22 82M50 50 78 82" /></svg>
            </>
          ) : (
            <div className="handoff-chain">{['PM','PRD','Design','Engineering','QA','Data'].map((label) => <span key={label}>{label}<i /></span>)}</div>
          )}
        </div>
      </div>
    </section>
  );
}

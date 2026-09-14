"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const weeks = [
  {
    week: "Week 1", verb: "Observe", output: "Product / system map + top unanswered questions",
    actions: ["Use the product deeply", "Map primary journeys and event taxonomy", "Inspect funnels, support and moderation signals", "Understand model and experiment constraints", "Find where teams lose time"],
  },
  {
    week: "Week 2", verb: "Find signal", output: "One falsifiable opportunity thesis",
    actions: ["Identify one meaningful behaviour problem", "Segment and quantify it", "Inspect qualitative examples", "Separate product, model, UX and operations causes", "Write what evidence would prove the thesis wrong"],
  },
  {
    week: "Week 3", verb: "Make it real", output: "Experiment ready for controlled exposure",
    actions: ["Prototype the smallest meaningful intervention", "Build with AI where appropriate", "Collaborate with design and engineering", "Define events and guardrails", "Pre-commit the decision rule"],
  },
  {
    week: "Week 4", verb: "Ship + learn", output: "Scale, iterate or stop",
    actions: ["Launch to a narrow cohort", "Watch behaviour and system health", "Inspect qualitative failures", "Compare segments", "Make the decision and document why"],
  },
];

export function FirstThirty() {
  const [active, setActive] = useState(0);
  const week = weeks[active];
  return (
    <section className="plan-section section-pad" aria-labelledby="plan-title">
      <div className="shell section-heading split-heading">
        <div>
          <p className="section-index">First 30 days</p>
          <h2 id="plan-title">A learning loop,<br />not an orientation plan.</h2>
        </div>
        <p className="section-lede">I don&apos;t need 90 days to start learning from production.</p>
      </div>
      <div className="plan-workspace shell">
        <div className="week-tabs" role="tablist" aria-label="First 30-day operating plan">
          {weeks.map((item, index) => (
            <button key={item.week} role="tab" aria-selected={active === index} onClick={() => setActive(index)}>
              <span>{item.week}</span><strong>{item.verb}</strong><i />
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div className="week-panel" key={week.week} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }}>
            <p>{week.week} / {week.verb}</p>
            <ol>{week.actions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span>{action}</li>)}</ol>
            <div className="week-output"><span>Output</span><strong>{week.output}</strong></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

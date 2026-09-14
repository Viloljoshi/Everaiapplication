"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { eventTaxonomy, opportunities } from "@/content/product";
import { calmSpring, quickSpring } from "@/lib/motion";

const metricBranches = [
  ["Activation", "time to meaning", "first-session completion"],
  ["Engagement quality", "conversation depth", "user-initiated return"],
  ["Retention", "D1", "D7", "D30"],
  ["Quality", "regeneration", "memory correction", "abandonment"],
  ["Trust", "report rate", "block rate", "safety incidents"],
  ["Economics", "paid conversion", "subscription retention", "cost / retained user"],
];

export function CompanionshipLab() {
  const [[activeIndex, direction], setActive] = useState([0, 1]);
  const [metric, setMetric] = useState(0);
  const active = opportunities[activeIndex];

  return (
    <section className="everai-section section-pad" id="everai" aria-labelledby="everai-title">
      <div className="shell section-heading wide-heading">
        <p className="section-index">AI companionship product lab</p>
        <h2 id="everai-title">If I joined the product tomorrow,<br /><em>where would I look first?</em></h2>
        <p className="disclaimer">These are hypotheses to investigate, not claims about EverAI&apos;s current product or data.</p>
      </div>
      <div className="opportunity-lab shell">
        <div className="opportunity-tabs" role="tablist" aria-label="Opportunity lenses">
          {opportunities.map((opportunity, index) => (
            <button key={opportunity.id} role="tab" aria-selected={active.id === opportunity.id} onClick={() => setActive([index, index >= activeIndex ? 1 : -1])}>
              <span>{String(index + 1).padStart(2, "0")}</span>{opportunity.title}
              {active.id === opportunity.id && <motion.i className="tab-position" layoutId="opportunity-tab" transition={calmSpring} />}
            </button>
          ))}
        </div>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div className="opportunity-panel" key={active.id} initial={{ opacity: 0, x: direction * 14, scale: 0.995 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: direction * -14, scale: 0.995 }} transition={calmSpring}>
            <div className="opportunity-question">
              <p>Question</p>
              <h3>{active.question}</h3>
            </div>
            <div className="opportunity-evidence">
              <p>Investigate</p>
              <ul>{active.investigate.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="opportunity-experiment">
              <p>Potential experiment</p>
              <blockquote>{active.experiment}</blockquote>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="metric-model shell">
        <div className="metric-copy">
          <p className="section-index">Illustrative product metric model</p>
          <h3>Sustained meaningful companionship</h3>
          <p>A north-star concept only works when the behaviours, quality costs and trust constraints beneath it are visible.</p>
        </div>
        <div className="metric-tree">
          <div className="metric-root"><span>North-star concept</span>Sustained meaningful<br />companionship</div>
          <div className="metric-branches" role="tablist" aria-label="Metric tree branches">
            {metricBranches.map((branch, index) => (
              <button key={branch[0]} role="tab" aria-selected={metric === index} onClick={() => setMetric(index)}>
                {branch[0]}
              </button>
            ))}
          </div>
          <div className="metric-leaves" aria-live="polite">
            {metricBranches[metric].slice(1).map((leaf) => <motion.span key={leaf} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={quickSpring}>{leaf}</motion.span>)}
          </div>
        </div>
      </div>

      <div className="taxonomy shell">
        <div>
          <p className="section-index">Instrumentation</p>
          <h3>Events become useful when they reach a decision.</h3>
          <p>Event <i /> user property <i /> cohort <i /> metric <i /> decision</p>
        </div>
        <div className="event-stream" aria-label="Illustrative event taxonomy">
          {eventTaxonomy.map((event, index) => <span key={event}><i>{String(index + 1).padStart(2, "0")}</i>{event}</span>)}
        </div>
        <div className="taxonomy-example">
          <p>Derived metric</p>
          <strong>Meaningful Return Rate</strong>
          <code>returning users reaching N meaningful exchanges<br />÷ eligible activated users</code>
          <small>Event names and metric are illustrative.</small>
        </div>
      </div>
    </section>
  );
}

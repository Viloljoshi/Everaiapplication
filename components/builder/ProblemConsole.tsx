"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { calmSpring } from "@/lib/motion";

const choices = [
  ["A", "Redesign the whole onboarding", "Large build; weak connection to the concentrated signal."],
  ["B", "Build a recommendation engine", "High cost before the core continuity uncertainty is understood."],
  ["C", "Run a targeted continuity experiment", "Tests the core uncertainty cheaply and reversibly."],
  ["D", "Send more push notifications", "May increase returns without improving the reason to return."],
];

export function ProblemConsole() {
  const [[stage, direction], setStage] = useState([0, 1]);
  const [choice, setChoice] = useState<string | null>(null);

  const panelMotion = {
    initial: { opacity: 0, x: direction * 16, scale: 0.99 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: direction * -16, scale: 0.99 },
  };

  return (
    <section className="problem-section section-pad" id="product-console" aria-labelledby="problem-title">
      <div className="shell problem-layout">
        <div className="problem-prompt">
          <p className="section-index">Product builder console</p>
          <p className="disclaimer">Illustrative hypothesis. No internal EverAI data used.</p>
          <h2 id="problem-title">Day-7 retention fell 8% for newly activated users.</h2>
          <div className="stage-rail" aria-label={`Step ${stage + 1} of 3`}>
            {[0, 1, 2].map((index) => <i key={index} data-active={index <= stage} />)}
          </div>
        </div>
        <div className="problem-workspace" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {stage === 0 && (
              <motion.div key="investigate" className="problem-panel" {...panelMotion} transition={calmSpring}>
                <p className="panel-kicker">Investigate the signal</p>
                <h3>The drop is concentrated on days 2 to 4.</h3>
                <dl className="evidence-list">
                  <div><dt>Cohort</dt><dd>New users</dd></div>
                  <div><dt>Observed behaviour</dt><dd>Meaningful second conversations correlate with retention.</dd></div>
                  <div><dt>Potential causes</dt><dd>Continuity, recall, re-entry, preference signal, or cohort mix.</dd></div>
                  <div><dt>Still unknown</dt><dd>Which cause is driving the behaviour.</dd></div>
                </dl>
                <button className="console-action" onClick={() => setStage([1, 1])}>Frame the problem</button>
              </motion.div>
            )}
            {stage === 1 && (
              <motion.div key="frame" className="problem-panel" {...panelMotion} transition={calmSpring}>
                <p className="panel-kicker">Frame the behaviour</p>
                <div className="framing bad"><span>Broad</span><p>Improve retention.</p></div>
                <div className="framing good"><span>Falsifiable</span><p>New users are not consistently establishing enough conversational continuity to make returning feel valuable.</p></div>
                <button className="console-action" onClick={() => setStage([2, 1])}>Choose the next move</button>
              </motion.div>
            )}
            {stage === 2 && (
              <motion.div key="choose" className="problem-panel" {...panelMotion} transition={calmSpring}>
                <p className="panel-kicker">Choose the next move</p>
                <div className="choice-list">
                  {choices.map(([id, title, reason]) => (
                    <button key={id} onClick={() => setChoice(id)} data-selected={choice === id}>
                      <span>{id}</span><strong>{title}</strong><small>{choice === id ? reason : "Select to inspect"}</small>
                    </button>
                  ))}
                </div>
                {choice && <p className={`choice-verdict ${choice === "C" ? "best" : "weak"}`}>{choice === "C" ? "Best next move: it tests the core uncertainty with limited cost and exposure." : "Possible, but it does not isolate the core uncertainty yet."}</p>}
                <button className="reset-action" onClick={() => { setStage([0, -1]); setChoice(null); }}>Restart exercise</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

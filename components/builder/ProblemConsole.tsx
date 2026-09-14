"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const choices = [
  ["A", "Redesign the whole onboarding", "Large build; weak connection to the concentrated signal."],
  ["B", "Build a recommendation engine", "High cost before the core continuity uncertainty is understood."],
  ["C", "Run a targeted continuity experiment", "Tests the core uncertainty cheaply and reversibly."],
  ["D", "Send more push notifications", "May increase returns without improving the reason to return."],
];

export function ProblemConsole() {
  const [stage, setStage] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <section className="problem-section section-pad" aria-labelledby="problem-title">
      <div className="shell problem-layout">
        <div className="problem-prompt">
          <p className="section-index">Product builder console</p>
          <p className="disclaimer">Illustrative hypothesis — no internal EverAI data used.</p>
          <h2 id="problem-title">Day-7 retention fell 8% for newly activated users.</h2>
          <div className="stage-rail" aria-label={`Step ${stage + 1} of 3`}>
            {[0, 1, 2].map((index) => <i key={index} data-active={index <= stage} />)}
          </div>
        </div>
        <div className="problem-workspace" aria-live="polite">
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div key="investigate" className="problem-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="panel-kicker">Investigate the signal</p>
                <h3>The drop is concentrated on days 2–4.</h3>
                <dl className="evidence-list">
                  <div><dt>Cohort</dt><dd>New users</dd></div>
                  <div><dt>Observed behaviour</dt><dd>Meaningful second conversations correlate with retention.</dd></div>
                  <div><dt>Potential causes</dt><dd>Continuity, recall, re-entry, preference signal, or cohort mix.</dd></div>
                  <div><dt>Still unknown</dt><dd>Which cause is driving the behaviour.</dd></div>
                </dl>
                <button className="console-action" onClick={() => setStage(1)}>Frame the problem</button>
              </motion.div>
            )}
            {stage === 1 && (
              <motion.div key="frame" className="problem-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="panel-kicker">Frame the behaviour</p>
                <div className="framing bad"><span>Broad</span><p>Improve retention.</p></div>
                <div className="framing good"><span>Falsifiable</span><p>New users are not consistently establishing enough conversational continuity to make returning feel valuable.</p></div>
                <button className="console-action" onClick={() => setStage(2)}>Choose the next move</button>
              </motion.div>
            )}
            {stage === 2 && (
              <motion.div key="choose" className="problem-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="panel-kicker">Choose the next move</p>
                <div className="choice-list">
                  {choices.map(([id, title, reason]) => (
                    <button key={id} onClick={() => setChoice(id)} data-selected={choice === id}>
                      <span>{id}</span><strong>{title}</strong><small>{choice === id ? reason : "Select to inspect"}</small>
                    </button>
                  ))}
                </div>
                {choice && <p className={`choice-verdict ${choice === "C" ? "best" : "weak"}`}>{choice === "C" ? "Best next move: it tests the core uncertainty with limited cost and exposure." : "Possible, but it does not isolate the core uncertainty yet."}</p>}
                <button className="reset-action" onClick={() => { setStage(0); setChoice(null); }}>Restart exercise</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { builderTabs } from "@/content/builder";
import { calmSpring } from "@/lib/motion";

export function BuilderConsole() {
  const [[activeIndex, direction], setActive] = useState([0, 1]);
  const active = builderTabs[activeIndex];

  return (
    <section className="builder-section section-pad" id="build" aria-labelledby="builder-title">
      <div className="shell section-heading split-heading">
        <div>
          <p className="section-index">Build with AI</p>
          <h2 id="builder-title">Make the assumption<br />inspectable.</h2>
        </div>
        <p className="section-lede">AI does not replace product judgment. It compresses the distance between <em>judgment</em> and evidence.</p>
      </div>
      <div className="builder-window shell">
        <div className="window-bar">
          <span>Continuity / working model</span>
          <span className="live-state"><i /> illustrative reconstruction</span>
        </div>
        <div className="builder-tabs" role="tablist" aria-label="AI-assisted product workflow">
          {builderTabs.map((tab, index) => (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active.id === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActive([index, index >= activeIndex ? 1 : -1])}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>{tab.label}
              {active.id === tab.id && <motion.i className="tab-position" layoutId="builder-tab" transition={calmSpring} />}
            </button>
          ))}
        </div>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            className="builder-panel"
            key={active.id}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            initial={{ opacity: 0, x: direction * 14, scale: 0.995 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -14, scale: 0.995 }}
            transition={calmSpring}
          >
            <div className="builder-copy">
              <p className="panel-kicker">{active.kicker}</p>
              <h3>{active.title}</h3>
              <p>{active.body}</p>
            </div>
            <div className="builder-output">
              {active.code ? (
                <pre><code>{active.code}</code></pre>
              ) : (
                <dl>
                  {active.lines?.map((line) => {
                    const [term, value] = line.split(" / ");
                    return <div key={line}><dt>{term}</dt><dd>{value}</dd></div>;
                  })}
                </dl>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="builder-status">
          <span>Research</span><i /><span>Prototype</span><i /><span>Engineering review</span><i /><strong>Smaller handoff</strong>
        </div>
      </div>
      <p className="builder-quote shell">“The faster I can make an assumption tangible, the faster reality can tell me whether it was wrong.”</p>
    </section>
  );
}

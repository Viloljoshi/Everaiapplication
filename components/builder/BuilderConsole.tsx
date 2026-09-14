"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { builderTabs } from "@/content/builder";

export function BuilderConsole() {
  const [activeId, setActiveId] = useState("research");
  const active = builderTabs.find((tab) => tab.id === activeId) ?? builderTabs[0];

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
              aria-selected={activeId === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveId(tab.id)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>{tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="builder-panel"
            key={active.id}
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
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

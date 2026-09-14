"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { caseFiles } from "@/content/product";
import { calmSpring } from "@/lib/motion";

export function CaseFiles() {
  const [openId, setOpenId] = useState(caseFiles[0].id);

  return (
    <section className="cases-section section-pad" id="cases" aria-labelledby="cases-title">
      <div className="shell section-heading split-heading">
        <div>
          <p className="section-index">Case files</p>
          <h2 id="cases-title">Evidence,<br />under examination.</h2>
        </div>
        <p className="section-lede">Not victory-lap summaries. Each file connects a product decision to the system around it.</p>
      </div>
      <div className="case-list shell">
        {caseFiles.map((item) => {
          const open = openId === item.id;
          return (
            <article className="case-file" key={item.id} data-open={open}>
              <h3>
                <button onClick={() => setOpenId(open ? "" : item.id)} aria-expanded={open} aria-controls={`case-${item.id}`}>
                  <span className="case-number">{item.number}</span>
                  <span className="case-domain">{item.domain}</span>
                  <strong>{item.headline}</strong>
                  <span className="case-metric">{item.metric}</span>
                  <i aria-hidden="true" />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`case-${item.id}`}
                    className="case-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={calmSpring}
                  >
                    <p className="case-thesis">{item.thesis}</p>
                    <div className="case-flow" aria-label={`${item.domain} system flow`}>
                      {item.flow.map((step, index) => <div key={step}><span>{step}</span>{index < item.flow.length - 1 && <i />}</div>)}
                    </div>
                    <div className="case-details">
                      {item.sections.map((section) => <div key={section.label}><h4>{section.label}</h4><p>{section.body}</p></div>)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";

type SliderProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
};

function Slider({ id, label, value, min, max, step, display, onChange }: SliderProps) {
  const position = ((value - min) / (max - min)) * 100;
  return (
    <div className="lab-control">
      <label htmlFor={id}><span>{label}</span><strong>{display}</strong></label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        style={{ "--position": `${position}%` } as React.CSSProperties}
      />
      <div className="range-ends"><span>{min}</span><span>{max}</span></div>
    </div>
  );
}

export function ExperimentLab() {
  const [exposure, setExposure] = useState(25);
  const [lift, setLift] = useState(6.4);
  const [latency, setLatency] = useState(42);
  const [safety, setSafety] = useState(0.3);
  const [cost, setCost] = useState(2.1);
  const [confidence, setConfidence] = useState(76);

  const result = useMemo(() => {
    const failed = safety > 3 || latency > 250 || cost > 25 || lift <= 0;
    const passed = lift >= 5 && safety <= 1 && latency <= 120 && cost <= 10 && confidence >= 60;
    if (failed) {
      const cause = safety > 3 ? "report-rate guardrail" : latency > 250 ? "latency tolerance" : cost > 25 ? "economic guardrail" : "primary metric";
      return { decision: "Stop", next: "Do not expand exposure", reason: `Engagement cannot compensate for a failed ${cause}. Killing a weak hypothesis is progress.` };
    }
    if (passed) {
      const nextExposure = Math.min(100, exposure < 50 ? 50 : exposure + 20);
      return { decision: "Scale", next: `Increase exposure to ${nextExposure}%`, reason: "The primary metric exceeds its threshold while safety, latency and economics remain inside tolerance. Monitor long-tail cohorts." };
    }
    return { decision: "Iterate", next: "Keep exposure constrained", reason: "The evidence is promising but not decision-grade. Improve the treatment or gather more certainty without widening risk." };
  }, [cost, exposure, latency, lift, safety, confidence]);

  return (
    <section className="experiment-section section-pad" id="experiment" aria-labelledby="experiment-title">
      <div className="shell section-heading split-heading">
        <div>
          <p className="section-index">Experiment lab</p>
          <h2 id="experiment-title">Decide the rule<br />before the result.</h2>
        </div>
        <p className="section-lede">A hypothesis, a primary metric, guardrails, a decision rule and an owner. Without all five, it is just exposure.</p>
      </div>
      <div className="experiment-shell shell" data-decision={result.decision.toLowerCase()}>
        <div className="lab-controls">
          <Slider id="exposure" label="Exposure" value={exposure} min={10} max={100} step={5} display={`${exposure}%`} onChange={setExposure} />
          <Slider id="lift" label="Observed D7 lift" value={lift} min={-5} max={20} step={0.1} display={`${lift > 0 ? "+" : ""}${lift.toFixed(1)}%`} onChange={setLift} />
          <Slider id="latency" label="Latency impact" value={latency} min={0} max={500} step={1} display={`+${latency}ms`} onChange={setLatency} />
          <Slider id="safety" label="Report-rate delta" value={safety} min={-10} max={20} step={0.1} display={`${safety > 0 ? "+" : ""}${safety.toFixed(1)}%`} onChange={setSafety} />
          <Slider id="cost" label="Cost / session" value={cost} min={0} max={40} step={0.1} display={`+${cost.toFixed(1)}%`} onChange={setCost} />
          <Slider id="confidence" label="Confidence" value={confidence} min={0} max={100} step={1} display={`${confidence}%`} onChange={setConfidence} />
        </div>
        <div className="decision-output" aria-live="polite">
          <div className="decision-orbit" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((item) => <i key={item} style={{ "--i": item } as React.CSSProperties} />)}
          </div>
          <p>Decision</p>
          <motion.h3 key={result.decision} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>{result.decision}</motion.h3>
          <strong>{result.next}</strong>
          <p className="decision-reason">{result.reason}</p>
          <dl className="decision-metrics">
            <div><dt>Primary</dt><dd className={lift >= 5 ? "pass" : "watch"}>{lift >= 5 ? "Pass" : "Watch"}</dd></div>
            <div><dt>Safety</dt><dd className={safety <= 1 ? "pass" : safety <= 3 ? "watch" : "fail"}>{safety <= 1 ? "Pass" : safety <= 3 ? "Watch" : "Fail"}</dd></div>
            <div><dt>System</dt><dd className={latency <= 120 ? "pass" : latency <= 250 ? "watch" : "fail"}>{latency <= 120 ? "Pass" : latency <= 250 ? "Watch" : "Fail"}</dd></div>
            <div><dt>Economics</dt><dd className={cost <= 10 ? "pass" : cost <= 25 ? "watch" : "fail"}>{cost <= 10 ? "Pass" : cost <= 25 ? "Watch" : "Fail"}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

const layers = ["Product", "Model", "Policy", "Detection", "Intervention", "Human escalation", "Evaluation", "Monitoring"];
const signals = ["Report rate", "Block rate", "False positives", "False negatives", "Severity-weighted incidents", "Refusal quality", "Latency", "Cohort disparities"];

export function SafetySystem() {
  return (
    <section className="safety-section section-pad" aria-labelledby="safety-title">
      <div className="shell section-heading split-heading">
        <div>
          <p className="section-index">Safety + quality</p>
          <h2 id="safety-title">High engagement<br />requires higher trust.</h2>
        </div>
        <p className="section-lede">For companionship products, trust is part of retention. Safety is a measurable product system—not a final moderation API call.</p>
      </div>
      <div className="safety-system shell">
        <div className="safety-layers" aria-label="Layered product safety system">
          {layers.map((layer, index) => (
            <div key={layer} style={{ "--i": index } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{layer}</strong><i />
            </div>
          ))}
        </div>
        <div className="safety-signals">
          <p>Measurements that keep the system honest</p>
          <div>{signals.map((signal) => <span key={signal}>{signal}</span>)}</div>
          <small>This is my operating model. It does not describe or speculate about EverGuard&apos;s implementation.</small>
        </div>
      </div>
    </section>
  );
}

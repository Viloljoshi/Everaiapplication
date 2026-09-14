import { Arrow } from "@/components/ui/Mark";
import { SignalField } from "./SignalField";

const metrics = [
  ["54M", "unique-user scale"],
  ["6.5M", "consumer product users"],
  ["575K+", "monthly AI document cases"],
];

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <SignalField />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-content shell">
        <p className="hero-intro">A Product Builder OS</p>
        <h1 id="hero-title">
          <span>I don&apos;t hand product off.</span>
          <span>I close the loop.</span>
        </h1>
        <p className="hero-thesis">From signal <i /> shipped <i /> measured <i /> better</p>
        <p className="hero-copy">
          I investigate the problem, build the smallest meaningful version, ship it, measure reality,
          and let the evidence decide what happens next.
        </p>
        <a className="primary-action" href="#loop">
          Enter the build loop <Arrow direction="down" />
        </a>
      </div>
      <div className="hero-footer shell">
        <div className="hero-metrics" aria-label="Scale experience">
          {metrics.map(([value, label]) => (
            <div key={value} title={value === "54M" ? "At this scale, a 0.01% edge case is 5,400 people." : undefined}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p>Built with AI-assisted development.<br />Not a slide deck.</p>
      </div>
    </section>
  );
}

import { Arrow, Mark } from "@/components/ui/Mark";

export function FinalCta() {
  return (
    <footer className="final-section section-pad" aria-labelledby="final-title">
      <div className="shell final-content">
        <p className="section-index">Why EverAI</p>
        <h2 id="final-title"><span>50M</span><i /> <span>100M</span><i /> <span>500M</span></h2>
        <p className="final-statement">isn&apos;t just a growth problem.</p>
        <p className="final-answer">It&apos;s a <em>product system</em> problem.<br />And that&apos;s the kind I want to build.</p>
        <div className="final-copy">
          <p>I&apos;ve operated across consumer scale, AI/ML systems, experimentation, automation and high-volume workflows.</p>
          <p>What interests me about EverAI is where product judgment, AI capability, consumer behaviour and execution speed all meet.</p>
        </div>
        <div className="final-actions">
          <a className="primary-action" href="https://github.com/Viloljoshi/Everaiapplication" target="_blank" rel="noreferrer" aria-label="Let's build. Open the source repository in a new tab">Let&apos;s build <Arrow direction="up-right" /></a>
          <details className="under-hood" id="under-the-hood">
            <summary>Under the hood <Arrow direction="down" /></summary>
            <div>
              <p>This artifact is part of the application.</p>
              <dl>
                <div><dt>Problem</dt><dd>How do I demonstrate that I build rather than merely claim it?</dd></div>
                <div><dt>Hypothesis</dt><dd>An interactive product artifact communicates the operating model more effectively than another PDF.</dd></div>
                <div><dt>Prototype</dt><dd>This site.</dd></div>
                <div><dt>Tools</dt><dd>AI-assisted coding, product design and iterative implementation.</dd></div>
                <div><dt>Success</dt><dd>The hiring team understands how I think within minutes.</dd></div>
              </dl>
            </div>
          </details>
        </div>
        <div className="team-values">
          <div><span>Clarity</span><p>I turn ambiguous asks into decisions people can execute.</p></div>
          <div><span>Momentum</span><p>I surface blockers before uncertainty becomes delay.</p></div>
          <div><span>Ownership</span><p>If the outcome is wrong, I don&apos;t blame the handoff.</p></div>
        </div>
        <div className="footer-line"><span><Mark size={18} /> From Signal to Scale</span><span>Built to be inspected.</span></div>
      </div>
    </footer>
  );
}

import type { CaseFile, LoopStage, Opportunity } from "@/types";

export const loopStages: LoopStage[] = [
  { id: "signal", label: "Signal", question: "What changed in user behaviour?", detail: "Start with a deviation worth understanding, not a feature request." },
  { id: "investigate", label: "Investigate", question: "Where does the signal concentrate?", detail: "Events, funnels, sessions, support signals and qualitative evidence." },
  { id: "frame", label: "Frame", question: "Which behaviour represents the actual problem?", detail: "Turn a broad symptom into a specific, falsifiable problem." },
  { id: "prioritize", label: "Prioritize", question: "What is worth learning next?", detail: "Expected impact × confidence × cost × reversibility." },
  { id: "prototype", label: "Prototype", question: "What is still uncertain?", detail: "Make the uncertain part tangible before building the expensive part." },
  { id: "build", label: "Build", question: "How quickly can we touch reality?", detail: "Use AI-assisted development to compress idea-to-working-software time." },
  { id: "instrument", label: "Instrument", question: "What evidence changes the decision?", detail: "Define success, guardrails and segments before exposure." },
  { id: "ship", label: "Ship", question: "What is the smallest useful population?", detail: "Release progressively, preserve reversibility and watch the edges." },
  { id: "learn", label: "Learn", question: "Did behaviour change for the predicted reason?", detail: "Read the metric and the failure stories together." },
  { id: "decide", label: "Decide", question: "What should happen now?", detail: "Scale. Iterate. Or kill. Each is progress when the rule was clear." },
];

export const caseFiles: CaseFile[] = [
  {
    id: "consumer-scale",
    number: "01",
    domain: "Consumer scale",
    headline: "Operating at 54M-user reach",
    metric: "~54M unique-user scale",
    thesis: "At this scale, the experience and the operating system behind it have to survive exposure together.",
    flow: ["Audience signal", "Experience", "Distribution", "Operations", "Learning"],
    sections: [
      { label: "Context", body: "Work delivered through a campaign/product experience at approximately 54M unique-user scale." },
      { label: "Product challenge", body: "Translate one coherent concept into an experience that stays legible across enormous reach and operational complexity." },
      { label: "Scale consideration", body: "At 54M users, a 0.01% edge case can affect 5,400 people. Reliability and coordination become product design." },
      { label: "What I learned", body: "Consumer scale turns rare failure modes into continuous queues. Plan observability and recovery before exposure." },
    ],
  },
  {
    id: "finance-ai",
    number: "02",
    domain: "AI × consumer finance",
    headline: "Intelligence that compounds",
    metric: "6.5M-user ecosystem",
    thesis: "Models were not the product. The behaviour enabled by the models was the product.",
    flow: ["Transactions", "Representation", "Detection", "Decision", "Experience"],
    sections: [
      { label: "Context", body: "AI/ML product work in the MoneyLion / Gen ecosystem across payments, fraud, personal financial management and transaction intelligence." },
      { label: "Product decision", body: "Treat paycheck, recurring-transaction and classification intelligence as reusable foundations rather than isolated outputs." },
      { label: "Why it matters", body: "Shared representations reduce duplicated ML work and make new consumer behaviours cheaper to enable across teams." },
      { label: "Scale consideration", body: "Quality is multi-dimensional: coverage, calibration, latency, reversibility and the user experience of a wrong prediction." },
    ],
  },
  {
    id: "document-ai",
    number: "03",
    domain: "Document intelligence",
    headline: "Confidence before automation",
    metric: "575K+ cases / month",
    thesis: "Automate where confidence earns it. Escalate where uncertainty matters.",
    flow: ["Document", "OCR", "Extraction", "Confidence", "Validation", "HITL"],
    sections: [
      { label: "Context", body: "High-volume KYC/document product work using OCR, LLM extraction, confidence scoring and human-in-the-loop routing." },
      { label: "Measured outcome", body: "Approximately 45% less manual review and 25% faster API turnaround time." },
      { label: "Evaluation system", body: "Golden datasets, prompt/model versioning, LLM-as-judge where appropriate, and calibration and drift thinking." },
      { label: "Product challenge", body: "Optimize precision, recall, latency, cost, coverage and human escalation as one operating decision, not separate dashboards." },
    ],
  },
  {
    id: "orchestration",
    number: "04",
    domain: "AI orchestration",
    headline: "Autonomy with an exit",
    metric: "Representative workflow",
    thesis: "Autonomy is a product decision, not an architecture fashion.",
    flow: ["Input", "Router", "Specialist", "Validation", "Confidence gate", "Observe"],
    sections: [
      { label: "System", body: "Multi-step AI workflows with routing, specialist tools/models, validation, confidence thresholds and human escalation." },
      { label: "Decision", body: "Increase autonomy only when confidence, reversibility and observability justify it." },
      { label: "Guardrail", body: "Design the fallback before the happy path: what happens when a tool fails, confidence collapses or policy intervenes?" },
      { label: "Learning", body: "Evaluation belongs in the product loop. A system that cannot explain its failure pattern cannot improve safely." },
    ],
  },
];

export const opportunities: Opportunity[] = [
  {
    id: "first-ten",
    title: "First 10 minutes",
    question: "When does a new user first feel: this companion understands me?",
    investigate: ["Time to meaningful exchange", "Prompt abandonment", "Character selection friction", "Preference capture", "Correction behaviour"],
    experiment: "Discover preferences progressively inside the conversation instead of through a large up-front questionnaire.",
  },
  {
    id: "continuity",
    title: "Session continuity",
    question: "Does session two feel like continuation or reset?",
    investigate: ["Memory recall quality", "Unresolved threads", "Character consistency", "Memory corrections", "Re-entry quality"],
    experiment: "Use transparent, user-controllable memory to create a contextual continuation in session two.",
  },
  {
    id: "character",
    title: "Character quality",
    question: "Can a character remain distinctive after hundreds of turns?",
    investigate: ["Persona drift", "Repetition", "Contradiction", "Style consistency", "Long-context degradation"],
    experiment: "Evaluate identity persistence by turn-depth cohorts, paired with correction and abandonment behaviour.",
  },
  {
    id: "value-paid",
    title: "Value → paid",
    question: "What moment of genuine value predicts willingness to subscribe?",
    investigate: ["Value milestones", "Feature discovery", "Relationship continuity", "Premium capability usage", "Retention"],
    experiment: "Align the premium invitation to demonstrated value rather than artificial friction or dark patterns.",
  },
];

export const eventTaxonomy = [
  "companion_created",
  "conversation_started",
  "message_sent",
  "message_regenerated",
  "memory_used",
  "memory_corrected",
  "conversation_resumed",
  "conversation_abandoned",
  "subscription_started",
  "content_reported",
];

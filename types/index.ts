export type LoopStage = {
  id: string;
  label: string;
  question: string;
  detail: string;
};

export type CaseFile = {
  id: string;
  number: string;
  domain: string;
  headline: string;
  metric: string;
  thesis: string;
  sections: { label: string; body: string }[];
  flow: string[];
};

export type Opportunity = {
  id: string;
  title: string;
  question: string;
  investigate: string[];
  experiment: string;
};

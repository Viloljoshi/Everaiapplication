import { AppChrome } from "@/components/layout/AppChrome";
import { Hero } from "@/components/hero/Hero";
import { ProductLoop } from "@/components/product-loop/ProductLoop";
import { ProblemConsole } from "@/components/builder/ProblemConsole";
import { BuilderConsole } from "@/components/builder/BuilderConsole";
import { ExperimentLab } from "@/components/experiment/ExperimentLab";
import { ScaleVisualization } from "@/components/scale/ScaleVisualization";
import { CaseFiles } from "@/components/cases/CaseFiles";
import { JudgmentLab } from "@/components/judgment/JudgmentLab";
import { CompanionshipLab } from "@/components/everai/CompanionshipLab";
import { SafetySystem } from "@/components/safety/SafetySystem";
import { FirstThirty } from "@/components/plan/FirstThirty";
import { FinalCta } from "@/components/final/FinalCta";
import { MotionProvider } from "@/components/ui/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <AppChrome />
      <main id="main-content">
        <Hero />
        <ProductLoop />
        <ProblemConsole />
        <BuilderConsole />
        <ExperimentLab />
        <ScaleVisualization />
        <CaseFiles />
        <JudgmentLab />
        <CompanionshipLab />
        <SafetySystem />
        <FirstThirty />
      </main>
      <FinalCta />
    </MotionProvider>
  );
}

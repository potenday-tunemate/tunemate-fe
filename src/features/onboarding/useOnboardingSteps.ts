import { useEffect, useState } from "react";

export default function useOnboardingSteps() {
  const params = new URLSearchParams(window.location.search);
  const stepParam = params.get("step");

  const [currentStep, setCurrentStep] = useState(1);

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    if (stepParam) {
      setCurrentStep(parseInt(stepParam));
    }
  }, [stepParam]);

  return { currentStep, handleCurrentStep };
}

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useOnboardingSteps() {
  const [searchParams, setSearchParams] = useSearchParams();
  const stepParam = searchParams.get("step");

  const [currentStep, setCurrentStep] = useState(
    stepParam ? parseInt(stepParam) : 1
  );

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  // 상태 업데이트
  useEffect(() => {
    if (stepParam) {
      setCurrentStep(parseInt(stepParam));
    }
  }, [stepParam]);

  // 파라미터 업데이트
  useEffect(() => {
    const stepParam = searchParams.get("step");
    if (currentStep !== (stepParam ? parseInt(stepParam) : null)) {
      setSearchParams({ step: currentStep.toString() });
    }
  }, [currentStep]);

  return { currentStep, handleCurrentStep };
}

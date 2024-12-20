import { useEffect, useState } from "react";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export default function OnboardingPage() {
  const params = new URLSearchParams(window.location.search);
  const stepParam = params.get("step");

  const [currentStep, setCurrentStep] = useState(1);

  const handleCurrentStep = (step: number) => {
    setCurrentStep(step);
  };

  const steps = [
    { id: 1, component: <Step1 onStepChange={handleCurrentStep} /> },
    { id: 2, component: <Step2 onStepChange={handleCurrentStep} /> },
  ];

  useEffect(() => {
    if (stepParam) {
      setCurrentStep(parseInt(stepParam));
    }
  }, [stepParam]);

  return (
    <div className="flex flex-col h-full pt-40 pb-50 px-24">
      {/* 페이지네이션 */}
      {currentStep < 3 && (
        <div className="flex justify-center space-x-16">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleCurrentStep(step.id)}
              className={`px-2 py-2 rounded-full text-white ${
                currentStep === step.id
                  ? "bg-customGray-400"
                  : "bg-customGray-650"
              }`}
            ></button>
          ))}
        </div>
      )}

      {/* 현재 Step에 맞는 컴포넌트 표시 */}
      {steps.find((step) => step.id === currentStep)?.component}

      {currentStep === 3 && <Step3 />}
    </div>
  );
}

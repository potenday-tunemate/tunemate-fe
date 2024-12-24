import Step1 from "widgets/onboarding/ui/Step/Step1";
import Step2 from "widgets/onboarding/ui/Step/Step2";
import Step3 from "widgets/onboarding/ui/Step/Step3";
import Pagination from "widgets/onboarding/ui/Pagination";
import useOnboardingSteps from "features/onboarding/useOnboardingSteps";
import Step4 from "widgets/onboarding/ui/Step/Step4";
import Step5 from "widgets/onboarding/ui/Step/Step5";
import Step6 from "widgets/onboarding/ui/Step/Step6";
import Step7 from "widgets/onboarding/ui/Step/Step7";

export default function OnboardingPage() {
  const { currentStep, handleCurrentStep } = useOnboardingSteps();

  const steps = [
    { id: 1, component: <Step1 onStepChange={handleCurrentStep} /> },
    { id: 2, component: <Step2 onStepChange={handleCurrentStep} /> },
    { id: 3, component: <Step3 /> },
    { id: 4, component: <Step4 onStepChange={handleCurrentStep} /> },
    { id: 5, component: <Step5 onStepChange={handleCurrentStep} /> },
    { id: 6, component: <Step6 onStepChange={handleCurrentStep} /> },
    { id: 7, component: <Step7 /> },
  ];

  return (
    <div className="relative">
      {currentStep <= 2 && (
        <Pagination
          steps={steps.slice(0, 2)}
          currentStep={currentStep}
          onStepChange={handleCurrentStep}
        />
      )}

      <div className="min-h-screen px-24">
        {/* 현재 Step에 맞는 컴포넌트 표시 */}
        {steps.find((step) => step.id === currentStep)?.component}
      </div>
    </div>
  );
}

import Step1 from "widgets/onboarding/ui/Step/Step1";
import Step2 from "widgets/onboarding/ui/Step/Step2";
import Step3 from "widgets/onboarding/ui/Step/Step3";
import Pagination from "widgets/onboarding/ui/Pagination";
import useOnboardingSteps from "features/onboarding/useOnboardingSteps";

export default function OnboardingPage() {
  const { currentStep, handleCurrentStep } = useOnboardingSteps();

  const steps = [
    { id: 1, component: <Step1 onStepChange={handleCurrentStep} /> },
    { id: 2, component: <Step2 onStepChange={handleCurrentStep} /> },
  ];

  return (
    <div className="flex flex-col h-screen pt-40 pb-50 px-24">
      {/* 페이지네이션 */}
      {currentStep < 3 && (
        <Pagination
          steps={steps}
          currentStep={currentStep}
          onStepChange={handleCurrentStep}
        />
      )}

      {/* 현재 Step에 맞는 컴포넌트 표시 */}
      {steps.find((step) => step.id === currentStep)?.component}

      {currentStep === 3 && <Step3 />}
    </div>
  );
}

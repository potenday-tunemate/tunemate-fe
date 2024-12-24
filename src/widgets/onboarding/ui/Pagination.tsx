interface Step {
  id: number;
  component: JSX.Element;
}

interface PaginationProps {
  steps: Step[];
  currentStep: number;
  onStepChange: (id: number) => void;
}

export default function Pagination({
  steps,
  currentStep,
  onStepChange,
}: PaginationProps) {
  return (
    <div className="absolute top-40 left-0 w-full flex justify-center space-x-16">
      {steps.map((step) => (
        <button
          key={step.id}
          onClick={() => onStepChange(step.id)}
          className={`w-8 h-8 rounded-full text-white ${
            currentStep === step.id ? "bg-customGray-400" : "bg-customGray-650"
          }`}
        ></button>
      ))}
    </div>
  );
}

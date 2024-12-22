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
    <div className="flex justify-center space-x-16">
      {steps.map((step) => (
        <button
          key={step.id}
          onClick={() => onStepChange(step.id)}
          className={`px-8 py-8 rounded-full text-white ${
            currentStep === step.id ? "bg-customGray-400" : "bg-customGray-650"
          }`}
        ></button>
      ))}
    </div>
  );
}

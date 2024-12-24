import { Link } from "react-router-dom";
import Button from "shared/components/ui/buttons/Button";

interface Step4Props {
  onStepChange: (step: number) => void;
}

export default function Step4({ onStepChange }: Step4Props) {
  const handleNextStep = () => {
    onStepChange(5);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-267 -mt-100">
        <p className="text-center text-22 font-bold">
          Tunemate를 더 잘 사용할 수 있도록
          <br />몇 가지 질문을 드릴게요.
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 w-full max-w-600 mx-auto pt-10 pb-50 px-24 bg-black">
        <div className="flex justify-center">
          <Link to="/main" className="font-semibold text-sm text-center">
            건너뛰기
          </Link>
        </div>
        <div className="mt-20">
          <Button type="button" variant="gray" onClick={handleNextStep}>
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}

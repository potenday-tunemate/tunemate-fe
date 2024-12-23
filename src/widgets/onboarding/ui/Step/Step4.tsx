import Button from "shared/components/UI/Buttons/Button";

interface Step4Props {
  onStepChange: (step: number) => void;
}

export default function Step4({ onStepChange }: Step4Props) {
  const handleNextStep = () => {
    onStepChange(5);
  };

  return (
    <div className="relative flex justify-center items-center h-full">
      <div className="w-full max-w-[267px]">
        <p>
          Tunemate를 더 잘 사용할 수 있도록
          <br />몇 가지 질문을 드릴게요.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <button className="font-bold text-[22px] text-white">건너뛰기</button>
        <div className="mt-5">
          <Button type="button" variant="gray" onClick={handleNextStep}>
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}

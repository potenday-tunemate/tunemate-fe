import { ASSET_PATHS } from "entities/const/path";
import Button from "shared/components/UI/Buttons/Button";

interface Step2Props {
  onStepChange: (step: number) => void;
}

export default function Step2({ onStepChange }: Step2Props) {
  const handleNextStep = () => {
    onStepChange(3);
  };

  return (
    <div className="relative flex justify-center items-center h-full">
      <div className="w-full max-w-[267px]">
        <img
          src={`${ASSET_PATHS.IMAGES}/onboarding/visual_2.png`}
          alt="음악에 대한 나의 감상을 기록할 수 있어요"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <Button type="button" variant="gray" onClick={handleNextStep}>
          다음
        </Button>
      </div>
    </div>
  );
}

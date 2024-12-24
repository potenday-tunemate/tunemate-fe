import { ASSET_PATHS } from "shared/constants/path";
import StickyButton from "shared/components/ui/buttons/StickyButton";

interface Step1Props {
  onStepChange: (step: number) => void;
}

export default function Step1({ onStepChange }: Step1Props) {
  const handleNextStep = () => {
    onStepChange(2);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-267 -mt-100">
        <img
          src={`${ASSET_PATHS.IMAGES}/onboarding/visual_1.png`}
          alt="음악에 대한 나의 감상을 기록할 수 있어요"
        />
      </div>

      <StickyButton type="button" variant="gray" onClick={handleNextStep}>
        다음
      </StickyButton>
    </div>
  );
}

import { ASSET_PATHS } from "shared/constants/path";
import StickyButton from "shared/components/ui/buttons/StickyButton";

interface Step2Props {
  onStepChange: (step: number) => void;
}

export default function Step2({ onStepChange }: Step2Props) {
  const handleNextStep = () => {
    onStepChange(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-267 -mt-100">
        <img
          src={`${ASSET_PATHS.IMAGES}/onboarding/visual_2.png`}
          alt="음악에 대한 나의 감상을 기록할 수 있어요"
        />
      </div>

      <StickyButton type="button" variant="gray" onClick={handleNextStep}>
        다음
      </StickyButton>
    </div>
  );
}

import { useState } from "react";
import Button from "shared/components/UI/Buttons/Button";
import Header from "shared/components/Layout/Header";
import { ASSET_PATHS } from "shared/constants/path";

interface Step5Props {
  onStepChange: (step: number) => void;
}

const MOODS = [
  "lively",
  "refreshing",
  "rhythmic",
  "exciting",
  "gloomy",
  "calm",
  "sweet",
  "dreamlike",
];

export default function Step5({ onStepChange }: Step5Props) {
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

  const handleSelectMood = (mood: string) => {
    setSelectedMoods(
      (prev) =>
        prev.includes(mood)
          ? prev.filter((item) => item !== mood) // 이미 선택된 경우 제거
          : [...prev, mood] // 선택되지 않은 경우 추가
    );
  };

  const handleNextStep = () => {
    onStepChange(6);
  };

  return (
    <div>
      <Header backPath="/onboarding?step=4" />

      <div className="flex flex-col items-center h-full pt-108">
        <div className="flex flex-col items-center w-full max-w-249">
          <p className="font-bold text-22">
            평소에 어떤 분위기의 음악을
            <br />
            즐겨 듣는지 선택해 보세요.
          </p>
          <p className="mt-10 text-sm text-customGray-430">
            중복 선택이 가능해요
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 max-w-270 mt-25">
          {MOODS.map((mood) => (
            <div
              key={mood}
              className="relative flex flex-col items-center p-4 cursor-pointer"
              onClick={() => handleSelectMood(mood)}
            >
              <img
                src={`${ASSET_PATHS.IMAGES}/onboarding/chip_${mood}.png`}
                alt={mood}
                className="block"
              />

              {/* 선택된 경우 테두리 */}
              {selectedMoods.includes(mood) && (
                <div className="absolute inset-6 border-[3px] border-white opacity-80 rounded-10 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        <div className="sticky bottom-0 left-0 w-full h-100 pt-20 bg-black">
          <Button type="button" variant="gray" onClick={handleNextStep}>
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}

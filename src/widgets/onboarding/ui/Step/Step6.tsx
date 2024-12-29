import { useState } from "react";
import Button from "shared/components/UI/Buttons/Button";
import Header from "shared/components/Layout/Header";
import { ASSET_PATHS } from "shared/constants/path";

interface Step6Props {
  onStepChange: (step: number) => void;
}

const GENRES = [
  "pop",
  "hiphop",
  "rnb",
  "rock",
  "edm",
  "classic",
  "indie",
  "kpop",
  "country",
  "jazz",
];

export default function Step6({ onStepChange }: Step6Props) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const handleSelectGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((item) => item !== genre)
        : [...prev, genre]
    );
  };

  const handleNextStep = () => {
    onStepChange(7);
  };

  return (
    <div>
      <Header backPath="/onboarding?step=5" />

      <div className="flex flex-col items-center h-full pt-108">
        <div className="flex flex-col items-center w-full max-w-249">
          <p className="font-bold text-22 text-center">
            선호하는 음악 장르는 <br />
            어떤 것인가요?
          </p>
          <p className="mt-10 text-sm text-customGray-430">
            중복 선택이 가능해요
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 max-w-270 mt-25">
          {GENRES.map((genre) => (
            <div
              key={genre}
              className="relative flex flex-col items-center p-4 cursor-pointer"
              onClick={() => handleSelectGenre(genre)}
            >
              {/* 이미지 */}
              <img
                src={`${ASSET_PATHS.IMAGES}/onboarding/chip_genre_${genre}.png`}
                alt={genre}
                className="block"
              />

              {/* 선택 시 투명 div */}
              {selectedGenres.includes(genre) && (
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

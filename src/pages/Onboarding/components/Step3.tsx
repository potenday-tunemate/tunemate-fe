import { useNavigate } from "react-router-dom";

import { ASSET_PATHS } from "entities/const/path";
import Button from "shared/components/UI/Buttons/Button";

export default function Step3() {
  const navigate = useNavigate();

  return (
    <div className="relative flex justify-center items-center h-full">
      <div className="w-full max-w-197">
        <img
          src={`${ASSET_PATHS.ICONS}/logo/tunemate_logo.svg`}
          alt="음악에 대한 나의 감상을 기록할 수 있어요"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <p className="text-center">서비스가 처음이신가요?</p>
        <div className="flex flex-col space-y-14 mt-16">
          <Button onClick={() => navigate("/signup")}>회원가입</Button>
          <Button onClick={() => navigate("/signin")} variant="gray">
            이미 계정이 있어요
          </Button>
        </div>
      </div>
    </div>
  );
}

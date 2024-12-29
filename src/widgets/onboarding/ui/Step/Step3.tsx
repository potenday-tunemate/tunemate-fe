import { useNavigate } from "react-router-dom";
import { ASSET_PATHS } from "shared/constants/path";
import Button from "shared/components/UI/Buttons/Button";

export default function Step3() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-197 -mt-60">
        <img
          src={`${ASSET_PATHS.ICONS}/logo/tunemate_logo.svg`}
          alt="음악에 대한 나의 감상을 기록할 수 있어요"
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 w-full max-w-600 mx-auto pt-10 pb-50 px-24 bg-black">
        <p className="text-center">서비스가 처음이신가요?</p>
        <div className="flex flex-col space-y-14 mt-16">
          <Button onClick={() => navigate("/auth/sign-up")}>회원가입</Button>
          <Button onClick={() => navigate("/auth/sign-in")} variant="gray">
            이미 계정이 있어요
          </Button>
        </div>
      </div>
    </div>
  );
}

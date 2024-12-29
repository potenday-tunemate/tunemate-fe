import LinkButton from "shared/components/UI/Buttons/LinkButton";
import { ASSET_PATHS } from "shared/constants/path";

export default function Step7() {
  return (
    <div className="h-screen">
      <div className="pt-76">
        <p className="text-center text-22 font-bold">
          이제 튠메이트와
          <br />
          음악 취향을 나누러 가볼까요?
        </p>
      </div>

      <div className="w-full max-w-120 mx-auto pt-140">
        <img src={`${ASSET_PATHS.ICONS}/logo/tunemate_logo_symbol.svg`} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 w-full max-w-600 mx-auto pt-10 pb-50 px-24 bg-black">
        <div className="mt-20">
          <LinkButton path="/main" variant="gray">
            홈으로 이동
          </LinkButton>
        </div>
      </div>
    </div>
  );
}

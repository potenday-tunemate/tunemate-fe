import { ASSET_PATHS } from "entities/const/path";
import { Link } from "react-router-dom";
import Header from "shared/components/UI/Header";

export default function GenrePage() {
  return (
    <>
      <Header>
        <Link to="/main">
          <img
            src={`${ASSET_PATHS.ICONS}/logo/tunemate_logo_symbol.svg`}
            alt="TUNEMATE"
            className="w-[34px] h-[34px]"
          />
        </Link>
      </Header>
      <div className="mt-3 px-6 flex flex-col space-y-[50px]">
        <div>
          <h2>새로운 신보!</h2>
        </div>
        <div>
          <h2>후기가 많이 올라오고 있어요!</h2>
        </div>
        <div>
          <h2>name님에게 추천해요!</h2>
        </div>
      </div>
    </>
  );
}

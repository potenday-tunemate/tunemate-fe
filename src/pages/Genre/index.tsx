import { ASSET_PATHS } from "entities/const/path";
import { Link } from "react-router-dom";
import Header from "shared/components/Layout/Header";

export default function GenrePage() {
  return (
    <>
      <Header>
        <Link to="/main">
          <img
            src={`${ASSET_PATHS.ICONS}/logo/tunemate_logo_symbol.svg`}
            alt="TUNEMATE"
            className="w-34 h-34"
          />
        </Link>
      </Header>
      <div className="mt-12 px-24 flex flex-col space-y-50">
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

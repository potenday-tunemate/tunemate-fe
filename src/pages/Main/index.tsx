import { Link } from "react-router-dom";

import { ASSET_PATHS } from "entities/const/path";
import Header from "shared/components/UI/Header";

export default function MainPage() {
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
      <div className="mt-5 px-6">
        <h2 className="font-bold text-lg">방금 등록된 감상</h2>
      </div>
    </>
  );
}

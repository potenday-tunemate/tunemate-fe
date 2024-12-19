import { ASSET_PATHS } from "entities/const/path";
import { Link } from "react-router-dom";
import Header from "shared/components/Layout/Header";

export default function MyPage() {
  return (
    <>
      <Header>
        <div className="flex justify-between items-center w-full">
          <Link to="/main">
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
              alt="뒤로가기"
              className="w-[34px] h-[34px]"
            />
          </Link>
          <button className="flex justify-center items-center w-6 h-6">
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_setting.svg`}
              alt="설정"
              className="w-full"
            />
          </button>
        </div>
      </Header>
    </>
  );
}

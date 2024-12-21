import { ASSET_PATHS } from "entities/const/path";
import { Link } from "react-router-dom";
import Header from "shared/components/Layout/Header";

export default function FollowingPage() {
  return (
    <div>
      <Header>
        <div className="flex justify-between items-center w-full">
          <Link to="/my-page">
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
              alt="뒤로가기"
              className="w-34 h-34"
            />
          </Link>
        </div>
      </Header>
    </div>
  );
}

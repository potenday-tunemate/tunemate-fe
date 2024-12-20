import { ASSET_PATHS } from "entities/const/path";
import { Link, useLocation } from "react-router-dom";

export default function BottomMenu() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <footer className="fixed bottom-0 w-full max-w-600 text-white left-1/2 transform -translate-x-1/2">
      <div className="flex items-center justify-between h-100">
        <div className="flex-1 flex justify-center items-center">
          <Link to="/main">
            <img
              src={`${ASSET_PATHS.ICONS}/content/ico_home_${
                isActive("/main") ? "active" : "inactive"
              }.svg`}
              alt="홈 바로가기"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Link to="/genre">
            <img
              src={`${ASSET_PATHS.ICONS}/content/ico_album_${
                isActive("/genre") ? "active" : "inactive"
              }.svg`}
              alt="장르 바로가기"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Link to="/my-page">
            <img
              src={`${ASSET_PATHS.ICONS}/content/ico_my_${
                isActive("/my-page") ? "active" : "inactive"
              }.svg`}
              alt="마이페이지 바로가기"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

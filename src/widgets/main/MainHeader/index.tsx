import { Link } from "react-router-dom";
import { ASSET_PATHS } from "shared/const/path";

export default function MainHeader() {
  return (
    <header className="flex items-center h-58 px-24">
      <Link to="/main">
        <img
          src={`${ASSET_PATHS.ICONS}/logo/tunemate_logo_symbol.svg`}
          alt="TUNEMATE"
          className="w-34 h-34"
        />
      </Link>
    </header>
  );
}

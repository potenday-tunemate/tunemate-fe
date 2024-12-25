import { Link } from "react-router-dom";
import { ASSET_PATHS } from "shared/constants/path";

export default function MainHeader() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-600 mx-auto flex items-center h-56 px-24 bg-black z-20">
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

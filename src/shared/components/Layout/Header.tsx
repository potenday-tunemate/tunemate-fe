import { ASSET_PATHS } from "shared/constants/path";
import { Link } from "react-router-dom";

interface HeaderProps {
  title?: string;
  backPath?: string;
  titlePosition?: "left" | "center" | "right";
  onClick?: () => void; // onClick 추가
}

export default function Header({
  title,
  backPath,
  titlePosition = "center",
  onClick, // onClick을 prop으로 추가
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-600 mx-auto flex items-center h-68 px-24 bg-black z-10">
      <div
        className={`relative flex items-center w-full h-full ${
          titlePosition === "right" ? "justify-between" : ""
        }`}
      >
        {backPath ? (
          <Link
            to={backPath}
            className={`${titlePosition === "center" ? "absolute left-0" : ""}`}
          >
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
              alt="뒤로가기"
              className="w-34 h-34"
            />
          </Link>
        ) : (
          <button onClick={onClick} className={`${titlePosition === "center" ? "absolute left-0" : ""}`}>
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
              alt="뒤로가기"
              className="w-34 h-34"
            />
          </button>
        )}

        {title && (
          <p
            className={`font-semibold text-lg ${
              titlePosition === "center"
                ? "text-center mx-auto"
                : titlePosition === "left"
                ? "text-left ml-20"
                : "text-right"
            }`}
          >
            {title}
          </p>
        )}
      </div>
    </header>
  );
}

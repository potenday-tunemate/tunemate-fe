import { ASSET_PATHS } from "shared/const/path";
import { Link } from "react-router-dom";

interface HeaderProps {
  title?: string;
  backPath?: string;
  titlePosition?: "left" | "center" | "right";
}

export default function Header({
  title,
  backPath,
  titlePosition = "center",
}: HeaderProps) {
  return (
    <header className="flex items-center h-58 px-24">
      <div
        className={`relative flex items-center w-full ${
          titlePosition === "right" ? "justify-between" : ""
        }`}
      >
        {backPath && (
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

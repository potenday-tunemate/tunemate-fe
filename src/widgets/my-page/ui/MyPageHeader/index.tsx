import { Link } from "react-router-dom";
import { ASSET_PATHS } from "shared/constants/path";

interface MyPageHeaderProps {
  setIsSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyPageHeader({ setIsSheetVisible }: MyPageHeaderProps) {
  const handleClick = () => {
    setIsSheetVisible(true);
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-600 mx-auto flex items-center h-60 px-24 bg-black z-10">
      <div className="relative flex items-center w-full h-full">
        <Link to="/main">
          <img
            src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
            alt="뒤로가기"
            className="w-34 h-34"
          />
        </Link>
      </div>

      <button
        onClick={handleClick}
        className="absolute right-24 top-1/2 -translate-y-1/2 flex justify-center items-center w-24 h-24 z-20"
      >
        <img
          src={`${ASSET_PATHS.ICONS}/basic/ico_setting.svg`}
          alt="설정"
          className="w-full"
        />
      </button>
    </header>
  );
}

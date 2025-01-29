import { Link } from "react-router-dom";
import { ASSET_PATHS } from "shared/constants/path";
import { Mydata } from "widgets/my-page/data";

interface HistoryListProps {
  userData: Mydata |null;
}

export default function HistoryThumbnailList({ userData }: HistoryListProps) {
  return (
    <>
      {userData && (
        <div>
          <div className="flex items-center justify-between">
            {/* <p>지금까지 총 {userData.histories.length}개의 감상을 남겼어요.</p> */}

            {userData.histories.length > 0 && (
              <Link to="/my-page/history">
                <img
                  src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_gray_right.svg`}
                  alt="감상 더보기"
                  className="w-14"
                />
              </Link>
            )}
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-3 gap-10">
              {userData.histories.map((history, idx) => (
                <div
                  key={`history-${idx}`}
                  className="w-full aspect-square rounded-10 relative"
                >
                  {history.coverImg ? (
                    <img
                      src={history.coverImg}
                      alt={history.title}
                      className="absolute inset-0 w-full h-full object-coverImg rounded-10"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-customGray-850 rounded-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

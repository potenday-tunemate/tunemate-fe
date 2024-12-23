import { ASSET_PATHS } from "shared/constants/path";
import { useState } from "react";
import Container from "shared/components/layout/Container";
import Header from "shared/components/layout/Header";
import BottomActionSheet from "shared/components/layout/BottomActionSheet";
import { MY_DATA } from "widgets/my-page/data";
import PageLayout from "shared/components/layout/PageLayout";

export default function HistoryPage() {
  const [isSheetVisible, setSheetVisible] = useState(false);

  const HISTORY_MENU_ITEMS = [
    {
      label: "수정",
      action: () => {
        setSheetVisible(false);
      },
    },
    {
      label: "삭제",
      color: "red",
      action: () => {
        setSheetVisible(false);
      },
    },
  ];

  const histories = MY_DATA.histories;

  return (
    <PageLayout>
      <Header title="감상 목록" backPath="/my-page" />

      <Container>
        <div className="flex flex-col space-y-12">
          {histories.map((history, idx) => (
            <div
              key={`history-${idx}`}
              className="relative h-200 p-18 bg-customGray-850 rounded-10"
            >
              <button
                onClick={() => setSheetVisible(true)}
                className="absolute top-18 right-18"
              >
                <img
                  src={`${ASSET_PATHS.ICONS}/basic/ico_dot_menu.svg`}
                  alt="앨범 메뉴"
                />
              </button>

              <div className="flex space-x-14">
                <div className="w-80 h-80 rounded-10 overflow-hidden">
                  {history.cover ? (
                    <img src={history.cover} alt={history.title} />
                  ) : (
                    <div className="w-full h-full bg-customGray-700"></div>
                  )}
                </div>

                <div>
                  <p className="font-bold">{history.title}</p>
                  <p className="mt-4 text-sm">{history.artist}</p>
                  <p className="mt-14 text-xs text-customGray-500">
                    {history.writer} · {history.created}
                  </p>
                </div>
              </div>

              <div className="mt-21">
                <p className="text-sm text-customGray-500 line-clamp-2 overflow-hidden">
                  {history.review}
                </p>
              </div>
            </div>
          ))}
        </div>

        {isSheetVisible && (
          <BottomActionSheet
            menuItems={HISTORY_MENU_ITEMS}
            showCancelButton={true}
            onClose={() => setSheetVisible(false)}
          />
        )}
      </Container>
    </PageLayout>
  );
}

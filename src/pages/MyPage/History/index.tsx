import { ASSET_PATHS } from "entities/const/path";
import { useState } from "react";
import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import BottomActionSheet from "shared/components/UI/BottomActionSheet";

// dummy
const HISTORY_DATA = [
  {
    id: "1",
    cover: null,
    title: "앨범 타이틀1",
    artist: "아티스트1",
    writer: "작성자1",
    created: "2024.12.21",
    review:
      "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
  },
  {
    id: "2",
    cover: null,
    title: "앨범 타이틀2",
    artist: "아티스트2",
    writer: "작성자2",
    created: "2024.12.22",
    review:
      "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
  },
  {
    id: "3",
    cover: null,
    title: "앨범 타이틀3",
    artist: "아티스트3",
    writer: "작성자3",
    created: "2024.12.23",
    review:
      "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
  },
];

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

  return (
    <div>
      <Header title="감상 목록" backPath="/my-page" />

      <Container>
        <div className="flex flex-col space-y-12">
          {HISTORY_DATA.map((history) => (
            <div className="relative h-200 p-18 bg-customGray-850 rounded-10">
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
    </div>
  );
}

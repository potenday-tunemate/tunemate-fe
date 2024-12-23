import { useState } from "react";
import { ASSET_PATHS } from "shared/constants/path";
import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import BottomActionSheet from "shared/components/Layout/BottomActionSheet";
import UserInfo from "widgets/my-page/UserInfo";
import HistoryThumbnailList from "widgets/my-page/HistoryThumbnailList";
import { MY_DATA } from "widgets/my-page/data";

export default function MyPage() {
  const [isSheetVisible, setSheetVisible] = useState(false);

  const SETTING_MENU_ITEMS = [
    {
      label: "로그아웃",
      action: () => {
        console.log("로그아웃");
        setSheetVisible(false);
      },
    },
    {
      label: "계정 탈퇴",
      color: "red",
      action: () => {
        console.log("계정 탈퇴");
        setSheetVisible(false);
      },
    },
  ];

  return (
    <>
      <div className="relative">
        <Header backPath="/main" />

        <button
          onClick={() => setSheetVisible(true)}
          className="absolute right-24 top-1/2 -translate-y-1/2 flex justify-center items-center w-24 h-24"
        >
          <img
            src={`${ASSET_PATHS.ICONS}/basic/ico_setting.svg`}
            alt="설정"
            className="w-full"
          />
        </button>
      </div>

      <Container>
        {/* 사용자 정보 섹션 */}
        <UserInfo userData={MY_DATA} />

        {/* 감상 리스트 */}
        <div className="mt-40">
          <HistoryThumbnailList userData={MY_DATA} />
        </div>

        {/* 설정 메뉴 */}
        {isSheetVisible && (
          <BottomActionSheet
            menuItems={SETTING_MENU_ITEMS}
            showCancelButton={true}
            onClose={() => setSheetVisible(false)}
          />
        )}
      </Container>
    </>
  );
}

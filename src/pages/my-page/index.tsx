import { useState } from "react";
import Container from "shared/components/Layout/Container";
import BottomActionSheet from "shared/components/Layout/BottomActionSheet";
import { MY_DATA } from "widgets/my-page/data";
import UserInfo from "widgets/my-page/ui/UserInfo";
import HistoryThumbnailList from "widgets/my-page/ui/HistoryThumbnailList";
import PageLayout from "shared/components/Layout/PageLayout";
import MyPageHeader from "widgets/my-page/ui/MyPageHeader";

export default function MyPage() {
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const SETTING_MENU_ITEMS = [
    {
      label: "로그아웃",
      action: () => {
        console.log("로그아웃");
        setIsSheetVisible(false);
      },
    },
    {
      label: "계정 탈퇴",
      color: "red",
      action: () => {
        console.log("계정 탈퇴");
        setIsSheetVisible(false);
      },
    },
  ];

  return (
    <PageLayout>
      <MyPageHeader setIsSheetVisible={setIsSheetVisible} />

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
            onClose={() => setIsSheetVisible(false)}
          />
        )}
      </Container>
    </PageLayout>
  );
}

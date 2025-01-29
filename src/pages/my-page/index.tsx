import { useEffect, useState } from "react";
import Container from "shared/components/Layout/Container";
import BottomActionSheet from "shared/components/Layout/BottomActionSheet";
// import { MY_DATA } from "widgets/my-page/data";
import UserInfo from "widgets/my-page/ui/UserInfo";
import HistoryThumbnailList from "widgets/my-page/ui/HistoryThumbnailList";
import PageLayout from "shared/components/Layout/PageLayout";
import MyPageHeader from "widgets/my-page/ui/MyPageHeader";
import { BASE_URL } from "shared/api/index.api";

export default function MyPage() {
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 예시: 로그인 후 받은 토큰을 로컬스토리지에서 가져온다고 가정
    const token = localStorage.getItem("access_token");

    // 로그인 토큰이 없으면 요청하지 않도록 처리
    if (!token) {
      setError("로그인 정보가 없습니다.");
      return;
    }

    // `fetch`로 API 요청
    fetch(BASE_URL+"user", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`, // 인증 토큰을 헤더에 포함
        "Content-Type": "application/json", // 서버에 전달할 데이터 형식
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("로그인 정보 불러오기 실패");
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        setError(error.message); 
      });
  }, []);

  const SETTING_MENU_ITEMS = [
    {
      label: "로그아웃",
      action: () => {
        console.log("로그아웃");
        setIsSheetVisible(false);
        window.location.href = `https://tunemate-fe-production.up.railway.app/`+"auth/sign-in";
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

  if (error) {
    return <div>{error}</div>; // 오류가 있을 경우 메시지 표시
  }
  return (
    <PageLayout>
      <MyPageHeader setIsSheetVisible={setIsSheetVisible} />

      <Container>
        {/* 사용자 정보 섹션 */}
        console.log(userData);
        <UserInfo userData={userData} />

        {/* 감상 리스트 */}
        <div className="mt-40">
          {/* <HistoryThumbnailList userData={userData} /> */}
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

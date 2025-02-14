import { useEffect, useState } from "react";
import Container from "shared/components/Layout/Container";
import BottomActionSheet from "shared/components/Layout/BottomActionSheet";
import { Mydata } from "widgets/my-page/data";
import UserInfo from "widgets/my-page/ui/UserInfo";
import HistoryThumbnailList from "widgets/my-page/ui/HistoryThumbnailList";
import { useParams } from "react-router-dom";
import PageLayout from "shared/components/Layout/PageLayout";
import MyPageHeader from "widgets/my-page/ui/MyPageHeader";
import { BASE_URL } from "shared/api/index.api";

export default function MyPage() {
  const { id } = useParams();
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const [userData, setUserData] = useState<Mydata>({
    id: "",
    profile: null,
    nickname: "",
    play_count: 0,
    followers: 0,
    following: 0,
    favorite_genre: [],
    favorite_tag: [],
    histories: [],
  }); // Mydata의 초기값을 명확히 설정
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setUserData((userData) => ({
        ...userData,
        id, // id만 업데이트
      }));
    }
  }, [id]);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) {
      setError("로그인 정보가 없습니다.");
    }
  }, [token]);

  const getHeaders = () => {
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  useEffect(() => {
    fetch(BASE_URL + "user", {
      method: "GET",
      headers: getHeaders(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("로그인 정보 불러오기 실패");
        }
        return response.json();
      })
      .then((data) => {
        setUserData((userData) => {
          const updatedData = { ...userData, nickname: data.nickname };
          return updatedData;
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [token]);

  useEffect(() => {
    fetch(BASE_URL + "user/review", {
      method: "GET",
      headers: getHeaders(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("로그인 정보 불러오기 실패");
        }
        return response.json();
      })
      .then((playCount) => {
        const playCounts = playCount.length;
        console.log("playCounts", playCounts);
        setUserData((userData) => {
          const updatedData = { ...userData, play_count: playCounts };
          console.log("updatedData1111111111", updatedData);

          return updatedData;
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [token]);

  useEffect(() => {
    // `fetch`로 API 요청
    fetch(BASE_URL + "user/" + `${id}` + "/follower", {
      method: "GET",
      headers: getHeaders(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("로그인 정보 불러오기 실패");
        }
        return response.json();
      })
      .then((followerData) => {
        const followerCount = followerData.length;
        console.log("followerCount", followerCount);

        setUserData((userData) => {
          const updatedData = { ...userData, followers: followerCount };
          console.log("updatedData", updatedData);
          return updatedData;
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  useEffect(() => {
    // `fetch`로 API 요청
    fetch(BASE_URL + "user/" + `${id}` + "/following", {
      method: "GET",
      headers: getHeaders(),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("로그인 정보 불러오기 실패");
        }
        return response.json();
      })
      .then((followingData) => {
        const followerCount = followingData.length;
        console.log("followingData", followingData);

        setUserData((userData) => {
          const updatedData = { ...userData, following: followerCount };
          console.log("updatedData", updatedData);
          return updatedData;
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  const SETTING_MENU_ITEMS = [
    {
      label: "로그아웃",
      action: () => {
        console.log("로그아웃");
        setIsSheetVisible(false);
        window.location.href =
          `https://tunemate-fe-production.up.railway.app/` + "auth/sign-in";
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
        <UserInfo userData={userData} />

        {/* 감상 리스트 */}
        <div className="mt-40">
          <HistoryThumbnailList userData={userData} />
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

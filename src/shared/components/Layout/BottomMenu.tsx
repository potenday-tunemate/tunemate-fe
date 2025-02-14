import { ASSET_PATHS } from "shared/constants/path";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mydata } from "widgets/my-page/data";
import { BASE_URL } from "shared/api/index.api";
export default function BottomMenu() {
  const location = useLocation();
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
  });

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 예시: 로그인 후 받은 토큰을 로컬스토리지에서 가져온다고 가정
    const token = localStorage.getItem("access_token");

    // 로그인 토큰이 없으면 요청하지 않도록 처리
    if (!token) {
      setError("로그인 정보가 없습니다.");
      return;
    }

    fetch(BASE_URL + "user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // 인증 토큰을 헤더에 포함
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
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <footer className="fixed bottom-0 w-full max-w-600 text-white bg-black">
      <div className="flex items-center justify-between h-100">
        <div className="flex-1 flex justify-center items-center">
          <Link to="/main">
            <img
              src={`${ASSET_PATHS.ICONS}/content/ico_home_${
                isActive("/main") ? "active" : "inactive"
              }.svg`}
              alt="홈 바로가기"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Link to="/genre">
            <img
              src={`${ASSET_PATHS.ICONS}/content/ico_album_${
                isActive("/genre") ? "active" : "inactive"
              }.svg`}
              alt="장르 바로가기"
            />
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Link to={`/my-page/${userData.id}`}>
            <img
              src={`${ASSET_PATHS.ICONS}/content/ico_my_${
                isActive("/my-page") ? "active" : "inactive"
              }.svg`}
              alt="마이페이지 바로가기"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

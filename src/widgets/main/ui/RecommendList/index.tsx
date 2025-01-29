import { useEffect, useState } from "react";

interface UserData {
  nickname: string;
}
export default function RecommendList() {

 
  const [userData, setUserData] = useState<UserData | null>(null);
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
    fetch("user", {
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
  return (
    <div className="">
      <h2 className="font-bold text-lg">{userData && userData.nickname ? `${userData.nickname}님에게 추천해요` : "사용자 정보를 불러오는 중..."}</h2>
    </div>
  );
}

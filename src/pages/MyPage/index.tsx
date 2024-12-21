import { useState } from "react";
import { ASSET_PATHS } from "entities/const/path";
import { Link } from "react-router-dom";
import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import BottomActionSheet from "shared/components/UI/BottomActionSheet";

// dummy
const MY_PAGE_DATA = {
  profile: null,
  user_name: "name",
  play_count: 15,
  followers: 3,
  following: 3,
  favorite_genre: ["팝", "K-Pop", "인디", "힙합/랩"],
  favorite_tag: ["리드미컬한", "활기찬", "신나는", "감미로운"],
  history: [],
};

export default function MyPage() {
  const [isSheetVisible, setSheetVisible] = useState(false);

  const MY_PAGE_MENU_ITEMS = [
    {
      label: "로그아웃",
      action: () => {
        console.log("로그아웃");
        setSheetVisible(false); // 닫기
      },
    },
    {
      label: "계정 탈퇴",
      color: "red",
      action: () => {
        console.log("계정 탈퇴");
        setSheetVisible(false); // 닫기
      },
    },
  ];

  return (
    <>
      <Header>
        <div className="flex justify-between items-center w-full">
          <Link to="/main">
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
              alt="뒤로가기"
              className="w-34 h-34"
            />
          </Link>
          <button
            onClick={() => setSheetVisible(true)}
            className="flex justify-center items-center w-24 h-24"
          >
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_setting.svg`}
              alt="설정"
              className="w-full"
            />
          </button>
        </div>
      </Header>

      <Container>
        <div className="flex flex-col items-center justify-center">
          <div>
            {MY_PAGE_DATA.profile ? (
              <img src={MY_PAGE_DATA.profile} alt="profile" className="w-80" />
            ) : (
              <img
                src={`${ASSET_PATHS.ICONS}/my_page/ico_profile.svg`}
                alt="profile"
                className="w-80"
              />
            )}
          </div>

          <div className="mt-10">
            <p>{MY_PAGE_DATA.user_name}</p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-20 space-x-20">
          <Link to="/my-page/history" className="text-sm">
            감상 <span className="font-bold">{MY_PAGE_DATA.play_count}</span>개
          </Link>
          <Link to="/my-page/follower" className="text-sm">
            팔로워 <span className="font-bold">{MY_PAGE_DATA.followers}</span>명
          </Link>
          <Link to="/my-page/following" className="text-sm">
            팔로잉 <span className="font-bold">{MY_PAGE_DATA.following}</span>명
          </Link>
        </div>

        <div className="mt-46">
          <p className="font-bold">
            {MY_PAGE_DATA.user_name}님이 가장 좋아하는 장르
          </p>
          <div className="flex space-x-10 mt-20">
            {MY_PAGE_DATA.favorite_genre.map((genre) => (
              <span className="font-semibold text-sm px-10 bg-tunemate rounded-full">
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-40">
          <div className="flex items-center justify-between">
            <p>
              지금까지 총 {MY_PAGE_DATA.history.length}개의 감상을 남겼어요.
            </p>

            {MY_PAGE_DATA.history.length > 0 && (
              <Link to="">
                <img
                  src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_gray_right.svg`}
                  alt="감상 더보기"
                  className="w-14"
                />
              </Link>
            )}

            <div className="mt-20">
              <div className="grid">
                {MY_PAGE_DATA.history.map((his, idx) => (
                  <div key={`history-${idx}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isSheetVisible && (
          <BottomActionSheet
            menuItems={MY_PAGE_MENU_ITEMS}
            showCancelButton={true}
            onClose={() => setSheetVisible(false)}
          />
        )}
      </Container>
    </>
  );
}

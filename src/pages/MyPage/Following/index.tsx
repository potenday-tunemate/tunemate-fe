import { ASSET_PATHS } from "entities/const/path";
import { Link } from "react-router-dom";
import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";

const FOLLOWING_DATA = [
  {
    profile: null,
    name: "유저1",
    status: "FOLLOWING",
  },
  {
    profile: null,
    name: "유저2",
    status: "FOLLOWING",
  },
  {
    profile: null,
    name: "유저3",
    status: "FOLLOWING",
  },
];

const RECOMMENDATION_DATA = [
  {
    profile: null,
    name: "유저4",
    status: "FOLLOWING",
  },
  {
    profile: null,
    name: "유저5",
    status: "FOLLOWING",
  },
  {
    profile: null,
    name: "유저6",
    status: "FOLLOWING",
  },
];

export default function FollowingPage() {
  return (
    <div>
      <Header>
        <div className="flex items-center w-full">
          <Link to="/my-page">
            <img
              src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
              alt="뒤로가기"
              className="w-34 h-34"
            />
          </Link>
          <p className="ml-20 font-bold text-lg">팔로잉 목록</p>
        </div>
      </Header>

      <Container>
        <div className="px-9 pt-10">
          <ul className="flex flex-col space-y-17">
            {FOLLOWING_DATA.map((user) => (
              <li key={user.name} className="flex justify-between items-center">
                <div className="flex items-center">
                  {user.profile ? (
                    <div className="w-38 h-38">
                      <img src={user.profile} alt="프로필" className="w-full" />
                    </div>
                  ) : (
                    <div className="w-38 h-38">
                      <img
                        src={`${ASSET_PATHS.ICONS}/my_page/ico_profile.svg`}
                        alt="프로필"
                        className="w-full"
                      />
                    </div>
                  )}
                  <p className="font-semibold text-sm ml-9">{user.name}</p>
                </div>
                <div className="flex justify-center items-center h-26 px-14 font-semibold text-xs bg-customGray-850 rounded-full">
                  {user.status === "FOLLOWING" ? "팔로잉" : "팔로우"}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-30">
            <p className="font-semibold">추천</p>
            <ul className="flex flex-col space-y-17 mt-20">
              {RECOMMENDATION_DATA.map((user) => (
                <li
                  key={user.name}
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center">
                    {user.profile ? (
                      <div className="w-38 h-38">
                        <img
                          src={user.profile}
                          alt="프로필"
                          className="w-full"
                        />
                      </div>
                    ) : (
                      <div className="w-38 h-38">
                        <img
                          src={`${ASSET_PATHS.ICONS}/my_page/ico_profile.svg`}
                          alt="프로필"
                          className="w-full"
                        />
                      </div>
                    )}
                    <p className="font-semibold text-sm ml-9">{user.name}</p>
                  </div>
                  <button className="flex justify-center items-center h-26 px-14 font-semibold text-xs text-black bg-white rounded-full">
                    팔로우
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

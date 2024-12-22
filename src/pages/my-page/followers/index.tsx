import { ASSET_PATHS } from "shared/const/path";
import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";

const FOLLOWER_DATA = [
  {
    profile: null,
    name: "유저1",
    status: "FOLLOWER",
  },
  {
    profile: null,
    name: "유저2",
    status: null,
  },
  {
    profile: null,
    name: "유저3",
    status: "FOLLOWER",
  },
];

const RECOMMENDATION_DATA = [
  {
    profile: null,
    name: "유저4",
    status: "FOLLOWER",
  },
  {
    profile: null,
    name: "유저5",
    status: "FOLLOWER",
  },
  {
    profile: null,
    name: "유저6",
    status: "FOLLOWER",
  },
];

export default function FollowerPage() {
  return (
    <div>
      <Header title="팔로워 목록" backPath="/my-page" titlePosition="left" />

      <Container>
        <div className="px-9 pt-10">
          <ul className="flex flex-col space-y-17">
            {FOLLOWER_DATA.map((user) => (
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
                <button
                  className={`flex justify-center items-center h-26 px-14 font-semibold text-xs rounded-full ${user.status === "FOLLOWER" ? "bg-customGray-850" : "bg-white text-black"}`}
                >
                  {user.status === "FOLLOWER" ? "팔로잉" : "팔로우"}
                </button>
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

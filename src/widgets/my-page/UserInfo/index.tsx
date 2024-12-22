import { Link } from "react-router-dom";
import { ASSET_PATHS } from "shared/const/path";
import { Mydata } from "../data";

interface ProfileProps {
  userData: Mydata;
}

export default function UserInfo({ userData }: ProfileProps) {
  return (
    <>
      {userData && (
        <div className="flex flex-col items-center justify-center">
          <div>
            {userData.profile ? (
              <img src={userData.profile} alt="profile" className="w-80" />
            ) : (
              <img
                src={`${ASSET_PATHS.ICONS}/my_page/ico_profile.svg`}
                alt="profile"
                className="w-80"
              />
            )}
          </div>

          <div className="mt-10">
            <p>{userData.user_name}</p>
          </div>

          {/* 감상, 팔로워, 팔로잉 섹션 */}
          <div className="flex justify-center items-center mt-20 space-x-20">
            <Link to="/my-page/history" className="text-sm">
              감상 <span className="font-bold">{userData.play_count}</span>개
            </Link>
            <Link to="/my-page/follower" className="text-sm">
              팔로워 <span className="font-bold">{userData.followers}</span>명
            </Link>
            <Link to="/my-page/following" className="text-sm">
              팔로잉 <span className="font-bold">{userData.following}</span>명
            </Link>
          </div>

          {/* 사용자가 좋아하는 장르 섹션 */}
          <div className="pt-16 mt-30 border-t border-customGray-850">
            <p className="font-bold">
              {userData.user_name}님이 가장 좋아하는 장르
            </p>
            <div className="flex space-x-10 mt-20">
              {userData.favorite_genre.map((genre) => (
                <span className="font-semibold text-sm px-10 bg-tunemate rounded-full">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { ASSET_PATHS } from "shared/constants/path";
import { UserData } from "../../../../entities/user/index.type";

interface UserCardProps {
  user: UserData;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex justify-between items-center">
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
        className={`flex justify-center items-center h-26 px-14 font-semibold text-xs rounded-full ${
          user.status === "FOLLOWER"
            ? "bg-customGray-850"
            : "bg-white text-black"
        }`}
      >
        {user.status === "FOLLOWER" ? "팔로잉" : "팔로우"}
      </button>
    </div>
  );
}

import UserCard from "widgets/my-page/ui/UserCard";
import { FOLLOWING_DATA } from "../model/constants";

export default function FollowingList() {
  return (
    <ul className="flex flex-col space-y-17">
      {FOLLOWING_DATA.map((user) => (
        <UserCard key={user.name} user={user} />
      ))}
    </ul>
  );
}

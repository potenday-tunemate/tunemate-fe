import UserCard from "widgets/my-page/ui/UserCard";
import { FOLLOWER_DATA } from "../../model/constants";

export default function FollowerList() {
  return (
    <ul className="flex flex-col space-y-17 px-9 pt-10">
      {FOLLOWER_DATA.map((user) => (
        <li key={user.name}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
}

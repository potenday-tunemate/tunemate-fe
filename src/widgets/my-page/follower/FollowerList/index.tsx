import UserCard from "entities/user/UserCard";
import { UserData } from "entities/user/types";

interface FollowerListProps {
  followers: UserData[];
}

export default function FollowerList({ followers }: FollowerListProps) {
  return (
    <ul className="flex flex-col space-y-17 px-9 pt-10">
      {followers.map((user) => (
        <li key={user.name}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
}

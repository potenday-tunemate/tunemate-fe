import UserCard from "entities/user/UserCard";
import { UserData } from "entities/user/types";

interface RecommendationListProps {
  recommendations: UserData[];
}

export default function RecommendationList({
  recommendations,
}: RecommendationListProps) {
  return (
    <div className="mt-30 px-9">
      <p className="font-semibold">추천</p>
      <ul className="flex flex-col space-y-17 mt-20">
        {recommendations.map((user) => (
          <li key={user.name}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

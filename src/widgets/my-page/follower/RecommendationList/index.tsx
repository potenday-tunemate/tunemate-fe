import UserCard from "entities/user/UserCard";
import { RECOMMENDATION_DATA } from "../model/constants";

export default function RecommendationList() {
  return (
    <>
      <p className="font-semibold">추천</p>
      <ul className="flex flex-col space-y-17 mt-20">
        {RECOMMENDATION_DATA.map((user) => (
          <li key={user.name}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}

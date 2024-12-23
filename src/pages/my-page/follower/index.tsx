import { UserData } from "entities/user/types";
import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import FollowerList from "widgets/my-page/follower/FollowerList";
import RecommendationList from "widgets/my-page/follower/RecommendationList";

const FOLLOWER_DATA: UserData[] = [
  { profile: null, name: "유저1", status: "FOLLOWER" },
  { profile: null, name: "유저2", status: null },
  { profile: null, name: "유저3", status: "FOLLOWER" },
];

const RECOMMENDATION_DATA: UserData[] = [
  { profile: null, name: "유저4", status: "FOLLOWER" },
  { profile: null, name: "유저5", status: "FOLLOWER" },
  { profile: null, name: "유저6", status: "FOLLOWER" },
];

export default function FollowerPage() {
  return (
    <div>
      <Header title="팔로워 목록" backPath="/my-page" titlePosition="left" />
      <Container>
        <FollowerList followers={FOLLOWER_DATA} />
        <RecommendationList recommendations={RECOMMENDATION_DATA} />
      </Container>
    </div>
  );
}

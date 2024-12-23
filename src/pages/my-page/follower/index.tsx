import { UserData } from "entities/user/index.type";
import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import FollowerList from "widgets/my-page/follower/FollowerList";
import RecommendationList from "widgets/my-page/follower/RecommendationList";

export default function FollowerPage() {
  return (
    <div>
      <Header title="팔로워 목록" backPath="/my-page" titlePosition="left" />
      <Container>
        <FollowerList />
        <div className="mt-30 px-9">
          <RecommendationList />
        </div>
      </Container>
    </div>
  );
}

import Container from "shared/components/layout/Container";
import Header from "shared/components/layout/Header";
import FollowerList from "widgets/my-page/follower/ui/FollowerList";
import RecommendationList from "widgets/my-page/follower/ui/RecommendationList";

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

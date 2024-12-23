import Header from "shared/components/layout/Header";
import Container from "shared/components/layout/Container";
import FollowingList from "widgets/my-page/following/ui/FollowingList";

export default function FollowingPage() {
  return (
    <div>
      <Header title="팔로잉 목록" backPath="/my-page" titlePosition="left" />
      <Container>
        <div className="px-9 pt-10">
          <FollowingList />
        </div>
      </Container>
    </div>
  );
}

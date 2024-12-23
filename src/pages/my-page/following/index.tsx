import Header from "shared/components/Layout/Header";
import Container from "shared/components/Layout/Container";
import FollowingList from "widgets/my-page/following/FollowingList";

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

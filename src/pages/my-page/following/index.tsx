import Header from "shared/components/Layout/Header";
import Container from "shared/components/Layout/Container";
import FollowingList from "widgets/my-page/following/ui/FollowingList";
import { useNavigate } from "react-router-dom";
export default function FollowingPage() {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 뒤로 가기
  };
  return (
    <div>
      <Header title="팔로잉 목록"  onClick={handleBackClick} titlePosition="left" />
      <Container>
        <div className="px-9 pt-10">
          <FollowingList />
        </div>
      </Container>
    </div>
  );
}

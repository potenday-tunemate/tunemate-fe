import { useNavigate } from "react-router-dom";
import Container from "shared/components/Layout/Container";
import MainHeader from "widgets/main/ui/MainHeader";
import RecentReviewsPreviewList from "widgets/main/ui/RecentReviewsPreviewList";
import RecommendList from "widgets/main/ui/RecommendList";
import SearchBar from "widgets/search/ui/SearchBar";

export default function MainPage() {
  const navigate = useNavigate();

  const handleSearchBarClick = () => {
    navigate("/search");
  };

  return (
    <main className="pt-56">
      <MainHeader />

      <Container>
        <SearchBar
          placeholder="좋아하는 음악을 검색해 보세요!"
          onClick={handleSearchBarClick}
          viewMode={true}
        />

        <div className="mt-6">
          <RecentReviewsPreviewList />
        </div>

        <div className="mt-40">
          <RecommendList />
        </div>
      </Container>
    </main>
  );
}

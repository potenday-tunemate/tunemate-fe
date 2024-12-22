import { Link } from "react-router-dom";

import Container from "shared/components/Layout/Container";
import MainHeader from "widgets/main/MainHeader";
import RecentReviewsPreviewList from "widgets/main/RecentReviewsPreviewList";
import RecommendList from "widgets/main/RecommendList";
import SearchBar from "widgets/main/SearchBar";

export default function MainPage() {
  const handleSearch = () => {};

  const handleSearchResultClick = () => {};

  return (
    <>
      <MainHeader />

      <Container>
        <div className="py-30">
          <SearchBar
            placeholder="좋아하는 음악을 검색해 보세요!"
            onSearch={handleSearch}
            searchResults={[]}
            onResultClick={handleSearchResultClick}
          />
        </div>

        <div className="mt-6">
          <RecentReviewsPreviewList />
        </div>

        <div className="mt-40">
          <RecommendList />
        </div>
      </Container>
    </>
  );
}

import Container from "shared/components/layout/Container";
import PageLayout from "shared/components/layout/PageLayout";
import MainHeader from "widgets/main/ui/MainHeader";
import RecentReviewsPreviewList from "widgets/main/ui/RecentReviewsPreviewList";
import RecommendList from "widgets/main/ui/RecommendList";
import SearchBar from "widgets/main/ui/SearchBar";

export default function MainPage() {
  const handleSearch = () => {};

  const handleSearchResultClick = () => {};

  return (
    <PageLayout>
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
    </PageLayout>
  );
}

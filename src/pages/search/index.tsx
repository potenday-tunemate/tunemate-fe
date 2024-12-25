import SearchBar from "widgets/search/ui/SearchBar";

export default function SearchPage() {
  const handleSearch = () => {};

  const handleSearchResultClick = () => {};

  return (
    <div>
      <SearchBar
        placeholder="좋아하는 음악을 검색해 보세요!"
        backPath="/main"
        onSearch={handleSearch}
        searchResults={[]}
        onResultClick={handleSearchResultClick}
      />
    </div>
  );
}

import { Link } from "react-router-dom";

import { ASSET_PATHS } from "entities/const/path";
import SearchBar from "shared/components/UI/SearchBar";
import Container from "shared/components/Layout/Container";

export default function MainPage() {
  const handleSearch = () => {};

  const handleSearchResultClick = () => {};

  return (
    <>
      <header className="flex items-center h-58 px-24">
        <Link to="/main">
          <img
            src={`${ASSET_PATHS.ICONS}/logo/tunemate_logo_symbol.svg`}
            alt="TUNEMATE"
            className="w-34 h-34"
          />
        </Link>
      </header>

      <Container>
        <div className="py-30">
          <SearchBar
            placeholder="좋아하는 음악을 검색해 보세요!"
            onSearch={handleSearch}
            searchResults={[]}
            onResultClick={handleSearchResultClick}
          />
        </div>

        <div className="mt-20">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">방금 등록된 감상</h2>
            <Link to="" className="text-customGray-450 text-sm underline">
              전체보기
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

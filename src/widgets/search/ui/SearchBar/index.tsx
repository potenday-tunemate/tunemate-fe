import { ASSET_PATHS } from "shared/constants/path";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SearchBarProps {
  placeholder?: string;
  searchResults?: [];
  backPath?: string;
  viewMode?: boolean;
  onSearch?: (query: string) => void;
  onClick?: () => void;
  onResultClick?: (selectData: string) => void;
}

export default function SearchBar({
  placeholder,
  searchResults = [],
  backPath,
  viewMode = false,
  onSearch,
  onClick,
  onResultClick,
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    if (query.trim()) {
      onSearch && onSearch(query);
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  };

  const handleResultClick = (selectedItem: any) => {
    setInputValue(selectedItem);
    setShowResults(false);

    if (onResultClick) {
      onResultClick(selectedItem);
    }
  };

  return (
    <div className={`${!viewMode && "px-24"}`}>
      <div className="relative py-20">
        <span
          className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
          onClick={() => onSearch && onSearch(inputValue)}
        >
          <img
            src={`${ASSET_PATHS.ICONS}/basic/ico_search.svg`}
            alt="검색"
            onClick={() => {
              if (inputValue.trim()) {
                onSearch && onSearch(inputValue);
              }
            }}
          />
        </span>

        <div className="relative flex">
          {backPath && (
            <Link to={backPath} className="mr-8">
              <img
                src={`${ASSET_PATHS.ICONS}/basic/ico_arrow_left.svg`}
                alt="뒤로가기"
                className="w-34 h-34"
              />
            </Link>
          )}

          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onClick={onClick}
            placeholder={placeholder || "검색해 보세요."}
            className="w-full h-37 px-10 bg-customGray-850 text-sm leading-37 placeholder-white focus:outline-none focus:border-white rounded-8"
          />

          {/* 검색 결과 리스트 */}
          {/* {showResults && (
            <ul className="absolute top-37 left-0 right-0 bg-customGray-850 text-sm shadow-lg mt-8 py-14 px-24 max-h-240 overflow-auto rounded-12 z-10">
              {searchResults.length > 0 ? (
                searchResults.map((result, idx) => (
                  <li
                    key={idx}
                    className="py-7 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleResultClick(result)}
                  >
                    {result}
                  </li>
                ))
              ) : (
                <li className="py-7 text-sm">검색 결과가 없습니다.</li>
              )}
            </ul>
          )} */}
        </div>
      </div>

      {!viewMode ? (
        showResults ? (
          <div>
            <h3 className="font-bold">검색 결과</h3>
            <div className="mt-20">
              {/* <div className="flex space-x-14">
              <div className="w-80 h-80 rounded-10 overflow-hidden">
                {review.coverImg ? (
                  <img src={review.coverImg} alt={review.title} />
                ) : (
                  <div className="w-full h-full bg-customGray-700"></div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="font-bold">{review.title}</p>
                  <div className="flex justify-center items-center h-26 px-10 text-xs font-[600] bg-customGray-700 rounded-full">
                    {review.genre}
                  </div>
                </div>
                <p className="mt-4 text-sm">{review.artist}</p>
              </div>
            </div> */}
            </div>
          </div>
        ) : (
          <div className="mt-20 bg-black">
            <div>
              <h3 className="font-bold">최근 검색어</h3>

              <div className="mt-16">
                <div className="flex items-center space-x-10 overflow-x-auto hidden-scroll">
                  {["검색어1", "검색어2", "검색어3", "검색어4", "검색어5"].map(
                    (keyword, idx) => (
                      <div
                        key={`keyword-${idx}`}
                        className="flex items-center justify-center shrink-0 h-31 px-16 border border-customGray-600 rounded-full text-sm text-customGray-300"
                      >
                        {keyword}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mt-40">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">인기 검색어</h3>
                <p className="text-xs text-customGray-600">오후 1시 업데이트</p>
              </div>

              <div className="mt-16">
                <div className="flex flex-col space-y-10">
                  {[1, 2, 3, 4, 5].map((rank) => (
                    <div key={rank}>
                      <p className="text-sm">
                        <span className="mr-10">{rank}</span>검색어
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
}

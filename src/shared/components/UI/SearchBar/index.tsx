import { ASSET_PATHS } from "entities/const/path";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  searchResults?: [];
  onResultClick?: (selectData: any) => void;
}

export default function SearchBar({
  placeholder,
  onSearch,
  searchResults = [],
  onResultClick,
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    if (query.trim()) {
      onSearch(query);
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

  const clearInput = () => {
    setInputValue(""); // 입력값 초기화
    setShowResults(false);
  };

  return (
    <div className="relative">
      <span
        className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer"
        onClick={() => onSearch(inputValue)}
      >
        <img
          src={`${ASSET_PATHS.ICONS}/basic/ico_search.svg`}
          alt="검색"
          onClick={() => {
            if (inputValue.trim()) {
              onSearch(inputValue);
            }
          }}
        />
      </span>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder || "검색해 보세요."}
        className="w-full h-37 px-10 bg-customGray-850 text-sm placeholder-white focus:outline-none focus:border-white rounded-8"
      />

      {/* {inputValue && (
        <span
          className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={clearInput}
        >
          <img
            src={`${ASSET_PATHS.ICONS}/basic/ico_close_gray.svg`}
            alt="검색어 입력 취소"
            width={14}
            height={14}
            className="w-14pxr h-14pxr"
          />
        </span>
      )} */}

      {/* 검색 결과 리스트 */}
      {showResults && (
        <ul className="absolute left-0 right-0 bg-white text-sm shadow-lg border mt-8 py-14 px-24 max-h-240 overflow-auto rounded-12 z-10 lg:py-22 lg:px-28 lg:text-base">
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
            <li className="py-7 text-customGray-900">검색 결과가 없습니다.</li>
          )}
        </ul>
      )}
    </div>
  );
}

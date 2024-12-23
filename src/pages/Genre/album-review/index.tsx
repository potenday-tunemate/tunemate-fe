import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "shared/components/layout/Container";
import Header from "shared/components/layout/Header";
import PageLayout from "shared/components/layout/PageLayout";
import Button from "shared/components/ui/buttons/Button";

const TAGS_DATA = [
  "활기찬",
  "청량한",
  "리드미컬한",
  "신나는",
  "우울한",
  "차분한",
  "감미로운",
  "몽환적인",
  "쓸쓸한",
  "로맨틱한",
];

export default function AlbumReviewPage() {
  const { albumId } = useParams();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <PageLayout>
      <Header title="감상 더하기" backPath="/genre" />

      <div className="mt-10">
        <Container>
          <div className="flex space-x-16">
            <div className="shrink-0 w-130 h-130 bg-customGray-850 rounded-10"></div>
            <div>
              <div className="flex items-center">
                <span className="grow-0 flex justify-center items-center h-26 px-10 bg-customGray-700 font-semibold text-xs rounded-full">
                  팝
                </span>
              </div>

              <div className="mt-10">
                <h2 className="font-bold">rosie</h2>
                <p className="text-sm">로제</p>
              </div>

              <div className="mt-5">
                <p className="text-10 text-customGray-500">
                  이번 앨범은 로제가 평소 가족들이나 가까운 친구들에게 주로
                  털어놓았던 내면의 이야기들 에서부터 비롯되었다.
                </p>
                <Link to="" className="text-10 text-customGray-600 underline">
                  더보기
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-20 border-t border-t-customGray-850">
            <h3 className="font-bold">대표 감상 태그</h3>
            <div className="flex flex-wrap gap-10 mt-10">
              {TAGS_DATA.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`h-22 px-10 rounded-full text-sm font-semibold transition ${
                    selectedTags.includes(tag)
                      ? "bg-tunemate"
                      : "bg-customGray-850"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-40">
            <h3 className="font-bold">한줄 평</h3>
            <div className="mt-10">
              <textarea className="w-full h-99 text-sm rounded-5 bg-customGray-850" />
            </div>
          </div>

          <div className="mt-96">
            <Button>등록</Button>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}

import { Link, useParams } from "react-router-dom";
import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import PageLayout from "shared/components/Layout/PageLayout";
import { ASSET_PATHS } from "shared/constants/path";

export default function AlbumDetailPage() {
  const { albumId } = useParams();

  return (
    <PageLayout>
      <Header backPath="/genre" />

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

          <div className="mt-20">
            <p className="flex justify-center items-center px-10 py-8 bg-customGray-850 text-sm font-semibold text-customGray-300 rounded-full">
              이 앨범을 통해 [리드미컬한]을 경험하신 분이 15명이예요!
            </p>
          </div>

          <div className="mt-20">
            <h3 className="font-bold">대표 감상 태그</h3>

            <div className="flex items-center space-x-10 mt-10 overflow-x-auto">
              {["활기찬", "리드미컬한", "신나는", "로맨틱한", "청량한"].map(
                (tag) => (
                  <span className="shrink-0 justify-center items-center h-25 px-10 text-sm font-semibold bg-customGray-850 rounded-full">
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="mt-24">
              <div className="max-w-246 mx-auto">
                <img
                  src={`${ASSET_PATHS.IMAGES}/genre/disk.png`}
                  alt="disk"
                  className="w-full"
                />
              </div>
            </div>

            <div className="mt-30">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">한줄 평</h3>
                <Link
                  to={`/genre/album-review/${albumId}`}
                  className="flex items-center justify-center h-25 px-10 bg-white text-sm text-black rounded-full"
                >
                  감상 등록하기
                </Link>
              </div>

              <div className="mt-16">
                <div className="flex flex-col space-y-10 p-10 bg-customGray-850 rounded-5">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      예전부터 쭉 로제의 노래는 멋지다:)
                    </p>
                    <p className="text-xs text-customGray-500">튠메1</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      개인적으로 drinks or coffee 가 젤 좋다
                    </p>
                    <p className="text-xs text-customGray-500">튠메2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}

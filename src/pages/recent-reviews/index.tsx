import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";
import PageLayout from "shared/components/Layout/PageLayout";
import { RECENT_REVIEWS_DATA } from "widgets/main/data";

export default function RecentReviewsPage() {
  return (
    <PageLayout>
      <Header backPath="/main" title="방금 등록된 감상" />

      <div className="mt-10">
        <Container>
          <div className="flex flex-col space-y-10">
            {RECENT_REVIEWS_DATA.map((review, idx) => (
              <div
                key={`review-${idx}`}
                className="h-136 p-10 bg-customGray-850 rounded-10"
              >
                <div className="flex space-x-14">
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
                </div>

                <div className="flex items-center justify-between space-x-8 mt-12">
                  <p className="text-sm text-customGray-500 whitespace-nowrap overflow-hidden text-ellipsis">
                    {review.review}
                  </p>
                  <p className="text-xs text-customGray-500 whitespace-nowrap">
                    {review.writer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </PageLayout>
  );
}

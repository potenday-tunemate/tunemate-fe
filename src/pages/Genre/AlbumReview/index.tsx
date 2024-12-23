import { useParams } from "react-router-dom";
import Container from "shared/components/layout/Container";
import Header from "shared/components/layout/Header";

export default function AlbumReviewPage() {
  const { albumId } = useParams();

  return (
    <div>
      <Header title="감상 더하기" backPath="/genre" />

      <div className="mt-10">
        <Container>
          <div className="flex">
            <div></div>
            <div></div>
          </div>
        </Container>
      </div>
    </div>
  );
}

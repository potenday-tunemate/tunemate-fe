import Container from "shared/components/Layout/Container";
import Header from "shared/components/Layout/Header";

const HISTORY_DATA = [
  {
    cover: null,
    title: "앨범 타이틀1",
    artist: "아티스트1",
    writer: "작성자1",
    data: "2024.12.21",
    desc: "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
  },
];

export default function HistoryPage() {
  return (
    <div>
      <Header title="감상 목록" backPath="/my-page" />

      <div>
        <Container>
          {HISTORY_DATA.map(() => (
            <div className="h-200 bg-customGray-850 rounded-10"></div>
          ))}
        </Container>
      </div>
    </div>
  );
}

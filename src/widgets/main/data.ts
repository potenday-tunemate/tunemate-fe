interface History {
  id: string;
  coverImg: string | null;
  title: string;
  artist: string;
  genre: string;
  writer: string;
  created: string;
  review: string;
}

// dummy
export const RECENT_REVIEWS_DATA: History[] = [
  {
    id: "1",
    coverImg: null,
    title: "앨범 타이틀1",
    artist: "아티스트1",
    writer: "작성자1",
    genre: "인디/얼터너티브",
    created: "2024.12.21",
    review:
      "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
  },
  {
    id: "2",
    coverImg: null,
    title: "앨범 타이틀2",
    artist: "아티스트2",
    writer: "작성자2",
    genre: "인디/얼터너티브",
    created: "2024.12.22",
    review:
      "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
  },
  {
    id: "3",
    coverImg: null,
    title: "앨범 타이틀3",
    artist: "아티스트3",
    writer: "작성자3",
    genre: "팝",
    created: "2024.12.23",
    review:
      "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
  },
  {
    id: "4",
    coverImg: null,
    title: "앨범 타이틀4",
    artist: "아티스트4",
    writer: "작성자4",
    genre: "팝",
    created: "2024.12.24",
    review:
      "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
  },
];

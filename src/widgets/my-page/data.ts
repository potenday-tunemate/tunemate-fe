interface History {
  id: string;
  cover: string | null;
  title: string;
  artist: string;
  writer: string;
  created: string;
  review: string;
}

export interface Mydata {
  profile: string | null;
  user_name: string;
  play_count: number;
  followers: number;
  following: number;
  favorite_genre: string[];
  favorite_tag: string[];
  histories: History[];
}

// dummy
export const MY_DATA: Mydata = {
  profile: null,
  user_name: "name",
  play_count: 15,
  followers: 3,
  following: 3,
  favorite_genre: ["팝", "K-Pop", "인디", "힙합/랩"],
  favorite_tag: ["리드미컬한", "활기찬", "신나는", "감미로운"],
  histories: [
    {
      id: "1",
      cover: null,
      title: "앨범 타이틀1",
      artist: "아티스트1",
      writer: "작성자1",
      created: "2024.12.21",
      review:
        "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
    },
    {
      id: "2",
      cover: null,
      title: "앨범 타이틀2",
      artist: "아티스트2",
      writer: "작성자2",
      created: "2024.12.22",
      review:
        "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
    },
    {
      id: "3",
      cover: null,
      title: "앨범 타이틀3",
      artist: "아티스트3",
      writer: "작성자3",
      created: "2024.12.23",
      review:
        "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
    },
    {
      id: "4",
      cover: null,
      title: "앨범 타이틀4",
      artist: "아티스트4",
      writer: "작성자4",
      created: "2024.12.24",
      review:
        "한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평한줄평",
    },
  ],
};
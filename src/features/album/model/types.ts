// 앨범 등록 요청 바디 타입
export interface PostAlbumRequestBody {
  title: string;
  cover_img: string;
  artist: number;
  year: number;
  selected_genres: number[];
}

// 앨범 리뷰 등록 요청 바디 타입
export interface PostAlbumReviewRequestBody {
  content: "string";
  selected_tags: number[];
}

interface AlbumReviewData {
  reviewId: number;
  nickname: string;
  artistName: string;
  albumTitle: string;
  albumCoverImg: string;
  content: string;
  tags: string[];
}

// 앨범 리뷰 가져오기 응답 타입
export type GetAlbumReviewResponse = AlbumReviewData[];

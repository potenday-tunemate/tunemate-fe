// 리뷰 수정 요청 바디 타입
export interface PutReviewRequestBody {
  content: string;
  tags: number[];
}

// 리뷰 조회 응답 타입
export interface GetReviewResponse {
  reviewId: number;
  nickname: string;
  artistName: string;
  albumTitle: string;
  albumCoverImg: string;
  content: string;
}

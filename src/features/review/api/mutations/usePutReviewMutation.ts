import { useMutation } from "@tanstack/react-query";
import { PutReviewRequestBody } from "features/review/model/types";
import { ApiResponse, put } from "shared/api/index.api";

// 리뷰 수정 쿼리 함수
export const usePutReviewMutation = () => {
  return useMutation<
    ApiResponse<null>,
    Error,
    { id: string; userID: string; body: PutReviewRequestBody }
  >({
    mutationFn: async ({ id, userID, body }) => {
      const response = await put(`/review/${id}?userID=${userID}`, body);
      return response as ApiResponse<null>;
    },
  });
};

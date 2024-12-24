import { useMutation } from "@tanstack/react-query";
import { ApiResponse, del } from "shared/api/index.api";

export const useDeleteReviewMutation = () => {
  return useMutation<ApiResponse<null>, Error, { id: string; userID: string }>({
    mutationFn: async ({ id, userID }) => {
      const response = await del(`/review/${id}?userID=${userID}`);
      return response as ApiResponse<null>;
    },
  });
};

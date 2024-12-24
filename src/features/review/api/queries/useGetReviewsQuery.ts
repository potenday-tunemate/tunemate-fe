import { useQuery } from "@tanstack/react-query";
import { GetReviewResponse } from "features/review/model/types";
import { ApiResponse, get } from "shared/api/index.api";

export const useGetReviewsQuery = (params: {
  limit: number;
  offset: number;
}) => {
  return useQuery<ApiResponse<GetReviewResponse[]>, Error>({
    queryKey: ["reviews", params],
    queryFn: async () => {
      const response = await get(
        `/reviews?limit=${params.limit}&offset=${params.offset}`
      );
      return response as ApiResponse<GetReviewResponse[]>;
    },
  });
};

import { useQuery } from "@tanstack/react-query";
import { GetReviewResponse } from "features/review/model/types";
import { ApiResponse, get } from "shared/api/index.api";

export const useGetReviewsQuery = () => {
  return useQuery<ApiResponse<[]>, Error>({
    queryKey: ["reviewTagList"],
    queryFn: async () => {
      const response = await get("/review/tagList");
      return response as ApiResponse<[]>;
    },
  });
};

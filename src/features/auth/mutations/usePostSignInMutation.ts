import { useMutation } from "@tanstack/react-query";
import {
  PostSignInRequestBody,
  PostSignInResponse,
} from "entities/auth/index.type";
import { ApiResponse, post } from "shared/api/index.api";
import { ENDPOINTS } from "shared/constants/endpoints";

// 로그인 쿼리 함수
export const usePostSignInMutation = () => {
  return useMutation<
    ApiResponse<PostSignInResponse>,
    Error,
    PostSignInRequestBody
  >({
    mutationFn: async (body: PostSignInRequestBody) => {
      const response = await post(ENDPOINTS.AUTH.SIGNIN, body);
      return response as ApiResponse<PostSignInResponse>;
    },
  });
};

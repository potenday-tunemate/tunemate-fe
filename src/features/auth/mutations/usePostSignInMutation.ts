import { useMutation } from "@tanstack/react-query";
import {
  PostSignInRequestBody,
  PostSignInResponse,
} from "entities/auth/index.type";
import { ApiResponse, post } from "shared/api/index.api";
import { ENDPOINTS } from "shared/constants/endpoints";
import { useAuthStore } from "../model";

// 로그인 쿼리 함수
export const usePostSignInMutation = () => {
  const { login } = useAuthStore();

  return useMutation<
    ApiResponse<PostSignInResponse>,
    Error,
    PostSignInRequestBody
  >({
    mutationFn: async (body: PostSignInRequestBody) => {
      const response = await post(ENDPOINTS.AUTH.SIGNIN, body);
      return response as ApiResponse<PostSignInResponse>;
    },
    onSuccess: (data) => {
      if (data?.data?.access_token) {
        localStorage.setItem("access_token", data.data.access_token);
        login(data.data.access_token);
      }
    },
  });
};

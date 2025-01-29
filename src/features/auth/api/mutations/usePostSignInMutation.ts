import { useMutation } from "@tanstack/react-query";
import { ApiResponse, post } from "shared/api/index.api";
import { useAuthStore } from "../../model";
import {
  PostSignInRequestBody,
  PostSignInResponse,
} from "features/auth/model/types";

// 로그인 쿼리 함수
export const usePostSignInMutation = () => {
  const { login } = useAuthStore();

  return useMutation<
    ApiResponse<PostSignInResponse>,
    Error,
    PostSignInRequestBody
  >({
    mutationFn: async (body: PostSignInRequestBody) => {
      const response = await post("auth/signin", body);
      console.log(response);
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

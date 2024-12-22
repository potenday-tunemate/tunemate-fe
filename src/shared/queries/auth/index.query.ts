import { useMutation } from "@tanstack/react-query";
import { ApiResponse, post } from "shared/api/index.api";
import {
  PostSigninRequestBody,
  PostSigninResponse,
} from "shared/types/signin/index.type";
import { PostSignupRequestBody } from "shared/types/signup/index.type";

// 회원가입 쿼리 함수
export const usePostSignupMutation = () => {
  return useMutation<
    ApiResponse<PostSignupRequestBody>,
    Error,
    PostSignupRequestBody
  >({
    mutationFn: async (body: PostSignupRequestBody) => {
      const response = await post("/auth/signup", body);
      return response as ApiResponse<PostSignupRequestBody>;
    },
  });
};

// 로그인 쿼리 함수
export const usePostSigninMutation = () => {
  return useMutation<
    ApiResponse<PostSigninResponse>,
    Error,
    PostSigninRequestBody
  >({
    mutationFn: async (body: PostSigninRequestBody) => {
      const response = await post("/auth/signin", body);
      return response as ApiResponse<PostSigninResponse>;
    },
  });
};

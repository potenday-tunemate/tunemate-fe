import { useMutation } from "@tanstack/react-query";
import { PostSignUpRequestBody } from "features/auth/model/types";
import { ApiResponse, post } from "shared/api/index.api";

// 회원가입 쿼리 함수
export const usePostSignUpMutation = () => {
  return useMutation<ApiResponse<null>, Error, PostSignUpRequestBody>({
    mutationFn: async (body: PostSignUpRequestBody) => {
      const response = await post("/auth/signup", body);
      return response as ApiResponse<null>;
    },
  });
};

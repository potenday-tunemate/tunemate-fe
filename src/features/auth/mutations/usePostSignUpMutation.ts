import { useMutation } from "@tanstack/react-query";
import { PostSignUpRequestBody } from "entities/auth/index.type";
import { ApiResponse, post } from "shared/api/index.api";
import { ENDPOINTS } from "shared/constants/endpoints";

// 회원가입 쿼리 함수
export const usePostSignUpMutation = () => {
  return useMutation<ApiResponse<null>, Error, PostSignUpRequestBody>({
    mutationFn: async (body: PostSignUpRequestBody) => {
      const response = await post(ENDPOINTS.AUTH.SIGNUP, body);
      return response as ApiResponse<null>;
    },
  });
};

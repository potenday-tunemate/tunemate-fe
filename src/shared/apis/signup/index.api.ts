import { PostSignupRequestBody } from "shared/types/signup/index.type";
import { postRequest } from "../index.api";

// [POST] 회원가입
export const postSignup = async (body: PostSignupRequestBody) => {
  try {
    const response = await postRequest(`/auth/signup`, body);
    return response;
  } catch (error) {
    console.error("[postSignup] 회원가입 실패: ", error);
    throw error;
  }
};

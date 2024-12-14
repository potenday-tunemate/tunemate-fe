import { postRequest } from "../index.api";
import { PostSigninRequestBody } from "shared/types/signin/index.type";

// [POST] 로그인
export const postSignin = async (body: PostSigninRequestBody) => {
  try {
    const response = await postRequest(`/auth/signin`, body);
    return response;
  } catch (error) {
    console.error("[postSignin] 로그인 실패: ", error);
    throw error;
  }
};

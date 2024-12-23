// 회원가입 요청 바디 타입
export interface PostSignUpRequestBody {
  email: string;
  password: string;
  nickname: string;
}

// 회원가입 응답 타입
export interface PostSignUpResponse {
  data: null;
  ok: boolean;
}

// 로그인 요청 바디 타입
export interface PostSignInRequestBody {
  email: string;
  password: string;
}

// 로그인 응답 타입
export interface PostSignInResponse {
  access_token: string;
  refresh_token: string;
}

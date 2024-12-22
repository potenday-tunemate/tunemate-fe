export interface PostSigninRequestBody {
  email: string;
  password: string;
}

export interface PostSigninResponse {
  [x: string]: any;
  ok: boolean;
  data?: {
    access_token: string;
    refresh_token: string;
  };
}

const API_BASE_URL = process.env.REACT_APP_API_URL;

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchOptions<T> {
  method?: RequestMethod;
  body?: T;
  headers?: HeadersInit;
  queryParams?: Record<string, string | number | boolean>;
}

export interface ApiResponse<T> {
  ok: boolean;
  data: T | null;
}

async function apiRequest<T, B = unknown>(
  endpoint: string,
  { method = "GET", body, headers = {}, queryParams }: FetchOptions<B> = {}
): Promise<ApiResponse<T>> {
  try {
    // Query string 처리
    const queryString = queryParams
      ? `?${new URLSearchParams(queryParams as Record<string, string>)}`
      : "";

    const url = `${API_BASE_URL}${endpoint}${queryString}`;

    const fetchOptions: RequestInit = {
      method,
      headers: {
        ...headers,
      },
    };

    // POST, PUT, DELETE 요청에서 body 처리
    if (body) {
      if (body instanceof FormData) {
        fetchOptions.body = body;

        // FormData일 경우 Content-Type을 자동으로 설정하도록 제거
        if (
          fetchOptions.headers &&
          (fetchOptions.headers as Record<string, string>)["Content-Type"]
        ) {
          delete (fetchOptions.headers as Record<string, string>)[
            "Content-Type"
          ];
        }
      } else {
        fetchOptions.body = JSON.stringify(body);
        fetchOptions.headers = {
          "Content-Type": "application/json",
          ...fetchOptions.headers,
        };
      }
    }

    // API 요청
    const response = await fetch(url, fetchOptions);

    // 응답 처리
    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.statusText}`);
    }

    // JSON 응답 파싱
    const data = await response.json();

    return { data, ok: true };
  } catch (error) {
    if (error instanceof Error) {
      console.error(`API 요청 에러: ${error.message}`);
      return { data: null, ok: false };
    }

    console.error(`API 요청 에러: 알 수 없는 오류`);
    return { data: null, ok: false };
  }
}

// GET 요청
export const getRequest = <T>(endpoint: string) => {
  return apiRequest<T>(endpoint, { method: "GET" });
};

// POST 요청
export const postRequest = <T, B = unknown>(
  endpoint: string,
  body: B,
  headers: Record<string, string> = {}
) => {
  return apiRequest<T, B>(endpoint, {
    method: "POST",
    body,
    headers: {
      ...headers, // 기존 headers와 병합
    },
  });
};

// PUT 요청
export const putRequest = <T, B = unknown>(endpoint: string, body: B) => {
  return apiRequest<T, B>(endpoint, { method: "PUT", body });
};

// DELETE 요청
export const deleteRequest = <T>(endpoint: string) => {
  return apiRequest<T>(endpoint, { method: "DELETE" });
};

export type ApiResponse<T> = {
  data: T | null;
  ok: boolean;
  statusCode?: string;
  errorCode?: number;
  message?: string;
  details?: string;
};

export type ApiRequestParams = Record<
  string,
  string | number | boolean | (string | number | boolean)[]
>;

export const BASE_URL = "https://tunemate-be-production.up.railway.app/";

export async function get<T>(
  endpoint: string,
  params?: ApiRequestParams
): Promise<ApiResponse<T>> {
  const queryString = params
    ? new URLSearchParams(
        Object.entries(params).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join(",") : String(value),
        ])
      ).toString()
    : undefined;

  const response = await fetch(
    `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ""}`,
    { method: "GET" }
  );
  return response.json();
}

export async function post<T>(
  endpoint: string,
  body: object = {}
): Promise<ApiResponse<T>> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return response.json();
}

export async function put<T>(
  endpoint: string,
  body: object = {}
): Promise<ApiResponse<T>> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return response.json();
}

export async function del<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await fetch(`${BASE_URL}${endpoint}`, { method: "DELETE" });
  return response.json();
}

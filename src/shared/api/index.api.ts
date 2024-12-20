export type ApiRequestParams = Record<
  string,
  string | number | boolean | (string | number | boolean)[]
>;

export async function get<T>(
  url: string,
  params?: ApiRequestParams
): Promise<T> {
  const queryString = params
    ? new URLSearchParams(
        Object.entries(params).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join(",") : String(value),
        ])
      ).toString()
    : undefined;

  const response = await fetch(
    `${url}${queryString ? `?${queryString}` : ""}`,
    { method: "GET" }
  );
  return response.json();
}

export async function post<T>(url: string, body: object = {}): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return response.json();
}

export async function put<T>(url: string, body: object = {}): Promise<T> {
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return response.json();
}

export async function del<T>(url: string): Promise<T> {
  const response = await fetch(url, { method: "DELETE" });
  return response.json();
}

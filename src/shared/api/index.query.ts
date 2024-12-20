import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ApiRequestParams, del, get, post, put } from "./index.api";

export function useGetQuery<T>(
  url: string,
  params?: ApiRequestParams,
  options?: { [key: string]: unknown }
): UseQueryResult<T> {
  return useQuery<T, Error>({
    queryKey: [url, params],
    queryFn: () => get<T>(url, params),
    ...options,
  });
}

export function usePostQuery<T>(
  url: string,
  body: object = {},
  options?: { [key: string]: unknown }
): UseQueryResult<T> {
  return useQuery<T, Error>({
    queryKey: [url, body],
    queryFn: () => post<T>(url, body),
    ...options,
  });
}

export function usePutQuery<T>(
  url: string,
  body: object = {},
  options?: { [key: string]: unknown }
): UseQueryResult<T> {
  return useQuery<T, Error>({
    queryKey: [url, body],
    queryFn: () => put<T>(url, body),
    ...options,
  });
}

export function useDeleteQuery<T>(
  url: string,
  options?: { [key: string]: unknown }
): UseQueryResult<T> {
  return useQuery<T, Error>({
    queryKey: [url],
    queryFn: () => del<T>(url),
    ...options,
  });
}

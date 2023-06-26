import { ApiResponse } from "@/types";

interface RequestParams {
  url: string;
  payload?: object;
  method: "GET" | "POST" | "PUT" | "PATCH";
  fetchOptions?: object;
}

export const API_URL = "http://localhost:3003";

export async function request<T>({
  method,
  url,
  payload,
  fetchOptions = { cache: "no-cache" },
}: RequestParams): Promise<ApiResponse<T>> {
  let fetchParams: any = {
    ...fetchOptions,
    method,
  };
  const result: ApiResponse<T> = {
    data: {} as T,
    messages: [],
    ok: false,
    statusCode: 500,
  };

  if (["POST"].includes(method)) {
    fetchParams = {
      ...fetchParams,
      body: JSON.stringify(payload),
    };
  }

  try {
    const response = await fetch(url, fetchParams);
    result.statusCode = response.status;

    if (result.statusCode >= 200 && result.statusCode < 300) {
      const jsonResult: T = await response.json();
      result.data = jsonResult;
      result.ok = true;
    }
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }

  return result;
}

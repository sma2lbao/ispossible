import { ApiResponse } from "@/types/common";
import { Toast } from "@design/core";

export type Method = "POST" | "PUT" | "DELETE";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createFetcher<Data = any>() {
  return (url: string, init?: RequestInit): Promise<ApiResponse<Data>> => {
    return fetch(url, {
      ...init,
      method: "GET",
    }).then(async (response) => {
      if (!response.ok) {
        const info = await response.json();
        const error = new Error(info.message);
        Toast.error(error.message ?? `服务器繁忙~`);
        throw error;
      }
      return response.json();
    });
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createMutater<ExtraArg = unknown, Data = any>(method: Method) {
  return (
    endpoint: string,
    opts: Readonly<{ arg: ExtraArg }>
  ): Promise<ApiResponse<Data>> =>
    fetch(endpoint, {
      method,
      body: JSON.stringify(opts.arg),
    }).then(async (response) => {
      if (!response.ok) {
        const info = await response.json();
        const error = new Error(info.message);
        Toast.error(error.message ?? `服务器繁忙~`);
        throw error;
      }
      return response.json();
    });
}

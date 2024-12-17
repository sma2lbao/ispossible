import { ApiResponse } from "@/types/common";

export type Method = "POST" | "PUT" | "DELETE";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createFetcher<Data = any>() {
  return (url: string, init?: RequestInit): Promise<ApiResponse<Data>> => {
    return fetch(url, {
      ...init,
      method: "GET",
    }).then((response) => {
      if (!response.ok) {
        throw new Error();
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
    }).then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    });
}

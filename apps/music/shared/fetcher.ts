import { ApiResponse } from "@/types/common";
import { Toast } from "@design/core";
import { Key } from "swr";

export type Method = "POST" | "PUT" | "DELETE";

export interface MutateOptions<K = Key, T = unknown> {
  endpoint?: ((key: K, arg: T) => string | string[]) | string;
  excludes?: (keyof T)[];
}

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

export function createMutater<
  ExtraArg = unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Data = any,
  MutateKey extends Key = string
>(method: Method, mutateOptions?: MutateOptions<MutateKey, ExtraArg>) {
  const { endpoint, excludes = [] } = mutateOptions ?? {};
  return (
    key: MutateKey,
    opts: Readonly<{ arg: ExtraArg }>
  ): Promise<ApiResponse<Data>> => {
    const { arg } = opts;
    let url: string = key?.toString() ?? "";
    if (endpoint) {
      const result =
        typeof endpoint === "function" ? endpoint(key, arg) : endpoint;
      url = Array.isArray(result) ? result.join("/") : result;
    }

    if (excludes.length > 0) {
      excludes.forEach((prop) => {
        delete arg[prop];
      });
    }

    return fetch(url, {
      method,
      body: arg ? JSON.stringify(arg) : undefined,
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

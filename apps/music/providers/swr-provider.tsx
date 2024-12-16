"use client";

import { Toast } from "@design/core";
import { SWRConfig } from "swr";

const fetcher = (url: string, init?: RequestInit) => {
  return fetch(url, init).then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        onError(error) {
          Toast.error(error?.message ?? `服务器繁忙~`);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

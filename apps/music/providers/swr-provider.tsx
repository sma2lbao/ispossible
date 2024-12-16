"use client";

import { createFetcher } from "@/shared/fetcher";
import { Toast } from "@design/core";
import { SWRConfig } from "swr";

const fetcher = createFetcher();

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

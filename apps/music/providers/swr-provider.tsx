"use client";

import { Toast } from "@design/core";
import { SWRConfig } from "swr";
export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        onError(error) {
          Toast.error(error?.message ?? `服务器繁忙~`);
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};

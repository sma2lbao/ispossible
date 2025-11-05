"use client";

import { createFetcher } from "@/shared/fetcher";
import { SWRConfig } from "swr";

const fetcher = createFetcher();

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};

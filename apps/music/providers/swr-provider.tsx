"use client";

import { createFetcher } from "@/shared/fetcher";
import { useEffect } from "react";
import { SWRConfig } from "swr";

const fetcher = createFetcher();

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }
  }, []);

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

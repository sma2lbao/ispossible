"use client";
import { useStore } from "zustand";

import { createContext, useContext, useRef } from "react";
import {
  type PendingPlaylistStore,
  createPendingPlaylistStore,
} from "@/stores/pending-playlist-store";

export type PendingPlaylistStoreApi = ReturnType<
  typeof createPendingPlaylistStore
>;

export const PendingPlaylistStoreContext = createContext<
  PendingPlaylistStoreApi | undefined
>(undefined);

export const PendingPlaylistStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<PendingPlaylistStoreApi>(null);

  if (!storeRef.current) {
    storeRef.current = createPendingPlaylistStore();
  }

  return (
    <PendingPlaylistStoreContext.Provider value={storeRef.current}>
      {children}
    </PendingPlaylistStoreContext.Provider>
  );
};

export const usePendingPlaylistStore = <T,>(
  selector: (store: PendingPlaylistStore) => T
): T => {
  const pendingPlaylistStoreContext = useContext(PendingPlaylistStoreContext);

  if (!pendingPlaylistStoreContext) {
    throw new Error(
      `usePendingPlaylistStore must be used within PendingPlaylistStoreProvider`
    );
  }

  return useStore(pendingPlaylistStoreContext, selector);
};

"use client";
import { useStore } from "zustand";

import { createContext, useContext, useRef } from "react";
import { type PlayerStore, createPlayerStore } from "@/stores/player-store";

export type PlayerStoreApi = ReturnType<typeof createPlayerStore>;

export const PlayerStoreContext = createContext<PlayerStoreApi | undefined>(
  undefined
);

export const PlayerStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<PlayerStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createPlayerStore();
  }

  return (
    <PlayerStoreContext.Provider value={storeRef.current}>
      {children}
    </PlayerStoreContext.Provider>
  );
};

export const usePlayerStore = <T,>(selector: (store: PlayerStore) => T): T => {
  const playerStoreContext = useContext(PlayerStoreContext);

  if (!playerStoreContext) {
    throw new Error(`usePlayerStore must be used within PlayerStoreProvider`);
  }

  return useStore(playerStoreContext, selector);
};

"use client";
import { createContext, useContext, useRef } from "react";
import { useStore } from "zustand";
import { PlaylistsStore, createPlaylistsStore } from "@/stores/playlists-store";

export type PlaylistsStoreApi = ReturnType<typeof createPlaylistsStore>;

export const PlaylistsStoreContext = createContext<
  PlaylistsStoreApi | undefined
>(undefined);

export const PlaylistsStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<PlaylistsStoreApi>(null);

  if (!storeRef.current) {
    storeRef.current = createPlaylistsStore();
  }

  return (
    <PlaylistsStoreContext.Provider value={storeRef.current}>
      {children}
    </PlaylistsStoreContext.Provider>
  );
};

export const usePlaylistsStore = <T,>(
  selector: (store: PlaylistsStore) => T
): T => {
  const playlistsStoreContext = useContext(PlaylistsStoreContext);

  if (!playlistsStoreContext) {
    throw new Error(
      `usePlaylistsStore must be used within PlaylistsStoreProvider`
    );
  }

  return useStore(playlistsStoreContext, selector);
};

import { Playlist } from "@prisma/client";
import { createStore } from "zustand/vanilla";

export type PlaylistsState = {
  myPlaylists: Playlist[] | null;
};

export type PlaylistsActions = {
  setMyPlaylists: (playlists: Playlist[]) => void;
};

export type PlaylistsStore = PlaylistsState & PlaylistsActions;

export const createPlaylistsStore = (
  defaultState: PlaylistsState = { myPlaylists: [] }
) => {
  return createStore<PlaylistsStore>()((set) => ({
    ...defaultState,
    setMyPlaylists(playlists) {
      return set(() => ({ myPlaylists: playlists }));
    },
  }));
};

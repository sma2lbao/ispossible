import { Playlist } from "@prisma/client";
import { createStore } from "zustand/vanilla";

export type PlaylistsState = {
  /**
   * 属于‘我的’歌单
   */
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

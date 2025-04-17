import type { Song } from "@prisma/client";
import { createStore } from "zustand/vanilla";

export type PendingPlaylistState = {
  /**
   * 当前播放的索引
   */
  current: number;

  /**
   * 待播放的列表
   */
  songs: Song[];
};

export type PendingPlaylistActions = {
  /**
   * 追加歌曲
   * @param song
   * @returns
   */
  append: (song: Song) => void;
};

export type PendingPlaylistStore = PendingPlaylistState &
  PendingPlaylistActions;

export const createPendingPlaylistStore = (
  defaultState: PendingPlaylistState = { current: -1, songs: [] }
) => {
  return createStore<PendingPlaylistStore>()((set) => ({
    ...defaultState,
    append(song) {
      return set((state) => ({ songs: [...state.songs, song] }));
    },
  }));
};

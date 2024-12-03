import type { Song } from "@prisma/client";
import { createStore } from "zustand/vanilla";

export type PlayerState = {
  song: Song | null;
};

export type PlayerActions = {
  play: (song: Song) => void;
};

export type PlayerStore = PlayerState & PlayerActions;

export const createPlayerStore = (
  defaultState: PlayerState = { song: null }
) => {
  return createStore<PlayerStore>()((set) => ({
    ...defaultState,
    play: (song) => set(() => ({ song: song })),
  }));
};

"use client";
import React from "react";
import { List } from "@design/core";
import SongListItem from "./song-list-item";
import type { Song } from "@prisma/client";

export interface SongListProps {
  songs: Song[];
  onFavor?: (song: Song) => void;
  onUnfavor?: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = (props) => {
  const { songs, onFavor, onUnfavor } = props;

  return (
    <List>
      {songs.map((item) => (
        <List.Item key={item.id}>
          <SongListItem
            song={item}
            onFavor={() => onFavor?.(item)}
            onUnfavor={() => onUnfavor?.(item)}
          />
        </List.Item>
      ))}
    </List>
  );
};

export default SongList;

"use client";
import React from "react";
import { List } from "@design/core";
import SongListItem from "./song-list-item";
import type { Song } from "@prisma/client";

export interface SongListProps {
  songs: Song[];
  onPlay?: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = (props) => {
  const { songs, onPlay } = props;

  return (
    <List>
      {songs.map((item) => (
        <List.Item key={item.id}>
          <SongListItem song={item} onPlay={() => onPlay?.(item)} />
        </List.Item>
      ))}
    </List>
  );
};

export default SongList;

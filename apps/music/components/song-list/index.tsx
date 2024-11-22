"use client";
import React from "react";
import { List } from "@design/core";
import SongListItem from "./song-list-item";

export interface SongListProps {}

const SongList: React.FC<SongListProps> = (props) => {
  const {} = props;

  return (
    <List>
      <List.Item>
        <SongListItem />
      </List.Item>
      <List.Item>
        <SongListItem />
      </List.Item>
      <List.Item>
        <SongListItem />
      </List.Item>
      <List.Item>
        <SongListItem />
      </List.Item>
      <List.Item>
        <SongListItem />
      </List.Item>
      <List.Item>
        <SongListItem />
      </List.Item>
    </List>
  );
};

export default SongList;

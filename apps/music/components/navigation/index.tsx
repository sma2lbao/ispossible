"use-client";
import React from "react";
import stylex from "@stylexjs/stylex";
import { Nav, type NavItemType } from "@design/core";

export interface NavigationProps {}

const styles = stylex.create({
  navigation: {
    width: "100%",
    backgroundColor: "#fff",
  },
});

const Navigation: React.FC<NavigationProps> = (props) => {
  const {} = props;

  const navConfig: NavItemType[] = [
    {
      itemKey: "online",
      text: "在线音乐",
      items: [
        {
          itemKey: "recommand",
          text: "推荐",
        },
      ],
    },
    {
      itemKey: "own",
      text: "我的音乐",
      items: [
        {
          itemKey: "favorite",
          text: "喜欢",
        },
        {
          itemKey: "recent",
          text: "最近播放",
        },
      ],
    },
    {
      itemKey: "playlist",
      text: "自建歌单",
      items: [],
    },
  ];

  return (
    <div {...stylex.props(styles.navigation)}>
      <Nav items={navConfig} style={{ width: "100%" }} />
    </div>
  );
};

export default Navigation;

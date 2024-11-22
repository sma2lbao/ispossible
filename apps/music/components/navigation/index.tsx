"use-client";
import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";
import { Nav, type OnSelectNavData, type NavItemType } from "@design/core";
import Logo from "./logo";

export interface NavigationProps {}

const styles = stylex.create({
  navigation: {
    width: "100%",
    backgroundColor: "#fff",
  },
  logo$container: {
    height: "80px",
    display: "flex",
    paddingLeft: "32px",
    alignItems: "center",
  },
});

const Navigation: React.FC<NavigationProps> = (props) => {
  const router = useRouter();
  const {} = props;
  const [defaultSelectedKeys] = useState<string[]>([]);

  const navConfig: NavItemType[] = [
    {
      itemKey: "online",
      text: "在线音乐",
      items: [
        {
          itemKey: "recommand",
          text: "推荐",
          path: "/trend",
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

  const handleSelect = (data: OnSelectNavData) => {
    if (data.path) {
      router.push(data.path);
    }
  };

  return (
    <div {...stylex.props(styles.navigation)}>
      <div {...stylex.props(styles.logo$container)}>
        <Logo />
      </div>
      <Nav
        items={navConfig}
        style={{ width: "100%" }}
        onSelect={handleSelect}
        defaultSelectedKeys={defaultSelectedKeys}
      />
    </div>
  );
};

export default Navigation;

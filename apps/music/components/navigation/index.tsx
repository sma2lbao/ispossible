"use-client";
import React, { useEffect, useState } from "react";
import stylex from "@stylexjs/stylex";
import { useRouter, usePathname } from "next/navigation";
import {
  Nav,
  type OnSelectNavData,
  type NavItemProps,
  type SubNavProps,
} from "@design/core";
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

type NavCongfigItem =
  | SubNavProps
  | (NavItemProps & {
      path: string;
    });

const navConfig: NavCongfigItem[] = [
  {
    itemKey: "online",
    text: "在线音乐",
    items: [
      {
        itemKey: "recommand",
        text: "推荐",
        path: "/",
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
        path: "/favorites",
      },
    ],
  },
  {
    itemKey: "playlist",
    text: "自建歌单",
    items: [
      {
        itemKey: "create-playlist",
        text: "创建歌单",
        path: "/playlists/create",
      },
    ],
  },
];

const Navigation: React.FC<NavigationProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const {} = props;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleSelect = (data: OnSelectNavData) => {
    if (data.path) {
      router.push(data.path);
    }
  };

  useEffect(() => {
    let nextSelectedKeys: string[] = [];
    const traverse = (array: NavCongfigItem[]) => {
      for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.path && pathname === item.path) {
          nextSelectedKeys = [item.itemKey + ""];
          break;
        }
        if (item.items) {
          traverse(item.items);
        }
      }
    };
    traverse(navConfig);
    setSelectedKeys(nextSelectedKeys);
  }, [pathname]);

  return (
    <div {...stylex.props(styles.navigation)}>
      <div {...stylex.props(styles.logo$container)}>
        <Logo />
      </div>
      <Nav
        items={navConfig}
        style={{ width: "100%" }}
        onSelect={handleSelect}
        selectedKeys={selectedKeys}
      />
    </div>
  );
};

export default Navigation;

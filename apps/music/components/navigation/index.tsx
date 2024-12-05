"use-client";
import React, { useEffect, useMemo, useState } from "react";
import stylex from "@stylexjs/stylex";
import { useSession } from "next-auth/react";
import { usePlaylistsStore } from "@/providers/playlists-store-provider";
import { useRouter, usePathname } from "next/navigation";
import useSWR from "swr";
import {
  Nav,
  type OnSelectNavData,
  type NavItemProps,
  type SubNavProps,
} from "@design/core";
import Logo from "./logo";
import { Playlist } from "@prisma/client";

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

const defaultNavConfig: NavCongfigItem[] = [
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
        disabled: true,
      },
    ],
  },
];

const fetcher = (url: string) => {
  return fetch(url).then((response) => response.json());
};

const Navigation: React.FC<NavigationProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const {} = props;
  const { setMyPlaylists } = usePlaylistsStore((state) => state);
  const session = useSession();
  const userId = useMemo(() => session.data?.user?.id, [session.data?.user]);
  const [navConfig, setNavConfig] =
    useState<NavCongfigItem[]>(defaultNavConfig);
  useSWR(userId ? `/api/users/${userId}/playlists` : null, fetcher, {
    onSuccess(data) {
      if (data?.data) {
        const playlists = data.data as Playlist[];
        setMyPlaylists(playlists);
        const nextNavConfig = navConfig.slice();
        const playlistConfig = nextNavConfig.find(
          (item) => item.itemKey === "playlist"
        ) as SubNavProps;
        const playlistsNavConfigs: NavCongfigItem[] = playlists.map((item) => {
          return {
            itemKey: item.id,
            text: item.name,
            path: `/playlists/${item.id}`,
          };
        });

        playlistsNavConfigs.push({
          itemKey: "create-playlist",
          text: "创建歌单",
          path: "/playlists/create",
        });

        playlistConfig.items = playlistsNavConfigs;
        setNavConfig(nextNavConfig);
      }
    },
  });

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
  }, [navConfig, pathname]);

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

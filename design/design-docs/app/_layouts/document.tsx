"use client";

import React from "react";
import { Footer, Topbar } from "@design/pro";
import stylex from "@stylexjs/stylex";
import {
  Nav,
  NavItemType,
  OnSelectNavData,
  Tokens,
  useTokens,
} from "@design/core";
import Logo from "./logo";
import { useRouter } from "next/navigation";

export interface DocumentProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
}

const styles = stylex.create({
  root: (tokens: Tokens) => ({
    backgroundColor: tokens.palettes.white,
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  }),
  body: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "8px",
    alignItems: "flex-start",
  },
  topbar: {
    margin: "0 24px",
  },
});

const Document: React.FC<DocumentProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const tokens = useTokens();
  const menu: (NavItemType & { path: string })[] = [
    {
      text: "组件",
      itemKey: "packages",
      path: "/components/button",
    },
  ];

  const handleSelect = (data: OnSelectNavData) => {
    const { selectedKeys } = data;
    if (selectedKeys[0] == null) return;
    const currentMenu = menu.find((item) => item.itemKey === selectedKeys[0]);
    currentMenu && router.push(currentMenu.path);
  };

  return (
    <main {...stylex.props(styles.root(tokens))}>
      <Topbar logo={<Logo />}>
        <div {...stylex.props(styles.topbar)}>
          <Nav items={menu} mode="x" onSelect={handleSelect} />
        </div>
      </Topbar>
      <div {...stylex.props(styles.body)}>{children}</div>
      <Footer />
    </main>
  );
};

export default Document;

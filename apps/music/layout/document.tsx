"use client";

import React from "react";
import { Footer, Topbar } from "@design/pro";
import stylex from "@stylexjs/stylex";
import { useTheme, Theme, Menu } from "@design/core";
import Logo from "./logo";
import { useRouter } from "next/navigation";

export interface DocumentProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
}

const styles = stylex.create({
  root: (theme: Theme) => ({
    backgroundColor: theme.colors.background,
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
  const theme = useTheme();
  const router = useRouter();
  const menu = [
    {
      label: "首页",
      id: "home",
      path: "/",
    },
  ];

  const handleSelect = (id: string[]) => {
    if (id[0] == null) return;
    const currentMenu = menu.find((item) => item.id === id[0]);
    currentMenu && router.push(currentMenu.path);
  };

  return (
    <main {...stylex.props(styles.root(theme))}>
      <Topbar logo={<Logo />}>
        <div {...stylex.props(styles.topbar)}>
          <Menu items={menu} mode="x" onSelect={handleSelect} />
        </div>
      </Topbar>
      <div {...stylex.props(styles.body)}>{children}</div>
      <Footer />
    </main>
  );
};

export default Document;

"use client";

import React from "react";
import { Layout } from "@design/core";
import { Footer, Topbar } from "@design/pro";
import stylex from "@stylexjs/stylex";
import { Nav, NavItemType, OnSelectNavData } from "@design/core";
import Logo from "./logo";
import { useRouter } from "next/navigation";

export interface DocumentProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
}

const styles = stylex.create({
  topbar: {
    margin: "0 24px",
  },
});

const Document: React.FC<DocumentProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const menu: (NavItemType & { path: string })[] = [
    {
      text: "组件",
      itemKey: "packages",
      path: "/core-components/button",
    },
  ];

  const handleSelect = (data: OnSelectNavData) => {
    const { selectedKeys } = data;
    if (selectedKeys[0] == null) return;
    const currentMenu = menu.find((item) => item.itemKey === selectedKeys[0]);
    currentMenu && router.push(currentMenu.path);
  };

  return (
    <Layout>
      <Layout.Header sticky>
        <Topbar logo={<Logo />}>
          <div {...stylex.props(styles.topbar)}>
            <Nav items={menu} mode="x" onSelect={handleSelect} />
          </div>
        </Topbar>
      </Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Document;

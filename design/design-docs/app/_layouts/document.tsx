"use client";

import React from "react";
import { Layout } from "@design/core";
import { Footer, Topbar } from "@design/pro";
import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { Nav, NavItemType, OnSelectNavData } from "@design/core";
import Logo from "./logo";
import { useRouter } from "next/navigation";

export interface DocumentProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  stylex?: StyleXStyles;
}

const styles = stylex.create({
  document: {
    minHeight: "100vh",
  },
  header: {
    borderBottom: "1px solid rgba(28,31,35,.08)",
    width: "100%",
  },
  topbar: {
    margin: "0 24px",
  },
  content: {
    backgroundColor: "#fff",
    display: "flex",
  },
});

const Document: React.FC<DocumentProps> = (props) => {
  const { children, stylex: customStylex } = props;
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
    <Layout stylex={styles.document}>
      <Layout.Header sticky stylex={styles.header}>
        <Topbar logo={<Logo />} contentWidth="100%">
          <div {...stylex.props(styles.topbar)}>
            <Nav items={menu} mode="x" onSelect={handleSelect} />
          </div>
        </Topbar>
      </Layout.Header>
      <Layout.Content stylex={[styles.content, customStylex]}>
        {children}
      </Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default Document;

"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Footer, Topbar } from "@design/pro";
import { Layout } from "@design/core";
import Logo from "./logo";

export interface DocumentProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
}

const styles = stylex.create({
  document: {
    minHeight: "100vh",
  },
  header: {
    borderBottom: "1px solid rgba(28,31,35,.08)",
  },
  content: {
    backgroundColor: "#fff",
  },
});

const Document: React.FC<DocumentProps> = (props) => {
  const { children } = props;
  return (
    <Layout stylex={styles.document}>
      <Layout.Header sticky stylex={styles.header}>
        <Topbar logo={<Logo />} />
      </Layout.Header>
      <Layout.Content stylex={styles.content}>{children}</Layout.Content>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default Document;

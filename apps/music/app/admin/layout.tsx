"use client";

import { Layout } from "@design/core";
import Topbar from "@/components/topbar";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  page: {
    minHeight: "100vh",
  },
  content: {},
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout stylex={styles.page}>
      <Layout.Header>
        <Topbar />
      </Layout.Header>
      <Layout.Content stylex={styles.content}>{children}</Layout.Content>
    </Layout>
  );
}

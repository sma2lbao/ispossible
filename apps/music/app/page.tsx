"use client";

import { Layout } from "@design/core";
import stylex from "@stylexjs/stylex";
import Navigation from "@/components/navigation";
import MiniPlayer from "@/components/mini-player";
import Topbar from "@/components/topbar";

const styles = stylex.create({
  root: {
    minHeight: "100vh",
  },
  sider: {
    backgroundColor: "#fff",
  },
});

export default function Home() {
  return (
    <Layout stylex={styles.root}>
      <Layout.Content>
        <Layout>
          <Layout.Sider sticky stylex={styles.sider}>
            <Navigation />
          </Layout.Sider>
          <Layout.Content>
            <Layout>
              <Layout.Header>
                <Topbar />
              </Layout.Header>
              <Layout.Content>内容区</Layout.Content>
            </Layout>
          </Layout.Content>
        </Layout>
      </Layout.Content>
      <Layout.Footer>
        <MiniPlayer />
      </Layout.Footer>
    </Layout>
  );
}

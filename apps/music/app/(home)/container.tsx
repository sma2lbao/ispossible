"use client";

import { Layout } from "@design/core";
import stylex from "@stylexjs/stylex";
import Navigation from "@/components/navigation";
import MiniPlayer from "@/components/mini-player";
import Topbar from "@/components/topbar";

export interface ContinerProps {
  children?: React.ReactNode;
}

const styles = stylex.create({
  root: {
    minHeight: "100vh",
  },
  sider: {
    backgroundColor: "#fff",
    padding: 0,
  },
});

export default function Continer(props: ContinerProps) {
  return (
    <Layout stylex={styles.root}>
      <Layout.Content>
        <Layout>
          <Layout.Sider sticky width={280} stylex={styles.sider}>
            <Navigation />
          </Layout.Sider>
          <Layout.Content>
            <Layout>
              <Layout.Header>
                <Topbar />
              </Layout.Header>
              <Layout.Content>{props.children}</Layout.Content>
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

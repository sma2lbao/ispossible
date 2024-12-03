"use client";

import { Layout } from "@design/core";
import stylex from "@stylexjs/stylex";
import Navigation from "@/components/navigation";
import Topbar from "@/components/topbar";
import AudioPlayer from "./components/audio-player";

export interface ContinerProps {
  children?: React.ReactNode;
}

const styles = stylex.create({
  root: {
    height: "100vh",
    overflow: "hidden",
  },
  sider: {
    backgroundColor: "#fff",
    padding: 0,
    overflowY: "auto",
  },
  playerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export default function Continer(props: ContinerProps) {
  return (
    <Layout stylex={styles.root}>
      <Layout.Content>
        <Layout style={{ height: "100%" }}>
          <Layout.Sider width={280} stylex={styles.sider}>
            <Navigation />
          </Layout.Sider>
          <Layout.Content>
            <Layout style={{ height: "100%" }}>
              <Layout.Header>
                <Topbar />
              </Layout.Header>
              <Layout.Content style={{ overflowY: "auto" }}>
                {props.children}
              </Layout.Content>
            </Layout>
          </Layout.Content>
        </Layout>
      </Layout.Content>
      <Layout.Footer stylex={styles.playerContainer}>
        <AudioPlayer />
      </Layout.Footer>
    </Layout>
  );
}

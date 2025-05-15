"use client";

import { Layout } from "@design/core";
import stylex from "@stylexjs/stylex";
import Sider from "./sider";

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
    borderRight: "1px solid rgba(28, 31, 35, 0.08)",
  },
});

export default function Continer(props: ContinerProps) {
  return (
    <Layout stylex={styles.root}>
      <Layout.Content>
        <Layout style={{ height: "100%" }}>
          <Layout.Sider width={280} stylex={styles.sider}>
            <Sider />
          </Layout.Sider>
          <Layout.Content>
            <Layout style={{ height: "100%" }}>
              <Layout.Header>{/* <Topbar /> */}</Layout.Header>
              <Layout.Content
                style={{ overflowY: "auto", backgroundColor: "#fff" }}
              >
                {props.children}
              </Layout.Content>
            </Layout>
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  );
}

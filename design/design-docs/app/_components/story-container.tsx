"use client";

import React, { useLayoutEffect, useRef } from "react";
import stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";
import { Layout, Nav, OnSelectNavData } from "@design/core";
import { STORYBOOK_IFRAME_URL } from "@/constants";
import { stories } from "@/config";

export interface StoryContainerProps {
  slug: string;
}

const styles = stylex.create({
  sider: {
    backgroundColor: "#fff",
    textAlign: "right",
  },
  iframe: {
    border: 0,
    padding: 0,
    margin: 0,
    width: "100%",
  },
});

const StoryContainer: React.FC<StoryContainerProps> = (props) => {
  const { slug } = props;
  const path = stories.find((item) => item.id === slug)?.path || "";
  const router = useRouter();
  const iFrameRef = useRef<HTMLIFrameElement>(null);

  const handleSelect = (data: OnSelectNavData) => {
    if (data.selectedKeys[0] == null) return;
    const slug = data.selectedKeys[0];
    router.push(`/components/${slug}`);
  };

  useLayoutEffect(() => {
    window.addEventListener("message", (event) => {
      const data = event.data;
      if (data?.type === "document" && iFrameRef.current) {
        iFrameRef.current.style.height = data.args.height + "px";
      }
    });
  }, []);

  return (
    <Layout>
      <Layout.Sider width={280} sticky stylex={styles.sider}>
        <Nav
          defaultSelectedKeys={[decodeURIComponent(slug)]}
          items={stories.map((item) => ({
            itemKey: item.id,
            text: item.title,
          }))}
          onSelect={handleSelect}
        />
      </Layout.Sider>
      <Layout.Content>
        <iframe
          {...stylex.props(styles.iframe)}
          ref={iFrameRef}
          src={`${STORYBOOK_IFRAME_URL}?viewMode=docs&id=${path}`}
        />
      </Layout.Content>
    </Layout>
  );
};

export default StoryContainer;

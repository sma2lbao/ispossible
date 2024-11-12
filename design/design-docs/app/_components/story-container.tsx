"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";
import {
  Anchor,
  Layout,
  Nav,
  OnClickLinkData,
  OnSelectNavData,
} from "@design/core";
import { navConfig, type NavConfigItemType } from "@/config";
import "@design/icon/skype-filled";

export interface StoryContainerProps {
  slug: string;
}

const styles = stylex.create({
  sider: {
    backgroundColor: "#fff",
    borderRight: "1px solid rgba(28,31,35,.08)",
    padding: 0,
  },
  iframe: {
    border: 0,
    padding: 0,
    margin: 0,
    width: "100%",
    minHeight: "100%",
  },
  anchor$container: {
    backgroundColor: "#fff",
    paddingTop: "65px",
  },
});

const findStoryPath = (
  items: NavConfigItemType[],
  slug: string
): string | undefined => {
  for (const child of items) {
    if (child.itemKey === slug) {
      return child.path;
    }
    if (child.items) {
      const result = findStoryPath(child.items, slug);
      if (result) {
        return result;
      }
    }
  }
  return undefined;
};

const StoryContainer: React.FC<StoryContainerProps> = (props) => {
  const { slug } = props;
  const path = findStoryPath(navConfig, slug);
  const router = useRouter();
  const iFrameRef = useRef<HTMLIFrameElement>(null);
  const [anchors, setAnchors] = useState([]);

  const handleSelect = (data: OnSelectNavData) => {
    if (data.selectedKeys[0] == null) return;
    const slug = data.selectedKeys[0];
    router.push(`/core-components/${slug}`);
  };

  useLayoutEffect(() => {
    window.addEventListener("message", (event) => {
      const data = event.data;
      if (data?.type === "document" && iFrameRef.current) {
        iFrameRef.current.style.height = data.args.height + 1 + "px";
      }
      if (data?.type === "anchors" && iFrameRef.current) {
        setAnchors(data.args.anchors);
      }
      if (data?.type === "click-anchor" && iFrameRef.current) {
        window.scrollTo({
          top: data.args.targetRect.top,
        });
      }
    });
  }, []);

  const handleClickAnchor = (data: OnClickLinkData) => {
    const rect = iFrameRef.current?.contentWindow?.document
      .querySelector(data.href)
      ?.getBoundingClientRect();
    if (rect) {
      window.scrollTo({
        top: rect.top,
      });
    }
  };

  return (
    <Layout>
      <Layout.Sider width={280} sticky stylex={styles.sider}>
        <Nav
          defaultSelectedKeys={[decodeURIComponent(slug)]}
          style={{ width: "100%" }}
          items={navConfig}
          onSelect={handleSelect}
        />
      </Layout.Sider>
      <Layout.Content style={{ fontSize: 0 }}>
        <iframe
          {...stylex.props(styles.iframe)}
          ref={iFrameRef}
          src={`/storybook/iframe.html?singleStory=true&viewMode=docs&id=${path}&globals=`}
        />
      </Layout.Content>
      <Layout.Sider width={280} sticky stylex={styles.anchor$container}>
        <Anchor items={anchors} onClick={handleClickAnchor} />
      </Layout.Sider>
    </Layout>
  );
};

export default StoryContainer;

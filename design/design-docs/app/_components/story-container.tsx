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
import { STORYBOOK_IFRAME_URL } from "@/constants";
import { stories } from "@/config";

export interface StoryContainerProps {
  slug: string;
}

interface ClickAnchorData {
  type: "click-anchor";
  args: {
    targetRect: DOMRect;
  };
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
    minHeight: "100%",
  },
});

const StoryContainer: React.FC<StoryContainerProps> = (props) => {
  const { slug } = props;
  const path = stories.find((item) => item.id === slug)?.path || "";
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
        iFrameRef.current.style.height = data.args.height + "px";
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
          items={stories.map((item) => ({
            itemKey: item.id,
            text: item.title,
          }))}
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
      <Layout.Sider width={200} sticky style={{ backgroundColor: "#fff" }}>
        <Anchor items={anchors} onClick={handleClickAnchor} />
      </Layout.Sider>
    </Layout>
  );
};

export default StoryContainer;

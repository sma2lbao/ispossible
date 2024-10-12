"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";
import { Menu } from "@design/core";
import { STORYBOOK_IFRAME_URL } from "@/constants";

export interface StoryContainerProps {
  slug: string;
  stories: {
    id: string;
    title: string;
  }[];
}

const styles = stylex.create({
  root: {
    flex: "1",
    backgroundColor: "#fff",
    display: "flex",
  },
  nav: {
    width: 280,
    borderRight: "1px solid #eee",
  },
  wrap: {
    flex: 1,
    fontSize: 0,
  },
  iframe: {
    width: "100%",
    minHeight: "100%",
    border: 0,
    padding: 0,
    margin: 0,
  },
});

const StoryContainer: React.FC<StoryContainerProps> = (props) => {
  const { slug, stories } = props;
  const router = useRouter();
  const iFrameRef = useRef<HTMLIFrameElement>(null);

  const handleSelect = (ids: string[]) => {
    if (ids[0] == null) return;
    const slug = ids[0];
    router.push(`/packages/${slug}`);
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
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.nav)}>
        <Menu
          initialSelectedIds={[decodeURIComponent(slug)]}
          items={stories.map((item) => ({ id: item.id, label: item.title }))}
          onSelect={handleSelect}
        />
      </div>
      <div {...stylex.props(styles.wrap)}>
        <iframe
          {...stylex.props(styles.iframe)}
          ref={iFrameRef}
          src={`${STORYBOOK_IFRAME_URL}?viewMode=docs&id=${slug}`}
        />
      </div>
    </div>
  );
};

export default StoryContainer;

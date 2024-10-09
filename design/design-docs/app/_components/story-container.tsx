"use client";

import React, { useEffect, useRef } from "react";
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
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    border: 0,
  },
});

const StoryContainer: React.FC<StoryContainerProps> = (props) => {
  const { slug, stories } = props;
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSelect = (ids: string[]) => {
    if (ids[0] == null) return;
    router.push(`/packages/${ids[0]}`);
  };

  const handleIFrameLoad = () => {
    console.log("join");
    const height = iframeRef.current?.ownerDocument.body.scrollHeight;
    if (iframeRef.current) {
      iframeRef.current.style.height = height + "px";
    }
  };

  if (!slug) return;

  return (
    <div {...stylex.props(styles.root)}>
      {/* <div {...stylex.props(styles.nav)}>
        <Menu
          initialSelectedIds={[decodeURIComponent(slug)]}
          items={stories.map((item) => ({ id: item.id, label: item.title }))}
          onSelect={handleSelect}
        />
      </div> */}
      <div {...stylex.props(styles.wrap)}>
        <iframe
          ref={iframeRef}
          {...stylex.props(styles.iframe)}
          title="Packages Document"
          src={`${STORYBOOK_IFRAME_URL}?viewMode=docs&id=${slug}`}
          onLoadCapture={handleIFrameLoad}
        />
      </div>
    </div>
  );
};

export default StoryContainer;

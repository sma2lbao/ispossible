"use client";

import React from "react";
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
    height: "100%",
  },
  iframe: {
    height: "100%",
    border: 0,
    width: "100%",
  },
});

const StoryContainer: React.FC<StoryContainerProps> = (props) => {
  const { slug, stories } = props;
  const router = useRouter();

  const handleSelect = (ids: string[]) => {
    if (ids[0] == null) return;
    router.push(`/packages/${ids[0]}`);
  };
  if (!slug) return;

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
          title="Packages Document"
          src={`${STORYBOOK_IFRAME_URL}?viewMode=docs&id=${slug}`}
        />
      </div>
    </div>
  );
};

export default StoryContainer;

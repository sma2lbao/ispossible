"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { useRouter } from "next/navigation";
import { type StoriesDocument } from "@/actions/find-stories";
import { Menu } from "@design/core";
import { STORYBOOK_IFRAME_URL } from "@/constants";

export interface StoryContainerProps {
  slug: string;
  stories: StoriesDocument[];
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
  iframe: {
    flex: 1,
    height: "100%",
    border: 0,
  },
});

const StoryContainer: React.FC<StoryContainerProps> = (props) => {
  const { slug, stories } = props;
  const router = useRouter();

  const handleSelect = (ids: string[]) => {
    if (ids[0] == null) return;
    router.push(`/packages/${ids[0]}`);
  };

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.nav)}>
        <Menu
          items={stories.map((item) => ({ id: item.id, label: item.kind }))}
          onSelect={handleSelect}
        />
      </div>
      <iframe
        {...stylex.props(styles.iframe)}
        title="Packages Document"
        src={`${STORYBOOK_IFRAME_URL}?id=${slug}`}
      />
    </div>
  );
};

export default StoryContainer;

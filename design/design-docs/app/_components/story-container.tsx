"use client";

import React, { useLayoutEffect, useState } from "react";
import microApp from "@micro-zoe/micro-app";
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
  },
});

const StoryContainer: React.FC<StoryContainerProps> = (props) => {
  const { slug, stories } = props;
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  const handleSelect = (ids: string[]) => {
    if (ids[0] == null) return;
    const slug = ids[0];
    router.push(`/packages/${slug}`);
  };

  useLayoutEffect(() => {
    setIsClient(true);
    if (!window.__MICRO_APP_BASE_APPLICATION__) {
      microApp.start();
    }
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
        {isClient && (
          <micro-app
            name="stories"
            ssr
            url={`${STORYBOOK_IFRAME_URL}?viewMode=docs&id=${slug}`}
          />
        )}
      </div>
    </div>
  );
};

export default StoryContainer;

import React, { useContext, useEffect } from "react";
import {
  Description,
  DocsContext,
  ArgTypes,
  Stories,
  Subtitle,
  Title,
} from "@storybook/blocks";
import stylex from "@stylexjs/stylex";
import { Toc } from "./toc";
import { MessageContainer } from "../blocks/message-container";
import { CustomArgsTable } from "./custom-args-table";

export interface AnchorsData {
  type: "anchors";
  args: {
    anchors: {
      href: string;
      label: string;
    }[];
  };
}

const styles = stylex.create({
  root: {
    display: "flex",
    gap: "20px",
  },
  content: {
    flexGrow: 1,
    width: "200px",
  },
  toc: {
    flexBasis: "200px",
    flexShrink: 0,
    [`@media screen and (max-width: 1000px)`]: {
      display: "none",
    },
  },
});

export const DocsContainer = () => {
  const context = useContext(DocsContext);
  const stories = context.componentStories();

  useEffect(() => {
    const storiesDOM = document.querySelector("#stories");
    if (storiesDOM) {
      storiesDOM.innerHTML = "";
    }
  }, []);

  const sendMessage = () => {
    const anchors = stories.map((item) => ({
      href: `#anchor--${item.id}`,
      label: item.name,
    }));
    anchors.push({
      label: "API参考",
      href: "#anchor--api-参考",
    });
    const answer: AnchorsData = {
      type: "anchors",
      args: {
        anchors,
      },
    };
    window.parent?.postMessage(answer, "*");
  };

  useEffect(() => {
    sendMessage();
  }, [stories]);

  return (
    <div className="sb-unstyled">
      <div {...stylex.props(styles.root)}>
        <div {...stylex.props(styles.content)}>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
          <CustomArgsTable exclude={["children"]} />
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

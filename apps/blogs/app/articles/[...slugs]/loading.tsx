import { Skeleton } from "@design/core";
import stylex from "@stylexjs/stylex";
import React from "react";

const styles = stylex.create({
  page: {
    width: "1280px",
    margin: "0 auto",
    display: "flex",
  },
  content: {
    padding: "16px",
    overflow: "hidden",
    flex: 1,
  },
  toc: {
    padding: "16px 10px",
    width: "200px",
  },
});

const Loading = () => {
  return (
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.content)}>
        <Skeleton
          nodes={[
            ["title", { height: 30 }],
            ["button", { width: 40, height: 15 }],
            ["image", { width: "100%", height: 180 }],
            ["text", { rows: 6 }],
            ["title", {}],
            ["text", { rows: 4 }],
            ["title", {}],
            ["text", { rows: 6 }],
          ]}
        />
      </div>
      <div {...stylex.props(styles.toc)}>
        <Skeleton nodes={["text"]} />
      </div>
    </div>
  );
};

export default Loading;

"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Button } from "@design/core";
import "@design/icon/github";

const styles = stylex.create({
  root: {
    backgroundColor: "#fff",
    padding: "8px 24px",
    display: "flex",
    alignItems: "center",
    minHeight: "66px",
  },
  main: (width: number | string) => ({
    width,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  }),
  wrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  content: {
    flex: 1,
  },
  tools: {},
});

export interface TopbarProps {
  logo?: React.ReactNode;
  contentWidth?: number | string;
  children?: React.ReactNode;
}

export const Topbar: React.FC<TopbarProps> = (props) => {
  const { logo, contentWidth = 1280, children } = props;

  const handleClick = () => {
    open("https://github.com/sma2lbao");
  };

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.main(contentWidth))}>
        {!!logo && <div {...stylex.props(styles.wrap)}>{logo}</div>}
        <div {...stylex.props(styles.content)}>{children}</div>
        <div {...stylex.props(styles.tools)}>
          <Button
            icon={<is-github />}
            color="inherit"
            theme="ghost"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

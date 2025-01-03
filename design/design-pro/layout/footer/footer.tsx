"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Button, Space, useTokens, Tokens, Typography } from "@design/core";
import "@design/icon/github";

export interface FooterProps {}

const styles = stylex.create({
  root: (tokens: Tokens) => ({
    backgroundColor: tokens.palettes.black,
    color: tokens.palettes.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    fontSize: tokens.typeScales.bodyFont$md,
  }),
  text: (tokens: Tokens) => ({
    marginBottom: tokens.spacings.margin$1,
  }),
  button: (tokens: Tokens) => ({
    color: tokens.palettes.white,
  }),
});

const Footer: React.FC<FooterProps> = () => {
  const tokens = useTokens();

  return (
    <div {...stylex.props(styles.root(tokens))}>
      <div {...stylex.props(styles.text(tokens))}>
        power by sma2lbao | copyright ©{" "}
        <Typography.Link
          color="inherit"
          href="https://sma2lbao.github.io/"
          target="_blank"
        >
          sma2lbao.github.io
        </Typography.Link>{" "}
        2024.
      </div>
      <Space>
        <Typography.Link
          href="https://design.sma1lbao.cn/"
          stylex={styles.button(tokens)}
          target="_blank"
        >
          组件文档
        </Typography.Link>
        <Typography.Link
          href="https://blog.sma1lbao.cn/"
          stylex={styles.button(tokens)}
          target="_blank"
        >
          博客
        </Typography.Link>
        <Typography.Link
          href="https://y.sma1lbao.cn/"
          stylex={styles.button(tokens)}
          target="_blank"
        >
          音乐
        </Typography.Link>
      </Space>
      <Space>
        <Button
          icon={<is-github />}
          color="inherit"
          onClick={() => open("https://github.com/sma2lbao")}
        />
      </Space>
    </div>
  );
};

export default Footer;

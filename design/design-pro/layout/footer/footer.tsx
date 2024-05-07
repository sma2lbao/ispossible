"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { useTheme, type Theme, Button, Space, Link } from "@design/core";
import "@design/icon/github";

export interface FooterProps {}

const styles = stylex.create({
  root: (theme: Theme) => ({
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    fontSize: theme.sizes.basic,
  }),
  text: (theme: Theme) => ({
    marginBottom: theme.spacing.basic,
  }),
  button: (theme: Theme) => ({
    color: theme.colors.white,
  }),
});

const Footer: React.FC<FooterProps> = () => {
  const theme = useTheme();

  return (
    <div {...stylex.props(styles.root(theme))}>
      <div {...stylex.props(styles.text(theme))}>
        power by sma2lbao | copyright ©{" "}
        <Link
          color="inherit"
          href="https://sma2lbao.github.io/"
          target="_blank"
        >
          sma2lbao.github.io
        </Link>{" "}
        2024.
      </div>
      <Space>
        <Button
          href="https://design-docs-eta.vercel.app/"
          type="link"
          style={styles.button(theme)}
        >
          基础组件文档
        </Button>
        <Button
          href="https://blogs-orcin.vercel.app/"
          type="link"
          style={styles.button(theme)}
        >
          博客
        </Button>
      </Space>
      <Space>
        <Button icon={<is-github />} href="https://github.com/sma2lbao" />
      </Space>
    </div>
  );
};

export default Footer;

import React from "react";
import stylex from "@stylexjs/stylex";
import { Space } from "@design/core";
import { useTheme } from "@design/core";
import "@design/icon/github";
import "@design/icon/copyright";

import type { Colors, Spacing } from "@design/core";

export interface FooterProps {}

const styles = stylex.create({
  root: (colors: Colors, spacing: Spacing) => ({
    backgroundColor: colors.backgroundInverse,
    color: colors.textInverse,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xxlarge,
  }),
});

const Footer: React.FC<FooterProps> = () => {
  const { colors, spacing } = useTheme();

  return (
    <div {...stylex.props(styles.root(colors, spacing))}>
      <div>made by sma2lbao | © sma2lbao.github.io 2024.</div>
      <Space>
        <is-github />
      </Space>
    </div>
  );
};

export default Footer;

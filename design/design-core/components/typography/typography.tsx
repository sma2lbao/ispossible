import React from "react";
import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";
import type { TypographyProps } from "./typography.types";

const styles = stylex.create({
  root: (type: TypographyProps["type"]) => ({
    color: colors[type || "primary"],
  }),
});

export const Typography: React.FC<TypographyProps> = (props) => {
  const { children, tagName, type } = props;
  const Tag = tagName ?? "span";

  return <Tag {...stylex.props(styles.root(type))}>{children}</Tag>;
};

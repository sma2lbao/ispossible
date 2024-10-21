import stylex from "@stylexjs/stylex";
import {
  radius,
  spacing,
  colors,
  lineHeight,
  sizes,
} from "../theme/tokens.stylex";

export const styles = stylex.create({
  root: {
    backgroundColor: "#fff",
    padding: spacing.basic,
    borderRadius: radius.basic,
  },
  linkRoot: {
    paddingLeft: 8,
    fontSize: sizes.basic,
    lineHeight: lineHeight.basic,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  link: {
    color: colors.basic,
    textDecoration: "none",
    cursor: "pointer",
  },
  active: {
    color: colors.primary,
  },
});

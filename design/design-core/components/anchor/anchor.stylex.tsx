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
    fontSize: sizes.basic,
    lineHeight: "20px",
    overflowX: "hidden",
    overflowY: "auto",
  },
  slide: {
    position: "absolute",
    left: 0,
    top: 0,
    "::before": {
      position: "absolute",
      display: "block",
      width: "2px",
      height: "100%",
      backgroundColor: "#eee",
      borderRadius: "1px",
      content: " ",
    },
  },
  linkRoot: {
    paddingLeft: "8px",
    fontSize: sizes.basic,
    lineHeight: lineHeight.basic,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  link: {
    display: "flex",
    color: colors.basic,
    textDecoration: "none",
    cursor: "pointer",
    paddingTop: "4px",
    paddingBottom: "4px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  active: {
    color: colors.primary,
  },
});

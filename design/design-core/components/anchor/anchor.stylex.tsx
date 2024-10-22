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
    borderRadius: radius.basic,
    fontSize: sizes.basic,
    lineHeight: "20px",
    overflowX: "hidden",
    overflowY: "auto",
    position: "relative",
    "::before": {
      position: "absolute",
      top: 0,
      left: 0,
      display: "block",
      width: "2px",
      height: "100%",
      backgroundColor: "#eee",
      borderRadius: "1px",
      content: "",
    },
  },

  linkRoot: {
    paddingLeft: "16px",
    paddingTop: "4px",
    paddingBottom: "4px",
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
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  linkGap: {
    marginBottom: "4px",
  },
  active: {
    color: colors.primary,
  },
  activeBar: {
    position: "absolute",
    display: "inline-flex",
    left: 0,
    width: "2px",
    borderRadius: "1px",
    backgroundColor: colors.primary,
    transform: "translateY(-50%)",
  },
});

import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";

export const styles = stylex.create({
  root: {
    width: "240px",
    display: "inline-flex",
    borderRight: "1px solid rgba(28,31,35,.08)",
    fontSize: "14px",
    boxSizing: "border-box",
    padding: "20px",
  },
  inner: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  active: {
    color: colors.primary,
    backgroundColor: "rgb(230, 244, 255)",
  },
  selected: {
    color: colors.primary,
  },
  item: {
    height: "36px",
    cursor: "pointer",
    display: "flex",
    padding: "8px 12px",
    fontSize: "14px",
    lineHeight: "20px",
    alignItems: "center",
    boxSizing: "border-box",
    marginBottom: "8px",
    ":hover": {
      backgroundColor: colors.background,
    },
  },
  firstLevel: {
    fontWeight: 600,
  },
  subRoot: {},
  subTitle: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    height: "36px",
    alignItems: "center",
    padding: "8px 12px",
    boxSizing: "border-box",
    marginBottom: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: colors.background,
    },
  },
  collapsibleWrap: {},
  icon: {
    minWidth: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "14px",
  },
  text: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  toggleIcon: {
    marginLeft: "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reverse: {
    transform: "rotate(180deg)",
  },
});

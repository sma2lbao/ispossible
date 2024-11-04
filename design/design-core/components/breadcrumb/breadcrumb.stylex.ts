import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";

export const styles = stylex.create({
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },
  breadcrumb$item: {
    color: "#333",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    margin: "4px 4px 4px 0",
    fontWeight: 400,
    cursor: "pointer",

    [":hover"]: {
      color: colors.primary,
    },
  },
  breadcrumb$item$active: {
    fontWeight: 600,
    color: "#1c1f23",
  },
  breadcrumb$item$inner: {
    display: "inline-flex",
    alignItems: "center",
    columnGap: "4px",
  },
  breadcrumb$item$icon: {
    display: "inline-flex",
    lineHeight: 0,
    textAlign: "center",
    fill: "currentColor",
    fontStyle: "normal",
  },
  breadcrumb$item$title: {},
  breadcrumb$item$separator: {
    margin: "0 4px",
  },
});

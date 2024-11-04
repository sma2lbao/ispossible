import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { animation } from "../../themes/tokens/animation.stylex";

export const styles = stylex.create({
  button: {
    boxShadow: "none",
    fontSize: "14px",
    lineHeight: "20px",
    height: "32px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 12px",
    fontWeight: 600,
    outline: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    borderRadius: "3px",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    cursor: "pointer",
    border: "0px solid transparent",
  },
  button$light: (color?: string) => ({
    color: color || colors.primary,
    backgroundColor: "#2e32380d",
    ":hover": {
      backgroundColor: "#2e323817",
    },
  }),
  button$solid: (color?: string) => ({
    color: "#fff",
    backgroundColor: color || colors.primary,
  }),
  button$ghost: (color?: string) => ({
    color: color || colors.primary,
    ":hover": {
      backgroundColor: "rgba(46,50,56,.09)",
    },
  }),
  button$outline: (color?: string) => ({
    color: color || colors.primary,
    border: `1px solid ${color || colors.primary}`,
    ":hover": {
      backgroundColor: "rgba(46,50,56,.09)",
    },
  }),
  loading: {
    animationName: animation.spin,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  disabled: {
    color: colors.onPrimaryContainer,
    cursor: "not-allowed",
    ":hover": {
      backgroundColor: null,
    },
  },
  button$content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  button$onlyIcon: {
    padding: "8px",
  },
  button$icon: {
    fontSize: "16px",
    display: "inline-block",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    textRendering: "optimizeLegibility",
    fill: "currentColor",
  },
});

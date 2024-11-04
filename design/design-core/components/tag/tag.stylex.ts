import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";

export const styles = stylex.create({
  tag: {
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    height: "24px",
    lineHeight: "16px",
    padding: "4px 8px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    borderWidth: "1px",
    borderStyle: "solid",
  },
  tag$hidden: {
    display: "none",
  },
  tag$light: (color?: string, bgColor?: string) => ({
    color: color || colors.primary,
    backgroundColor: bgColor || colors.primaryContainer,
    borderColor: bgColor || colors.primaryContainer,
  }),
  tag$solid: (color?: string) => ({
    color: "#fff",
    backgroundColor: color || colors.primary,
    borderColor: color || colors.primary,
  }),
  tag$ghost: (color?: string) => ({
    backgroundColor: "transparent",
    color: color || colors.primary,
    borderColor: color || colors.primary,
  }),
  tag$square: {
    borderRadius: "3px",
  },
  tag$circle: {
    borderRadius: "99px",
  },
  prefixIcon: {
    display: "flex",
    paddingRight: "4px",
  },
  content: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  suffixIcon: {
    display: "flex",
    paddingLeft: "4px",
  },
  closeIcon: {
    paddingLeft: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "#1c1f239e",
  },

  tagGroup: {
    height: "26px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
});

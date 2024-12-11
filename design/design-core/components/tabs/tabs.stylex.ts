import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  tabs: {},
  tabs$bar: {
    position: "relative",
    whiteSpace: "nowrap",
    outline: "none",
    display: "flex",
    gap: "24px",
  },
  tabs$bar$line: {
    borderBottom: "1px solid rgba(28,31,35,.08)",
  },
  tabs$tab: {
    fontSize: "14px",
    lineHeight: "20px",
    padding: `${spacings.padding$4} ${spacings.padding$1}`,
    borderBottom: "2px solid transparent",
    boxSizing: "border-box",
  },
  tabs$tab$single: {
    display: "inline-flex",
    boxSizing: "border-box",
    cursor: "pointer",
  },
  tabs$tab$active: {
    cursor: "default",
    fontWeight: 600,
    color: "rgba(28,31,35,1)",
    borderBottom: `2px solid ${colors.primary}`,
  },
  tabs$tab$disabled: {
    cursor: "not-allowed",
    color: "rgba(28, 31, 35, 0.35)",
  },
  tabs$content: {
    width: "100%",
    padding: `${spacings.padding$2} 0`,
  },
  tabs$pane: {
    width: "100%",
    overflow: "hidden",
    color: "rgba(28,31,35,1)",
  },
});

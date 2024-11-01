import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";

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
    padding: "16px 4px 14px",
    borderBottom: "2px solid transparent",
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
  tabs$content: {
    width: "100%",
    padding: "5px 0",
  },
  tabs$pane: {
    width: "100%",
    overflow: "hidden",
    color: "rgba(28,31,35,1)",
  },
});

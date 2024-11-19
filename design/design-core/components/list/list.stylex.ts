import stylex from "@stylexjs/stylex";
import { animation } from "../../themes/tokens/animation.stylex";

export const styles = stylex.create({
  list: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  list$items: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  list$item: {
    padding: "12px 24px",
    borderBottom: "1px solid rgba(28,31,35,.08)",
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center",
    margin: 0,
    listStyle: "none",
    boxSizing: "border-box",
  },
  list$tools: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    color: "#999",
  },
  loading: {
    marginRight: "4px",
    color: "fillColor",
    animationName: animation.spin,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

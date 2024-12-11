import stylex from "@stylexjs/stylex";
import { animation } from "../../themes/tokens/animation.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

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
    padding: `${spacings.padding$3} ${spacings.padding$6}`,
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
    padding: `${spacings.padding$3} ${spacings.padding$6}`,
    color: "#999",
  },
  loading: {
    marginRight: spacings["margin$0.5"],
    color: "fillColor",
    animationName: animation.spin,
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
});

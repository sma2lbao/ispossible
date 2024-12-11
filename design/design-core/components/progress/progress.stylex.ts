import stylex from "@stylexjs/stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  progress: {
    display: "flex",
    alignItems: "center",
  },
  progress$x: {
    height: "4px",
    marginTop: spacings["margin$0.5"],
    marginBottom: spacings["margin$0.5"],
  },
  progress$track: (trackStroke?: string) => ({
    backgroundColor: trackStroke ?? "rgba(46,50,56,.05)",
    width: "100%",
    height: "100%",
    borderRadius: shapes.corner$sm,
  }),
  progress$x$track$inner: {
    height: "100%",
    backgroundColor: "rgba(59,179,70,1)",
    borderRadius: shapes.corner$sm,
    transition: "width .3s",
  },
});

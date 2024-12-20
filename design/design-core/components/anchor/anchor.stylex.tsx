import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";
import { typeScales } from "../../themes/tokens/type-scale.stylex";

export const styles = stylex.create({
  root: {
    backgroundColor: "#fff",
    borderRadius: shapes.corner$xs,
    fontSize: typeScales.bodySize$md,
    lineHeight: typeScales.bodyLineHeight$md,
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
    paddingLeft: spacings.padding$4,
    paddingTop: spacings.padding$1,
    paddingBottom: spacings.padding$1,
    fontSize: typeScales.bodySize$md,
    lineHeight: typeScales.bodyLineHeight$md,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  link: {
    display: "block",
    color: colors.onSurface,
    textDecoration: "none",
    cursor: "pointer",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  linkGap: {
    marginBottom: spacings["margin$0.5"],
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

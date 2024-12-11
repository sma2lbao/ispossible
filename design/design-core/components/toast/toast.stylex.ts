import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  toast$wrap: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: "999",
  },
  toast: {},
  toast$content: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#1c1f23",
    backgroundColor: colors.surface,
    display: "inline-flex",
    padding: `${spacings.padding$3} ${spacings.padding$2}`,
    alignItems: "flex-start",
    justifyContent: "center",
    margin: spacings["margin$1.5"],
    fontWeight: 600,
    borderRadius: shapes.corner$sm,
    boxShadow: "0 0 1px rgba(0,0,0,0.3),0 4px 14px rgba(0,0,0,0.1)",
  },
  toast$content$icon: (color?: string) => ({
    fontSize: "20px",
    display: "inline-block",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    textRendering: "optimizeLegibility",
    fill: color || "currentColor",
  }),
  toast$info: {
    color: colors.primary,
  },
  toast$success: {
    color: colors.success,
  },
  toast$warning: {
    color: colors.warn,
  },
  toast$error: {
    color: colors.error,
  },
  toast$content$text: (maxWidth?: number | string) => ({
    marginLeft: spacings["margin$1.5"],
    marginRight: spacings["margin$1.5"],
    textAlign: "left",
    overflowWrap: "break-word",
    maxWidth: maxWidth,
  }),
  toast$content$close: {
    height: "20px",
    marginTop: "-2px",
  },
  toast$close$icon: {
    padding: spacings.padding$1,
    height: "24px",
  },
});

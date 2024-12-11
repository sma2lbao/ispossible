import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  notification$wrap: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: "999",
  },
  notification: {},
  notification$content: {
    margin: "20px",
    width: "auto",
    minWidth: "320px",
    padding: `${spacings.padding$4} ${spacings.padding$3} ${spacings.padding$4} ${spacings.padding$5}`,
    backgroundColor: "#fff",
    borderRadius: shapes.corner$sm,
    boxShadow: "0 0 1px rgba(0,0,0,0.3),0 4px 14px rgba(0,0,0,0.1)",
    display: "flex",
  },
  notification$content$icon$wrap: {
    width: "24px",
    fontSize: "16px",
    lineHeight: "22px",
    marginRight: "12px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  notification$content$icon: (color?: string) => ({
    fontSize: "20px",
    display: "inline-block",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    textRendering: "optimizeLegibility",
    fill: color || "currentColor",
  }),
  notification$content$inner: {
    display: "flex",
    width: "100%",
    minWidth: 0,
  },
  notification$content$inner$container: {
    flex: "1 1 auto",
    marginRight: "8px",
    minWidth: 0,
  },
  notification$info: {
    color: colors.primary,
  },
  notification$warning: {
    color: colors.warn,
  },
  notification$error: {
    color: colors.error,
  },
  notification$success: {
    color: colors.success,
  },
  notification$content$inner$title: {
    fontSize: "16px",
    lineHeight: "22px",
    fontWeight: 600,
    color: "rgba(28,31,35,1)",
    marginBottom: "4px",
    overflowWrap: "break-word",
  },
  notification$content$inner$text: {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 400,
    color: "rgba(28,31,35,.8)",
    overflowWrap: "break-word",
  },
  notification$content$close: {
    height: "20px",
    marginTop: "-2px",
  },
  notification$close$icon: {
    padding: spacings.padding$1,
    height: "24px",
  },
});

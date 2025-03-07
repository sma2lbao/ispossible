import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  modal$portal: {},
  modal$mask: {
    position: "fixed",
    inset: 0,
    backgroundColor: colors.overlay,
    zIndex: 999,
  },
  modal$wrap: {
    position: "fixed",
    overflow: "auto",
    inset: 0,
    outline: 0,
    zIndex: 999,
  },
  modal: (width?: number) => ({
    width: width || "448px",
    fontSize: "14px",
    lineHeight: "20px",
    margin: "80px auto",
    color: "rgba(28,31,35,1)",
  }),
  modal$content: {
    position: "relative",
    display: "flex",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    flexDirection: "column",
    backgroundColor: colors.surface,
    borderRadius: shapes.corner$md,
    padding: `0 ${spacings.padding$6}`,
    overflow: "hidden",
    boxShadow: "0 0 1px rgba(0,0,0,0.3),0 4px 14px rgba(0,0,0,0.1)",
  },
  modal$header: {
    padding: 0,
    fontWeight: 600,
    fontSize: "14px",
    color: "rgba(28,31,35,1)",
    margin: `${spacings.margin$3} 0`,
    display: "flex",
    alignItems: "flex-start",
  },
  modal$header$icon$wrap: {
    display: "inline-flex",
    marginRight: spacings["margin$1.5"],
    width: "24px",
  },
  modal$header$icon: (color?: string) => ({
    fontSize: "24px",
    display: "inline-block",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    textRendering: "optimizeLegibility",
    fill: color || "currentColor",
  }),
  modal$header$close: {
    padding: spacings.padding$1,
    color: "#1c1f23cc",
    height: "24px",
  },
  modal$info: {
    color: colors.primary,
  },
  modal$success: {
    color: colors.success,
  },
  modal$warning: {
    color: colors.warn,
  },
  modal$error: {
    color: colors.error,
  },
  modal$confirm: {
    color: colors.primary,
  },
  modal$header$title: {
    display: "inline-flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    fontSize: "18px",
    lineHeight: "24px",
  },
  modal$body: {
    flex: "1 1 auto",
    margin: 0,
    padding: 0,
  },
  modal$footer: {
    margin: `${spacings.margin$3} 0`,
    padding: 0,
    textAlign: "right",
  },
});

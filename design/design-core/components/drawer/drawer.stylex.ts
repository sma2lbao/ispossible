import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  drawer$portal: {
    position: "absolute",
    inset: 0,
    width: "100%",
    zIndex: 1000,
  },
  drawer: {
    position: "fixed",
    inset: 0,
    margin: 0,
    fontSize: "14px",
    lineHeight: "20px",
    height: "100%",
    width: "100%",
  },
  drawer$mask: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    backgroundColor: colors.overlay,
    opacity: 1,
  },
  drawer$inner: {
    position: "absolute",
    width: "448px",
    height: "100%",
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.surface,
    overflow: "auto",
    border: 0,
  },
  drawer$content: {},
  drawer$header: {
    display: "flex",
    alignItems: "flex-start",
    padding: `${spacings.padding$4} ${spacings.padding$6}`,
  },
  drawer$title: {
    flex: "1 0 auto",
    margin: 0,
    lineHeight: "24px",
    fontWeight: 600,
    fontSize: "18px",
    color: "rgba(28,31,35,1)",
    textAlign: "left",
  },
  drawer$header$close: {
    padding: spacings.padding$1,
    color: "#1c1f23cc",
    height: "24px",
  },
  drawer$body: {
    padding: `0 ${spacings.padding$6}`,
    flex: "1 1",
    overflow: "auto",
  },
  drawer$footer: {
    padding: spacings.padding$6,
  },
});

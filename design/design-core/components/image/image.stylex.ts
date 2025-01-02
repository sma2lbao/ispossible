import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { shapes } from "../../themes/tokens/shape.stylex";

export const styles = stylex.create({
  image: {
    borderRadius: shapes.corner$xs,
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
  },
  image$host: {
    verticalAlign: "top",
    borderRadius: "inherit",
    userSelect: "none",
  },
  image$host$error: {
    opacity: 0,
  },
  image$overlay: {
    position: "absolute",
    inset: 0,
  },
  image$status: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: shapes.corner$xs,
    backgroundColor: "rgba(46,50,56,.05)",
    color: "rgba(28,31,35,.35)",
  },
  image$preview: {
    position: "fixed",
    inset: 0,
    backgroundColor: colors.overlay,
    overflow: "hidden",
    zIndex: "1070",
  },
  image$preview$header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    fontSize: "14px",
    lineHeight: "20px",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 24px",
    pointerEvents: "none",
    zIndex: "1",
  },
  image$preview$header$title: {
    flex: "1 1",
  },
  image$preview$header$close: {
    pointerEvents: "auto",
  },
  image$preview$content: {
    position: "relative",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image$preview$content$image$container: {
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "hidden",
    justifyContent: "center",
  },
  image$preview$footer: {
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    backgroundColor: "rgba(0,0,0,.75)",
    color: "#fff",
    borderRadius: "6px",
    height: "48px",
    position: "absolute",
    left: "50%",
    bottom: "16px",
    transform: "translateX(-50%)",
  },
});

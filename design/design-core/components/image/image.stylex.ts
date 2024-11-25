import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  image: {
    borderRadius: "3px",
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
    borderRadius: "3px",
    backgroundColor: "rgba(46,50,56,.05)",
    color: "rgba(28,31,35,.35)",
  },
});

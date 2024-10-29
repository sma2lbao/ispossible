import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  drawer$wrap: {
    position: "fixed",
    inset: 0,
  },
  drawer$mask: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(22, 22, 26, 0.6)",
  },
  drawer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
  },
  drawer$header: {
    display: "flex",
    alignItems: "flex-start",
    padding: "16px 24px",
  },
  drawer$footer: {},
});

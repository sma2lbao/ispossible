import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  watermark: {
    position: "relative",
  },

  watermark$content: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    backgroundRepeat: "repeat",
    backgroundPosition: `0px 0px`,
    zIndex: 9,
  },
});

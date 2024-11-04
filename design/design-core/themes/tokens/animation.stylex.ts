import stylex from "@stylexjs/stylex";

const spin = stylex.keyframes({
  to: {
    transform: "rotate(1turn)",
  },
});

export const animation = stylex.defineVars({
  spin: spin,
});

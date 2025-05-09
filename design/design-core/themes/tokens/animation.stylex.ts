import stylex from "@stylexjs/stylex";

const spin = stylex.keyframes({
  to: {
    transform: "rotate(1turn)",
  },
});

const flashing = stylex.keyframes({
  "0%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.1,
  },
  "100%": {
    opacity: 1,
  },
});

export const animation = stylex.defineVars({
  spin: spin,
  flashing: flashing,
});

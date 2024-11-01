import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";

export const styles = stylex.create({
  root: {
    height: 20,
    width: 36,
    borderRadius: 4,
    border: "none",
    outline: "none",
    backgroundColor: colors.secondary,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 1,
    cursor: "pointer",
  },
  active: {
    backgroundColor: colors.primary,
    justifyContent: "flex-end",
  },
  thumb: {
    display: "inline-flex",
    height: 18,
    width: 18,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
});

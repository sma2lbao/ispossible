import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";

export const styles = stylex.create({
  root: {
    height: 20,
    width: 20,
    borderRadius: 4,
    boxSizing: "border-box",
    border: "1px solid #ddd",
    outline: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    overflow: "hidden",
    backgroundColor: "transparent",
    margin: 0,
  },
  thumb: {
    flex: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: 12,
    color: colors.white,
    backgroundColor: colors.primary,
  },
});

import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";

export const styles = stylex.create({
  dropdown: {
    margin: 0,
    padding: "4px 0",
    maxWidth: "280px",
  },
  menu: {},
  menu$title: {
    cursor: "default",
    padding: "8px 16px 8px",
    color: colors.secondary,
  },
  menu$title$tick: {
    paddingLeft: "36px",
  },
  menu$item: {
    cursor: "pointer",
    padding: "8px 16px",
    display: "flex",
    alignItems: "center",

    ":hover": {
      backgroundColor: colors.secondaryContainer,
    },
  },
  menu$item$tick: {},
  item$tick$icon: {
    marginRight: "8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    width: "12px",
  },
});

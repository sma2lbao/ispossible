import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  dropdown: {
    margin: 0,
    padding: `${spacings.padding$1} 0`,
    maxWidth: "280px",
  },
  menu: {},
  menu$title: {
    cursor: "default",
    padding: `${spacings.padding$2} ${spacings.padding$4} ${spacings.padding$2}`,
    color: colors.secondary,
  },
  menu$title$tick: {
    paddingLeft: spacings.padding$9,
  },
  menu$item: {
    cursor: "pointer",
    padding: `${spacings.padding$2} ${spacings.padding$4}`,
    display: "flex",
    alignItems: "center",

    ":hover": {
      backgroundColor: colors.secondaryContainer,
    },
  },
  menu$item$tick: {},
  item$tick$icon: {
    marginRight: spacings.margin$1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    width: "12px",
  },
});

import stylex from "@stylexjs/stylex";
import { colors } from "../../themes/tokens/color.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  root: {
    width: "240px",
    display: "inline-flex",
    borderRight: "1px solid rgba(28,31,35,.08)",
    fontSize: "14px",
    boxSizing: "border-box",
    padding: spacings.padding$5,
  },
  vertical: {
    borderRight: "none",
  },
  horizontal: {
    width: "100%",
    display: "flex",
    borderRight: "none",
    padding: spacings.padding$3,
  },
  yInner: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "8px",
  },
  xInner: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  item: {
    height: "36px",
    cursor: "pointer",
    display: "flex",
    padding: `${spacings.padding$2} ${spacings.padding$3}`,
    fontSize: "14px",
    lineHeight: "20px",
    alignItems: "center",
    boxSizing: "border-box",
    ":hover": {
      backgroundColor: colors.fillHover,
    },
    ":active": {
      backgroundColor: colors.fillActive,
    },
  },
  active: {
    color: colors.primary,
    backgroundColor: "rgb(230, 244, 255)",
  },
  selected: {
    color: colors.primary,
  },
  firstLevel: {
    fontWeight: 600,
  },
  subRoot: {},
  subTitle: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    height: "36px",
    alignItems: "center",
    padding: `${spacings.padding$2} ${spacings.padding$3}`,
    boxSizing: "border-box",
    cursor: "pointer",
    ":hover": {
      backgroundColor: colors.primaryContainer,
    },
  },
  collapsibleWrap: {
    gap: "8px",
    display: "flex",
    flexDirection: "column",
  },
  inlineCollapsibleWrap: {
    paddingTop: spacings.padding$2,
  },
  icon: {
    minWidth: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
  },
  text: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    marginRight: spacings.margin$1,
  },
  expandIcon: {
    marginLeft: "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  reverse: {
    transform: "rotate(180deg)",
  },
});

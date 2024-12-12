import stylex from "@stylexjs/stylex";
import { shapes } from "../../themes/tokens/shape.stylex";
import { spacings } from "../../themes/tokens/spacing.stylex";

export const styles = stylex.create({
  select: {
    boxSizing: "border-box",
    borderRadius: shapes.corner$xs,
    border: "1px solid transparent",
    height: "32px",
    fontWeight: 400,
    display: "inline-flex",
    verticalAlign: "middle",
    position: "relative",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "rgba(46,50,56,.05)",
    width: "100%",
  },
  select$foucs: {
    border: "1px solid rgba(0,100,250, 1)",
    outline: 0,
  },
  select$prefix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: `0 ${spacings.margin$1}`,
    color: "rgba(28,31,35,.62)",
  },
  select$suffix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: `0 ${spacings.margin$1}`,
    color: "rgba(28,31,35,.62)",
  },
  select$clear: {
    width: "32px",
    color: "rgba(28,31,35,.62)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    fontSize: "16px",

    [":hover"]: {
      color: "rgba(0,100,250, 1)",
    },
  },
  select$arrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    color: "rgba(28,31,35,.62)",
    flexShrink: 0,
    fontSize: "14px",
  },
  select$selection: {
    fontSize: "14px",
    lineHeight: "20px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    overflow: "hidden",
    cursor: "pointer",
    color: "rgba(28,31,35,1)",
    marginLeft: spacings["margin$1.5"],
  },
  select$content$warp: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  select$content$placeholder: {
    color: "rgba(28,31,35,.62)",
  },
  select$content$text: {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  select$option$list$container: (minWidth: number) => ({
    minWidth: `${minWidth}px`,
    padding: `${spacings.padding$1} 0`,
  }),

  select$option$list$search$wrap: {
    padding: `8px 12px`,
  },

  select$option$list: {
    overflowX: "hidden",
    overflowY: "auto",
    maxHeight: "270px",
  },
  select$option: {
    fontSize: "14px",
    lineHeight: "20px",
    wordBreak: "break-all",
    padding: `${spacings.padding$2} ${spacings.padding$3}`,
    color: "rgba(28,31,35,1)",
    borderRadius: shapes.corner$none,
    position: "relative",
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    cursor: "pointer",
    boxSizing: "border-box",

    [":hover"]: {
      backgroundColor: "rgba(46,50,56,.09)",
    },
  },
  select$option$disabled: {
    cursor: "not-allowed",
  },
  select$option$selected: {
    fontWeight: 600,
  },
  select$option$text: {},
});

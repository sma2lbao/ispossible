import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  select: {
    boxSizing: "border-box",
    borderRadius: "3px",
    border: "1px solid transparent",
    height: "32px",
    fontWeight: 400,
    display: "inline-flex",
    verticalAlign: "middle",
    position: "relative",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "rgba(46,50,56,.05)",
  },
  select$foucs: {
    border: "1px solid rgba(0,100,250, 1)",
    outline: 0,
  },
  select$prefix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 8px",
    color: "rgba(28,31,35,.62)",
  },
  select$suffix: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 8px",
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
  },
  select$content$warp: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
  select$content$text: {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  select$option$list$container: (minWidth: number) => ({
    minWidth: `${minWidth}px`,
    padding: "4px 0",
  }),
  select$option$list: {
    overflowX: "hidden",
    overflowY: "auto",
    maxHeight: "270px",
  },
  select$option: {
    fontSize: "14px",
    lineHeight: "20px",
    wordBreak: "break-all",
    padding: "8px 12px",
    color: "rgba(28,31,35,1)",
    borderRadius: 0,
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
  select$option$text: {},
});

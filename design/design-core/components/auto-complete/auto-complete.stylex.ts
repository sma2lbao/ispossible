import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  autoComplete: {},
  autoComplete$popup: (minWidth: number) => ({
    minWidth: `${minWidth}px`,
    padding: `4px 0`,
  }),
  autoComplete$option: {
    fontSize: "14px",
    lineHeight: "20px",
    wordBreak: "break-all",
    padding: "8px 12px",
    color: "rgba(28,31,35,1)",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    boxSizing: "border-box",
    ":hover": {
      backgroundColor: "rgba(46,50,56,.09)",
    },
  },
  autoComplete$popup$empty: {
    padding: `12px`,
    color: "rgba(28,31,35,.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

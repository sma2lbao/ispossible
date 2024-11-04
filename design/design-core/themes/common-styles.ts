import stylex from "@stylexjs/stylex";

export const commonStyles = stylex.create({
  truncate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  truncateLines: (lineCount: number) => ({
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    hyphens: "auto",
    WebkitLineClamp: lineCount,
  }),
});

import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  space: (size?: number) => ({
    display: "inline-flex",
    columnGap: size ?? 8,
    rowGap: size ?? 8,
    alignItems: "center",
  }),
  space$vertical: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  space$item: {
    width: "100%",
  },
});

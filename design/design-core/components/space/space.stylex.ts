import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  root: (size?: number) => ({
    display: "inline-flex",
    columnGap: size ?? 8,
    rowGap: size ?? 8,
    alignItems: "center",
  }),
  vertical: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
});

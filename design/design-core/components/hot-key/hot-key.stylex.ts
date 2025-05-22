import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  hotkey: {
    fontSize: 12,
    lineHeight: 16,
  },
  hotkey$span: {
    borderRadius: 2,
    height: 20,
    padding: "2px 8px",
    border: 1,
    backgroundColor: "rgba(46,50,56,.05)",
    color: "rgba(28,31,35,.62)",
  },
  hotkey$split: {
    margin: "0 3px",
    color: "rgba(28,31,35,1)",
  },
});

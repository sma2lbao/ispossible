import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  progress: {
    display: "flex",
    alignItems: "center",
  },
  progress$x: {
    height: "4px",
    marginTop: "4px",
    marginBottom: "4px",
  },
  progress$track: (trackStroke?: string) => ({
    backgroundColor: trackStroke ?? "rgba(46,50,56,.05)",
    width: "100%",
    height: "100%",
    borderRadius: "3px",
  }),
  progress$x$track$inner: {
    height: "100%",
    backgroundColor: "rgba(59,179,70,1)",
    borderRadius: "3px",
    transition: "width .3s",
  },
});

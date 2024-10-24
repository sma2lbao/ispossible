import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  toast: {},

  toast$content: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#1c1f23",
    backgroundColor: "#fff",
    display: "inline-flex",
    padding: "12px 8px",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "12px",
    fontWeight: 600,
    borderRadius: "6px",
    boxShadow: "0 0 1px rgba(0,0,0,0.3),0 4px 14px rgba(0,0,0,0.1)",
  },
  toast$content$icon: {
    fontSize: "20px",
    display: "inline-block",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    textRendering: "optimizeLegibility",
    fill: "currentColor",
  },
  toast$info: {
    color: "rgb(0,100,250)",
  },
  toast$content$text: (maxWidth?: number | string) => ({
    marginLeft: "12px",
    marginRight: "12px",
    textAlign: "left",
    overflowWrap: "break-word",
    maxWidth: maxWidth,
  }),
  toast$content$close: {
    height: "20px",
    marginTop: "-2px",
  },
  toast$close$icon: {
    padding: "4px",
    height: "24px",
  },
});

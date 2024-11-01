import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  input: {
    border: "1px solid #ddd",
    display: "inline-flex",
    alignItems: "center",
    fontSize: 14,
    padding: 8,
    borderRadius: 4,
  },
  input$display: {
    outline: "none",
    border: "none",
    padding: "0 4px",
    width: "100%",
  },

  textarea: {
    fontSize: 14,
    lineHeight: "20px",
    border: "1px solid #ddd",
    width: "100%",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
    padding: 8,
    boxSizing: "border-box",
    resize: "none",
  },
});

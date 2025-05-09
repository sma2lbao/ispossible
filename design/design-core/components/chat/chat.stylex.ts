import stylex from "@stylexjs/stylex";
import { animation } from "../../themes/tokens/animation.stylex";

export const styles = stylex.create({
  chat: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  message$area: {
    flex: 1,
    overflow: "auto",
  },
  message$item: {
    padding: "8px 0",
  },
  message$item$header: (align?: "left" | "right") => ({
    textAlign: align ?? "right",
  }),
  message$item$role: (align?: "left" | "right") => ({
    flexDirection: align === "right" ? "row-reverse" : "row",
  }),
  message$item$content: (align: "left" | "right", horizontal: number) => ({
    padding: `0 ${horizontal ? horizontal + "px" : 0}`,
    textAlign: align ?? "left",
  }),
  input$area: {
    flexShrink: 0,
    padding: "24px 0",
  },
  input$area$text: {
    position: "relative",
  },
  input$area$text$send: {
    position: "absolute",
    bottom: "8px",
    right: "8px",
  },
  loading$item: {
    height: 8,
    width: 8,
    backgroundColor: "#000",
    overflow: "visible",
    borderRadius: "50%",
    margin: "6px 18px",
    position: "relative",
    display: "inline-block",
    animationName: animation.flashing,
    animationDuration: "0.8s",
    animationTimingFunction: "ease",
    animationDelay: "-0.2s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationFillMode: "none",
    animationPlayState: "running",

    "::before": {
      content: "",
      height: 8,
      width: 8,
      backgroundColor: "#000",
      borderRadius: "50%",
      position: "absolute",
      top: 0,
      left: -15,
      animationName: animation.flashing,
      animationDuration: "0.8s",
      animationTimingFunction: "ease",
      animationDelay: "-0.4s",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
      animationFillMode: "none",
      animationPlayState: "running",
    },
    "::after": {
      content: "",
      height: 8,
      width: 8,
      backgroundColor: "#000",
      borderRadius: "50%",
      position: "absolute",
      top: 0,
      left: 15,
      animationName: animation.flashing,
      animationDuration: "0.8s",
      animationTimingFunction: "ease",
      animationDelay: "0s",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
      animationFillMode: "none",
      animationPlayState: "running",
    },
  },
});

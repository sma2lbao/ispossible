import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  layout: {
    display: "flex",
    flex: "auto",
    flexDirection: "column",
    minHeight: 0,
    backgroundColor: "#f5f5f5",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  layout$has$sider: {
    flexDirection: "row",
  },
  header: {
    flex: "0 0 auto",
    boxSizing: "border-box",
    zIndex: 1,
  },
  header$sticky: (top: number) => ({
    position: "sticky",
    top: `${top}px`,
  }),
  sider: (width: React.CSSProperties["width"]) => ({
    boxSizing: "border-box",
    position: "relative",
    minWidth: 0,
    width,
    overflow: "hidden",
    flexShrink: 0,
  }),
  sider$sticky: (top: number) => ({
    position: "sticky",
    top: `${top}px`,
    height: `calc(100vh - ${top}px)`,
    overflowY: "auto",
    overflowX: "hidden",
    padding: "10px",
    scrollbarGutter: "stable",
    // 滚动条
    ["::-webkit-scrollbar"]: {
      opacity: 0,
      width: "5px",
    },
    // 滑块
    ["::-webkit-scrollbar-thumb"]: {
      backgroundColor: "transparent",
    },
    // 槽位
    ["::-webkit-scrollbar-track"]: {
      backgroundColor: "transparent",
    },
    [":hover"]: {
      ["::-webkit-scrollbar"]: {
        opacity: 1,
      },
      ["::-webkit-scrollbar-thumb"]: {
        borderRadius: "5px",
        backgroundColor: "#bfbfbf",
      },
      ["::-webkit-scrollbar-track"]: {
        backgroundColor: "transparent",
      },
    },
  }),
  content: {
    flex: "auto",
    minHeight: 0,
    color: "rgba(0, 0, 0, 0.88)",
    boxSizing: "border-box",
  },
  footer: {
    boxSizing: "border-box",
  },
});

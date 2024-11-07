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
  }),
  sider$sticky: (top: number) => ({
    position: "sticky",
    top: `${top}px`,
    height: `calc(100vh - ${top}px)`,
    overflow: "auto",
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

import stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  alert: {
    padding: "12px",
  },
  alert$info: {
    backgroundColor: "rgba(234,245,255,1)",
    color: "rgba(0,100,250,1)",
  },
  alert$warning: {
    backgroundColor: "rgba(255,248,234,1)",
    color: "rgba(252,136,0,1)",
  },
  alert$error: {
    backgroundColor: "rgba(254,242,237,1)",
    color: "rgba(249,57,32,1)",
  },
  alert$success: {
    backgroundColor: "rgba(236,247,236,1)",
    color: "rgba(59,179,70,1)",
  },
  alert$border$info: {
    borderRadius: "3px",
    border: "1px solid rgba(152,205,253, 1)",
  },
  alert$border$warning: {
    borderRadius: "3px",
    border: "1px solid rgba(254,217,152,1)",
  },
  alert$border$error: {
    borderRadius: "3px",
    border: "1px solid rgba(253,183,165,1)",
  },
  alert$border$success: {
    borderRadius: "3px",
    border: "1px solid rgba(164,224,167,1)",
  },
  alert$content$warp: {
    display: "flex",
    flexDirection: "row",
  },
  alert$content: {
    display: "flex",
    flex: "1 1",
    justifyContent: "center",
  },
  alert$content$start: {
    justifyContent: "flex-start",
  },
  alert$content$body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  alert$icon: {
    display: "flex",
    alignItems: "center",
    marginRight: "12px",
    fontSize: "20px",
    marginTop: "-2px",
  },
  alert$content$title: {
    color: "rgba(28,31,35,1)",
  },
  alert$content$description: {
    color: "rgba(28,31,35,1)",
  },
  alert$close: {
    padding: "4px",
    height: "24px",
  },
});

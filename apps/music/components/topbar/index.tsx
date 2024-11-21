import React from "react";
import stylex from "@stylexjs/stylex";

export interface TopbarProps {}

const styles = stylex.create({
  topbar: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
  },
});

const Topbar: React.FC<TopbarProps> = (props) => {
  const {} = props;

  return <div {...stylex.props(styles.topbar)}></div>;
};

export default Topbar;

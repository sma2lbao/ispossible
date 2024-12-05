import React from "react";
import stylex from "@stylexjs/stylex";
import Profile from "./profile";

export interface TopbarProps {}

const styles = stylex.create({
  topbar: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fff",
    boxSizing: "border-box",
    padding: "0 20px",
  },
});

const Topbar: React.FC<TopbarProps> = (props) => {
  const {} = props;

  return (
    <div {...stylex.props(styles.topbar)}>
      <Profile />
    </div>
  );
};

export default Topbar;

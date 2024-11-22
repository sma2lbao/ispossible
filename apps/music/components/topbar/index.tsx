import React from "react";
import stylex from "@stylexjs/stylex";
import { SessionProvider } from "next-auth/react";
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
      <SessionProvider>
        <Profile />
      </SessionProvider>
    </div>
  );
};

export default Topbar;

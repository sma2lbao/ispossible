"use client";

import { Chat } from "@design/core";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  chatRoot: {
    padding: "30px 100px",
    height: "100%",
  },
});

export default function Home() {
  return (
    <div {...stylex.props(styles.chatRoot)}>
      <Chat />
    </div>
  );
}

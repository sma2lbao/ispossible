"use client";

import Document from "./_layouts/document";
import { Button } from "@design/core";
import { useRouter } from "next/navigation";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  root: {
    flex: "1",
    backgroundColor: "#fff",
    alignSelf: "stretch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/components/button");
  };

  return (
    <Document>
      <div {...stylex.props(styles.root)}>
        <Button onClick={handleClick}>开始使用</Button>
      </div>
    </Document>
  );
}

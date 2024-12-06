"use client";

import Document from "./_layouts/document";
import { Button, Space } from "@design/core";
import { useRouter } from "next/navigation";
import stylex from "@stylexjs/stylex";
import "@design/icon/github";

const styles = stylex.create({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
});

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/core-components/button");
  };

  return (
    <div {...stylex.props(styles.root)}>
      <Space size={20}>
        <Button onClick={handleClick} theme="solid">
          开始使用
        </Button>
        <Button onClick={handleClick} icon={<is-github />}>
          Github
        </Button>
      </Space>
    </div>
  );
}

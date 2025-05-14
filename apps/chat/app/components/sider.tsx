"use client";

import { Button, Space } from "@design/core";
import { useRouter } from "next/navigation";
import stylex from "@stylexjs/stylex";
import Logo from "./logo";
import "@design/icon/setting";
import "@design/icon/github";

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  logo$container: {
    height: "80px",
    display: "flex",
    paddingLeft: "32px",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  actions: {
    padding: "16px 32px",
  },
});

export default function Sider() {
  const router = useRouter();

  const goSettings = () => {
    router.push("/settings");
  };

  const goGithub = () => {
    open("https://github.com/sma2lbao");
  };

  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.logo$container)}>
        <Logo />
      </div>
      <div {...stylex.props(styles.content)}></div>
      <div {...stylex.props(styles.actions)}>
        <Space>
          <Button
            icon={<is-setting />}
            color="tertiary"
            theme="ghost"
            onClick={goSettings}
          />
          <Button
            icon={<is-github />}
            color="tertiary"
            theme="ghost"
            onClick={goGithub}
          />
        </Space>
      </div>
    </div>
  );
}

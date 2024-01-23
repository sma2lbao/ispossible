import React from "react";
import stylex from "@stylexjs/stylex";
import { Space, Button } from "@design/core";
import { useTheme } from "@design/core";
import "@design/icon/github";
import "@design/icon/copyright";

export interface FooterProps {}

const styles = stylex.create({
  root: (colors: any) => ({
    backgroundColor: colors.primary,
  }),
});

const Footer: React.FC<FooterProps> = (props) => {
  const { colors } = useTheme();

  return (
    <div {...stylex.props(styles.root(colors))}>
      <div>
        made by sma2lbao | Copyright <is-copyright /> sma2lbao.github.io 2024.
      </div>
      <Button>测试</Button>
      <Space>
        <is-github />
      </Space>
    </div>
  );
};

export default Footer;

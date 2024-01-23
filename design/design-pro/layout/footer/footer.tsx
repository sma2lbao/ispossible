import React from "react";
import stylex from "@stylexjs/stylex";
import { Space } from "@design/core";
import { colors } from "@design/core/theme";
import "@design/icon/github";
import "@design/icon/copyright";

export interface FooterProps {}

const styles = stylex.create({
  root: {
    backgroundColor: colors.backgroundInverse,
    color: colors.textInverse,
  },
});

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div>
      <div>
        made by sma2lbao | Copyright <is-copyright /> sma2lbao.github.io 2024.
      </div>
      <Space>
        <is-github />
      </Space>
    </div>
  );
};

export default Footer;

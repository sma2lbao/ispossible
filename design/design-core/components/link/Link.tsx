import React from "react";
import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";

export interface LinkProps {
  children?: React.ReactNode;
  /**
   * 字体颜色
   */
  color?: string;
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  href?: string;
  /**
   * 相当于 a 链接的 target 属性，href 存在时生效
   * @default _blank
   */
  target?: string;
}

const styles = stylex.create({
  root: (color?: string) => ({
    color: color ?? colors.link,
  }),
});

export const Link: React.FC<LinkProps> = (props) => {
  const { href, target = "_blank", children, color } = props;
  return (
    <a target={target} href={href} {...stylex.props(styles.root(color))}>
      {children}
    </a>
  );
};

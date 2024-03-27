import React from "react";
import stylex, { type StyleXStyles } from "@stylexjs/stylex";
import { colors, lineHeight, sizes } from "../theme/tokens.stylex";

export interface TypographyProps {
  children?: React.ReactNode;
  /**
   * 原生标签
   * @default "div"
   */
  tagName?: React.ElementType;
  /**
   * 样式
   */
  style?: StyleXStyles;
  /**
   * 文本类型
   */
  type?: "primary" | "secondary" | "success" | "warning" | "error";

  /**
   * 是否链接
   * @default false
   */
  link?: boolean;

  /**
   * 链接地址时有效
   */
  href?: string;
}

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const styles = stylex.create({
  root: (type: TypographyProps["type"]) => ({
    color: colors[type || "basic"],
    fontSize: sizes.basic,
    lineHeight: lineHeight.basic,
    margin: 0,
  }),
  link: {
    cursor: "pointer",
    color: colors.link,
  },
  h1: {
    fontSize: sizes.basic,
  },
  h2: {
    fontSize: sizes.basic,
  },
  h3: {
    fontSize: sizes.basic,
  },
  h4: {
    fontSize: sizes.basic,
  },
  h5: {
    fontSize: sizes.basic,
  },
  h6: {
    fontSize: sizes.basic,
  },
});

export const Typography: React.FC<TypographyProps> = (props) => {
  const { children, tagName, type, style, link = false, href } = props;
  const Tag = link ? "a" : tagName ?? "div";
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const tagValue = Tag.toString();
  const isHeadings = headings.includes(tagValue);

  return (
    <Tag
      {...stylex.props(
        styles.root(type),
        isHeadings && styles[tagValue as HeadingType],
        link && styles.link,
        style
      )}
      href={href}
    >
      {children}
    </Tag>
  );
};

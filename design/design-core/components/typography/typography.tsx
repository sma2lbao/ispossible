import React from "react";
import stylex from "@stylexjs/stylex";
import { colors, lineHeight, typography } from "../theme/tokens.stylex";

export interface TypographyProps {
  children?: React.ReactNode;
  /**
   * 原生标签
   * @default span
   */
  tagName?: React.ElementType;
  /**
   * class 名称
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 文本类型
   */
  type?: "primary" | "secondary" | "success" | "warning" | "danger";

  /**
   * 是否链接
   * @default false
   */
  link?: boolean;
}

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const styles = stylex.create({
  root: (type: TypographyProps["type"]) => ({
    color: colors[type || "text"],
    fontSize: typography.basic,
    lineHeight: lineHeight.basic,
  }),
  link: {
    cursor: "pointer",
    color: colors.link,
  },
  h1: {
    fontSize: typography.h1,
    lineHeight: lineHeight.h1,
  },
  h2: {
    fontSize: typography.h2,
    lineHeight: lineHeight.h2,
  },
  h3: {
    fontSize: typography.h3,
    lineHeight: lineHeight.h3,
  },
  h4: {
    fontSize: typography.h4,
    lineHeight: lineHeight.h4,
  },
  h5: {
    fontSize: typography.h5,
    lineHeight: lineHeight.h5,
  },
  h6: {
    fontSize: typography.h6,
    lineHeight: lineHeight.h6,
  },
});

export const Typography: React.FC<TypographyProps> = (props) => {
  const { children, tagName, type, style, className, link = false } = props;
  const Tag = tagName ?? "span";
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const tagValue = Tag.toString();
  const isHeadings = headings.includes(tagValue);

  return (
    <Tag
      className={className}
      style={style}
      {...stylex.props(
        styles.root(type),
        isHeadings && styles[tagValue as HeadingType],
        link && styles.link
      )}
    >
      {children}
    </Tag>
  );
};

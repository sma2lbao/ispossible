import { StyleXStyles } from "@stylexjs/stylex";
import React from "react";

export interface AnchorProps {
  /**
   * 数据化配置选项内容
   */
  items?: AnchorLinkProps[];
  /**
   * 距离窗口顶部达到指定偏移量后触发
   * @default 0
   * @type number
   */
  offsetTop?: number;
  /**
   * 指定滚动的容器
   */
  container?: HTMLElement;

  /**
   * 锚点样式（StyleXStyles）
   */
  stylex?: StyleXStyles;

  children?: React.ReactNode;
}

export interface AnchorLinkProps {
  /**
   * 跳转的链接
   */
  href: string;

  /**
   * 文字内容
   */
  label: string;

  /**
   * 子Link配置
   */
  items?: AnchorLinkProps[];

  /**
   * 锚点样式（StyleXStyles）
   */
  stylex?: StyleXStyles;

  children?: React.ReactNode;
}

export type OnClickLinkData = {
  href: string;

  domEvent: React.MouseEvent<HTMLAnchorElement>;
};

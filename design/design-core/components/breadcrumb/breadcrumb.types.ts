import { StyleXStyles } from "@stylexjs/stylex";

export interface BreadcrumbProps {
  /**
   * 分隔符自定义
   */
  separator?: React.ReactNode;

  children?: React.ReactNode;
}

export interface BreadcrumbItemProps {
  /**
   * 图标
   */
  icon?: React.ReactNode;

  /**
   * 跳转路径
   */
  path?: string;

  /**
   * 最大宽度
   */
  maxWidth?: number;

  children?: React.ReactNode;

  stylex?: StyleXStyles;

  /**
   * 点击事件
   * @returns
   */
  onClick?: () => void;
}

export interface BreadcrumbContextProps {}

import { StyleXStyles } from "@stylexjs/stylex";

export interface ListProps {
  /**
   * 是否启用加载工具
   */
  hasLoadMore?: boolean;

  /**
   * 是否处于加载中
   */
  loading?: boolean;

  /**
   * 是否已加载完成
   */
  finished?: boolean;

  /**
   * 是否加载失败
   */
  error?: boolean;

  header?: React.ReactNode;

  footer?: React.ReactNode;

  children?: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;

  /**
   * 加载数据回调
   * @returns
   */
  onLoad?: () => void;
}

export interface ListItemProps {
  children?: React.ReactNode;

  className?: string;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;
}

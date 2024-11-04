export interface DrawerProps {
  /**
   * 面板是否可见
   */
  visible?: boolean;

  /**
   * 面板的标题
   */
  title?: React.ReactNode;

  /**
   * 是否允许通过右上角的关闭按钮关闭
   */
  closable?: boolean;

  /**
   * 关闭按钮的 icon
   */
  closeIcon?: React.ReactNode;

  /**
   * 侧边栏底部
   */
  footer?: React.ReactNode;

  children?: React.ReactNode;

  /**
   * 侧边栏关闭之后的回调
   * @returns
   */
  onClosed?: () => void;
}

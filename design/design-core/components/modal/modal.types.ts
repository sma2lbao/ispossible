export interface ModalProps {
  /**
   * 对话框类型
   */
  type?: "info" | "warning" | "success" | "error" | "confirm";

  /**
   * 自定义图标
   */
  icon?: React.ReactNode;

  /**
   * 自定义图标颜色
   */
  iconColor?: string;

  /**
   * 确认按钮文字
   */
  confirmText?: string;

  /**
   * 取消按钮文字
   */
  cancelText?: string;

  /**
   * 对话框是否可见
   */
  visible?: boolean;

  /**
   * 是否显示右上角的关闭按钮
   */
  closable?: boolean;

  /**
   * 关闭按钮图标
   */
  closeIcon?: React.ReactNode;

  /**
   * 是否允许通过点击遮罩来关闭对话框
   */
  maskClosable?: boolean;

  /**
   * 对话框的标题
   */
  title?: React.ReactNode;

  /**
   * 对话框头部
   */
  header?: React.ReactNode;

  /**
   * 对话框底部
   */
  footer?: React.ReactNode;

  /**
   * 对话框内容
   */
  content?: React.ReactNode;

  children?: React.ReactNode;

  /**
   * 点击确认按钮时的回调函数，返回 Promise 时，确认按钮会出现 loading 态
   * @returns
   */
  onConfirm?: () => void | Promise<any>;

  /**
   * 取消对话框时的回调函数，返回 Promise 时，取消按钮会出现 loading 态
   * @returns
   */
  onCancel?: () => void | Promise<any>;

  /**
   * 关闭对话框后回调
   * @returns
   */
  onClosed?: () => void;
}

export type BuildModalOptions = Omit<ModalProps, "type" | "visible">;

export type BuildModalReturns = {
  destroy: () => void;
  update: (options: BuildModalOptions) => void;
};

export type BuildModalFunc = (
  type: ModalProps["type"],
  options: BuildModalOptions
) => BuildModalReturns;

export type BuiltInModalFunc = (
  options: BuildModalOptions
) => ReturnType<BuildModalFunc>;

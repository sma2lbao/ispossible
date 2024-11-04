export interface SwitchProps {
  /**
   * 指定当前是否选中
   */
  value?: boolean;
  /**
   * 变化时的回调函数
   */
  onChange?: (value: boolean) => void;
}

export interface IHotKeyProps {
  /**
   * 组合按键
   */
  hotKeys: KeyboardEvent["key"][];

  /**
   * 用于设置监听器挂载的DOM
   */
  selector?: HTMLElement | (() => HTMLElement | null);

  /**
   * 快捷键回调函数
   * @returns
   */
  onHotKeyPressed?: () => void;
}

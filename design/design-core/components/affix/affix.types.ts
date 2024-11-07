export interface AffixProps {
  /**
   * 距离窗口达到指定偏移量后触发
   * @default 0
   */
  offset?: number;

  /**
   * 到达那个窗口后发生偏移
   * @default top
   */
  direction?: "top" | "bottom";

  /**
   * 设置 Affix 需要监听其滚动事件的元素
   * @default window
   */
  target?: HTMLElement;

  children?: React.ReactNode;
}

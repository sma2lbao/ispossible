export interface TabsProps {
  /**
   * 当前激活 tab 面板的 key
   */
  activeKey?: string;

  /**
   * 标签栏样式
   * @default line
   */
  type?: "line";

  children?: React.ReactNode;

  /**
   * 单击事件
   * @param itemKey
   * @returns
   */
  onTabClick?: (itemKey: string) => void;

  /**
   * 切换面板的回调
   * @param activeId
   * @returns
   */
  onChange?: (activeKey: string) => void;
}

export interface TabPaneProps {
  /**
   * tab 页的 itemKey 值
   */
  itemKey?: string;

  /**
   * 标签页栏显示文字
   */
  tab: React.ReactNode;

  /**
   * 标签页栏 icon
   */
  icon?: React.ReactNode;

  /**
   * 标签页栏是否禁用
   */
  disabled?: boolean;

  /**
   * 允许关闭 tab
   */
  closable?: boolean;

  children?: React.ReactNode;
}

export interface TabsContextProps {
  activeKey: TabsProps["activeKey"];
}

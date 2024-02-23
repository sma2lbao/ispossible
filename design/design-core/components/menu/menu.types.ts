import React from "react";

export interface MenuProps {
  /**
   * 菜单内容
   */
  items: ItemProps[];
  /**
   * 菜单类型，现在支持垂直、水平、和内嵌模式三种
   */
  mode?: "x" | "y" | "inline";
  /**
   * 被选中时调用
   * @param id string[]
   * @returns
   */
  onSelect?: (id: string[]) => void;
}

export interface SubMenuProps {
  icon?: React.ReactNode;
  label: React.ReactNode;
  title?: string;
  disabled?: boolean;
  id: string;
  children?: (SubMenuProps | MenuItemProps)[];
}

export interface MenuItemProps {
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 菜单项文字
   */
  label: React.ReactNode;
  title?: string;
  /**
   * 唯一id
   */
  id: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}

export type ItemProps = MenuItemProps | SubMenuProps;

export function isSubMenuProps(menuItem: ItemProps): menuItem is SubMenuProps {
  return "children" in menuItem && !!menuItem.children?.length;
}

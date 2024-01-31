import React from "react";

export interface MenuProps {
  items: ItemProps[];
  mode?: "x" | "y" | "inline";
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
  icon?: React.ReactNode;
  label: React.ReactNode;
  title?: string;
  id: string;
  disabled?: boolean;
}

export type ItemProps = MenuItemProps | SubMenuProps;

export function isSubMenuProps(menuItem: ItemProps): menuItem is SubMenuProps {
  return "children" in menuItem && !!menuItem.children?.length;
}

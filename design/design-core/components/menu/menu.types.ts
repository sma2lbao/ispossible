import React from "react";

export type MenuItemType = {
  disabled?: boolean;
  icon?: React.ReactNode;
  key: string;
  label: React.ReactNode;
  title?: string;
};

export type SubMenuType = {
  children?: ItemType[];
  disabled?: boolean;
  icon?: React.ReactNode;
  key: string;
  label: string;
};

export type ItemType = MenuItemType | SubMenuType;

export interface MenuProps {
  items: ItemType[];
  mode?: "x" | "y" | "inline";
}

export function isSubMenuType(menuItem: ItemType): menuItem is SubMenuType {
  return "children" in menuItem;
}

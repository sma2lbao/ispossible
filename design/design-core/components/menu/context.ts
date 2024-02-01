import React from "react";
import { MenuProps } from "./menu.types";

export interface MenuContextProps {
  selectedIds?: string[];
  updateSelectedIds: (id: string) => void;
  mode: MenuProps["mode"];
}

export const MenuContext = React.createContext<MenuContextProps | null>(null);

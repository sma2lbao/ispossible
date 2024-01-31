import React from "react";

export interface MenuContextProps {
  selectedIds?: string[];
  updateSelectedIds: (id: string) => void;
}

export const MenuContext = React.createContext<MenuContextProps | null>(null);

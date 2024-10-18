import React from "react";
import { ItemKey, NavProps, OnNavItemClickData } from "./nav.types";
import { noop } from "../../shared";

export interface NavContextType {
  isCollapsed?: boolean;
  mode?: NavProps["mode"];
  selectedKeys: ItemKey[];
  firstLevel?: boolean;
  onNavItemClick: (data: OnNavItemClickData) => void;
}

export const NavContext = React.createContext<NavContextType>({
  isCollapsed: false,
  selectedKeys: [],
  onNavItemClick: noop,
});

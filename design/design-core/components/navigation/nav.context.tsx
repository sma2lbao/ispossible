import React from "react";
import { ItemKey, NavProps } from "./nav.types";

export interface NavContextType {
  isCollapsed?: boolean;
  mode?: NavProps["mode"];
  selectedKeys?: ItemKey[];
}

export const NavContext = React.createContext<NavContextType>({
  isCollapsed: false,
  selectedKeys: [],
});

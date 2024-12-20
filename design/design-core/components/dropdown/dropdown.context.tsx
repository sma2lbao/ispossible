import React from "react";
import { DropdownContextProps } from "./dropdown.types";
import { noop } from "../../shared";

export const DropdownContext = React.createContext<DropdownContextProps>({
  showTick: false,
  onClick: noop,
});

import React from "react";
import { noop } from "../../shared";
import { DropdownContextProps } from "./dropdown.types";

export const DropdownContext = React.createContext<DropdownContextProps>({
  showTick: false,
  onClick: noop,
});

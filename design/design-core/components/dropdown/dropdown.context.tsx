import React from "react";

export interface DropdownContextProps {
  showTick: boolean;
}

export const DropdownContext = React.createContext<DropdownContextProps>({
  showTick: false,
});

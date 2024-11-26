import React from "react";
import type { SelectContextProps } from "./select.types";

export const SelectContext = React.createContext<SelectContextProps | null>(
  null
);

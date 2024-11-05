import React from "react";
import type { CollapseContextProps } from "./collapse.types";

export const CollapseContext = React.createContext<CollapseContextProps | null>(
  null
);

import React from "react";
import type { LayoutContextProps } from "./layout.types";

export const LayoutContext = React.createContext<LayoutContextProps | null>(
  null
);

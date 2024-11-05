import React from "react";
import type { GridContextProps } from "./grid.types";

export const GridContext = React.createContext<GridContextProps | null>(null);

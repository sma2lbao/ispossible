import React from "react";
import type { TabsContextProps } from "./tabs.types";

export const TabsContext = React.createContext<TabsContextProps | null>(null);

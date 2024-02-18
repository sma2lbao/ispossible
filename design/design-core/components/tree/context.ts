import React from "react";

export interface TreeContextProps {
  foldIds: string[];
  updateFoldIds: (id: string) => void;
}

export const TreeContext = React.createContext<TreeContextProps | null>(null);

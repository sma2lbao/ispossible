import React from "react";
import { AnchorNodeBaseProps } from "./anchor-node";

export interface AnchorContextProps {
  activeNodeId?: string;
  handleClickNode?: (node: AnchorNodeBaseProps) => void;
}

export const AnchorContext = React.createContext<AnchorContextProps | null>(
  null
);

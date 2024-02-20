import React from "react";
import { AnchorNodeEventProps } from "./anchor";

export interface AnchorContextProps {
  activeNodeId?: string;
  handleClickNode?: (node: AnchorNodeEventProps) => void;
}

export const AnchorContext = React.createContext<AnchorContextProps | null>(
  null
);

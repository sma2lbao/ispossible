import React from "react";
import { OnClickLinkData } from "./anchor.types";

export interface AnchorContextProps {
  activeAnchor?: string;
  level: number;
  onClickLink?: (data: OnClickLinkData) => void;
  register?: (anchor: string) => void;
}

export const AnchorContext = React.createContext<AnchorContextProps>({
  level: 0,
});

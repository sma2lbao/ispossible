import React from "react";
import type { AvatarContextProps } from "./avatar.types";

export const AvatarContext = React.createContext<AvatarContextProps | null>(
  null
);

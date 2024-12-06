import React from "react";
import type { UploadContextProps } from "./upload.types";

export const UploadContext = React.createContext<
  UploadContextProps | undefined
>(undefined);

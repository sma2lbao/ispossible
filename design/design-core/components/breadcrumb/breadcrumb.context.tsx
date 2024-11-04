import React from "react";
import { BreadcrumbContextProps } from "./breadcrumb.types";

export const BreadcrumbContext =
  React.createContext<BreadcrumbContextProps | null>(null);

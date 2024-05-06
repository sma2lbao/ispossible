import React from "react";

export interface TableContextProps {
  bordered?: boolean;
}

export const TableContext = React.createContext<TableContextProps | null>(null);

export interface TableHeadContextProps {
  heading?: boolean;
}

export const TableHeadContext =
  React.createContext<TableHeadContextProps | null>(null);

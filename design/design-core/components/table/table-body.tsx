import React from "react";

export interface TableBodyProps {
  children?: React.ReactNode;
}

export const TableBody: React.FC<TableBodyProps> = (props) => {
  const { children } = props;

  return <tbody>{children}</tbody>;
};

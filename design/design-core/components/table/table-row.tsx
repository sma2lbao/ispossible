import React from "react";

export interface TableRowProps {
  children?: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = (props) => {
  const { children } = props;

  return <tr>{children}</tr>;
};

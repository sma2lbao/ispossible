import React from "react";

export interface TableHeadProps {
  children?: React.ReactNode;
}

export const TableHead: React.FC<TableHeadProps> = (props) => {
  const { children } = props;

  return <thead>{children}</thead>;
};

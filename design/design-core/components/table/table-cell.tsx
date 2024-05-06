import React, { useContext } from "react";
import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { TableContext } from "./context";

const styles = stylex.create({
  root: (align: string, width?: string | number) => ({
    width: width ?? "auto",
    display: "table-cell",
    textAlign: align,
    padding: 16,
    borderBottom: `1px solid rgba(224, 224, 224, 1)`,
    boxSizing: "border-box",
  }),
  border: {
    borderRight: `1px solid rgba(224, 224, 224, 1)`,
  },
});

export interface TableCellProps {
  children?: React.ReactNode;
  /**
   * 宽度
   */
  width?: string | number;
  /**
   * 是否为头部表格
   */
  heading?: boolean;
  /**
   * 设置列的对齐方式
   */
  align?: "left" | "center" | "right";
  /**
   * 表头列合并，设置为 0 时，不渲染
   */
  colSpan?: number;

  style?: StyleXStyles;
}

export const TableCell: React.FC<TableCellProps> = (props) => {
  const { children, width, heading = false, colSpan, align = "left" } = props;
  const context = useContext(TableContext);
  const Component = heading ? "th" : "td";

  return (
    <Component
      colSpan={colSpan}
      {...stylex.props(
        styles.root(align, width),
        context?.bordered && styles.border
      )}
    >
      {children}
    </Component>
  );
};

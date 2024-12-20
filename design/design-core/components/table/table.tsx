import stylex from "@stylexjs/stylex";
import React from "react";
import { TableContext } from "./context";
import { TableBody } from "./table-body";
import { TableCell } from "./table-cell";
import { TableHead } from "./table-head";
import { TableRow } from "./table-row";

export interface TableColumnType {
  title: React.ReactNode;
  field: string;
  width?: string | number;
  /**
   * 设置列的对齐方式
   */
  align?: "left" | "center" | "right";
  /**
   * 表头列合并，设置为 0 时，不渲染
   */
  colSpan?: number;
}

export interface TableProps {
  /**
   * 表格列的配置描述
   */
  columns: TableColumnType[];
  /**
   * 数据数组
   */
  dataSource: Record<string, any>[];
  /**
   * 是否展示外边框和列边框
   */
  bordered?: boolean;
}

const styles = stylex.create({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    borderSpacing: 0,
    boxSizing: "border-box",
    width: "100%",
    tableLayout: "fixed",
  },
  border: {
    borderTop: "1px solid rgba(224, 224, 224, 1)",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
  },
});

export const Table: React.FC<TableProps> = (props) => {
  const { dataSource, columns, bordered = false } = props;

  return (
    <div {...stylex.props(styles.root)}>
      <table {...stylex.props(styles.table, bordered && styles.border)}>
        <TableContext.Provider value={{ bordered }}>
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.field}
                  colSpan={column.colSpan}
                  align={column.align}
                  heading
                  width={column.width}
                >
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSource.map((item, index) => {
              return (
                <TableRow key={item.id || item.key || index}>
                  {columns?.map((column, index) => {
                    return (
                      <TableCell
                        key={column.field + "-" + index}
                        align={column.align}
                      >
                        {item[column.field]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </TableContext.Provider>
      </table>
    </div>
  );
};

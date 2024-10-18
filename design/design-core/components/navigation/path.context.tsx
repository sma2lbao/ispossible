import React from "react";
import type { ItemKey } from "./nav.types";

/**
 * 用来追踪每个SubNav的路径。
 * 只有SubNav才会产生分叉路径
 */
export const PathTrackerContext = React.createContext<ItemKey[]>([]);

/**
 * 获取完整路径
 * @param itemKey 当前的 NavItem 或 SubNav 的 itemKey
 * @returns
 */
export function useFullPath(itemKey?: ItemKey) {
  const parentPath = React.useContext(PathTrackerContext);

  return React.useMemo(() => {
    return itemKey !== undefined ? [...parentPath, itemKey] : parentPath;
  }, [parentPath, itemKey]);
}

export interface PathRegisterContextProps {
  register: (itemKey: ItemKey, path: ItemKey[]) => void;
  isSelectedSubNav: (
    selectedItemKeys: ItemKey[],
    subNavItemKey: ItemKey
  ) => boolean;
}

export const PathRegisterContext =
  React.createContext<PathRegisterContextProps | null>(null);

export function useMeasure() {
  return React.useContext(PathRegisterContext);
}

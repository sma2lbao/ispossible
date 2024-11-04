import { useState } from "react";
import { ItemKey } from "./nav.types";

export default function usePathRecords() {
  const [records, setRecords] = useState<Map<ItemKey, ItemKey[]>>(new Map());

  const register = (itemKey: ItemKey, path: ItemKey[]) => {
    records.set(itemKey, path);
    setRecords(records);
  };

  const isSelectedSubNav = (
    selectedItemKeys: ItemKey[],
    subNavItemKey: ItemKey
  ) => {
    return selectedItemKeys.some((selectedKey) => {
      return records.get(selectedKey)?.find((item) => item === subNavItemKey);
    });
  };

  return {
    register,
    isSelectedSubNav,
  };
}

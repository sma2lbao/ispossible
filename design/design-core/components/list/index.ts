import { List } from "./list";
import { ListItem } from "./list-item";

type ExportListType = typeof List & {
  Item: typeof ListItem;
};

const ExportList = List as ExportListType;

ExportList.Item = ListItem;

export { ExportList as List };

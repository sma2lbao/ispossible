import { Nav } from "./nav";
import { SubNav } from "./sub-nav";
import { NavItem } from "./nav-item";

export * from "./nav.types";

type NavType = typeof Nav & {
  Item: typeof NavItem;
  SubNav: typeof SubNav;
};

const ExportNav = Nav as NavType;

ExportNav.Item = NavItem;
ExportNav.SubNav = SubNav;

export { ExportNav as Nav };

export type {
  OnSelectData as OnSelectNavData,
  NavProps,
  ItemType as NavItemType,
} from "./nav.types";

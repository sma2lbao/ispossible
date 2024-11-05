"use client";

import { Collapse } from "./collapse";
import { CollapsePanel } from "./collapse-panel";

type ExportCollapseType = typeof Collapse & {
  Panel: typeof CollapsePanel;
};

const ExportCollapse = Collapse as ExportCollapseType;
ExportCollapse.Panel = CollapsePanel;

export { ExportCollapse as Collapse };

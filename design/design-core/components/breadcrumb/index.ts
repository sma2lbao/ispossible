"use client";

import { Breadcrumb } from "./breadcrumb";
import { BreadcrumbItem } from "./breadcrumb-item";

type ExportBreadcrumbType = typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
};

const ExportBreadcrumb = Breadcrumb as ExportBreadcrumbType;

ExportBreadcrumb.Item = BreadcrumbItem;

export { ExportBreadcrumb as Breadcrumb };

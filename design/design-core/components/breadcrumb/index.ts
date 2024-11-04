"use client";

import { Breadcrumb } from "./breadcrumb";
import { BreadcrumbItem } from "./breadcrumb-item";

type ExportBreadcrumb = typeof Breadcrumb & {
  Item: typeof BreadcrumbItem;
};

const ExportBreadcrumb = Breadcrumb as ExportBreadcrumb;

ExportBreadcrumb.Item = BreadcrumbItem;

export { ExportBreadcrumb as Breadcrumb };

"use client";
import { Anchor } from "./anchor";
import { AnchorLink } from "./anchor-link";

export * from "./anchor.types";

type AnchorType = typeof Anchor & {
  Link: typeof AnchorLink;
};

const ExportAnchor = Anchor as AnchorType;

ExportAnchor.Link = AnchorLink;

export { ExportAnchor as Anchor };

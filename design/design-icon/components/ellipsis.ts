"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-ellipsis",
  `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M176 511a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm280 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"/>
</svg>
`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-ellipsis": IsIcon;
    }
    interface IsIcon {}
  }
}
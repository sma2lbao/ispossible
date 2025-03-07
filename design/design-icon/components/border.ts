"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-border",
  `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"/>
</svg>
`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-border": IsIcon;
    }
    interface IsIcon {}
  }
}
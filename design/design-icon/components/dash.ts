"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-dash",
  `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"/>
</svg>
`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-dash": IsIcon;
    }
    interface IsIcon {}
  }
}
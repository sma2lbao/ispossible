"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-folder",
  `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M880 298.4H521L403.7 186.2a8.15 8.15 0 0 0-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"/>
</svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-folder": IsIcon;
    }
    interface IsIcon {}
  }
}
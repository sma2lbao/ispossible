"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-area-chart",
  `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-616-64h536c4.4 0 8-3.6 8-8V284c0-7.2-8.7-10.7-13.7-5.7L592 488.6l-125.4-124a8.03 8.03 0 0 0-11.3 0l-189 189.6a7.87 7.87 0 0 0-2.3 5.6V720c0 4.4 3.6 8 8 8z"/>
</svg>
`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-area-chart": IsIcon;
    }
    interface IsIcon {}
  }
}
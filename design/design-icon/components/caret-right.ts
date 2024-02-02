"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-caret-right",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M384 192v640l384-320.064z"/></svg>`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-caret-right": IsIcon;
    }
    interface IsIcon {}
  }
}
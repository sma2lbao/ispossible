"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-caret-top",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 320 192 704h639.936z"/></svg>`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-caret-top": IsIcon;
    }
    interface IsIcon {}
  }
}
"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-more",
  `<svg class="icon" width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#333" d="M456 231a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 280a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"/></svg>`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-more": IsIcon;
    }
    interface IsIcon {}
  }
}
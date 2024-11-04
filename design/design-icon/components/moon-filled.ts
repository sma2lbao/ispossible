"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-moon-filled",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fill-rule="evenodd"><path d="M489.493 111.658c30.658-1.792 45.991 36.44 22.59 56.329C457.831 214.095 426 281.423 426 354c0 134.757 109.243 244 244 244 72.577 0 139.905-31.832 186.014-86.084 19.868-23.377 58.064-8.102 56.332 22.53C900.4 745.823 725.141 912 512.5 912 291.31 912 112 732.69 112 511.5c0-211.39 164.287-386.024 374.198-399.649l.206-.013z"/></svg>`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-moon-filled": IsIcon;
    }
    interface IsIcon {}
  }
}
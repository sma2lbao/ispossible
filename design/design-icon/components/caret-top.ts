"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-caret-top",
  `<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 320 192 704h639.936z"/></svg> -->

<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M858.9 710.33333333L530.5 329.53333333c-9.4-10.9-27.5-10.9-37 0L165.1 710.33333333c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z" fill="currentColor"></path></svg>
`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-caret-top": IsIcon;
    }
    interface IsIcon {}
  }
}
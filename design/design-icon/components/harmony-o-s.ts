"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-harmony-o-s",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fillRule="evenodd"><g transform="translate(134 65)"><path d="M377.5 0C585.987 0 755 169.013 755 377.5S585.987 755 377.5 755 0 585.987 0 377.5 169.013 0 377.5 0m0 64C204.359 64 64 204.359 64 377.5S204.359 691 377.5 691 691 550.641 691 377.5 550.641 64 377.5 64"/><path d="M611 824 611 896 144 896 144 824z"/></g></svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-harmony-o-s": IsIcon;
    }
    interface IsIcon {}
  }
}
import { createWebIcon } from "./base";

createWebIcon(
  "is-caret-bottom",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m192 384 320 384 320-384z"/></svg>`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-caret-bottom": IsIcon;
    }
    interface IsIcon {}
  }
}
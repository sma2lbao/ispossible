"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-truck-filled",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fill-rule="evenodd"><path d="M608 192c17.673 0 32 14.327 32 32v160h174.815a32 32 0 0 1 26.676 14.327l113.186 170.846A32 32 0 0 1 960 586.846V672c0 17.673-14.327 32-32 32h-96c0 70.692-57.308 128-128 128-70.692 0-128-57.308-128-128H384c0 70.692-57.308 128-128 128-70.692 0-128-57.308-128-128H96c-17.673 0-32-14.327-32-32V224c0-17.673 14.327-32 32-32zM256 640c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64l1.058-.009C291.916 767.426 320 738.993 320 704c0-35.346-28.654-64-64-64m448 0c-35.346 0-64 28.654-64 64 0 35.346 28.654 64 64 64l1.058-.009C739.916 767.426 768 738.993 768 704c0-35.346-28.654-64-64-64m93.629-192H640v145.124C658.829 582.234 680.687 576 704 576c47.378 0 88.745 25.741 110.876 64H896v-43.516zM500 448H332c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h168c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12M308 320H204c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h104c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12"/></svg>`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-truck-filled": IsIcon;
    }
    interface IsIcon {}
  }
}
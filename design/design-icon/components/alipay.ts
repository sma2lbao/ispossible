"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-alipay",
  `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fillRule="evenodd">
  <path d="M557.208 129c3.69 0 6.715 2.952 6.715 6.648v114.55h243.802c3.742 0 6.636 3.111 6.649 6.847.013 23.918-6.052 54.683-19.855 54.683H563.936v81.1h166.189c7.684 0 13.803 6.515 13.245 14.186l-.114 1.506c-.693 90.203-30.622 180.642-79.52 259.653l8.719 3.815c77.295 33.478 162.142 60.85 267.142 64.14 11.758.373 20.925 10.294 20.38 22.067l-.203 3.95C956.441 821.72 939.781 895 879.932 895c-8.805 0-17.288-.55-25.48-1.61-78.043-9.254-156.284-57.05-236.322-110.267l-17.33-11.576-13.15-8.825c-21.444 21.146-44.82 40.396-69.989 57.25-6.193 4.013-12.734 7.703-19.573 11.076-65.509 39.18-142.208 62.608-227.418 62.62-118.203 0-204.921-77.972-206.644-175.9L64 714.815l.026-1.699c1.666-98.12 84.776-175.172 203.013-176.719l3.63-.023c102.924 0 186.663 33.532 270.481 73.137l.444.381 1.703-3.469c21.265-44.145 36.438-94.95 42.736-152.06l-324.798-.005a6.638 6.638 0 0 1-6.636-6.621c-.04-21.857 5.999-54.909 19.854-54.909h162.088v-81.1H191.93c-3.743 0-6.636-3.098-6.636-6.847-.014-22.615 6.052-54.683 19.854-54.683h231.393v-64.853l.029-1.985c.908-30.931 23.72-54.36 120.638-54.36M256.896 619c-74.766 0-136.529 39.934-137.877 95.601L119 715.86l.079 3.241a92.55 92.55 0 0 0 1.584 13.643C140.92 829.238 340.818 862.454 485 696.15l-8.031-4.72C405.949 650.109 332.94 619 256.896 619"/>
</svg>
`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-alipay": IsIcon;
    }
    interface IsIcon {}
  }
}
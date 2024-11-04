"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-step-backward-filled",
  `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <path d="M347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"/>
</svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-step-backward-filled": IsIcon;
    }
    interface IsIcon {}
  }
}
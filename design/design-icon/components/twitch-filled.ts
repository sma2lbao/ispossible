"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-twitch-filled",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1042 1042" fill="currentColor" fill-rule="evenodd"><defs><filter id="a" width="102.3%" height="102.3%" x="-1.2%" y="-1.2%" filterUnits="objectBoundingBox"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g filter="url(#a)" transform="translate(9 9)"><path d="M57.143 0 0 142.857v542.857h171.429V800h114.285L400 685.714h142.857l200-200V0zm314.286 428.571h-85.715V198.214h85.715zm200 0h-85.715V198.214h85.715z" transform="translate(128 112)"/></g></svg>`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-twitch-filled": IsIcon;
    }
    interface IsIcon {}
  }
}
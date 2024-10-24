"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-merge-filled",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" fill-rule="evenodd"><path d="M112 0c61.856 0 112 50.144 112 112 0 49.262-31.803 91.095-75.998 106.088L148 502.371l386.488-126.553.014-95.914C489.009 265.664 456 223.187 456 173c0-61.856 50.144-112 112-112s112 50.144 112 112c0 48.327-30.608 89.505-73.496 105.206l-.018 113.037c-.003 21.932-14.1 41.379-34.944 48.204L148 578.132l.002 27.78c43.64 14.805 75.197 55.78 75.983 104.236L224 712c0 61.856-50.144 112-112 112S0 773.856 0 712c0-49.262 31.804-91.096 75.999-106.088V218.088C31.804 203.096 0 161.262 0 112 0 50.144 50.144 0 112 0" transform="matrix(1 0 0 -1 172 924)"/></svg>`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-merge-filled": IsIcon;
    }
    interface IsIcon {}
  }
}
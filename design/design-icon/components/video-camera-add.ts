"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-video-camera-add",
  `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1569683915274" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14734" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M368 724H252V608c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v116H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h116v116c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V788h116c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" p-id="14735"></path><path d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v352h72V232h576v560H448v72h272c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7zM888 625l-104-59.8V458.9L888 399v226z" p-id="14736"></path><path d="M320 360c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h112z" p-id="14737"></path></svg>
`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-video-camera-add": IsIcon;
    }
    interface IsIcon {}
  }
}
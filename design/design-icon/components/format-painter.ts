"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-format-painter",
  `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1569683552617" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11173" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 0.6 0.1 1.3 0.2 1.9-0.1 2-0.2 4.1-0.2 6.1 0 46.4 37.6 84 84 84s84-37.6 84-84c0-2.1-0.1-4.1-0.2-6.1 0.1-0.6 0.2-1.2 0.2-1.9V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40zM720 352H208V160h512v192zM477 876c0 11-9 20-20 20s-20-9-20-20V696h40v180z" p-id="11174"></path></svg>
`
);

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "is-format-painter": IsIcon;
    }
    interface IsIcon {}
  }
}
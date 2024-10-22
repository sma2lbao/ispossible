import type { Preview } from "@storybook/react";
import React from "react";
import { MessageContainer } from "./blocks/message-container";
import { DocsContainer } from "./docs/docs-container";
import "./global.css";

import {
  Title,
  Subtitle,
  Description,
  ArgTypes,
  Stories,
} from "@storybook/blocks";

const preview: Preview = {
  globals: {},
  globalTypes: {
    locale: {
      description: "国际化语言环境",
      toolbar: {
        icon: "globe",
        items: [
          { value: "zh", right: "🇨🇳", title: "中文" },
          { value: "en", right: "🇺🇸", title: "English" },
        ],
      },
    },
  },
  initialGlobals: {
    locale: "zh",
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // toc: {
      //   // headingSelector: "h1, h2, h3",
      //   // ignoreSelector: "#primary",
      //   title: "目录",
      //   // disable: false,
      //   // unsafeTocbotOptions: {
      //   //   orderedList: false,
      //   // },
      // },
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Description />
      //     <Stories />
      //     <ArgTypes exclude={["children"]} />
      //     <MessageContainer />
      //   </>
      // ),
      page: DocsContainer,
    },
  },
};

export default preview;

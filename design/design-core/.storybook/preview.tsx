import type { Preview } from "@storybook/react";
import React from "react";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
  Stories,
} from "@storybook/blocks";

const preview: Preview = {
  globals: {},
  globalTypes: {},
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: false,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Stories />
          <h3>API</h3>
          <ArgTypes exclude={["children"]} />
        </>
      ),
    },
  },
};

export default preview;

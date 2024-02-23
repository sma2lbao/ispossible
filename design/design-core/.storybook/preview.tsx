import type { Preview } from "@storybook/react";
import React from "react";

import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgTypes,
  Controls,
  Stories,
} from "@storybook/blocks";

const preview: Preview = {
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
          <Stories />
          <h3>API</h3>
          <ArgTypes />
        </>
      ),
    },
  },
};

export default preview;

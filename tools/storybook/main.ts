import type { StorybookConfig } from "@storybook/web-components-webpack5";

import type { Options } from "@swc/core";
const config: StorybookConfig = {
  stories: [
    "../../src/**/*.mdx",
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {
      builder: {
        fsCache: false,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../../src/model"],
};
export default config;

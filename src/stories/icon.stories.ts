import { LitIcon } from "../../dist/lit-lib";

import type { IIconProperties } from "../elements/icon/icon";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Lit/Icon",
  render: (args) => new LitIcon(args),
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "The size of the icon",
    },
    icon: {
      control: { type: "select" },
      options: ["fa-cube", "fa-house", "fa-search"],
      description: "The icon symbol",
    },
  },
} satisfies Meta<IIconProperties>;

export default meta;

type Story = StoryObj<IIconProperties>;

export const Primary: Story = {
  args: {},
};

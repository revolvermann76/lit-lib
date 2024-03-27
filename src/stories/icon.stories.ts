import { Icon } from "../../dist/lit-lib";

import type { IIconProperties } from "../elements/icon/LitIcon";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Lit/Icon",
  render: (args) => new Icon(args),
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "small", "medium", "large", "xl", "xxl", "xxxl"],
      description: "The size of the icon",
    },
    icon: {
      control: { type: "select" },
      options: ["fa-cube", "fa-house", "fa-search"],
      description: "The icon symbol",
    },
    scaleFactor: {
      control: { type: "number", min: 0.5, max: 100, step: 0.1 },
      default: 1.0,
    },
  },
};

export default meta;

type Story = StoryObj<IIconProperties>;

export const Primary: Story = {
  args: {},
};

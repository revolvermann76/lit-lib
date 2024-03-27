import { Textfield } from "../../dist/lit-lib";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Lit/inputs/Textfield",
  render: (args) => new Textfield(),
};

export default meta;

type Story = StoryObj<{}>;

export const Primary: Story = {
  args: {},
};

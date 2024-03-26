import { LitTextfield } from "../../dist/lit-lib";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Lit/Textfield",
  render: (args) => new LitTextfield(),
};

export default meta;

type Story = StoryObj<{}>;

export const Primary: Story = {
  args: {},
};

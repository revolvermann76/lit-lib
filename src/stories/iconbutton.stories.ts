import { IconButton } from "../../dist/lit-lib";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Lit/buttons/IconButton",
  render: (args) => new IconButton(),
};

export default meta;

type Story = StoryObj<{}>;

export const Primary: Story = {
  args: {},
};

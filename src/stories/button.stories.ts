import { Button } from "../../dist/lit-lib";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Lit/buttons/Button",
  render: (args) => new Button(),
};

export default meta;

type Story = StoryObj<{}>;

export const Primary: Story = {
  args: {},
};

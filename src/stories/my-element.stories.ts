import { MyElement } from "../../dist/lit-lib";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta = {
  title: "Example/MyElement",
  render: (args) => new MyElement(),
};

export default meta;

type Story = StoryObj<{}>;

export const Primary: Story = {
  args: {},
};

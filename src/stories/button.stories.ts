import { Button } from "../../dist/lit-lib";
import { IButtonProperties } from "../elements/buttons/button/LitButton";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Lit/buttons/Button",
  render: (args) => new Button(),
} satisfies Meta<IButtonProperties>;

export default meta;

type Story = StoryObj<IButtonProperties>;

export const Primary: Story = {
  args: {},
};

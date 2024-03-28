import { Checkbox } from "../../dist/lit-lib";
import { ICheckboxProperties } from "../elements/inputs/checkbox/LitCheckbox";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Lit/inputs/Checkbox",
  render: (args) =>
    new Checkbox({
      label: "Whatever",
    }),
};

export default meta;

type Story = StoryObj<ICheckboxProperties>;

export const Primary: Story = {
  args: {},
};

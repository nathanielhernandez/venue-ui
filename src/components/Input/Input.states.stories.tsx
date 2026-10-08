import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  component: Input,
  title: "Components/Text Input/States",
  tags: ["!autodocs"],
  args: {
    label: "[Label]",
    placeholder: "[Placeholder]",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "text", required: false, disabled: false },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./TextInput";

const meta = {
  component: TextInput,
  title: "Components/Text Input/States",
  tags: ["!autodocs"],
  args: {
    label: "[Label]",
    placeholder: "[Placeholder]",
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "text", required: false, disabled: false },
};

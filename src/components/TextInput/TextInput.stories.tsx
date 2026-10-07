import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./TextInput";

const meta = {
  component: TextInput,
  title: "Components/Text Input",
  tags: ["autodocs"],
  args: {
    label: "[Label]",
    placeholder: "[Placeholder]",
    type: "text",
    required: false,
    error: false,
    errorMessage: "[Error message]",
    disabled: false,
    description: "",
  },
  argTypes: {
    type: { control: false },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

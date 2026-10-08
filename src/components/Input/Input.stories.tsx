import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  component: Input,
  title: "Components/Input",
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
    rounded: true,
  },
  argTypes: {
    type: { control: false },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

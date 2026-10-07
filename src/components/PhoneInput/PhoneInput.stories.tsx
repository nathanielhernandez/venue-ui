import type { Meta, StoryObj } from "@storybook/react-vite";
import { PhoneInput } from "./PhoneInput";

const meta = {
  component: PhoneInput,
  title: "Components/Phone Input",
  tags: ["autodocs"],
  args: {
    label: "[Label]",
    required: false,
    error: false,
    errorMessage: "[Error message]",
    disabled: false,
  },
  argTypes: {
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

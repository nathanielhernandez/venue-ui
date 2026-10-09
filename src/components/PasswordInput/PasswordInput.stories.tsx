import type { Meta, StoryObj } from "@storybook/react-vite";
import { PasswordInput } from "./PasswordInput";

const meta = {
  component: PasswordInput,
  title: "Components/PasswordInput",
  tags: ["autodocs"],
  args: {
    label: "Password",
    showPasswordObscureOption: true,
    placeholder: "",
    required: false,
    error: false,
    errorMessage: "Error message",
    disabled: false,
    description: "",
    rounded: true,
    size: "large",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

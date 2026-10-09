import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { PhoneInput } from "./PhoneInput";

const meta = {
  component: PhoneInput,
  title: "Components/PhoneInput",
  tags: ["autodocs"],
  args: {
    label: "Phone Number",
    placeholder: "(123) 123-1234",
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
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof PhoneInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ args, canvas, userEvent }) => {
    const input = canvas.getByRole("textbox", { name: "Label" });
    await expect(input).toHaveAttribute("type", "text");

    await userEvent.type(input, "hello");
    await expect(input).toHaveValue("hello");
    await expect(args.onChange).toHaveBeenCalledTimes(5);
  },
};

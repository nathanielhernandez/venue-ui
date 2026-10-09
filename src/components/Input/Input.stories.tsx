import type { Meta, StoryObj } from "@storybook/react-vite";
import { FaRocket } from "react-icons/fa";
import { expect } from "storybook/test";
import { Input } from "./Input";

const meta = {
  component: Input,
  title: "Components/Input",
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Placeholder",
    type: "text",
    required: false,
    error: false,
    errorMessage: "Error message",
    disabled: false,
    description: "",
    rounded: true,
    size: "large",
    iconPosition: "left",
  },
  argTypes: {
    type: { control: "select", options: ["text", "email", "tel", "url"] },
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    icon: {
      options: ["none", "rocket"],
      mapping: {
        none: undefined,
        rocket: <FaRocket />,
      },
      control: "select",
    },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Input>;

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

export const WithIcon: Story = {
  args: { icon: <FaRocket />, iconPosition: "left" },
};

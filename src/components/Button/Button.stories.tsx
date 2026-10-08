import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { Button } from "./Button";
import { FaRocket } from "react-icons/fa";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "large",
    rounded: true,
    icon: undefined,
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
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
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: "Button" });
    await expect(button).toHaveAttribute("type", "button");

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);

    // keyboard users reach it with Tab and activate it with Enter or Space
    button.blur();
    await userEvent.tab();
    await expect(button).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard(" ");
    await expect(args.onClick).toHaveBeenCalledTimes(3);
  },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary" },
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole("button", { name: "Button" });
    await expect(button).toBeDisabled();

    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

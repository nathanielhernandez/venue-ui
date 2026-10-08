import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn } from "storybook/test";
import { Button } from "./Button";
import { FaRocket } from "react-icons/fa";

const variants = ["primary", "secondary", "tertiary"] as const;

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "large",
    icon: "none",
    rounded: true,
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
  argTypes: { variant: { control: false } },
  play: async ({ args, canvas, userEvent }) => {
    const buttons = canvas.getAllByRole("button", { name: "Button" });

    for (const button of buttons) {
      await expect(button).toBeDisabled();
      await userEvent.click(button);
    }

    await expect(args.onClick).not.toHaveBeenCalled();
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "var(--venue-space-5)",
        alignItems: "center",
      }}
    >
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
};

export const Danger: Story = {
  args: { tone: "danger", children: "Delete" },
  argTypes: { variant: { control: false } },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "var(--venue-space-5)",
        alignItems: "center",
      }}
    >
      {variants.map((variant) => (
        <Button key={variant} {...args} variant={variant} />
      ))}
    </div>
  ),
};

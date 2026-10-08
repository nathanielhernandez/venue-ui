import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Tertiary: Story = {
  args: { variant: "tertiary" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "Delete" },
};

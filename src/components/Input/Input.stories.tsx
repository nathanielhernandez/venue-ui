import type { Meta, StoryObj } from "@storybook/react-vite";
import { FaRocket } from "react-icons/fa";
import { Input } from "./Input";

const meta = {
  component: Input,
  title: "Components/Input",
  tags: ["autodocs"],
  args: {
    label: "Label",
    hideLabel: false,
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
    errorMessage: {
      control: "text",
      if: { arg: "error" },
    },
    icon: {
      options: ["none", "rocket"],
      mapping: {
        none: undefined,
        rocket: <FaRocket />,
      },
      control: "select",
    },
    iconPosition: {
      control: "inline-radio",
      options: ["left", "right"],
      if: { arg: "icon" }, // only show when icon is set
    },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: { icon: <FaRocket /> },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "var(--venue-space-5)",
        alignItems: "center",
      }}
    >
      <Input {...args} />
      <Input {...args} iconPosition="right" />
    </div>
  ),
};

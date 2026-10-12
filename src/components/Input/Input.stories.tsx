import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { IconRocket } from "@tabler/icons-react";

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
    size: "medium",
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
    leadingVisual: {
      options: ["none", "rocket"],
      mapping: {
        none: undefined,
        rocket: <IconRocket />,
      },
      control: "select",
    },
    trailingVisual: {
      options: ["none", "rocket"],
      mapping: {
        none: undefined,
        rocket: <IconRocket />,
      },
      control: "select",
    },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: { leadingVisual: <IconRocket /> },
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "var(--venue-space-5)",
        alignItems: "center",
      }}
    >
      <Input {...args} />
      <Input
        {...args}
        leadingVisual={undefined}
        trailingVisual={<IconRocket />}
      />
    </div>
  ),
};

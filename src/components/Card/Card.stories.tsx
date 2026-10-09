import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Input } from "../Input";
import { PasswordInput } from "../PasswordInput";
import { Button } from "../Button";
import { EndSlot } from "./EndSlot";

const meta = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  args: {
    header: "Header",
    headerSize: "medium",
    children: "This is an example of a card with text in it.",
    endSlot: undefined,
    padding: "large",
  },
  argTypes: {
    headerSize: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    padding: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    endSlot: {
      options: ["none", "buttons"],
      mapping: {
        none: undefined,
        buttons: <EndSlot />,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Test: Story = {
  args: {
    header: "Login",
    endSlot: (
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "var(--venue-space-3)",
        }}
      >
        <Button variant="secondary" size="medium">
          Cancel
        </Button>
        <Button size="medium">Submit</Button>
      </div>
    ),
  },
  render: (args) => (
    <Card {...args} style={{ maxWidth: 400 }}>
      <Input label="Email" type="email" size="medium" />
      <PasswordInput label="Password" size="medium" />
    </Card>
  ),
};

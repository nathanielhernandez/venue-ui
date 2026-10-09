import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Input } from "../Input";
import { PasswordInput } from "../PasswordInput";
import { Button } from "../Button";

const meta = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  args: {
    header: "",
    padding: "large",
  },
  argTypes: {
    padding: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
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
          display: "inline-flex",
          justifyContent: "end",
          gap: "var(--venue-space-3)",
        }}
      >
        <Button variant="secondary">Cancel</Button>
        <Button>Submit</Button>
      </div>
    ),
  },
  render: (args) => (
    <Card {...args}>
      <Input label="Email" type="email" />
      <PasswordInput label="Password" />
    </Card>
  ),
};

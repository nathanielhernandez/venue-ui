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
    header: "Header",
    children: "This is an example of a card with text in it.",
    endSlot: "You can also add things to the end slot.",
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
          display: "flex",
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
    <Card {...args} style={{ maxWidth: 400 }}>
      <Input label="Email" type="email" />
      <PasswordInput label="Password" />
    </Card>
  ),
};

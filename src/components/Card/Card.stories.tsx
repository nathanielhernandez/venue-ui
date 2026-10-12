import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Input } from "../Input";
import { PasswordInput } from "../PasswordInput";
import { Button } from "../Button";
import { ExampleFooter } from "./ExampleFooter";
import { IconRocket } from "@tabler/icons-react";

const meta = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  args: {
    header: "Header",
    headerSize: "medium",
    leadingVisual: undefined,
    children:
      "lorem ipsum dolor sit amet consectetur adipiscing elit soluta cillum qui dolore vel ut quod cupiditate et esse labore cumque deserunt est quos laboris aliquip est voluptatum cupiditate est facilis et libero cum sunt non est exercitation soluta est commodo sit quas libero sint dolores veniam consequatur ut sunt duis",
    footer: undefined,
    padding: "medium",
  },
  argTypes: {
    header: { control: "text" },
    headerSize: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
    },
    leadingVisual: {
      options: ["none", "rocket"],
      mapping: {
        none: undefined,
        rocket: <IconRocket />,
      },
    },
    padding: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    footer: {
      options: ["none", "buttons"],
      mapping: {
        none: undefined,
        buttons: <ExampleFooter />,
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
    footer: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--venue-space-3)",
        }}
      >
        <Button size="medium" fullWidth>
          Log In
        </Button>
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

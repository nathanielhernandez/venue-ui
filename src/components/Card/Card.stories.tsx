import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  args: {
    header: "",
    padding: 4,
  },
  argTypes: {
    padding: { control: "select", options: [1, 2, 3, 4] },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

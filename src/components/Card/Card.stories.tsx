import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { Card } from "./Card";
import { ExampleFooter } from "./ExampleFooter";
import { IconRocket } from "@tabler/icons-react";

const meta = {
  component: Card,
  title: "Components/Card",
  tags: ["autodocs"],
  subcomponents: {
    "Card.Header": Card.Header,
    "Card.Icon": Card.Icon,
    "Card.Title": Card.Title,
    "Card.Body": Card.Body,
    "Card.Footer": Card.Footer,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
      </Card.Header>
      <Card.Body>This is an example of a card with text in it.</Card.Body>
    </Card>
  ),
};

// Story-only args that turn into Card parts in render
type PlaygroundArgs = ComponentProps<typeof Card> & {
  title: string;
  headerSize: "small" | "medium" | "large" | "xlarge";
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  showIcon: boolean;
  showFooter: boolean;
};

export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    title: "Card title",
    headerSize: "medium",
    headingLevel: 2,
    showIcon: false,
    showFooter: false,
    padding: "medium",
  },
  argTypes: {
    title: { control: "text", description: "Card.Title text" },
    headerSize: {
      control: "select",
      options: ["small", "medium", "large", "xlarge"],
      description: "Card.Header `size`",
    },
    headingLevel: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "Card.Title `headingLevel`",
    },
    showIcon: { description: "Render Card.Icon" },
    showFooter: { description: "Render Card.Footer" },
  },
  render: ({
    title,
    headerSize,
    headingLevel,
    showIcon,
    showFooter,
    ...args
  }) => (
    <Card {...args}>
      <Card.Header size={headerSize}>
        {showIcon && (
          <Card.Icon>
            <IconRocket />
          </Card.Icon>
        )}
        <Card.Title headingLevel={headingLevel}>{title}</Card.Title>
      </Card.Header>
      <Card.Body>This is an example of a card with text in it.</Card.Body>
      {showFooter && (
        <Card.Footer>
          <ExampleFooter />
        </Card.Footer>
      )}
    </Card>
  ),
};

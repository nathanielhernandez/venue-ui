import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
  component: Heading,
  title: "Components/Heading",
  tags: ["autodocs"],
  args: {
    children: "Heading",
    headingLevel: 2,
  },
  argTypes: {
    headingLevel: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    size: {
      control: "select",
      options: ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

const levels = [1, 2, 3, 4, 5, 6] as const;

export const AllHeadings: Story = {
  argTypes: { headingLevel: { control: false }, children: { control: false } },
  render: (args) => {
    return (
      <div
        style={{
          display: "flex",
          gap: "var(--venue-space-4)",
          flexDirection: "column",
        }}
      >
        {levels.map((level) => (
          <Heading key={level} {...args} headingLevel={level}>
            Heading {level}
          </Heading>
        ))}
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { ExampleFooter } from "./ExampleFooter";
import { IconRocket } from "@tabler/icons-react";

const meta = {
  component: Card,
  title: "Components/Card/Features",
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const sizes = ["small", "medium", "large", "xlarge"] as const;
const paddings = ["small", "medium", "large"] as const;

const stack = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--venue-space-5)",
} as const;

export const WithIcon: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Icon>
          <IconRocket />
        </Card.Icon>
        <Card.Title>Launch checklist</Card.Title>
      </Card.Header>
      <Card.Body>The icon is sized to match the title.</Card.Body>
    </Card>
  ),
};

export const HeaderSizes: Story = {
  render: (args) => (
    <div style={stack}>
      {sizes.map((size) => (
        <Card key={size} {...args}>
          <Card.Header size={size}>
            <Card.Icon>
              <IconRocket />
            </Card.Icon>
            <Card.Title>Header size {size}</Card.Title>
          </Card.Header>
          <Card.Body>
            Card.Header `size` sets the title and icon size.
          </Card.Body>
        </Card>
      ))}
    </div>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Delete project</Card.Title>
      </Card.Header>
      <Card.Body>This can't be undone.</Card.Body>
      <Card.Footer>
        <ExampleFooter />
      </Card.Footer>
    </Card>
  ),
};

export const WithoutHeader: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Body>A card can be just a body.</Card.Body>
    </Card>
  ),
};

export const Padding: Story = {
  render: (args) => (
    <div style={stack}>
      {paddings.map((padding) => (
        <Card key={padding} {...args} padding={padding}>
          <Card.Body>Padding {padding}</Card.Body>
        </Card>
      ))}
    </div>
  ),
};

export const HeadingLevel: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title headingLevel={3}>Rendered as an H3</Card.Title>
      </Card.Header>
      <Card.Body>
        Pick the level that fits the page outline; the size stays the same.
      </Card.Body>
    </Card>
  ),
};

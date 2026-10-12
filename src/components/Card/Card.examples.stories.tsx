import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Input } from "../Input";
import { PasswordInput } from "../PasswordInput";
import { Button } from "../Button";

const meta = {
  component: Card,
  title: "Components/Card/Examples",
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  render: (args) => (
    <Card {...args} style={{ maxWidth: 400 }}>
      <Card.Header>
        <Card.Title>Log in</Card.Title>
      </Card.Header>
      <Card.Body>
        <Input label="Email" type="email" autoComplete="email" />
        <PasswordInput label="Password" />
      </Card.Body>
      <Card.Footer>
        <Button fullWidth>Log in</Button>
      </Card.Footer>
    </Card>
  ),
};

const plans = [
  { name: "Starter", text: "For trying things out." },
  {
    name: "Team",
    text: "For small teams that need shared projects, roles, and more storage.",
  },
  { name: "Enterprise", text: "For larger organizations." },
];

/** Footers line up when cards in a row share a height */
export const PricingGrid: Story = {
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "var(--venue-space-5)",
      }}
    >
      {plans.map((plan) => (
        <Card key={plan.name} {...args}>
          <Card.Header size="small">
            <Card.Title>{plan.name}</Card.Title>
          </Card.Header>
          <Card.Body>{plan.text}</Card.Body>
          <Card.Footer>
            <Button variant="secondary" fullWidth>
              Choose {plan.name}
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  ),
};

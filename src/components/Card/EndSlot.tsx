import { Button } from "../Button";
export function EndSlot() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        gap: "var(--venue-space-4)",
      }}
    >
      <Button variant="secondary">Cancel</Button>
      <Button>Submit</Button>
    </div>
  );
}

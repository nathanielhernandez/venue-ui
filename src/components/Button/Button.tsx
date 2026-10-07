import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger";
  size?: "medium" | "large";
}

export function Button({
  variant = "primary",
  // size = "medium",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  const classes = [
    styles.root,
    variant === "danger" && styles.danger,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={classes} {...props} />;
}

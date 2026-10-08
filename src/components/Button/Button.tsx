import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "small" | "medium" | "large" | "xlarge";
  icon?: string;
}

export function Button({
  variant = "primary",
  size = "medium",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  const classes = [
    styles.root,
    styles[variant],
    styles[`${size}Button`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={classes} {...props} />;
}

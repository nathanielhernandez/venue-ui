import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large" | "xlarge";
  icon?: ReactNode;
  rounded?: boolean;
}

export function Button({
  variant = "primary",
  size = "large",
  type = "button",
  icon,
  rounded,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = [
    styles.root,
    styles[variant],
    styles[size],
    rounded && styles.rounded,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}

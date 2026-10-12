import type { ComponentPropsWithRef, ReactNode } from "react";
import styles from "./Button.module.css";

type BaseButtonProps = Omit<ComponentPropsWithRef<"button">, "children"> & {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "small" | "medium" | "large" | "xlarge";
  tone?: "neutral" | "danger";
  fullWidth?: boolean;
};

type TextButtonProps = BaseButtonProps & {
  children: ReactNode;
  leadingVisual?: ReactNode;
  trailingVisual?: ReactNode;
  icon?: never;
};

type IconButtonProps = BaseButtonProps & {
  children?: never;
  icon: ReactNode;
  "aria-label": string;
  leadingVisual?: never;
  trailingVisual?: never;
};

export type ButtonProps = TextButtonProps | IconButtonProps;

export function Button({
  variant = "primary",
  size = "medium",
  type = "button",
  fullWidth = false,
  icon,
  leadingVisual,
  trailingVisual,
  tone = "neutral",
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = [
    styles.root,
    styles[variant],
    styles[size],
    styles[tone],
    fullWidth && styles.fullWidth,
    icon && !children && styles.iconOnly,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const visual = (node: ReactNode) =>
    node && (
      <span className={styles.icon} aria-hidden="true">
        {node}
      </span>
    );

  return (
    <button type={type} className={classes} {...props}>
      {visual(icon ?? leadingVisual)}
      {children}
      {visual(trailingVisual)}
    </button>
  );
}

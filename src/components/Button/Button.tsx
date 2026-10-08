import type { ComponentPropsWithRef, ReactNode } from "react";
import styles from "./Button.module.css";

type BaseButtonProps = Omit<ComponentPropsWithRef<"button">, "children"> & {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large" | "xlarge";
  tone?: "neutral" | "danger";
  rounded?: boolean;
};

type TextButtonProps = BaseButtonProps & {
  children: ReactNode;
  icon?: ReactNode;
};

type IconButtonProps = BaseButtonProps & {
  children?: never;
  icon: ReactNode;
  "aria-label": string;
};

export type ButtonProps = TextButtonProps | IconButtonProps;

export function Button({
  variant = "primary",
  size = "large",
  type = "button",
  icon,
  rounded = true,
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
    rounded && styles.rounded,
    !children && styles.iconOnly,
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

import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: string;
  padding?: "small" | "medium" | "large" | "xlarge";
  endSlot?: ReactNode;
}

export function Card({
  header,
  children,
  endSlot,
  padding = "large",
  className,
  ...props
}: CardProps) {
  const cardClasses = [styles.root, styles[padding], className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cardClasses} {...props}>
      {header && <h2 className={styles.header}>{header}</h2>}
      {children}
      <div className={styles.endSlot}>{endSlot}</div>
    </div>
  );
}

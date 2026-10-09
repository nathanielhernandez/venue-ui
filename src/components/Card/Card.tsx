import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: string | ReactNode;
  headerSize?: "small" | "medium" | "large" | "xlarge";
  description?: string | ReactNode;
  padding?: "small" | "medium" | "large" | "xlarge";
  endSlot?: string | ReactNode;
}

export function Card({
  header,
  headerSize = "medium",
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
      {header && (
        <h2
          className={[styles.header, styles[headerSize + "Header"]].join(" ")}
        >
          {header}
        </h2>
      )}
      {children}
      {endSlot && <div className={styles.endSlot}>{endSlot}</div>}
    </div>
  );
}

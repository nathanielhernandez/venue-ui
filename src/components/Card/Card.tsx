import { type HTMLAttributes, type ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: string | ReactNode;
  headerSize?: "small" | "medium" | "large" | "xlarge";
  icon?: ReactNode;
  description?: string | ReactNode;
  padding?: "small" | "medium" | "large" | "xlarge";
  endSlot?: string | ReactNode;
}

export function Card({
  header,
  headerSize = "medium",
  icon,
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
      {(icon || header) && (
        <div
          className={[
            styles.headerContainer,
            styles[headerSize + "Header"],
          ].join(" ")}
        >
          {icon && (
            <span className={styles.icon} aria-hidden="true">
              {icon}
            </span>
          )}

          <h2
            className={[styles.header, styles[headerSize + "Header"]].join(" ")}
          >
            {header}
          </h2>
        </div>
      )}
      {children}
      {endSlot && <div className={styles.endSlot}>{endSlot}</div>}
    </div>
  );
}
